namespace $.$$ {
	export class $giper_baza_link_chip extends $.$giper_baza_link_chip {
		
		@ $mol_mem
		title() {
			const link = this.link()
			if( !link.str ) return '______every______'
			return this.$.$giper_baza_glob.Pawn( link , $giper_baza_flex_subj ).name() || link.str
		}
		
		@ $mol_mem
		arg() {
			return { [ this.param() ]: this.link().str }
		}
		
	}
}
