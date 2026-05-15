namespace $ {

	/** Reactive convergent list. */
	export class $giper_baza_list extends $giper_baza_pawn {
		
		static tag = $giper_baza_unit_sand_tag[ $giper_baza_unit_sand_tag.vals ] as keyof typeof $giper_baza_unit_sand_tag
		
		/** All Vary in the list. */
		@ $mol_mem
		items_vary(
			next?: readonly $giper_baza_vary_type[],
			tag: keyof typeof $giper_baza_unit_sand_tag = 'term',
		): readonly $giper_baza_vary_type[] {
			
			const units = this.units()
			if( next === undefined ) return units.map( unit => this.land().sand_decode( unit ) )
			
			this.splice( next, 0, units.length, tag )
			return this.items_vary()
			
		}
		
		/** Replace sublist by  new one with reconciliation. */
		@ $mol_action
		splice(
			next: readonly $giper_baza_vary_type[],
			from = this.units().length,
			to = from,
			tag: keyof typeof $giper_baza_unit_sand_tag = 'term',
		) {
			const land = this.land()
			$mol_reconcile({
				prev: this.units(),
				from,
				to,
				next,
				equal: ( next, prev )=> $mol_compare_deep( this.land().sand_decode( prev ), next ),
				drop: ( prev, lead )=> this.land().post( lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), null ),
				insert: ( next, lead )=> this.land().post( lead?.self() ?? $giper_baza_link.hole, this.head(), land.self_make(), next, tag ),
				replace: ( next, prev, lead )=> this.land().post( lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), next, prev.tag() ),
			})
		}
		
		/** Unit by Vary. */
		find( vary: $giper_baza_vary_type ) {
			for( const unit of this.units() ) {
				if( $mol_compare_deep( this.land().sand_decode( unit ), vary ) ) return unit
			}
			return null
		}
		
		/** Existence of Vary in the list. */
		has(
			vary: $giper_baza_vary_type,
			next?: boolean,
			tag: keyof typeof $giper_baza_unit_sand_tag = 'term',
		) {
			if( next === undefined ) return Boolean( this.find( vary ) )
			if( next ) this.add( vary, tag )
			else this.cut( vary )
			return next
		}
		
		/** Add Vary a the beginning if it doesn't exists. */
		add(
			vary: $giper_baza_vary_type,
			tag: keyof typeof $giper_baza_unit_sand_tag = 'term',
		) {
			if( this.has( vary ) ) return
			this.land().post( $giper_baza_link.hole, this.head(), null, vary, tag )
		}
		
		/** Removes all Vary presence. */
		cut( vary: $giper_baza_vary_type ) {
			
			const units = [ ... this.units() ]
			for( let i = 0; i < units.length; ++ i ) {
				
				if( ! $mol_compare_deep( this.land().sand_decode( units[i] ), vary ) ) continue
				
				this.land().post(
					units[i-1]?.self() ?? $giper_baza_link.hole,
					units[i].head(),
					units[i].self(),
					null,
				)
				
				units.splice( i, 1 )
				-- i
				
			}
			
		}
		
		/** Moves item from one Seat to another. */
		move( from: number, to: number ) {
			this.land().sand_move( this.units()[ from ], this.head(), to )
		}
		
		/** Remove item by Seat. */
		wipe( seat: number ) {
			this.land().sand_wipe( this.units()[ seat ] )
		}
		
		/** Add vary at the end and use maked Self as Pawn Head. */
		pawn_make< Pawn extends typeof $giper_baza_pawn >(
			Pawn: Pawn,
			vary: $giper_baza_vary_type,
			tag: keyof typeof $giper_baza_unit_sand_tag = 'term',
		) {
			this.splice( [ vary ], undefined, undefined, tag )
			return this.land().Pawn( Pawn ).Head( this.units().at(-1)!.self() )
		}
		
		;[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				this.head(),
				' ',
				$mol_dev_format_auto( this.items_vary() ),
			)
		}
		
		/** Mergeable list of atomic vary type factory */
		@ $mol_memo_key.method
		static of< Init extends new( ... args: any[] )=> any >( init: Init ) {
	
			const Item = $mol_schema_instance( init )
			type Item = typeof Item
			
			class $giper_baza_list_of extends $giper_baza_list {
	
				static Item = Item
	
				@ $mol_mem
				items( next?: readonly Item['default'][] ): readonly Item['default'][] {
					if( next ) for( const item of next ) Item.guard( item )
					return this.items_vary( next ).map( item => Item.cast( item ) )
				}
	
				static toString() {
					return this === $giper_baza_list_of ? '$giper_baza_list.of<' + Item + '>' : super.toString()
				}
				
			}
			
			return $giper_baza_list_of
		}

	}

	
	/** Mergeable list of atomic buffers */
	export class $giper_baza_list_bin extends $giper_baza_list.of( Uint8Array ) {}
	
	/** Mergeable list of atomic booleans */
	export class $giper_baza_list_bool extends $giper_baza_list.of( $mol_schema_boolean ) {}
	
	/** Mergeable list of atomic big integers */
	export class $giper_baza_list_int extends $giper_baza_list.of( $mol_schema_bigint ) {}
	
	/** Mergeable list of atomic floats */
	export class $giper_baza_list_real extends $giper_baza_list.of( $mol_schema_float ) {}
	
	/** Mergeable list of atomic strings */
	export class $giper_baza_list_str extends $giper_baza_list.of( $mol_schema_string ) {}
	
	/** Mergeable list of atomic time moments */
	export class $giper_baza_list_time extends $giper_baza_list.of( $mol_time_moment ) {}
	
	/** Mergeable list of atomic time durations */
	export class $giper_baza_list_dur extends $giper_baza_list.of( $mol_time_duration ) {}
	
	/** Mergeable list of atomic time intervals */
	export class $giper_baza_list_range extends $giper_baza_list.of( $mol_time_interval ) {}
	
	/** Mergeable list of atomic dictionaries */
	export class $giper_baza_list_dict extends $giper_baza_list.of( $mol_schema_dict([ $mol_schema_string, $mol_schema_any ]) ) {}
	
	/** Mergeable list of atomic arrays */
	export class $giper_baza_list_list extends $giper_baza_list.of( $mol_schema_list( $mol_schema_any ) ) {}
	
	/** Mergeable list of atomic DOM elements */
	export class $giper_baza_list_dom extends $giper_baza_list.of( Element ) {}
	
	/** Mergeable list of atomic Trees */
	export class $giper_baza_list_tree extends $giper_baza_list.of( $mol_tree2 ) {}
	
	
	/** Mergeable list of atomic Links */
	export class $giper_baza_list_link extends $giper_baza_list.of( $giper_baza_link ) {
	
		/** Mergeable List of atomic Links to some Pawn type */
		static to< const Value extends any >( Value: Value ) {
			
			class $giper_baza_list_link_to extends $giper_baza_list_link {
				
				Value = $mol_memo.func( Value as any ) as Value
				
				static toString() {
					return this === $giper_baza_list_link_to ? '$giper_baza_list_link_to[ []=> ' + ( Value as any )() + ' ]' : super.toString()
				}
				
				/** List of linked Pawns */
				@ $mol_mem
				remote_list( next?: readonly $mol_type_result< $mol_type_result< this['Value'] > >[] ) {
					const glob = this.$.$giper_baza_glob
					const Pawn = ( Value as any )()
					return this.items( next?.map( item => ( item as $giper_baza_pawn ).link() ) )
						.map( link => glob.Pawn( link, Pawn ) ) as readonly any[] as readonly $mol_type_result< $mol_type_result< this['Value'] > >[]
				}
				
				@ $mol_action
				remote_add( item: $mol_type_result< $mol_type_result< this['Value'] > > & $giper_baza_pawn ) {
					this.add( item.link() )
				}
				
				/** Make new Pawn and place it at end. */
				@ $mol_action
				make( config: null | number | $giper_baza_rank_preset | $giper_baza_land ): $mol_type_result< $mol_type_result< this['Value'] > > {
					
					const Pawn = ( Value as any )() as typeof $giper_baza_pawn
					let pawn: $giper_baza_pawn
					
					if( config === null || typeof config === 'number' ) {
						
						const self = this.land().self_make( config || undefined )
						pawn = this.land().Pawn( Pawn ).Head( self )
						this.splice([ pawn.link() ])
						
					} else if( config instanceof $giper_baza_land ) {
						
						const land = config.area_make()
						this.splice([ land.link() ])
						pawn = land.Pawn( Pawn ).Data()
						
					} else if( config ) {
						
						const land = this.$.$giper_baza_glob.land_grab( config )
						this.splice([ land.link() ])
						pawn = land.Pawn( Pawn ).Data()
						
					} else {
						return $mol_fail( new Error( 'Wrong config' ) )
					}
					
					if( Pawn.meta ) pawn.meta( Pawn.meta )
					return pawn as $mol_type_result< $mol_type_result< this['Value'] > >
				
				}
				
			}
			
			return $giper_baza_list_link_to
		}
		
	}
	
	/** @deprecated Use $giper_baza_list_link.to( Target ) */
	export function $giper_baza_list_link_to< const Value extends any >( Value: Value ) {
		return $giper_baza_list_link.to( Value )
	}
	
}
