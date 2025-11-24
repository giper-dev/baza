namespace $ {
	
	export class $giper_baza_app_home extends $giper_baza_home.with({
		Aliases: $giper_baza_dict_to( $giper_baza_list_str ),
		Stat: $giper_baza_atom_link_to( ()=> $giper_baza_app_stat ),
	}) {
		
		stat( auto?: any ) {
			return this.Stat( auto )?.ensure( this.land() ) ?? null
		}
		
		init() {}
		tick() {}
		
	}
	
}
