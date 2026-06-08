namespace $ {

	export class $giper_baza_app_node extends $mol_rest_resource_fs {

		@ $mol_memo.method
		link() {
			return new $giper_baza_app_node_link
		}

		_protocols = [ '$giper_baza_yard' ]

		GET( msg: $mol_rest_message ) {

			let id: string | undefined
			try {
				id = $giper_baza_file_query.parse( msg.uri().search ).file[ '=' ]?.[0][0]
			} catch {}

			if( !id ) return super.GET( msg )

			const link = new $giper_baza_link( id )
			const file = this.$.$giper_baza_glob.Pawn( link, $giper_baza_file )

			msg.port.send_code( file.filled() ? 200 : 404 )
			msg.port.send_type( file.type() as $mol_rest_port_mime )
			msg.port.send_bin( file.buffer() )

		}

		OPEN( msg: $mol_rest_message ) {
			
			const protocol = super.OPEN( msg )
			if( !protocol ) return ''
			
			this.$.$giper_baza_glob.yard().slaves.add( msg.port )
			return protocol
			
		}
		
		POST( msg: $mol_rest_message ) {
			this.$.$giper_baza_glob.yard().port_income( msg.port, msg.bin() )
		}
		
		CLOSE( msg: $mol_rest_message ) {
			this.$.$giper_baza_glob.yard().slaves.delete( msg.port )
			super.CLOSE( msg )
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
