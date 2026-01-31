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
	
	/** Data. Actually it's edge between nodes in graph model. */
	export class $giper_baza_unit_sand extends $giper_baza_unit_base {

		static size_equator = 63
		static size_max = 2 ** 16

		_vary = undefined as undefined | $giper_baza_vary_type
		_open = null as Uint8Array< ArrayBuffer > | null
		
		static length( size: number ) {
			if( size > 2**16 ) throw new Error( `Size too large (${ size })` )
			return size > $giper_baza_unit_sand.size_equator ? 52 : Math.ceil( ( 38 + size ) / 8 ) * 8
		}
		
		static length_ball( size: number ) {
			if( size > 2**16 ) throw new Error( `Size too large (${ size })` )
			return size > $giper_baza_unit_sand.size_equator ? Math.ceil( ( size - 4 ) / 8 ) * 8 + 4 : 0
		}

		@ $mol_action
		static make( size: number, tag: keyof typeof $giper_baza_unit_sand_tag = 'term' ) {
			
			if( size >= 2**16 ) throw new Error( `Size too large (${ size })` )
			
			const sand = this.from( this.length( size ) )
			sand.kind( 'sand' )
			
			if( size > $giper_baza_unit_sand.size_equator ) {
				sand.uint16( 38, size % 2**16 )
				size = 0
			}
			
			sand.uint8( 1, size | $giper_baza_unit_sand_tag[ tag ] )
			
			return sand
		}

		tag() {
			return $giper_baza_unit_sand_tag[ this.uint8( 1 ) & 0b11_00_0000 ] as keyof typeof $giper_baza_unit_sand_tag
		}
		
		big() {
			return this.size() > $giper_baza_unit_sand.size_equator
		}

		size() {
			let hint = this.uint8( 1 ) & 0b111_111
			return hint || this.uint16( 38 ) || 2**16
		}
		
		dead() {
			if( this._vary === null ) return true
			if( this.size() > 1 ) return false
			if( this.uint8( 38 ) !== 78/*N*/ ) return false
			return true
		}

		_self!: $giper_baza_link
		self( next?: $giper_baza_link ) {
			if( next === undefined && this._self !== undefined ) return this._self
			else return this._self = this.id6( 20, next )
		}

		_head!: $giper_baza_link
		head( next?: $giper_baza_link ) {
			if( next === undefined && this._head !== undefined ) return this._head
			else return this._head = this.id6( 26, next )
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
			if( !this.big() ) throw new Error( 'Access to Shot of small Sand is unavailable' )
			if( next ) return this._shot = this.id12( 40, next )
			else return this._shot = this._shot ?? this.id12( 40 )
		}
		
		_data!: Uint8Array< ArrayBuffer >
		data( next?: Uint8Array< ArrayBuffer > ) {
			
			if( this.big() ) throw new Error( 'Access to Data of large Sand is unavailable' )
				
			const data = this._data ?? new Uint8Array( this.buffer, this.byteOffset + 38, this.size() )
			if( next ) data.set( next )
			
			return data
		}

		_ball!: Uint8Array< ArrayBuffer >
		ball( next?: Uint8Array< ArrayBuffer > ) {
			if( next === undefined ) {
				
				if( this._ball ) return this._ball
				if( this.big() ) return this._ball
				
				return this._ball = this.data()
				
			} else {
				
				if( this.big() ) {
					
					this.shot( $giper_baza_link.hash_bin( next ) )
					return this._ball = next
					
				} else {
					
					return this._ball = this.data( next )
				
				}
				
			}
		}

		idea_seed() {
			return $mol_hash_numbers( new Uint8Array( this.buffer, this.byteOffset + 26, 12 ) ) // head + lead
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
		
		toString() {
			
			const lead = $mol_term_color.blue( this.lead().str || '__knot__' )
			const head = $mol_term_color.blue( this.head().str || '__root__' )
			const self = $mol_term_color.blue( this.self().str || '__spec__' )
			const tag = {
				term: '💼',
				solo: '1️⃣',
				vals: '🎹',
				keys: '🔑',
			}[ this.tag() ]
			const vary = $mol_term_color.yellow( String( this._vary ) )
			
			return `${ super.toString() } 📦 ${lead}\\${head}/${self} ${tag} ${vary}`
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
