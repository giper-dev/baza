namespace $.$$ {
	export class $giper_baza_pawn_dump extends $.$giper_baza_pawn_dump {
		
		title() {
			return this.pawn().head().str || '__meta__'
		}
		
		value() {
			return this.pawn().cast( $giper_baza_atom_vary ).vary()
		}
		
		items() {
			return this.pawn().cast( $giper_baza_list_vary ).items_vary()
		}
		
		@ $mol_mem
		units() {
			return this.pawn().land().sand_ordered({ head: this.pawn().head(), peer: null })
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
		
		// unit_tip( index: number, next?: keyof typeof $giper_baza_vary_tip ) {
		// 	if( next ) {
		// 		const units = this.units()
		// 		const unit = units[ index ]
		// 		this.pawn().land().post(
		// 			index ? units[ index - 1 ].self() : $giper_baza_link.hole,
		// 			unit.head(),
		// 			unit.self(),
		// 			[ $giper_baza_vary_cast( next, this.pawn().land().sand_decode( unit ) ) ],
		// 			unit.tag(),
		// 		)
		// 	}
		// 	return this.units()[ index ].tip()
		// }
		
		unit_time( index: number ) {
			const unit = this.units()[ index ]
			return $giper_baza_time_dump( unit.time(), unit.tick() )
		}
		
		unit_value( index: number ) {
			return this.units()[ index ]
		}
		
		unit_wipe( index: number, event?: Event ) {
			this.pawn().land().sand_wipe( this.units()[ index ] )
		}
		
		pawn_inner( index: number ) {
			return this.pawn().land().Pawn( $giper_baza_dict ).Head( this.units()[ index ].self() )
		}
		
		add_key( event: Event ) {
			if( !this.expandable() ) this.expanded( true )
			this.pawn().cast( $giper_baza_list_vary ).has( this.key_new(), true, 'solo' )
			this.key_new( '' )
		}
		
		add_value( event: Event ) {
			if( !this.expandable() ) this.expanded( true )
			this.pawn().cast( $giper_baza_list_vary ).splice([ this.value_new() ])
			this.value_new( '' )
		}
		
		value_str( next?: string ) {
			return this.pawn().cast( $giper_baza_atom_text ).val( next ) ?? ''
		}
		
		text( next?: string ) {
			return this.pawn().cast( $giper_baza_text ).str( next )
		}
		
		@ $mol_mem
		editors() {
			return [
				... this.tag() === 'keys' ? [ this.Add_key() ] : [],
				... this.tag() === 'vals' ? [
					this.Add_value(),
					// this.Value_text(),
				] : [],
				// ... this.tag() === 'solo' ? [ this.Value_str() ] : [],
			]
		}
		
	}
}
