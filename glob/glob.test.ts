namespace $ {
	
	$mol_test_mocks.push( $=> {
		class $giper_baza_glob_mock extends $.$giper_baza_glob {
			static $ = $
			static lands_touched = new $mol_wire_set< string >()
		}
		$.$giper_baza_glob = $giper_baza_glob_mock
	} )
	
}
