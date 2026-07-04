namespace $ {

	function yard_mock() {

		const peers = new $mol_wire_set< $mol_rest_port >()

		return {
			peers,
			port_income: ()=> {},
		} as any as $giper_baza_yard

	}

	$mol_test({

		async 'Manual handshake: two strings make direct channel'( $ ) {

			// Полный цикл ручного рукопожатия без единого сервера:
			// offer и answer - обычные строки, транспорт для них любой
			// (QR, мессенджер, буфер обмена).

			const yard_alice = yard_mock()
			const yard_bob = yard_mock()

			const alice = $giper_baza_hand.make({ $, yard: ()=> yard_alice })
			const bob = $giper_baza_hand.make({ $, yard: ()=> yard_bob })

			// Для loopback внутри одной страницы STUN не нужен,
			// а ожидание его таймаутов не влезает в лимит теста
			const ice = $giper_baza_port_webrtc.ice
			$giper_baza_port_webrtc.ice = []

			try {

				// Алиса делает offer (строка уходит Бобу, например, QR-кодом)
				const offer = await alice.proposal()
				$mol_assert_ok( offer.includes( 'candidate' ) ) // non-trickle: кандидаты уже внутри

				// Боб отвечает (строка возвращается Алисе)
				const answer = await bob.answer( offer )
				$mol_assert_ok( answer.includes( 'candidate' ) )

				// Алиса применяет answer - канал открывается сам
				await alice.finish( answer )

				await new Promise< void >( ( done, fail )=> {
					setTimeout( ()=> fail( new Error( 'Handshake timeout' ) ), 4000 )
					const check = ()=> {
						if( alice.port() && bob.port() ) return done()
						setTimeout( check, 50 )
					}
					check()
				})

				// Оба порта зарегистрированы в yard и готовы синкать ленды
				$mol_assert_ok( yard_alice.peers.has( alice.port()! ) )
				$mol_assert_ok( yard_bob.peers.has( bob.port()! ) )

			} finally {
				$giper_baza_port_webrtc.ice = ice
				alice.reset()
				bob.reset()
			}

		},

	})

}
