namespace $ {
	
	const deck = 'H62jgoWJ_p8AvJ1Gl_CRW0Ujn6'
	
	/** Subj - named entity */
	export class $giper_baza_flex_subj extends $giper_baza_dict.with({
		Name: $giper_baza_atom_text,
	}) {
		static meta = new $giper_baza_link( `${deck}_pla3dXt3` )
		name( next?: string ) {
			return this.Name( next )?.val( next ) ?? this.link().str
		}
	}
	
	/** Atomic Link to any Subj */
	export class $giper_baza_flex_subj_link extends $giper_baza_atom_link_to( ()=> $giper_baza_flex_subj ) {}
	
	/** Meta - schema of entitiy */
	export class $giper_baza_flex_meta extends $giper_baza_flex_subj.with({
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
		Pulls: $giper_baza_list_link_to( ()=> $giper_baza_flex_subj ),
	}) {
		
		static override meta = new $giper_baza_link( `${deck}_a1JLFBay` )
		
		@ $mol_action
		prop_new(
			key: string,
			type: string,
			kind?: $giper_baza_flex_meta,
			vars?: $giper_baza_list_vary,
			base?: $giper_baza_vary_type,
		) {
			const prop = this.Props(null)!.make( $mol_hash_string( key ) )
			
			prop.path( key )
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
	}) {
		
		static override meta = new $giper_baza_link( `${deck}_7ovrwQ6t` )
		
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
	export class $giper_baza_flex_deck extends $giper_baza_flex_subj.with({
		Metas: $giper_baza_list_link_to( ()=> $giper_baza_flex_meta ),
		Types: $giper_baza_list_str,
	}) {
		
		static override meta = new $giper_baza_link( `${deck}_TAv7CAua` )
		
		@ $mol_action
		meta_new( key: string ) {
			const meta = this.Metas(null)!.make( $mol_hash_string( key ) )
			meta.name( key )
			return meta
		}
		
	}
	
	/** Seed - global network config */
	export class $giper_baza_flex_seed extends $giper_baza_flex_subj.with({
		Deck: $giper_baza_atom_link_to( ()=> $giper_baza_flex_deck ),
		Peers: $giper_baza_list_str,
	}) {
		
		static override meta = new $giper_baza_link( `${deck}_dELUKvvS` )
		
		@ $mol_mem
		deck() {
			return this.Deck(null)!.ensure( this.land() )
		}
		
		@ $mol_mem
		peers() {
			return ( this.Peers()?.items() ?? [] ).filter( $mol_guard_defined )
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
		
		const Meta = deck.meta_new( 'Meta' )
		Meta.meta( $giper_baza_flex_meta.meta = Meta.link() )
		
		const Subj = deck.meta_new( 'Subj' )
		const Seed = deck.meta_new( 'Seed' )
		const Prop = deck.meta_new( 'Prop' )
		const Deck = deck.meta_new( 'Deck' )
		
		$giper_baza_flex_subj.meta = Subj.link()
		$giper_baza_flex_seed.meta = Seed.link()
		$giper_baza_flex_prop.meta = Prop.link()
		$giper_baza_flex_deck.meta = Deck.link()
		
		seed.meta( Seed.link() )
		deck.meta( Deck.link() )
		
		Meta.pull_add( Subj )
		Seed.pull_add( Subj )
		Prop.pull_add( Subj )
		Deck.pull_add( Subj )
		
		Subj.prop_new( 'Name', 'str', undefined, undefined, '' )
		Meta.prop_new( 'Props', 'list', Prop )
		Meta.prop_new( 'Pulls', 'list', Meta )
		Seed.prop_new( 'Deck', 'link', Deck )
		Seed.prop_new( 'Peers', 'list' )
		Prop.prop_new( 'Path', 'str' )
		Prop.prop_new( 'Type', 'enum', undefined, deck.Types()!, 'vary' )
		Prop.prop_new( 'Kind', 'link', Meta, deck.Metas()!, Subj.link() )
		Prop.prop_new( 'Enum', 'link', Subj )
		Prop.prop_new( 'Base', 'vary', Subj )
		Deck.prop_new( 'Metas', 'list', Meta )
		Deck.prop_new( 'Types', 'list' )
		
		return seed
		
	}
	
}
