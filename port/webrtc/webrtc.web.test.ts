namespace $ {

	function channel_mock( sent: unknown[] ) {
		return {
			readyState: 'connecting',
			send: ( data: unknown )=> sent.push( data ),
		} as any as RTCDataChannel
	}

	$mol_test({

		'Sends only into open channel'() {

			const sent = [] as unknown[]
			const channel = channel_mock( sent )
			const port = $giper_baza_port_webrtc.make({ channel })

			// Канал ещё не открыт - пакет молча дропается,
			// yard дошлёт недостающее после реконнекта через обмен фейсами
			port.send_bin( new Uint8Array([ 1, 2, 3 ]) )
			$mol_assert_equal( sent.length, 0 )

			;( channel as any ).readyState = 'open'
			port.send_bin( new Uint8Array([ 1, 2, 3 ]) )
			$mol_assert_equal( sent, [ new Uint8Array([ 1, 2, 3 ]) ] )

		},

		async 'Loopback: bytes travel through real WebRTC DataChannel'() {

			// Настоящая пара RTCPeerConnection в пределах одной страницы:
			// проверяем, что порт доносит бинарные пакеты через DataChannel.

			const alice = new RTCPeerConnection
			const bob = new RTCPeerConnection

			try {

				alice.onicecandidate = event => { if( event.candidate ) bob.addIceCandidate( event.candidate ) }
				bob.onicecandidate = event => { if( event.candidate ) alice.addIceCandidate( event.candidate ) }

				const channel = alice.createDataChannel( '$giper_baza_yard' )
				channel.binaryType = 'arraybuffer'

				const received = new Promise< Uint8Array >( ( done, fail )=> {

					setTimeout( ()=> fail( new Error( 'WebRTC loopback timeout' ) ), 10_000 )

					bob.ondatachannel = event => {
						event.channel.binaryType = 'arraybuffer'
						event.channel.onmessage = msg => done( new Uint8Array( msg.data as ArrayBuffer ) )
					}

				})

				await alice.setLocalDescription( await alice.createOffer() )
				await bob.setRemoteDescription( alice.localDescription! )
				await bob.setLocalDescription( await bob.createAnswer() )
				await alice.setRemoteDescription( bob.localDescription! )

				await new Promise< void >( done => { channel.onopen = ()=> done() } )

				const port = $giper_baza_port_webrtc.make({ channel })
				port.send_bin( new Uint8Array([ 7, 7 , 7 ]) )

				$mol_assert_equal( await received, new Uint8Array([ 7, 7, 7 ]) )

			} finally {
				alice.close()
				bob.close()
			}

		},

	})

}
