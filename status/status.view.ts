namespace $.$$ {
	export class $giper_baza_status extends $.$giper_baza_status {
		
		@ $mol_mem
		message() {
			
			try {
				
				this.$.$giper_baza_glob.yard().master()
				// this.glob().yard().sync()
				return this.hint()
			
			} catch( error ) {
				if( error instanceof Promise ) $mol_fail_hidden( error )
				
				$mol_fail_log( error )
				return String( error )
				
			}
			
		}
		
		@ $mol_mem
		link_content() {
			
			try {
				
				this.$.$giper_baza_glob.yard().master()
				// this.glob().yard().sync()
				return [ this.Well() ]
			
			} catch( error ) {
				if( error instanceof Promise ) $mol_fail_hidden( error )
				
				$mol_fail_log( error )
				return [ this.Fail() ]
				
			}
			
		}
		
		// @ $mol_mem
		// hint() {
		// 	return super.hint() + ' ' + $hyoo_sync_revision
		// }
		
		options() {
			return this.$.$giper_baza_yard.masters()
		}
		
		@ $mol_mem
		master_link() {
			return this.$.$giper_baza_glob.yard().master_current() ?? 'javascript: return false'
		}
		
		master_id( uri: string ) {
			return uri
		}
		
		option_label( uri: string ) {
			return uri.replace( /^\w+:\/\//, '' ).replace( /\/$/, '' )
		}
		
		value( next?: string ) {
			const peers = this.$.$giper_baza_yard.masters()
			return peers[
				this.$.$giper_baza_glob.yard().master_cursor(
					next == undefined ? undefined : peers.indexOf( next )
				)
			] ?? ''
		}
		
	}
}
