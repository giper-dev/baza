namespace $.$$ {
	export class $giper_baza_app_stat_page extends $.$giper_baza_app_stat_page {
		
		@ $mol_mem
		stat() {
			return this.home()?.stat() ?? null
		}
		
		@ $mol_mem
		uptime() {
			
			const stat = this.stat()
			if( !stat ) return '🔴'
			
			if( ( stat.freshness() ?? Number.POSITIVE_INFINITY ) < 5 ) {
				
				const uptime = this.stat()?.uptime().toString( '#Y #D hh:mm:ss' )
				return `🟢 ${uptime}`
				
			} else {
				
				const last = stat.last_change()
				if( !last ) return '🔴'
				
				const range = new $mol_time_interval({
					start: last,
					end: new $mol_time_moment,
				})
				
				const downtime = range.duration.normal.toString( '#Y #D hh:mm:ss' )
				return `🔴 ${downtime}`
				
			}
			
		}
		
		@ $mol_mem
		cpu_user() {
			return this.stat()?.Cpu_user()?.series() ?? []
		}
		
		@ $mol_mem
		cpu_system() {
			return this.stat()?.Cpu_system()?.series() ?? []
		}
		
		@ $mol_mem
		mem_used() {
			return this.stat()?.Mem_used()?.series() ?? []
		}
		
		@ $mol_mem
		mem_free() {
			return this.stat()?.Mem_free()?.series() ?? []
		}
		
		@ $mol_mem
		fs_used() {
			return this.stat()?.Fs_used()?.series() ?? []
		}
		
		@ $mol_mem
		fs_free() {
			return this.stat()?.Fs_free()?.series() ?? []
		}
		
		@ $mol_mem
		land_alive() {
			return this.stat()?.Land_alive()?.series() ?? []
		}
		
		@ $mol_mem
		land_ghost() {
			return this.stat()?.Land_ghost()?.series() ?? []
		}
		
		@ $mol_mem
		fs_reads() {
			return this.stat()?.Fs_reads()?.series() ?? []
		}
		
		@ $mol_mem
		fs_writes() {
			return this.stat()?.Fs_writes()?.series() ?? []
		}
		
		@ $mol_mem
		port_slaves() {
			return this.stat()?.Port_slaves()?.series() ?? []
		}
		
		@ $mol_mem
		port_masters() {
			return this.stat()?.Port_masters()?.series() ?? []
		}
		
		@ $mol_mem
		errors() {
			return this.stat()?.Errors()?.series() ?? []
		}
		
		@ $mol_mem
		times() {
			const times = [] as string[]
			for( let i = 1; i < 59; ++i ) times.push( `${i} secs ago` )
			for( let i = 1; i < 59; ++i ) times.push( `${i} mins ago` )
			for( let i = 1; i < 23; ++i ) times.push( `${i} hours ago` )
			for( let i = 1; i < 31; ++i ) times.push( `${i} days ago` )
			for( let i = 1; i < 12; ++i ) times.push( `${i} months ago` )
			return times
		}
		
	}
}
