namespace $.$$ {
	export class $giper_baza_node_page extends $.$giper_baza_node_page {
		
		override title() {
			return '🧩Node ' + this.node().head()
		}
		
		override text( next?: string ) {
			return this.node().cast( $giper_baza_text ).text( next )
		}
		
		override selection( next?: [ number, number ] ) {
			return this.node().cast( $giper_baza_text ).selection( this.node().land().auth().pass().lord(), next )
		}
		
	}
}
