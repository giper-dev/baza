namespace $ {
	
	/** Any Thing */
	export class $giper_baza_flex_thing extends $giper_baza_dict.with({
		Title: $giper_baza_atom_text,
	}) {}
	
	/** Atomic Link to any Thing */
	export class $giper_baza_flex_thing_link extends $giper_baza_atom_link_to( ()=> $giper_baza_flex_thing ) {}
	
	/** Kind of Thing */
	export class $giper_baza_flex_kind extends $giper_baza_flex_thing.with({
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
	}) {}
	
	/** Property of Kind */
	export class $giper_baza_flex_prop extends $giper_baza_flex_thing.with( {
		/** Key to store value */
		Key: $giper_baza_atom_text,
		/** Type of value */
		Type: $giper_baza_atom_text,
		/** Target kind */
		Target: $giper_baza_atom_link_to( () => $giper_baza_flex_kind ),
		/** Variants of values */
		Enum: $giper_baza_atom_link_to( () => $giper_baza_list_vary ),
		/** Base value */
		Base: $giper_baza_atom_vary,
	}) {}
	
	/** All schemas in one place */
	export class $giper_baza_flex_domain extends $giper_baza_flex_thing.with({
		Kinds: $giper_baza_list_link_to( ()=> $giper_baza_flex_kind ),
		Props: $giper_baza_list_link_to( ()=> $giper_baza_flex_prop ),
		Types: $giper_baza_list_str,
	}) {
		
		@ $mol_action
		static ensure( land: $giper_baza_land ): $giper_baza_flex_domain {
			
			const domain = land.Data( this )
			if( domain.units().length ) return domain
			// if( land.auth().lord().str !== 'JinYqktA_qNR7zÆe8' ) return domain
			
			domain.Title(null)!.val( 'Base Domain' )
			domain.Types(null)!.items_vary([ 'vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list' ])
			
			const Thing = domain.Kinds(null)!.make( null )
			const Kind = domain.Kinds(null)!.make( null )
			const Prop = domain.Kinds(null)!.make( null )
			const Domain = domain.Kinds(null)!.make( null )
			
			Kind.meta( Kind.link() )
			Prop.meta( Kind.link() )
			Thing.meta( Kind.link() )
			Domain.meta( Kind.link() )
			domain.meta( Domain.link() )
			
			Kind.Title(null)!.val( 'Kind' )
			Prop.Title(null)!.val( 'Property' )
			Thing.Title(null)!.val( 'Thing' )
			Domain.Title(null)!.val( 'Domain' )
			
			const thing_title = domain.Props(null)!.make( null )
			const kind_props = domain.Props(null)!.make( null )
			const prop_key = domain.Props(null)!.make( null )
			const prop_type = domain.Props(null)!.make( null )
			const prop_target = domain.Props(null)!.make( null )
			const prop_enum = domain.Props(null)!.make( null )
			const prop_base = domain.Props(null)!.make( null )
			const domain_kinds = domain.Props(null)!.make( null )
			const domain_props = domain.Props(null)!.make( null )
			const domain_types = domain.Props(null)!.make( null )
			
			thing_title.Key(null)!.val( 'Title' )
			kind_props.Key(null)!.val( 'Props' )
			prop_key.Key(null)!.val( 'Key' )
			prop_type.Key(null)!.val( 'Type' )
			prop_target.Key(null)!.val( 'Target' )
			prop_enum.Key(null)!.val( 'Enum' )
			prop_base.Key(null)!.val( 'Base' )
			domain_kinds.Key(null)!.val( 'Kinds' )
			domain_props.Key(null)!.val( 'Props' )
			domain_types.Key(null)!.val( 'Types' )
			
			thing_title.Title(null)!.val( 'Title' )
			kind_props.Title(null)!.val( 'Props' )
			prop_key.Title(null)!.val( 'Key' )
			prop_type.Title(null)!.val( 'Type' )
			prop_target.Title(null)!.val( 'Target kind' )
			prop_enum.Title(null)!.val( 'Variants' )
			prop_base.Title(null)!.val( 'Default' )
			domain_kinds.Title(null)!.val( 'Kinds' )
			domain_props.Title(null)!.val( 'Props' )
			domain_types.Title(null)!.val( 'Types' )
			
			thing_title.meta( Prop.link() )
			kind_props.meta( Prop.link() )
			prop_key.meta( Prop.link() )
			prop_type.meta( Prop.link() )
			prop_target.meta( Prop.link() )
			prop_enum.meta( Prop.link() )
			prop_base.meta( Prop.link() )
			domain_kinds.meta( Prop.link() )
			domain_props.meta( Prop.link() )
			domain_types.meta( Prop.link() )
			
			Kind.Props(null)!.add( thing_title.link() )
			Prop.Props(null)!.add( thing_title.link() )
			Thing.Props(null)!.add( thing_title.link() )
			Domain.Props(null)!.add( thing_title.link() )
			
			Kind.Props(null)!.add( kind_props.link() )
			
			Prop.Props(null)!.add( prop_key.link() )
			Prop.Props(null)!.add( prop_type.link() )
			Prop.Props(null)!.add( prop_target.link() )
			Prop.Props(null)!.add( prop_enum.link() )
			Prop.Props(null)!.add( prop_base.link() )
			
			Domain.Props(null)!.add( domain_kinds.link() )
			Domain.Props(null)!.add( domain_props.link() )
			Domain.Props(null)!.add( domain_types.link() )
			
			thing_title.Type(null)!.val( 'str' )
			kind_props.Type(null)!.val( 'list' )
			prop_key.Type(null)!.val( 'str' )
			prop_type.Type(null)!.val( 'enum' )
			prop_target.Type(null)!.val( 'link' )
			prop_enum.Type(null)!.val( 'link' )
			prop_base.Type(null)!.val( 'vary' )
			domain_kinds.Type(null)!.val( 'list' )
			domain_props.Type(null)!.val( 'list' )
			domain_types.Type(null)!.val( 'list' )
			
			kind_props.Target(null)!.remote( Prop )
			prop_target.Target(null)!.remote( Kind )
			prop_enum.Target(null)!.remote( Thing )
			prop_base.Target(null)!.remote( Thing )
			domain_kinds.Target(null)!.remote( Kind )
			domain_props.Target(null)!.remote( Prop )
			
			kind_props.Enum(null)!.vary( domain.Props()!.link() )
			prop_type.Enum(null)!.vary( domain.Types()!.link() )
			prop_target.Enum(null)!.vary( domain.Kinds()!.link() )
			prop_enum.Enum(null)!.vary( domain.link() )
			
			thing_title.Base(null)!.vary( '' )
			prop_type.Base(null)!.vary( 'vary' )
			prop_target.Base(null)!.vary( Thing.link() )

			return domain
		}
		
	}
	
}
