/** @jsx $mol_jsx */
/** @jsxFrag $mol_jsx_frag */
namespace $.$$ {
	export class $giper_baza_rich_edit extends $.$giper_baza_rich_edit {
		
		// dom_id() {
		// 	return this.pawn()?.head().str ?? ''
		// }
		
		@ $mol_mem
		editable( next?: string | null ) {
			return next ?? ( this.enabled() ? 'true' : 'false' )
		}
		
		@ $mol_mem
		sub() {
			return [
				this.Content(),
				... this.enabled() ? [ this.Tools() ] : [],
			]
		}
		
		@ $mol_mem
		tools() {
			return [
				// ... this.search_active() ? [ this.Search_panel() ] : [],
				this.Main(),
			]
		}
		
		@ $mol_mem
		content() {
			// console.log('render')
			let nodes = $mol_jsx_attach( $mol_dom_context.document, ()=> this.pawn()?.dom() ?? [] ) as ChildNode[]
			nodes = this.$.$mol_dom_safe( nodes )
			this.selection_load()
			return nodes.length ? nodes : [ <section><p><br/></p></section> ]
		}
		
		@ $mol_mem
		selection( next?: readonly[ from: readonly[ self: string, x: number, y: number ], to: readonly[ self: string, x: number, y: number ] ] ) {
			return this.pawn()?.selection( this.$.$giper_baza_auth.current().pass().lord(), next ) ?? [ [ '', 0, 0 ], [ '', 0, 0 ] ]
		}

		save( event?: Event ) {
			
			const sel = $mol_dom_range.from_selection()
			if( !sel ) return
			
			const root = this.Content().dom_node()
			if( !$mol_dom_range.inside( root ).range_contains( sel ) ) return

			let container = root // sel.container() as Element
            // while( container.parentNode && container !== root ) {
            //     const element = container as Element
            //     if( element.id ) break
            //     container = container.parentNode as Element
            // }
			
			let dom = this.pawn( null! )
			// if( container.id ) dom = dom.land().Pawn( $giper_baza_rich ).Head( new $giper_baza_link( container.id ) )
			let nodes = [ ... container.childNodes ]
			nodes = this.$.$mol_dom_safe( nodes as Element[] )
			// console.log( event, container, dom, nodes )
			dom.dom( nodes as Element[] )
			this.selection_save()
		}

		@ $mol_mem
		selection_sync() {
			return new this.$.$mol_dom_listener(
				$mol_dom_context.document,
				'selectionchange',
				event => this.selection_save(),
			)
		}
		
		@ $mol_mem
		selected() {
			
			$mol_wire_watch()
			
			const sel = $mol_dom_range.from_selection()
			if( !sel ) return false
			
			const root = this.Content().dom_node()
			if( !$mol_dom_range.inside( root ).range_contains( sel ) ) return false

			return true
		}

		selection_save() {

			const sel = $mol_dom_range.from_selection()
			if( !sel ) return
			
			const root = this.Content().dom_node()
			if( !$mol_dom_range.inside( root ).range_contains( sel ) ) return
			
			const point_by = ( point: $mol_dom_point )=> {
				
				let base = ( point.node.nodeType === point.node.ELEMENT_NODE ? point.node : point.node.parentNode ) as Element
				let link = null as null | $giper_baza_link
				
				while( true ) {
					link = $giper_baza_link.check( base.id )
					if( link ) break
					base = base.parentElement as Element
				}
				
				const range = new $mol_dom_range( $mol_dom_point.head( base ), point )
				const len = range.native().toString().length
				// console.log( range.native().toString() )
				
				return [ link.str, len, 0 ] as const
			}
			
			const anchor = point_by( sel.anchor )
			const extend = point_by( sel.extend )
			// console.log( 'save', anchor, extend )
			this.selection([ anchor, extend ])

		}

		// @ $mol_mem
		selection_load() {
			
			if( !this.focused() ) return
			const [ anchor, focus ] = this.selection()
			// console.log( 'load', anchor, focus )
			
			const anchorNode = $mol_dom_context.document.getElementById( anchor[0] )
			const extendNode = $mol_dom_context.document.getElementById( focus[0] )
			
			if( !anchorNode ) return
			if( !extendNode ) return
			
			const root = this.Content().dom_node()
			
			const range = new $mol_dom_range(
				$mol_dom_point.head( anchorNode ).move_chars( root, anchor[1] ),
				$mol_dom_point.head( extendNode ).move_chars( root, focus[1] ),
			)
			// console.log(anchorNode,range)
			range.select()
		}

