namespace $ {
	
	$mol_test_mocks.push( $=> {
		class $giper_baza_yard_mock extends $.$giper_baza_yard {
			
			master() {
				return null
			}
			
		}
		$.$giper_baza_yard = $giper_baza_yard_mock
	} )
	
	$giper_baza_yard.masters_override = ()=> [ 'http://localhost:9090/' ]

	$mol_test({

		async 'Silent master does not delay connection to alive one'( $ ) {

			const made = [] as Fake[]

			class Fake {
				binaryType = ''
				closed = false
				onopen: null | ( ()=> void ) = null
				onerror: null | ( ()=> void ) = null
				onclose: null | ( ()=> void ) = null
				onmessage: null | ( ( event: any )=> void ) = null
				constructor( readonly url: string ) {
					made.push( this )
					if( url.includes( 'alive' ) ) setTimeout( ()=> this.onopen?.(), 5 )
				}
				send() {}
				close() { this.closed = true }
			}

			class Yard extends $giper_baza_yard {
				static override master_stagger = 10
				static override masters() {
					return [ 'https://silent.example/', 'https://alive.example/' ]
				}
			}

			const context = Object.create( $ ) as typeof $
			context.$mol_dom_context = Object.assign( Object.create( $.$mol_dom_context ), { WebSocket: Fake } )
			context.$giper_baza_yard = Yard

			const yard = Yard.make({ $: context })
			const began = Date.now()
			const port = await $mol_wire_async( yard ).master()
			const spent = Date.now() - began

			$mol_assert_equal( yard.master_cursor(), 1 )
			$mol_assert_equal( ( port as any ).socket.url, 'wss://alive.example/' )
			$mol_assert_equal( made[ 0 ].closed, true )
			$mol_assert_equal( spent < 500, true )

			port!.destructor()

		},

	})

}
