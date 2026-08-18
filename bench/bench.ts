namespace $ {

	/** Цена операций при росте объёма. Линейный движок держит коэффициент удвоения около 2, квадратичный — около 4. */
	export class $giper_baza_bench extends $mol_object2 {

		@ $mol_memo.method
		static count() {
			return Number( $mol_state_arg.value( 'count' ) ) || 8000
		}

		static auth = null as null | $giper_baza_auth

		static isolate() {

			const $ = $$.$mol_ambient({})
			const auth = this.auth!

			$.$giper_baza_mine = $giper_baza_mine_temp

			class $giper_baza_bench_yard extends $giper_baza_yard {}
			$giper_baza_bench_yard.masters = $mol_const( [] as string[] )
			$.$giper_baza_yard = $giper_baza_bench_yard

			class $giper_baza_bench_auth extends $giper_baza_auth {
				static override current() { return auth }
			}
			$.$giper_baza_auth = $giper_baza_bench_auth

			return $
		}

		static land() {
			const $ = this.isolate()
			const land = $.$giper_baza_land.make({ $ })
			land.sync = function() { this.loading(); return this }
			return land
		}

		static list( edit: ( list: $giper_baza_list, at: number )=> void ) {

			let prev = 0
			for( let size = 1000; size <= this.count(); size *= 2 ) {

				const list = this.land().Data( $giper_baza_list )

				const started = Date.now()
				for( let at = 0; at < size; ++at ) edit( list, at )
				const total = Date.now() - started

				console.log( '   ', size, '\t' + total + ' мс', prev ? '\tx' + ( total / prev ).toFixed( 2 ) : '' )
				prev = total

			}

		}

		static atom() {

			const count = this.count()
			const pawn = this.land().Data( $giper_baza_atom_real )

			const durs = [] as number[]

			for( let at = 1; at <= count; ++at ) {
				const start = Date.now()
				pawn.val( at )
				durs.push( Date.now() - start )
			}

			const tenth = Math.max( 1, Math.floor( count / 10 ) )
			const avg = ( from: number, to: number )=> {
				let sum = 0
				for( let at = from; at < to; ++at ) sum += durs[ at ]
				return sum / ( to - from )
			}

			console.log( '    записей\t', count )
			console.log( '    первые 10%\t', avg( 0, tenth ).toFixed( 2 ) + ' мс/оп' )
			console.log( '    последние 10%\t', avg( count - tenth, count ).toFixed( 2 ) + ' мс/оп' )

		}

		static async run() {

			this.auth = await $mol_wire_async( $giper_baza_auth ).grab() as $giper_baza_auth

			console.log( '\nСписок, прямая вставка' )
			this.list( ( list, at )=> void list.land().post( $giper_baza_link.hole, list.head(), null, 'p' + at, 'term' ) )

			console.log( '\nСписок, add с проверкой дубля' )
			this.list( ( list, at )=> list.add( 'p' + at ) )

			console.log( '\nАтом, перезапись' )
			this.atom()

			process.exit( 0 )

		}

	}

}
