namespace $ {
	
	/** Registry of Pawns as domain entities. */
	export class $giper_baza_fund< Pawn > extends $mol_object {
		
		constructor(
			readonly item_make: ( head: $giper_baza_link )=> Pawn
		) { super() }
		
		@ $mol_mem_key
		Head( head: $giper_baza_link ) {
			return this.item_make( head )
		}
		
		Data() {
			return this.Head( $giper_baza_land_root.data )
		}
		
		Tine() {
			return this.Head( $giper_baza_land_root.tine )
		}
		
	}
	
}
