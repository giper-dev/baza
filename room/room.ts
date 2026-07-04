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

	/** Presence heartbeat period, ms */
	export const $giper_baza_room_beat_every = 20_000

	/** Peer with elder heartbeat considered offline, ms */
	export const $giper_baza_room_online_for = 60_000

	/** Presence key of lord */
	export function $giper_baza_room_key_beat( lord: string ) {
		return 'beat_' + lord
	}

	/** Lord from presence key or null for other keys */
	export function $giper_baza_room_beat_lord( key: string ) {
		return key.startsWith( 'beat_' ) ? key.slice( 'beat_'.length ) : null
	}

	/** Directed SDP offer key */
	export function $giper_baza_room_key_offer( from: string, to: string ) {
		return `offer_${ from }>${ to }`
	}

	/** Directed SDP answer key */
	export function $giper_baza_room_key_answer( from: string, to: string ) {
		return `answer_${ from }>${ to }`
	}

	/** Deterministic role: exactly one peer of the pair makes offer - the one with lesser lord */
	export function $giper_baza_room_offerer( self: string, mate: string ) {
		return self < mate
	}

	/** Is presence heartbeat time recent enough */
	export function $giper_baza_room_fresh( beat_time: number, now: number ) {
		return now - beat_time <= $giper_baza_room_online_for
	}

}
