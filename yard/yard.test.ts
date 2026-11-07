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
		
		'Reconnect closes master socket that has not opened yet'( $ ) {
			
			const sockets = [] as WebSocket[]
			
			class WebSocket {
				closed = false
				constructor() { sockets.push( this ) }
				close() { this.closed = true }
			}
			
			const yard = $giper_baza_yard.make({
				$: $.$mol_ambient({
					$mol_dom_context: Object.setPrototypeOf( { WebSocket }, $.$mol_dom_context ),
				}),
			})
			
			const master = $mol_wire_async( yard ).master
			
			master()
			yard.reconnects( null )
			master()
			
			$mol_assert_equal( sockets.map( socket => socket.closed ), [ true, false ] )
			
		},
		
	})
	
}
