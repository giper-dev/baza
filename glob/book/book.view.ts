namespace $.$$ {
	export class $giper_baza_glob_book extends $.$giper_baza_glob_book {
		
		@ $mol_mem
		override spread_ids() {
			
			const spread = this.spread()
			const spread_land = new $giper_baza_link( spread ).land().str
			const lands_touched = [ ... this.$.$giper_baza_glob.lands_touched.values() ]
			const groups = $mol_array_groups( lands_touched, land => land )
			
			const ids = [] as string[]
			
			for( const lord of Object.keys( groups ) ) {
				
				ids.push( lord )
				
				for( const land of groups[ lord ]! ) {
					if( land !== lord ) ids.push( land )
					if( land === spread_land ) ids.push( spread )
				}
				
			}
			
			ids.sort( $mol_compare_text( id => id ) )
			
			return ids
		}
		
		@ $mol_mem
		override pages() {
			return [
				... super.pages(),
				... this.side() === 'rights' ? [ this.Rights_page() ] : [],
			]
		}
		
		side() {
			return this.$.$mol_state_arg.value( 'side' ) ?? ''
		}
		
		home_link() {
			return this.$.$giper_baza_glob.home( $giper_baza_flex_user ).link().str
		}
		
		land_current() {
			return this.land( this.spread() )
		}
		
		override land( id: string ) {
			return this.$.$giper_baza_glob.Land( new $giper_baza_link( id ).land() )
		}
		
		override pawn( id: string ) {
			return this.$.$giper_baza_glob.Pawn( new $giper_baza_link( id ), $giper_baza_dict )
		}
		
		override spread_title( id: string ) {
			const link = new $giper_baza_link( id )
			let title = ''
			try {
				title = this.$.$giper_baza_glob.Pawn( link, $giper_baza_flex_subj ).Name()?.val() ?? ''
			} catch( error ) {
				$mol_fail_log( error )
			}
			const chunks = id.split( '_' )
			const suffix = title || ( chunks.length >= 4 ? link.head().str : chunks.length === 3 ? link.area() : link.str )
			const prefix = [
				'',
				'',
				'🌎 ',
				'   🌄 ',
				'      🧩 ',
			][ chunks.length ]
			return prefix + suffix
		}
		
		override land_add( preset: $giper_baza_rank_preset ) {
			
			this.$.$mol_dom_context.location.href = this.$.$mol_state_arg.link({
				[ this.param() ]: this.$.$giper_baza_glob.land_grab( preset ).link().str
			})
			
			return null
		}
		
		@ $mol_action
		override update( files: File[] ) {
			const glob = this.$.$giper_baza_glob
			for( const file of files ) {
				const dump = $mol_wire_sync( file ).arrayBuffer()
				const pack = $mol_wire_sync( $giper_baza_pack ).from( dump ) as $giper_baza_pack
				glob.apply_pack( pack )
			}
			return []
		}
		
		override async wipe() {
			const yard = await this.$.$mol_db( '$giper_baza_yard' )
			const mine = await this.$.$mol_db( '$giper_baza_mine' )
			yard.kill()
			mine.kill()
			location.reload()
		}
		
		override seed_make() {
			const seed = this.$.$giper_baza_flex_init() 
			this.$.$mol_state_arg.go({
				[ this.param() ]: seed.link().str
			})
		}
		
		@ $mol_mem
		lands_checked() {
			const lands_touched = [ ... this.$.$giper_baza_glob.lands_touched.values() ]
			const lands_checked = lands_touched.filter( land => this.land_checked( land ) )
			return lands_checked
		}
		
		dump_enabled() {
			return Boolean( this.lands_checked().length )
		}
		
		@ $mol_mem
		dump_pack() {
			
			const lands = this.lands_checked()
			if( !lands.length ) return null
			
			const parts = lands.flatMap( land => this.land( land ).diff_parts() )
			const pack = $giper_baza_pack.make( parts )
			
			return pack
		}
		
		override dump() {
			return this.dump_pack()?.toBlob()!
		}
		
		override dump_name() {
			return `dump.baza`
		}
		
	}
}
