namespace $ {
	$mol_test({
		
		'save and load buffers'( $ ) {
			
			const land = $giper_baza_land.make({ $ })
			const file = land.Data( $giper_baza_file )
			
			const source = new Uint8Array( 2**15 + 1 )
			source[ 2**15 ] = 255 
			
			file.buffer( source )
			
			$mol_assert_equal( file.chunks().length, 2 )
			$mol_assert_equal( file.buffer(), source )
			
		},
		
		async 'save and load blobs'( $ ) {
			
			const land = $giper_baza_land.make({ $ })
			const file = land.Data( $giper_baza_file )
				
			const source = new Uint8Array( 2**16 + 1 )
			source[ 2**16 + 1 ] = 255 
			
			await $mol_wire_async( file ).blob(
				new $mol_blob( [source], { type: 'test/test' } )
			)
			
			$mol_assert_equal( 'test/test', file.blob().type )
			$mol_assert_equal( source, new Uint8Array( await file.blob().arrayBuffer() ) )
			
		},
		
	})

}
