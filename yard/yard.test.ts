namespace $ {
	
	$mol_test_mocks.push( $=> {
		class $giper_baza_yard_mock extends $.$giper_baza_yard {
			
			master() {
				return null
			}
			
		}
		$.$giper_baza_yard = $giper_baza_yard_mock
	} )
	
	$giper_baza_yard.masters = function() {
		return [
			this.$.$giper_baza_glob.Pawn( new $giper_baza_link( 'hSVSar1S_he4KVyXM__5PMQdsAw' ), $giper_baza_flex_peer ), // localhost:9090
			// $mol_dom_context.document.location.origin +'/',
		]
	}
	
}
