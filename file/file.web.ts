namespace $ {
	
	if( typeof window === 'undefined' ) {
		
		const Query = $hyoo_harp_scheme({
			BAZA: $hyoo_harp_scheme({}),
			file: $hyoo_harp_scheme( {}, $mol_data_string ),
			// name: $mol_data_optional( $hyoo_harp_scheme( {}, $mol_data_string ) ),
		})
		
		const CACHE = 'giper-baza-files-v1'

		self.addEventListener( 'fetch' , ( event: any )=> {

			const url = new URL( event.request.url )
			try {
				var query = Query.parse( url.search )
			} catch { return }

			const id = query.file['=']?.[0][0]
			if( !id ) return

			event.respondWith( ( async ()=> {

				const cache = await caches.open( CACHE )
				const cached = await cache.match( event.request )
				if( cached ) return cached

				const link = new $giper_baza_link( id )
				const file = $.$giper_baza_glob.Pawn( link, $giper_baza_file )
				const blob = await $mol_wire_async( file ).blob()

				const filled = file.filled()
				const response = new Response( blob, {
					status: filled ? 200 : 404,
					statusText: filled ? 'OK' : 'Not Filled',
					headers: {
						'Content-Type': file.type(),
						'Cache-Control': 'public, max-age=31536000, immutable',
						'ETag': `"${ id }"`,
						'X-Powered-By': '$giper_baza_file',
					},
				} )

				if( filled ) cache.put( event.request, response.clone() ).catch( ()=> {} )

				return response

			} )() )

		} )
		
	}
	
}
