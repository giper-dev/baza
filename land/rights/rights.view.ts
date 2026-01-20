namespace $.$$ {
	export class $giper_baza_land_rights extends $.$giper_baza_land_rights {
		
		@ $mol_mem
		override gifts() {
			return [ ... this.land()._gift.keys() ]
				.map( link => this.Gift( new $giper_baza_link( link ) ) )
		}
		
		override peer_id( lord: $giper_baza_link ) {
			return lord.str
		}
		
		override peer_name( lord: $giper_baza_link ) {
			return this.$.$giper_baza_glob.Node( lord, $giper_baza_entity ).title() || lord.str
		}
		
		@ $mol_mem_key
		override gift_rank( lord: $giper_baza_link, next?: keyof typeof $giper_baza_rank_tier ) {
			const rank = this.land().lord_rank( lord, next && $giper_baza_rank_make( next, 'just' ) )
			return $giper_baza_rank_tier[ rank & 0b0_1111_0000 ]
		}
		
		add_commit() {
			const auth = $giper_baza_auth_pass.from( this.add_key() )
			this.land().give( auth, $giper_baza_rank_read )
			this.add_key( '' )
		}
		
	}
}
