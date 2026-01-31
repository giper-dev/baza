namespace $ {
	
	export function $giper_baza_empire< Value extends typeof $giper_baza_pawn >( Value: Value ) {
		
		return class $giper_baza_empire extends $giper_baza_atom_link_to( $mol_const( $giper_baza_dict_to( Value ) ) ) {
			
			path( path: readonly $giper_baza_vary_type[], preset?: $giper_baza_rank_preset | $giper_baza_land ) {
				let current = this as $giper_baza_empire | null
				for( const key of path ) {
					current = current?.ensure( preset )?.dive( key, $giper_baza_empire, preset ) ?? null
				}
				return current?.cast( Value ) ?? null
			}
			
			keys( path: readonly $giper_baza_vary_type[] ) {
				let current = this.remote() as $giper_baza_dict | null
				for( const key of path ) {
					current = current?.dive( key, $giper_baza_empire )?.remote() ?? null
				}
				return current?.keys() ?? []
			}
			
			static toString() {
				return this === $giper_baza_empire ? '$giper_baza_empire<' + Value + '>' : super.toString()
			}
			
		}
		
	}
	
}
