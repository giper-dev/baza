namespace $ {
	
	$mol_test_mocks.push( $=> {
		class $giper_baza_land_mock extends $.$giper_baza_land {
			
			sync() {
				return this
			}
			
		}
		$.$giper_baza_land = $giper_baza_land_mock
	} )

	class $giper_baza_mine_audit extends $giper_baza_mine_temp {

		units = new Map< string, $giper_baza_unit >

		override units_save( diff: $giper_baza_mine_diff ) {
			for( const unit of diff.del ) {
				this.units.delete( unit.path() )
				this.units_persisted.delete( unit )
			}
			for( const unit of diff.ins ) {
				this.units.set( unit.path(), unit )
				this.units_persisted.add( unit )
			}
		}

		override units_load() {
			return [ ... this.units.values() ].map( unit => {
				let loaded: $giper_baza_unit
				if( unit instanceof $giper_baza_auth_pass ) {
					loaded = $giper_baza_auth_pass.from( unit.asArray().slice().buffer )
				} else {
					loaded = $giper_baza_unit_base.narrow( unit.asArray().slice().buffer )
				}
				this.units_persisted.add( loaded )
				return loaded
			} )
		}

	}

	function $giper_baza_land_saved_orphans( units: readonly $giper_baza_unit[] ) {
		const seals = new Map< string, $giper_baza_unit_seal >()
		const orphans = [] as string[]

		for( const unit of units ) {
			if( !( unit instanceof $giper_baza_unit_seal ) ) continue
			for( const hash of unit.hash_list() ) seals.set( hash.str, unit )
		}

		for( const unit of units ) {
			if( !( unit instanceof $giper_baza_unit_sand ) ) continue
			const seal = seals.get( unit.hash().str )
			if( seal?.lord().str === unit.lord().str ) continue
			orphans.push( unit.path() )
		}

		return orphans
	}

	function $giper_baza_land_saved_seals_for( units: readonly $giper_baza_unit[], hash: $giper_baza_link ) {
		return units.filter( unit => {
			return unit instanceof $giper_baza_unit_seal
				&& unit.hash_list().some( item => item.str === hash.str )
		} ) as $giper_baza_unit_seal[]
	}
	
	$mol_test({
		
		async 'Give rights'( $ ) {
			
			const auth0 = await $.$giper_baza_auth.generate()
			const auth1 = await $.$giper_baza_auth.generate()
			const auth2 = await $.$giper_baza_auth.generate()
			
			const land0 = $giper_baza_land.make({ $, auth: ()=> auth0 })
			const land1 = $giper_baza_land.make({ $, link: ()=> land0.link(), auth: ()=> auth1 })
			
			$mol_assert_equal( land0.lord_rank( land0.link() ), $giper_baza_rank_rule )
			$mol_assert_equal( land0.lord_rank( auth1.pass().lord() ), $giper_baza_rank_read )
			
			land1.give( auth2.pass(), $giper_baza_rank_post( 'just' ) )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_read )
			
			land0.give( auth1.pass(), $giper_baza_rank_read )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_read )
			
			land0.give( auth1.pass(), $giper_baza_rank_read )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_read )
			
			land0.give( auth1.pass(), $giper_baza_rank_post( 'just' ) )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_post( 'just' ) )
			
			land0.give( auth1.pass(), $giper_baza_rank_pull( 'just' ) )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_pull( 'just' ) )
			
			land0.give( auth1.pass(), $giper_baza_rank_rule )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_rule )
			
			land0.give( auth1.pass(), $giper_baza_rank_post( 'just' ) )
			$mol_assert_equal( land0.pass_rank( auth1.pass() ), $giper_baza_rank_post( 'just' ) )
			
			await $mol_wire_async( land1 ).units_steal( land0 )
			$mol_assert_equal( land1.pass_rank( auth1.pass() ), $giper_baza_rank_post( 'just' ) )
			land1.give( auth2.pass(), $giper_baza_rank_post( 'just' ) )
			
		},
		
		async 'Post Data and pick Delta'( $ ) {
			
			const auth1 = await $.$giper_baza_auth.generate()
			const auth2 = await $.$giper_baza_auth.generate()
			
			const land1 = $giper_baza_land.make({ $, auth: ()=> auth1 })
			const land2 = $giper_baza_land.make({ $, link: ()=> land1.link(), auth: ()=> auth2 })
			
			$mol_assert_equal( await $mol_wire_async( land1 ).diff_units(), [] )
			
			land1.post( $giper_baza_link.hole, $giper_baza_link.hole, new $giper_baza_link( 'AA111111' ), new Uint8Array([ 1 ]) )
			$mol_assert_equal( ( await $mol_wire_async( land1 ).diff_units() ).length, 4 )
			
			const face = land1.faces.clone()
			
			land1.post( new $giper_baza_link( 'AA111111' ), $giper_baza_link.hole, new $giper_baza_link( 'AA222222' ), new Uint8Array([ 2 ]) )
			$mol_assert_equal( ( await $mol_wire_async( land1 ).diff_units() ).length, 5 )
			$mol_assert_equal( ( await $mol_wire_async( land1 ).diff_units( face ) ).length, 2 )
			
			await $mol_wire_async( land2 ).units_steal( land1 )
			
			land2.post( new $giper_baza_link( 'AA222222' ), $giper_baza_link.hole, new $giper_baza_link( 'AA333333' ), new Uint8Array([ 3 ]) )
			$mol_assert_equal( ( await $mol_wire_async( land2 ).diff_units() ).length, 5 )
			$mol_assert_equal( ( await $mol_wire_async( land2 ).diff_units( face ) ).length, 2 )
			
			land1.give( auth2.pass(), $giper_baza_rank_post( 'just' ) )
			await $mol_wire_async( land2 ).units_steal( land1 )
			land2.post( new $giper_baza_link( 'AA222222' ), $giper_baza_link.hole, new $giper_baza_link( 'AA333333' ), new Uint8Array([ 5 ]) )
			$mol_assert_equal( ( await $mol_wire_async( land2 ).diff_units() ).length, 9 )
			$mol_assert_equal( ( await $mol_wire_async( land2 ).diff_units( face ) ).length, 6 )
			
			land1.give( auth2.pass(), $giper_baza_rank_read )
			await $mol_wire_async( land2 ).units_steal( land1 )
			$mol_assert_equal( ( await $mol_wire_async( land2 ).diff_units() ).length, 7 )
			
		},
		
		async 'Land encryption'( $ ) {
			
			const land = $mol_wire_async( $giper_baza_land.make({ $ }) )
			$mol_assert_equal( await land.encrypted(), false )
			
			await land.encrypted( true )
			$mol_assert_equal( await land.encrypted(), true )
			
			const material = await land.post( $giper_baza_link.hole, $giper_baza_link.hole, null, new Uint8Array([ 1, 2, 3 ]) )
			
			$mol_assert_equal( ( await land.sand_encode( material ) ).data().length, 16 )
			$mol_assert_equal( await land.sand_decode( material ), new Uint8Array([ 1, 2, 3 ]) )
			$mol_assert_equal( ( await land.sand_ordered({ head: $giper_baza_link.hole, peer: $giper_baza_link.hole }) ).length, 1 )
			
			const tombstone = await land.post( $giper_baza_link.hole, $giper_baza_link.hole, material.self(), null )
			
			$mol_assert_equal( ( await land.sand_encode( tombstone ) ).data().length, 1 )
			$mol_assert_equal( await land.sand_decode( tombstone ), null )
			$mol_assert_equal( ( await land.sand_ordered({ head: $giper_baza_link.hole, peer: $giper_baza_link.hole }) ).length, 1 )
			
		},
		
		'Land fork & merge': $mol_wire_async( ( $: $ )=> {
			
			const home = $.$giper_baza_glob.home().land()
			const left = home.fork()
			
			home.Data( $giper_baza_list_vary ).items_vary([ 'foo', 'xxx' ])
			$mol_assert_equal( home.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'xxx' ] )
			$mol_assert_equal( left.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'xxx' ] )
			
			left.faces.sync( home.faces )
			left.Data( $giper_baza_list_vary ).items_vary([ 'foo', 'yyy' ])
			$mol_assert_equal( left.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'yyy' ] )
			
			const right = home.fork()
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list_vary ).items_vary([ 'foo', 'zzz' ])
			$mol_assert_equal( right.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'zzz' ] )
			
			const both = home.fork()
			$mol_assert_equal( both.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'xxx' ] )
			
			both.Tine().items_vary([ right.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'zzz' ] )
			
			both.Tine().items_vary([ left.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'yyy' ] )
			
			both.Tine().items_vary([ right.link(), left.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'yyy' ] )
			
			both.Tine().items_vary([ left.link(), right.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list_vary ).items_vary(), [ 'foo', 'zzz' ] )
			
		} ),
		
		'Inner Links are relative to forked Land': $mol_wire_async( ( $: $ )=> {
			
			const Alice = $.$giper_baza_glob.home().land()
			const Bella = Alice.fork()
			
			const alice_val = Alice.Pawn( $giper_baza_atom_text ).Head( new $giper_baza_link( 'qwertyui' ) )
			const bella_val = Bella.Pawn( $giper_baza_atom_text ).Head( new $giper_baza_link( 'qwertyui' ) )
			
			alice_val.val( 'Alice' )
			bella_val.val( 'Bella' )
			
			const alice_link = Alice.Pawn( $giper_baza_atom_link ).Head( new $giper_baza_link( 'asdfghjk' ) )
			const bella_link = Bella.Pawn( $giper_baza_atom_link ).Head( new $giper_baza_link( 'asdfghjk' ) )
			
			alice_link.val( alice_val.link() )
			$mol_assert_equal( alice_link.val(), alice_val.link() )
			$mol_assert_unique( alice_link.val(), bella_link.val() )
			$mol_assert_equal( bella_link.val(), bella_val.link() )
			
		} ),
		
		async 'Land Area inherits rights'( $ ) {
			
			const area = await $mol_wire_async( ()=> {
				const base = $.$giper_baza_glob.land_grab([[ null, $giper_baza_rank_post( 'just' ) ]])
				base.units_saving()
				return base.area_make()
		 	} )()
			
			$mol_assert_equal( area.pass_rank( area.auth().pass() ), $giper_baza_rank_rule )
			$mol_assert_equal( area.lord_rank( $giper_baza_link.hole ), $giper_baza_rank_post( 'just' ) )
			
		},

		async 'Trusted bus partial Seal keeps durable replacement before reaping'( $ ) {

			const owner = await $.$giper_baza_auth.generate()
			const writer = await $.$giper_baza_auth.generate()
			let current = owner
			const store = new Map< string, $giper_baza_unit >
			const mine_a = new $giper_baza_mine_audit
			const mine_b = new $giper_baza_mine_audit
			mine_a.units = store
			mine_b.units = store

			const make_land = ( mine: $giper_baza_mine_audit )=> {
				const land = $giper_baza_land.make({
					$,
					auth: ()=> current,
					link: ()=> owner.pass().lord(),
				})
				land.mine = ()=> mine
				return land
			}

			const land_a = make_land( mine_a )
			land_a.give( writer.pass(), $giper_baza_rank_post( 'just' ) )
			await $mol_wire_async( land_a ).units_saving()

			current = writer
			const old_sands = [] as $giper_baza_unit_sand[]
			for( let index = 0; index < $giper_baza_unit_seal_limit - 1; ++index ) {
				old_sands.push( land_a.post(
					$giper_baza_link.hole,
					new $giper_baza_link( 'BUSHEAD0' ),
					new $giper_baza_link( `BUSOLD0${ index }` ),
					new Uint8Array([ index ]),
					'term',
				) )
			}
			await $mol_wire_async( land_a ).units_saving()

			let saved = mine_a.units_load()
			$mol_assert_equal( $giper_baza_land_saved_orphans( saved ), [] )
			$mol_assert_equal( $giper_baza_land_saved_seals_for( saved, old_sands[0].hash() ).length, 1 )

			const land_b = make_land( mine_b )
			await $mol_wire_async( land_b ).loading()
			$mol_assert_equal( land_b.unit_seal( land_b.sand_get( old_sands[0].head(), old_sands[0].lord(), old_sands[0].self() )! )?.alive_items.size, 9 )

			land_a.post(
				$giper_baza_link.hole,
				new $giper_baza_link( 'BUSHEAD0' ),
				new $giper_baza_link( 'BUSFULL0' ),
				new Uint8Array([ 10 ]),
				'term',
			)
			await $mol_wire_async( land_a ).units_signing()

			const bus_units = land_a.units_unsaved()
			const bus_pack = $giper_baza_pack.make([[
				land_a.link().str,
				new $giper_baza_pack_part( bus_units ),
			]])
			const bus_part = new Map( bus_pack.parts() ).get( land_b.link().str )!
			await $mol_wire_async( land_a ).units_save( bus_units )

			for( const unit of bus_part.units ) {
				$giper_baza_unit_trusted_grant( unit )
				mine_b.units_persisted.add( unit )
			}
			await $mol_wire_async( land_b ).diff_apply( bus_part.units, 'skip_load' )
			$mol_assert_equal( land_b.unit_seal( land_b.sand_get( old_sands[0].head(), old_sands[0].lord(), old_sands[0].self() )! )?.alive_items.size, 10 )
			$mol_assert_equal( land_b.units_reaping.size, 1 )

			land_b.post(
				$giper_baza_link.hole,
				new $giper_baza_link( 'BUSHEAD0' ),
				new $giper_baza_link( 'BUSNEXT0' ),
				new Uint8Array([ 11 ]),
				'term',
			)
			await $mol_wire_async( land_b ).units_saving()

			saved = mine_a.units_load()
			$mol_assert_equal( $giper_baza_land_saved_seals_for( saved, old_sands[0].hash() ).map( seal => seal.size() ), [ 10 ] )
			$mol_assert_equal( $giper_baza_land_saved_orphans( saved ), [] )

			const reloaded = make_land( mine_a )
			await $mol_wire_async( reloaded ).diff_apply( saved, 'skip_load' )
			$mol_assert_equal( $giper_baza_land_saved_orphans( saved ), [] )

		},
		
		// async 'Merge text changes'() {
			
		// 	const base = new $giper_baza_land( 1n, 1 )
		// 	base.chief.as( $hyoo_crowd_text ).str( 'Hello World and fun!' )
			
		// 	const left = base.fork( await $hyoo_crowd_peer.generate() )
		// 	const right = base.fork( await $hyoo_crowd_peer.generate() )
		// 	right.clock_data.tick( right.peer().id )
			
		// 	left.chief.as( $hyoo_crowd_text ).str( 'Hello Alice and fun!' )
		// 	right.chief.as( $hyoo_crowd_text ).str( 'Bye World and fun!' )
			
		// 	const left_delta = left.delta()
		// 	const right_delta = right.delta()
			
		// 	left.apply( right_delta )
		// 	right.apply( left_delta )

		// 	$mol_assert_equal(
		// 		left.chief.as( $hyoo_crowd_text ).str(),
		// 		right.chief.as( $hyoo_crowd_text ).str(),
		// 		'Bye Alice and fun!',
		// 	)

		// },
		
		// async 'Write into token'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'foobar' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'xyz', 3 )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'fooxyzbar' ] )
			
		// },
		
		// async 'Write into token with split'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'foobar' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'XYZ', 2, 4 )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'fo', 'XYZar' ] )
			
		// },
		
		// async 'Write over few tokens'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'xxx foo bar yyy' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'X Y Z', 6, 9 )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'xxx', ' fo', 'X', ' Y', ' Zar', ' yyy' ] )
			
		// },
		
		// async 'Write whole token'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'xxxFoo yyy' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'bar', 3, 7 )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'xxxbaryyy' ] )
			
		// },
		
		// async 'Write whole text'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'foo bar' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'xxx', 0, 7 )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'xxx' ] )
			
		// },
		
		// async 'Write at the end'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'foo' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'bar' )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'foobar' ] )
			
		// },
		
		// async 'Write between tokens'() {
			
		// 	const store = new $giper_baza_land( 1n, 1 )
		// 	store.chief.as( $hyoo_crowd_text ).str( 'foo bar' )
		// 	store.chief.as( $hyoo_crowd_text ).write( 'xxx', 4 )
			
		// 	$mol_assert_equal( store.chief.as( $hyoo_crowd_list ).list(), [ 'foo', ' xxxbar' ] )
			
		// },

	})
}
