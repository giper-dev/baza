namespace $ {
	
	export function $giper_baza_unit_gift_sort( gifts: $giper_baza_unit_gift[] ) {
		
		const dict = new Map< string, $giper_baza_unit_gift >()
		const graph = new $mol_graph< string, void >()
		
		for( const gift of gifts ) {
			const key = gift.mate().str
			dict.set( key, gift )
			graph.link( key, gift.lord().str )
			graph.link( key, '' )
		}
		
		graph.acyclic( ()=> 1 )
		const keys = [ ... graph.sorted ]
		
		return keys.map( key => dict.get( key )! ).filter( Boolean )

	}
	
	/** Given Rank and Secret */
	export class $giper_baza_unit_gift extends $giper_baza_unit_base {
		
		static length() {
			return 48
		}
		
		@ $mol_action
		static make() {
			const sand = this.from( this.length() )
			sand.kind( 'gift' )
			return sand
		}
		
		rank( next?: typeof $giper_baza_rank.Value ) {
			
			if( next !== undefined ) this.uint8( 0, $giper_baza_unit_kind.gift )
			
			const res = this.uint8( 1, next ) as typeof $giper_baza_rank.Value
			
			if( res < $giper_baza_rank_deny || res > $giper_baza_rank_rule ) {
				$mol_fail( new RangeError( `Wrong rank ${ res }` ) )
			}
			
			return res
		}
		
		tier() {
			return ( this.rank() & $giper_baza_rank_tier.rule ) as $giper_baza_rank_tier
		}
		
		rate() {
			return ( this.rank() & $giper_baza_rank_rate.just ) as $giper_baza_rank_rate
		}
		
		mate( next?: $giper_baza_link ) {
			return this.id12( 20, next )
		}
		
		path(): string {
			return `gift:${ this.mate() }`
		}
		
		_code!: Uint8Array< ArrayBuffer >
		code() {
			return this._code ?? ( this._code = new Uint8Array( this.buffer, this.byteOffset + 32, 16 ) )
		}
		
		code_exists() {
			return this.code().some( b => b )
		}
		
		dump() {
			return {
				kind: this.kind(),
				lord: this.lord(),
				mate: this.mate(),
				tier: $giper_baza_rank_tier[ this.tier() ],
				rate: this.rate(),
				time: this.moment().toString( 'YYYY-MM-DD hh:mm:ss' ),
			}
		}
		
		tier_min() {
			return $giper_baza_rank_tier.rule
		}
		
		[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				$mol_dev_format_auto( this.lord() ),
				' 🏅 ',
				$mol_dev_format_auto( this.mate() ),
				this.code().some( v => v ) ? ' 🔐' : ' 👀',
				$giper_baza_rank_tier[ this.tier() ],
				':',
				this.rate(),
				' ',
				$mol_dev_format_shade(
					this.moment().toString( 'YYYY-MM-DD hh:mm:ss' ),
					' #',
					this.tick(),
				),
				' ',
				$mol_dev_format_auto( this.hash() ),
			)
		}
		
	}
	
}
