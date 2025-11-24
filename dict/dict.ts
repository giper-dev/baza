namespace $ {
	/** Mergeable dictionary node with any keys mapped to any embedded Node types */
	export class $giper_baza_dict extends $giper_baza_list_vary {
		
		static tag = $giper_baza_unit_sand_tag[ $giper_baza_unit_sand_tag.keys ] as keyof typeof $giper_baza_unit_sand_tag
		
		/** List of Vary keys. */
		@ $mol_mem
		keys(): readonly $giper_baza_vary_type[] {
			return this.items_vary()
		}
		
		/** Inner Node by key. */
		dive< Node extends typeof $giper_baza_node >(
			key: $giper_baza_vary_type,
			Node: Node,
			auto?: any,
		) {
			if( this.can_change() && auto !== undefined ) this.has( key, true, Node.tag )
			const unit = this.find( key )
			return unit ? this.land().Node( Node ).Item( unit.self() ) : null
		}
		
		static schema = {} as Record< string, typeof $giper_baza_node >
		
		/** Mergeable dictionary node with defined keys mapped to different embedded Node types */
		static with<
			This extends typeof $giper_baza_dict,
			const Schema extends Record< string, { tag: keyof typeof $giper_baza_unit_sand_tag, new(): {} } >
		>( this: This, schema: Schema ) {
			
			const $giper_baza_dict_with = class $giper_baza_dict_with extends ( this as any ) {
				// static get schema() { return { ... this.schema, ... schema } }
				
				static toString() {
					
					if( this !== $giper_baza_dict_with ) return super.toString()
					
					const params = Object.entries( schema ).map( ([ name, type ])=> `${name}: ${type}` )
					return '$giper_baza_dict.with<{' + params.join( ', ' ) + '}>'
					
				}
				
			} as Omit< This, 'prototype' > & {
				new( ...args: any[] ): $mol_type_override< InstanceType< This >, {
					readonly [ Key in keyof Schema ]: ( auto?: any )=> InstanceType< Schema[ Key ] > | null
				} >
			}

			for( const Field in schema ) {
				
				Object.defineProperty( $giper_baza_dict_with.prototype, Field, {
					value: function( this: InstanceType< This >, auto?: any ) {
						return this.dive( Field, schema[ Field ] as any, auto )
					}
				} )
				
				// $mol_wire_field( Entity.prototype, Field as any )
			}
			
			return Object.assign( $giper_baza_dict_with, { schema: { ... this.schema, ... schema } } )
			
		}
		
		;[ $mol_dev_format_head ]() {
			
			const keys = $mol_wire_probe( ()=> this.keys() )
			const nodes = $mol_wire_probe( ()=> this.nodes(null) ) ?? []
			
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				this.head(),
				' ',
				$mol_dev_format_auto( keys?.map( ( key, index )=> new Pair( key, nodes[ index ] ) ) ),
			)
			
		}
		
	}
	
	class Pair {
		constructor( readonly key: any, readonly val: any ) {
		}
		;[ $mol_dev_format_head ]() {
			return $mol_dev_format_tr( {} ,
				$mol_dev_format_td( {}, $mol_dev_format_auto(this.key) ),
				$mol_dev_format_td( {},': '),
				$mol_dev_format_td( {}, $mol_dev_format_auto(this.val) ),
			)
		}
	}
	
	/** Mergeable dictionary with any keys mapped to any embedded Node types */
	export function $giper_baza_dict_to<
		Value extends { tag: keyof typeof $giper_baza_unit_sand_tag, new(): {} }
	>( Value: Value ) {
		
		return class $giper_baza_dict_to extends $giper_baza_dict {
			
			Value = Value
			
			key( key: $giper_baza_vary_type, auto?: any ) {
				return this.dive( key, this.Value as any as typeof $giper_baza_node, auto ) as InstanceType< Value >
			}
			
			static toString() {
				return this === $giper_baza_dict_to ? '$giper_baza_dict_to<' + Value + '>' : super.toString()
			}
			
		}
		
	}
	
}
