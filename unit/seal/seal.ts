namespace $ {
	
	export let $giper_baza_unit_seal_limit = 14
	
	/**  Sign for hash list */
	export class $giper_baza_unit_seal extends $giper_baza_unit_base {
		
		static length( size: number ) {
			return Math.ceil( ( 84 + size * 12 ) / 8 ) * 8
		}

		@ $mol_action
		static make( size: number, wide: boolean ) {
			const seal = this.from( this.length( size ) )
			seal.kind( 'seal' )
			seal.meta({ size, wide })
			return seal
		}

		meta( next?: { size: number, wide: boolean } ) {
			return this.uint8( 1, next && ( next.size | ( next.wide ? 0b1000_0000 : 0 ) ) )
		}

		size() {
			return this.meta() & 0b1111
		}

		wide() {
			return Boolean( this.meta() & 0b1000_0000 )
		}

		alive_items = new Set< string >
		
		alive_full() {
			return this.alive_items.size === $giper_baza_unit_seal_limit
		}
		
		alive_list() {
			const alive = this.alive_items
			return this.hash_list().filter( hash => alive.has( hash.str ) )
		}
		
		hash_item( index: number, next?: $giper_baza_link ) {
			return this.id12( 20 + index * 12, next )
		}
		
		_hash_list!: readonly $giper_baza_link[]
		hash_list( next?: $giper_baza_link[] ) {
			
			if( next ) {
				
				for( let i = 0; i < next.length; ++i ) {
					this.hash_item( i, next[i] )
				}
				
				// this.size( next.length )
				
				return this._hash_list = next
				
			} else {
				
				const list = []
				const count = this.size()
				
				for( let i = 0; i < count; ++ i ) {
					list.push( this.hash_item( i ) )
				}
				
				return this._hash_list = list
			}
			
		}
		
		/** Hash for signing. */
		_shot!: $giper_baza_link
		shot() {
			return this._shot ?? ( this._shot = $giper_baza_link.hash_bin( new Uint8Array( this.buffer, this.byteOffset, this.byteLength - 64 ) ) )
		}
		
		@ $mol_mem
		sign( next?: Uint8Array< ArrayBuffer > ) {
			const buf = new Uint8Array( this.buffer, this.byteOffset + this.byteLength - 64, 64 )
			if( next ) buf.set( next )
			return buf
		}
		
		// @ $mol_memo.method
		work() {
			
			let int = this.uint32( this.byteLength - 64 )
			
			let count = 0
			while( int & 1 ) {
				int >>>= 1
				++ count
			}
			
			return count
		}
		
		rate_min() {
			return $giper_baza_rank_work_rates[ this.work() ]
		}
		
		tier_min() {
			return $giper_baza_rank_tier.post
		}
		
		rank_min() {
			return this.tier_min() | this.rate_min()
		}
		
		path(): string {
			return `seal:${ this.lord() }/${ $giper_baza_time_dump( this.time(), this.tick() ) }`
		}
		
		inspect() {
			const items = this.hash_list().map( hash => $mol_term_color.cyan( '#' + hash.str ) ).join( ', ' )
			const kind = $mol_term_color.green( '%' )
			return `${ super.inspect() } ${kind} ${items}`
		}
		
		toString() {
			const items = this.hash_list().map( hash => '#' + hash.str ).join( ', ' )
			return `${ super.toString() } % ${items}`
		}
		
		[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' 👾',
				$mol_dev_format_auto( this.lord() ),
				' ✍ ',
				$mol_dev_format_shade(
					this.moment().toString( 'YYYY-MM-DD hh:mm:ss' ),
					' &',
					this.tick().toString(16).padStart( 2, '0' ),
				),
				' #',
				$mol_dev_format_auto( this.hash() ),
				' ',
				$mol_dev_format_auto( this.hash_list() ),
			)
		}
		
	}
	
}
