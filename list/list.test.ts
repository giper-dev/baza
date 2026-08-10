namespace $ {
	
	function clone( base: $giper_baza_land ) {
		const land = $mol_wire_sync( base.$.$giper_baza_land ).make({ $: base.$ }) as $giper_baza_land
		land.units_steal( base )
		return land
	}
	
	function sync( left: $giper_baza_land, right: $giper_baza_land ) {
		left.units_steal( right )
		right.units_steal( left )
	}

	$mol_test({
		
		'Basic list ops'( $ ) {
			
			const land = $.$giper_baza_land.make({ $ })
			const list = land.Pawn( $giper_baza_list ).Data()
			$mol_assert_equal( list.items_vary(), [] )
			
			list.items_vary([ 2, 3 ])
			$mol_assert_equal( list.items_vary(), [ 2, 3 ] )
			$mol_assert_equal( list.has( 1 ), false )
			
			list.add( 1 )
			$mol_assert_equal( list.items_vary(), [ 1, 2, 3 ] )
			$mol_assert_equal( list.has( 1 ), true )
			
			list.add( 3 )
			$mol_assert_equal( list.items_vary(), [ 1, 2, 3 ] )
			
			list.splice([ 2 ])
			$mol_assert_equal( list.items_vary(), [ 1, 2, 3, 2 ] )
			
			list.splice( [ 2 ], 0 )
			$mol_assert_equal( list.items_vary(), [ 2, 1, 2, 3, 2 ] )
			
			list.wipe( 2 )
			$mol_assert_equal( list.items_vary(), [ 2, 1, 3, 2 ] )
			
			list.move( 2, 1 )
			$mol_assert_equal( list.items_vary(), [ 2, 3, 1, 2 ] )
			
			list.move( 1, 3 )
			$mol_assert_equal( list.items_vary(), [ 2, 1, 3, 2 ] )
			
			list.cut( 2 )
			$mol_assert_equal( list.items_vary(), [ 1, 3 ] )
			$mol_assert_equal( list.has( 2 ), false )
			
			list.cut( 2 )
			$mol_assert_equal( list.items_vary(), [ 1, 3 ] )
			
		},
		
		'Different types'( $ ) {
			
			const land = $.$giper_baza_land.make({ $ })
			const list = land.Pawn( $.$giper_baza_list ).Data()
			
			list.items_vary([
				null,
				false,
				true,
				0n,
				4611686018427387904n,
				0,
				Math.PI,
				Number.NaN,
				Number.NEGATIVE_INFINITY,
				'',
				'1234567890123456789012345678901234567890',
				new Uint8Array([]),
				new Uint8Array([ 1, 2, 3 ]),
				new Uint8Array([ 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0 ]),
				list.link(),
			])
			
			$mol_assert_equal( list.items_vary(), [
				false,
				true,
				0,
				4611686018427387904n,
				0,
				Math.PI,
				Number.NaN,
				Number.NEGATIVE_INFINITY,
				'',
				'1234567890123456789012345678901234567890',
				new Uint8Array([]),
				new Uint8Array([ 1, 2, 3 ]),
				new Uint8Array([ 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0 ]),
				list.link(),
			] )
			
		},
		
		async 'List merge'( $ ) {
			
			const land1 = $.$giper_baza_land.make({ $ })
			const land2 = $.$giper_baza_land.make({ $ })
			
			const list1 = land1.Pawn( $giper_baza_list ).Data()
			const list2 = land2.Pawn( $giper_baza_list ).Data()

			list1.items_vary([ 'foo', 'xxx' ])
			land2.faces.tick()
			list2.items_vary([ 'foo', 'yyy' ])
			await $mol_wire_async( land1 ).units_steal( land2 )
			$mol_assert_equal( list1.items_vary(), [ 'foo', 'yyy', 'foo', 'xxx' ] )

		},
		
		'Insert before removed before changed'( $ ) {
			
			const land = $.$giper_baza_land.make({ $ })
			const list = land.Pawn( $giper_baza_list ).Data()
			
			list.items_vary([ 'foo', 'bar' ])
			list.items_vary([ 'xxx', 'foo', 'bar' ])
			list.items_vary([ 'xxx', 'bars' ])
			
			$mol_assert_equal( list.items_vary(), [ 'xxx', 'bars' ] )
			
		},
		
		'Many moves'( $ ) {
			
			const land = $.$giper_baza_land.make({ $ })
			const list = land.Pawn( $giper_baza_list ).Data()
			
			list.items_vary([ 'foo', 'bar', 'lol' ])
			list.move( 2, 1 )
			list.move( 2, 1 )
			list.move( 0, 3 )
			list.move( 2, 1 )
			
			$mol_assert_equal( list.items_vary(), [ 'bar', 'foo', 'lol' ] )
			
		},
		
		'Reorder separated sublists'( $ ) {
			
			const land = $.$giper_baza_land.make({ $ })
			const list = land.Pawn( $giper_baza_list ).Data()
			
			list.items_vary([ 1, 2, 3, 4, 5, 6 ])
			
			list.move( 3, 5 )
			list.move( 3, 5 )
			list.move( 5, 4 )
			
			list.move( 0, 2 )
			list.move( 0, 2 )
			list.move( 2, 1 )
			
			$mol_assert_equal( list.items_vary(), [ 1, 3, 2, 4, 6, 5 ] )
			
		},
		
		'Insert after moved right': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 7, 2, 3, 4 ])
			
			const right = clone( base )
			right.Data( $giper_baza_list ).move( 0, 2 )
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 2, 1, 7, 3, 4 ],
			)
			
		} ),
		
		'Insert before moved left': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).move( 1, 0 )
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 7, 2, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 2, 1, 7, 3, 4 ],
			)
			
		} ),
		
		'Move left after inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 7, 2, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).move( 1, 0 )
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 2, 1, 3, 7, 4 ], // extra change (3) => unexpected result (7 after 3)
			)
			
		} ),
		
		'Insert before moved right': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).move( 1, 4 )
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 7, 2, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 7, 3, 4, 2 ],
			)
			
		} ),
		
		'Move right after inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 7, 2, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).move( 1, 4 )
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 3, 7, 4, 2 ], // extra change (3) => unexpected result (7 after 3)
			)
			
		} ),
		
		'Insert after wiped': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 7, 3, 4 ],
			)
			
		} ),
		
		'Wiped before inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 7, 3, 4 ],
			)
			
		} ),
		
		'Insert before wiped': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).wipe( 2 )
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 2, 7, 4 ],
			)
			
		} ),
		
		'Wiped after inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).wipe( 2 )
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 2, 7, 4 ],
			)
			
		} ),
		
		'Insert after moved out': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.sand_move( left.Data( $giper_baza_list ).units()[1], new $giper_baza_link( '11111111' ), 0 )
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 7, 3, 4 ],
			)
			$mol_assert_equal(
				left.Pawn( $giper_baza_list ).Head( new $giper_baza_link( '11111111' ) ).items_vary(),
				right.Pawn( $giper_baza_list ).Head( new $giper_baza_link( '11111111' ) ).items_vary(),
				[ 2 ],
			)
			
		} ),
		
		'Move out before inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.sand_move( right.Data( $giper_baza_list ).units()[1], new $giper_baza_link( '11111111' ), 0 )
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 7, 3, 4 ],
			)
			$mol_assert_equal(
				left.Pawn( $giper_baza_list ).Head( new $giper_baza_link( '11111111' ) ).items_vary(),
				right.Pawn( $giper_baza_list ).Head( new $giper_baza_link( '11111111' ) ).items_vary(),
				[ 2 ],
			)
			
		} ),
		
		'Insert before changed': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 2, 13, 3, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 2, 13, 7, 4 ],
			)
			
		} ),
		
		'Change after inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 2, 13, 3, 4 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 4 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 2, 7, 13, 4 ],
			)
			
		} ),
		
		'Insert between moved': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4, 5, 6 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).move( 1, 5 )
			left.Data( $giper_baza_list ).move( 1, 5 )
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4, 5, 6 ])
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 4, 5, 2, 7, 3, 6 ],
			)
			
		} ),
		
		'Move near inserted': $mol_wire_async( ( $: $ )=> {
			
			const base = $mol_wire_sync( $.$giper_baza_land ).make({ $ }) as $giper_baza_land
			base.Data( $giper_baza_list ).items_vary([ 1, 2, 3, 4, 5, 6 ])
			
			const left = clone( base )
			left.Data( $giper_baza_list ).items_vary([ 1, 2, 7, 3, 4, 5, 6 ])
			
			const right = clone( base )
			right.faces.sync( left.faces )
			right.Data( $giper_baza_list ).move( 1, 5 )
			right.Data( $giper_baza_list ).move( 1, 5 )
			
			sync( left, right )
			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				right.Data( $giper_baza_list ).items_vary(),
				[ 1, 4, 5, 2, 3, 7, 6 ],
			)

		} ),

		/**
		 * Одной чужой записи достаточно, чтобы сломать список у того, кто правит
		 * его в одиночку: правый дописал элемент и ушёл, дальше никакой
		 * конкурентности нет.
		 *
		 * Перестановка полной перезаписью идёт через `$mol_reconcile`: он ровняет
		 * по позиции и в ветке `replace` постит Sand с чужим `self`. Два Sand'а с
		 * одним `self` от разных Lord'ов занимают одну ячейку `by_key` в
		 * `sand_ordered`, и победитель выпадает из выдачи вместе со всем,
		 * что на него ссылалось.
		 *
		 * Ключи зашиты: исход решает лексикографика Lord'ов, прогон повторяется
		 * побайтово. Проигрывает меньший Lord — здесь это `auth_left`.
		 *
		 * Обмен идёт по одному вызову через `$mol_wire_async`, а не обёрткой всего
		 * теста в фибру: подпись юнитов усыпляет фибру, а та при пробуждении
		 * перезапускает тело целиком и пересоздаёт Ленды.
		 */
		async 'Reorder after foreign insert'( $ ) {

			// Lord G2IBJX4e_7iznlR7f
			const auth_left = $giper_baza_auth.from( '_z1XyT3ZoNoimeKbXzraUFb8DUjG4iKC1EuL5eyMwc00Bx-n2qFTI1NpbA4_iUr--dGF1ql0-Iwl3zyfWCnN0scnj9Gw5d9VB-a-9mi7acMhKGbd529dua9SS_uDObHOMYETyfv5M11fUYj_Pc2Ls_xAjKwZWTtflIVMgC8P9q1c' )
			// Lord zolPwLxu_ydwhHtDG
			const auth_right = $giper_baza_auth.from( '_yvlCpXsSIWQxvz4N1dsBJiX-FC69pKhsoP7NIF0bpkuJjFu30T9haHqwy_eCuwekQ6YcmvnsqAOrBxjQd4-UEw1uQ8--gHby2as_5AR25ou1UOLqqrBS3cYgUOHYEck4IO9SHZlrawprbHvbMNiHkF_3G-mKYZAPpdyRLbAbdEE' )

			const left = $.$giper_baza_land.make({ $, auth: ()=> auth_left })
			left.join()
			left.give( auth_right.pass(), $giper_baza_rank_post( 'just' ) )

			const right = $.$giper_baza_land.make({ $, auth: ()=> auth_right, link: ()=> left.link() })

			left.Data( $giper_baza_list ).items_vary([ 'a', 'b', 'c', 'd' ])
			await $mol_wire_async( right ).units_steal( left )

			// чужая вставка: один элемент, больше правый не пишет
			right.Data( $giper_baza_list ).splice( [ 'x' ], 0, 0 )
			await $mol_wire_async( left ).units_steal( right )
			$mol_assert_equal( left.Data( $giper_baza_list ).items_vary(), [ 'x', 'a', 'b', 'c', 'd' ] )

			// перестановка у левого: replace переиспользует чужой self
			left.Data( $giper_baza_list ).items_vary([ 'd', 'x', 'a', 'b', 'c' ])

			$mol_assert_equal(
				left.Data( $giper_baza_list ).items_vary(),
				[ 'd', 'x', 'a', 'b', 'c' ], // сейчас: [ 'x', 'x', 'a', 'b', 'c' ] — d потеряна, x задублирована
			)

		},

	})

}
