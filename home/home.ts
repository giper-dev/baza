namespace $ {

	/** Land where Lord is King. Contains only main info. */
	export class $giper_baza_home extends $giper_baza_entity.with({
		Selection: $giper_baza_atom_text,
		Hall: $giper_baza_atom_link_to( ()=> $giper_baza_dict ),
	}) {
		
		hall_by< Node extends typeof $giper_baza_dict >(
			Node: Node,
			auto?: null,
		) {
			return this.Hall( auto )?.ensure( auto === null ? this.land() : undefined )?.cast( Node ) ?? null
		}
		
	}
}
