namespace $ {
	/** Mergeable text Pawn */
	export class $giper_baza_text extends $giper_baza_pawn {
		
		static tag = $giper_baza_unit_sand_tag[ $giper_baza_unit_sand_tag.vals ] as keyof typeof $giper_baza_unit_sand_tag
				
		value( next?: string ): string {
			return this.text( next )
		}
		
		/** Text representation. Based on list of strings. */
		@ $mol_mem
		text( next?: string ): string {
			
			if( next !== undefined ) {
				
				const land = this.land()
				const prev = this.units()
				const lines = next.match( /.*\n|.+$/g ) ?? []
				
				$mol_reconcile({
					prev,
					from: 0,
					to: prev.length,
					next: lines,
					equal: ( next, prev )=> {
						//if( typeof prev.data === 'string' ) return false // ???
						return land.Pawn( $giper_baza_text ).Head( prev.self() ).str() === next
					},
					drop: ( prev, lead )=> this.land().post( lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), null ),
					insert: ( next, lead )=> {
						const sand = this.land().post( lead?.self() ?? $giper_baza_link.hole, this.head(), land.self_make(), 'p', 'vals' )
						land.Pawn( $giper_baza_text ).Head( sand.self() ).str( next )
						return sand
					},
					replace: ( next, prev, lead )=> {
						land.Pawn( $giper_baza_text ).Head( prev.self() ).str( next )
						return prev
					},
				})
				
			}
			
			return this.str()
		}
		
		/** Text representation. Based on list of strings. */
		@ $mol_mem
		str( next?: string ): string {
			
			if( next === undefined ) {
				
				let str = ''
				const land = this.land()
				
				for( const unit of this.units() ) {
					if( unit.tag() === 'term' ) str += $giper_baza_vary_cast_text( land.sand_decode( unit ) ) ?? ''
					else str += land.Pawn( $giper_baza_text ).Head( unit.self() ).str()
				}
				
				return str
			
			} else {
				
				this.write( next, 0, -1 )
				
				return this.str()
			}
			
		}
		
		@ $mol_action
		write(
			next: string,
			str_from = -1,
			str_to = str_from,
		) {
			
			const land = this.land()
			const list = this.units()
			
			let from = str_from < 0 ? list.length : 0
			let word = ''
			
			while( from < list.length ) {
				
				word = $giper_baza_vary_cast_text( land.sand_decode( list[ from ] ) ) ?? ''
				
				if( str_from <= word.length ) {
					next = word.slice( 0, str_from ) + next
					break
				}
				
				str_from -= word.length
				if( str_to > 0 ) str_to -= word.length
				
				from ++
				
			}
			
			let to = str_to < 0 ? list.length : from
			
			while( to < list.length ) {
				
				word = $giper_baza_vary_cast_text( land.sand_decode( list[ to ] ) ) ?? ''
				to ++
				
				if( str_to < word.length ) {
					next = next + word.slice( str_to )
					break
				}
				
				str_to -= word.length
				
			}
			
			if( from && from === list.length ) {
				-- from
				next = ( $giper_baza_vary_cast_text( land.sand_decode( list[ from ] ) ) ?? '' ) + next
			}
			
			const words = next.match( $giper_baza_text_tokens ) ?? []
			this.cast( $giper_baza_list_vary ).splice( words, from, to )
			
			return this
		}

		@ $mol_action
		point_by_offset( offset: number ): readonly[ $giper_baza_link /*self*/, number /*pos*/ ] {
			
			const land = this.land()
			let off = offset
			
			for( const unit of this.units() ) {
				
				if( unit.tag() === 'term' ) {
					
					const len = $giper_baza_vary_cast_text( land.sand_decode( unit ) )?.length ?? 0
					
					if( off <= len ) return [ unit.self(), off ]
					else off -= len
					
				} else {
					
					const found = land.Pawn( $giper_baza_text ).Head( unit.self() ).point_by_offset( off )
					if( found[0] ) return found
					
					off = found[1]
					
				}
				
			}
			
			return [ $giper_baza_link.hole, off ]
		}
		
		@ $mol_action
		offset_by_point( [ self, offset ]: readonly[ $giper_baza_link /*self*/, number /*pos*/ ] ): readonly[ $giper_baza_link /*self*/, number /*pos*/ ]  {
			
			const land = this.land()
			
			for( const unit of this.units() ) {
				
				if( unit.self().str === self.str ) return [ self, offset ]
				
				if( unit.tag() === 'term' ) {
					
					offset += $giper_baza_vary_cast_text( land.sand_decode( unit ) )?.length ?? 0
					
				} else {
					
					const found = land.Pawn( $giper_baza_text ).Head( unit.self() ).offset_by_point([ self, offset ])
					if( found[0] ) return [ self, found[1] ]
					
					offset = found[1]
					
				}
				
			}
			
			return [ $giper_baza_link.hole, offset ]
		}
		
		@ $mol_mem_key
		selection( lord: $giper_baza_link, next?: readonly[ begin: number, end: number ] ) {
			
			const user = this.$.$giper_baza_glob.Land( lord ).Data( $giper_baza_flex_user )
			
			if( next ) {
				
				user.caret( next.map( offset => this.point_by_offset( offset ).join( ':' ) ).join( '|' ) )
				return next
				
			} else {
				
				this.text() // track text to recalc selection on its change
				return user.caret()?.split( '|' ).map( point => {
					const chunks = point.split( ':' )
					return this.offset_by_point([ new $giper_baza_link( chunks[0] ), Number( chunks[1] ) || 0 ])[1]
				} ) ?? [ 0, 0 ]
					
			}
			
		}
		
	}
	
}
