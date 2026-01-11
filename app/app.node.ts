namespace $ {
	
	export class $giper_baza_app_node extends $mol_rest_resource_fs {
		
		@ $mol_mem
		_yard() {
			$mol_wire_solid()
			setTimeout( ()=> this._sync() )
			return this.$.$giper_baza_glob.yard()
		}
		
		@ $mol_mem
		_sync() {
			$mol_wire_solid()
			this._yard().sync()
		}
		
		@ $mol_memo.method
		link() {
			return new $giper_baza_app_node_link
		}
		
		OPEN( msg: $mol_rest_message ) {
			this._yard().slaves.add( msg.port )
		}
		
		POST( msg: $mol_rest_message ) {
			this._yard().port_income( msg.port, msg.bin() )
		}
		
		CLOSE( msg: $mol_rest_message ) {
			this._yard().slaves.delete( msg.port )
		}
		
		_auto() {
			this._stat_update()
		}
		
		@ $mol_mem
		_home() {
			return this.$.$giper_baza_glob.home( $giper_baza_app_home )
		}
		
		@ $mol_mem
		_stat_update() {
			
			const home = this._home()
			home.init()
			home.tick()
			
			const stat = home.stat( null )!
			stat.tick()
			
		}
		
	}
	
	export class $giper_baza_app_node_link extends $mol_rest_resource {
		
		GET( msg: $mol_rest_message ) {
			msg.reply( this.$.$giper_baza_auth.current().pass().lord().str )
		}
		
	}
	
}
