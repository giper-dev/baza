
namespace $ {

	/** Atomic dynamic register */
	export class $giper_baza_atom extends $giper_baza_pawn {

		static tag = $giper_baza_unit_sand_tag[ $giper_baza_unit_sand_tag.solo ] as keyof typeof $giper_baza_unit_sand_tag;
		
		pick_unit( peer: $giper_baza_link | null ) {
			return this.units_of( peer ).at(0)
		}
		
		vary( next?: $giper_baza_vary_type ): $giper_baza_vary_type {
			return this.vary_of( $giper_baza_link.hole, next )
		}
		
		@ $mol_mem_key
		vary_of( peer: $giper_baza_link | null, next?: $giper_baza_vary_type ): $giper_baza_vary_type {
			
			let unit_prev = this.pick_unit( peer )
			let prev = unit_prev ? this.land().sand_decode( unit_prev ) : null
			
			if( next === undefined ) return prev
			if( $mol_compare_deep( prev , next ) ) return next
			
			this.land().post(
				$giper_baza_link.hole, 
				unit_prev?.head() ?? this.head(),
				unit_prev?.self() ?? null,
				next,
			)
			
			return this.vary_of( peer )
		}
		
		@ $mol_mem_key
		selection( lord: $giper_baza_link, next?: readonly[ begin: number, end: number ] ) {
			
			const link = this.link().head().str
			const user = this.$.$giper_baza_glob.Land( lord ).Data( $giper_baza_flex_user )
			
			if( next ) {
				
				user.caret([ [ link, next[0], 0 ], [ link, next[1], 0 ] ])
				return next
				
			} else {
				
				this.vary() // track text to recalc selection on its change
				
				const selection = user.caret()
				if( !selection ) return [ 0, 0 ]
				
				if( selection[0][0] !== link ) return [ 0, 0 ]
				if( selection[1][0] !== link ) return [ 0, 0 ]
				
				return [ selection[0][1], selection[0][1] ]
			}

		}
		
		;[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				this.head(),
				' ',
				$mol_dev_format_auto( this.vary() ),
			)
		}
		
