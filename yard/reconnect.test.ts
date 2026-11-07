namespace $ {

	$mol_test({

		'Reconnect closes socket that has not opened yet'( $ ) {

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
				}
				send() {}
				close() { this.closed = true }
			}

			class Yard extends $giper_baza_yard {
				static override masters() {
					return [ 'https://master.example/' ]
				}
			}

			const context = Object.create( $ ) as typeof $
			context.$mol_dom_context = Object.assign( Object.create( $.$mol_dom_context ), { WebSocket: Fake } )
			context.$giper_baza_yard = Yard

			const yard = Yard.make({ $: context })
			const pull = new $mol_wire_atom( 'pull', ()=> {
				try { return yard.master() }
				catch( error ) { if( $mol_promise_like( error ) ) return null; throw error }
			} )

			pull.sync()
			$mol_assert_equal( made.length, 1 )

			yard.reconnects( null )
			pull.sync()

			$mol_assert_equal( made.length, 2 )
			$mol_assert_equal( made[ 0 ].closed, true )

			pull.destructor()

		},

	})

}
