namespace $ {
	
	/**
	 * Две реплики одного Ленда с РАЗНЫМИ Lord'ами.
	 *
	 * Ключи зашиты: исход зависит от лексикографики Lord'ов, а `self` выводится из
	 * содержимого, так что с фиксированной парой прогон повторяется побайтово.
	 * Проигрывает пир с меньшим Lord'ом, поэтому `left` заведомо потерпевший.
	 * Те же ключи — в `list/list.test.ts`.
	 *
	 * Обмен идёт по одному вызову через `$mol_wire_async`, а не обёрткой всего
	 * теста в фибру: подпись юнитов усыпляет фибру, а та при пробуждении
	 * перезапускает тело целиком и пересоздаёт Ленды на каждом круге.
	 */
	async function lords( $: $ ) {

		// Lord G2IBJX4e_7iznlR7f
		const auth_left = $giper_baza_auth.from( '_z1XyT3ZoNoimeKbXzraUFb8DUjG4iKC1EuL5eyMwc00Bx-n2qFTI1NpbA4_iUr--dGF1ql0-Iwl3zyfWCnN0scnj9Gw5d9VB-a-9mi7acMhKGbd529dua9SS_uDObHOMYETyfv5M11fUYj_Pc2Ls_xAjKwZWTtflIVMgC8P9q1c' )
		// Lord zolPwLxu_ydwhHtDG
		const auth_right = $giper_baza_auth.from( '_yvlCpXsSIWQxvz4N1dsBJiX-FC69pKhsoP7NIF0bpkuJjFu30T9haHqwy_eCuwekQ6YcmvnsqAOrBxjQd4-UEw1uQ8--gHby2as_5AR25ou1UOLqqrBS3cYgUOHYEck4IO9SHZlrawprbHvbMNiHkF_3G-mKYZAPpdyRLbAbdEE' )

		const left = $.$giper_baza_land.make({ $, auth: ()=> auth_left })
		left.join()
		left.give( auth_right.pass(), $giper_baza_rank_post( 'just' ) )

		const right = $.$giper_baza_land.make({ $, auth: ()=> auth_right, link: ()=> left.link() })

		const sync = async ()=> {
			await $mol_wire_async( right ).units_steal( left )
			await $mol_wire_async( left ).units_steal( right )
			await $mol_wire_async( right ).units_steal( left )
		}

		await sync()
		return { left, right, sync }
	}

	/**
	 * Ограничитель для чтения сломанной пешки.
	 *
	 * Обход `while( entry.next !== null )` в конце `sand_ordered` не считает шаги,
	 * поэтому считаем обращения к `Map`: проход по пешке из шести Sand'ов
	 * укладывается в сотни, а кольцо в цепочке `next` не укладывается ни во что.
	 * Без этого тест не падает, а молча висит — и уносит с собой весь прогон.
	 */
	function bounded< Result >( task: ()=> Result, budget = 1_000_000 ): Result {

		const origin = Map.prototype.get
		let calls = 0

		Map.prototype.get = function( this: Map< unknown, unknown >, key: unknown ) {
			if( ++ calls > budget ) {
				Map.prototype.get = origin
				$mol_fail( new Error( 'sand_ordered не закончил обход: цепочка next замкнулась в кольцо' ) )
			}
			return origin.call( this, key )
		} as typeof origin

		try {
			return task()
		} finally {
			Map.prototype.get = origin
		}

	}

	$mol_test_mocks.push( $=> {
		class $giper_baza_land_mock extends $.$giper_baza_land {
			
			sync() {
				return this
			}
			
		}
		$.$giper_baza_land = $giper_baza_land_mock
	} )
	
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
			
			home.Data( $giper_baza_list ).items_vary([ 'foo', 'xxx' ])
			$mol_assert_equal( home.Data( $giper_baza_list ).items_vary(), [ 'foo', 'xxx' ] )
			$mol_assert_equal( left.Data( $giper_baza_list ).items_vary(), [ 'foo', 'xxx' ] )
			
			left.faces.sync( home.faces )
			left.Data( $giper_baza_list ).items_vary([ 'foo', 'yyy' ])
			$mol_assert_equal( left.Data( $giper_baza_list ).items_vary(), [ 'foo', 'yyy' ] )
			
