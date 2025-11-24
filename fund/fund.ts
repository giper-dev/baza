namespace $ {
	
	/** Registry of nodes as domain entities. */
	export class $giper_baza_fund< Node > extends $mol_object {
		
		constructor(
			readonly item_make: ( head: $giper_baza_link )=> Node
		) { super() }
		
		@ $mol_mem_key
		Item( head: $giper_baza_link ) {
			return this.item_make( head )
		}
		
		Data() {
			return this.Item( $giper_baza_land_root.data )
		}
		
		Tine() {
			return this.Item( $giper_baza_land_root.tine )
		}
		
	}
	
}
