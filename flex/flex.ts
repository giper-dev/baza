namespace $ {
	
	export const $giper_baza_flex_deck_base = new $giper_baza_link( 'hSVSar1S_he4KVyXM_CftXZh1s' )
	
	/** Subj - named entity */
	export class $giper_baza_flex_subj extends $giper_baza_dict.with( {
		Name: $giper_baza_atom_text,
	}, 'Subj' ) {
		
		static meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_pla3dXt3` )
		
		name( next?: string ) {
			return this.Name( next )?.val( next ) ?? this.link().str
		}
		
	}
	
	/** Atomic Link to any Subj */
	export class $giper_baza_flex_subj_link extends $giper_baza_atom_link_to( ()=> $giper_baza_flex_subj ) {}
	
	/** Meta - schema of entitiy */
	export class $giper_baza_flex_meta extends $giper_baza_flex_subj.with( {
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
		Pulls: $giper_baza_list_link_to( ()=> $giper_baza_flex_subj ),
	}, 'Meta' ) {
		
		static override meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_a1JLFBay` )
		
		@ $mol_action
		prop_new(
			key: string,
			type: string,
			kind?: $giper_baza_flex_meta,
			vars?: $giper_baza_list_vary,
			base?: $giper_baza_vary_type,
		) {
			const prop = this.Props(null)!.make( $mol_hash_string( key ) )
			
			prop.path( this.name() + ':' + key )
			prop.name( key )
			prop.type( type )
			
			if( kind ) prop.kind( kind )
			if( vars ) prop.enum( vars )
			if( base !== undefined ) prop.base( base )
			
			return prop
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
	
	/** Property - attribute of entity */
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
	}, 'Prop' ) {
		
		static override meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_7ovrwQ6t` )
		
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
	
	/** Deck - set of schemes and types */
	export class $giper_baza_flex_deck extends $giper_baza_flex_subj.with( {
		Metas: $giper_baza_list_link_to( ()=> $giper_baza_flex_meta ),
		Types: $giper_baza_list_str,
	}, 'Deck' ) {
		
		static override meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_TAv7CAua` )
		
		@ $mol_action
		meta_new( key: string ) {
			const meta = this.Metas(null)!.make( $mol_hash_string( key ) )
			meta.name( key )
			return meta
		}
		
		@ $mol_action
		meta_for( Meta: typeof $giper_baza_flex_subj ) {
			const meta = this.meta_new( Meta.path )
			Meta.meta = meta.link()
			return meta
		}
		
	}
	
	/** Seed - global network config */
	export class $giper_baza_flex_seed extends $giper_baza_flex_subj.with( {
		Deck: $giper_baza_atom_link_to( ()=> $giper_baza_flex_deck ),
		Peers: $giper_baza_list_str,
	}, 'Seed' ) {
		
		static override meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_dELUKvvS` )
		
		@ $mol_mem
		deck() {
			return this.Deck(null)!.ensure( this.land() )
		}
		
		@ $mol_mem
		peers() {
			return ( this.Peers()?.items() ?? [] ).filter( $mol_guard_defined )
		}
		
	}
	
	/** Peer - network peering info */
	export class $giper_baza_flex_peer extends $giper_baza_flex_subj.with( {
		Urls: $giper_baza_list_str,
		Stat: $giper_baza_atom_link_to( ()=> $giper_baza_app_stat ),
	}, 'Peer' ) {
		
		static override meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_xEibvNCP` )
		
		@ $mol_mem
		stat( auto?: any ) {
			return this.Stat( auto )?.ensure( this.land() ) ?? null
		}
		
		@ $mol_mem
		urls( next?: string[] ) {
			return ( this.Urls()?.items( next ) ?? [] ).filter( $mol_guard_defined )
		}
		
	}
	
	/** User - human profile */
	export class $giper_baza_flex_user extends $giper_baza_flex_subj.with( {
		Caret: $giper_baza_atom_text,
	}, 'User' ) {
		
		static override meta = new $giper_baza_link( `${$giper_baza_flex_deck_base.str}_csm0VtAK` )
		
		@ $mol_mem
		caret( next?: string ) {
			return this.Caret( next )?.val( next ) ?? null
		}
		
	}
	
	/** Makes new Seed with Deck */
	export function $giper_baza_flex_init( this: $ ): $giper_baza_flex_seed {
			
		const seed_land = this.$.$giper_baza_glob.land_grab()
		const seed = seed_land.Data( $giper_baza_flex_seed )
		seed.name( 'Base Seed' )
		
		const deck = seed.deck()!
		deck.name( 'Base Deck' )
		deck.Types(null)!.items_vary([ 'vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list' ])
		
		const Meta = deck.meta_for( $giper_baza_flex_meta )
		Meta.meta( Meta.link() )
		
		const Subj = deck.meta_for( $giper_baza_flex_subj )
		const Seed = deck.meta_for( $giper_baza_flex_seed )
		const Prop = deck.meta_for( $giper_baza_flex_prop )
		const Deck = deck.meta_for( $giper_baza_flex_deck )
		const Peer = deck.meta_for( $giper_baza_flex_peer )
		const User = deck.meta_for( $giper_baza_flex_user )
		
		seed.meta( Seed.link() )
		deck.meta( Deck.link() )
		
		Meta.pull_add( Subj )
		Seed.pull_add( Subj )
		Prop.pull_add( Subj )
		Deck.pull_add( Subj )
		Peer.pull_add( Subj )
		User.pull_add( Subj )
		
		Subj.prop_new( 'Name', 'str', undefined, undefined, '' )
		Meta.prop_new( 'Props', 'list', Prop )
		Meta.prop_new( 'Pulls', 'list', Meta, deck.Metas()! )
		Seed.prop_new( 'Deck', 'link', Deck )
		Seed.prop_new( 'Peers', 'list' )
		Prop.prop_new( 'Path', 'str' )
		Prop.prop_new( 'Type', 'enum', undefined, deck.Types()!, 'vary' )
		Prop.prop_new( 'Kind', 'link', Meta, deck.Metas()!, Subj.link() )
		Prop.prop_new( 'Enum', 'link', Subj )
		Prop.prop_new( 'Base', 'vary', Subj )
		Deck.prop_new( 'Metas', 'list', Meta )
		Deck.prop_new( 'Types', 'list' )
		Peer.prop_new( 'Urls', 'list' )
		Peer.prop_new( 'Stat', 'link' )
		User.prop_new( 'Caret', 'vary' )
		
		return seed
		
	}
	
}
