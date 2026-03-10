namespace $ {
	
	/** Public key generated with Proof of Work */
	export class $giper_baza_auth_pass extends $mol_crypto2_public {
		
		static like( bin: Uint8Array< ArrayBuffer > ) {
			const pass = this.from( bin )
			if( pass.byteLength !== $giper_baza_auth_pass.size_bin ) return null
			if( pass.uint8(0) !== 0xFF ) return null
			return pass
		}
		
		@ $mol_memo.method
		hash() {
			return $giper_baza_link.hash_bin( this.asArray() )
		}
		
		@ $mol_memo.method
		path() {
			return `pass:${ this.hash().str }`
		}
		
		/** Independent actor with global unique id generated from Auth key */
		@ $mol_memo.method
		lord() {
			return this.hash().lord()
		}
		
		/** Land local unique identifier of independent actor (first half of Lord) */
		@ $mol_memo.method
		peer() {
			return this.hash().peer()
		}
		
		toJSON() {
			return '@' + this.lord().str
		}
		
		[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' 👾',
				$mol_dev_format_auto( this.lord() ),
				' 🎫',
			)
		}
		
	}

	/** Private key generated with Proof of Work */
	export class $giper_baza_auth extends $mol_crypto2_private {
		
		/** Current Private key generated with Proof of Work  */
		@ $mol_mem
		static current( next?: $giper_baza_auth | null ) {
			
			$mol_wire_solid()
			
			if( next === undefined ) {
				const key = String( $mol_state_local.value( '$giper_baza_auth' ) ?? '' )
				if( key ) {
					
					const auth = $giper_baza_auth.from( key )
					if( auth.byteLength === 128 ) return auth
					
					$$.$mol_log3_warn({
						message: 'Wrong Auth size',
						hint: 'Relax. Right Auth is created.',
						place: `${this}.current()`,
					})
					
				}
			}
			
			if( !next ) next = this.grab()
			
			$mol_state_local.value( '$giper_baza_auth', next.toString() + next.toStringPrivate() )
			
			return next
		}
		
		static embryos = [] as string[]
		
		@ $mol_action
		static grab() {
			if( this.embryos.length ) return this.from( this.embryos.pop()! )
			return $mol_wire_sync( this as typeof $giper_baza_auth ).generate()
		}
		
		static async generate() {
			for( let i = 0; i < 4096; ++i ) {
				const auth = this.from( await super.generate() )
				if( auth.uint8(0) !== 0xFF ) continue
				if( /[æÆ]/.test( auth.pass().lord().str ) ) continue
				return auth
			}
			$mol_fail( new Error( `Too long key generation` ) )
		}
		
		@ $mol_memo.method
		pass() {
			return $giper_baza_auth_pass.from( this.public() )
		}
		
		@ $mol_mem_key
		secret_mutual( pass: $giper_baza_auth_pass ) {
			return $mol_wire_sync( this.cipher() ).secret( pass.socket() )
		}
		
		[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				$mol_dev_format_auto( this.pass().lord() ),
				' 🔑',
			)
		}
		
	}
	
}
