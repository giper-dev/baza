namespace $ {
	
	export class $giper_baza_app_stat extends $giper_baza_dict.with({
		
		Uptime: $giper_baza_atom_dura,
		
		/** User time in secs */
		Cpu_user: $giper_baza_stat_ranges,
		/** System time in secs */
		Cpu_system: $giper_baza_stat_ranges,
		
		/** Memory in MB */
		Mem_used: $giper_baza_stat_ranges,
		/** Memory in MB */
		Mem_free: $giper_baza_stat_ranges,
		
		/** FS free */
		Fs_free: $giper_baza_stat_ranges,
		
		/** FS read count */
		Fs_reads: $giper_baza_stat_ranges,
		/** FS write count */
		Fs_writes: $giper_baza_stat_ranges,
		
		/** Slave sockets count */
		Port_slaves: $giper_baza_stat_ranges,
		/** Masters sockets count */
		Port_masters: $giper_baza_stat_ranges,
		
		/** Active lands count */
		Land_active: $giper_baza_stat_ranges,
		
	}) {

		@ $mol_mem
		freshness() {
			
			const last = this.last_change()
			if( !last ) return null
			
			const range = new $mol_time_interval({
				start: last,
				end: new $mol_time_moment( this.$.$mol_state_time.now( 1000 ) ),
			})
			
			return range.duration.count( 'PT1s' )
		}
		
		@ $mol_mem
		uptime( next?: $mol_time_duration ) {
			return this.Uptime( next )?.val( next ) ?? new $mol_time_duration( 0 )
		}
		
		@ $mol_mem
		tick() {
			
			if( this.$.$giper_baza_log() ) {
				this.$.$mol_log3_warn({
					place: this,
					message: 'Stat disabled due logging',
					hint: 'Disable $giper_baza_log to start monitoring'
				})
				return
			}
			
			this.$.$mol_state_time.now( 1000 )
			
			this.uptime( new $mol_time_duration({ second: Math.floor( process.uptime() ) }).normal )
			
			const res = process.resourceUsage()
			this.Cpu_user( null )!.tick_integral( Math.ceil( res.userCPUTime / 1e4 ) ) // %
			this.Cpu_system( null )!.tick_integral( Math.ceil( res.systemCPUTime / 1e4 ) ) // %
			this.Fs_reads( null )!.tick_integral( res.fsRead ) // pct
			this.Fs_writes( null )!.tick_integral( res.fsWrite ) // pct
			
			const mem_total = $node.os.totalmem()
			this.Mem_used( null )!.tick_instant( Math.ceil( ( res.maxRSS - res.sharedMemorySize ) * 1024 / mem_total * 100 ) ) // %
			this.Mem_free( null )!.tick_instant( Math.floor( $node.os.freemem() / mem_total * 100 ) ) // %
			
			const fs = $node.fs.statfsSync( '.' )
			this.Fs_free( null )!.tick_instant( Math.floor( Number( fs.bfree ) / Number( fs.blocks ) * 100 ) ) // %
			
			const yard = $mol_wire_sync( this.$.$giper_baza_glob.yard() )
			const masters = yard.masters().length
			this.Port_masters( null )!.tick_instant( masters ) // pct
			
			const ports = yard.ports()
			this.Port_slaves( null )!.tick_instant( ports.length - masters ) // pct
			
			const lands = ports.reduce( ( sum, port )=> sum + yard.port_lands_active( port ).size, 0 )
			this.Land_active( null )!.tick_instant( lands ) // pct
			
		}
		
	}
	
}
