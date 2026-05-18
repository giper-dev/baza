namespace $.$$ {
	
	$mol_test({
		
		"Empty representation"( $ ) {
			
			const land = $giper_baza_land.make({ $ })
			const reg = land.Pawn( $giper_baza_atom_time ).Data()
			
			$mol_assert_equal( reg.val(), null )
			
			reg.vary( null )
			$mol_assert_equal( reg.val(), null )
			
		},
		
		"Validation on set, cast on get"( $ ) {
			
			const land = $.$giper_baza_glob.home().land()
			
			const head = new $giper_baza_link( '22222222' )
			const str = land.Pawn( $giper_baza_atom.of( $mol_schema_maybe( $mol_schema_string ) ) ).Head( head )
			const mail = land.Pawn( $giper_baza_atom.of( $mol_schema_pattern( /.+@.+/ ) ) ).Head( head )
			
			$mol_assert_equal( str.val(), null )
			$mol_assert_equal( mail.val(), null )
			
			$mol_assert_fail( ()=> str.val( 123 as any ), 'Wrong type' )
			$mol_assert_fail( ()=> mail.val( 'foo' ), 'Wrong string' )
			
			$mol_assert_equal( str.val(), null )
			$mol_assert_equal( mail.val(), null )

			str.val( 'foo' )
			
			$mol_assert_equal( str.val(), 'foo' )
			$mol_assert_equal( mail.val(), null )
			
			mail.val( 'foo@bar' )
			
			$mol_assert_equal( str.val(), 'foo@bar' )
			$mol_assert_equal( mail.val(), 'foo@bar' )
			
		},
		
		"Hyper link to another land"( $ ) {
			
			const land = $.$giper_baza_glob.home().land()
			
			const reg = land.Pawn( $giper_baza_atom_link.to( ()=> $giper_baza_atom ) ).Head( new $giper_baza_link( '11111111' ) )
			const remote = reg.ensure( land )!
			
			$mol_assert_unique( reg.land(), remote.land() )
			$mol_assert_equal( reg.vary()!, remote.link() )
			$mol_assert_equal( reg.remote(), remote )
			
		},
		
		"Register with linked Pawns"( $ ) {
			
			const land = $.$giper_baza_glob.home().land()
			
			const str = land.Pawn( $giper_baza_atom_text ).Head( new $giper_baza_link( '11111111' ) )
			const link = land.Pawn( $giper_baza_atom_link.to( ()=> $giper_baza_atom_text ) ).Head( new $giper_baza_link( '11111111' ) )
			$mol_assert_equal( link.remote(), null )
			
			link.remote( str )
			$mol_assert_equal( link.vary(), link.remote()!.link(), str.link() )
			
		},
		
		"Enumerated reg type"( $ ) {
			
			class FileType extends $giper_baza_atom.of( $mol_schema_maybe( $mol_schema_enum([ 'file', 'dir', 'link' ]) ) ) {}
			
			type Infered = $mol_type_assert<
				ReturnType< FileType['val'] >,
				'file' | 'dir' | 'link' | null | undefined
			>
			
			const land = $.$giper_baza_glob.home().land()
			
			const type = land.Data( FileType )
			$mol_assert_equal( type.val(), null )
			
			type.val( 'file' )
			$mol_assert_equal( type.val(), 'file' )
			
			$mol_assert_fail( ()=> type.val( 'drive' as any ), 'Wrong option' )
			$mol_assert_equal( type.val(), 'file' )
			
			type.vary( 'drive' )
			$mol_assert_equal( type.val(), null )
			
		},
		
	})
	
}
