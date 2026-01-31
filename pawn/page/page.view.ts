namespace $.$$ {
	export class $giper_baza_pawn_page extends $.$giper_baza_pawn_page {
		
		override title() {
			return '🧩Pawn ' + this.pawn().head()
		}
		
		override text( next?: string ) {
			return this.pawn().cast( $giper_baza_text ).text( next )
		}
		
		override selection( next?: [ number, number ] ) {
			return this.pawn().cast( $giper_baza_text ).selection( this.pawn().land().auth().pass().lord(), next )
		}
		
	}
}
