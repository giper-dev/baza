namespace $ {
	
	class $giper_baza_solid_test_host extends $mol_object {
		
		@ $mol_mem
		value() {
			$giper_baza_solid()
			return 1
		}
		
	}
	
	$mol_test({
		
		'Scoped solid atom lives without subscribers until host is freed'( $ ) {
			
			const host = $giper_baza_solid_test_host.make({ $ })
			
			const keep = new $mol_wire_atom( 'keep', ()=> host.value() )
			keep.fresh()
			keep.destructor()
			$mol_wire_fiber.sync()
			
			$mol_assert_equal( Boolean( ( host as any )[ 'value()' ] ), true )
			
			$giper_baza_solid_free( host )
			$mol_assert_equal( ( host as any )[ 'value()' ], null )
			
		},
		
	})
	
}
