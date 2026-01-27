namespace $ {
	
	export const { $giper_baza_rank } = $mol_data_tagged({
		$giper_baza_rank: $mol_data_pipe(
			$mol_data_integer,
			( rank: number )=> {
				if( rank >= $giper_baza_rank_deny && rank <= $giper_baza_rank_rule ) return rank
				$mol_fail( new $mol_data_error( `${rank} is out of Ran range` ) )
			}
		),
	}) 
	
	/** Makes Rank from Tier and Fame names. */
	export function $giper_baza_rank_make(
		tier: keyof typeof $giper_baza_rank_tier,
		fame: keyof typeof $giper_baza_rank_rate,
	) {
		return ( $giper_baza_rank_tier[ tier ] | $giper_baza_rank_rate[ fame ] ) as typeof $giper_baza_rank.Value
	}

	/** Access level: deny, read, post, pull, rule */
	export enum $giper_baza_rank_tier {

		/** Forbidden. There is no access, neither read nor write. */
		deny = 0b0_0000_0000,

		/** Read only */
		read = 0b0_0001_0000,

		/** Post changes (Sand) */
		post = 0b0_0011_0000,

		/** Pull forks (Sand) */
		pull = 0b0_0111_0000,

		/** Full control (Sand, Gift) */
		rule = 0b0_1111_0000,

	}
	
	export function $giper_baza_rank_tier_of( rank: typeof $giper_baza_rank.Value ): $giper_baza_rank_tier {
		return rank & 0b1111_0000
	}
	
	/** Work as bits count by Rate */
	export const $giper_baza_rank_work_rates = [
		0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF,
		0xE, 0xE, 0xE, 0xE, 0xD, 0xD, 0xD, 0xD,
		0xC, 0xC, 0xB, 0xB, 0xA, 0xA, 0x9, 0x9,
		0x8, 0x7, 0x6, 0x5, 0x4, 0x3, 0x2, 0x1,
		0x0,
	] as const
	
	/** Ease of making changes, depends on fame: evil, harm, even, nice, good */
	export enum $giper_baza_rank_rate {

		/** Days delay. */
		late = 0x0,
		
		/** Seconds delay. */
		long = 0xC,

		/** Half-second delay. */
		slow = 0xD,

		/** Milli-seconds delay. */
		fast = 0xE,

		/** Micro-seconds delay. */
		just = 0xF,

	}
	
	export function $giper_baza_rank_rate_of( rank: typeof $giper_baza_rank.Value ): $giper_baza_rank_rate {
		return rank & 0b0000_1111
	}

	export const $giper_baza_rank_deny = $giper_baza_rank_make( 'deny', 'late' )
	export const $giper_baza_rank_read = $giper_baza_rank_make( 'read', 'late' )
	export const $giper_baza_rank_rule = $giper_baza_rank_make( 'rule', 'just' )
	
	export function $giper_baza_rank_pull(
		rate: keyof typeof $giper_baza_rank_rate
	) {
		return $giper_baza_rank_make( 'pull', rate )
	}

	export function $giper_baza_rank_post(
		rate: keyof typeof $giper_baza_rank_rate
	) {
		return $giper_baza_rank_make( 'post', rate )
	}

	/** Mapping Pass to Rank */
	export type $giper_baza_rank_preset = [ $giper_baza_auth_pass | null, typeof $giper_baza_rank.Value ][]

}
