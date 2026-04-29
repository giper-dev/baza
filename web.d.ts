declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_book2_sub__1 = $mol_type_enforce<
		ReturnType< $mol_book2['pages'] >[number]
		,
		$mol_view
	>
	type $mol_book2_sub__2 = $mol_type_enforce<
		ReturnType< $mol_book2['placeholders'] >[number]
		,
		$mol_view
	>
	type $mol_view__title_mol_book2_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages_deep( ): readonly($mol_view)[]
		pages( ): ReturnType< $mol_book2['pages_deep'] >
		Placeholder( ): $mol_view
		placeholders( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): readonly($mol_view)[]
		minimal_width( ): number
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	type $mol_search__query_mol_book2_catalog_1 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__needle_mol_book2_catalog_2 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_book2_catalog_3 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_link__arg_mol_book2_catalog_4 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_mol_book2_catalog_5 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_mol_book2_catalog_6 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_item_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__Empty_mol_book2_catalog_7 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_links_empty'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_list__rows_mol_book2_catalog_8 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_links'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title_mol_book2_catalog_9 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Logo_mol_book2_catalog_10 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_logo'] >
		,
		ReturnType< $mol_page['Logo'] >
	>
	type $mol_page__tools_mol_book2_catalog_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__head_mol_book2_catalog_12 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_head'] >
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body_mol_book2_catalog_13 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot_mol_book2_catalog_14 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_foot'] >
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_link__arg_mol_book2_catalog_15 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_close_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_book2_catalog_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_book2_catalog_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_book2_catalog extends $mol_book2 {
		Menu_title( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Title'] >
		menu_title( ): string
		Menu_tools( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Tools'] >
		Menu_logo( ): any
		menu_head( ): readonly($mol_view_content)[]
		menu_filter( next?: string ): string
		Menu_filter( ): $mol_search
		Menu_links_empty( ): $mol_view
		arg( id: any): Record<string, any>
		menu_link_arg( id: any): ReturnType< $mol_book2_catalog['arg'] >
		spread_title( id: any): string
		Menu_link_title( id: any): $mol_dimmer
		menu_link_content( id: any): readonly($mol_view_content)[]
		Menu_link( id: any): $mol_link
		menu_item_content( id: any): readonly($mol_view)[]
		Menu_item( id: any): $mol_view
		menu_links( ): readonly($mol_view)[]
		Menu_links( ): $mol_list
		menu_body( ): readonly($mol_view)[]
		menu_foot( ): readonly($mol_view)[]
		Menu( ): $mol_page
		spread_close_arg( ): Record<string, any>
		Spread_close_icon( ): $mol_icon_close
		param( ): string
		spread( next?: string ): string
		spreads( ): Record<string, any>
		Spread( id: any): $mol_view
		Spread_default( ): any
		spread_ids( ): readonly(string)[]
		menu_filter_enabled( ): boolean
		spread_ids_filtered( ): readonly(string)[]
		spread_current( ): any
		menu_tools( ): readonly(any)[]
		addon_tools( ): readonly(any)[]
		pages( ): readonly(any)[]
		Spread_close( ): $mol_link
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $ {

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sync.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync_off extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=off.view.tree.d.ts.map
declare namespace $ {

	type $mol_avatar__id_giper_baza_status_1 = $mol_type_enforce<
		ReturnType< $giper_baza_status['master_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_avatar__id_giper_baza_status_2 = $mol_type_enforce<
		ReturnType< $giper_baza_status['master_link'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_link__uri_giper_baza_status_3 = $mol_type_enforce<
		ReturnType< $giper_baza_status['master_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_giper_baza_status_4 = $mol_type_enforce<
		ReturnType< $giper_baza_status['link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint_giper_baza_status_5 = $mol_type_enforce<
		ReturnType< $giper_baza_status['message'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	export class $giper_baza_status extends $mol_select {
		master_id( id: any): string
		Option_logo( id: any): $mol_avatar
		master_link( ): string
		Well( ): $mol_avatar
		Fail( ): $mol_icon_sync_off
		link_content( ): readonly(any)[]
		hint( ): string
		message( ): ReturnType< $giper_baza_status['hint'] >
		Link( ): $mol_link
		minimal_width( ): number
		minimal_height( ): number
		Filter( ): any
		option_content( id: any): readonly(any)[]
		trigger_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__uri_mol_embed_native_1 = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_mol_embed_native_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		uri( next?: string ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'src': ReturnType< $mol_embed_native['uri'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		allow( ): string
		html( ): any
		attr( ): ({ 
			'tabindex': ReturnType< $mol_frame['tabindex'] >,
			'allow': ReturnType< $mol_frame['allow'] >,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
		}) 
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_security extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=security.view.tree.d.ts.map
declare namespace $ {

	export class $giper_baza_link_chip extends $mol_link {
		icon( ): string
		param( ): string
		link( ): $giper_baza_link
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_text_code_line_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_line_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_line_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_line_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_line_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_line_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_line_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_line extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_code_line__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_line['numb'] >
	>
	type $mol_text_code_line__theme_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_theme'] >
		,
		ReturnType< $mol_text_code_line['theme'] >
	>
	type $mol_text_code_line__text_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__syntax_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__highlight_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_9 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_11 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_theme( id: any): string
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_line
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		row_themes( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $ {

	type $mol_dump_value__value_mol_dump_list_1 = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_dump_value__expanded_mol_dump_list_2 = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_expanded'] >
		,
		ReturnType< $mol_dump_value['expanded'] >
	>
	type $mol_dump_value__prototypes_mol_dump_list_3 = $mol_type_enforce<
		ReturnType< $mol_dump_list['prototypes'] >
		,
		ReturnType< $mol_dump_value['prototypes'] >
	>
	type $mol_dump_value__preview_show_mol_dump_list_4 = $mol_type_enforce<
		ReturnType< $mol_dump_list['preview_show'] >
		,
		ReturnType< $mol_dump_value['preview_show'] >
	>
	export class $mol_dump_list extends $mol_view {
		dump_value( id: any): any
		dump_expanded( id: any, next?: boolean ): boolean
		prototypes( ): boolean
		preview_show( ): boolean
		Dump( id: any): $mol_dump_value
		values( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_code__text_mol_dump_value_1 = $mol_type_enforce<
		ReturnType< $mol_dump_value['simple'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__text_mol_dump_value_2 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_title'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_check_expand__minimal_height_mol_dump_value_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_height'] >
	>
	type $mol_check_expand__minimal_width_mol_dump_value_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_width'] >
	>
	type $mol_check_expand__expanded_mol_dump_value_5 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	type $mol_check_expand__expandable_mol_dump_value_6 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__clicks_mol_dump_value_7 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_all'] >
		,
		ReturnType< $mol_check_expand['clicks'] >
	>
	type $mol_check_expand__label_mol_dump_value_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__dom_node_mol_dump_value_9 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_dom'] >
		,
		ReturnType< $mol_view['dom_node'] >
	>
	type $mol_view__render_mol_dump_value_10 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub_mol_dump_value_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dump_list__values_mol_dump_value_12 = $mol_type_enforce<
		ReturnType< $mol_dump_value['row_values'] >
		,
		ReturnType< $mol_dump_list['values'] >
	>
	type $mol_dump_list__prototypes_mol_dump_value_13 = $mol_type_enforce<
		ReturnType< $mol_dump_value['prototypes'] >
		,
		ReturnType< $mol_dump_list['prototypes'] >
	>
	type $mol_dump_list__preview_show_mol_dump_value_14 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_show'] >
		,
		ReturnType< $mol_dump_list['preview_show'] >
	>
	type $mol_expander__expanded_mol_dump_value_15 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__Trigger_mol_dump_value_16 = $mol_type_enforce<
		ReturnType< $mol_dump_value['Expand_head'] >
		,
		ReturnType< $mol_expander['Trigger'] >
	>
	type $mol_expander__content_mol_dump_value_17 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_content'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_dump_value extends $mol_view {
		simple( ): string
		Simple( ): $mol_text_code
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		expand_all( next?: any ): any
		expand_title( ): string
		Expand_title( ): $mol_text_code
		Expand_head( ): $mol_check_expand
		preview_dom( ): any
		preview( ): any
		Preview_dom( ): $mol_view
		Preview( ): $mol_view
		row_values( id: any): readonly(any)[]
		prototypes( ): boolean
		Row( id: any): $mol_dump_list
		expand_content( ): readonly(any)[]
		Expand( ): $mol_expander
		value( next?: any ): any
		preview_show( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=value.view.tree.d.ts.map
declare namespace $ {

	type $giper_baza_link_chip__link_giper_baza_unit_sand_dump_1 = $mol_type_enforce<
		ReturnType< $giper_baza_unit_sand_dump['value'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $mol_dump_value__value_giper_baza_unit_sand_dump_2 = $mol_type_enforce<
		ReturnType< $giper_baza_unit_sand_dump['value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	export class $giper_baza_unit_sand_dump extends $mol_view {
		value( ): any
		land( ): $giper_baza_land
		sand( ): $giper_baza_unit_sand
		Ref( ): $giper_baza_link_chip
		Other( ): $mol_dump_value
	}
	
}

//# sourceMappingURL=dump.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_drag extends $mol_ghost {
		start( next?: any ): any
		drag_start( next?: ReturnType< $mol_drag['start'] > ): ReturnType< $mol_drag['start'] >
		move( next?: any ): any
		drag_move( next?: ReturnType< $mol_drag['move'] > ): ReturnType< $mol_drag['move'] >
		end( next?: any ): any
		drag_end( next?: ReturnType< $mol_drag['end'] > ): ReturnType< $mol_drag['end'] >
		status( next?: string ): string
		event( ): ({ 
			dragstart( next?: ReturnType< $mol_drag['drag_start'] > ): ReturnType< $mol_drag['drag_start'] >,
			drag( next?: ReturnType< $mol_drag['drag_move'] > ): ReturnType< $mol_drag['drag_move'] >,
			dragend( next?: ReturnType< $mol_drag['drag_end'] > ): ReturnType< $mol_drag['drag_end'] >,
		}) 
		attr( ): ({ 
			'draggable': boolean,
			'mol_drag_status': ReturnType< $mol_drag['status'] >,
		}) 
		transfer( ): ({ 
			'text/plain': string,
			'text/html': string,
			'text/uri-list': string,
		}) 
		allow_copy( ): boolean
		allow_link( ): boolean
		allow_move( ): boolean
		image( ): ReturnType< $mol_drag['dom_node'] >
	}
	
}

//# sourceMappingURL=drag.view.tree.d.ts.map
declare namespace $ {

	export class $mol_drop extends $mol_ghost {
		enter( next?: any ): any
		move( next?: any ): any
		leave( next?: any ): any
		drop( next?: any ): any
		status( next?: string ): string
		enabled( next?: boolean ): boolean
		event( ): ({ 
			dragenter( next?: ReturnType< $mol_drop['enter'] > ): ReturnType< $mol_drop['enter'] >,
			dragover( next?: ReturnType< $mol_drop['move'] > ): ReturnType< $mol_drop['move'] >,
			dragleave( next?: ReturnType< $mol_drop['leave'] > ): ReturnType< $mol_drop['leave'] >,
			drop( next?: ReturnType< $mol_drop['drop'] > ): ReturnType< $mol_drop['drop'] >,
		}) 
		attr( ): ({ 
			'mol_drop_status': ReturnType< $mol_drop['status'] >,
		}) 
		adopt( next?: Record<string, any> ): Record<string, any>
		receive( next?: any ): any
		allow( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=drop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_number_1 = $mol_type_enforce<
		({ 
			down( next?: ReturnType< $mol_number['event_dec'] > ): ReturnType< $mol_number['event_dec'] >,
			up( next?: ReturnType< $mol_number['event_inc'] > ): ReturnType< $mol_number['event_inc'] >,
			pageDown( next?: ReturnType< $mol_number['event_dec_boost'] > ): ReturnType< $mol_number['event_dec_boost'] >,
			pageUp( next?: ReturnType< $mol_number['event_inc_boost'] > ): ReturnType< $mol_number['event_inc_boost'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_button_minor__event_click_mol_number_2 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_3 = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_string__type_mol_number_5 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__keyboard_mol_number_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__value_mol_number_7 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_number_8 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled_mol_number_9 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit_mol_number_10 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click_mol_number_11 = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_12 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		event_dec( next?: any ): any
		event_inc( next?: any ): any
		event_dec_boost( next?: any ): any
		event_inc_boost( next?: any ): any
		Hotkey( ): $mol_hotkey
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_chevron_left
		Dec( ): $mol_button_minor
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_chevron_right
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		boost( ): number
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea_edit__value_mol_textarea_1 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint_mol_textarea_2 = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled_mol_textarea_3 = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck_mol_textarea_4 = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max_mol_textarea_5 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection_mol_textarea_6 = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit_mol_textarea_7 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl_mol_textarea_8 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text_mol_textarea_9 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only_mol_textarea_10 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb_mol_textarea_11 = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed_mol_textarea_12 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight_mol_textarea_13 = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__syntax_mol_textarea_14 = $mol_type_enforce<
		ReturnType< $mol_textarea['syntax'] >
		,
		ReturnType< $mol_text_code['syntax'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		syntax( ): $mol_syntax2
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar_today extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=today.view.tree.d.ts.map
declare namespace $ {

	export class $mol_format extends $mol_string {
		mask( id: any): string
		allow( ): string
		hint( ): ReturnType< $mol_format['mask'] >
		keyboard( ): string
	}
	
}

//# sourceMappingURL=format.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hor extends $mol_view {
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_calendar_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_calendar_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_calendar_3 = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub_mol_calendar_4 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__holiday_mol_calendar_5 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub_mol_calendar_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub_mol_calendar_7 = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost_mol_calendar_8 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday_mol_calendar_9 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected_mol_calendar_10 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today_mol_calendar_11 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme_mol_calendar_12 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub_mol_calendar_13 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
	}
	
	export class $mol_calendar_day extends $mol_view {
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__hint_mol_date_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_date_2 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_date_3 = $mol_type_enforce<
		ReturnType< $mol_date['today_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type __mol_date_5 = $mol_type_enforce<
		Parameters< $mol_date['value_changed'] >[0]
		,
		Parameters< ReturnType< $mol_date['Input'] >['value_changed'] >[0]
	>
	type $mol_format__value_mol_date_6 = $mol_type_enforce<
		ReturnType< $mol_date['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask_mol_date_7 = $mol_type_enforce<
		ReturnType< $mol_date['input_mask'] >
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__enabled_mol_date_8 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_button_minor__hint_mol_date_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_date_10 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_date_11 = $mol_type_enforce<
		ReturnType< $mol_date['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_date_13 = $mol_type_enforce<
		ReturnType< $mol_date['input_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint_mol_date_14 = $mol_type_enforce<
		ReturnType< $mol_date['prev_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_date_15 = $mol_type_enforce<
		ReturnType< $mol_date['prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint_mol_date_17 = $mol_type_enforce<
		ReturnType< $mol_date['next_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_date_18 = $mol_type_enforce<
		ReturnType< $mol_date['next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_date_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date_calendar__enabled_mol_date_21 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_date_calendar['enabled'] >
	>
	type $mol_date_calendar__month_moment_mol_date_22 = $mol_type_enforce<
		ReturnType< $mol_date['month_moment'] >
		,
		ReturnType< $mol_date_calendar['month_moment'] >
	>
	type $mol_date_calendar__day_selected_mol_date_23 = $mol_type_enforce<
		ReturnType< $mol_date['day_selected'] >
		,
		ReturnType< $mol_date_calendar['day_selected'] >
	>
	type $mol_date_calendar__day_click_mol_date_24 = $mol_type_enforce<
		ReturnType< $mol_date['day_click'] >
		,
		ReturnType< $mol_date_calendar['day_click'] >
	>
	type $mol_date_calendar__head_mol_date_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_date_calendar['head'] >
	>
	export class $mol_date extends $mol_pick {
		enabled( ): boolean
		today_click( next?: any ): any
		Today_icon( ): $mol_icon_calendar_today
		Today( ): $mol_button_minor
		value( next?: string ): string
		value_changed( next?: ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] > ): ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] >
		input_mask( id: any): string
		Input( ): $mol_format
		clear( next?: any ): any
		Clear_icon( ): $mol_icon_trash_can_outline
		Clear( ): $mol_button_minor
		input_content( ): readonly(any)[]
		Input_row( ): $mol_view
		month_moment( ): ReturnType< $mol_date['value_moment'] >
		day_selected( id: any): boolean
		day_click( id: any, next?: any ): any
		Calendar_title( ): ReturnType< ReturnType< $mol_date['Calendar'] >['Title'] >
		prev_hint( ): string
		prev( next?: any ): any
		Prev_icon( ): $mol_icon_chevron_left
		Prev( ): $mol_button_minor
		next_hint( ): string
		next( next?: any ): any
		Next_icon( ): $mol_icon_chevron_right
		Next( ): $mol_button_minor
		Calendar_tools( ): $mol_view
		Calendar( ): $mol_date_calendar
		Icon( ): $mol_icon_calendar
		bubble_content( ): readonly(any)[]
		value_number( next?: number ): number
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
	type $mol_button_minor__title_mol_date_calendar_1 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_text'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__event_click_mol_date_calendar_2 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_click'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__minimal_height_mol_date_calendar_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__enabled_mol_date_calendar_4 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	export class $mol_date_calendar extends $mol_calendar {
		day_click( id: any, next?: any ): any
		enabled( ): boolean
		Day_button( id: any): $mol_button_minor
		day_content( id: any): readonly(any)[]
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $ {

	type $giper_baza_unit_sand_dump__land_giper_baza_flex_field_1 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['land'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['land'] >
	>
	type $giper_baza_unit_sand_dump__value_giper_baza_flex_field_2 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_value'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['value'] >
	>
	type $mol_select__enabled_giper_baza_flex_field_3 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_giper_baza_flex_field_4 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_giper_baza_flex_field_5 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_giper_baza_flex_field_6 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_label'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_select__Filter_giper_baza_flex_field_7 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__trigger_content_giper_baza_flex_field_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_select['trigger_content'] >
	>
	type $mol_select__value_giper_baza_flex_field_9 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_new'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_giper_baza_flex_field_10 = $mol_type_enforce<
		({ 
			'local': string,
			'pull': string,
			'post': string,
			'read': string,
			'deny': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $giper_baza_flex_form__enabled_giper_baza_flex_field_11 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $giper_baza_flex_form['enabled'] >
	>
	type $giper_baza_flex_form__pawn_giper_baza_flex_field_12 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['dict_pawn'] >
		,
		ReturnType< $giper_baza_flex_form['pawn'] >
	>
	type $giper_baza_unit_sand_dump__land_giper_baza_flex_field_13 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['land'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['land'] >
	>
	type $giper_baza_unit_sand_dump__sand_giper_baza_flex_field_14 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_sand'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['sand'] >
	>
	type $mol_drag__end_giper_baza_flex_field_15 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_drag_end'] >
		,
		ReturnType< $mol_drag['end'] >
	>
	type $mol_drag__transfer_giper_baza_flex_field_16 = $mol_type_enforce<
		({ 
			'text/plain': ReturnType< $giper_baza_flex_field['list_item_value'] >,
			'text/html': ReturnType< $giper_baza_flex_field['list_item_html'] >,
			'text/uri-list': ReturnType< $giper_baza_flex_field['list_item_uri'] >,
		}) 
		,
		ReturnType< $mol_drag['transfer'] >
	>
	type $mol_drag__Sub_giper_baza_flex_field_17 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['List_item_dump'] >
		,
		ReturnType< $mol_drag['Sub'] >
	>
	type $mol_drop__adopt_giper_baza_flex_field_18 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive_giper_baza_flex_field_19 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_receive'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow_giper_baza_flex_field_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub_giper_baza_flex_field_21 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['List_item_drag'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_select__enabled_giper_baza_flex_field_22 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_giper_baza_flex_field_23 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_pick'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_giper_baza_flex_field_24 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_giper_baza_flex_field_25 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_label'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_button_minor__enabled_giper_baza_flex_field_26 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_giper_baza_flex_field_27 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title_giper_baza_flex_field_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_view__sub_giper_baza_flex_field_29 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_items'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_drop__adopt_giper_baza_flex_field_30 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive_giper_baza_flex_field_31 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_receive'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow_giper_baza_flex_field_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub_giper_baza_flex_field_33 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['List_items'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_select__enabled_giper_baza_flex_field_34 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_giper_baza_flex_field_35 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enum'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_giper_baza_flex_field_36 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enum_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_giper_baza_flex_field_37 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enum_label'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_check_box__enabled_giper_baza_flex_field_38 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_check_box__checked_giper_baza_flex_field_39 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['bool'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_number__enabled_giper_baza_flex_field_40 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_number__value_giper_baza_flex_field_41 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['int'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__enabled_giper_baza_flex_field_42 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_number__value_giper_baza_flex_field_43 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['real'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_bar__sub_giper_baza_flex_field_44 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_content'] >
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_textarea__enabled_giper_baza_flex_field_45 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_flex_field_46 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['str'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection_giper_baza_flex_field_47 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['str_selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	type $mol_date__enabled_giper_baza_flex_field_48 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_date['enabled'] >
	>
	type $mol_date__value_moment_giper_baza_flex_field_49 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['time'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_expander__title_giper_baza_flex_field_50 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['dict_title'] >
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content_giper_baza_flex_field_51 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_textarea__enabled_giper_baza_flex_field_52 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_flex_field_53 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection_giper_baza_flex_field_54 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['text_selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	export class $giper_baza_flex_field extends $mol_view {
		Sub( ): $mol_view
		enabled( ): boolean
		enum( next?: any ): any
		enum_options( ): readonly(any)[]
		enum_label( id: any): string
		bool( next?: boolean ): boolean
		int( next?: number ): number
		real( next?: number ): number
		link_value( ): any
		Link_dump( ): $giper_baza_unit_sand_dump
		link( next?: any ): any
		link_options( ): readonly(any)[]
		link_label( id: any): string
		Link_pick( ): $mol_select
		Link_new_icon( ): $mol_icon_plus
		link_new( next?: any ): any
		Link_new( ): $mol_select
		link_content( ): readonly(any)[]
		str( next?: string ): string
		str_selection( next?: readonly(any)[] ): readonly(any)[]
		time( next?: $mol_time_moment ): $mol_time_moment
		dict_title( ): string
		dict_pawn( ): $giper_baza_dict
		Dict_form( ): $giper_baza_flex_form
		text( next?: string ): string
		text_selection( next?: readonly(any)[] ): readonly(any)[]
		list_item_adopt( next?: any ): any
		list_receive( next?: any ): any
		list_item_receive( id: any, next?: any ): any
		list_item_drag_end( id: any, next?: any ): any
		list_item_value( id: any): string
		list_item_html( id: any): string
		list_item_uri( id: any): string
		list_sand( id: any): $giper_baza_unit_sand
		List_item_dump( id: any): $giper_baza_unit_sand_dump
		List_item_drag( id: any): $mol_drag
		List_item_drop( id: any): $mol_drop
		List_item( id: any): ReturnType< $giper_baza_flex_field['List_item_drop'] >
		list_pick( next?: any ): any
		List_pick( ): $mol_select
		list_item_add( next?: any ): any
		List_item_add( ): $mol_button_minor
		list_items( ): readonly(any)[]
		List_items( ): $mol_view
		List_drop( ): $mol_drop
		sub( ): readonly(any)[]
		pawn( next?: $giper_baza_pawn ): $giper_baza_pawn
		land( ): ReturnType< ReturnType< $giper_baza_flex_field['pawn'] >['land'] >
		prop( ): $giper_baza_flex_prop
		Enum( ): $mol_select
		Bool( ): $mol_check_box
		Int( ): $mol_number
		Real( ): $mol_number
		Ref( ): $mol_bar
		Str( ): $mol_textarea
		Time( ): $mol_date
		Dict( ): $mol_expander
		Text( ): $mol_textarea
		List( ): ReturnType< $giper_baza_flex_field['List_drop'] >
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type __mol_form_2 = $mol_type_enforce<
		Parameters< $mol_form['submit_activate'] >[0]
		,
		Parameters< ReturnType< $mol_form['Submit'] >['activate'] >[0]
	>
	type $mol_button_major__title_mol_form_3 = $mol_type_enforce<
		ReturnType< $mol_form['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__hint_mol_form_4 = $mol_type_enforce<
		ReturnType< $mol_form['submit_hint'] >
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_mol_form_5 = $mol_type_enforce<
		ReturnType< $mol_form['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_status__message_mol_form_6 = $mol_type_enforce<
		ReturnType< $mol_form['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_row__sub_mol_form_7 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_invalid( ): string
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		submit_title( ): string
		submit_hint( ): string
		submit_activate( next?: ReturnType< ReturnType< $mol_form['Submit'] >['activate'] > ): ReturnType< ReturnType< $mol_form['Submit'] >['activate'] >
		submit( next?: any ): any
		Submit( ): $mol_button_major
		result( next?: any ): any
		Result( ): $mol_status
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		save( next?: any ): any
		message_done( ): string
		errors( ): Record<string, string>
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	type $giper_baza_flex_field__pawn_giper_baza_flex_form_1 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['field_pawn'] >
		,
		ReturnType< $giper_baza_flex_field['pawn'] >
	>
	type $giper_baza_flex_field__prop_giper_baza_flex_form_2 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['field_prop'] >
		,
		ReturnType< $giper_baza_flex_field['prop'] >
	>
	type $giper_baza_flex_field__enabled_giper_baza_flex_form_3 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['enabled'] >
		,
		ReturnType< $giper_baza_flex_field['enabled'] >
	>
	type $mol_view__sub_giper_baza_flex_form_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_form_field__name_giper_baza_flex_form_5 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['field_name'] >
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_giper_baza_flex_form_6 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['Field_content'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	export class $giper_baza_flex_form extends $mol_list {
		field_name( id: any): string
		field_pawn( id: any, next?: $giper_baza_pawn ): $giper_baza_pawn
		field_prop( id: any): $giper_baza_flex_prop
		enabled( ): boolean
		Field_control( id: any): $giper_baza_flex_field
		Field_content( id: any): $mol_view
		Field( id: any): $mol_form_field
		fields( ): readonly(any)[]
		pawn( ): $giper_baza_dict
		meta( ): $giper_baza_flex_meta
		rows( ): ReturnType< $giper_baza_flex_form['fields'] >
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_giper_baza_pawn_dump_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_2 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__hint_giper_baza_pawn_dump_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_4 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['key_new'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__submit_giper_baza_pawn_dump_5 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['add_key'] >
		,
		ReturnType< $mol_textarea['submit'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_6 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__hint_giper_baza_pawn_dump_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_8 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['value_new'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__submit_giper_baza_pawn_dump_9 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['add_value'] >
		,
		ReturnType< $mol_textarea['submit'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_10 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_11 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_12 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_13 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['value_str'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_select__value_giper_baza_pawn_dump_14 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_tag'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_giper_baza_pawn_dump_15 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__dictionary_giper_baza_pawn_dump_16 = $mol_type_enforce<
		({ 
			'term': string,
			'solo': string,
			'vals': string,
			'keys': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_view__sub_giper_baza_pawn_dump_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__sub_giper_baza_pawn_dump_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__enabled_giper_baza_pawn_dump_19 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_giper_baza_pawn_dump_20 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_wipe'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $giper_baza_unit_sand_dump__land_giper_baza_pawn_dump_21 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['land'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['land'] >
	>
	type $giper_baza_unit_sand_dump__sand_giper_baza_pawn_dump_22 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_value'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['sand'] >
	>
	type $giper_baza_pawn_dump__tag_giper_baza_pawn_dump_23 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_tag'] >
		,
		ReturnType< $giper_baza_pawn_dump['tag'] >
	>
	type $giper_baza_pawn_dump__addons_giper_baza_pawn_dump_24 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['pawn_addons'] >
		,
		ReturnType< $giper_baza_pawn_dump['addons'] >
	>
	type $giper_baza_pawn_dump__pawn_giper_baza_pawn_dump_25 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['pawn_inner'] >
		,
		ReturnType< $giper_baza_pawn_dump['pawn'] >
	>
	type $mol_view__sub_giper_baza_pawn_dump_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_giper_baza_pawn_dump_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_baza_pawn_dump extends $mol_expander {
		can_change( ): ReturnType< ReturnType< $giper_baza_pawn_dump['pawn'] >['can_change'] >
		land( ): ReturnType< ReturnType< $giper_baza_pawn_dump['pawn'] >['land'] >
		title( ): string
		Head( ): $mol_paragraph
		key_new( next?: string ): string
		add_key( next?: any ): any
		Add_key( ): $mol_textarea
		value_new( next?: string ): string
		add_value( next?: any ): any
		Add_value( ): $mol_textarea
		text( next?: string ): string
		Value_text( ): $mol_textarea
		value_str( next?: string ): string
		Value_str( ): $mol_textarea
		unit_tag( id: any, next?: string ): string
		Unit_tag( id: any): $mol_select
		unit_time( id: any): string
		Unit_time( id: any): $mol_view
		Unit_wipe_icon( id: any): $mol_icon_close
		unit_wipe( id: any, next?: any ): any
		Unit_wipe( id: any): $mol_button_minor
		unit_value( id: any): any
		Unit_value( id: any): $giper_baza_unit_sand_dump
		pawn_addons( id: any): readonly(any)[]
		pawn_inner( id: any): $giper_baza_pawn
		Pawn_inner( id: any): $giper_baza_pawn_dump
		Inner( id: any): $mol_view
		pawns( ): readonly(any)[]
		pawn( ): $giper_baza_pawn
		tag( ): string
		label( ): readonly(any)[]
		addons( ): readonly(any)[]
		Tools( ): $mol_view
		editors( ): readonly(any)[]
		content( ): ReturnType< $giper_baza_pawn_dump['pawns'] >
	}
	
}

//# sourceMappingURL=dump.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_source extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_source_fork extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=fork.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_download extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_download extends $mol_button_minor {
		Icon( ): $mol_icon_download
		title( ): string
		blob( ): any
		uri( ): string
		file_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $ {

	type $giper_baza_link_chip__link_giper_baza_land_page_1 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['pawn_link'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $giper_baza_link_chip__link_giper_baza_land_page_2 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['meta_link'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $giper_baza_link_chip__sub_giper_baza_land_page_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_link_chip['sub'] >
	>
	type $giper_baza_flex_form__pawn_giper_baza_land_page_4 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['pawn'] >
		,
		ReturnType< $giper_baza_flex_form['pawn'] >
	>
	type $giper_baza_pawn_dump__title_giper_baza_land_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_pawn_dump['title'] >
	>
	type $giper_baza_pawn_dump__pawn_giper_baza_land_page_6 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['pawn'] >
		,
		ReturnType< $giper_baza_pawn_dump['pawn'] >
	>
	type $giper_baza_pawn_dump__title_giper_baza_land_page_7 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_pawn_dump['title'] >
	>
	type $giper_baza_pawn_dump__pawn_giper_baza_land_page_8 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['tine'] >
		,
		ReturnType< $giper_baza_pawn_dump['pawn'] >
	>
	type $mol_list__rows_giper_baza_land_page_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_labeler__Content_giper_baza_land_page_10 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['Raw_content'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_button_minor__hint_giper_baza_land_page_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub_giper_baza_land_page_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_giper_baza_land_page_13 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['fork'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_view__sub_giper_baza_land_page_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_download__hint_giper_baza_land_page_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['hint'] >
	>
	type $mol_button_download__blob_giper_baza_land_page_16 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['dump'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name_giper_baza_land_page_17 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['dump_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_view__sub_giper_baza_land_page_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_baza_land_page extends $mol_page {
		pawn_link( ): ReturnType< ReturnType< $giper_baza_land_page['pawn'] >['link'] >
		Pawn_link( ): $giper_baza_link_chip
		meta_link( ): $giper_baza_link
		Meta_link( ): $giper_baza_link_chip
		Flex( ): $giper_baza_flex_form
		Raw_data( ): $giper_baza_pawn_dump
		tine( ): $giper_baza_pawn
		Raw_tine( ): $giper_baza_pawn_dump
		Raw_content( ): $mol_list
		Raw( ): $mol_labeler
		Fork_icon( ): $mol_icon_source_fork
		fork( next?: any ): any
		Fork( ): $mol_button_minor
		size( ): string
		Size( ): $mol_view
		dump( ): $mol_blob
		dump_name( ): string
		Dump( ): $mol_button_download
		Dumping( ): $mol_view
		land( ): $giper_baza_land
		pawn( ): $giper_baza_dict
		head( ): readonly(any)[]
		body( ): readonly(any)[]
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_delete extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=delete.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_delete_forever extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=forever.view.tree.d.ts.map
declare namespace $ {

	export class $giper_baza_land_grab extends $mol_select {
		Trigger_icon( ): $mol_icon_plus
		Filter( ): any
		trigger_content( ): readonly(any)[]
		dictionary( ): ({ 
			'pull': string,
			'post': string,
			'read': string,
			'deny': string,
		}) 
		grab( next?: $giper_baza_rank_preset | null ): $giper_baza_rank_preset | null
	}
	
}

//# sourceMappingURL=grab.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files_mol_button_open_1 = $mol_type_enforce<
		ReturnType< $mol_button_open['files_handled'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept_mol_button_open_2 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple_mol_button_open_3 = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(File)[] ): readonly(File)[]
		files_handled( next?: ReturnType< $mol_button_open['files'] > ): ReturnType< $mol_button_open['files'] >
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(File)[] ): readonly(File)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__hint_giper_baza_land_rights_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_giper_baza_land_rights_2 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['add_key'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_giper_baza_land_rights_3 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['add_commit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_giper_baza_land_rights_4 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_button_minor__click_giper_baza_land_rights_5 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['add_commit'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled_giper_baza_land_rights_6 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_giper_baza_land_rights_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_giper_baza_land_rights_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__hint_giper_baza_land_rights_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__value_giper_baza_land_rights_10 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['gift_rate'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_giper_baza_land_rights_11 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__Filter_giper_baza_land_rights_12 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__dictionary_giper_baza_land_rights_13 = $mol_type_enforce<
		({ 
			'0': string,
			'1': string,
			'2': string,
			'3': string,
			'4': string,
			'5': string,
			'6': string,
			'7': string,
			'8': string,
			'9': string,
			'A': string,
			'B': string,
			'C': string,
			'D': string,
			'E': string,
			'F': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__hint_giper_baza_land_rights_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__value_giper_baza_land_rights_15 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['gift_tier'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__Filter_giper_baza_land_rights_16 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__dictionary_giper_baza_land_rights_17 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['tier_options'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__enabled_giper_baza_land_rights_18 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_avatar__id_giper_baza_land_rights_19 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['peer_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $giper_baza_link_chip__param_giper_baza_land_rights_20 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['link_param'] >
		,
		ReturnType< $giper_baza_link_chip['param'] >
	>
	type $giper_baza_link_chip__link_giper_baza_land_rights_21 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['peer_link'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $giper_baza_link_chip__sub_giper_baza_land_rights_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_link_chip['sub'] >
	>
	type $mol_view__sub_giper_baza_land_rights_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_baza_land_rights extends $mol_list {
		add_key( next?: string ): string
		add_commit( next?: any ): any
		enabled( ): boolean
		Add_key( ): $mol_string
		Add_commit_icon( ): $mol_icon_plus
		Add_commit( ): $mol_button_minor
		Add( ): $mol_view
		gift_rate( id: any, next?: string ): string
		Gift_rate( id: any): $mol_select
		gift_tier( id: any, next?: string ): string
		tier_options( ): ({ 
			'deny': string,
			'read': string,
			'post': string,
			'pull': string,
			'rule': string,
		}) 
		Gift_tier( id: any): $mol_select
		link_param( ): string
		peer_link( id: any): $giper_baza_link
		peer_id( id: any): string
		Gift_avatar( id: any): $mol_avatar
		Gift_name( id: any): $giper_baza_link_chip
		Gift( id: any): $mol_view
		gifts( ): readonly(any)[]
		land( ): $giper_baza_land
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=rights.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__hint_giper_baza_glob_book_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__arg_giper_baza_glob_book_2 = $mol_type_enforce<
		({ 
			'link': ReturnType< $giper_baza_glob_book['home_link'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_giper_baza_glob_book_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_giper_baza_glob_book_4 = $mol_type_enforce<
		({ 
			'side': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_giper_baza_glob_book_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $giper_baza_land_page__land_giper_baza_glob_book_6 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land'] >
		,
		ReturnType< $giper_baza_land_page['land'] >
	>
	type $giper_baza_land_page__pawn_giper_baza_glob_book_7 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['pawn'] >
		,
		ReturnType< $giper_baza_land_page['pawn'] >
	>
	type $giper_baza_land_page__tools_giper_baza_glob_book_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_land_page['tools'] >
	>
	type $mol_check_box__checked_giper_baza_glob_book_9 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_pick__hint_giper_baza_glob_book_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['hint'] >
	>
	type $mol_pick__clicks_giper_baza_glob_book_11 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['wipe'] >
		,
		ReturnType< $mol_pick['clicks'] >
	>
	type $mol_pick__align_hor_giper_baza_glob_book_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['align_hor'] >
	>
	type $mol_pick__trigger_content_giper_baza_glob_book_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content_giper_baza_glob_book_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $giper_baza_land_grab__hint_giper_baza_glob_book_15 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_land_grab['hint'] >
	>
	type $giper_baza_land_grab__align_hor_giper_baza_glob_book_16 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_land_grab['align_hor'] >
	>
	type $giper_baza_land_grab__grab_giper_baza_glob_book_17 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land_add'] >
		,
		ReturnType< $giper_baza_land_grab['grab'] >
	>
	type $mol_button_open__hint_giper_baza_glob_book_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['hint'] >
	>
	type $mol_button_open__files_giper_baza_glob_book_19 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['update'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_button_download__hint_giper_baza_glob_book_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['hint'] >
	>
	type $mol_button_download__enabled_giper_baza_glob_book_21 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['dump_enabled'] >
		,
		ReturnType< $mol_button_download['enabled'] >
	>
	type $mol_button_download__blob_giper_baza_glob_book_22 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['dump'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name_giper_baza_glob_book_23 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['dump_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_link__arg_giper_baza_glob_book_24 = $mol_type_enforce<
		({ 
			'side': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_giper_baza_glob_book_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $giper_baza_land_rights__land_giper_baza_glob_book_26 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land_current'] >
		,
		ReturnType< $giper_baza_land_rights['land'] >
	>
	type $mol_page__title_giper_baza_glob_book_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_giper_baza_glob_book_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_giper_baza_glob_book_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	export class $giper_baza_glob_book extends $mol_book2_catalog {
		home_link( ): string
		Home_link_icon( ): $mol_icon_account
		Home_link( ): $mol_link
		land( id: any): $giper_baza_land
		pawn( id: any): $giper_baza_dict
		Rights_open_icon( ): $mol_icon_security
		Rights_open( ): $mol_link
		Land( id: any): $giper_baza_land_page
		land_checked( id: any, next?: boolean ): boolean
		Land_checked( id: any): $mol_check_box
		wipe( next?: any ): any
		Wipe_icon( ): $mol_icon_delete_forever
		Wipe_pick( ): $mol_pick
		land_add( next?: $giper_baza_rank_preset | null ): $giper_baza_rank_preset | null
		Land_add( ): $giper_baza_land_grab
		update( next?: readonly(any)[] ): readonly(any)[]
		Update( ): $mol_button_open
		dump_enabled( ): boolean
		dump( ): $mol_blob
		dump_name( ): string
		Dump( ): $mol_button_download
		Rights_close_icon( ): $mol_icon_close
		Rights_close( ): $mol_link
		land_current( ): $giper_baza_land
		Rights_form( ): $giper_baza_land_rights
		menu_title( ): string
		menu_tools( ): readonly(any)[]
		param( ): string
		Spread( id: any): ReturnType< $giper_baza_glob_book['Land'] >
		menu_item_content( id: any): readonly($mol_view)[]
		menu_foot( ): readonly(any)[]
		Rights_page( ): $mol_page
	}
	
}

//# sourceMappingURL=book.view.tree.d.ts.map
declare namespace $ {

	export class $mol_chip extends $mol_view {
		hint( ): string
		minimal_height( ): number
		attr( ): ({ 
			'title': ReturnType< $mol_chip['hint'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_group extends $mol_svg {
		dom_name( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_title extends $mol_svg {
		dom_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=title.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range__mol_plot_graph_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__mol_plot_graph_9 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['viewport_x'] >, ReturnType< $mol_plot_graph['viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_graph_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_graph_11 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_pane_x'] >, ReturnType< $mol_plot_graph['dimensions_pane_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_graph_12 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_x'] >, ReturnType< $mol_plot_graph['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_graph_13 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_graph_14 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['gap_x'] >, ReturnType< $mol_plot_graph['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_svg_title__title_mol_plot_graph_15 = $mol_type_enforce<
		ReturnType< $mol_plot_graph['hint'] >
		,
		ReturnType< $mol_svg_title['title'] >
	>
	export class $mol_plot_graph extends $mol_svg_group {
		type( ): string
		color( ): string
		viewport_x( ): $mol_vector_range<number>
		viewport_y( ): $mol_vector_range<number>
		dimensions_pane_x( ): $mol_vector_range<number>
		dimensions_pane_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		title( ): string
		hint( ): ReturnType< $mol_plot_graph['title'] >
		series_x( ): readonly(number)[]
		series_y( ): readonly(number)[]
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph['type'] >,
		})  & ReturnType< $mol_svg_group['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph['color'] >,
		})  & ReturnType< $mol_svg_group['style'] >
		viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		shift( ): readonly(number)[]
		scale( ): readonly(number)[]
		cursor_position( ): $mol_vector_2d<number>
		dimensions_pane( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		size_real( ): $mol_vector_2d<number>
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		repos_x( id: any): number
		repos_y( id: any): number
		indexes( ): readonly(number)[]
		points( ): readonly(readonly(number)[])[]
		front( ): readonly($mol_svg)[]
		back( ): readonly($mol_svg)[]
		Hint( ): $mol_svg_title
		hue( next?: number ): number
		Sample( ): any
	}
	
	export class $mol_plot_graph_sample extends $mol_view {
		type( ): string
		color( ): string
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph_sample['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph_sample['color'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=graph.view.tree.d.ts.map
declare namespace $ {

	type $mol_plot_graph_sample__color_mol_plot_line_1 = $mol_type_enforce<
		ReturnType< $mol_plot_line['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	type $mol_plot_graph_sample__type_mol_plot_line_2 = $mol_type_enforce<
		ReturnType< $mol_plot_line['type'] >
		,
		ReturnType< $mol_plot_graph_sample['type'] >
	>
	export class $mol_plot_line extends $mol_plot_graph {
		curve( ): string
		threshold( ): number
		spacing( ): number
		color_fill( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_plot_line['curve'] >,
		})  & ReturnType< $mol_plot_graph['attr'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_rect extends $mol_svg {
		width( ): string
		height( ): string
		pos_x( ): string
		pos_y( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'width': ReturnType< $mol_svg_rect['width'] >,
			'height': ReturnType< $mol_svg_rect['height'] >,
			'x': ReturnType< $mol_svg_rect['pos_x'] >,
			'y': ReturnType< $mol_svg_rect['pos_y'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=rect.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_text extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		align( ): string
		align_hor( ): ReturnType< $mol_svg_text['align'] >
		align_vert( ): string
		text( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_text['pos_x'] >,
			'y': ReturnType< $mol_svg_text['pos_y'] >,
			'text-anchor': ReturnType< $mol_svg_text['align_hor'] >,
			'alignment-baseline': ReturnType< $mol_svg_text['align_vert'] >,
		})  & ReturnType< $mol_svg['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_rect__pos_x_mol_plot_ruler_1 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_x'] >
		,
		ReturnType< $mol_svg_rect['pos_x'] >
	>
	type $mol_svg_rect__pos_y_mol_plot_ruler_2 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_y'] >
		,
		ReturnType< $mol_svg_rect['pos_y'] >
	>
	type $mol_svg_rect__width_mol_plot_ruler_3 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height_mol_plot_ruler_4 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_path__geometry_mol_plot_ruler_5 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text__pos_x_mol_plot_ruler_6 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_x'] >
		,
		ReturnType< $mol_svg_text['pos_x'] >
	>
	type $mol_svg_text__pos_y_mol_plot_ruler_7 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_y'] >
		,
		ReturnType< $mol_svg_text['pos_y'] >
	>
	type $mol_svg_text__align_mol_plot_ruler_8 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__text_mol_plot_ruler_9 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_vector_range__mol_plot_ruler_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_ruler_11 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_text__pos_mol_plot_ruler_12 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_pos'] >
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__text_mol_plot_ruler_13 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_text'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_svg_text__align_mol_plot_ruler_14 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	export class $mol_plot_ruler extends $mol_plot_graph {
		background_x( ): string
		background_y( ): string
		background_width( ): string
		background_height( ): string
		Background( ): $mol_svg_rect
		curve( ): string
		Curve( ): $mol_svg_path
		labels_formatted( ): readonly(any)[]
		title_pos_x( ): string
		title_pos_y( ): string
		title_align( ): string
		Title( ): $mol_svg_text
		label_pos_x( id: any): string
		label_pos_y( id: any): string
		label_pos( id: any): readonly(any)[]
		label_text( id: any): string
		label_align( ): string
		step( ): number
		scale_axis( ): number
		scale_step( ): number
		shift_axis( ): number
		dimensions_axis( ): $mol_vector_range<number>
		viewport_axis( ): $mol_vector_range<number>
		axis_points( ): readonly(number)[]
		normalize( next?: number ): number
		precision( ): number
		sub( ): readonly(any)[]
		Label( id: any): $mol_svg_text
	}
	
}

//# sourceMappingURL=ruler.view.tree.d.ts.map
declare namespace $ {

	export class $mol_plot_ruler_vert extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_y( ): string
		label_pos_x( id: any): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
		background_height( ): string
		background_width( ): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
	}
	
}

//# sourceMappingURL=vert.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_rect__width_mol_svg_text_box_1 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height_mol_svg_text_box_2 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_rect__pos_mol_svg_text_box_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_rect['pos'] >
	>
	type $mol_svg_text__pos_mol_svg_text_box_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__align_mol_svg_text_box_5 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__sub_mol_svg_text_box_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['sub'] >
	>
	export class $mol_svg_text_box extends $mol_svg_group {
		box_width( ): string
		box_height( ): string
		box_pos_x( ): ReturnType< $mol_svg_text_box['pos_x'] >
		box_pos_y( ): string
		Back( ): $mol_svg_rect
		pos_x( ): string
		pos_y( ): string
		align( ): string
		text( ): string
		Text( ): $mol_svg_text
		font_size( ): number
		width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range__mol_plot_mark_cross_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_mark_cross_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_path__geometry_mol_plot_mark_cross_3 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text_box__pos_x_mol_plot_mark_cross_4 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y_mol_plot_mark_cross_5 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text_mol_plot_mark_cross_6 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_svg_text_box__pos_x_mol_plot_mark_cross_7 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y_mol_plot_mark_cross_8 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text_mol_plot_mark_cross_9 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_vector_2d__mol_plot_mark_cross_10 = $mol_type_enforce<
		[ ReturnType< $mol_plot_mark_cross['dimensions_x'] >, ReturnType< $mol_plot_mark_cross['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_mark_cross extends $mol_plot_graph {
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		curve( ): string
		Curve( ): $mol_svg_path
		title_x_pos_x( ): string
		title_x_pos_y( ): string
		title_x( ): string
		Label_x( ): $mol_svg_text_box
		title_y_pos_x( ): string
		title_y_pos_y( ): string
		title_y( ): string
		Label_y( ): $mol_svg_text_box
		labels( ): readonly(string)[]
		title_x_gap( ): number
		title_y_gap( ): number
		threshold( ): number
		graphs( ): readonly($mol_plot_graph)[]
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $ {

	type $mol_gallery__style_mol_gallery_1 = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items_mol_gallery_2 = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map
declare namespace $ {

	type $mol_gallery__items_mol_chart_legend_1 = $mol_type_enforce<
		ReturnType< $mol_chart_legend['graph_legends'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_view__sub_mol_chart_legend_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_chart_legend_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_chart_legend_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_chart_legend extends $mol_scroll {
		graph_legends( ): readonly($mol_view)[]
		Gallery( ): $mol_gallery
		Graph_sample( id: any): any
		Graph_sample_box( id: any): $mol_view
		graph_title( id: any): string
		Graph_title( id: any): $mol_view
		graphs( ): readonly($mol_plot_graph)[]
		graphs_front( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
		Graph_legend( id: any): $mol_view
	}
	
}

//# sourceMappingURL=legend.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_2d__mol_touch_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_touch_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_touch_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range__mol_plot_pane_1 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_left'] >, ReturnType< $mol_plot_pane['gap_right'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_2 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_bottom'] >, ReturnType< $mol_plot_pane['gap_top'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_9 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_touch__zoom_mol_plot_pane_11 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan_mol_plot_pane_12 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['shift'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	type $mol_touch__allow_draw_mol_plot_pane_13 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_draw'] >
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan_mol_plot_pane_14 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_touch__allow_zoom_mol_plot_pane_15 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_zoom'] >
		,
		ReturnType< $mol_touch['allow_zoom'] >
	>
	type $mol_touch__draw_start_mol_plot_pane_16 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_start'] >
		,
		ReturnType< $mol_touch['draw_start'] >
	>
	type $mol_touch__draw_mol_plot_pane_17 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw'] >
		,
		ReturnType< $mol_touch['draw'] >
	>
	type $mol_touch__draw_end_mol_plot_pane_18 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_end'] >
		,
		ReturnType< $mol_touch['draw_end'] >
	>
	type $mol_vector_2d__mol_plot_pane_19 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_x'] >, ReturnType< $mol_plot_pane['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_20 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['shift_limit_x'] >, ReturnType< $mol_plot_pane['shift_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_21 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_22 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_23 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['scale_limit_x'] >, ReturnType< $mol_plot_pane['scale_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_24 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_25 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_26 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_27 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_28 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_x'] >, ReturnType< $mol_plot_pane['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_29 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_viewport_x'] >, ReturnType< $mol_plot_pane['dimensions_viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_pane extends $mol_svg_root {
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		shift_limit_x( ): $mol_vector_range<number>
		shift_limit_y( ): $mol_vector_range<number>
		scale_limit_x( ): $mol_vector_range<number>
		scale_limit_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		dimensions_viewport_x( ): $mol_vector_range<number>
		dimensions_viewport_y( ): $mol_vector_range<number>
		graphs_sorted( ): readonly($mol_svg)[]
		graphs( ): readonly($mol_plot_graph)[]
		graphs_positioned( ): ReturnType< $mol_plot_pane['graphs'] >
		graphs_visible( ): ReturnType< $mol_plot_pane['graphs_positioned'] >
		zoom( next?: number ): number
		cursor_position( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['pointer_center'] >
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_type'] >
		action_point( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_point'] >
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		Touch( ): $mol_touch
		aspect( ): string
		hue_base( next?: number ): number
		hue_shift( next?: number ): number
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_right( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_top( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap_bottom( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_default( ): $mol_vector_2d<number>
		shift( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		scale_default( ): $mol_vector_2d<number>
		scale( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_x( next?: number ): number
		scale_y( next?: number ): number
		size( ): $mol_vector_2d<number>
		size_real( ): $mol_vector_2d<number>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions_viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): ReturnType< $mol_plot_pane['graphs_sorted'] >
		graphs_colored( ): ReturnType< $mol_plot_pane['graphs_visible'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pane.view.tree.d.ts.map
declare namespace $ {

	type $mol_chart_legend__graphs_mol_chart_1 = $mol_type_enforce<
		ReturnType< $mol_chart['graphs_colored'] >
		,
		ReturnType< $mol_chart_legend['graphs'] >
	>
	type __mol_chart_2 = $mol_type_enforce<
		Parameters< $mol_chart['zoom'] >[0]
		,
		Parameters< ReturnType< $mol_chart['Plot'] >['scale_x'] >[0]
	>
	type $mol_plot_pane__zoom_mol_chart_3 = $mol_type_enforce<
		ReturnType< $mol_chart['zoom'] >
		,
		ReturnType< $mol_plot_pane['zoom'] >
	>
	type $mol_plot_pane__gap_left_mol_chart_4 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_left'] >
		,
		ReturnType< $mol_plot_pane['gap_left'] >
	>
	type $mol_plot_pane__gap_right_mol_chart_5 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_right'] >
		,
		ReturnType< $mol_plot_pane['gap_right'] >
	>
	type $mol_plot_pane__gap_bottom_mol_chart_6 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_bottom'] >
		,
		ReturnType< $mol_plot_pane['gap_bottom'] >
	>
	type $mol_plot_pane__gap_top_mol_chart_7 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_top'] >
		,
		ReturnType< $mol_plot_pane['gap_top'] >
	>
	type $mol_plot_pane__graphs_mol_chart_8 = $mol_type_enforce<
		ReturnType< $mol_chart['graphs'] >
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	type $mol_plot_pane__hue_base_mol_chart_9 = $mol_type_enforce<
		ReturnType< $mol_chart['hue_base'] >
		,
		ReturnType< $mol_plot_pane['hue_base'] >
	>
	type $mol_plot_pane__hue_shift_mol_chart_10 = $mol_type_enforce<
		ReturnType< $mol_chart['hue_shift'] >
		,
		ReturnType< $mol_plot_pane['hue_shift'] >
	>
	export class $mol_chart extends $mol_view {
		Legend( ): $mol_chart_legend
		zoom( next?: ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] > ): ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] >
		graphs_colored( ): ReturnType< ReturnType< $mol_chart['Plot'] >['graphs_colored'] >
		hue_base( ): number
		hue_shift( ): number
		Plot( ): $mol_plot_pane
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_chart['gap_hor'] >
		gap_right( ): ReturnType< $mol_chart['gap_hor'] >
		gap_bottom( ): ReturnType< $mol_chart['gap_vert'] >
		gap_top( ): ReturnType< $mol_chart['gap_vert'] >
		graphs( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chart.view.tree.d.ts.map
declare namespace $ {

	type $giper_baza_link_chip__link_giper_baza_app_stat_page_1 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['home_link'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $giper_baza_link_chip__arg_giper_baza_app_stat_page_2 = $mol_type_enforce<
		({ 
			'section': string,
		})  & ReturnType< $giper_baza_link_chip['arg'] >
		,
		ReturnType< $giper_baza_link_chip['arg'] >
	>
	type $mol_chip__title_giper_baza_app_stat_page_3 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['uptime'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_view__sub_giper_baza_app_stat_page_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_6 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['cpu_user'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_8 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['cpu_system'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_9 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_13 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['mem_free'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_15 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['mem_used'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_16 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_20 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['fs_free'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_21 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_25 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['fs_reads'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_26 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_27 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['fs_writes'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_28 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_31 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_32 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['port_slaves'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_33 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_34 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['port_masters'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_35 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_37 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_39 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['land_active'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_40 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_42 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_43 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_44 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['errors'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_45 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_46 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_47 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_gallery__items_giper_baza_app_stat_page_48 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $giper_baza_app_stat_page extends $mol_page {
		home_link( ): ReturnType< ReturnType< $giper_baza_app_stat_page['home'] >['link'] >
		Land( ): $giper_baza_link_chip
		uptime( ): string
		Uptime( ): $mol_chip
		Main( ): $mol_view
		cpu_user( ): readonly(any)[]
		Cpu_user( ): $mol_plot_line
		cpu_system( ): readonly(any)[]
		Cpu_system( ): $mol_plot_line
		Cpu_ruler_sec( ): $mol_plot_ruler_vert
		times( ): readonly(any)[]
		Cpu_mark( ): $mol_plot_mark_cross
		Cpu( ): $mol_chart
		mem_free( ): readonly(any)[]
		Mem_free( ): $mol_plot_line
		mem_used( ): readonly(any)[]
		Mem_used( ): $mol_plot_line
		Mem_ruler( ): $mol_plot_ruler_vert
		Mem_mark( ): $mol_plot_mark_cross
		Mem( ): $mol_chart
		fs_free( ): readonly(any)[]
		Fs_free( ): $mol_plot_line
		Fs_usage_ruler( ): $mol_plot_ruler_vert
		Fs_usage_mark( ): $mol_plot_mark_cross
		Fs_usage( ): $mol_chart
		fs_reads( ): readonly(any)[]
		Fs_reads( ): $mol_plot_line
		fs_writes( ): readonly(any)[]
		Fs_writes( ): $mol_plot_line
		Fs_acting_ruler( ): $mol_plot_ruler_vert
		Fs_acting_mark( ): $mol_plot_mark_cross
		Fs_acting( ): $mol_chart
		port_slaves( ): readonly(any)[]
		Port_slaves( ): $mol_plot_line
		port_masters( ): readonly(any)[]
		Port_masters( ): $mol_plot_line
		Port_ruler_pct( ): $mol_plot_ruler_vert
		Port_mark( ): $mol_plot_mark_cross
		Ports( ): $mol_chart
		land_active( ): readonly(any)[]
		Land_active( ): $mol_plot_line
		Land_count_ruler( ): $mol_plot_ruler_vert
		Land_count_mark( ): $mol_plot_mark_cross
		Land_count( ): $mol_chart
		errors( ): readonly(any)[]
		Errors( ): $mol_plot_line
		Error_count_ruler( ): $mol_plot_ruler_vert
		Error_count_mark( ): $mol_plot_mark_cross
		Error_count( ): $mol_chart
		Charts( ): $mol_gallery
		home( ): $giper_baza_app_home
		title( ): string
		head( ): readonly(any)[]
		body_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_play extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=play.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__hint_giper_baza_auth_slot_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_giper_baza_auth_slot_2 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['prefix'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_giper_baza_auth_slot_3 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['run'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_check_icon__Icon_giper_baza_auth_slot_4 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['Run_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked_giper_baza_auth_slot_5 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['running'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__enabled_giper_baza_auth_slot_6 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['run_enabled'] >
		,
		ReturnType< $mol_check_icon['enabled'] >
	>
	type $mol_check_icon__label_giper_baza_auth_slot_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_icon['label'] >
	>
	type $mol_bar__sub_giper_baza_auth_slot_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_button_copy__title_giper_baza_auth_slot_9 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['link'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__text_giper_baza_auth_slot_10 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['key'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_list__rows_giper_baza_auth_slot_11 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['keys'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $giper_baza_auth_slot extends $mol_page {
		prefix( next?: string ): string
		run( next?: any ): any
		Prefix( ): $mol_string
		Run_icon( ): $mol_icon_play
		running( next?: boolean ): boolean
		run_enabled( ): boolean
		Running( ): $mol_check_icon
		Input( ): $mol_bar
		link( id: any): string
		key( id: any): string
		Key( id: any): $mol_button_copy
		keys( ): readonly(any)[]
		Keys( ): $mol_list
		title( ): string
		glob( ): $giper_baza_glob
		found( id: any, next?: readonly(string)[] ): readonly(string)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=slot.view.tree.d.ts.map
declare namespace $ {

	type $mol_link_source__uri_giper_baza_app_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_frame__title_giper_baza_app_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri_giper_baza_app_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_frame['uri'] >
	>
	type $giper_baza_glob_book__addon_tools_giper_baza_app_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_glob_book['addon_tools'] >
	>
	type $giper_baza_app_stat_page__tools_giper_baza_app_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_app_stat_page['tools'] >
	>
	type $giper_baza_auth_slot__tools_giper_baza_app_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_auth_slot['tools'] >
	>
	export class $giper_baza_app extends $mol_book2_catalog {
		Source( ): $mol_link_source
		Status( ): $giper_baza_status
		Info( ): $mol_frame
		Glob( ): $giper_baza_glob_book
		Stat( ): $giper_baza_app_stat_page
		Slot( ): $giper_baza_auth_slot
		menu_title( ): string
		param( ): string
		menu_foot( ): readonly(any)[]
		spreads( ): ({ 
			'info': ReturnType< $giper_baza_app['Info'] >,
			'glob': ReturnType< $giper_baza_app['Glob'] >,
			'stat': ReturnType< $giper_baza_app['Stat'] >,
			'slot': ReturnType< $giper_baza_app['Slot'] >,
		}) 
		placeholders( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.web.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
