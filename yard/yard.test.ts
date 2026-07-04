namespace $ {
	
	$mol_test_mocks.push( $=> {
		class $giper_baza_yard_mock extends $.$giper_baza_yard {
			
			master() {
				return null
			}
			
		}
		$.$giper_baza_yard = $giper_baza_yard_mock
	} )
	
	$giper_baza_yard.masters = ()=> {
		$giper_baza_glob.Seed()
		return [ 'http://localhost:9090/' ]
	}

	$mol_test({

		async 'forget_land never forces pending master connection'( $ ) {

			// Регресс на бесконечный цикл: land.destructor() зовёт forget_land
			// вне фибры, и если тот форсит вычисление master() (висящий коннект),
			// то суспензия без подписчика уничтожает master-фибру, инвалидация
			// немедленно ретраит задачу, и так до OOM - вкладка крашится.
			// Прощальный пакет должен уходить только в уже готовые порты из кеша.

			let master_calls = 0

			class Yard extends $.$giper_baza_yard {

				@ $mol_mem
				override master() {
					// предохранитель: с багом пересоздание мастера зацикливается
					// и глушит event loop, поэтому после 10 попыток отдаём ошибку
					if( ++ master_calls > 10 ) $mol_fail( new Error( 'master respawn storm' ) )
					return new Promise( ()=> {} ) as any // вечно висящее подключение
				}

			}

			const yard = Yard.make({ $ })

			const auth = await $.$giper_baza_auth.generate()
			const land = $giper_baza_land.make({ $, auth: ()=> auth })

			// как в land.destructor: вызов вне фибры, в изолированной задаче
			// (первый проход выполняется синхронно, хвост сразу прибиваем)
			const call = $mol_wire_async( yard ).forget_land( land ) as any
			call.catch?.( ()=> {} )
			call.destructor?.()

			$mol_assert_equal( master_calls, 0 )

		},

	})

}
