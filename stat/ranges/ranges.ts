namespace $ {

	export class $giper_baza_stat_ranges extends $giper_baza_dict.with({
		Seconds: $giper_baza_stat_series,
		Minutes: $giper_baza_stat_series,
		Hours: $giper_baza_stat_series,
		Days: $giper_baza_stat_series,
		Months: $giper_baza_stat_series,
		// Years: $giper_baza_stat_series,
	}) {
		
		_last_instant = 0
		tick_instant( val: number ) {
			this.tick_integral( this._last_instant += val )
		}
		
		tick_integral( val: number ) {
			
			let now = new $mol_time_moment
			
			this.Seconds( null )!.tick( Math.floor( now.second! ), val, 60 )
			this.Minutes( null )!.tick( now.minute!, val, 60 )
			this.Hours( null )!.tick( now.hour!, val, 24 )
			this.Days( null )!.tick( now.day!, val, 31 )
			this.Months( null )!.tick( now.month!, val, 12 )
			// this.Years( null )!.tick( now.year!, val )
			
		}
		
		@ $mol_mem
		series() {
			
			function pick( Series: $giper_baza_stat_series | null, length: number, range: number ) {
				
				const values = Series?.values() ?? [ 0 ]
				let series = Array.from( { length }, ( _, i )=> values[ i ] )
				
				let start = 0
				let max = 0
				
				for( let i = 0; i < series.length; ++i ) {
					if( series[i] < max ) continue
					max = series[i]
					start = i + 1
				}
				
				if( start ) series = [ ... series.slice( start ), ... series.slice( 0, start - 1 ) ]
				
				let last = series[0]
				
				series = series.slice(1).map( val => {
					
					try {
					
						if( last === 0 || val < last ) return 0
						return ( val - last ) / range
						
					} finally {
						last = Math.max( val, last )
					}
					
				} )
				
				return series
			}
			
			const months = pick( this.Days(), 12, 60 * 60 * 24 * 31 )
			const days = pick( this.Days(), 31, 60 * 60 * 24 )
			const hours = pick( this.Hours(), 24, 60 * 60 )
			const minutes = pick( this.Minutes(), 60, 60 )
			const seconds = pick( this.Seconds(), 60, 1 )
			
			return [ ... months, ... days, ... hours, ... minutes, ... seconds ].reverse()
		}

	}
	
}
