namespace $ {

	/**
	 * Direct P2P synchronizer.
	 * Peers met in the same Room Land establish direct WebRTC connections
	 * and sync all common Lands through them, bypassing masters.
	 * Signaling goes through the Room Land itself over regular sync,
	 * so no dedicated signaling server is needed.
	 */
	export class $giper_baza_room extends $mol_object {

		/** Room by Land id */
		@ $mol_mem_key
		static join( link: string ) {
			return this.make({
				link: $mol_const( new $giper_baza_link( link ) ),
			})
		}

		/** Link to the Room Land */
		link() {
			return null! as $giper_baza_link
		}

		land() {
			return this.$.$giper_baza_glob.Land( this.link() )
		}

		data() {
			return this.land().Data( $giper_baza_room_data )
		}

		yard() {
			return this.$.$giper_baza_glob.yard()
		}

		lord() {
			return this.$.$giper_baza_auth.current().pass().lord().str
		}

		/** Established direct ports by mate lord */
		ports = new $mol_wire_dict< string, $mol_rest_port >()

		/** Current time, refreshes every beat period */
		@ $mol_mem
		now( next?: number ): number {
			setTimeout( ()=> this.now( Date.now() ), $giper_baza_room_beat_every )
			return next ?? Date.now()
		}

		/** Reactive P2P loop. Demand it to keep the Room alive. */
		@ $mol_mem
		run() {
			this.beat()
			const mates = this.mates()
			for( const mate of mates ) this.pair( mate )
			return mates
		}

		/** Publishes own presence into the Room */
		@ $mol_mem
		beat() {
			const now = this.now()
			this.signal_send( $giper_baza_room_key_beat( this.lord() ), { t: now } )
			return now
		}

		/** Lords of other online peers in the Room */
		@ $mol_mem
		mates() {

			const now = this.now()
			const self = this.lord()
			const mates = [] as string[]

			for( const key of this.data().keys() ) {

				if( typeof key !== 'string' ) continue

				const lord = $giper_baza_room_beat_lord( key )
				if( !lord || lord === self ) continue

				const beat = this.signal( key )
				if( !beat ) continue
				if( !$giper_baza_room_fresh( Number( beat.t ?? 0 ), now ) ) continue

				mates.push( lord )
			}

			return mates
		}

		signal( key: string ) {
			return this.data().key( key )?.val() ?? null
		}

		@ $mol_action
		signal_send( key: string, val: Record< string, unknown > ) {
			const slot = this.data().key( key, null )
			if( !slot ) return // rights are not synced yet, reactivity will retry
			slot.val( val )
		}

		/** Connection with mate. Peer with lesser lord id makes offer. */
		@ $mol_mem_key
		pair( mate: string ) {
			if( $giper_baza_room_offerer( this.lord(), mate ) ) {
				this.answer_apply( mate )
				return this.propose( mate )
			}
			return this.accept( mate )
		}

		/** Increments to renegotiate connection from scratch */
		@ $mol_mem_key
		restarts( mate: string, next = 0 ) {
			return next
		}

		@ $mol_action
		restart( mate: string ) {
			this.restarts( mate, this.restarts( mate ) + 1 )
		}

		/** Offerer side: makes connection, publishes offer when ICE completes */
		@ $mol_mem_key
		propose( mate: string ) {

			this.restarts( mate )

			const self = this.lord()
			const stamp = Date.now()

			const { rtc, channel, sdp } = $giper_baza_port_webrtc_propose()
			this.channel_bind( mate, rtc, channel )

			sdp.then( sdp => {
				$mol_wire_async( this ).signal_send(
					$giper_baza_room_key_offer( self, mate ),
					{ sdp, t: stamp },
				)
			} ).catch( ( error: Error )=> this.$.$mol_fail_log( error ) )

			return Object.assign( rtc, {
				stamp,
				destructor: ()=> rtc.close(),
			} )
		}

		/** Offerer side: applies answer matching current offer */
		@ $mol_mem_key
		answer_apply( mate: string ) {

			const rtc = this.propose( mate )
			const answer = this.signal( $giper_baza_room_key_answer( mate, this.lord() ) )

			if( !answer ) return false
			if( Number( answer.t ) !== rtc.stamp ) return false
			if( rtc.signalingState !== 'have-local-offer' ) return false

			$giper_baza_port_webrtc_finish( rtc, String( answer.sdp ) )
				.catch( ( error: Error )=> this.$.$mol_fail_log( error ) )

			return true
		}

		/** Answerer side: reacts on fresh offer, publishes answer */
		@ $mol_mem_key
		accept( mate: string ) {

			const self = this.lord()

			const offer = this.signal( $giper_baza_room_key_offer( mate, self ) )
			if( !offer ) return null

			const stamp = Number( offer.t )

			const { rtc, channel, sdp } = $giper_baza_port_webrtc_accept( String( offer.sdp ) )

			channel.then( channel => this.channel_bind( mate, rtc, channel ) )

			sdp.then( sdp => {
				$mol_wire_async( this ).signal_send(
					$giper_baza_room_key_answer( self, mate ),
					{ sdp, t: stamp },
				)
			} ).catch( ( error: Error )=> this.$.$mol_fail_log( error ) )

			return Object.assign( rtc, {
				stamp,
				destructor: ()=> rtc.close(),
			} )
		}

		channel_bind( mate: string, rtc: RTCPeerConnection, channel: RTCDataChannel ) {

			const port = $giper_baza_port_webrtc_bind(
				channel,
				( port, data )=> $mol_wire_async( this ).income( port, data ),
				port => $mol_wire_async( this ).port_add( mate, port ),
				port => $mol_wire_async( this ).port_drop( mate, port ),
			)

			rtc.onconnectionstatechange = ()=> {
				if( rtc.connectionState !== 'failed' ) return
				$mol_wire_async( this ).port_drop( mate, port )
			}

		}

		@ $mol_action
		income( port: $mol_rest_port, data: Uint8Array< ArrayBuffer > ) {
			this.yard().port_income( port, data )
		}

		@ $mol_action
		port_add( mate: string, port: $mol_rest_port ) {

			this.ports.set( mate, port )
			this.yard().peers.add( port )

			if( this.$.$giper_baza_log() ) this.$.$mol_log3_come({
				place: this,
				message: 'Peer Connected',
				port: $mol_key( port ),
				mate,
			})

		}

		@ $mol_action
		port_drop( mate: string, port: $mol_rest_port ) {

			this.yard().peers.delete( port )
			if( this.ports.get( mate ) === port ) this.ports.delete( mate )

			if( this.$.$giper_baza_log() ) this.$.$mol_log3_done({
				place: this,
				message: 'Peer Disconnected',
				port: $mol_key( port ),
				mate,
			})

			if( $giper_baza_room_offerer( this.lord(), mate ) ) this.restart( mate )

		}

		;[ Symbol.for( 'nodejs.util.inspect.custom' ) ]() {
			return $mol_term_color.blue( `$giper_baza_room` )
		}

	}

}
