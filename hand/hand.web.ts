namespace $ {

	/**
	 * Manual P2P handshake for the cases when no master is reachable
	 * (offline LAN, hotspot without internet).
	 * Offer and answer are just strings - pass them any way you like:
	 * QR code, messenger, AirDrop, clipboard.
	 */
	export class $giper_baza_hand extends $mol_object {

		yard() {
			return this.$.$giper_baza_glob.yard()
		}

		/** Established direct port, reactive */
		@ $mol_mem
		port( next: $giper_baza_port_webrtc | null = null ) {
			return next
		}

		_attempt = null as null | ReturnType< typeof $giper_baza_port_webrtc_propose >

		/** Side A: current connection attempt. Call reset() to start over. */
		attempt() {

			if( !this._attempt ) {
				const pair = $giper_baza_port_webrtc_propose()
				this.bind( pair.rtc, pair.channel )
				this._attempt = pair
			}

			return this._attempt
		}

		/** Side A: resolves with offer string for the mate */
		proposal() {
			return this.attempt().sdp
		}

		_greetings = new Map< string, ReturnType< typeof $giper_baza_port_webrtc_accept > >()

		/** Side B: accepts remote offer, resolves with answer string for the mate */
		answer( offer: string ) {

			let pair = this._greetings.get( offer )

			if( !pair ) {
				const fresh = pair = $giper_baza_port_webrtc_accept( offer )
				fresh.channel.then( channel => this.bind( fresh.rtc, channel ) )
				this._greetings.set( offer, fresh )
			}

			return pair.sdp
		}

		/** Side A: applies remote answer, channel opens after that */
		finish( answer: string ) {
			return $giper_baza_port_webrtc_finish( this.attempt().rtc, answer )
		}

		/** Drops all connections to start over */
		reset() {

			this._attempt?.rtc.close()
			this._attempt = null

			for( const pair of this._greetings.values() ) pair.rtc.close()
			this._greetings.clear()

		}

		destructor() {
			this.reset()
		}

		bind( rtc: RTCPeerConnection, channel: RTCDataChannel ) {

			const port = $giper_baza_port_webrtc_bind(
				channel,
				( port, data )=> $mol_wire_async( this ).income( port, data ),
				port => $mol_wire_async( this ).port_add( port ),
				port => $mol_wire_async( this ).port_drop( port ),
			)

			rtc.onconnectionstatechange = ()=> {
				if( rtc.connectionState !== 'failed' ) return
				$mol_wire_async( this ).port_drop( port )
			}

		}

		@ $mol_action
		income( port: $mol_rest_port, data: Uint8Array< ArrayBuffer > ) {
			this.yard().port_income( port, data )
		}

		@ $mol_action
		port_add( port: $giper_baza_port_webrtc ) {
			this.port( port )
			this.yard().peers.add( port )
		}

		@ $mol_action
		port_drop( port: $giper_baza_port_webrtc ) {
			this.yard().peers.delete( port )
			if( this.port() === port ) this.port( null )
		}

		;[ Symbol.for( 'nodejs.util.inspect.custom' ) ]() {
			return $mol_term_color.blue( `$giper_baza_hand` )
		}

	}

}
