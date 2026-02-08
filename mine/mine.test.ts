namespace $ {
	$mol_test_mocks.push( $=> {
		class $giper_baza_mine_mock extends $.$giper_baza_mine_temp {
			
			/** Updates Units in storage */
			override units_save( diff: $giper_baza_mine_diff ) {}
			
			/** Loads Units from storage */
			override units_load() {
				return [] as $giper_baza_unit_base[]
			}
			
			/** Loads Ball from storage */
			override ball_load( sand: $giper_baza_unit_sand ): Uint8Array< ArrayBuffer > {
				return null!
			}
			
		}
		$.$giper_baza_mine = $giper_baza_mine_mock
	} )
}
