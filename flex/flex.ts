namespace $ {
	
	/** Any Subj */
	export class $giper_baza_flex_subj extends $giper_baza_dict.with({
		Name: $giper_baza_atom_text,
	}) {
		name( next?: string ) {
			return this.Name( next )?.val( next ) ?? this.link().str
		}
	}
	
	/** Atomic Link to any Subj */
	export class $giper_baza_flex_subj_link extends $giper_baza_atom_link_to( ()=> $giper_baza_flex_subj ) {}
	
	/** Meta of Pawns */
	export class $giper_baza_flex_meta extends $giper_baza_flex_subj.with({
		Prop: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
		Pull: $giper_baza_list_link_to( ()=> $giper_baza_flex_subj ),
	}) {
		
		@ $mol_action
		prop_make() {
			return this.Prop(null)!.make( null )
		}
		
		@ $mol_action
		prop_add( prop: $giper_baza_flex_prop ) {
			this.Prop( prop )!.add( prop.link() )
		}
		
		@ $mol_action
		pull_add( meta: $giper_baza_flex_meta ) {
			this.Pull( meta )!.add( meta.link() )
		}
		
		@ $mol_mem
		pull_all() {
			return ( this.Pull()?.remote_list() ?? [] ).map( subj => subj.cast( $giper_baza_flex_meta ) )
		}
		
		@ $mol_mem
		prop_all(): readonly $giper_baza_flex_prop[] {
			return [
				... this.pull_all().flatMap( meta => meta.prop_all() ),
				... this.Prop()?.remote_list() ?? [],
			]
		}
		
	}
	
	/** Property of Meta */
	export class $giper_baza_flex_prop extends $giper_baza_flex_subj.with( {
		/** Key to store value */
		Path: $giper_baza_atom_text,
		/** Type of value */
		Type: $giper_baza_atom_text,
		/** Target Meta */
		Kind: $giper_baza_atom_link_to( () => $giper_baza_flex_meta ),
		/** Variants of values */
		Enum: $giper_baza_atom_link_to( () => $giper_baza_list_vary ),
		/** Base value */
		Base: $giper_baza_atom_vary,
	}) {
		
		path( next?: string ) {
			return this.Path( next )?.val( next ) ?? ''
		}
		
		type( next?: string ) {
			return this.Type( next )?.val( next ) ?? ''
		}
		
		base( next?: $giper_baza_vary_type ) {
			return this.Base( next )?.vary( next ) ?? null
		}
		
		kind( next?: $giper_baza_flex_meta ) {
			return this.Kind( next )?.remote( next ) ?? null
		}
		
		enum( next?: $giper_baza_list_vary ) {
			return this.Enum( next )?.remote( next ) ?? null
		}
		
	}
	
	/** All schemas in one place */
	export class $giper_baza_flex_deck extends $giper_baza_flex_subj.with({
		Subj: $giper_baza_list_link_to( ()=> $giper_baza_flex_meta ),
		Type: $giper_baza_list_str,
	}) {
		
		@ $mol_action
		subj_make() {
			return this.Subj(null)!.make( null )
		}
		
		@ $mol_action
		static ensure( land: $giper_baza_land ): $giper_baza_flex_deck {
			
			const deck_base = land.Data( this )
			if( deck_base.units().length ) return deck_base
			
			deck_base.name( 'Base Deck' )
			deck_base.Type(null)!.items_vary([ 'vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list' ])
			
			const Subj = deck_base.subj_make()
			const Meta = deck_base.subj_make()
			const Prop = deck_base.subj_make()
			const Deck = deck_base.subj_make()
			
			Meta.meta( Meta.link() )
			Prop.meta( Meta.link() )
			Subj.meta( Meta.link() )
			Deck.meta( Meta.link() )
			deck_base.meta( Deck.link() )
			
			Meta.name( 'Meta' )
			Prop.name( 'Prop' )
			Subj.name( 'Subj' )
			Deck.name( 'Deck' )
			
			const subj_name = Subj.prop_make()
			const meta_prop = Meta.prop_make()
			const prop_path = Prop.prop_make()
			const prop_type = Prop.prop_make()
			const prop_kind = Prop.prop_make()
			const prop_enum = Prop.prop_make()
			const prop_base = Prop.prop_make()
			const deck_subj = Deck.prop_make()
			const deck_type = Deck.prop_make()
			
			Meta.pull_add( Subj )
			Prop.pull_add( Subj )
			Deck.pull_add( Subj )
			
			// @TODO: auto set
			subj_name.meta( Prop.link() )
			meta_prop.meta( Prop.link() )
			prop_path.meta( Prop.link() )
			prop_type.meta( Prop.link() )
			prop_kind.meta( Prop.link() )
			prop_enum.meta( Prop.link() )
			prop_base.meta( Prop.link() )
			deck_subj.meta( Prop.link() )
			deck_type.meta( Prop.link() )
			
			subj_name.path( 'Name' )
			meta_prop.path( 'Prop' )
			prop_path.path( 'Path' )
			prop_type.path( 'Type' )
			prop_kind.path( 'Kind' )
			prop_enum.path( 'Enum' )
			prop_base.path( 'Base' )
			deck_subj.path( 'Subj' )
			deck_type.path( 'Type' )
			
			subj_name.name( 'Subj Name' )
			meta_prop.name( 'Meta Prop' )
			prop_path.name( 'Prop Path' )
			prop_type.name( 'Prop Type' )
			prop_kind.name( 'Prop Kind' )
			prop_enum.name( 'Prop Enum' )
			prop_base.name( 'Prop Base' )
			deck_subj.name( 'Deck Subj' )
			deck_type.name( 'Deck Type' )
			
			subj_name.type( 'str' )
			meta_prop.type( 'list' )
			prop_path.type( 'str' )
			prop_type.type( 'enum' )
			prop_kind.type( 'link' )
			prop_enum.type( 'link' )
			prop_base.type( 'vary' )
			deck_subj.type( 'list' )
			deck_type.type( 'list' )
			
			meta_prop.kind( Prop )
			prop_kind.kind( Meta )
			prop_enum.kind( Subj )
			prop_base.kind( Subj )
			deck_subj.kind( Meta )
			
			prop_type.enum( deck_base.Type()! )
			prop_kind.enum( deck_base.Subj()! )
			prop_enum.enum( deck_base )
			
			subj_name.base( '' )
			prop_type.base( 'vary' )
			prop_kind.base( Subj.link() )

			return deck_base
		}
		
	}
	
}
