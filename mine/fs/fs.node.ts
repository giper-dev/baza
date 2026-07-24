namespace $ {
	
	/** Atomic transaction. */
	export class $giper_baza_mine_fs_yym_act extends $mol_object2 {
		
		constructor( public yym: $giper_baza_mine_fs_yym ) {
			super()
		}
		
		transaction!: $mol_file_transaction
		offsets_del = new WeakMap< ArrayBuffer, number >
		offsets_ins = new WeakMap< ArrayBuffer, number >
		
		/** Stores data and returns offset in file. */
		@ $mol_action
		save( ... data: [ ArrayBufferView< ArrayBuffer >, ... ArrayBufferView< ArrayBuffer >[] ] ) {
			
			let offset = this.offsets_ins.get( data[0].buffer )
			if( offset === undefined ) {
				
				offset = this.yym.offsets().get( data[0].buffer )
				if( offset ) return offset
				
				let size = data.reduce( ( sum, buf )=> sum + buf.byteLength, 0 )
				size = Math.ceil( size / 8 ) * 8
				
				offset = this.yym.pool().acquire( size )
				this.offsets_ins.set( data[0].buffer, offset )
				this.yym.offsets().set( data[0].buffer, offset )
				
			}
			
			this.transaction.write({
				buffer: data,
				position: offset,
			})
			
			return offset
		}
		
		/** Marks slice of file as free. */
		@ $mol_action
		free( data: ArrayBufferView< ArrayBuffer >, size = data.byteLength ) {
			
			size = Math.ceil( size / 8 ) * 8
			
			let offset = this.offsets_del.get( data.buffer )
			if( offset === undefined ) {
				
				offset = this.yym.offsets().get( data.buffer )
				if( !offset ) {
					return $mol_fail( new Error( 'Try to free non saved', { cause: { data, size } }, ))
				}
				
				this.offsets_del.set( data.buffer, offset )
				this.yym.pool().release( offset, size )
				this.yym.offsets().delete( data.buffer )
				
			}
			
			this.transaction.write({
				buffer: new Uint8Array( size ),
				position: offset,
			})
			
		}
		
	}
	
	/** Yin-Yan Mirrors Storage. */
	export class $giper_baza_mine_fs_yym extends $mol_object2 {

		/** Memory allocator. */
		@ $mol_mem
		pool( reset?: null ) {
			$mol_wire_solid()
			return new $mol_memory_pool
		}
		
		/** Offsets of stored buffers. */
		@ $mol_mem
		offsets( reset?: null ) {
			$mol_wire_solid()
			return new Map< ArrayBuffer, number >
		}
		
		constructor(
			/** Yin & Yan mirrors files. */
			readonly sides: [ $mol_file, $mol_file ],
		) {
			super()
		}
		
		destructor() {
			
			if( !this.sides[1].exists() ) return
			
			this.sides[1].open( 'write_only' ).flush()
			this.sides[0].exists( false )
			this.pool( null )
			this.offsets( null )
			
		} 
		
		/** Prepare mirrors to read. */
		@ $mol_mem
		@ $mol_action
		load_init() {
			const version = ( file: $mol_file )=> file.modified()?.valueOf() ?? 0
			if( version( this.sides[0] ) < version( this.sides[1] ) ) this.sides.reverse()
		}
		
		/** Mirror the last successful load() read from. Balls are paged from the same one. */
		loaded_file = null as null | $mol_file

		/** Load whole data. `side` 0 is the fresher mirror, 1 is the backup. */
		load( side = 0 ) {
			this.load_init()
			const file = this.sides[ side ]
			try {
				const tx = file.open( 'read_only' )
				const data = tx.read()
				tx.destructor()
				this.pool().acquire( data.byteLength )
				this.loaded_file = file
				return data
			} catch( error: any ) {
				if( error.code === 'ENOENT' ) { this.loaded_file = file; return new Uint8Array() }
				return $mol_fail_hidden( error )
			}
		}

		/** Reads slice of mirror without loading it whole. */
		ball_read( position: number, size: number ) {

			const file = this.loaded_file ?? ( this.load_init(), this.sides[0] )

			const descr = $node.fs.openSync( file.path(), 'r' )

			try {

				const ball = new Uint8Array( size )

				for( let done = 0; done < size; ) {

					const read = $node.fs.readSync( descr, ball, done, size - done, position + done )
					if( !read ) $mol_fail( new Error( `Ball is truncated (${ done }/${ size })` ) )

					done += read

				}

				return ball

			} finally {
				$node.fs.closeSync( descr )
			}

		}

		/** Safe writes to both mirrors. */
		atomic( task: ( act: $giper_baza_mine_fs_yym_act )=> void ) {
			
			this.save_init()
			
			const act = new $giper_baza_mine_fs_yym_act( this )
			const tx1 = act.transaction = this.sides[1].open( 'create', 'write_only' )
			task( act )
			tx1.flush()
			tx1.destructor()
			
			this.sides.reverse()
			const tx2 = act.transaction = this.sides[1].open( 'create', 'write_only' )
			task( act )
			tx2.destructor()
			
		}
		
		/** Prepares mirrors to write. */
		@ $mol_mem
		save_init() {
			
			$mol_wire_solid()
			
			this.load_init()
			
			if( this.sides[1].exists() ) {
				$mol_wire_sync( this.$ ).$mol_log3_rise({
					place: this,
					message: 'Reset mirror',
					file: this.sides[1].path(),
				})
			}

			this.sides[0].clone( this.sides[1].path() )
			
		}
		
		empty() {
			this.load_init()
			return this.pool().empty()
		}
		
	}
	
	export class $giper_baza_mine_fs extends $giper_baza_mine_temp {
		
		@ $mol_mem 
		store() {
			$mol_wire_solid()
			const land = this.land()
			const area = land.area()
			
			const root = this.$.$mol_file.relative( '.baza' )
			let dir = root.resolve( land.str.slice( 0, 2 ) )
			if( area.str ) dir = dir.resolve( area.str.slice( -2 ) )
			
			dir.exists( true )
			
			return new $giper_baza_mine_fs_yym([
				dir.resolve( land.str + '.yin.baza' ),
				dir.resolve( land.str + '.yan.baza' ),
			])
			
		}
		
		@ $mol_mem
		store_init() {
			
			if( !this.store().empty() ) return
			
			const head = $giper_baza_pack.make([ [ this.land().str, new $giper_baza_pack_part ] ])
			this.store().atomic( side => side.save( head ) )
			
		}
		
		@ $mol_action
		override units_save( diff: $giper_baza_mine_diff ) {
			
			this.store_init()
			
			this.store().atomic( side => {
				
				for( const unit of diff.del ) {
					if( unit instanceof $giper_baza_unit_sand && unit.big() ) {
						side.free( unit, unit.byteLength + unit.size() )
					} else {
						side.free( unit )
					}
				}
				
				for( const unit of diff.ins ) {
					if( unit instanceof $giper_baza_unit_sand && unit.big() ) side.save( unit, unit.ball() )
					else side.save( unit )
				}
				
			} )
			
			for( const unit of diff.ins ) {
				this.units_persisted.add( unit )
			}

		}

		/** Loads Ball from mirror by Sand offset. */
		@ $mol_action
		override ball_load( sand: $giper_baza_unit_sand ) {

			const offset = this.store().offsets().get( sand.buffer )
			if( offset === undefined ) return $mol_fail(
				new Error( 'No stored offset for Sand', { cause: { sand } } )
			)

			const ball = this.store().ball_read( offset + sand.byteLength, sand.size() )

			// Ball is addressed by Shot inside signed Sand header, so storage can't tamper it silently.
			if( $giper_baza_link.hash_bin( ball ).str !== sand.shot().str ) $mol_fail(
				new Error( 'Wrong Ball hash', { cause: { sand } } )
			)

			return ball
		}

		@ $mol_action
		override units_load() {

			// A single corrupt Land file must never crash the master: parse errors
			// loop forever in the reactive fibers that read it and exhaust the heap.
			// So try the fresher mirror, fall back to the backup, and if both are
			// unreadable log it and skip the Land instead of throwing.
			for( let side = 0; side < 2; ++side ) {

				this.store().pool( null )
				this.store().offsets( null )

				try {

					const buf = this.store().load( side )
					if( !buf.length ) return []

					const pack = $giper_baza_pack.from( buf )

					// Balls stay in storage and are paged in by `ball_load` on demand,
					// so whole Land content never sits in memory at once.
					const parts = new Map( pack.parts( this.store().offsets(), this.store().pool(), true ) )
					if( parts.size > 1 ) $mol_fail( new Error( 'Wrong lands count', { cause: { count: parts.size } } ) )

					for( const [ land, part ] of parts ) {
						if( land !== this.land().str ) $mol_fail( new Error( 'Unexpected land', { cause: { expected: this.land().str, existen: land } } ) )

						for( const unit of part.units ) {
							this.units_persisted.add( unit )
							$giper_baza_unit_trusted_grant( unit )
						}

						return part.units
					}

					return []

				} catch( error ) {

					if( error instanceof Promise ) $mol_fail_hidden( error )

					$mol_wire_sync( this.$ ).$mol_log3_warn({
						place: this,
						message: 'Corrupt Land mirror',
						hint: side ? 'Both mirrors unreadable. Land skipped to keep master alive.' : 'Trying backup mirror.',
						land: this.land().str,
						mirror: side ? 'yan' : 'yin',
						error: ( error as Error )?.message ?? String( error ),
					})

				}

			}

			this.store().pool( null )
			this.store().offsets( null )
			return []
		}
		
		destructor() {
			this.store().destructor()
		}
		
	}
	
}
