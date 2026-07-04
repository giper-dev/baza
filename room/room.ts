namespace $ {

	/**
	 * Rendezvous Land data root - flat dictionary of json atoms with keys:
	 * - `beat_{lord}` - presence heartbeat `{ t: number }`
	 * - `offer_{from}>{to}` - SDP offer `{ sdp: string, t: number }`
	 * - `answer_{from}>{to}` - SDP answer `{ sdp: string, t: number }`
	 */
	export class $giper_baza_room_data extends $giper_baza_dict_to( $giper_baza_atom_dict ) {}

	/** Makes new Room Land writable by everyone */
	export function $giper_baza_room_grab( this: $ ) {
		return this.$giper_baza_glob.land_grab([ [ null, $giper_baza_rank_post( 'just' ) ] ])
	}

}
