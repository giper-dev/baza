namespace $ {
	$giper_baza_app_node.serve()
	process.on( 'SIGTERM', ()=> process.exit(0) )
}
