namespace $ {
	$mol_test({
		
		'gift unit type'() {
			
			const gift = $giper_baza_unit_gift.make()
			gift.rank( $giper_baza_rank_rule )
			
			$mol_assert_equal( gift.kind(), 'gift' )
			$mol_assert_equal( gift.rank(), $giper_baza_rank_rule )
			
		},
		
		'data unit type'() {
			
			const unit = $giper_baza_unit_sand.make( 2 )
			unit.ball( new Uint8Array([ 0xFF, 0xFF ]) )
			
			$mol_assert_equal( unit.kind(), 'sand' )
			$mol_assert_equal( unit.size(), 2 )
			$mol_assert_equal( unit.ball(), new Uint8Array([ 0xFF, 0xFF ]) )
			
		},
		
		'big data unit type'() {
			
			const unit = $giper_baza_unit_sand.make( 1000 )
			unit.ball( new Uint8Array( 1000 ) )
			
			$mol_assert_equal( unit.kind(), 'sand' )
			$mol_assert_equal( unit.size(), 1000 )
			$mol_assert_equal( unit.ball(), new Uint8Array( 1000 ) )
			
		},
		
		'gift unit fields'() {
			
			const unit = $giper_baza_unit_gift.make()
			
			$mol_assert_equal( unit.time(), 0 )
			$mol_assert_equal( unit.mate(), $giper_baza_link.hole )
			
			unit.time_tick( 0xd1d2d3d4d5d6 )
			unit.mate( new $giper_baza_link( 'ÆPv6æfj3_9vX08ÆLx' ) )
			
			$mol_assert_equal( unit.time_tick(), 0xd1d2d3d4d5d6 )
			$mol_assert_equal( unit.mate(), new $giper_baza_link( 'ÆPv6æfj3_9vX08ÆLx' ) )
			
		},
		
		'data unit fields'() {
			
			const unit = $giper_baza_unit_sand.make( 0 )
			
			$mol_assert_equal( unit.time(), 0 )
			$mol_assert_equal( unit.head(), $giper_baza_link.hole )
			$mol_assert_equal( unit.self(), $giper_baza_link.hole )
			$mol_assert_equal( unit.lead(), $giper_baza_link.hole )
			
			unit.time_tick( 0xd1d2d3d4d5d6 )
			unit.head( new $giper_baza_link( 'ÆPv6æfj3' ) )
			unit.self( new $giper_baza_link( 'Pv6æfj39' ) )
			unit.lead( new $giper_baza_link( 'v6æfj39v' ) )
			
			$mol_assert_equal( unit.time_tick(), 0xd1d2d3d4d5d6 )
			$mol_assert_equal( unit.head(), new $giper_baza_link( 'ÆPv6æfj3' ) )
			$mol_assert_equal( unit.self(), new $giper_baza_link( 'Pv6æfj39' ) )
			$mol_assert_equal( unit.lead(), new $giper_baza_link( 'v6æfj39v' ) )
			
		},
		
	})
}
