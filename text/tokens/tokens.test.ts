namespace $ {
	$mol_test({
		
		'empty string'() {
			$mol_assert_equal(
				''.match( $giper_baza_text_tokens ),
				null,
			)
		},
		
		'new lines'() {
			$mol_assert_equal(
				'\n\r\n'.match( $giper_baza_text_tokens ),
				[ '\n', '\r\n' ],
			)
		},
		
		'numbers'() {
			$mol_assert_equal(
				'123'.match( $giper_baza_text_tokens ),
				[ '123' ],
			)
		},
		
		'emoji'() {
			$mol_assert_equal(
				'😀😁'.match( $giper_baza_text_tokens ),
				[ '😀', '😁' ],
			)
		},
		
		'emoji with modifier'() {
			$mol_assert_equal(
				'👩🏿👩🏿'.match( $giper_baza_text_tokens ),
				[ '👩🏿', '👩🏿' ],
			)
		},
		
		'combo emoji with modifier'() {
			$mol_assert_equal(
				'👩🏿‍🤝‍🧑🏿👩🏿‍🤝‍🧑🏿'.match( $giper_baza_text_tokens ),
				[ '👩🏿‍🤝‍🧑🏿', '👩🏿‍🤝‍🧑🏿' ],
			)
		},
		
		'word with spaces'() {
			$mol_assert_equal(
				'foo1  bar2'.match( $giper_baza_text_tokens ),
				[ 'foo1', ' ', ' bar2' ],
			)
		},
		
		'word with diactric'() {
			$mol_assert_equal(
				'Е́е́'.match( $giper_baza_text_tokens ),
				[ 'Е́е́' ],
			)
		},
		
		'word with punctuation'() {
			$mol_assert_equal(
				'foo--bar'.match( $giper_baza_text_tokens ),
				[ 'foo', '--', 'bar' ],
			)
		},
		
		'CamelCase'() {
			$mol_assert_equal(
				'Foo1BAR2'.match( $giper_baza_text_tokens ),
				[ 'Foo1', 'BAR2' ],
			)
		},
		
	})
}
