namespace $.$$ {
	export class $giper_baza_land_page extends $.$giper_baza_land_page {
		
		override title() {
			return '🌍 ' + this.land().link().str
		}
		
		override theme() {
			return this.encrypted() ? '$mol_theme_special' : null
		}
		
		override encrypted() {
			return this.land().encrypted()
		}
		
		// override node_title( head: string ) {
		// 	const id = this.node_dump( head ).head()
		// 	if( id === $giper_baza_land_root.tine ) return 'Meta'
		// 	return id || 'Data'
		// }
		
		override tine() {
			return this.land().Tine()
		}
		
		// @ $mol_mem
		// override body() {
		// 	return [
		// 		this.Flex(),
		// 		this.Node_dump( this.node().head() ),
		// 		this.Node_dump( $giper_baza_land_root.tine ),
		// 	]
		// }
		
		dump_data_pawn() {
			return this.pawn()
		}
		
		override fork() {
			this.$.$mol_dom_context.location.href = this.$.$mol_state_arg.link({
				link: this.land().fork().link().str
			})
		}
		
		@ $mol_mem
		pack() {
			this.$.$mol_wait_rest()
			const units = this.land().diff_units()
			const pack = $giper_baza_pack.make([[
				this.land().link().str,
				new $giper_baza_pack_part( units )
			]])
			return pack
		}
		
		@ $mol_mem
		override size() {
			const parts = this.land().diff_parts()
			const size = $giper_baza_pack.length( parts )
			return $mol_si_short( size, 'B' )
		}
		
		override dump() {
			return this.pack()?.toBlob()!
		}
		
		override dump_name() {
			return `${ this.land().link() }.baza`
		}
		
		// override text( next?: string ) {
		// 	return this.node().cast( $giper_baza_text ).text( next )
		// }
		
		// override selection( next?: [ number, number ] ) {
		// 	return this.node().cast( $giper_baza_text ).selection( this.node().land().auth().lord(), next )
		// }
		
	}
}
