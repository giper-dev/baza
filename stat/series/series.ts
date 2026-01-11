namespace $ {
	
	export class $giper_baza_stat_series extends $giper_baza_atom_list {
		
		@ $mol_action
		tick( key: number, val: number, count: number ) {
			let vals = this.values().slice()
			while( vals.length < count ) vals.push( 0 )
			vals[ key ] = val
			vals = [ ... vals.slice( key + 1 ), ... vals.slice( 0, key + 1 ) ]
			for( let i = 1; i < count; ++i ) if( vals[ i ] < vals [ i-1 ] ) vals[i] = vals[ i-1 ]
			vals = [ ... vals.slice( -1 - key ), ... vals.slice( 0, -1 - key ) ]
			this.val( vals )
		}
		
		_initial!: number
		@ $mol_action
		initial() {
			return this._initial
				?? ( this._initial = this.max() )
		}
		
		@ $mol_mem
		max() {
			let max = 0
			for( const val  of this.values() ) if( val > max ) max = val
			return max
		}
		
		values() {
			return ( this.val() ?? [] ) as number[]
		}
		
	}
	
}
