namespace $ {
	
	export class $giper_baza_app_home extends $giper_baza_flex_peer {
		
		@ $mol_mem
		init() {
			this.meta( $giper_baza_flex_peer.meta )
			console.log( this.meta() )
		}
		
		tick() {
			this.init()
			this.stat( null )!.tick()
		}
		
	}
	
}
