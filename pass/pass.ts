// namespace $ {
	
// 	/** Public key of Peer */
// 	export class $giper_baza_pass extends $giper_baza_unit {
		
// 		_peer!: $giper_baza_link
// 		peer() {
// 			if( this._peer !== undefined ) return this._peer
// 			else return this._peer = this.lord().peer()
// 		}
		
// 		_lord!: $giper_baza_link
// 		lord() {
// 			if( this._lord !== undefined ) return this._lord
// 			else return this._lord = $giper_baza_link.hash_bin( this.sens() ).lord()
// 		}
		
// 		key(): string {
// 			return `pass:${ this.peer() }`
// 		}
		
// 		auth( next?: ArrayLike< number > ) {
// 			const prev = new Uint8Array( this.buffer, this.byteOffset, 64 )
// 			if( next ) prev.set( next )
// 			return prev
// 		}
		
// 		dump() {
// 			return {
// 				kind: this.kind(),
// 				lord: this.lord(),
// 			}
// 		}
		
// 		rank_min() {
// 			return $giper_baza_rank( $giper_baza_rank_tier.join | ( $giper_baza_rank_rate.just - this.work() ) )
// 		}
		
// 		[ $mol_dev_format_head ]() {
// 			return $mol_dev_format_span( {} ,
// 				$mol_dev_format_native( this ) ,
// 				' ',
// 				$mol_dev_format_auto( this.peer() ),
// 				' 🔑 ',
// 				$mol_dev_format_auto( this.lord() ),
// 			)
// 		}
		
// 	}
	

// }
