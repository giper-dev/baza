namespace $ {
	$mol_test({
		
		'Change sequences'( $ ) {
			
			const land = $giper_baza_land.make({ $ })
			const text = land.Data( $giper_baza_text )
			const list = land.Data( $giper_baza_list_vary )
			$mol_assert_equal( text.str(), '' )
			$mol_assert_equal( list.items_vary(), [] )
			
			text.str( 'foo' )
			$mol_assert_equal( text.str(), 'foo' )
			$mol_assert_equal( list.items_vary(), [ 'foo' ] )
			
			text.str( 'foo bar' )
			$mol_assert_equal( text.str(), 'foo bar' )
			$mol_assert_equal( list.items_vary(), [ 'foo', ' bar' ] )
			
			text.str( 'foo lol bar' )
			$mol_assert_equal( text.str(), 'foo lol bar' )
			$mol_assert_equal( list.items_vary(), [ 'foo', ' lol', ' bar' ] )
			
			text.str( 'lol bar' )
			$mol_assert_equal( text.str(), 'lol bar' )
			$mol_assert_equal( list.items_vary(), [ 'lol', ' bar' ] )
			
			text.str( 'foo bar' )
			$mol_assert_equal( text.str(), 'foo bar' )
			$mol_assert_equal( list.items_vary(), [ 'foo', ' bar' ] )
			
			text.str( 'foo  bar' )
			$mol_assert_equal( text.str(), 'foo  bar' )
			$mol_assert_equal( list.items_vary(), [ 'foo', ' ', ' bar' ] )
			
			text.str( 'foo  BarBar' )
			$mol_assert_equal( text.str(), 'foo  BarBar' )
			$mol_assert_equal( list.items_vary(), [ 'foo', ' ', ' Bar', 'Bar' ] )
			
		},
		
		async 'str: Offset <=> Point'( $ ) {
			
			const land = $giper_baza_land.make({ $ })
			const text = land.Data( $giper_baza_text )
			
			text.str( 'fooBar' )
			const [ first, second ] = text.units()
			
			$mol_assert_equal( text.point_by_offset( 0 ), [ first.self(), 0 ] )
			$mol_assert_equal( text.offset_by_point([ first.self(), 0 ]), [ first.self(), 0 ] )
			
			$mol_assert_equal( text.point_by_offset( 3 ), [ first.self(), 3 ] )
			$mol_assert_equal( text.offset_by_point([ first.self(), 3 ]), [ first.self(), 3 ] )
			$mol_assert_equal( text.offset_by_point([ first.self(), 5 ]), [ first.self(), 5 ] )
			
			$mol_assert_equal( text.point_by_offset( 5 ), [ second.self(), 2 ] )
			$mol_assert_equal( text.offset_by_point([ second.self(), 2 ]), [ second.self(), 5 ] )
			
			$mol_assert_equal( text.point_by_offset( 6 ), [ second.self(), 3 ] )
			$mol_assert_equal( text.offset_by_point([ second.self(), 3 ]), [ second.self(), 6 ] )
			
			$mol_assert_equal( text.point_by_offset( 7 ), [ $giper_baza_link.hole, 1 ] )
			$mol_assert_equal( text.offset_by_point([ $giper_baza_link.hole, 1 ]), [ $giper_baza_link.hole, 7 ] )
			
		},

		async 'text: Offset <=> Point'( $ ) {
			
			const land = $giper_baza_land.make({ $ })
			const text = land.Data( $giper_baza_text )
			
			text.text( 'foo bar\n666 777' )
			const [ first, second ] = text.pawns( $giper_baza_text )
			
			$mol_assert_equal( text.point_by_offset( 0 ), [ first.units()[0].self(), 0 ] )
			$mol_assert_equal( text.offset_by_point([ first.units()[0].self(), 0 ]), [ first.units()[0].self(), 0 ] )
			
			$mol_assert_equal( text.point_by_offset( 8 ), [ first.units()[2].self(), 1 ] )
			$mol_assert_equal( text.offset_by_point([ first.units()[2].self(), 1 ]), [ first.units()[2].self(), 8 ] )
			
		},

		async 'Merge different sequences'( $ ) {
			
			const land1 = $giper_baza_land.make({ $ })
			const land2 = $giper_baza_land.make({ $ })
			
			const text1 = land1.Pawn( $giper_baza_text ).Data()
			const text2 = land2.Pawn( $giper_baza_text ).Data()
			
			text1.str( 'foo bar.' )
			land2.faces.stat.time = land1.faces.stat.time
			text2.str( 'xxx yyy.' )
			
			const delta1 = await $mol_wire_async( land1 ).diff_units()
			const delta2 = await $mol_wire_async( land2 ).diff_units()
			
			await $mol_wire_async( land1 ).diff_apply( delta2 )
			await $mol_wire_async( land2 ).diff_apply( delta1 )
	
			$mol_assert_equal(
				text1.str(),
				text2.str(),
				'xxx yyy.foo bar.',
			)
			
		},
		
		async 'Merge same insertions with different changes to same place'( $ ) {
			
			const base = $giper_baza_land.make({ $ })
			base.Data( $giper_baza_text ).str( '( )' )
			
			const left = $giper_baza_land.make({ $ })
			await $mol_wire_async( left ).units_steal( base )
			left.Data( $giper_baza_text ).str( '( [ f ] )' )
			left.Data( $giper_baza_text ).str( '( [ foo ] )' )
			
			const right = $giper_baza_land.make({ $ })
			await $mol_wire_async( right ).units_steal( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_text ).str( '( [ f ] )' )
			right.Data( $giper_baza_text ).str( '( [ fu ] )' )
			
			const left_delta = await $mol_wire_async( left ).diff_units( base.faces )
			const right_delta = await $mol_wire_async( right ).diff_units( base.faces )
			
			await $mol_wire_async( left ).diff_apply( right_delta )
			await $mol_wire_async( right).diff_apply( left_delta )
	
			$mol_assert_equal(
				left.Data( $giper_baza_text ).str(),
				right.Data( $giper_baza_text ).str(),
				'( [ fu ] [ foo ] )',
			)
			
		},
		
	})
}
