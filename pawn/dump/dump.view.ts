namespace $.$$ {
	export class $giper_baza_pawn_dump extends $.$giper_baza_pawn_dump {
		
		title() {
			return this.pawn().head().str || '__meta__'
		}
		
		value() {
			return this.pawn().cast( $giper_baza_atom ).vary()
		}
		
		items() {
			return this.pawn().cast( $giper_baza_list ).items_vary()
		}
		
		@ $mol_mem
		units() {
			const units = this.pawn().land().sand_ordered({ head: this.pawn().head(), peer: null })
			this.pawn().land().sands_open( units )
			return units
		}
		
		@ $mol_mem
		pawns() {
			return this.units().map( (_,i)=> this.Inner(i) )
		}
		
		unit_tag( index: number, next?: keyof typeof $giper_baza_unit_sand_tag ) {
			if( next ) {
				const units = this.units()
				const unit = units[ index ]
				this.pawn().land().post(
					index ? units[ index - 1 ].self() : $giper_baza_link.hole,
					unit.head(),
					unit.self(),
					this.pawn().land().sand_decode( unit ),
					next,
				)
			}
			return this.units()[ index ].tag()
		}
		
		unit_time( index: number ) {
			const unit = this.units()[ index ]
			return $giper_baza_time_dump( unit.time(), unit.tick() )
		}
		
		unit_value( index: number ) {
			return this.units()[ index ]
		}
		
		pawn_inner( index: number ) {
			return this.pawn().land().Pawn( $giper_baza_dict ).Head( this.units()[ index ].self() )
		}
		
	}
}
