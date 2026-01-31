namespace $.$$ {
	export class $giper_baza_flex_form extends $.$giper_baza_flex_form {
		
		@ $mol_mem
		meta() {
			
			const link = this.pawn().meta()
			if( link ) return this.$.$giper_baza_glob.Pawn( link, $giper_baza_flex_meta )
			
			const deck = this.$.$giper_baza_glob.Pawn(
				new $giper_baza_link( 'B7eENiTu_lxfWqjoP' ),
				$giper_baza_flex_deck,
			)
			
			const Pawn = deck.Metas()?.remote_list()[0]!
			return Pawn
			
		}
		
		@ $mol_mem
		fields() {
			return this.meta()?.Props()?.remote_list().map( key => this.Field( key ) ) ?? []
		}
		
		field_name( prop: $giper_baza_flex_prop ) {
			return prop.Title()?.val() ?? prop.link().str
		}
		
		field_pawn( prop: $giper_baza_flex_prop, auto?: any ) {
			return this.pawn().cast( $giper_baza_dict ).dive( prop.Key(auto)?.val() ?? prop.link(), $giper_baza_pawn, auto )!
		}
		
		field_prop( prop: $giper_baza_flex_prop ) {
			return prop
		}
		
		enabled() {
			return this.pawn()?.can_change() ?? false
		}
		
	}
}
