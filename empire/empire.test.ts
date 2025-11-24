namespace $.$$ {
	$mol_test({
		
		"Deep lands cascade"( $ ) {
			
			enum Type { Alarm = 'Alarm', Skip = 'Skip' }
			enum Place { SPb = 'SPb', Msk = 'Msk' }
			
			const Target = $giper_baza_dict.with({})
			const Targets = $giper_baza_empire( $giper_baza_list_link_to( ()=> Target ) )
			
			const land = $.$giper_baza_glob.home().land()
			const targets = land.Node( Targets ).Data()
			
			const start = new $mol_time_moment( '2024-01-01T12' )
			const before = start.shift( 'PT-1h' )
			const after = start.shift( 'PT1h' )
			
			const pub = [[ null, $giper_baza_rank_read ]] as $giper_baza_rank_preset
			const target = targets.path( [ Place.SPb, Type.Alarm, start ], pub )!.make( pub )!
			targets.path( [ Place.SPb, Type.Alarm, after ], pub )!.add( target.link() )
			targets.path( [ Place.SPb, Type.Skip, start ], pub )!.add( target.link() )
			targets.path( [ Place.Msk, Type.Alarm, start ], pub )!.add( target.link() )
			
			$mol_assert_equal( targets.keys([]), [ Place.Msk, Place.SPb ] )
			$mol_assert_equal( targets.keys([ Place.SPb ]), [ Type.Skip, Type.Alarm ] )
			$mol_assert_equal( targets.keys([ Place.SPb, Type.Alarm ]), [ after, start ] )
			
			$mol_assert_equal( targets.path([ Place.SPb, Type.Alarm, before ])?.remote_list() ?? [], [] )
			$mol_assert_equal( targets.path([ Place.SPb, Type.Alarm, start ])?.remote_list(), [ target ] )
			$mol_assert_equal( targets.path([ Place.SPb, Type.Alarm, after ])?.remote_list(), [ target ] )
			
		},
		
	})
}
