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
				basis: `15rem`,
			},
		},
		
		Info: {
			flex: {
				basis: `50rem`,
				shrink: 0,
			},
		},
		
	} )
	
}
