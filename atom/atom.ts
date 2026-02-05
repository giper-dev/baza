
namespace $ {

	/** Atomic dynamic register */
	export class $giper_baza_atom_vary extends $giper_baza_pawn {

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
		
		;[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				this.head(),
				' ',
				$mol_dev_format_auto( this.vary() ),
			)
		}
		
	}
	

	export class $giper_baza_atom_enum_base extends $giper_baza_atom_vary {

		static options = [] as readonly $giper_baza_vary_type[]
		
	}
	
	export function $giper_baza_atom_enum<
		const Options extends readonly $giper_baza_vary_type[]
	>( options: Options ) {

		abstract class $giper_baza_atom_enum extends $giper_baza_atom_enum_base {

			static options = options;

			static toString() {
				return this === $giper_baza_atom_enum ? '$giper_baza_atom_enum<' + options.map( $giper_baza_vary_cast_text ) + '>' : super.toString()
			}
			
			val( next?: Options[number] ): Options[number] | null {
				return this.val_of( $giper_baza_link.hole, next )
			}
			
			@ $mol_mem_key
			val_of( peer: $giper_baza_link | null, next?: Options[number] ): Options[number] | null {
				
				validate: if( next !== undefined ) {
					for( const option of options ) {
						if( $mol_compare_deep( option, next ) ) break validate
					}
					$mol_fail( new Error( `Wrong value (${ $giper_baza_vary_cast_text( next ) })` ) )
				}
				
				const val = this.vary_of( peer, next )
				
				for( const option of options ) {
					if( $mol_compare_deep( option, val ) ) return val
				}
				
				return null
			}

		}

		return $giper_baza_atom_enum
	}

	/** Atomic narrowed register factory */
	export function $giper_baza_atom<
		Parse extends $mol_data_value
	>( parse: Parse ) {

		abstract class $giper_baza_atom extends $giper_baza_atom_vary {

			static parse = parse;

			/** Get/Set value of Pawn field */
			val( next?: ReturnType< Parse > ): ReturnType< Parse > | null {
				return this.val_of( $giper_baza_link.hole, next )
			}
			
			@ $mol_mem_key
			val_of( peer: $giper_baza_link | null, next?: ReturnType< Parse > ): ReturnType< Parse > | null {
				
				if( next !== undefined ) parse( next )
				
				const res = this.vary_of( peer, next )
				try {
					return parse( res )
				} catch {
					return null
				}
				
			}

			static toString() {
				return this === $giper_baza_atom ? '$giper_baza_atom<' + this.$.$mol_func_name( parse ) + '>' : super.toString()
			}
			
		}

		return $giper_baza_atom
	}
	
	/** Atomic non empty binary register */
	export class $giper_baza_atom_blob extends $giper_baza_atom( $giper_baza_vary_cast_blob ) {}
	/** Atomic boolean register */
	export class $giper_baza_atom_bool extends $giper_baza_atom( $giper_baza_vary_cast_bool ) {}
	/** Atomic int64 register */
	export class $giper_baza_atom_bint extends $giper_baza_atom( $giper_baza_vary_cast_bint ) {}
	/** Atomic float64 register */
	export class $giper_baza_atom_real extends $giper_baza_atom( $giper_baza_vary_cast_real ) {}
	/** Atomic some link register */
	export class $giper_baza_atom_link extends $giper_baza_atom( $giper_baza_vary_cast_link ) {}
	/** Atomic string register */
	export class $giper_baza_atom_text extends $giper_baza_atom( $giper_baza_vary_cast_text ) {}
	/** Atomic iso8601 time moment register*/
	export class $giper_baza_atom_time extends $giper_baza_atom( $giper_baza_vary_cast_time ) {}
	/** Atomic iso8601 time duration register */
	export class $giper_baza_atom_dura extends $giper_baza_atom( $giper_baza_vary_cast_dura ) {}
	/** Atomic iso8601 time interval register */
	export class $giper_baza_atom_span extends $giper_baza_atom( $giper_baza_vary_cast_span ) {}
	/** Atomic plain old js object register */
	export class $giper_baza_atom_dict extends $giper_baza_atom( $giper_baza_vary_cast_dict ) {}
	/** Atomic plain old js array register */
	export class $giper_baza_atom_list extends $giper_baza_atom( $giper_baza_vary_cast_list ) {}
	/** Atomic DOM register */
	export class $giper_baza_atom_elem extends $giper_baza_atom( $giper_baza_vary_cast_elem ) {}
	/** Atomic Tree register */
	export class $giper_baza_atom_tree extends $giper_baza_atom( $giper_baza_vary_cast_tree ) {}
	
	export class $giper_baza_atom_link_base extends $giper_baza_atom_link {
		
		static Value = $giper_baza_dict;
		
	}
	
	/** Atomic link to some Pawn type register */
	export function $giper_baza_atom_link_to< const Value extends any >( Value: Value ) {

		class $giper_baza_atom_link_to extends $giper_baza_atom_link_base {

			Value = $mol_memo.func( Value as any ) as Value;

			static toString() {
				return this === $giper_baza_atom_link_to ? '$giper_baza_atom_link_to<' + ( Value as any )() + '>' : super.toString()
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
				
				let link: $giper_baza_link | null = ( next as $giper_baza_pawn )?.link() ?? next
				link = $giper_baza_vary_cast_link( this.vary_of( peer, link ) )
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
