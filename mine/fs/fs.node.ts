namespace $ {
	export class $giper_baza_mine_fs extends $giper_baza_mine {
		
		@ $mol_memo.method
		static root() {
			
			const root = this.$.$mol_file.relative( '.baza' )
			
			this.$.$mol_log3_rise({
				place: this,
				message: '💌 File Storage Ready',
				path: root.path()
			})
			
			return root
		}
		
		@ $mol_mem_key
		static rock_file( hash: $giper_baza_link ) {
			return this.root().resolve( `rock/${ hash.str.slice( 0, 2 ) }/${ hash }.blob` )
		}
		
		@ $mol_mem_key
		static rock( hash: $giper_baza_link, next?: Uint8Array< ArrayBuffer > ): Uint8Array< ArrayBuffer > | null {
			const buf = this.rock_file( hash ).buffer( next )
			if( next ) return buf
			if( hash.str === $giper_baza_link.hash_bin( buf ).str ) return buf
			return null
		}
		
		@ $mol_mem_key
		static units_file( land: $giper_baza_link ) { $giper_baza_land
			const dir = this.root().resolve( `unit/${ land.str.slice( 0, 2 ) }` )
			dir.exists( true )
			return dir.resolve( `${ land }.baza` )
		}
		
		@ $mol_mem_key
		static units_offsets( land: $giper_baza_link ) {
			$mol_wire_solid() 
			return new Map< string, number >()
		}
		
		static units_sizes = new Map< string, number >()
		
		static units_save( land: $giper_baza_link, units: readonly $giper_baza_unit_base[] ) {
			
			const descr = this.units_file( land ).open( 'create', 'read_write' )
			try {
				
				const offsets = this.units_offsets( land )
				const append = [] as $giper_baza_unit_base[]
				
				for( const unit of units ) {
					const off = offsets.get( unit.path() )
					if( off === undefined ) {
						append.push( unit )
					} else {
						descr.write({ buffer: unit, position: off })
						this.units_persisted.add( unit )
					}
				}
				
				if( !append.length ) return
				
				let size = this.units_sizes.get( land.str ) ?? 0
				let offset = size
				size += append.length * $giper_baza_unit_base.size
				descr.truncate(size)
				this.units_sizes.set( land.str, size )
				
				for( const unit of append ) {
					descr.write({ buffer: unit, position: offset })
					offsets.set( unit.path(), offset )
					this.units_persisted.add( unit )
					offset += unit.byteLength
				}
			
			} finally {
				descr.close()
			}
			
			return undefined as any
		}
		
		@ $mol_action
		static async units_load( land: $giper_baza_link ) {
			
			const descr = this.units_file( land ).open( 'create', 'read_write' )
			try {
			
				const buf = descr.read()
				if( !buf.length ) return []
				
				this.units_sizes.set( land.str, buf.length )
				const pack = $giper_baza_pack.from( buf )
				const { lands, rocks } = pack.parts( land )
				const units = lands[ land.str ]?.units ?? []
				
				const offsets = this.units_offsets( land )
				
				for( let i = 0; i < units.length; ++i ) {
					offsets.set( units[i].key(), i * $giper_baza_unit_base.size )
					this.units_persisted.add( units[i] )
				}
				
				return units
				
			} finally {
				descr.close()
			}
			
		}
		
	}
}
