namespace $.$$ {
	export class $giper_baza_link_chip extends $.$giper_baza_link_chip {
		
		@ $mol_mem
		subj() {
			return this.$.$giper_baza_glob.Pawn( this.link() , $giper_baza_flex_subj )
		}
		
		@ $mol_mem
		meta() {
			
			const link = this.subj().meta()
			if( !link ) return null
			
			return this.$.$giper_baza_glob.Pawn( link, $giper_baza_flex_meta )
		}
		
		@ $mol_mem
		icon() {
			
			const link = this.link()
			if( !link.str ) return '💢'
			
			return this.meta()?.icon() ?? this.subj().icon()
		}
		
		@ $mol_mem
		title() {
			const link = this.link()
			if( !link.str ) return '______every______'
			return this.subj().name() || link.str
		}
		
		hint() {
			return this.subj().hint()
		}
		
		@ $mol_mem
		arg() {
			return { [ this.param() ]: this.link().str }
		}
		
	}
}
