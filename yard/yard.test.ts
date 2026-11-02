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
	
	function port_make() {
		const port = new $mol_rest_port
		port.send_bin = ()=> {}
		return port
	}
	
	$mol_test({
		
		'Land forwarded to Master is passive for it'( $ ) {
			
			const master = port_make()
			const slave = port_make()
			
			class $giper_baza_yard_test extends $.$giper_baza_yard {
				masters() {
					return [ master ]
				}
			}
			
			const yard = $giper_baza_yard_test.make({ $ })
			const land = $.$giper_baza_auth.current().pass().lord().str
			
			yard.port_lands_active( slave ).add( land )
			yard.sync_port_lands( slave )
			
			$mol_assert_equal( yard.port_lands_passive( master ).has( land ), true )
			
			yard.face_port_sync( master, [[ land, new $giper_baza_pack_part( [], new $giper_baza_face_map ) ]] )
			$mol_assert_equal( yard.port_lands_active( master ).has( land ), false )
			
		},
		
		'Port Faces survive atom reaping'( $ ) {
			
			const port = port_make()
			const yard = $.$giper_baza_yard.make({ $ })
			const land = $.$giper_baza_auth.current().pass().lord()
			const faces = new $giper_baza_face_map
			
			const keep = new $mol_wire_atom( 'keep', ()=> yard.face_port_land([ port, land ]) )
			keep.fresh()
			yard.face_port_land( [ port, land ], faces )
			keep.destructor()
			$mol_wire_fiber.sync()
			
			$mol_assert_equal( ( yard as any )[ 'face_port_land()' ].size, 0 )
			$mol_assert_equal( yard.face_port_land([ port, land ]) === faces, true )
			
		},
		
	})
	
}