		/** Atom which typed by Schema/Class. */
		@ $mol_memo_key.method
		static of< Init extends new( ... args: any[] )=> any >( init: Init ) {
			
			const Schema = $mol_schema_maybe( $mol_schema_instance( init ) )
			type Schema = typeof Schema
			
			class $giper_baza_atom_of extends $giper_baza_atom {

				static Schema = Schema;

				/** Get/Set value of Pawn field */
				val( next?: Schema['default'] ): Schema['default'] | null {
					return this.val_of( $giper_baza_link.hole, next )
				}
				
				@ $mol_mem_key
				val_of( peer: $giper_baza_link | null, next?: Schema['default'] ): Schema['default'] | null {
					
					if( next !== undefined ) Schema.guard( next )
					
					const res = this.vary_of( peer, next as any )
					return next === undefined ? Schema.cast( res ) : this.val_of( peer )
					
				}

				static toString() {
					return this === $giper_baza_atom_of ? '$giper_baza_atom.of<' + Schema + '>' : super.toString()
				}
				
			}

			return $giper_baza_atom_of
		}
		
	}
	
	/** @deprecated Use $giper_baza_atom */
	export let $giper_baza_atom_vary = $giper_baza_atom
	
	
	/** Atomic buffer */
	export class $giper_baza_atom_blob extends $giper_baza_atom.of( Uint8Array ) {}
	
	/** Atomic boolean */
	export class $giper_baza_atom_bool extends $giper_baza_atom.of( $mol_schema_boolean ) {}
	
	/** Atomic big integer */
	export class $giper_baza_atom_bint extends $giper_baza_atom.of( $mol_schema_bigint ) {}
	
	/** Atomic float number */
	export class $giper_baza_atom_real extends $giper_baza_atom.of( $mol_schema_float ) {}
	
	/** Atomic string */
	export class $giper_baza_atom_text extends $giper_baza_atom.of( $mol_schema_string ) {}
	
	/** Atomic time moment */
	export class $giper_baza_atom_time extends $giper_baza_atom.of( $mol_time_moment ) {}
	
	/** Atomic time duration */
	export class $giper_baza_atom_dura extends $giper_baza_atom.of( $mol_time_duration ) {}
	
	/** Atomic time interval */
	export class $giper_baza_atom_span extends $giper_baza_atom.of( $mol_time_interval ) {}
	
	/** Atomic dictionary */
	export class $giper_baza_atom_dict extends $giper_baza_atom.of( $mol_schema_dict([ $mol_schema_string, $mol_schema_any ]) ) {}
	
	/** Atomic array */
	export class $giper_baza_atom_list extends $giper_baza_atom.of( $mol_schema_list( $mol_schema_any ) ) {}
	
	/** Atomic DOM element */
	export class $giper_baza_atom_elem extends $giper_baza_atom.of( $mol_dom.Element ) {}
	
	/** Atomic Tree */
	export class $giper_baza_atom_tree extends $giper_baza_atom.of( $mol_tree2 ) {}
	
	
	/** Atomic Link */
	export class $giper_baza_atom_link extends $giper_baza_atom.of( $giper_baza_link ) {
		
		/** Atomic link to some Pawn type register */
		@ $mol_memo_key.method
		static to< const Value extends any >( Value: Value ) {

			class $giper_baza_atom_link_to extends $giper_baza_atom_link {

				Value = $mol_memo.func( Value as any ) as Value;

				static toString() {
					return this === $giper_baza_atom_link_to ? '$giper_baza_atom_link.to[ []=> ' + ( Value as any )() + ' ]' : super.toString()
				}
				
				/** Target Pawn */
				remote(
					next?: null | $mol_type_result< $mol_type_result< this['Value'] > >
				): null | $mol_type_result< $mol_type_result< this['Value'] > > {
					return this.remote_of( $giper_baza_link.hole, next )
				}
				
				@ $mol_mem_key
				remote_of(
					peer: $giper_baza_link | null,
					next?: null | $mol_type_result< $mol_type_result< this['Value'] > >
				): null | $mol_type_result< $mol_type_result< this['Value'] > > {
					
					const link = this.val_of( peer, ( next as $giper_baza_pawn )?.link() ?? next )
					if( !link ) return null
					
					return this.$.$giper_baza_glob.Pawn( link, ( Value as any )() )
					
				}
				
				/** Target Pawn. Creates if not exists. */
				ensure( config?: null | $giper_baza_rank_preset | $giper_baza_land ) {
					return this.ensure_of( $giper_baza_link.hole, config )
				}
				
				ensure_of( peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land ) {
					
					if( !this.val_of( peer ) ) {
						if( config === null ) this.ensure_here( peer )
						else if( config instanceof $giper_baza_land ) this.ensure_area( peer, config )
						else if( config ) this.ensure_lord( peer, config )
						else return null
					}
					
					return this.remote_of( peer )
				}
				
				@ $mol_action
				ensure_here( peer: $giper_baza_link | null ) {
					const Pawn = ( Value as any )() as typeof $giper_baza_pawn
					const idea = $mol_hash_string( this.link().str )
					const head = this.land().self_make( idea )
					const pawn = this.land().Pawn( Pawn ).Head( head )
					if( Pawn.meta ) pawn.meta( Pawn.meta )
					this.remote_of( peer, pawn as any )
				}
				
				@ $mol_action
				ensure_area( peer: $giper_baza_link | null, land: $giper_baza_land ) {
					const Pawn = ( Value as any )() as typeof $giper_baza_pawn
					const idea = $mol_hash_string( this.link().str )
					const area = land.area_make( idea )
					const pawn = area.Data( Pawn )
					if( Pawn.meta ) pawn.meta( Pawn.meta )
					this.val_of( peer, pawn.link() )
				}
				
				@ $mol_action
				ensure_lord( peer: $giper_baza_link | null, preset: $giper_baza_rank_preset ) {
					const Pawn = ( Value as any )() as typeof $giper_baza_pawn
					const land = this.$.$giper_baza_glob.land_grab( preset )
					const pawn = land.Data( Pawn )
					if( Pawn.meta ) pawn.meta( Pawn.meta )
					this.val_of( peer, pawn.link() )
				}
				
				/** @deprecated Use ensure( preset ) */
				remote_ensure( preset?: $giper_baza_rank_preset ) {
					return this.ensure( preset )
				}

				/** @deprecated Use ensure( null ) */
				local_ensure() {
					return this.ensure( null )
				}

			}

			return $giper_baza_atom_link_to
		}
		
	}
	
	/** @deprecated Use $giper_baza_atom_link.to( Target ) */
	export function $giper_baza_atom_link_to< const Value extends any >( Value: Value ) {
		return $giper_baza_atom_link.to( Value )
	}
	
}
