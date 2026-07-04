namespace $ {

	/** Communication port over WebRTC DataChannel */
	export class $giper_baza_port_webrtc extends $mol_rest_port {

		/** ICE servers used to establish direct connections */
		static ice = [ { urls: 'stun:stun.l.google.com:19302' } ] as RTCIceServer[]

		channel!: RTCDataChannel

		@ $mol_action
		send_nil() {
			if( this.channel.readyState !== 'open' ) return
			this.channel.send( new Uint8Array )
		}

		@ $mol_action
		send_bin( data: Uint8Array< ArrayBuffer > ) {
			if( this.channel.readyState !== 'open' ) return
			this.channel.send( data )
		}

		@ $mol_action
		send_text( data: string ) {
			if( this.channel.readyState !== 'open' ) return
			this.channel.send( $mol_charset_encode( data ) )
		}

	}

	/** Resolves when all ICE candidates are gathered (non-trickle strategy) */
	function gathered( rtc: RTCPeerConnection ) {
		if( rtc.iceGatheringState === 'complete' ) return Promise.resolve()
		return new Promise< void >( done => {
			rtc.onicegatheringstatechange = ()=> {
				if( rtc.iceGatheringState === 'complete' ) done()
			}
		} )
	}

	/**
	 * Offerer side: makes connection with outgoing DataChannel.
	 * Connection and channel are ready synchronously,
	 * sdp resolves with complete local offer when ICE gathering finishes.
	 */
	export function $giper_baza_port_webrtc_propose() {

		const rtc = new RTCPeerConnection({ iceServers: $giper_baza_port_webrtc.ice })
		const channel = rtc.createDataChannel( '$giper_baza_yard' )

		const sdp = ( async ()=> {
			await rtc.setLocalDescription( await rtc.createOffer() )
			await gathered( rtc )
			return rtc.localDescription!.sdp
		} )()

		return { rtc, channel, sdp }
	}

	/**
	 * Answerer side: makes connection for the remote offer.
	 * channel resolves with incoming DataChannel,
	 * sdp resolves with complete local answer when ICE gathering finishes.
	 */
	export function $giper_baza_port_webrtc_accept( offer: string ) {

		const rtc = new RTCPeerConnection({ iceServers: $giper_baza_port_webrtc.ice })

		const channel = new Promise< RTCDataChannel >( done => {
			rtc.ondatachannel = event => done( event.channel )
		} )

		const sdp = ( async ()=> {
			await rtc.setRemoteDescription({ type: 'offer', sdp: offer })
			await rtc.setLocalDescription( await rtc.createAnswer() )
			await gathered( rtc )
			return rtc.localDescription!.sdp
		} )()

		return { rtc, channel, sdp }
	}

	/** Offerer side: applies the remote answer */
	export function $giper_baza_port_webrtc_finish( rtc: RTCPeerConnection, answer: string ) {
		return rtc.setRemoteDescription({ type: 'answer', sdp: answer })
	}

	/** Wraps DataChannel into Port and wires its events to given handlers */
	export function $giper_baza_port_webrtc_bind(
		channel: RTCDataChannel,
		income: ( port: $giper_baza_port_webrtc, data: Uint8Array< ArrayBuffer > )=> void,
		open: ( port: $giper_baza_port_webrtc )=> void,
		close: ( port: $giper_baza_port_webrtc )=> void,
	) {

		channel.binaryType = 'arraybuffer'
		const port = $giper_baza_port_webrtc.make({ channel })

		if( channel.readyState === 'open' ) open( port )
		else channel.onopen = ()=> open( port )

		channel.onmessage = event => {
			if( !( event.data instanceof ArrayBuffer ) ) return
			if( !event.data.byteLength ) return
			income( port, new Uint8Array( event.data ) )
		}

		channel.onclose = ()=> close( port )

		return port
	}

}
