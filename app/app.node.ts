namespace $ {
	
	export class $giper_baza_app_node extends $mol_rest_resource_fs {
		
		@ $mol_memo.method
		link() {
			return new $giper_baza_app_node_link
		}
		
		OPEN( msg: $mol_rest_message ) {
			this.$.$giper_baza_glob.yard().slaves.add( msg.port )
		}
		
		POST( msg: $mol_rest_message ) {
			this.$.$giper_baza_glob.yard().port_income( msg.port, msg.bin() )
		}
		
		CLOSE( msg: $mol_rest_message ) {
			this.$.$giper_baza_glob.yard().slaves.delete( msg.port )
		}
		
		_auto() {
			this._stat_update()
			this.$.$giper_baza_glob.yard().sync()
		}
		
		@ $mol_mem
		_home() {
			return this.$.$giper_baza_glob.home( $giper_baza_app_home )
		}
		
		@ $mol_mem
		_stat_update() {
			this._home().tick()
		}
		
	}
	
	export class $giper_baza_app_node_link extends $mol_rest_resource {
		
		GET( msg: $mol_rest_message ) {
			msg.reply( this.$.$giper_baza_auth.current().pass().lord().str )
		}
		
	}
	
}
