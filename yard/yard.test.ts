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
		
		'Switching master closes and detaches socket that has not opened yet'( $ ) {
			
			const sockets = [] as WebSocket[]
			
			class WebSocket {
				onopen: unknown = null
				onerror: unknown = null
				onclose: unknown = null
				onmessage: unknown = null
				closed = false
				constructor() { sockets.push( this ) }
				close() { this.closed = true }
			}
			
			class Yard extends $giper_baza_yard {
				static override masters() {
					return [ 'http://a/', 'http://b/' ]
				}
			}
			
			const yard = Yard.make({
				$: $.$mol_ambient({
					$giper_baza_yard: Yard,
					$mol_dom_context: Object.setPrototypeOf( { WebSocket }, $.$mol_dom_context ),
				}),
			})
			
			const master = $mol_wire_async( yard ).master
			
			master()
			yard.master_cursor( 1 )
			master()
			
			const [ prev ] = sockets
			
			$mol_assert_equal( sockets.length, 2 )
			$mol_assert_equal(
				[ prev.closed, prev.onopen, prev.onerror, prev.onclose, prev.onmessage ],
				[ true, null, null, null, null ],
			)
			
		},
		
	})
	
}
