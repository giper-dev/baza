namespace $ {
	
	/** Moment from time. */
	export function $giper_baza_time_moment( time: number ) {
		const stamp = time * 1000
		return new $mol_time_moment( stamp )
	}
	
	/** User readable time+tick view. */
	export function $giper_baza_time_dump( time: number ) {
		return $giper_baza_time_moment( time ).toString( 'YYYY-MM-DD hh:mm:ss' )
	}

	/** Current time with 0 tick. */
	export function $giper_baza_time_now() {
		return now || Math.floor( Date.now() / 1000 )
	}
	
	let now = 0

	/** Run atomic transaction by temp freezing time. */
	export function $giper_baza_time_freeze( task: ()=> void ) {

		if( now ) return task()
		
		now = $giper_baza_time_now()
		try {
			return task()
		} finally {
			now = 0
		}

	}
	
}
