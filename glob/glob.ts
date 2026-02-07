namespace $ {
	/** Whole global graph database which contains Lands. */
	export class $giper_baza_glob extends $mol_object {
		
		static lands_touched = new $mol_wire_set< string >()
		
		/** Glob synchronizer. */
		@ $mol_mem
		static yard() {
			return new this.$.$giper_baza_yard
		}
		
		/** Land where Lord is King. Contains only main info */
		static home< Home extends typeof $giper_baza_flex_subj = typeof $giper_baza_flex_subj >( Home?: Home ) {
			const home = this.Land( this.$.$giper_baza_auth.current().pass().lord() ).Data( Home ?? this.$.$giper_baza_flex_subj ) as InstanceType< Home >
			if( Home?.meta && !home.meta() ) home.meta( Home.meta )
			return home
		}
		
		@ $mol_action
		static king_grab( preset : $giper_baza_rank_preset = [[ null, this.$.$giper_baza_rank_read ]] ) {
			
			const mapping = new Map( preset )
			
			const king = this.$.$giper_baza_auth.grab()
			const colony = ( $mol_wire_sync( this.$.$giper_baza_land ) as typeof $giper_baza_land ).make({ $: this.$ })
			colony.auth = $mol_const( king )
			
			colony.encrypted( ( mapping.get( null ) ?? this.$.$giper_baza_rank_deny ) === this.$.$giper_baza_rank_deny )
			
			const self = this.$.$giper_baza_auth.current().pass()
			colony.give( self, this.$.$giper_baza_rank_rule )
			
			for( const [ key, rank ] of mapping ) colony.give( key, rank )
			
			this.Land( colony.link() ).units_steal( colony )
			
			return king
		}
		
		@ $mol_action
		static land_grab( preset : $giper_baza_rank_preset = [[ null, this.$.$giper_baza_rank_read ]] ) {
			return this.Land( this.king_grab( preset ).pass().lord() )
		}
		
		/** Standalone part of Glob which syncs separately, have own rights, and contains Units */
		@ $mol_mem_key
		static Land( link: $giper_baza_link ): $giper_baza_land {
			if( !link.str ) $mol_fail( new Error( 'Empty Land Link' ) )
			this.lands_touched.add( link.str )
			return this.$.$giper_baza_land.make({
				link: $mol_const( link ),
			})
		}
		
		/** High level representation of stored data. */
		static Pawn< Pawn extends typeof $giper_baza_pawn > ( link: $giper_baza_link, Pawn: Pawn ) {
			const land = this.Land( link.land() )
			return land.Pawn( Pawn ).Head( link.head() )
		}
		
		@ $mol_mem
		static Seed() {
			const link = $giper_baza_flex_deck_base.lord()
			const seed = this.Pawn( link, $giper_baza_flex_seed ) 
			// if( !$mol_wire_sync( seed ).meta() )
			this.boot()
			return seed
		}
		
		@ $mol_action
		static boot() {
			const file = $mol_file.relative( 'giper/baza/glob/glob.baza' )
			const pack = $mol_wire_sync( $giper_baza_pack ).from( file.buffer() ) as $giper_baza_pack
			this.apply_pack( pack )
		}
		
		@ $mol_action
		static apply_pack( pack: $giper_baza_pack ) {
			return this.apply_parts( pack.parts() )
		}
		
		@ $mol_action
		static apply_parts( parts: $giper_baza_pack_parts ) {
			
			for( const [ land_id, part ] of parts ) {
				const land = this.Land( new this.$.$giper_baza_link( land_id ) )
				land.diff_apply( part.units )
			}

		}
		
	}
	
}
