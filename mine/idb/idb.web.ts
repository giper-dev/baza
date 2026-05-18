namespace $ {
	
	function Sync< Result >( task: ()=> Promise< Result > ) {
		return task() as Result
	}
		
	export class $giper_baza_mine_idb extends $giper_baza_mine_temp {
		
		@ $mol_action
		override units_save( diff: $giper_baza_mine_diff ) {
			
			return Sync( async ()=> {
			
				const db = await this.$.$giper_baza_mine_idb.db()
				const change = db.change( 'Unit', 'Ball' )
				const { Unit, Ball } = change.stores
				const land = this.land().str
				
				for( const unit of diff.del ) {
					
					Unit.drop( [ land, unit.path() ] )
					if( unit instanceof $giper_baza_auth_pass ) continue
					
					unit.choose({
						gift: ()=> {},
						seal: seal => {},
						sand: sand => {
							if( !sand.big() ) return
							Ball.drop([ land, sand.path() ])
						},
					})
					
				}
				
				for( const unit of diff.ins ) {
					
					Unit.put( [ unit.buffer ], [ land, unit.path() ] )
					this.units_persisted.add( unit )
					if( unit instanceof $giper_baza_auth_pass ) continue
					
					unit.choose({
						gift: ()=> {},
						seal: seal => {},
						sand: sand => {
							if( !sand.big() ) return
							Ball.put( [ sand.ball().buffer ], [ land, unit.path() ] )
						},
					})
					
				}
				
				await change.commit()
			
			})
			
		}
		
		@ $mol_action
		override units_load() {
			
			return Sync( async ()=> {
			
				const db = await this.$.$giper_baza_mine_idb.db()
				const { Unit } = db.read( 'Unit' )
				const land = this.land().str
				
				const range = IDBKeyRange.bound( [ land, '' ], [ land, '\uFFFF' ] )
				const res = await Unit.select( range )
				
				const units = res.map( bin => $giper_baza_unit_base.narrow( bin[0] ) )
				for( const unit of units ) {
					
					this.units_persisted.add( unit )
					$giper_baza_unit_trusted_grant( unit )
					
				}
				
				return units as readonly $giper_baza_unit[]
			} )
			
		}
		
		@ $mol_action
		override ball_load( sand: $giper_baza_unit_sand ) {
			
			return Sync( async ()=> {
				
				const db = await this.$.$giper_baza_mine_idb.db()
				const { Ball } = db.read( 'Ball' )
				const land = this.land().str
				
				const res = await Ball.get([ land, sand.path() ])
				return res ? new Uint8Array( res[0] ) : new Uint8Array()
			
			} )
			
		}

		@ $mol_memo.method
		static async db() {
			
			return await this.$.$mol_db<{
				
				Unit: {
					Key: [ land: string, path: string ]
					Doc: [ ArrayBuffer ]
					Indexes: {}
				}
				
				Ball: {
					Key: [ land: string, path: string ]
					Doc: [ ArrayBuffer ]
					Indexes: {}
				}
				
			}>( '$giper_baza_mine',
				mig => mig.store_make( 'Unit' ),
				mig => mig.store_make( 'Ball' ),
			)
			
		}
		
	}
	
}
