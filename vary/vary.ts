namespace $ {
	
	/** Supported primitive types. */
	export type $giper_baza_vary_type =
	| null | boolean | number | bigint | string
	| Uint8Array< ArrayBuffer > | Uint16Array< ArrayBuffer > | Uint32Array< ArrayBuffer > | BigUint64Array< ArrayBuffer >
	| Int8Array< ArrayBuffer > | Int16Array< ArrayBuffer > | Int32Array< ArrayBuffer > | BigInt64Array< ArrayBuffer >
	| Float64Array< ArrayBuffer > | Float32Array< ArrayBuffer > | Float64Array< ArrayBuffer >
	| $mol_time_moment | $mol_time_duration | $mol_time_interval
	| $mol_tree2 | $giper_baza_link | Element
	| readonly $giper_baza_vary_type[] | Readonly<{ [ key in string ]: $giper_baza_vary_type }>
	
	// export let $giper_baza_vary_schema = $mol_schema_some([
	// 	$mol_schema_boolean, $mol_schema_float, $mol_schema_bigint, $mol_schema_string,
	// 	Uint8Array, Uint16Array, Uint32Array, BigUint64Array,
	// 	Int8Array, Int16Array, Int32Array, BigInt64Array,
	// 	Float64Array, Float32Array, Float64Array,
	// 	$mol_time_moment, $mol_time_duration, $mol_time_interval,
	// 	$mol_tree2, $giper_baza_link, Element,
	// 	$mol_schema_list( ()=> $giper_baza_vary_schema ),
	// 	$mol_schema_dict([ ()=> $giper_baza_vary_schema, ()=> $giper_baza_vary_schema ]),
	// ])
	
	export let $giper_baza_vary = $mol_vary.zone()
	
	$giper_baza_vary.type({
		type: $giper_baza_link,
		keys: [ 'link' ],
		lean: obj => [ obj.toBin() ],
		rich: ([ bin ])=> $giper_baza_link.from_bin( bin ),
	})
	
	$giper_baza_vary.type({
		type: $mol_time_duration,
		keys: [ 'dura' ],
		lean: obj => obj.toArray(),
		rich: data => new $mol_time_duration( data ),
	})
	
	$giper_baza_vary.type({
		type: $mol_time_moment,
		keys: [ 'time' ],
		lean: obj => obj.toArray(),
		rich: data => new $mol_time_moment( data ),
	})
	
	$giper_baza_vary.type({
		type: $mol_time_interval,
		keys: [ 'span' ],
		lean: obj => [ obj.toString() ],
		rich: ([ str ])=> new $mol_time_interval( str ),
	})
	
	$giper_baza_vary.type({
		type: $mol_tree2,
		keys: [ 'tree' ],
		lean: obj => [ $$.$mol_tree2_to_string( obj ) ],
		rich: ([ str ])=> $$.$mol_tree2_from_string( str ),
	})
	
}
