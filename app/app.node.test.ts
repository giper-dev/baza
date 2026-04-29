namespace $.$$ {
	$mol_test({

		'GET ?BAZA:file=<id> serves file from glob'( $ ) {

			const land = $.$giper_baza_glob.home().land()
			const file = land.Pawn( $giper_baza_file ).Head( new $giper_baza_link( '11111111' ) )

			const content = $mol_charset_encode( '# Hello' )
			file.buffer( content )
			file.type( 'text/markdown' )

			const app = $giper_baza_app_node.make({ $ })

			const res = [] as any[]

			app.GET( $mol_rest_message.make({
				method: ()=> 'GET',
				uri: ()=> new URL( `http://baza.giper.dev/?BAZA:file=${ file.link().str };name=hello.md` ),
				port: $mol_rest_port.make({
					send_code: code => res.push( code ),
					send_type: type => res.push( type ),
					send_bin: bin => res.push( bin ),
				}),
			}) )

			$mol_assert_equal( res, [ 200, 'text/markdown', content ] )

		},

		'GET ?BAZA:file=<unknown> returns 404'( $ ) {

			const link = new $giper_baza_link( '99999999_99999999' )

			const app = $giper_baza_app_node.make({ $ })

			const codes = [] as $mol_rest_code[]

			app.GET( $mol_rest_message.make({
				method: ()=> 'GET',
				uri: ()=> new URL( `http://baza.giper.dev/?BAZA:file=${ link.str };name=ghost.md` ),
				port: $mol_rest_port.make({
					send_code: code => codes.push( code ),
					send_type: ()=> {},
					send_bin: ()=> {},
				}),
			}) )

			$mol_assert_equal( codes[0], 404 )

		},

	})
}
