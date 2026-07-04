namespace $ {

	$mol_test({

		'Signal keys: presence and directed offer/answer'() {

			// Каждый пир объявляет себя одним ключом beat_{lord}
			$mol_assert_equal( $giper_baza_room_key_beat( 'AlOnE1' ), 'beat_AlOnE1' )
			$mol_assert_equal( $giper_baza_room_beat_lord( 'beat_AlOnE1' ), 'AlOnE1' )

			// Ключи сигналов не парсятся как presence
			$mol_assert_equal( $giper_baza_room_beat_lord( 'offer_A>B' ), null )
			$mol_assert_equal( $giper_baza_room_beat_lord( 'answer_A>B' ), null )

			// Сигналы направленные: у каждой пары два независимых слота
			$mol_assert_unique(
				$giper_baza_room_key_offer( 'A', 'B' ),
				$giper_baza_room_key_offer( 'B', 'A' ),
				$giper_baza_room_key_answer( 'A', 'B' ),
				$giper_baza_room_key_answer( 'B', 'A' ),
			)

		},

		'Offer role is deterministic'() {

			// Ровно один пир пары делает offer - тот, у кого лорд меньше.
			// Обе стороны вычисляют роль локально, без договорённости по сети.
			$mol_assert_ok( $giper_baza_room_offerer( 'AAAAAAAA', 'BBBBBBBB' ) )
			$mol_assert_not( $giper_baza_room_offerer( 'BBBBBBBB', 'AAAAAAAA' ) )

		},

		'Presence freshness window'() {

			const now = 1_000_000

			$mol_assert_ok( $giper_baza_room_fresh( now, now ) )
			$mol_assert_ok( $giper_baza_room_fresh( now - $giper_baza_room_online_for, now ) )
			$mol_assert_not( $giper_baza_room_fresh( now - $giper_baza_room_online_for - 1, now ) )

		},

		async 'Rendezvous: signals travel through the Room Land as regular units'( $ ) {

			// Комната - обычный ленд, где всем дано право post.
			// Сигналинг - это просто записи в него, которые доезжают
			// до второго пира штатной синхронизацией (тут - units_steal).

			const king_auth = await $.$giper_baza_auth.generate()
			const guest_auth = await $.$giper_baza_auth.generate()

			const king_lord = king_auth.pass().lord().str
			const guest_lord = guest_auth.pass().lord().str

			// Король создаёт комнату и пускает в неё всех на запись
			const king_land = $giper_baza_land.make({ $, auth: ()=> king_auth })
			king_land.give( null, $giper_baza_rank_post( 'just' ) )

			// Гость открывает тот же ленд под своим ключом
			const guest_land = $giper_baza_land.make({ $, link: ()=> king_land.link(), auth: ()=> guest_auth })
			await $mol_wire_async( guest_land ).units_steal( king_land )

			// Гость публикует presence и offer королю
			const guest_data = guest_land.Data( $giper_baza_room_data )
			guest_data.key( $giper_baza_room_key_beat( guest_lord ), null )!.val({ t: 1 })
			guest_data.key( $giper_baza_room_key_offer( guest_lord, king_lord ), null )!.val({ sdp: 'v=0 fake offer', t: 123 })

			// "Сеть" доносит юниты до короля
			await $mol_wire_async( king_land ).units_steal( guest_land )

			// Король видит гостя и его offer
			const king_data = king_land.Data( $giper_baza_room_data )
			$mol_assert_equal( king_data.key( $giper_baza_room_key_beat( guest_lord ) )!.val(), { t: 1 } )
			$mol_assert_equal(
				king_data.key( $giper_baza_room_key_offer( guest_lord, king_lord ) )!.val(),
				{ sdp: 'v=0 fake offer', t: 123 },
			)

			// Король отвечает, привязывая answer к стампу offer'а
			king_data.key( $giper_baza_room_key_answer( king_lord, guest_lord ), null )!.val({ sdp: 'v=0 fake answer', t: 123 })
			await $mol_wire_async( guest_land ).units_steal( king_land )

			$mol_assert_equal(
				guest_land.Data( $giper_baza_room_data ).key( $giper_baza_room_key_answer( king_lord, guest_lord ) )!.val(),
				{ sdp: 'v=0 fake answer', t: 123 },
			)

		},

		async 'Reconnect: new offer overwrites the old one in place'( $ ) {

			// Атомы - LWW-регистры, поэтому переподключение не плодит мусор:
			// новый offer с новым стампом просто затирает старый в том же слоте.

			const auth = await $.$giper_baza_auth.generate()
			const land = $giper_baza_land.make({ $, auth: ()=> auth })

			const data = land.Data( $giper_baza_room_data )
			const key = $giper_baza_room_key_offer( auth.pass().lord().str, 'SomeMate' )

			data.key( key, null )!.val({ sdp: 'v=0 try 1', t: 1 })
			data.key( key, null )!.val({ sdp: 'v=0 try 2', t: 2 })

			$mol_assert_equal( data.key( key )!.val(), { sdp: 'v=0 try 2', t: 2 } )

		},

	})

}
