namespace $.$$ {
	export class $giper_baza_app_stat_list extends $.$giper_baza_app_stat_list {
		
		@ $mol_mem
		self_link() {
			try {
				
				const url = this.$.$giper_baza_glob.yard().master_current()
				if( !url ) return null
				
				const id =  this.$.$mol_fetch.text( url + 'link' )
				return new $giper_baza_link( id )
				
			} catch( error ) {
				
				$mol_fail_log( error )
				return null
				
			}
		}
		
		@ $mol_mem
		spread_ids() {
			return [
				... $mol_maybe( this.self_link()?.str ),
				... this.$.$giper_baza_glob.Seed().peers().map( peer => peer.link().str ),
			]
		}
		
		@ $mol_mem_key
		peer_home( id: string ) {
			return this.$.$giper_baza_glob.Pawn( new $giper_baza_link( id ), $giper_baza_app_home )
		}
		
		@ $mol_mem_key
		peer_uri( id: string ) {
			return this.peer_urls( id )[0] ?? ''
		}
		
	}
}
