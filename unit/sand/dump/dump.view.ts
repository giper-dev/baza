namespace $.$$ {
	export class $giper_baza_unit_sand_dump extends $.$giper_baza_unit_sand_dump {
		
		value( next?: $giper_baza_vary_type ) {
			
			const sand = this.sand()
			if( next === undefined ) return this.land().sand_decode( sand )
			
			this.land().post(
				sand.lead(),
				sand.head(),
				sand.self(),
				next,
				sand.tag(),
			)
			
			return next
		}
		
	}
}
