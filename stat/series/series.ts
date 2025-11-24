namespace $ {
	
	export class $giper_baza_stat_series extends $giper_baza_dict_to( $giper_baza_atom_real ) {
		
		@ $mol_action
		tick( key: bigint, val: number ) {
			this.key( key, null ).val( this.initial() + val )
		}
		
		_initial!: number
		@ $mol_action
		initial() {
			return this._initial
				?? ( this._initial = this.max() )
		}
		
		@ $mol_mem
		max() {
			return Math.max( ... this.values() )
		}
		
		@ $mol_mem
		values() {
			return this.nodes( $giper_baza_atom_real ).map( key => key.val()! )
		}
		
	}
	
}
