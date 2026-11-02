namespace $ {
	
	const Keepers = new WeakMap< object, {
		keeper: $mol_wire_pub_sub
		atoms: Set< $mol_wire_fiber< any, any, any > >
	} >()
	
	const nothing = ()=> {}
	
	export function $giper_baza_solid() {
		
		let current = $mol_wire_auto() as $mol_wire_fiber< any, any, any >
		if( current.temp ) current = current.host
		
		const host = current.host as object
		
		let scope = Keepers.get( host )
		if( !scope ) Keepers.set( host, scope = { keeper: new $mol_wire_pub_sub, atoms: new Set } )
		
		if( current.reap !== nothing ) {
			current.sub_on( scope.keeper, scope.keeper.data.length )
		}
		
		current.reap = nothing
		scope.atoms.add( current )
		
	}
	
	export function $giper_baza_solid_free( host: object ) {
		
		const scope = Keepers.get( host )
		if( !scope ) return
		
		Keepers.delete( host )
		
		for( const atom of scope.atoms ) atom.destructor()
		
	}
	
}
