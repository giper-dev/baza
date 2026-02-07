namespace $ {
	
	export class $giper_baza_app_home_node extends $giper_baza_app_home {
		
		@ $mol_mem
		init() {
			
			super.init()
			
			if( process.env.GIPER_BAZA_ADMIN ) {
				const pass = $giper_baza_auth_pass.from( process.env.GIPER_BAZA_ADMIN )
				this.land().give( pass, $giper_baza_rank_rule )
			}
			
			const host = process.env.DOMAIN || $node.os.hostname()
			
			this.name( host )
			this.urls([ `https://${host}/` ])
			
		}
		
	}
	
	$.$giper_baza_app_home = $giper_baza_app_home_node
	
}
