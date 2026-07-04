namespace $ {

	/** Communication port over WebRTC DataChannel */
	export class $giper_baza_port_webrtc extends $mol_rest_port {

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

}
