namespace $ {

	/** Hint how interpret inner Units: term, solo, vals, keys */
	export enum $giper_baza_unit_sand_tag {
		/** Itself value. Ignore */
		term = 0b00_000_000,
		/** Value in first sub node. Ignore all after first */
		solo = 0b01_000_000,
		/** List of values */
		vals = 0b10_000_000,
		/** List of keys */
		keys = 0b11_000_000,
	}
	
	/**  (Meta) Data. Actually it's edge between nodes in graph model. */
	export class $giper_baza_unit_sand extends $giper_baza_unit_base {

		static size_equator = 217
		static size_max = 2 ** 16

		_vary = undefined as undefined | $giper_baza_vary_type
		_open = null as Uint8Array< ArrayBuffer > | null
		
		static length( size: number ) {
			if( size >= 2**16 ) throw new Error( `Size too large (${ size })` )
			return size > $giper_baza_unit_sand.size_equator ? 56 : Math.ceil( ( 39 + size ) / 8 ) * 8
		}
		
		static length_ball( size: number ) {
			if( size >= 2**16 ) throw new Error( `Size too large (${ size })` )
			return size > $giper_baza_unit_sand.size_equator ? Math.ceil( ( size - 2 ) / 8 ) * 8 + 2 : 0
		}

		@ $mol_action
		static make( size: number ) {
			
			const sand = this.from( this.length( size ) )
			sand.kind( 'sand' )
			sand.size( size )
			
			return sand
		}
		
		hint(
			tag: keyof typeof $giper_baza_unit_sand_tag = 'term',
		) {
			this.uint8( 1, $giper_baza_unit_sand_tag[ tag ] )
		}

		tag() {
			return $giper_baza_unit_sand_tag[ this.uint8( 1 ) & 0b11_00_0000 ] as keyof typeof $giper_baza_unit_sand_tag
		}
		
		big() {
			return this.size() > $giper_baza_unit_sand.size_equator
		}

		size( next?: number ) {
			if( next === undefined ) {
				let byte = this.uint8( 38 )
				return byte === 255 ? ( this.uint32( 38 ) >>> 8 ) : byte
			} else {
				if( next > $giper_baza_unit_sand.size_equator ) this.uint32( 38, 255 | ( next << 8 ) )
				else this.uint8( 38, next )
				return next
			}
		}

		_head!: $giper_baza_link
		head( next?: $giper_baza_link ) {
			if( next === undefined && this._head !== undefined ) return this._head
			else return this._head = this.id6( 20, next )
		}

		_self!: $giper_baza_link
		self( next?: $giper_baza_link ) {
			if( next === undefined && this._self !== undefined ) return this._self
			else return this._self = this.id6( 26, next )
		}

		_lead!: $giper_baza_link
		lead( next?: $giper_baza_link ) {
			if( next === undefined && this._lead !== undefined ) return this._lead
			else return this._lead = this.id6( 32, next )
		}

		path(): string {
			return `sand:${ this.head() }/${ this.lord() }/${ this.self() }`
		}
		
		_shot!: $giper_baza_link
		shot( next?: $giper_baza_link ) {
			if( this.size() <= $giper_baza_unit_sand.size_equator ) throw new Error( 'Access to Shot of small Sand is unavailable' )
			if( next ) return this._shot = this.id12( 42, next )
			else return this._shot = this._shot ?? this.id12( 42 )
		}
		
		_data!: Uint8Array< ArrayBuffer >
		data( next?: Uint8Array< ArrayBuffer > ) {
			
			const size = this.size()
			if( size > $giper_baza_unit_sand.size_equator ) throw new Error( 'Access to Data of large Sand is unavailable' )
				
			const data = this._data ?? new Uint8Array( this.buffer, this.byteOffset + 39, size )
			if( next ) data.set( next )
			
			return data
		}

		_ball!: Uint8Array< ArrayBuffer >
		ball( next?: Uint8Array< ArrayBuffer > ) {
			if( next === undefined ) {
				
				if( this._ball ) return this._ball
				
				const size = this.size()
				if( size > $giper_baza_unit_sand.size_equator ) return this._ball
				
				return this._ball = this.data()
				
			} else {
				
				this.size( next.byteLength )
				
				if( next.byteLength > $giper_baza_unit_sand.size_equator ) {
					
					this.shot( $giper_baza_link.hash_bin( next ) )
					return this._ball = next
					
				} else {
					
					return this._ball = this.data( next )
				
				}
				
			}
		}

		idea() {
			const size = this.size()
			const length = 6/*head*/ + 6/*lead*/ + ( size > $giper_baza_unit_sand.size_equator ? 4/*size*/ + 12/*shot*/ : 1/*size*/ + size/*data*/ )
			const bin = new Uint8Array( this.buffer, this.byteOffset + 26, length )
			return $mol_hash_numbers( bin )
		}

		dump() {
			return {
				kind: this.kind(),
				lord: this.lord(),
				lead: this.lead(),
				head: this.head(),
				self: this.self(),
				tag: this.tag(),
				size: this.size(),
				time: this.moment().toString( 'YYYY-MM-DD hh:mm:ss' ),
			}
		}

		tier_min() {
			return ( this.head().str === $giper_baza_land_root.tine.str )
				? $giper_baza_rank_tier.pull
				: $giper_baza_rank_tier.post
		}
		
		[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {},
				$mol_dev_format_native( this ),
				' 👾',
				$mol_dev_format_auto( this.lord() ),
				' 📦 ',
				$mol_dev_format_shade(
					this.moment().toString( 'YYYY-MM-DD hh:mm:ss' ),
					' &',
					this.tick(),
				),
				' #',
				$mol_dev_format_auto( this.hash() ),
				' ',
				this.lead().str || '__knot__',
				$mol_dev_format_shade( '\\' ),
				$mol_dev_format_accent( this.head().str || '__root__' ),
				$mol_dev_format_shade( '/' ),
				this.self().str || '__spec__',
				' ',
				{
					term: '💼',
					solo: '1️⃣',
					vals: '🎹',
					keys: '🔑',
				}[ this.tag() ],
				' ',
				$mol_dev_format_auto( this._vary ), //??
				// ( this.size() > 32
				// 	? $mol_dev_format_shade( this.hash() )
				// 	: $mol_dev_format_native( $giper_baza_vary_decode({ tip: this.tip(), bin: this.data() }) )
				// ),
			)
		}

	}

}
