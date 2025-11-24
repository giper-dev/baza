namespace $ {
	/** Whole global graph database which contains Lands. */
	export class $giper_baza_glob extends $mol_object {
		
		static lands_touched = new $mol_wire_set< string >()
		
		/** Glob synchronizer. */
		@ $mol_mem
		static yard() {
			return new this.$.$giper_baza_yard
		}
		
		/** Land where Lord is King. Contains only ain info */
		static home< Node extends typeof $giper_baza_home = typeof $giper_baza_home >( Node?: Node ) {
			return this.Land( this.$.$giper_baza_auth.current().pass().lord() ).Data( Node ?? $giper_baza_home ) as InstanceType< Node >
		}
		
		@ $mol_action
		static king_grab( preset : $giper_baza_rank_preset = [[ null, $giper_baza_rank_read ]] ) {
			
			const mapping = new Map( preset )
			
			const king = this.$.$giper_baza_auth.grab()
			const colony = ( $mol_wire_sync( $giper_baza_land ) as typeof $giper_baza_land ).make({ $: this.$ })
			colony.auth = $mol_const( king )
			
			colony.encrypted( ( mapping.get( null ) ?? $giper_baza_rank_deny ) === $giper_baza_rank_deny )
			
			const self = this.$.$giper_baza_auth.current().pass()
			colony.give( self, $giper_baza_rank_rule )
			
			for( const [ key, rank ] of mapping ) colony.give( key, rank )
			
			this.Land( colony.link() ).diff_apply( colony.diff_units() )
			
			return king
		}
		
		@ $mol_action
		static land_grab( preset : $giper_baza_rank_preset = [[ null, $giper_baza_rank_read ]] ) {
			return this.Land( this.king_grab( preset ).pass().lord() )
		}
		
		/** Standalone part of Glob which syncs separately, have own rights, and contains Units */
		@ $mol_mem_key
		static Land( link: $giper_baza_link ): $giper_baza_land {
			this.lands_touched.add( link.str )
			return $giper_baza_land.make({
				link: $mol_const( link ),
			})
		}
		
		/** High level representation of stored data. */
		static Node< Node extends typeof $giper_baza_node > ( link: $giper_baza_link, Node: Node ) {
			const land = this.Land( link.land() )
			return land.Node( Node ).Item( link.head() )
		}
		
		@ $mol_action
		static apply_pack( pack: $giper_baza_pack ) {
			return this.apply_parts( pack.parts() )
		}
		
		@ $mol_action
		static apply_parts( parts: $giper_baza_pack_parts ) {
			
			for( const [ land_id, part ] of parts ) {
				const land = this.Land( new $giper_baza_link( land_id ) )
				land.diff_apply( part.units )
			}

		}
		
	}
	
}