		// @ $mol_mem
		// saving() {
		// 	const obs = new MutationObserver( $mol_wire_async( ()=> {
		// 		console.log(1)
		// 		this.pawn().dom( this.Body() )
		// 	} ) )
		// 	obs.observe( this.Body(), { attributes: true, childList: true, subtree: true, characterData: true } )
		// }
		
		blocks_selected() {
			
			const sel = $mol_dom_range.from_selection()!
			const node = sel.container()
			const box = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement!
			
			const paragraph = ( box as Element ).closest( 'p' )
			return paragraph ? $mol_dom_range.around( paragraph ) : sel.lifted()
			
		}
		
		override block_wrap( Type: string, event: KeyboardEvent ) {
			
			this.blocks_selected().surround( <Type/> )
			
			this.selection_load()
			this.save()
			
			event.preventDefault()
		}
		
		override block_rewrap( event: KeyboardEvent ) {
			
			const range = this.blocks_selected()
			const box = range.container()
			const root = this.Content().dom_node()
			
			const fractal = [ 'ol', 'pre' ]
			const type = ( box as Element ).localName
			
			this.block_wrap( fractal.includes( type ) ? type : 'ul', event )
			
		}
		
		override block_unwrap( event: KeyboardEvent ) {
			
			event.preventDefault()
			
			const range = this.blocks_selected()
			const root = this.Content().dom_node()
			const container = range.container() as Element
			
			if( container === root ) return
			
			if( range.anchor.pos !== 0 ) {
				
				const prev = container.cloneNode()
				
				while( range.anchor.node.previousSibling ) {
					prev.insertBefore( range.anchor.node.previousSibling, prev.firstChild )
				}
				
				prev.insertBefore( range.anchor.node, null )
				container.before( prev )
				
			}
			
			if( range.extend.node.nextSibling ) {
				const next = container.cloneNode()
				while( range.extend.node.nextSibling ) next.appendChild( range.extend.node.nextSibling )
				container.after( next )
			}
			
			while( container.firstChild ) container.before( container.firstChild )
			container.remove()
			
			this.selection_load()
			this.save()
			
		}
		
		/** Wraps selecion to given element type. */
		override inline_toggle( Type: string, event: KeyboardEvent ) {
			
			const sel = $mol_dom_range.from_selection()!
			
			if( sel.is_empty() ) {
				
				let box = sel.container() as Element
				if( box.nodeType !== box.ELEMENT_NODE ) box = box.parentNode as Element
				
				while( box ) {
					
					if( box === this.Content().dom_node() ) {
						sel.expand().surround( <Type/> )
						break
					}
					
					if( box.localName === Type ) {
						while( box.firstChild ) box.parentNode!.insertBefore( box.firstChild, box )
						box.remove()
						break
					}
					
					box = box.parentNode as Element
				}
				
				
			} else {
				sel.surround( <Type/> )
			}
			
			this.selection_load()
			this.save()
			
			event.preventDefault()
		}
		
		override attach_files( files: readonly File[] ) {
			
			const blob = files[0]!
			const area = this.pawn().land().area_make()
			const file = area.Data( $giper_baza_file )
			
			if( blob.size > 1024**2 ) return [] // 1MB limit
			
			if( blob.type.startsWith( 'image/' ) ) { 
			
				file.type( blob.type )
				file.name( blob.name )
				file.buffer( $mol_wire_sync( blob ).bytes() )
				
				file.land().units_saving()
				
				const img = $mol_wire_sync( $mol_picture ).load( file.uri() )
				const [ width, height ] = $mol_picture.sizes( img )
				
				const sel = $mol_dom_range.from_selection()!
				sel.paste( <img src={ file.uri() } width={ width } height={ height } /> )
				
			}
			
			this.selection_load()
			this.save()
			
			return []
		}
		
		override paste( event: ClipboardEvent ) {
			
			event.preventDefault()
			
			const trans = $mol_dom_event.wrap( event ).transfer()!
			
			if( trans.files().length ) {
				this.attach_files([ trans.files().item(0)! ] )
				return
			}
			
			const sel = $mol_dom_range.from_selection()!
			
			const html = trans.get( 'text/html' )
			const text = trans.get( 'text/plain' )
			
			let url = true
			try { new URL( text ) }
			catch { url = false }
			
			if( url ) {
				
				if( sel.is_empty() ) {
					sel.paste( <a href={text}>{text}</a> )
				} else {
					sel.surround( <a href={text} /> )
				}
				
			} else {
				
				const data = html ? $mol_dom_range.inside( $mol_dom_parse( html ).documentElement ).copy() : new Text( text )
				sel.paste( data )
				
			}
			
			this.selection_load()
			this.save()
			
		}
		
		override hover( event: PointerEvent ) {
			this.editable( event.ctrlKey ? 'false' : null )
		}
		
	}
}
