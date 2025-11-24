namespace $ {
	
	$mol_test_mocks.push( $=> {
		class $giper_baza_yard_mock extends $.$giper_baza_yard {
			
			master() {
				return null
			}
			
		}
		$.$giper_baza_yard = $giper_baza_yard_mock
	} )
	
	$giper_baza_yard.masters = [
		`http://localhost:9090/`,
		$mol_dom_context.document.location.origin +'/',
	]
	
}
