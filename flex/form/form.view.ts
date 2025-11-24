namespace $.$$ {
	export class $giper_baza_flex_form extends $.$giper_baza_flex_form {
		
		@ $mol_mem
		kind() {
			
			const land = this.$.$giper_baza_glob.home().hall_by( $giper_baza_flex_domain, null )!.land()
			const domain = $giper_baza_flex_domain.ensure( land ) 

			return this.node().cast( $giper_baza_flex_thing ).Kind()?.remote() ?? domain.Kinds()?.remote_list()[0] ?? null!
		}
		
		@ $mol_mem
		fields() {
			return this.kind()?.Props()?.remote_list().map( key => this.Field( key ) ) ?? []
		}
		
		field_name( prop: $giper_baza_flex_prop ) {
			return prop.Title()?.val() ?? prop.link().str
		}
		
		field_node( prop: $giper_baza_flex_prop, auto?: any ) {
			return this.node().cast( $giper_baza_dict ).dive( prop.Key(auto)?.val() ?? prop.link(), $giper_baza_node, auto )!
		}
		
		field_prop( prop: $giper_baza_flex_prop ) {
			return prop
		}
		
		enabled() {
			return this.node()?.can_change() ?? false
		}
		
	}
}
