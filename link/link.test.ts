namespace $.$$ {
	$mol_test({
		
		"Validation"( $ ) {
			
			$mol_assert_fail(
				()=> new $giper_baza_link( 'qwertyui_asdfghjk123' ),
				'Wrong Link (qwertyui_asdfghjk123)',
			)
			
		},
		
		"From integer"( $ ) {
			
			$mol_assert_equal(
				$giper_baza_link.from_int( 178308648732587 ),
				new $giper_baza_link( 'qwertyui' ),
			)
			
		},
		
		"Pick Lord only"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).lord(),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).lord(),
				new $giper_baza_link( 'qwertyui_asdfghjk' ).lord(),
				new $giper_baza_link( 'qwertyui_asdfghjk' ),
			)
			
		},
		
		"Pick Land only"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).land(),
				new $giper_baza_link( 'qwertyui_asdfghjk' ).land(),
				new $giper_baza_link( 'qwertyui_asdfghjk' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).land(),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).land(),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ),
			)
			
		},
		
		"Pick Peer only"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).peer(),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).peer(),
				new $giper_baza_link( 'qwertyui' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( '___qazwsxed' ).peer(),
				new $giper_baza_link( '' ),
			)
			
		},
		
		"Pick Head only"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).head(),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).head(),
				new $giper_baza_link( 'zxcvbnm0' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).head(),
				new $giper_baza_link( 'qwertyui_asdfghjk' ).head(),
				new $giper_baza_link( '' ),
			)
			
		},
		
		"Pick Area only"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).area(),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).area(),
				new $giper_baza_link( 'qazwsxed' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).area(),
				new $giper_baza_link( 'qwertyui_asdfghjk' ).area(),
				new $giper_baza_link( '' ).area(),
				new $giper_baza_link( '' ),
			)
			
		},
		
		"Binary encoding"( $ ) {
			
			const pawn = new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).toBin()
			const land = new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).toBin()
			const lord = new $giper_baza_link( 'qwertyui_asdfghjk' ).toBin()
			
			const rel_pawn = new $giper_baza_link( '___zxcvbnm0' ).toBin()
			const rel_root = new $giper_baza_link( '' ).toBin()
			
			$mol_assert_equal( pawn.length, 24 )
			$mol_assert_equal( land.length, 18 )
			$mol_assert_equal( lord.length, 12 )
			
			$mol_assert_equal( rel_pawn.length, 6 )
			$mol_assert_equal( rel_root.length, 0 )
			
			$mol_assert_equal( $giper_baza_link.from_bin( pawn ), new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ) )
			$mol_assert_equal( $giper_baza_link.from_bin( land ), new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ) )
			$mol_assert_equal( $giper_baza_link.from_bin( lord ), new $giper_baza_link( 'qwertyui_asdfghjk' ) )
			
			$mol_assert_equal( $giper_baza_link.from_bin( rel_pawn ), new $giper_baza_link( 'zxcvbnm0' ) )
			$mol_assert_equal( $giper_baza_link.from_bin( rel_root ), new $giper_baza_link( '' ) )
			
		},
		
		"Relate to base"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).relate(
					new $giper_baza_link( 'QWERTYUI_ASDFGHJK' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).relate(
					new $giper_baza_link( 'QWERTYUI_ASDFGHJK__ZXCVBNM0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_12345678' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk__12345678' ),
				),
				new $giper_baza_link( '___zxcvbnm0' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk' ).relate(
					new $giper_baza_link( 'qwertyui_asdfghjk' ),
				),
				new $giper_baza_link( '' ),
			)
			
		},
		
		"Resolve Link from base"( $ ) {
			
			$mol_assert_equal(
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).resolve(
					new $giper_baza_link( 'QWERTYUI_ASDFGHJK__ZXCVBNM0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).resolve(
					new $giper_baza_link( 'QWERTYUI_ASDFGHJK' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( '___12345678' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk' ),
				),
				new $giper_baza_link( '___12345678' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk__12345678' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( '___12345678' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ),
				),
				new $giper_baza_link( '___12345678' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_12345678' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( '' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk' ),
				),
				new $giper_baza_link( '' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk__zxcvbnm0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk' ),
			)
			
			$mol_assert_equal(
				new $giper_baza_link( '' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ),
				),
				new $giper_baza_link( '' ).resolve(
					new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed_zxcvbnm0' ),
				),
				new $giper_baza_link( 'qwertyui_asdfghjk_qazwsxed' ),
			)
			
		},
		
		'Hashing'() {
			
			$mol_assert_equal(
				$giper_baza_link.hash_bin( new Uint8Array([ 1, 2, 3 ]) ),
				new $giper_baza_link( 'cDeAcZjC_Kn0rCAc3' ),
			)
			
			$mol_assert_equal(
				$giper_baza_link.hash_str( 'foo bar' ),
				new $giper_baza_link( 'N3PeplFW_kJg4æmwi' ),
			)
			
		}
		
	})
}

