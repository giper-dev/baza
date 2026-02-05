namespace $ {
	
	/** Virtual Pawn that represents contained units as high-level data types. */
	export class $giper_baza_pawn extends $mol_object {
		
		static tag: keyof typeof $giper_baza_unit_sand_tag = 'vals'
		static meta = null as null | $giper_baza_link
		
		/** Standalone part of Glob which syncs separately, have own rights, and contains Units */
		land() {
			return null as any as $giper_baza_land
		}
		
		/** Land local Pawn id */
		head() {
			return $giper_baza_link.hole
		}
		
		/** Link to Land/Lord. */
		land_link() {
			return this.land()?.link() ?? this.$.$giper_baza_auth.current().pass().lord()
		}
		
		/** Link to Pawn/Land/Lord. */
		@ $mol_memo.method
		link() {
			return new $giper_baza_link( '___' + this.head() ).resolve( this.land_link() )
		}
		
		toJSON() {
			return this.link().str
		}
		
		/** Returns another representation of this Pawn. */
		@ $mol_mem_key
		cast< Pawn extends typeof $giper_baza_pawn >( Pawn: Pawn ): InstanceType< Pawn > {
			return this.land().Pawn( Pawn ).Head( this.head() )
		}
		
		/** Ordered inner alive Pawn. */
		@ $mol_mem_key
		pawns< Pawn extends typeof $giper_baza_pawn >( Pawn: Pawn | null ): readonly InstanceType< Pawn >[] {
			const land = this.land()
			const map = {
				term: ()=> land.Pawn( Pawn || $giper_baza_atom_vary ),
				solo: ()=> land.Pawn( Pawn || $giper_baza_atom_vary ),
				vals: ()=> land.Pawn( Pawn || $giper_baza_list_vary ),
				keys: ()=> land.Pawn( Pawn || $giper_baza_dict ),
			}
			return this.units().map( unit => map[ unit.tag() ]().Head( unit.self() ) ) as any
		}
		
		/** All ordered alive Units */
		units() {
			return this.units_of( $giper_baza_link.hole )
		}
		
		@ $mol_mem_key
		units_of( peer: $giper_baza_link | null ) {
			const head = this.head()
			return this.land().sand_ordered({ head, peer }).filter( unit => !unit.dead() && unit.self().str !== '' )
		}
		
		@ $mol_mem
		meta( next?: $giper_baza_link ) {
			
			const prev = this.meta_of( $giper_baza_link.hole )
			if( !next ) return prev
			if( prev?.str === next?.str ) return prev
			
			const head = this.head()
			this.land().post( $giper_baza_link.hole, head, $giper_baza_link.hole, next )
			
			return next
		}
		
		@ $mol_mem_key
		meta_of( peer: $giper_baza_link | null ) {
			const head = this.head()
			const unit = this.land().sand_ordered({ head, peer }).find( unit => !unit.dead() && unit.self().str === '' ) ?? null
			return unit ? $giper_baza_vary_cast_link( this.land().sand_decode( unit ) ) : null
		}
		
		filled() {
			return this.units().length > 0
		}
		
		/** Ability to make changes by current peer. */
		can_change() {
			return this.land().pass_rank( this.land().auth().pass() ) >= $giper_baza_rank_post( 'late' )
		}
		
		/** Time of last changed unit inside Pawn subtree */
		@ $mol_mem
		last_change() {
			
			const land = this.land()
			let last = 0
			
			const visit = ( sand: $giper_baza_unit_sand )=> {
				if( sand.time() > last ) last = sand.time()
				if( sand.tag() === 'term' ) return
				land.Pawn( $giper_baza_pawn ).Head( sand.self() ).units().forEach( visit )
			}
			this.units().forEach( visit )
			
			return last ? $giper_baza_time_moment( last ) : null
			
		}
		
		/** All author Passes of Pawn subtree */
		@ $mol_mem
		authors() {
			
			const land = this.land()
			const peers = new Set< $giper_baza_auth_pass >()
			
			const visit = ( sand: $giper_baza_unit_sand )=> {
				peers.add( land.lord_pass( sand.lord() )! )
				if( sand.tag() === 'term' ) return
				land.Pawn( $giper_baza_pawn ).Head( sand.self() ).units_of( null ).forEach( visit )
			}
			this.units_of( null ).forEach( visit )
			
			return [ ... peers ]
			
		}
		
		;[ $mol_dev_format_head ]() {
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				this.head(),
			)
		}
		
	}

}
