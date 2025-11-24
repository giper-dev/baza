namespace $ {

	/** Entity dictionary Model with Title property included by default */
	export class $giper_baza_entity extends $giper_baza_dict.with( {
		/** Entity Title - default property for use */
		Title: $giper_baza_atom_text,
	}) {
		
		@ $mol_mem
		title( next?: string ) {
			return this.Title( next )?.val( next ) ?? ''
		}
		
	}
	
}
