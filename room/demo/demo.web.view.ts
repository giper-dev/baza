namespace $.$$ {
	export class $giper_baza_room_demo extends $.$giper_baza_room_demo {

		@ $mol_mem
		room_id( next?: string ) {
			return this.$.$mol_state_arg.value( 'room', next ) ?? ''
		}

		@ $mol_action
		room_new() {
			const land = this.$.$giper_baza_room_grab()
			this.room_id( land.link().str )
		}

		room() {
			const id = this.room_id()
			return id ? this.$.$giper_baza_room.join( id ) : null
		}

		lord() {
			return this.$.$giper_baza_auth.current().pass().lord().str
		}

		@ $mol_mem
		mate_rows() {

			const room = this.room()
			if( !room ) return []

			room.run()

			return room.mates().map( mate => this.Mate_row( mate ) )
		}

		mate_label( mate: string ) {
			const direct = this.room()?.ports.get( mate )
			return `${ direct ? '🔗 direct' : '🛰 relay' } ${ mate }`
		}

		@ $mol_mem
		text( next?: string ) {
			const room = this.room()
			if( !room ) return ''
			return room.data().dive( 'demo_text', $giper_baza_text, null )?.text( next ) ?? ''
		}

	}
}
