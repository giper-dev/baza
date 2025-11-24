namespace $.$$ {
	$mol_test({
		
		"faces serial and parse"( $ ) {
			
			const land1 = new $giper_baza_link( '12345678_12345678' )
			const land2 = new $giper_baza_link( '87654321_87654321' )
			const land3 = new $giper_baza_link( '87654321_00000000' )
			
			const peer1 = new $giper_baza_link( '12345678' )
			const peer2 = new $giper_baza_link( '87654321' )
			
			const faces1 = new $giper_baza_face_map
			faces1.peer_time( peer1.str, $giper_baza_time_now(), 0 )
			faces1.peer_summ( peer1.str, 0 )
			faces1.peer_time( peer2.str, $giper_baza_time_now(), 0 )
			faces1.peer_summ( peer2.str, 64_000 )
			
			const faces2 = new $giper_baza_face_map
			faces2.peer_time( peer1.str, $giper_baza_time_now(), 0)
			faces2.peer_summ( peer1.str, 1 )
			faces2.peer_time( peer2.str, $giper_baza_time_now(), 1 )
			
			const faces3 = new $giper_baza_face_map
			
			const parts = [
				[ land1.str, new $giper_baza_pack_part( [], faces1 ) ],
				[ land2.str, new $giper_baza_pack_part( [], faces2 ) ],
				[ land3.str, new $giper_baza_pack_part( [], faces3 ) ],
			] as $giper_baza_pack_parts
			
			const pack = $giper_baza_pack.make( parts )
			$mol_assert_equal( parts, pack.parts() )
			
		},
		
		"units serial and parse"( $ ) {
			
			const land = new $giper_baza_link( '12345678_12345678' )
			
			const pass = $.$giper_baza_auth.grab().pass()
			const gift = $giper_baza_unit_gift.make()
			
			const sand_small = $giper_baza_unit_sand.make( 5 )
			
			const ball = new Uint8Array( $giper_baza_unit_sand.size_equator + 5 )
			const sand_big = $giper_baza_unit_sand.make( ball.byteLength )
			sand_big.ball( ball )
			
			const seal = $giper_baza_unit_seal.make( 15, true )
			
			const parts = [
				[ land.str, new $giper_baza_pack_part([ pass, gift, sand_small, sand_big, seal ]) ],
			] as $giper_baza_pack_parts
			
			const pack = $giper_baza_pack.make( parts )
			$mol_assert_equal( parts, pack.parts() )
			
		},
		
	})
}
