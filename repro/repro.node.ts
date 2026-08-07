namespace $ {

	/**
	 * Наглядные воспроизведения багов `$giper_baza_land.sand_ordered`.
	 * Приложение к `bog/articles/issue-sand-ordered.md`.
	 *
	 * Каждый сюжет — короткая история из нескольких шагов двух пиров, с полным
	 * синком после каждого шага, поэтому ни в одном из них НЕТ конкурентности:
	 * пиры ходят строго по очереди и всегда видят состояние друг друга.
	 *
	 *     node giper/baza/repro/-/node.js            # все сюжеты
	 *     node giper/baza/repro/-/node.js story=solo # один сюжет
	 *
	 * Сюжет `cycle` оставляет пешку нечитаемой, поэтому он запускается в
	 * отдельном процессе с таймаутом — иначе он унёс бы с собой весь прогон.
	 */
	export class $giper_baza_repro extends $mol_object2 {

		/**
		 * Ключи зашиты, чтобы прогон был детерминированным: исход зависит от
		 * лексикографики Lord'ов, а `self` выводится из содержимого и ссылки на
		 * ленд, то есть из ключей. Проигрывает всегда пир с МЕНЬШИМ Lord'ом,
		 * так что A здесь заведомо потерпевший.
		 *
		 * Lord A = `G2IBJX4e_7iznlR7f`, Lord B = `zolPwLxu_ydwhHtDG`.
		 */
		static key_a = '_z1XyT3ZoNoimeKbXzraUFb8DUjG4iKC1EuL5eyMwc00Bx-n2qFTI1NpbA4_iUr--dGF1ql0-Iwl3zyfWCnN0scnj9Gw5d9VB-a-9mi7acMhKGbd529dua9SS_uDObHOMYETyfv5M11fUYj_Pc2Ls_xAjKwZWTtflIVMgC8P9q1c'
		static key_b = '_yvlCpXsSIWQxvz4N1dsBJiX-FC69pKhsoP7NIF0bpkuJjFu30T9haHqwy_eCuwekQ6YcmvnsqAOrBxjQd4-UEw1uQ8--gHby2as_5AR25ou1UOLqqrBS3cYgUOHYEck4IO9SHZlrawprbHvbMNiHkF_3G-mKYZAPpdyRLbAbdEE'

		@ $mol_memo.method
		static isolate() {
			const $ = $$.$mol_ambient({})
			$.$giper_baza_mine = $giper_baza_mine_temp
			return $
		}

		/** Две реплики одного ленда: свой Auth у каждой, ни хранилища, ни шины. */
		static async pair() {

			const $ = this.isolate()
			const auth_a = $giper_baza_auth.from( this.key_a )
			const auth_b = $giper_baza_auth.from( this.key_b )

			const A = $giper_baza_repro_land.make({ $, auth: ()=> auth_a })
			A.join()
			A.give( auth_b.pass(), $giper_baza_rank_post( 'just' ) )

			const B = $giper_baza_repro_land.make({ $, auth: ()=> auth_b, link: ()=> A.link() })

			const sync = async ()=> {
				await $mol_wire_async( B ).units_steal( A )
				await $mol_wire_async( A ).units_steal( B )
				await $mol_wire_async( B ).units_steal( A )
			}

			await sync()
			return { A, B, sync }
		}

		static list( land: $giper_baza_land ) {
			return land.Data( $giper_baza_list )
		}

		static read( land: $giper_baza_land ) {
			return [ ... this.list( land ).items_vary() ] as string[]
		}

		/** Перестановка полной перезаписью списка — так это делает прикладной код. */
		static move( land: $giper_baza_land, value: string, seat: number ) {
			const rest = this.read( land ).filter( item => item !== value )
			this.list( land ).items_vary([ ... rest.slice( 0, seat ), value, ... rest.slice( seat ) ])
		}

		// ------------------------------------------------------------ сюжеты

		/** Список ломается В ОДИНОЧКУ после единственной чужой записи. */
		static async story_solo() {

			this.title( 'СЮЖЕТ 1: одному пиру достаточно одной чужой записи' )

			const { A, B, sync } = await this.pair()
			this.lords( A, B )

			this.list( A ).items_vary([ 'a', 'b', 'c', 'd' ])
			await sync()
			this.step( 'A создал список', this.read( A ) )

			this.list( B ).splice( [ 'x' ], 0, 0 )
			await sync()
			this.step( 'B дописал x в начало', this.read( B ) )

			console.log( '   -- B закрыл вкладку, дальше правит только A --' )

			const want = [ 'd', ... this.read( A ).filter( item => item !== 'd' ) ]
			this.move( A, 'd', 0 )

			this.step( 'A перетащил d в начало', this.read( A ), want )
			this.verdict( this.read( A ), want, 'd потеряна, x задублирована' )
		}

		/** Потеря и дубль при чередующихся правках двух пиров. */
		static async story_pair() {

			this.title( 'СЮЖЕТ 2: два пира правят по очереди' )

			const { A, B, sync } = await this.pair()
			this.lords( A, B )

			this.list( A ).items_vary([ 'a', 'b', 'c', 'd' ])
			await sync()
			this.step( 'старт', this.read( A ) )

			this.move( A, 'd', 0 )
			await sync()
			this.step( 'A перетащил d в начало', this.read( A ) )

			this.move( B, 'a', 3 )
			await sync()
			this.step( 'B перетащил a в конец', this.read( B ) )

			const want = [ 'c', ... this.read( A ).filter( item => item !== 'c' ) ]
			this.move( A, 'c', 0 )
			await sync()

			this.step( 'A перетащил c в начало', this.read( A ), want )
			this.verdict( this.read( A ), want, 'd потеряна, c задублирована' )

			console.log(
				'   обе реплики сошлись на одном и том же битом списке:',
				$mol_term_color.yellow( this.read( B ).join( ',' ) ),
			)
		}

		/** Пешка перестаёт читаться совсем. */
		static async story_cycle() {

			this.title( 'СЮЖЕТ 3: список перестаёт читаться' )

			const { A, B, sync } = await this.pair()
			this.lords( A, B )

			this.list( A ).items_vary([ 'a', 'b', 'c', 'd', 'e', 'f' ])
			await sync()
			this.step( 'старт', this.read( A ) )

			this.list( A ).cut( 'a' )
			await sync()
			this.step( 'A удалил a', this.read( A ) )

			this.list( B ).move( 3, 2 )
			await sync()
			this.step( 'B передвинул e на место 2', this.read( B ) )

			console.log( '   A перетаскивает f...' )
			this.move( A, 'f', 3 )
			await sync()

			console.log( '   список после этого:', this.read( A ).join( ',' ) )
			console.log( $mol_term_color.red( '   сюда дойти не должно было' ) )
		}

		/** Корень: один self от двух пиров. */
		static async story_root() {

			this.title( 'СЮЖЕТ 4: откуда берётся потеря' )

			const { A, B, sync } = await this.pair()
			this.lords( A, B )

			this.list( A ).items_vary([ 'a', 'b', 'c', 'd' ])
			await sync()
			this.step( 'A создал список', this.read( A ) )

			this.list( B ).items_vary([ 'a', 'b', 'X', 'd' ])
			await sync()
			this.step( 'B заменил третий элемент на X', this.read( B ) )

			this.list( A ).items_vary([ 'a', 'b', 'Y', 'd' ])
			await sync()
			this.step( 'A заменил тот же элемент на Y', this.read( A ), [ 'a', 'b', 'Y', 'd' ] )

			const head = this.list( A ).head()
			const by_self = A.sand_ordered({ head, peer: $giper_baza_link.hole })
			const by_path = A.sand_ordered({ head, peer: null })

			const decode = ( units: readonly $giper_baza_unit_sand[] )=> units
				.filter( unit => !unit.dead() && unit.self().str !== '' )
				.map( unit => A.sand_decode( unit ) )
				.join( ',' )

			console.log( '' )
			console.log( '   Sand-ов в пешке:', by_path.length, ' разных self:', new Set( by_path.map( unit => unit.self().str ) ).size )
			for( const unit of by_path ) {
				console.log(
					'     self', $mol_term_color.cyan( unit.self().str.padEnd( 9 ) ),
					'lord', $mol_term_color.gray( unit.lord().str.slice( 0, 6 ) ),
					'=', $mol_term_color.yellow( String( A.sand_decode( unit ) ) ),
				)
			}
			console.log( '   один и тот же self записан обоими пирами' )
			console.log( '' )
			console.log( '   peer = hole  (так читает units(), ключ = self)  ', $mol_term_color.red( decode( by_self ) ) )
			console.log( '   peer = null  (те же Sand-ы, ключ = peer + self) ', $mol_term_color.green( decode( by_path ) ) )
			console.log( '' )
			console.log( '   очередь в обоих случаях одна и та же, разница только в ключе;' )
			console.log( '   при ключе по self проигравшая запись вытесняет победившую из by_key,' )
			console.log( '   и A перестаёт видеть собственную правку.' )
		}

		// ------------------------------------------------------------ вывод

		static title( text: string ) {
			console.log( '' )
			console.log( $mol_term_color.blue( '=== ' + text + ' ===' ) )
		}

		static lords( A: $giper_baza_land, B: $giper_baza_land ) {
			console.log( $mol_term_color.gray(
				'   Lord A = ' + A.auth().pass().lord().str +
				'   Lord B = ' + B.auth().pass().lord().str
			) )
		}

		static step( what: string, got: readonly string[], want?: readonly string[] ) {
			if( !want ) return console.log( '  ', what.padEnd( 31 ), $mol_term_color.yellow( got.join( ',' ) ) )
			console.log( '  ', what )
			console.log( '     ожидание ', $mol_term_color.green( want.join( ',' ) ) )
			console.log( '     получилось', $mol_term_color.red( got.join( ',' ) ) )
		}

		static verdict( got: readonly string[], want: readonly string[], note: string ) {
			const broken = got.join( ',' ) !== want.join( ',' )
			console.log( '  ', broken ? $mol_term_color.red( 'БАГ: ' + note ) : $mol_term_color.green( 'сошлось' ) )
			if( broken ) this.failed = true
		}

		static failed = false

		// ------------------------------------------------------------ запуск

		static stories = {
			solo: ()=> this.story_solo(),
			pair: ()=> this.story_pair(),
			cycle: ()=> this.story_cycle(),
			root: ()=> this.story_root(),
		} as Record< string, ()=> Promise< void > >

		/**
		 * `cycle` оставляет пешку нечитаемой: чтение либо падает изнутри
		 * `sand_ordered`, либо не заканчивается вовсе. Гонять его в общем
		 * процессе нельзя, поэтому он уходит в дочерний с таймаутом.
		 */
		static spawn_cycle() {

			this.title( 'СЮЖЕТ 3: список перестаёт читаться (в отдельном процессе)' )

			const limit = 60000
			const res = $node[ 'child_process' ].spawnSync(
				process.execPath,
				[ process.argv[1], 'story=cycle' ],
				{ encoding: 'utf8', timeout: limit },
			)

			for( const line of ( res.stdout || '' ).split( '\n' ) ) {
				if( line.startsWith( '===' ) || !line.trim() ) continue
				console.log( line )
			}

			if( res.signal ) {
				console.log( '  ', $mol_term_color.red( `БАГ: чтение списка не закончилось за ${ limit / 1000 } с — обход цепочки next зациклился` ) )
				this.failed = true
				return
			}

			const error = ( res.stderr || '' ).split( '\n' ).filter( line => /Error/.test( line ) )[0]
			const frame = ( res.stderr || '' ).split( '\n' ).filter( line => /sand_ordered/.test( line ) )[0]

			if( error ) {
				console.log( '  ', $mol_term_color.red( 'БАГ: чтение списка упало — ' + error.trim() ) )
				if( frame ) console.log( '  ', $mol_term_color.gray( frame.trim() ) )
				this.failed = true
				return
			}

			console.log( '  ', $mol_term_color.green( 'сюжет дошёл до конца' ) )
		}

		static async run() {

			const only = $mol_state_arg.value( 'story' )

			if( only ) {
				const story = this.stories[ only ]
				if( !story ) return console.log( 'Нет такого сюжета:', only )
				await story()
				return
			}

			console.log( $mol_term_color.gray(
				'Все сюжеты идут по очереди с полным синком после каждого шага —\n' +
				'конкурентности нигде нет, пиры просто пишут в один список.'
			) )

			await this.story_solo()
			await this.story_pair()
			this.spawn_cycle()
			await this.story_root()

			console.log( '' )
			console.log( this.failed
				? $mol_term_color.red( 'Итог: баги воспроизвелись.' )
				: $mol_term_color.green( 'Итог: всё сошлось — похоже, движок починили.' )
			)
		}

	}

	/** Ленд без хранилища, шины и мастера: сюжеты обмениваются юнитами вручную. */
	export class $giper_baza_repro_land extends $giper_baza_land {
		override sync() {
			return this
		}
	}

	$giper_baza_repro.run().catch( error => {
		console.error( error )
		process.exitCode = 1
	} )

}
