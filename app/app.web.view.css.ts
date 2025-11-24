namespace $.$$ {
	
	const { url } = $mol_style_func
	
	$mol_style_define( $giper_baza_app, {
		
		background: {
			image: [[ url( 'giper/baza/logo/bg.webp' ) ]],
			size: [ 'cover' ],
			position: 'top',
		},
		
		Menu: {
			flex: {
				basis: `10rem`,
			},
		},
		
		Info: {
			margin: [ 0, 'auto' ],
			flex: {
				basis: `60rem`,
			},
		},
		
		Casting: {
			flex: {
				grow: 1,
			},
		},
		
	} )
	
}
