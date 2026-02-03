namespace $.$$ {
	export class $giper_baza_unit_sand_dump extends $.$giper_baza_unit_sand_dump {
		
		value() {
			return this.land().sand_decode( this.sand() )
		}
		
		@ $mol_mem
		sub() {
			const value = this.value()
			if( value instanceof $giper_baza_link ) return [ this.Ref() ]
			return [ this.Other() ]
		}
		
		@ $mol_mem
		title() {
			const link = this.value() as $giper_baza_link
			return this.$.$giper_baza_glob.Pawn( link , $giper_baza_flex_subj ).Name()?.val() || link?.str
		}
		
		@ $mol_mem
		arg() {
			const link = ( this.value() as $giper_baza_link ).str
			return { link }
		}
		
	}
}
