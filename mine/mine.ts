namespace $ {
	
	export type $giper_baza_mine_diff = { ins: readonly $giper_baza_unit[], del: readonly $giper_baza_unit[] }
	
	export class $giper_baza_mine_temp extends $mol_object {
		
		@ $mol_mem_key
		static land( land: $giper_baza_link ) {
			return this.make({
				land: $mol_const( land )
			})
		}
		
		land() {
			return $giper_baza_link.hole
		}
		
		unit_deletes = 0
		unit_inserts = 0
		
		ball_inserts = 0
		ball_deletes = 0
		
		units_persisted = new WeakSet< $giper_baza_unit >()
		
		/** Updates Units in storage */
		units_save( diff: $giper_baza_mine_diff ): void {}
		
		/** Loads Units from storage */
		units_load(): readonly $giper_baza_unit[] {
			return []
		}
		
		/** Loads Ball from storage */
		ball_load( sand: $giper_baza_unit_sand ): Uint8Array< ArrayBuffer > {
			return null!
		}
		
	}
	
	export let $giper_baza_mine = $giper_baza_mine_temp
}
