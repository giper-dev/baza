namespace $.$$ {
	export class $giper_baza_land_rights extends $.$giper_baza_land_rights {
		
		@ $mol_mem
		rows() {
			if( this.enabled() ) return super.rows()
			else return this.gifts()
		}
		
		@ $mol_mem
		override gifts() {
			const land = this.land()
			return [ ... land._gift.keys() ]
				.filter( link => link !== land.link().lord().str )
				.reverse()
				.map( link => this.Gift( new $giper_baza_link( link ) ) )
		}
		
		override peer_link( lord: $giper_baza_link ) {
			return lord
		}
		
		override peer_id( lord: $giper_baza_link ) {
			return lord.str
		}
		
		@ $mol_mem_key
		override gift_tier( lord: $giper_baza_link, next?: keyof typeof $giper_baza_rank_tier ) {
			const rank = this.land().lord_rank( lord, next && $giper_baza_rank_make( next, 'just' ) )
			return $giper_baza_rank_tier[ rank & 0b0_1111_0000 ] as keyof typeof $giper_baza_rank_tier
		}
		
		@ $mol_mem_key
		override gift_rate( lord: $giper_baza_link, next?: string ) {
			const arg = next ? $giper_baza_rank( this.land().lord_rank( lord ) & 0b0_1111_0000 | parseInt( next, 16 ) ) : undefined
			const rank = this.land().lord_rank( lord, arg )
			return ( rank & 0b1111 ).toString( 16 ).toUpperCase()
		}
		
		add_commit() {
			
			let key = this.add_key()
			if( /^\w{8}_\w{8}$/.test( key ) ) {
				
				const link = new $giper_baza_link( key )
				const peer_land = this.$.$giper_baza_glob.Land( link )
				
				const pass = peer_land.lord_pass( link )
				if( !pass ) return $mol_fail( new Error( 'No Pass for Lord' ) )
				
				this.land().give( pass, $giper_baza_rank_read )
				
			} else {
				
				const pass = $giper_baza_auth_pass.from( key )
				this.land().give( pass, $giper_baza_rank_read )
				
			}
			
			this.add_key( '' )
			
		}
		
		@ $mol_mem
		tier_options() {
			if( this.land().encrypted() ) return super.tier_options()
			const options = { ... super.tier_options() }
			delete ( options as any ).deny
			return options
		}
		
		@ $mol_mem
		enabled() {
			return this.land().lord_rank( this.land().auth().pass().lord() ) >= $giper_baza_rank_rule
		}
		
	}
}
