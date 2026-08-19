namespace $ {
	
	export type $giper_baza_face_data = Iterable< readonly [ peer: string, face: $giper_baza_face ] >
	
	export class $giper_baza_face extends Object {
		
		static length() {
			return 16 as const
		}
		
		constructor(
			public time = 0,
			public tick = 0,
			public summ = 0,
		) {
			super()
		}
		
		clone() {
			return new $giper_baza_face( this.time, this.tick, this.summ )
		}
		
		get moment() {
			return $giper_baza_time_moment( this.time )
		}
		
		get time_tick() {
			return this.time * 2**16 + this.tick
		}
		
		sync_time( time: number, tick: number ) {
			if( this.time < time ) {
				this.time = time
				this.tick = tick
				return true
			} else if( this.time === time && this.tick < tick ) {
				this.tick = tick
				return true
			} else {
				return false
			}
		}
		
		sync_summ( summ: number ) {
			if( this.summ < summ ) this.summ = summ
		}
		
		toJSON() {
			const time = $giper_baza_time_dump( this.time, this.tick )
			const summ = '%' + this.summ
			return `${time} ${summ}`
		}
		
		;[ Symbol.for( 'nodejs.util.inspect.custom' ) ]() {
			return $mol_term_color.blue( '$giper_baza_face ' )
				+ $mol_term_color.gray( 
					$giper_baza_time_dump( this.time, this.tick )
					+ ' %' + this.summ
				)
		}
		
		[ $mol_dev_format_head ]() {
			
			return $mol_dev_format_span( {},
				$mol_dev_format_native( this ),
				$mol_dev_format_shade(
					' ', $giper_baza_time_dump( this.time, this.tick ),
					' %', this.summ,
				)
			)
			
		}
		
	}
	
	/** Statistics about Units in Land. it's total Units count & dictionary which maps Peer to Time */
	export class $giper_baza_face_map extends Map< string, $giper_baza_face > {
		
		/** Cumulative face for all peers. */
		stat = new $giper_baza_face
		
		_peer_last = ''
		
		constructor(
			entries?: $giper_baza_face_data
		) {
			super()
			if( entries ) this.sync( entries )
		}
	
		
		clone() {
			return new $giper_baza_face_map( this )
		}
		
		/** Synchronize this clock with another. */
		sync( right: $giper_baza_face_data ) {
			// if( right instanceof $giper_baza_face_map ) this.stat = right.stat.clone()
			for( const [ peer, face ] of right ) {
				this.peer_time( peer, face.time, face.tick )
				this.peer_summ( peer, face.summ )
			}
		}
		
		/** Update last time for peer. */
		peer_time(
			peer: string,
			time: number,
			tick: number,
		) {
			
			if( this.stat.sync_time( time, tick ) ) {
				this._peer_last = peer
			}
			
			let prev = this.get( peer )
			if( prev ) prev.sync_time( time, tick )
			else this.set( peer, new $giper_baza_face( time, tick ) )
			
		}
		
		/** Update Summ for Peer. */
		peer_summ(
			peer: string,
			summ: number,
		) {
			const prev = this.get( peer )
			this.stat.summ = ( this.stat.summ ?? 0 ) + summ - ( prev?.summ ?? 0 )
			if( this.stat.summ < 0 ) $mol_fail( new Error( 'Negative summ' ) )

			if( prev ) prev.summ = summ
			else this.set( peer, new $giper_baza_face( 0, 0, summ ) )
			
		}
		
		peer_summ_shift(
			peer: string,
			diff: number,
		) {
			this.peer_summ( peer, ( this.get( peer )?.summ ?? 0 ) + diff )
		}
		
		/** Generates new time for peer that greater then other seen. */
		@ $mol_action
		tick( peer: $giper_baza_link ) {
			
			const now = $giper_baza_time_now()
			
			if( this.stat.time < now ) {
				
				this.stat.time = now
				this.stat.tick = 0
				
			} else if( this._peer_last !== peer.str ) {
				
				this.stat.time += 1
				this.stat.tick = 0
				this._peer_last = peer.str
				
			} else {
				
				this.stat.tick = ( this.stat.tick + 1 ) % 2**16
				if( !this.stat.tick ) ++ this.stat.time
				
			}
			
			return this.stat
		}
		
		toJSON() {
			return Object.fromEntries( this.entries() )
		}

		;[ Symbol.for( 'nodejs.util.inspect.custom' ) ]() {
			return $mol_term_color.blue( '$giper_baza_face_map ' )
				+ $mol_term_color.gray( this.stat.toJSON() )
		}
		
		[ $mol_dev_format_head ]() {
			
			return $mol_dev_format_span( {},
				$mol_dev_format_native( this ),
				' ',
				$mol_dev_format_auto( this.stat ),
			)
			
		}
		
	}
	
}
