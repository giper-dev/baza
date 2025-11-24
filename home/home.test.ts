namespace $ {
	$mol_test({
		
		async 'Per app profiles'( $ ) {
			
			const base = $.$giper_baza_glob.home()
			const hall = await $mol_wire_async( base ).hall_by( $giper_baza_dict, null )!
			
			$mol_assert_unique( base.land(), hall )
			
		},

	})
}
