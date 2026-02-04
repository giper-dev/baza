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
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
		Pulls: $giper_baza_list_link_to( ()=> $giper_baza_flex_subj ),
	}) {
		
		@ $mol_action
		prop_new() {
			return this.Props(null)!.make( null )
		}
		
		@ $mol_action
		prop_add( prop: $giper_baza_flex_prop ) {
			this.Props( prop )!.add( prop.link() )
		}
		
		@ $mol_mem
		prop_all(): readonly $giper_baza_flex_prop[] {
			return [
				... this.pull_all().flatMap( meta => meta.prop_all() ),
				... this.Props()?.remote_list() ?? [],
			]
		}
		
		@ $mol_action
		pull_add( meta: $giper_baza_flex_meta ) {
			this.Pulls( meta )!.add( meta.link() )
		}
		
		@ $mol_mem
		pull_all() {
			return ( this.Pulls()?.remote_list() ?? [] ).map( subj => subj.cast( $giper_baza_flex_meta ) )
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
		Metas: $giper_baza_list_link_to( ()=> $giper_baza_flex_meta ),
		Types: $giper_baza_list_str,
	}) {
		
		@ $mol_action
		meta_new() {
			return this.Metas(null)!.make( null )
		}
		
	}
	
	export class $giper_baza_flex_seed extends $giper_baza_flex_subj.with({
		Deck: $giper_baza_atom_link_to( ()=> $giper_baza_flex_deck ),
		Peers: $giper_baza_list_str,
	}) {
		
		@ $mol_mem
		deck() {
			return this.Deck(null)!.ensure( this.land() )
		}
		
		@ $mol_mem
		peers() {
			return ( this.Peers()?.items() ?? [] ).filter( $mol_guard_defined )
		}
		
	}
	
	export function $giper_baza_flex_init( this: $ ): $giper_baza_flex_seed {
			
		const seed_land = this.$.$giper_baza_glob.land_grab()
		const seed = seed_land.Data( $giper_baza_flex_seed )
		seed.name( 'Base Seed' )
		
		const deck = seed.deck()!
		deck.name( 'Base Deck' )
		deck.Types(null)!.items_vary([ 'vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list' ])
		
		const Subj = deck.meta_new()
		const Meta = deck.meta_new()
		const Seed = deck.meta_new()
		const Prop = deck.meta_new()
		const Deck = deck.meta_new()
		
		Subj.meta( Meta.link() )
		Meta.meta( Meta.link() )
		Seed.meta( Meta.link() )
		Prop.meta( Meta.link() )
		Deck.meta( Meta.link() )
		
		seed.meta( Seed.link() )
		deck.meta( Deck.link() )
		
		Meta.name( 'Meta' )
		Seed.name( 'Seed' )
		Prop.name( 'Property' )
		Subj.name( 'Subject' )
		Deck.name( 'Deck' )
		
		const subj_name = Subj.prop_new()
		const meta_props = Meta.prop_new()
		const meta_pulls = Meta.prop_new()
		const seed_deck = Seed.prop_new()
		const seed_peers = Seed.prop_new()
		const prop_path = Prop.prop_new()
		const prop_type = Prop.prop_new()
		const prop_kind = Prop.prop_new()
		const prop_enum = Prop.prop_new()
		const prop_base = Prop.prop_new()
		const deck_metas = Deck.prop_new()
		const deck_types = Deck.prop_new()
		
		Meta.pull_add( Subj )
		Seed.pull_add( Subj )
		Prop.pull_add( Subj )
		Deck.pull_add( Subj )
		
		// @TODO: auto set
		subj_name.meta( Prop.link() )
		meta_props.meta( Prop.link() )
		meta_pulls.meta( Prop.link() )
		seed_deck.meta( Prop.link() )
		seed_peers.meta( Prop.link() )
		prop_path.meta( Prop.link() )
		prop_type.meta( Prop.link() )
		prop_kind.meta( Prop.link() )
		prop_enum.meta( Prop.link() )
		prop_base.meta( Prop.link() )
		deck_metas.meta( Prop.link() )
		deck_types.meta( Prop.link() )
		
		subj_name.path( 'Name' )
		meta_props.path( 'Props' )
		meta_pulls.path( 'Pulls' )
		seed_deck.path( 'Deck' )
		seed_peers.path( 'Peers' )
		prop_path.path( 'Path' )
		prop_type.path( 'Type' )
		prop_kind.path( 'Kind' )
		prop_enum.path( 'Enum' )
		prop_base.path( 'Base' )
		deck_metas.path( 'Metas' )
		deck_types.path( 'Types' )
		
		subj_name.name( 'Name' )
		meta_props.name( 'Properties' )
		meta_pulls.name( 'Parents' )
		seed_deck.name( 'Deck' )
		seed_peers.name( 'Peers' )
		prop_path.name( 'Path' )
		prop_type.name( 'Type' )
		prop_kind.name( 'Kind' )
		prop_enum.name( 'Enum' )
		prop_base.name( 'Base' )
		deck_metas.name( 'Metas' )
		deck_types.name( 'Types' )
		
		subj_name.type( 'str' )
		meta_props.type( 'list' )
		meta_pulls.type( 'list' )
		seed_deck.type( 'link' )
		seed_peers.type( 'list' )
		prop_path.type( 'str' )
		prop_type.type( 'enum' )
		prop_kind.type( 'link' )
		prop_enum.type( 'link' )
		prop_base.type( 'vary' )
		deck_metas.type( 'list' )
		deck_types.type( 'list' )
		
		meta_props.kind( Prop )
		meta_pulls.kind( Meta )
		prop_kind.kind( Meta )
		prop_enum.kind( Subj )
		prop_base.kind( Subj )
		seed_deck.kind( Deck )
		deck_metas.kind( Meta )
		
		prop_type.enum( deck.Types()! )
		prop_kind.enum( deck.Metas()! )
		// prop_enum.enum( deck )
		
		subj_name.base( '' )
		prop_type.base( 'vary' )
		prop_kind.base( Subj.link() )

		return seed
		
	}
	
}
