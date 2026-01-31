namespace $ {
	
	/** Any Pawn */
	export class $giper_baza_flex_pawn extends $giper_baza_dict.with({
		Title: $giper_baza_atom_text,
	}) {}
	
	/** Atomic Link to any Pawn */
	export class $giper_baza_flex_pawn_link extends $giper_baza_atom_link_to( ()=> $giper_baza_flex_pawn ) {}
	
	/** Meta of Pawns */
	export class $giper_baza_flex_meta extends $giper_baza_flex_pawn.with({
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
	}) {}
	
	/** Property of Meta */
	export class $giper_baza_flex_prop extends $giper_baza_flex_pawn.with( {
		/** Key to store value */
		Key: $giper_baza_atom_text,
		/** Type of value */
		Type: $giper_baza_atom_text,
		/** Target Meta */
		Target: $giper_baza_atom_link_to( () => $giper_baza_flex_meta ),
		/** Variants of values */
		Enum: $giper_baza_atom_link_to( () => $giper_baza_list_vary ),
		/** Base value */
		Base: $giper_baza_atom_vary,
	}) {}
	
	/** All schemas in one place */
	export class $giper_baza_flex_deck extends $giper_baza_flex_pawn.with({
		Metas: $giper_baza_list_link_to( ()=> $giper_baza_flex_meta ),
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
		Types: $giper_baza_list_str,
	}) {
		
		@ $mol_action
		static ensure( land: $giper_baza_land ): $giper_baza_flex_deck {
			
			const deck = land.Data( this )
			if( deck.units().length ) return deck
			// if( land.auth().lord().str !== 'JinYqktA_qNR7zÆe8' ) return deck
			
			deck.Title(null)!.val( 'Base Deck' )
			deck.Types(null)!.items_vary([ 'vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list' ])
			
			const Pawn = deck.Metas(null)!.make( null )
			const Meta = deck.Metas(null)!.make( null )
			const Prop = deck.Metas(null)!.make( null )
			const Deck = deck.Metas(null)!.make( null )
			
			Meta.meta( Meta.link() )
			Prop.meta( Meta.link() )
			Pawn.meta( Meta.link() )
			Deck.meta( Meta.link() )
			deck.meta( Deck.link() )
			
			Meta.Title(null)!.val( 'Meta' )
			Prop.Title(null)!.val( 'Prop' )
			Pawn.Title(null)!.val( 'Pawn' )
			Deck.Title(null)!.val( 'Deck' )
			
			const pawn_title = deck.Props(null)!.make( null )
			const meta_props = deck.Props(null)!.make( null )
			const prop_key = deck.Props(null)!.make( null )
			const prop_type = deck.Props(null)!.make( null )
			const prop_target = deck.Props(null)!.make( null )
			const prop_enum = deck.Props(null)!.make( null )
			const prop_base = deck.Props(null)!.make( null )
			const deck_metas = deck.Props(null)!.make( null )
			const deck_props = deck.Props(null)!.make( null )
			const deck_types = deck.Props(null)!.make( null )
			
			pawn_title.Key(null)!.val( 'Title' )
			meta_props.Key(null)!.val( 'Props' )
			prop_key.Key(null)!.val( 'Key' )
			prop_type.Key(null)!.val( 'Type' )
			prop_target.Key(null)!.val( 'Target' )
			prop_enum.Key(null)!.val( 'Enum' )
			prop_base.Key(null)!.val( 'Base' )
			deck_metas.Key(null)!.val( 'Metas' )
			deck_props.Key(null)!.val( 'Props' )
			deck_types.Key(null)!.val( 'Types' )
			
			pawn_title.Title(null)!.val( 'Title' )
			meta_props.Title(null)!.val( 'Props' )
			prop_key.Title(null)!.val( 'Key' )
			prop_type.Title(null)!.val( 'Type' )
			prop_target.Title(null)!.val( 'Target Meta' )
			prop_enum.Title(null)!.val( 'Variants' )
			prop_base.Title(null)!.val( 'Default' )
			deck_metas.Title(null)!.val( 'Metas' )
			deck_props.Title(null)!.val( 'Props' )
			deck_types.Title(null)!.val( 'Types' )
			
			pawn_title.meta( Prop.link() )
			meta_props.meta( Prop.link() )
			prop_key.meta( Prop.link() )
			prop_type.meta( Prop.link() )
			prop_target.meta( Prop.link() )
			prop_enum.meta( Prop.link() )
			prop_base.meta( Prop.link() )
			deck_metas.meta( Prop.link() )
			deck_props.meta( Prop.link() )
			deck_types.meta( Prop.link() )
			
			Meta.Props(null)!.add( pawn_title.link() )
			Prop.Props(null)!.add( pawn_title.link() )
			Pawn.Props(null)!.add( pawn_title.link() )
			Deck.Props(null)!.add( pawn_title.link() )
			
			Meta.Props(null)!.add( meta_props.link() )
			
			Prop.Props(null)!.add( prop_key.link() )
			Prop.Props(null)!.add( prop_type.link() )
			Prop.Props(null)!.add( prop_target.link() )
			Prop.Props(null)!.add( prop_enum.link() )
			Prop.Props(null)!.add( prop_base.link() )
			
			Deck.Props(null)!.add( deck_metas.link() )
			Deck.Props(null)!.add( deck_props.link() )
			Deck.Props(null)!.add( deck_types.link() )
			
			pawn_title.Type(null)!.val( 'str' )
			meta_props.Type(null)!.val( 'list' )
			prop_key.Type(null)!.val( 'str' )
			prop_type.Type(null)!.val( 'enum' )
			prop_target.Type(null)!.val( 'link' )
			prop_enum.Type(null)!.val( 'link' )
			prop_base.Type(null)!.val( 'vary' )
			deck_metas.Type(null)!.val( 'list' )
			deck_props.Type(null)!.val( 'list' )
			deck_types.Type(null)!.val( 'list' )
			
			meta_props.Target(null)!.remote( Prop )
			prop_target.Target(null)!.remote( Meta )
			prop_enum.Target(null)!.remote( Pawn )
			prop_base.Target(null)!.remote( Pawn )
			deck_metas.Target(null)!.remote( Meta )
			deck_props.Target(null)!.remote( Prop )
			
			meta_props.Enum(null)!.vary( deck.Props()!.link() )
			prop_type.Enum(null)!.vary( deck.Types()!.link() )
			prop_target.Enum(null)!.vary( deck.Metas()!.link() )
			prop_enum.Enum(null)!.vary( deck.link() )
			
			pawn_title.Base(null)!.vary( '' )
			prop_type.Base(null)!.vary( 'vary' )
			prop_target.Base(null)!.vary( Pawn.link() )

			return deck
		}
		
	}
	
}
