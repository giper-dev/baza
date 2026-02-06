namespace $ {
	
	const Passives = new WeakMap< $mol_rest_port, Set< string > >()
	
	/** Glob synchronizer */
	export class $giper_baza_yard extends $mol_object {
		
		/** Whole global graph database which contains Lands */
		@ $mol_mem
		glob() {
			return null! as $giper_baza_glob
		}
		
		lands_news = new $mol_wire_set< string >()
		
		@ $mol_mem
		static masters() {
			const all = this.$.$giper_baza_glob.Seed().peers()
			const self = this.$.$giper_baza_auth.current().pass().lord()
			const pos = all.findLastIndex( peer => peer.link().str === self.str )
			return all.slice( pos + 1 )
		}
		
		@ $mol_mem
		master_cursor( next = 0 ) {
			return next
		}
		
		@ $mol_mem
		master_current() {
			return this.$.$giper_baza_yard.masters()[ this.master_cursor() ]
		}
		
		@ $mol_action
		master_next() {
			this.master_cursor( ( this.master_cursor() + 1 ) % this.$.$giper_baza_yard.masters().length )
		}
		
		@ $mol_mem
		reconnects( reset?: null ): number {
			return ( $mol_wire_probe( ()=> this.reconnects() ) ?? 0 ) + 1
		}
		
		@ $mol_mem
		master() {
			
			this.reconnects()
			
			const peer = this.master_current()
			if( !peer ) return null
			
			const link = peer.urls()[0]
			if( !link ) return null
			
			const socket = new $mol_dom_context.WebSocket( link.replace( /^http/, 'ws' ) )
			socket.binaryType = 'arraybuffer'
			const port = $mol_rest_port_ws_std.make({ socket })
			
			socket.onmessage = async( event )=> {
				
				if( event.data instanceof ArrayBuffer ) {
					if( !event.data.byteLength ) return
					await $mol_wire_async( this ).port_income( port, new Uint8Array( event.data ) )
				} else {
					
					this.$.$mol_log3_fail({	
						place: this,
						message: 'Wrong data',
						data: event.data
					})
					
				}
				
			}
			
			let interval: any

			socket.onclose = ()=> {
				clearInterval( interval )
				setTimeout( ()=> this.reconnects( null ), 1000 )
			}
			
			Object.assign( socket, {
				destructor: ()=> {
					socket.onclose = ()=> {}
					clearInterval( interval )
					socket.close()
				}
			} )
			
			return new Promise< $mol_rest_port >( ( done, fail )=> {
				
				socket.onopen = ()=> {
					
					this.$.$mol_log3_come({
						place: this,
						message: 'Connected',
						port: $mol_key( port ),
						server: peer.link().str,
					})
					
					interval = setInterval( ()=> socket.send( new Uint8Array ), 30000 )
					
					done( port )
				}
				
				socket.onerror = ()=> {
					
					socket.onclose = event => {
						fail( new Error( `Master (${peer.link().str}) is unavailable (${ event.code })` ) )
						clearInterval( interval )
						interval = setTimeout( ()=> {
							this.master_next()
							this.reconnects( null )
						}, 1000 )
					}
					
				}
				
			} ) as any as $mol_rest_port
			
		}
		
		slaves = new $mol_wire_set< $mol_rest_port >()
		
		@ $mol_mem
		sync() {
			this.sync_news()
			this.sync_port()
		}
		
		@ $mol_mem
		sync_news() {
			
			const glob = this.$.$giper_baza_glob
			const lands = [ ... this.lands_news ].map( link => glob.Land( new $giper_baza_link( link ) ) )
			
			try {
				for( const port of this.masters() ) {
					for( const land of lands ) {
						this.sync_port_land([ port, land.link() ])
					}
				}
				for( const land of lands ) land.units_saving()
				this.lands_news.clear()
			} catch( error ) {
				$mol_fail_log( error )
			}
			
		}
		
		@ $mol_mem
		sync_port() {
			for( const port of this.ports() ) this.sync_port_lands( port )
		}
		
		@ $mol_mem_key
		sync_port_lands( port: $mol_rest_port ) {
			for( const land of this.port_lands_active( port ) ) {
				this.sync_port_land([ port, new $giper_baza_link( land ) ])
			}
		}
		
		@ $mol_mem
		ports() {
			return [ ... this.masters(), ... this.slaves ]
		}
		
		@ $mol_mem
		masters() {
			try {
				return [ this.master() ].filter( $mol_guard_defined )
			} catch( error ) {
				$mol_fail_log( error )
				return []
			}
		}
		
		@ $mol_mem_key
		port_lands_active( port: $mol_rest_port ) {
			return new $mol_wire_set< string >()
		}
		
		port_lands_passive( port: $mol_rest_port ) {
			let passives = Passives.get( port )
			if( !passives ) Passives.set( port, passives = new Set )
			return passives
		}
		
		@ $mol_action
		port_income( port: $mol_rest_port, msg: Uint8Array< ArrayBuffer > ) {
			
			const pack = $mol_wire_sync( $giper_baza_pack ).from( msg ) as $giper_baza_pack
			const parts =  $mol_wire_sync( pack ).parts()
			
			for( const [ land, part ] of parts ) {
					
				const Land = this.$.$giper_baza_glob.Land( new $giper_baza_link( land ) )
				
				forget: {
					
					if( part.units.length ) break forget
					if( part.faces.size ) break forget
					if( !this.port_lands_active( port ).has( land ) ) break forget
					
					this.port_lands_active( port ).delete( land )
					
					if( this.$.$giper_baza_log() ) $mol_wire_sync( this.$ ).$mol_log3_done({
						place: this,
						message: 'Take Free',
						port: $mol_key( port ),
						land: Land,
					})

					continue
				}
				
				this.face_port_sync( port, [[ land, part ]] )
				
				if( part.units.length ) {
					
					if( this.$.$giper_baza_log() ) $mol_wire_sync( this.$ ).$mol_log3_rise({
						place: this,
						message: 'Take Unit',
						port: $mol_key( port ),
						land: Land,
						units: part.units,
					})
					
					Land.diff_apply( part.units )
					
				} else {
					
					if( this.$.$giper_baza_log() ) $mol_wire_sync( this.$ ).$mol_log3_rise({
						place: this,
						message: 'Take Face',
						port: $mol_key( port ),
						land: Land,
						faces: part.faces,
					})
					
				}
				
			}
			
		}
		
		@ $mol_action
		face_port_sync(
			port: $mol_rest_port,
			income: $giper_baza_pack_parts, 
		) {
			
			const actives = this.port_lands_active( port )
			const passives = this.port_lands_passive( port )
			
			for( const [ land, part ] of income ) {
				const land_link = new $giper_baza_link( land )
				
				if( !passives.has( land ) ) actives.add( land )
				
				const faces = part.faces
				let port_faces = this.face_port_land([ port, land_link ])
				
				if( !port_faces ) this.face_port_land(
					[ port, land_link ],
					port_faces = $mol_mem_cached( ()=> this.face_port_land([ port, land_link ]) )
						|| new $giper_baza_face_map,
				)
				port_faces.sync( faces )
			
				for( let unit of part.units ) {
					if( unit instanceof $giper_baza_auth_pass ) continue
					port_faces.peer_time( unit.lord().peer().str, unit.time(), unit.tick() )
				}
				
			}
			
		}
		
		@ $mol_mem_key
		sync_land( land: $giper_baza_link ) {
			for( const port of this.masters() ) {
				this.port_lands_passive( port ).add( land.str )
				this.sync_port_land([ port, land ])
			}
			this.sync()
		}
		
		@ $mol_action
		forget_land( land: $giper_baza_land ) {
			
			const faces = new $giper_baza_face_map
			faces.stat = land.faces.stat.clone()
			
			const pack = $giper_baza_pack.make([[
				land.link().str,
				new $giper_baza_pack_part( [], faces )
			]]).asArray()
			
			for( const port of this.ports() ) {
				
				if( !this.port_lands_passive( port ).has( land.link().str ) ) continue
				this.port_lands_passive( port ).delete( land.link().str )
				
				if( this.$.$giper_baza_log() ) this.$.$mol_log3_done({
					place: this,
					message: 'Send Free',
					port: $mol_key( port ),
					land,
				})
				
				port.send_bin( pack )
				
			}
			
		}
		
		@ $mol_mem_key
		sync_port_land( [ port, land ]: [ $mol_rest_port, $giper_baza_link ] ) {
			
			try {
			
				this.init_port_land([ port, land ])
				
				const faces = this.face_port_land([ port, land ])
				if( !faces ) return
				
				const Land = this.$.$giper_baza_glob.Land( land )
				Land.units_saving()
				
				const units = Land.diff_units( faces )
				if( !units.length ) return
				
				if( this.$.$giper_baza_log() ) this.$.$mol_log3_rise({
					place: this,
					message: 'Send Unit',
					port: $mol_key( port ),
					land: Land,
					units,
				})
				
				const pack = $giper_baza_pack.make([[
					Land.link().str,
					new $giper_baza_pack_part( units )
				]])
				
				port.send_bin( pack.asArray() )
				faces.sync( Land.faces )
			
			} catch( error ) {
				$mol_fail_log( error )
			}
			
		}
		
		@ $mol_mem_key
		init_port_land( [ port, land ]: [ $mol_rest_port, $giper_baza_link ] ) {
			// $mol_wire_solid() 
			const Land = this.$.$giper_baza_glob.Land( land )
			Land.loading()
			if( this.$.$giper_baza_log() ) this.$.$mol_log3_come({
				place: this,
				message: 'Send Face',
				port: $mol_key( port ),
				land: Land,
				faces: Land.faces,
			})
			port.send_bin( Land.face_pack().asArray() )
		}
		
		@ $mol_mem_key
		face_port_land(
			[ port, land ]: [ $mol_rest_port, $giper_baza_link ],
			next = null as null | $giper_baza_face_map
		) {
			$mol_wire_solid()
			return next
		}
		
	}
}
