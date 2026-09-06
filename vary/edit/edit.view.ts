namespace $.$$ {
	export class $giper_baza_vary_edit extends $.$giper_baza_vary_edit {
		
		@ $mol_memo.field
		get $() {
			return super.$.$mol_ambient({
				$mol_vary_edit: super.$.$giper_baza_vary_edit as any as typeof $mol_vary_edit,
				$mol_vary: super.$.$giper_baza_vary,
			})
		}
		
		type( next?: string ) {
			if( next !== undefined ) {
				switch( next ) {
					case 'Link': this.link( this.link() ); return next
				}
			}
			return super.type( next )
		}
		
		@ $mol_mem
		type_auto() {
			const val = this.value()
			if( val instanceof $giper_baza_link ) return 'Link'
			return super.type_auto()
		}
		
		@ $mol_mem_key
		Type_icon( type: string ) {
			switch( type ) {
				case 'Link': return this.Link_icon()
			}
			return super.Type_icon( type )
		}
		
		link( next?: $giper_baza_link ) {
			const val = this.value( next )
			if( val instanceof $giper_baza_link ) return val
			if( typeof val === 'string' ) return new $giper_baza_link( val )
			return $giper_baza_link.hole
		}
		
		@ $mol_mem
		head() {
			const type = this.type()
			if( type === 'Link' ) return [ this.Link() ]
			return super.head()
		}
		
	}
}
