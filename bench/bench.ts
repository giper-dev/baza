namespace $ {
	export class $giper_baza_bench extends $mol_object2 {
		
		@ $mol_memo.method
		static count() {
			return Number( $mol_state_arg.value( 'count' ) ) || 100
		}
		
		static master() {
			return $mol_state_arg.value( 'master' ) ?? undefined
		}
		
		static isolate_count = 0
		static isolate( master?: string ) {
			
			const $ = $$.$mol_ambient({})
			const isolate_count = ++ this.isolate_count
			
			$.$giper_baza_mine = $giper_baza_mine_temp
			
			class $giper_baza_bench_yard extends $giper_baza_yard {}
			$giper_baza_bench_yard.masters = $mol_const( $mol_maybe( master ) )
			$.$giper_baza_yard = $giper_baza_bench_yard
			
			class $giper_baza_bench_glob extends $giper_baza_glob {
				static [ Symbol.toStringTag ] = '$giper_baza_bench_glob' + ( isolate_count ) 
				static $ = $
				static lands_touched = new $mol_wire_set< string >()
			}
			$.$giper_baza_glob = $giper_baza_bench_glob
			
			class $giper_baza_bench_auth extends $giper_baza_auth {

				@ $mol_mem
				static override current() {
					return this.from( '_9nV1NuqbUeu1sUiLaq_KI_g1ViEjhM3-PNwxwl4t6AumN_FTqZzWpZ0T1ec64n418nazPbKmzimFyjEJST1cAMPU48vm3r966UVMmfXwrUCGXPHIcvsxSsP1x4Tf7R9c' )
				}
				
			}
			$.$giper_baza_auth = $giper_baza_bench_auth
			
			return $
		}
		
		static async run() {
			
			const $1 = this.isolate()
			const $2 = this.isolate()
			const $3 = this.isolate( this.master() )
			
			this.print_pair( 'Count', this.count() )
			this.print_pair( 'Land', $1.$giper_baza_auth.current().pass().lord().str )
			this.print_pair( 'Master', this.master() )
			
			this.print_table( 'Stage', 'Dur', 'Freq', $mol_term_color.gray )
			
			const glob1 = $1.$giper_baza_glob
			const glob2 = $2.$giper_baza_glob
			const glob3 = $3.$giper_baza_glob
			
			const pawn1 = glob1.home().cast( $giper_baza_atom_real )
			const pawn2 = glob2.home().cast( $giper_baza_atom_real )
			const pawn3 = glob3.home().cast( $giper_baza_atom_real )
			
			let faces = new $giper_baza_face_map
			const packs = [] as $giper_baza_pack[]
			
			await this.measure( 'Making', async ()=> {
			
				for( let i = 0; i < this.count(); ++i ) {
					
					pawn1.val( i )
					
					const parts = await $mol_wire_async( pawn1.land() ).diff_parts( faces )
					faces = pawn1.land().faces.clone()
					
					const pack = $giper_baza_pack.make( parts )
					packs.push( pack )
					
				}
			
			} )
			
			$mol_assert_equal( pawn1.val(), this.count() - 1 )
			$mol_assert_equal( pawn2.val(), null )
			
			await this.measure( 'Applying', async ()=> {
			
				for( const pack of packs ) {
					await $mol_wire_async( glob2 ).apply_pack( pack )
				}
			
			} )
			
			$mol_assert_equal( pawn2.val(), this.count() - 1 )
			
			if( this.master() ) {
			
				const connect3 = new $mol_wire_atom( 'master3', ()=> {
					$mol_wire_solid()
					return glob3.yard().master()!
				})
				
				const port3 = await connect3.async()
				$mol_assert_unique( port3, null )
				
				const socket3 = await new Promise< WebSocket >( done => {
					const ws = new $mol_dom.WebSocket( this.master()!.replace( /^http/, 'ws' ) )
					ws.onopen = ()=> done( ws )
				} )
				
				await this.measure( 'Sending', async ()=> {
					for( const pack of packs ) socket3.send( pack )
				} )
				
				await this.measure( 'Roundtrip', async ()=> {
					while( pawn3.val() !== this.count() - 1 ) {
						await this.$.$mol_wait_timeout_async(1)
					}
				} )
				
			}
			
			process.exit()
			
		}
		
		static async measure( name: string, task: ()=> Promise<any> ) {
			
			let dur =- Date.now()
			await task()
			await this.$.$mol_wait_rest_async()
			dur += Date.now()
			const freq = Math.round( 1000 * this.count() / dur )
			
			this.print_table( name, dur, freq )
			
		}
		
		static print_pair( name: any, value: any ) {
			console.log(
				$mol_term_color.cyan( String( name ).padEnd( 12 ) ),
				$mol_term_color.yellow( String( value ) ),
			)
		}
		
		static print_table( name: any, dur: any, freq: any, color?: typeof $mol_term_color.gray ) {
			console.log(
				( color ?? $mol_term_color.cyan )( String( name ).padEnd( 9 ) ),
				( color ?? $mol_term_color.yellow )( String( dur ).padStart( 6 ) ),
				( color ?? $mol_term_color.yellow )( String( freq ).padStart( 6 ) ),
			)
		}
		
	}
	$giper_baza_bench.run()
}
