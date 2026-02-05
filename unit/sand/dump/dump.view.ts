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
		
	}
}
