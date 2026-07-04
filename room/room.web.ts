namespace $ {

	/**
	 * Direct P2P synchronizer.
	 * Peers met in the same Room Land establish direct WebRTC connections
	 * and sync all common Lands through them, bypassing masters.
	 * Signaling goes through the Room Land itself over regular sync,
	 * so no dedicated signaling server is needed.
	 */
	export class $giper_baza_room extends $mol_object {

		/** ICE servers used to establish connections */
		static ice = [ { urls: 'stun:stun.l.google.com:19302' } ] as RTCIceServer[]

		/** Presence heartbeat period, ms */
		static beat_every = 20_000

		/** Peer with elder heartbeat considered offline, ms */
		static online_for = 60_000

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
			setTimeout( ()=> this.now( Date.now() ), $giper_baza_room.beat_every )
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
			this.signal_send( 'beat_' + this.lord(), { t: now } )
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
				if( !key.startsWith( 'beat_' ) ) continue

				const lord = key.slice( 'beat_'.length )
				if( lord === self ) continue

				const beat = this.signal( key )
				if( !beat ) continue
				if( now - Number( beat.t ?? 0 ) > $giper_baza_room.online_for ) continue

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
			if( this.lord() < mate ) {
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

			const rtc = new RTCPeerConnection({ iceServers: $giper_baza_room.ice })
			const channel = rtc.createDataChannel( '$giper_baza_yard' )
			this.channel_bind( mate, rtc, channel )

			rtc.onicegatheringstatechange = ()=> {
				if( rtc.iceGatheringState !== 'complete' ) return
				if( !rtc.localDescription ) return
				$mol_wire_async( this ).signal_send(
					`offer_${ self }>${ mate }`,
					{ sdp: rtc.localDescription.sdp, t: stamp },
				)
			}

			rtc.createOffer()
				.then( offer => rtc.setLocalDescription( offer ) )
				.catch( ( error: Error )=> this.$.$mol_fail_log( error ) )

			return Object.assign( rtc, {
				stamp,
				destructor: ()=> rtc.close(),
			} )
		}

		/** Offerer side: applies answer matching current offer */
		@ $mol_mem_key
		answer_apply( mate: string ) {

			const rtc = this.propose( mate )
			const answer = this.signal( `answer_${ mate }>${ this.lord() }` )

			if( !answer ) return false
			if( Number( answer.t ) !== rtc.stamp ) return false
			if( rtc.signalingState !== 'have-local-offer' ) return false

			rtc.setRemoteDescription({ type: 'answer', sdp: String( answer.sdp ) })
				.catch( ( error: Error )=> this.$.$mol_fail_log( error ) )

			return true
		}

		/** Answerer side: reacts on fresh offer, publishes answer */
		@ $mol_mem_key
		accept( mate: string ) {

			const self = this.lord()

			const offer = this.signal( `offer_${ mate }>${ self }` )
			if( !offer ) return null

			const stamp = Number( offer.t )

			const rtc = new RTCPeerConnection({ iceServers: $giper_baza_room.ice })
			rtc.ondatachannel = event => this.channel_bind( mate, rtc, event.channel )

			rtc.onicegatheringstatechange = ()=> {
				if( rtc.iceGatheringState !== 'complete' ) return
				if( !rtc.localDescription ) return
				$mol_wire_async( this ).signal_send(
					`answer_${ self }>${ mate }`,
					{ sdp: rtc.localDescription.sdp, t: stamp },
				)
			}

			rtc.setRemoteDescription({ type: 'offer', sdp: String( offer.sdp ) })
				.then( ()=> rtc.createAnswer() )
				.then( answer => rtc.setLocalDescription( answer ) )
				.catch( ( error: Error )=> this.$.$mol_fail_log( error ) )

			return Object.assign( rtc, {
				stamp,
				destructor: ()=> rtc.close(),
			} )
		}

		channel_bind( mate: string, rtc: RTCPeerConnection, channel: RTCDataChannel ) {

			channel.binaryType = 'arraybuffer'

			const port = $giper_baza_port_webrtc.make({ channel })

			channel.onopen = ()=> {
				$mol_wire_async( this ).port_add( mate, port )
			}

			channel.onmessage = event => {
				if( !( event.data instanceof ArrayBuffer ) ) return
				if( !event.data.byteLength ) return
				$mol_wire_async( this ).income( port, new Uint8Array( event.data ) )
			}

			channel.onclose = ()=> {
				$mol_wire_async( this ).port_drop( mate, port )
			}

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

			if( this.lord() < mate ) this.restart( mate )

		}

		;[ Symbol.for( 'nodejs.util.inspect.custom' ) ]() {
			return $mol_term_color.blue( `$giper_baza_room` )
		}

	}

}
