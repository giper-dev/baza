namespace $ {

	const masters = process.env.GIPER_BAZA_MASTERS

	if( masters ) {
		$giper_baza_yard.masters_default.push(
			... masters.split( ',' ).map( url => url.trim() ).filter( Boolean )
		)
	}

}
