namespace $.$$ {
	export class $giper_baza_land_grab extends $.$giper_baza_land_grab {
		
		value( rights?: string ) {
			
			const preset = ( {
				deny: [],
				read: [[ null, $giper_baza_rank_read ]],
				post: [[ null, $giper_baza_rank_post( 'slow' ) ]],
				pull: [[ null, $giper_baza_rank_pull( 'slow' ) ]],
			} as Record< string, $giper_baza_rank_preset > )[ rights as any ]
			
			if( preset ) this.grab( preset )
			
			return ''
		}
		
	}
}