			const right = home.fork()
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 'foo', 'zzz' ])
			$mol_assert_equal( right.Data( $giper_baza_list ).items_vary(), [ 'foo', 'zzz' ] )
			
			const both = home.fork()
			$mol_assert_equal( both.Data( $giper_baza_list ).items_vary(), [ 'foo', 'xxx' ] )
			
			both.Tine().items_vary([ right.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list ).items_vary(), [ 'foo', 'zzz' ] )
			
			both.Tine().items_vary([ left.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list ).items_vary(), [ 'foo', 'yyy' ] )
			
			both.Tine().items_vary([ right.link(), left.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list ).items_vary(), [ 'foo', 'yyy' ] )
			
			both.Tine().items_vary([ left.link(), right.link() ])
			$mol_assert_equal( both.Data( $giper_baza_list ).items_vary(), [ 'foo', 'zzz' ] )
			
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
		
		/**
		 * `sand_ordered` собирает очередь по всем Пирам, когда `peer` пустой —
		 * именно так её читает `$giper_baza_pawn.units()` через
		 * `$giper_baza_link.hole`. Но связный список при этом ключуется по одному
		 * `self`, поэтому два Sand'а с общим `self` от разных Lord'ов занимают одну
		 * ячейку `by_key`: проигравший вытесняет победителя, и тот выпадает из
		 * выдачи вместе со всем, что на него ссылалось.
		 *
		 * Ветка `peer === null` берёт ту же самую очередь, но ключует по `path()`
		 * (Peer + Self) — там коллизии нет и оба Sand'а на месте. Разница между
		 * двумя выдачами ниже и есть баг.
		 *
		 * Переписать чужой `self` — штатное дело для списка: `cut` кладёт tombstone
		 * с тем же `self`, `move` зовёт `sand_move`, `splice` делает это в ветке
		 * `replace`. Симптомы на уровне списка — в `list/list.test.ts`.
		 */
		async 'sand_ordered drops a Sand when two Lords share one Self'( $ ) {

			const { left, right, sync } = await lords( $ )

			left.Data( $giper_baza_list ).items_vary([ 'a', 'b', 'c', 'd' ])
			await sync()

			// правый переписывает третий элемент, левый следом переписывает его же:
			// оба Sand'а получают один и тот же `self` и разных Lord'ов
			right.Data( $giper_baza_list ).items_vary([ 'a', 'b', 'X', 'd' ])
			await sync()

			left.Data( $giper_baza_list ).items_vary([ 'a', 'b', 'Y', 'd' ])
			await sync()

			const head = left.Data( $giper_baza_list ).head()
			const by_self = left.sand_ordered({ head, peer: $giper_baza_link.hole })
			const by_path = left.sand_ordered({ head, peer: null })

			const alive = ( units: readonly $giper_baza_unit_sand[] )=> units
				.filter( unit => !unit.dead() && unit.self().str !== '' )
				.map( unit => left.sand_decode( unit ) )

			// в пешке пять Sand'ов на четыре Self: один Self записан обоими Lord'ами
			$mol_assert_equal( by_path.length, 5 )
			$mol_assert_equal( new Set( by_path.map( unit => unit.self().str ) ).size, 4 )

			// ключ по Peer + Self ничего не теряет
			$mol_assert_equal( alive( by_path ), [ 'a', 'b', 'X', 'Y', 'd' ] )

			// а ключ по одному Self — теряет, и левый перестаёт видеть собственную запись
			$mol_assert_equal(
				alive( by_self ),
				[ 'a', 'b', 'Y', 'd' ], // сейчас: [ 'a', 'b', 'X', 'd' ] — Y пропала
			)

		},

		/**
		 * Тот же дефект во второй, тяжёлой форме: цепочка `next` замыкается в
		 * кольцо, и финальный обход `while( entry.next !== null )` перестаёт
		 * заканчиваться. Пешка становится нечитаемой на обеих репликах навсегда —
		 * юниты уже в Ленде и разъедутся по синку.
		 *
		 * Само чтение отсюда не возвращается никогда, поэтому оно идёт под
		 * `bounded`: иначе тест не падает, а виснет, и прогон встаёт целиком.
		 * Тем же скриптом вне пачки тестов то же место успевает раздуть массив до
		 * предела длины и падает `RangeError` из `Array.push` на 2.8 ГБ.
		 */
		async 'sand_ordered loops forever over a cycled next chain'( $ ) {

			const { left, right, sync } = await lords( $ )

			left.Data( $giper_baza_list ).items_vary([ 'a', 'b', 'c', 'd', 'e', 'f' ])
			await sync()

			left.Data( $giper_baza_list ).cut( 'a' )
			await sync()
			$mol_assert_equal( left.Data( $giper_baza_list ).items_vary(), [ 'b', 'c', 'd', 'e', 'f' ] )

			right.Data( $giper_baza_list ).move( 3, 2 )
			await sync()
			$mol_assert_equal( left.Data( $giper_baza_list ).items_vary(), [ 'b', 'c', 'e', 'd', 'f' ] )

			// после этой перестановки список уже не прочитать
			const items = bounded( ()=> {
				left.Data( $giper_baza_list ).items_vary([ 'b', 'c', 'e', 'f', 'd' ])
				return left.Data( $giper_baza_list ).items_vary()
			} )

			$mol_assert_equal( items, [ 'b', 'c', 'e', 'f', 'd' ] )

		},

		async 'Land Area inherits rights'( $ ) {
			
			const area = await $mol_wire_async( ()=> {
				const base = $.$giper_baza_glob.land_grab([[ null, $giper_baza_rank_post( 'just' ) ]])
				base.units_saving()
				return base.area_make()
		 	} )()
			
			$mol_assert_equal( area.pass_rank( area.auth().pass() ), $giper_baza_rank_rule )
			$mol_assert_equal( area.lord_rank( $giper_baza_link.hole ), $giper_baza_rank_post( 'just' ) )
			
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
