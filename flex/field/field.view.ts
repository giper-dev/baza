namespace $.$$ {
	export class $giper_baza_flex_field extends $.$giper_baza_flex_field {
		
		override dict_pawn() {
			return this.pawn() as $giper_baza_dict
		}
		
		@ $mol_mem
		Sub() {
			const type = this.prop().Type()?.val()
			switch( type ) {
				case 'vary': return this.Str()
				case 'enum': return this.Enum()
				case 'bool': return this.Bool()
				case 'int': return this.Int()
				case 'real': return this.Real()
				case 'str': return this.Str()
				case 'link': return this.Ref()
				case 'time': return this.Time()
				case 'dict': return this.Dict()
				case 'text': return this.Text()
				case 'list': return this.List()
				default: return $mol_fail( new Error( `Unsuported Pawn type (${type})` ) )
			}
		}
		
		override enum( next?: $giper_baza_vary_type ) {
			return this.pawn( next as any )?.cast( $giper_baza_atom_vary ).vary( next ) ?? null
		}
		
		@ $mol_mem
		override enum_options() {
			return this.prop().Enum()?.remote()?.items_vary() ?? []
		}
		
		@ $mol_mem_key
		override enum_label( option: $giper_baza_vary_type ) {
			return $giper_baza_vary_cast_text( option ) ?? ''
		}
		
		bool( next?: boolean ) {
			return this.pawn( next as any )?.cast( $giper_baza_atom_bool ).val( next ) ?? false
		}
		
		int( next?: number ) {
			return Number( this.pawn( next as any )?.cast( $giper_baza_atom_bint ).val( next === undefined ? undefined : BigInt( next ) ) ?? Number.NaN )
		}
		
		real( next?: number ) {
			return this.pawn( next as any )?.cast( $giper_baza_atom_real ).val( next ) ?? Number.NaN
		}
		
		str( next?: string ) {
			return this.pawn( next as any )?.cast( $giper_baza_atom_text ).val( next ) ?? ''
		}
		
		time( next?: $mol_time_moment ) {
			return this.pawn( next as any )?.cast( $giper_baza_atom_time ).val( next ) ?? null!
		}
		
		link( next?: $giper_baza_link ) {
			this.pawn( next as any )?.cast( $giper_baza_atom_link ).val( next ) ?? null
			return null
		}
		
		@ $mol_mem
		link_content() {
			return [
				... this.link_value() === null ? [] : [ this.Link_dump() ],
				... this.link_options().length ? [ this.Link_pick() ] : [],
				... this.link_value() === null ? [ this.Link_new() ] : [],
			]
		}
		
		@ $mol_mem
		link_value() {
			return this.pawn()?.cast( $giper_baza_atom_vary ).vary() ?? null
		}
		
		link_options() {
			return this.prop().Enum()?.remote()?.items_vary() ?? []
		}
		
		link_label( link: $giper_baza_vary_type ) {
			if( link instanceof $giper_baza_link ) return this.$.$giper_baza_glob.Pawn( link, $giper_baza_flex_pawn ).Title()?.val() ?? link.str
			return $giper_baza_vary_cast_text( link ) ?? ''
		}
		
		link_remote() {
			return ( this.pawn().cast( $giper_baza_atom_link_to( ()=> $giper_baza_dict ) ) ).remote()!
		}
		
		@ $mol_action
		link_new( rights?: string ) {
			
			if( !rights ) return null
			
			const pawn =  this.pawn( 'auto' as any ).cast( $giper_baza_flex_pawn_link )
			const Target = this.prop().Target()?.remote()
			
			if( rights === 'local' ) {
				const remote = pawn.ensure(null)!
				if( Target ) remote.meta( Target.link() )
				return null
			}
			
			const preset = ( {
				deny: [],
				read: [[ null, $giper_baza_rank_read ]],
				post: [[ null, $giper_baza_rank_post( 'just' ) ]],
				pull: [[ null, $giper_baza_rank_pull( 'just' ) ]],
			} as Record< string, $giper_baza_rank_preset > )[ rights as any ]
			
			if( preset ) {
				const remote = pawn.ensure( preset )!
				if( Target ) remote.meta( Target.link() )
				return null
			}
			
			return null
		}
		
		text( next?: string ) {
			return this.pawn( next as any )?.cast( $giper_baza_text ).value( next ) ?? ''
		}
		
		@ $mol_mem
		dict_title() {
			return this.pawn().cast( $giper_baza_entity ).Title()?.val() || this.pawn().link().str
		}
		
		@ $mol_mem
		list_items() {
			return [
				... this.pawn()?.units().map( ( unit, i )=> this.List_item( unit ) ) ?? [],
				... this.link_options().length ? [ this.List_pick() ] : [],
				this.List_item_add(),
			]
		}
		
		list_pick( next?: $giper_baza_link ) {
			if( !next ) return null
			this.pawn( next as any )?.cast( $giper_baza_list_vary ).add( next )
			return null
		}
		
		@ $mol_action
		list_item_add() {
			const target = this.pawn( null as any ).cast( $giper_baza_list_link_to( ()=> $giper_baza_flex_pawn ) ).make( null )
			const meta = this.prop().Target()?.remote()?.link() ?? null
			if( meta ) target.meta( meta )
		}
		
		@ $mol_mem_key
		list_sand( sand: $giper_baza_unit_sand ) {
			return sand
		}
		
		list_item_value( sand: $giper_baza_unit_sand ) {
			return $giper_baza_vary_cast_text( this.land().sand_decode( sand ) ) ?? ''
		}
		
		list_item_adopt( transfer : DataTransfer ) {
			let val: $giper_baza_vary_type = transfer.getData( "text/plain" )
			if( this.prop().Target()?.val() ) val = $giper_baza_vary_cast_link( val )
			return val
		}

		list_item_receive( sand: $giper_baza_unit_sand, value: string ) {
			const list = this.pawn()!.cast( $giper_baza_list_vary )
			this.pawn()?.cast( $giper_baza_list_vary ).splice( [ value ], list.units().indexOf( sand ) )
		}
		
		list_receive( value: string ) {
			const list = this.pawn()!.cast( $giper_baza_list_vary )
			this.pawn()?.cast( $giper_baza_list_vary ).splice( [ value ] )
		}
		
		list_item_drag_end( sand: $giper_baza_unit_sand, event: DragEvent ) {
			if( event.dataTransfer?.dropEffect !== 'move' ) return
			this.land().sand_wipe( sand )
		}
		
	}
}
