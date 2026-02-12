declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
        static $: $;
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_promise<Result = void> extends Promise<Result> {
        done: (value: Result | PromiseLike<Result>) => void;
        fail: (reason?: any) => void;
        constructor(executor?: (done: (value: Result | PromiseLike<Result>) => void, fail: (reason?: any) => void) => void);
    }
}

declare namespace $ {
    class $mol_promise_blocker<Result> extends $mol_promise<Result> {
        static [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static radial_gradient<Value>(value: Value): $mol_style_func<"radial-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | 'none' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size] | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    const $mol_key_handle: unique symbol;
    const $mol_key_store: WeakMap<object, string>;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        static [$mol_key_handle](): any;
        destructor(): void;
        static destructor(): void;
        [Symbol.dispose](): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        constructor(id?: string);
        [Symbol.toStringTag]: string;
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor, pos: number): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    const $mol_dev_format_head: unique symbol;
    const $mol_dev_format_body: unique symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    let $mol_dev_format_span: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor, pos?: number): void;
        [$mol_dev_format_head](): any[];
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
        [$mol_dev_format_body](): null;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async_raw(): Promise<Result>;
        async(): Promise<Result> & {
            destructor(): void;
        };
        step(): Promise<null>;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_try_web<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static commit(): void;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    function $mol_wait_user_async(this: $): Promise<unknown>;
    function $mol_wait_user(this: $): unknown;
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "current" | "hover" | "focus" | "back" | "card" | "special" | "control" | "shade" | "spirit", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "blur" | "page" | "block" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: null | Set<string>;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr?: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
        static get field(): <Host extends object, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr?: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_error_message(this: $, error: unknown): string;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean | null;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        static roots(): $mol_view[];
        static auto(): void;
        title(): string;
        hint(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly $mol_view_content[];
        sub_visible(): readonly $mol_view_content[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null | undefined;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        [$mol_dev_format_head](): any[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | `:not(${string})` | `:nth-child(${string})` | `:nth-last-child(${string})` | `:nth-of-type(${string})` | `:nth-last-of-type(${string})` | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends '@starting-style' ? $mol_style_guard<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_layer: Record<"hover" | "float" | "focus" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_book2_sub__1 = $mol_type_enforce<
		ReturnType< $mol_book2['pages'] >[number]
		,
		$mol_view
	>
	type $mol_book2_sub__2 = $mol_type_enforce<
		ReturnType< $mol_book2['placeholders'] >[number]
		,
		$mol_view
	>
	type $mol_view__title_mol_book2_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages_deep( ): readonly($mol_view)[]
		pages( ): ReturnType< $mol_book2['pages_deep'] >
		Placeholder( ): $mol_view
		placeholders( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): readonly($mol_view)[]
		minimal_width( ): number
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        pages_deep(): $mol_view[];
        title(): string;
        menu_title(): string;
        sub(): $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node_external(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_follower extends $.$mol_follower {
        pos(): {
            left: number;
            top: number;
        } | null;
        transform(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        bubble_offset(): number[];
        bubble_align(): number[];
        bubble(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: AllowSharedBufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_buffer(size: number): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_charset_encode(str: string): Uint8Array<ArrayBuffer>;
    function $mol_charset_encode_to(str: string, buf: Uint8Array<ArrayBuffer>, from?: number): number;
    function $mol_charset_encode_size(str: string): number;
}

declare namespace $ {
    type $mol_file_transaction_mode = 'create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append';
    type $mol_file_transaction_buffer = ArrayBufferView;
    class $mol_file_transaction extends $mol_object {
        path(): string;
        modes(): readonly $mol_file_transaction_mode[];
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        read(): Uint8Array<ArrayBuffer>;
        truncate(size: number): void;
        flush(): void;
        close(): void;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_file_base extends $mol_object {
        static absolute<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static relative<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static base: string;
        path(): string;
        parent(): this;
        exists_cut(): boolean;
        protected root(): boolean;
        protected stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        protected static changed: Set<$mol_file_base>;
        protected static frame: null | $mol_after_timeout;
        protected static changed_add(type: 'change' | 'rename', path: string): void;
        static watch_debounce(): number;
        static flush(): void;
        protected static watching: boolean;
        protected static lock: $mol_lock;
        protected static watch_off(path: string): void;
        static unwatched<Result>(side_effect: () => Result, affected_dir: string): Result;
        reset(): void;
        modified(): Date | null;
        version(): string;
        protected info(path: string): null | $mol_file_stat;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): void;
        protected kids(): readonly this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
        buffer(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        stat_make(size: number): {
            readonly type: "file";
            readonly size: number;
            readonly atime: Date;
            readonly mtime: Date;
            readonly ctime: Date;
        };
        clone(to: string): this | null;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        text(next?: string, virt?: 'virt'): string;
        text_int(next?: string, virt?: 'virt'): string;
        sub(reset?: null): this[];
        resolve(path: string): this;
        relate(base?: $mol_file_base): string;
        find(include?: RegExp, exclude?: RegExp): this[];
        size(): number;
        toJSON(): string;
        open(...modes: readonly $mol_file_transaction_mode[]): $mol_file_transaction;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file extends $mol_file_base {
    }
}

declare namespace $ {
    enum $mol_rest_code {
        'Continue' = 100,
        'Switching protocols' = 101,
        'Processing' = 102,
        'OK' = 200,
        'Created' = 201,
        'Accepted' = 202,
        'Non-Authoritative Information' = 203,
        'No Content' = 204,
        'Reset Content' = 205,
        'Partial Content' = 206,
        'Multi Status' = 207,
        'Already Reported' = 208,
        'IM Used' = 226,
        'Multiple Choices' = 300,
        'Moved Permanently' = 301,
        'Found' = 302,
        'See Other' = 303,
        'Not Modified' = 304,
        'Use Proxy' = 305,
        'Temporary Redirect' = 307,
        'Bad Request' = 400,
        'Unauthorized' = 401,
        'Payment Required' = 402,
        'Forbidden' = 403,
        'Not Found' = 404,
        'Method Not Allowed' = 405,
        'Not Acceptable' = 406,
        'Proxy Authentication Required' = 407,
        'Request Timeout' = 408,
        'Conflict' = 409,
        'Gone' = 410,
        'Length Required' = 411,
        'Precondition Failed' = 412,
        'Request Entity Too Large' = 413,
        'Request URI Too Long' = 414,
        'Unsupported Media Type' = 415,
        'Requested Range Not Satisfiable' = 416,
        'Expectation Failed' = 417,
        'Teapot' = 418,
        'Unprocessable Entity' = 422,
        'Locked' = 423,
        'Failed Dependency' = 424,
        'Upgrade Required' = 426,
        'Precondition Required' = 428,
        'Too Many Requests' = 429,
        'Request Header Fields Too Large' = 431,
        'Unavailable For Legal Reasons' = 451,
        'Internal Server Error' = 500,
        'Not Implemented' = 501,
        'Bad Gateway' = 502,
        'Service Unavailable' = 503,
        'Gateway Timeout' = 504,
        'HTTP Version Not Supported' = 505,
        'Insufficient Storage' = 507,
        'Loop Detected' = 508,
        'Not Extended' = 510,
        'Network Authentication Required' = 511,
        'Network Read Timeout Error' = 598,
        'Network Connect Timeout Error' = 599
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object {
        readonly native: Response;
        readonly request: $mol_fetch_request;
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        ok(): boolean;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array<ArrayBuffer>> | null;
        text(): string;
        json(): unknown;
        blob(): Blob;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch_request extends $mol_object {
        readonly native: Request;
        response_async(): Promise<Response> & {
            destructor: () => void;
        };
        response(): $mol_fetch_response;
        success(): $mol_fetch_response;
    }
    class $mol_fetch extends $mol_object {
        static request(input: RequestInfo, init?: RequestInit): $mol_fetch_request;
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array<ArrayBuffer>> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_webdav extends $mol_file_base {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        resolve(path: string): this;
        static headers(): Record<string, string>;
        headers(): Record<string, string>;
        protected fetch(init: RequestInit): $mol_fetch_response;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(body: Uint8Array<ArrayBuffer>): void;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected kids(): this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        protected info(): $mol_file_stat | null;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file_webdav {
        static base: string;
        version(): string;
        protected info(): $mol_file_stat | null;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): any;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        item_height_min(index: number): number;
        row_width_min(index: number): number;
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        minimal_width(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static separated<Chunk extends $mol_regexp_source, Sep extends $mol_regexp_source>(chunk: Chunk, sep: Sep): $mol_regexp<[$mol_regexp<[[Chunk], Sep] extends infer T ? T extends [[Chunk], Sep] ? T extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{ [key in Extract<keyof T, number>]: $mol_regexp_groups<T[key]>; }[Extract<keyof T, number>]>> : T extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<T["exec"]>>["groups"]> ? {} : NonNullable<NonNullable<ReturnType<T["exec"]>>["groups"]> : T extends {
            readonly [x: string]: $mol_regexp_source;
        } ? $mol_type_merge<$mol_type_intersect<{ [key_1 in keyof T]: $mol_type_merge<Omit<{ readonly [k in Extract<keyof T, string>]: string; }, key_1> & { readonly [k_1 in key_1]: T[key_1] extends string ? T[key_1] : string; } & $mol_regexp_groups<T[key_1]>>; }[keyof T]>> : never : never : never>, Chunk] extends infer T_1 ? T_1 extends [$mol_regexp<[[Chunk], Sep] extends infer T_2 ? T_2 extends [[Chunk], Sep] ? T_2 extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{ [key_4 in Extract<keyof T_2, number>]: $mol_regexp_groups<T_2[key_4]>; }[Extract<keyof T_2, number>]>> : T_2 extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<T_2["exec"]>>["groups"]> ? {} : NonNullable<NonNullable<ReturnType<T_2["exec"]>>["groups"]> : T_2 extends {
            readonly [x: string]: $mol_regexp_source;
        } ? $mol_type_merge<$mol_type_intersect<{ [key_5 in keyof T_2]: $mol_type_merge<Omit<{ readonly [k in Extract<keyof T_2, string>]: string; }, key_5> & { readonly [k_1 in key_5]: T_2[key_5] extends string ? T_2[key_5] : string; } & $mol_regexp_groups<T_2[key_5]>>; }[keyof T_2]>> : never : never : never>, Chunk] ? T_1 extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{ [key_2 in Extract<keyof T_1, number>]: $mol_regexp_groups<T_1[key_2]>; }[Extract<keyof T_1, number>]>> : T_1 extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<T_1["exec"]>>["groups"]> ? {} : NonNullable<NonNullable<ReturnType<T_1["exec"]>>["groups"]> : T_1 extends {
            readonly [x: string]: $mol_regexp_source;
        } ? $mol_type_merge<$mol_type_intersect<{ [key_3 in keyof T_1]: $mol_type_merge<Omit<{ readonly [k in Extract<keyof T_1, string>]: string; }, key_3> & { readonly [k_1 in key_3]: T_1[key_3] extends string ? T_1[key_3] : string; } & $mol_regexp_groups<T_1[key_3]>>; }[keyof T_1]>> : never : never : never>;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($.$mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($.$mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => readonly string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_search__query_mol_book2_catalog_1 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__needle_mol_book2_catalog_2 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_book2_catalog_3 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_link__arg_mol_book2_catalog_4 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_mol_book2_catalog_5 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_mol_book2_catalog_6 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_item_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__Empty_mol_book2_catalog_7 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_links_empty'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_list__rows_mol_book2_catalog_8 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_links'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title_mol_book2_catalog_9 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Logo_mol_book2_catalog_10 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_logo'] >
		,
		ReturnType< $mol_page['Logo'] >
	>
	type $mol_page__tools_mol_book2_catalog_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__head_mol_book2_catalog_12 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_head'] >
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body_mol_book2_catalog_13 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot_mol_book2_catalog_14 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_foot'] >
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_link__arg_mol_book2_catalog_15 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_close_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_book2_catalog_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_book2_catalog_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_book2_catalog extends $mol_book2 {
		Menu_title( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Title'] >
		menu_title( ): string
		Menu_tools( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Tools'] >
		Menu_logo( ): any
		menu_head( ): readonly($mol_view_content)[]
		menu_filter( next?: string ): string
		Menu_filter( ): $mol_search
		Menu_links_empty( ): $mol_view
		arg( id: any): Record<string, any>
		menu_link_arg( id: any): ReturnType< $mol_book2_catalog['arg'] >
		spread_title( id: any): string
		Menu_link_title( id: any): $mol_dimmer
		menu_link_content( id: any): readonly($mol_view_content)[]
		Menu_link( id: any): $mol_link
		menu_item_content( id: any): readonly($mol_view)[]
		Menu_item( id: any): $mol_view
		menu_links( ): readonly($mol_view)[]
		Menu_links( ): $mol_list
		menu_body( ): readonly($mol_view)[]
		menu_foot( ): readonly($mol_view)[]
		Menu( ): $mol_page
		spread_close_arg( ): Record<string, any>
		Spread_close_icon( ): $mol_icon_close
		param( ): string
		spread( next?: string ): string
		spreads( ): Record<string, any>
		Spread( id: any): $mol_view
		Spread_default( ): any
		spread_ids( ): readonly(string)[]
		menu_filter_enabled( ): boolean
		spread_ids_filtered( ): readonly(string)[]
		spread_current( ): any
		menu_tools( ): readonly(any)[]
		addon_tools( ): readonly(any)[]
		pages( ): readonly(any)[]
		Spread_close( ): $mol_link
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2_catalog extends $.$mol_book2_catalog {
        spread_current(): any;
        pages(): any[];
        auto(): void;
        spread_ids(): readonly string[];
        menu_body(): ($.$mol_list | $.$mol_search)[];
        menu_filter_enabled(): boolean;
        menu_links(): $mol_view[];
        spread_ids_filtered(): string[];
        Spread(id: string): $mol_view;
        Spread_default(): any;
        spread(next?: string): string;
        arg(spread: string): {
            [x: string]: string | null;
        };
        spread_close_arg(): {
            [x: string]: null;
        };
        spread_title(spread: string): string;
        spread_current_book(): $mol_book2 | null;
        placeholders(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {
    class $mol_dom_event<EventType extends Event> extends $mol_object {
        readonly native: EventType;
        constructor(native: EventType);
        prevented(next?: boolean): boolean;
        static wrap<EventType extends Event>(event: EventType): $mol_dom_event<EventType>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($.$mol_search | $mol_button_minor)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_hash_numbers(buff: ArrayLike<number>, seed?: number): number;
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_sync extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sync.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync_off extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=off.view.tree.d.ts.map
declare namespace $ {
    class $mol_wire_set<Value> extends Set<Value> {
        pub: $mol_wire_pub;
        has(value: Value): boolean;
        entries(): SetIterator<[Value, Value]>;
        keys(): SetIterator<Value>;
        values(): SetIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): SetIterator<Value>;
        get size(): number;
        add(value: Value): this;
        delete(value: Value): boolean;
        clear(): void;
        item(val: Value, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    type $mol_rest_port_mime_hi = 'text' | 'application' | 'font' | 'audio' | 'video' | 'image' | 'model';
    type $mol_rest_port_mime = `${$mol_rest_port_mime_hi}/${string}`;
    class $mol_rest_port extends $mol_object {
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_data(data: null | string | Uint8Array<ArrayBuffer> | Element | object): void;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
        send_json(data: object): void;
        send_dom(data: Element): void;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    function $mol_base64_encode(src: Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_encode_web(str: Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_decode_web(base64Str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_ae_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_buffer extends DataView<ArrayBuffer> {
        [Symbol.toStringTag]: string;
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView<ArrayBuffer> | ArrayBuffer): InstanceType<This>;
        static toString(): string;
        getUint48(offset: number, LE?: boolean): number;
        setUint48(offset: number, value: number, LE?: boolean): void;
        int8(offset: number, next?: number): number;
        uint8(offset: number, next?: number): number;
        int16(offset: number, next?: number): number;
        uint16(offset: number, next?: number): number;
        int32(offset: number, next?: number): number;
        uint32(offset: number, next?: number): number;
        int64(offset: number, next?: bigint): bigint;
        uint48(offset: number, next?: number): number;
        uint64(offset: number, next?: bigint): bigint;
        float16(offset: number, next?: number): number;
        float32(offset: number, next?: number): number;
        float64(offset: number, next?: number): number;
        asArray(): Uint8Array<ArrayBuffer>;
        toString(): string;
    }
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_url_encode_web(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode_web(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    function $mol_crypto_restack(error: any): never;
}

declare namespace $ {
    class $mol_crypto_key extends $mol_buffer {
        static from<This extends typeof $mol_crypto_key>(this: This, serial: number | string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        toString(): string;
    }
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        native(): Promise<CryptoKey>;
        native_derive(): Promise<CryptoKey>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
        toJSON(): string;
    }
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        static size_sign: number;
        static generate(): Promise<$mol_crypto_key_private>;
        native(): Promise<CryptoKey>;
        native_derive(): Promise<CryptoKey>;
        public(): $mol_crypto_key_public;
        sign(data: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        toJSON(): string;
    }
}

declare namespace $ {
    function $mol_crypto_hash(input: ArrayBufferView): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $giper_baza_link_compare(left: $giper_baza_link, right: $giper_baza_link): 1 | -1 | 0;
    class $giper_baza_link extends Object {
        readonly str: string;
        constructor(str: string);
        static hole: $giper_baza_link;
        static check(val: string): string | null;
        [$mol_key_handle](): string;
        toString(): string;
        toJSON(): string;
        [Symbol.toPrimitive](): string;
        [$mol_dev_format_head](): any[];
        toBin(): Uint8Array<ArrayBuffer>;
        static from_int(int: number): $giper_baza_link;
        static from_bin(bin: Uint8Array<ArrayBuffer>): $giper_baza_link;
        static _hash_cache: WeakMap<ArrayBufferView<ArrayBufferLike>, $giper_baza_link>;
        static hash_bin(bin: ArrayBufferView): $giper_baza_link;
        static hash_str(str: string): $giper_baza_link;
        peer(): $giper_baza_link;
        area(): $giper_baza_link;
        head(): $giper_baza_link;
        lord(): $giper_baza_link;
        land(): $giper_baza_link;
        relate(base: $giper_baza_link): $giper_baza_link;
        resolve(base: $giper_baza_link): $giper_baza_link;
        mix(mixin: Uint8Array<ArrayBuffer> | $giper_baza_link): Uint8Array<ArrayBuffer>;
    }
    function $giper_baza_link_base<Res>(base: $giper_baza_link, task: () => Res): Res;
}

declare namespace $ {
    function $mol_crypto_salt(): Uint8Array<ArrayBuffer>;
    const $mol_crypto_salt_once: Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
    export class $mol_crypto_sacred extends $mol_buffer {
        static size: 16;
        static make(): $mol_crypto_sacred;
        static from<This extends typeof $mol_buffer>(this: This, serial: string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        static from_native(native: CryptoKey): Promise<$mol_crypto_sacred>;
        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        toString(): string;
        _native: undefined | CryptoKey & {
            type: 'secret';
        };
        native(): Promise<CryptoKey & {
            type: "secret";
        }>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        close(opened: DataView<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        open(closed: Uint8Array<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
    export {};
}

declare namespace $ {
    function $mol_crypto_sacred_shared(priv: $mol_crypto_key_private, pub: $mol_crypto_key_public): Promise<$mol_crypto_sacred>;
}

declare namespace $ {
    class $giper_baza_auth_pass extends $mol_crypto_key_public {
        static like(bin: Uint8Array<ArrayBuffer>): $giper_baza_auth_pass | null;
        hash(): $giper_baza_link;
        path(): string;
        lord(): $giper_baza_link;
        peer(): $giper_baza_link;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
    }
    class $giper_baza_auth extends $mol_crypto_key_private {
        static current(next?: $giper_baza_auth | null): $giper_baza_auth;
        static embryos: string[];
        static grab(): $giper_baza_auth;
        static generate(): Promise<$giper_baza_auth>;
        pass(): $giper_baza_auth_pass;
        secret_mutual(pub: $mol_crypto_key_public): $mol_crypto_sacred;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
}

declare namespace $ {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket: WebSocket;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    enum $giper_baza_slot_kind {
        free = 0,
        land = 76,
        sand = 252,
        gift = 253,
        seal = 254,
        pass = 255
    }
}

declare namespace $ {
    class $mol_graph<Node, Edge> {
        nodes: Set<Node>;
        edges_out: Map<Node, Map<Node, Edge>>;
        edges_in: Map<Node, Map<Node, Edge>>;
        link(from: Node, to: Node, edge: Edge): void;
        unlink(from: Node, to: Node): void;
        link_out(from: Node, to: Node, edge: Edge): void;
        link_in(to: Node, from: Node, edge: Edge): void;
        edge(from: Node, to: Node): NonNullable<Edge> | null;
        edge_out(from: Node, to: Node): NonNullable<Edge> | null;
        edge_in(to: Node, from: Node): NonNullable<Edge> | null;
        acyclic(get_weight: (edge: Edge) => number): void;
        get sorted(): Set<Node>;
        get roots(): Node[];
        nodes_depth(select: (left: number, right: number) => number): Map<Node, number>;
        depth_nodes(select: (left: number, right: number) => number): Node[][];
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | readonly [number, number, number, number, number, number] | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        toArray(): readonly [number, number, number, number, number, number];
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | readonly (number | undefined)[] | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        toArray(): readonly [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        [$mol_dev_format_head](): any[];
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_data_tagged_type<Value, Tag extends PropertyKey> = Value & {
        [Key in Tag]: Value;
    };
    type $mol_data_tagged_parser<Input, Output> = {
        Value: Output;
    } & ((val: $mol_data_tagged_type<Input, never>) => Output);
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: readonly Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {
    const $giper_baza_rank: {
        Value: number & {
            $giper_baza_rank: number;
        };
    } & ((val: number & {}) => number & {
        $giper_baza_rank: number;
    });
    function $giper_baza_rank_make(tier: keyof typeof $giper_baza_rank_tier, fame: keyof typeof $giper_baza_rank_rate): typeof $giper_baza_rank.Value;
    enum $giper_baza_rank_tier {
        deny = 0,
        read = 16,
        post = 48,
        pull = 112,
        rule = 240
    }
    function $giper_baza_rank_tier_of(rank: typeof $giper_baza_rank.Value): $giper_baza_rank_tier;
    const $giper_baza_rank_work_rates: readonly [15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    enum $giper_baza_rank_rate {
        late = 0,
        long = 12,
        slow = 13,
        fast = 14,
        just = 15
    }
    function $giper_baza_rank_rate_of(rank: typeof $giper_baza_rank.Value): $giper_baza_rank_rate;
    const $giper_baza_rank_deny: number & {
        $giper_baza_rank: number;
    };
    const $giper_baza_rank_read: number & {
        $giper_baza_rank: number;
    };
    const $giper_baza_rank_rule: number & {
        $giper_baza_rank: number;
    };
    function $giper_baza_rank_pull(rate: keyof typeof $giper_baza_rank_rate): number & {
        $giper_baza_rank: number;
    };
    function $giper_baza_rank_post(rate: keyof typeof $giper_baza_rank_rate): number & {
        $giper_baza_rank: number;
    };
    type $giper_baza_rank_preset = [$giper_baza_auth_pass | null, typeof $giper_baza_rank.Value][];
}

declare namespace $ {
    function $giper_baza_time_moment(time: number): $mol_time_moment;
    function $giper_baza_time_dump(time: number, tick?: number): string;
    function $giper_baza_time_now(): number;
    function $giper_baza_time_freeze(task: () => void): void;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    type $giper_baza_face_data = Iterable<readonly [peer: string, face: $giper_baza_face]>;
    class $giper_baza_face extends Object {
        time: number;
        tick: number;
        summ: number;
        static length(): 16;
        constructor(time?: number, tick?: number, summ?: number);
        clone(): $giper_baza_face;
        get moment(): $mol_time_moment;
        get time_tick(): number;
        sync_time(time: number, tick: number): void;
        sync_summ(summ: number): void;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
    }
    class $giper_baza_face_map extends Map<string, $giper_baza_face> {
        stat: $giper_baza_face;
        constructor(entries?: $giper_baza_face_data);
        clone(): $giper_baza_face_map;
        sync(right: $giper_baza_face_data): void;
        peer_time(peer: string, time: number, tick: number): void;
        peer_summ(peer: string, summ: number): void;
        peer_summ_shift(peer: string, diff: number): void;
        tick(): $giper_baza_face;
        toJSON(): {
            [k: string]: $giper_baza_face;
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $mol_wire_dict<Key, Value> extends Map<Key, Value> {
        pub: $mol_wire_pub;
        has(key: Key): boolean;
        get(key: Key): Value | undefined;
        entries(): MapIterator<[Key, Value]>;
        keys(): MapIterator<Key>;
        values(): MapIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): MapIterator<[Key, Value]>;
        get size(): number;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        clear(): void;
        item(key: Key, next?: Value | null): NonNullable<Value> | null;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        update(value: readonly $mol_tree2[], ...path: $mol_tree2_path): readonly $mol_tree2[];
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    function $mol_bigint_encode(num: bigint): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_charset_ucf_encode(str: string): Uint8Array<ArrayBuffer>;
    function $mol_charset_ucf_encode_to(str: string, buf: Uint8Array<ArrayBuffer>, from?: number): number;
    function $mol_charset_ucf_decode(buffer: Uint8Array<ArrayBuffer>, mode?: number): string;
}

declare namespace $ {
    function $mol_bigint_decode(buf: Uint8Array<ArrayBuffer>): bigint;
}

declare namespace $ {
    enum $mol_vary_tip {
        uint = 0,
        link = 32,
        spec = 64,
        list = 96,
        blob = 128,
        text = 160,
        tupl = 192,
        sint = 224
    }
    enum $mol_vary_len {
        L1 = 28,
        L2 = 29,
        L4 = 30,
        L8 = 31,
        LA = 32
    }
    enum $mol_vary_spec {
        none,
        true,
        fake,
        both,
        fp16,
        fp32,
        fp64,
        f128,
        f256
    }
    class $mol_vary_class extends Object {
        lean_symbol: symbol;
        array: Uint8Array<ArrayBuffer>;
        buffer: DataView<ArrayBuffer>;
        pack(data: readonly unknown[]): Uint8Array<ArrayBuffer>;
        take(array: Uint8Array<ArrayBuffer>): unknown;
        rich_index: Map<string | null, any>;
        zone(): $mol_vary_class;
        rich_node(keys: readonly string[]): Map<string | null, any>;
        lean_find(val: any): any;
        type<const Instance extends object, const Keys extends readonly any[], const Vals extends readonly any[]>({ type, keys, rich, lean }: {
            type: new (...vals: any[]) => Instance;
            keys: Keys;
            lean: (obj: Instance) => Vals;
            rich: (vals: Vals) => Instance;
        }): void;
    }
    let $mol_vary: $mol_vary_class;
}

declare namespace $ {
    type $giper_baza_vary_type = null | boolean | number | bigint | string | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | Float64Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | $giper_baza_link | Element | readonly $giper_baza_vary_type[] | {
        [key in string]: $giper_baza_vary_type;
    };
    let $giper_baza_vary: $mol_vary_class;
    function $giper_baza_vary_switch<Ways extends {
        none: (vary: null) => any;
        blob: (vary: ArrayBufferView<ArrayBuffer>) => any;
        bool: (vary: boolean) => any;
        bint: (vary: bigint) => any;
        real: (vary: number) => any;
        link: (vary: $giper_baza_link) => any;
        text: (vary: string) => any;
        time: (vary: $mol_time_moment) => any;
        dura: (vary: $mol_time_duration) => any;
        span: (vary: $mol_time_interval) => any;
        dict: (vary: {}) => any;
        list: (vary: any[]) => any;
        elem: (vary: Element) => any;
        tree: (vary: $mol_tree2) => any;
    }>(vary: $giper_baza_vary_type, ways: Ways): $mol_type_result<Ways[keyof Ways]>;
}

declare namespace $ {
    function $mol_tree2_bin_to_bytes(tree: $mol_tree2): Uint8Array<ArrayBuffer>;
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span?: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_array_chunks<Item>(array: readonly Item[], rule: number | ((item: Item, index: number) => boolean)): Item[][];
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_from_dom(dom: Node): $mol_tree2;
}

declare namespace $ {
    function $giper_baza_vary_cast_blob(vary: $giper_baza_vary_type): ArrayLike<number | bigint> | null;
    function $giper_baza_vary_cast_bool(vary: $giper_baza_vary_type): boolean | null;
    function $giper_baza_vary_cast_bint(vary: $giper_baza_vary_type): bigint | null;
    function $giper_baza_vary_cast_real(vary: $giper_baza_vary_type): number | null;
    function $giper_baza_vary_cast_link(vary: $giper_baza_vary_type): $giper_baza_link | null;
    function $giper_baza_vary_cast_text(vary: $giper_baza_vary_type): string | null;
    function $giper_baza_vary_cast_time(vary: $giper_baza_vary_type): $mol_time_moment | null;
    function $giper_baza_vary_cast_dura(vary: $giper_baza_vary_type): $mol_time_duration | null;
    function $giper_baza_vary_cast_span(vary: $giper_baza_vary_type): $mol_time_interval | null;
    function $giper_baza_vary_cast_dict(vary: $giper_baza_vary_type): {} | null;
    function $giper_baza_vary_cast_list(vary: $giper_baza_vary_type): any[] | null;
    function $giper_baza_vary_cast_elem(vary: $giper_baza_vary_type): Element | null;
    function $giper_baza_vary_cast_tree(vary: $giper_baza_vary_type): $mol_tree2 | null;
    const $giper_baza_vary_cast_funcs: {
        readonly none: () => null;
        readonly blob: typeof $giper_baza_vary_cast_blob;
        readonly bool: typeof $giper_baza_vary_cast_bool;
        readonly bint: typeof $giper_baza_vary_cast_bint;
        readonly real: typeof $giper_baza_vary_cast_real;
        readonly link: typeof $giper_baza_vary_cast_link;
        readonly text: typeof $giper_baza_vary_cast_text;
        readonly time: typeof $giper_baza_vary_cast_time;
        readonly dura: typeof $giper_baza_vary_cast_dura;
        readonly span: typeof $giper_baza_vary_cast_span;
        readonly dict: typeof $giper_baza_vary_cast_dict;
        readonly list: typeof $giper_baza_vary_cast_list;
        readonly elem: typeof $giper_baza_vary_cast_elem;
        readonly tree: typeof $giper_baza_vary_cast_tree;
    };
}

declare namespace $ {
    class $giper_baza_pawn extends $mol_object {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        static meta: null | $giper_baza_link;
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): InstanceType<Pawn>;
        pawns<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn | null): readonly InstanceType<Pawn>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $giper_baza_fund<Pawn> extends $mol_object {
        readonly item_make: (head: $giper_baza_link) => Pawn;
        constructor(item_make: (head: $giper_baza_link) => Pawn);
        Head(head: $giper_baza_link): Pawn;
        Data(): Pawn;
        Tine(): Pawn;
    }
}

declare namespace $ {
    function $giper_baza_log(this: $): boolean;
}

declare namespace $ {
    class $mol_bus<Data> extends $mol_object {
        readonly name: string;
        readonly handle: (data: Data) => void;
        readonly channel: BroadcastChannel;
        constructor(name: string, handle: (data: Data) => void);
        destructor(): void;
        send(data: Data): void;
    }
}

declare namespace $ {
    const $giper_baza_land_root: {
        data: $giper_baza_link;
        tine: $giper_baza_link;
    };
    class $giper_baza_land extends $mol_object {
        link(): $giper_baza_link;
        auth(): $giper_baza_auth;
        faces: $giper_baza_face_map;
        _pass: $mol_wire_dict<string, $giper_baza_auth_pass>;
        _seal_item: $mol_wire_dict<string, $giper_baza_unit_seal>;
        _seal_shot: $mol_wire_dict<string, $giper_baza_unit_seal>;
        _gift: $mol_wire_dict<string, $giper_baza_unit_gift>;
        _sand: $mol_wire_dict<string, $mol_wire_dict<string, $mol_wire_dict<string, $giper_baza_unit_sand>>>;
        pass_add(pass: $giper_baza_auth_pass): void;
        seal_add(seal: $giper_baza_unit_seal): void;
        gift_add(gift: $giper_baza_unit_gift): void;
        sand_add(sand: $giper_baza_unit_sand): void;
        units_reaping: Set<$giper_baza_unit_base>;
        unit_seal_inc(unit: $giper_baza_unit): void;
        unit_seal_dec(unit: $giper_baza_unit): void;
        seal_del(seal: $giper_baza_unit_seal): void;
        gift_del(gift: $giper_baza_unit_gift): void;
        sand_del(sand: $giper_baza_unit_sand): void;
        lord_pass(lord: $giper_baza_link): $giper_baza_auth_pass | null;
        unit_seal(unit: $giper_baza_unit): $giper_baza_unit_seal | null;
        sand_get(head: $giper_baza_link, lord: $giper_baza_link, self: $giper_baza_link): $giper_baza_unit_sand | null;
        _self_all: $mol_wire_dict<string, $giper_baza_unit_sand | null>;
        self_make(idea?: number): $giper_baza_link;
        area_make(idea?: number): $giper_baza_land;
        sync_rights(): $mol_wire_atom<unknown, [], void> | undefined;
        inherit(): void;
        Data<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): InstanceType<Pawn>;
        Tine(): $giper_baza_list_link;
        Pawn<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): $giper_baza_fund<InstanceType<Pawn>>;
        total(): number;
        king_pass(): $giper_baza_auth_pass;
        pass_rank(pass: $giper_baza_auth_pass | null, next?: typeof $giper_baza_rank.Value): typeof $giper_baza_rank.Value;
        lord_tier(lord: $giper_baza_link): $giper_baza_rank_tier;
        lord_rate(lord: $giper_baza_link): $giper_baza_rank_rate;
        lord_rank(lord: $giper_baza_link | null, next?: typeof $giper_baza_rank.Value): number & {
            $giper_baza_rank: number;
        };
        diff_units(skip_faces?: $giper_baza_face_map): $giper_baza_unit[];
        diff_parts(skip_faces?: $giper_baza_face_map): $giper_baza_pack_parts;
        face_pack(): $giper_baza_pack;
        diff_apply(units: readonly $giper_baza_unit[], skip_load?: 'skip_load'): readonly $giper_baza_unit[] | undefined;
        units_steal(donor: $giper_baza_land): void;
        rank_audit(): void;
        fork(preset?: $giper_baza_rank_preset): $giper_baza_land;
        sand_ordered({ head, peer }: {
            head: $giper_baza_link;
            peer: $giper_baza_link | null;
        }): $giper_baza_unit_sand[];
        join(): void;
        give(mate_pass: $giper_baza_auth_pass | null, rank: typeof $giper_baza_rank.Value): $giper_baza_unit_gift;
        post(lead: $giper_baza_link, head: $giper_baza_link, self: $giper_baza_link | null, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): $giper_baza_unit_sand;
        sand_move(sand: $giper_baza_unit_sand, head: $giper_baza_link, seat: number, peer?: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        sand_wipe(sand: $giper_baza_unit_sand, peer?: $giper_baza_link | null): $giper_baza_unit_sand;
        broadcast(): void;
        sync(): this;
        destructor(): void;
        mine(): $giper_baza_mine_temp;
        sync_mine(): $mol_wire_atom<unknown, [], void> | undefined;
        sync_yard(): $mol_wire_atom<unknown, [], void>;
        bus(): $mol_bus<ArrayBuffer>;
        loading(): void;
        sand_encoding(): void;
        units_unsigned(): $giper_baza_unit_base[];
        units_signing(): void;
        units_unsaved(): $giper_baza_unit[];
        units_saving(): void;
        units_save(units: readonly $giper_baza_unit[]): Promise<void>;
        units_sign(units: readonly $giper_baza_unit_base[]): Promise<$giper_baza_unit_seal[]>;
        sand_encode(sand: $giper_baza_unit_sand): Promise<$giper_baza_unit_sand>;
        sand_load(sand: $giper_baza_unit_sand): void;
        sand_decode(sand: $giper_baza_unit_sand): $giper_baza_vary_type;
        sand_decrypt(sand: $giper_baza_unit_sand): Uint8Array<ArrayBuffer>;
        encryptable(): boolean;
        encrypted(next?: boolean): boolean;
        secret(): $mol_crypto_sacred | null;
        dump(): {
            land: $giper_baza_link;
            units: $giper_baza_unit_base[];
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    enum $giper_baza_unit_kind {
        sand = 252,
        gift = 253,
        seal = 254,
        pass = 255
    }
    let $giper_baza_unit_trusted: WeakSet<$giper_baza_unit_base>;
    function $giper_baza_unit_trusted_grant(unit: $giper_baza_unit): void;
    function $giper_baza_unit_trusted_check(unit: $giper_baza_unit): boolean;
    type $giper_baza_unit = $giper_baza_unit_base | $giper_baza_auth_pass;
    function $giper_baza_unit_sort(units: readonly $giper_baza_unit[]): $giper_baza_unit[];
    class $giper_baza_unit_base extends $mol_buffer {
        static compare(left: $giper_baza_unit_base | undefined, right: $giper_baza_unit_base | undefined): number;
        static narrow(buf: ArrayBuffer): $giper_baza_auth_pass | $giper_baza_unit_sand | $giper_baza_unit_gift | $giper_baza_unit_seal;
        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        kind(next?: keyof typeof $giper_baza_unit_kind): Exclude<keyof typeof $giper_baza_unit_kind, 'pass'>;
        choose<Res>(ways: {
            gift: (unit: $giper_baza_unit_gift) => Res;
            sand: (unit: $giper_baza_unit_sand) => Res;
            seal: (unit: $giper_baza_unit_seal) => Res;
        }): Res;
        path(): string;
        id6(offset: number, next?: $giper_baza_link): $giper_baza_link;
        id12(offset: number, next?: $giper_baza_link): $giper_baza_link;
        time(next?: number): number;
        moment(): $mol_time_moment;
        tick(next?: number): number;
        time_tick(next?: number): number;
        _lord: $giper_baza_link | null;
        lord(next?: $giper_baza_link): $giper_baza_link;
        salt(): Uint8Array<ArrayBuffer>;
        hash(): $giper_baza_link;
        tier_min(): $giper_baza_rank_tier;
        _land: null | $giper_baza_land;
        dump(): {};
        inspect(): string;
        toJSON(): string;
        toString(): string;
    }
}

declare namespace $ {
    type Block = {
        from: number;
        size: number;
        next: Block;
    };
    export class $mol_memory_pool extends Object {
        _free: Block;
        constructor(size?: number);
        acquire(size: number): number;
        release(from: number, size: number): void;
        acquired(): void;
    }
    export {};
}

declare namespace $ {
    let $giper_baza_unit_seal_limit: number;
    class $giper_baza_unit_seal extends $giper_baza_unit_base {
        static length(size: number): number;
        static make(size: number, wide: boolean): $giper_baza_unit_seal;
        meta(next?: {
            size: number;
            wide: boolean;
        }): number;
        size(): number;
        wide(): boolean;
        alive_items: Set<string>;
        alive_full(): boolean;
        alive_list(): $giper_baza_link[];
        hash_item(index: number, next?: $giper_baza_link): $giper_baza_link;
        _hash_list: readonly $giper_baza_link[];
        hash_list(next?: $giper_baza_link[]): $giper_baza_link[];
        _shot: $giper_baza_link;
        shot(): $giper_baza_link;
        sign(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        work(): number;
        rate_min(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
        tier_min(): $giper_baza_rank_tier;
        rank_min(): number;
        path(): string;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    enum $giper_baza_unit_sand_tag {
        term = 0,
        solo = 64,
        vals = 128,
        keys = 192
    }
    class $giper_baza_unit_sand extends $giper_baza_unit_base {
        static size_equator: number;
        static size_max: number;
        _vary: undefined | $giper_baza_vary_type;
        _open: Uint8Array<ArrayBuffer> | null;
        static length(size: number): number;
        static length_ball(size: number): number;
        static make(size: number, tag?: keyof typeof $giper_baza_unit_sand_tag): $giper_baza_unit_sand;
        tag(): keyof typeof $giper_baza_unit_sand_tag;
        big(): boolean;
        size(): number;
        dead(): boolean;
        _self: $giper_baza_link;
        self(next?: $giper_baza_link): $giper_baza_link;
        _head: $giper_baza_link;
        head(next?: $giper_baza_link): $giper_baza_link;
        _lead: $giper_baza_link;
        lead(next?: $giper_baza_link): $giper_baza_link;
        path(): string;
        _shot: $giper_baza_link;
        shot(next?: $giper_baza_link): $giper_baza_link;
        _data: Uint8Array<ArrayBuffer>;
        data(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        _ball: Uint8Array<ArrayBuffer>;
        ball(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        idea_seed(): number;
        dump(): {
            kind: "sand" | "gift" | "seal";
            lord: $giper_baza_link;
            lead: $giper_baza_link;
            head: $giper_baza_link;
            self: $giper_baza_link;
            tag: "keys" | "term" | "solo" | "vals";
            size: number;
            time: string;
        };
        tier_min(): $giper_baza_rank_tier.post | $giper_baza_rank_tier.pull;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    function $giper_baza_unit_gift_sort(gifts: $giper_baza_unit_gift[]): $giper_baza_unit_gift[];
    class $giper_baza_unit_gift extends $giper_baza_unit_base {
        static length(): number;
        static make(): $giper_baza_unit_gift;
        rank(next?: typeof $giper_baza_rank.Value): number & {
            $giper_baza_rank: number;
        };
        tier(): $giper_baza_rank_tier;
        rate(): $giper_baza_rank_rate;
        mate(next?: $giper_baza_link): $giper_baza_link;
        path(): string;
        _code: Uint8Array<ArrayBuffer>;
        code(): Uint8Array<ArrayBuffer>;
        code_exists(): boolean;
        dump(): {
            kind: "sand" | "gift" | "seal";
            lord: $giper_baza_link;
            mate: $giper_baza_link;
            tier: string;
            rate: $giper_baza_rank_rate;
            time: string;
        };
        tier_min(): $giper_baza_rank_tier;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, replace, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
        replace?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    export class $giper_baza_list_vary extends $giper_baza_pawn {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn>;
        [$mol_dev_format_head](): any[];
    }
    export function $giper_baza_list<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        items(next?: readonly ReturnType<Parse>[]): readonly ReturnType<Parse>[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    const $giper_baza_list_bin_base: (abstract new () => {
        items(next?: readonly (ArrayLike<number | bigint> | null)[] | undefined): readonly (ArrayLike<number | bigint> | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_blob;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_bin extends $giper_baza_list_bin_base {
    }
    const $giper_baza_list_bool_base: (abstract new () => {
        items(next?: readonly (boolean | null)[] | undefined): readonly (boolean | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_bool extends $giper_baza_list_bool_base {
    }
    const $giper_baza_list_int_base: (abstract new () => {
        items(next?: readonly (bigint | null)[] | undefined): readonly (bigint | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bint;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_int extends $giper_baza_list_int_base {
    }
    const $giper_baza_list_real_base: (abstract new () => {
        items(next?: readonly (number | null)[] | undefined): readonly (number | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_real;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_real extends $giper_baza_list_real_base {
    }
    const $giper_baza_list_link_base_1: (abstract new () => {
        items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_link;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_link extends $giper_baza_list_link_base_1 {
    }
    const $giper_baza_list_str_base: (abstract new () => {
        items(next?: readonly (string | null)[] | undefined): readonly (string | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_text;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_str extends $giper_baza_list_str_base {
    }
    const $giper_baza_list_time_base: (abstract new () => {
        items(next?: readonly ($mol_time_moment | null)[] | undefined): readonly ($mol_time_moment | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_time;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_time extends $giper_baza_list_time_base {
    }
    const $giper_baza_list_dur_base: (abstract new () => {
        items(next?: readonly ($mol_time_duration | null)[] | undefined): readonly ($mol_time_duration | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dura;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_dur extends $giper_baza_list_dur_base {
    }
    const $giper_baza_list_range_base: (abstract new () => {
        items(next?: readonly ($mol_time_interval | null)[] | undefined): readonly ($mol_time_interval | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_span;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_range extends $giper_baza_list_range_base {
    }
    const $giper_baza_list_json_base: (abstract new () => {
        items(next?: readonly ({} | null)[] | undefined): readonly ({} | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dict;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_json extends $giper_baza_list_json_base {
    }
    const $giper_baza_list_jsan_base: (abstract new () => {
        items(next?: readonly (any[] | null)[] | undefined): readonly (any[] | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_list;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_jsan extends $giper_baza_list_jsan_base {
    }
    const $giper_baza_list_dom_base: (abstract new () => {
        items(next?: readonly (Element | null)[] | undefined): readonly (Element | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_elem;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_dom extends $giper_baza_list_dom_base {
    }
    const $giper_baza_list_tree_base: (abstract new () => {
        items(next?: readonly ($mol_tree2 | null)[] | undefined): readonly ($mol_tree2 | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_tree extends $giper_baza_list_tree_base {
    }
    export class $giper_baza_list_link_base extends $giper_baza_list_link {
    }
    export function $giper_baza_list_link_to<const Value extends any, Vals extends readonly any[] = readonly $mol_type_result<$mol_type_result<Value>>[]>(Value: Value): {
        new (): {
            remote_list(next?: Vals): Vals;
            remote_add(item: Vals[number]): void;
            make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): Vals[number];
            items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            cut(vary: $giper_baza_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        Value: Value;
        toString(): any;
        parse: typeof $giper_baza_vary_cast_link;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export {};
}

declare namespace $ {
    type $giper_baza_mine_diff = {
        ins: readonly $giper_baza_unit[];
        del: readonly $giper_baza_unit[];
    };
    class $giper_baza_mine_temp extends $mol_object {
        static land(land: $giper_baza_link): $giper_baza_mine_temp;
        land(): $giper_baza_link;
        unit_deletes: number;
        unit_inserts: number;
        ball_inserts: number;
        ball_deletes: number;
        units_persisted: WeakSet<$giper_baza_unit>;
        units_save(diff: $giper_baza_mine_diff): void;
        units_load(): readonly $giper_baza_unit[];
        ball_load(sand: $giper_baza_unit_sand): Uint8Array<ArrayBuffer>;
    }
    let $giper_baza_mine: typeof $giper_baza_mine_temp;
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[] | null;
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema["Doc"];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<T[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $giper_baza_mine_idb extends $giper_baza_mine_temp {
        units_save(diff: $giper_baza_mine_diff): void;
        units_load(): readonly $giper_baza_unit[];
        ball_load(sand: $giper_baza_unit_sand): Uint8Array<ArrayBuffer>;
        static db(): Promise<$mol_db_database<{
            Unit: {
                Key: [land: string, path: string];
                Doc: [ArrayBuffer];
                Indexes: {};
            };
            Ball: {
                Key: [land: string, path: string];
                Doc: [ArrayBuffer];
                Indexes: {};
            };
        }>>;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        keys(): readonly $giper_baza_vary_type[];
        dive<Pawn extends typeof $giper_baza_pawn>(key: $giper_baza_vary_type, Pawn: Pawn, auto?: any): InstanceType<Pawn> | null;
        static schema: Record<string, typeof $giper_baza_pawn>;
        static with<This extends typeof $giper_baza_dict, const Schema extends Record<string, {
            tag: keyof typeof $giper_baza_unit_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema, path?: string): Omit<This, "prototype"> & {
            new (...args: any[]): $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>;
            path: string;
        } & {
            schema: {
                [x: string]: typeof $giper_baza_pawn;
            } & Schema;
        };
        [$mol_dev_format_head](): any[];
    }
    function $giper_baza_dict_to<Value extends {
        tag: keyof typeof $giper_baza_unit_sand_tag;
        new (): {};
    }>(Value: Value): {
        new (): {
            Value: Value;
            key(key: $giper_baza_vary_type, auto?: any): InstanceType<Value>;
            keys(): readonly $giper_baza_vary_type[];
            dive<Pawn_1 extends typeof $giper_baza_pawn>(key: $giper_baza_vary_type, Pawn: Pawn_1, auto?: any): InstanceType<Pawn_1> | null;
            [$mol_dev_format_head](): any[];
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            cut(vary: $giper_baza_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        schema: Record<string, typeof $giper_baza_pawn>;
        with<This extends typeof $giper_baza_dict, const Schema extends Record<string, {
            tag: keyof typeof $giper_baza_unit_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema, path?: string): Omit<This, "prototype"> & {
            new (...args: any[]): $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>;
            path: string;
        } & {
            schema: {
                [x: string]: typeof $giper_baza_pawn;
            } & Schema;
        };
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
}

declare namespace $ {
    const $giper_baza_pack_four_code: Uint8Array<ArrayBuffer>;
    const $giper_baza_pack_head_size: number;
    type $giper_baza_pack_parts = [string, $giper_baza_pack_part][];
    class $giper_baza_pack_part extends $mol_object {
        units: readonly $giper_baza_unit[];
        faces: $giper_baza_face_map;
        constructor(units?: readonly $giper_baza_unit[], faces?: $giper_baza_face_map);
        static from(units: $giper_baza_unit[], faces?: $giper_baza_face_map): $giper_baza_pack_part;
        [Symbol.iterator](): Generator<never, {
            units: readonly $giper_baza_unit[];
            faces: $giper_baza_face_map;
        }, unknown>;
    }
    class $giper_baza_pack extends $mol_buffer {
        toBlob(): Blob;
        parts(offsets?: WeakMap<ArrayBuffer, number>, pool?: $mol_memory_pool): [string, $giper_baza_pack_part][];
        static length(parts: $giper_baza_pack_parts): number;
        static make(parts: $giper_baza_pack_parts): $giper_baza_pack;
    }
}

declare namespace $ {
    class $giper_baza_yard extends $mol_object {
        glob(): $giper_baza_glob;
        lands_news: $mol_wire_set<string>;
        static masters_default: string[];
        static masters(): string[];
        master_cursor(next?: number): number;
        master_current(): string;
        master_next(): void;
        reconnects(reset?: null): number;
        master(): $mol_rest_port | null;
        slaves: $mol_wire_set<$mol_rest_port>;
        sync(): void;
        sync_news(): void;
        sync_port(): void;
        sync_port_lands(port: $mol_rest_port): void;
        ports(): $mol_rest_port[];
        masters(): $mol_rest_port[];
        port_lands_active(port: $mol_rest_port): $mol_wire_set<string>;
        port_lands_passive(port: $mol_rest_port): Set<string>;
        port_income(port: $mol_rest_port, msg: Uint8Array<ArrayBuffer>): void;
        face_port_sync(port: $mol_rest_port, income: $giper_baza_pack_parts): void;
        sync_land(land: $giper_baza_link): void;
        forget_land(land: $giper_baza_land): void;
        sync_port_land([port, land]: [$mol_rest_port, $giper_baza_link]): void;
        init_port_land([port, land]: [$mol_rest_port, $giper_baza_link]): void;
        face_port_land([port, land]: [$mol_rest_port, $giper_baza_link], next?: null | $giper_baza_face_map): $giper_baza_face_map | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    export class $giper_baza_atom_vary extends $giper_baza_pawn {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
    }
    export class $giper_baza_atom_enum_base extends $giper_baza_atom_vary {
        static options: readonly $giper_baza_vary_type[];
    }
    export function $giper_baza_atom_enum<const Options extends readonly $giper_baza_vary_type[]>(options: Options): (abstract new () => {
        val(next?: Options[number]): Options[number] | null;
        val_of(peer: $giper_baza_link | null, next?: Options[number]): Options[number] | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        options: Options;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export function $giper_baza_atom<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        val(next?: ReturnType<Parse>): ReturnType<Parse> | null;
        val_of(peer: $giper_baza_link | null, next?: ReturnType<Parse>): ReturnType<Parse> | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    const $giper_baza_atom_blob_base: (abstract new () => {
        val(next?: ArrayLike<number | bigint> | null | undefined): ArrayLike<number | bigint> | null;
        val_of(peer: $giper_baza_link | null, next?: ArrayLike<number | bigint> | null | undefined): ArrayLike<number | bigint> | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_blob;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_blob extends $giper_baza_atom_blob_base {
    }
    const $giper_baza_atom_bool_base: (abstract new () => {
        val(next?: boolean | null | undefined): boolean | null;
        val_of(peer: $giper_baza_link | null, next?: boolean | null | undefined): boolean | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_bool extends $giper_baza_atom_bool_base {
    }
    const $giper_baza_atom_bint_base: (abstract new () => {
        val(next?: bigint | null | undefined): bigint | null;
        val_of(peer: $giper_baza_link | null, next?: bigint | null | undefined): bigint | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bint;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_bint extends $giper_baza_atom_bint_base {
    }
    const $giper_baza_atom_real_base: (abstract new () => {
        val(next?: number | null | undefined): number | null;
        val_of(peer: $giper_baza_link | null, next?: number | null | undefined): number | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_real;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_real extends $giper_baza_atom_real_base {
    }
    const $giper_baza_atom_link_base_1: (abstract new () => {
        val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
        val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_link;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_link extends $giper_baza_atom_link_base_1 {
    }
    const $giper_baza_atom_text_base: (abstract new () => {
        val(next?: string | null | undefined): string | null;
        val_of(peer: $giper_baza_link | null, next?: string | null | undefined): string | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_text;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_text extends $giper_baza_atom_text_base {
        selection(lord: $giper_baza_link, next?: readonly [begin: number, end: number]): number[] | readonly [begin: number, end: number];
    }
    const $giper_baza_atom_time_base: (abstract new () => {
        val(next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_time;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_time extends $giper_baza_atom_time_base {
    }
    const $giper_baza_atom_dura_base: (abstract new () => {
        val(next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dura;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_dura extends $giper_baza_atom_dura_base {
    }
    const $giper_baza_atom_span_base: (abstract new () => {
        val(next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_span;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_span extends $giper_baza_atom_span_base {
    }
    const $giper_baza_atom_dict_base: (abstract new () => {
        val(next?: {} | null | undefined): {} | null;
        val_of(peer: $giper_baza_link | null, next?: {} | null | undefined): {} | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dict;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_dict extends $giper_baza_atom_dict_base {
    }
    const $giper_baza_atom_list_base: (abstract new () => {
        val(next?: any[] | null | undefined): any[] | null;
        val_of(peer: $giper_baza_link | null, next?: any[] | null | undefined): any[] | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_list;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_list extends $giper_baza_atom_list_base {
    }
    const $giper_baza_atom_elem_base: (abstract new () => {
        val(next?: Element | null | undefined): Element | null;
        val_of(peer: $giper_baza_link | null, next?: Element | null | undefined): Element | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_elem;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_elem extends $giper_baza_atom_elem_base {
    }
    const $giper_baza_atom_tree_base: (abstract new () => {
        val(next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_tree extends $giper_baza_atom_tree_base {
    }
    export class $giper_baza_atom_link_base extends $giper_baza_atom_link {
        static Value: typeof $giper_baza_dict;
    }
    export function $giper_baza_atom_link_to<const Value extends any>(Value: Value): {
        new (): {
            Value: Value;
            remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            remote_of(peer: $giper_baza_link | null, next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_here(peer: $giper_baza_link | null): void;
            ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
            ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
            remote_ensure(preset?: $giper_baza_rank_preset): $mol_type_result<$mol_type_result<Value>> | null;
            local_ensure(): $mol_type_result<$mol_type_result<Value>> | null;
            val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
            vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
            vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        toString(): any;
        Value: typeof $giper_baza_dict;
        parse: typeof $giper_baza_vary_cast_link;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export {};
}

declare namespace $ {
    class $giper_baza_stat_series extends $giper_baza_atom_list {
        tick(key: number, val: number, count: number): void;
        _initial: number;
        initial(): number;
        max(): number;
        values(next?: number[]): number[];
    }
}

declare namespace $ {
    const $giper_baza_stat_ranges_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Seconds: (auto?: any) => $giper_baza_stat_series | null;
            readonly Minutes: (auto?: any) => $giper_baza_stat_series | null;
            readonly Hours: (auto?: any) => $giper_baza_stat_series | null;
            readonly Days: (auto?: any) => $giper_baza_stat_series | null;
            readonly Months: (auto?: any) => $giper_baza_stat_series | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Seconds: typeof $giper_baza_stat_series;
            readonly Minutes: typeof $giper_baza_stat_series;
            readonly Hours: typeof $giper_baza_stat_series;
            readonly Days: typeof $giper_baza_stat_series;
            readonly Months: typeof $giper_baza_stat_series;
        };
    };
    export class $giper_baza_stat_ranges extends $giper_baza_stat_ranges_base {
        _last_instant: number;
        tick_instant(val: number): void;
        tick_integral(val: number): void;
        series(): number[];
    }
    export {};
}

declare namespace $ {
    type $mol_report_handler_type = (event: Event | string, url?: string, line?: number, col?: number, error?: Error) => void;
    const $mol_report_handler_all: Set<$mol_report_handler_type>;
}

declare var $node: any;

declare namespace $ {
    const $giper_baza_app_stat_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Uptime: (auto?: any) => $giper_baza_atom_dura | null;
            readonly Cpu_user: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Cpu_system: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Mem_used: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Mem_free: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Fs_free: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Fs_reads: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Fs_writes: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Port_slaves: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Port_masters: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Land_active: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Errors: (auto?: any) => $giper_baza_stat_ranges | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Uptime: typeof $giper_baza_atom_dura;
            readonly Cpu_user: typeof $giper_baza_stat_ranges;
            readonly Cpu_system: typeof $giper_baza_stat_ranges;
            readonly Mem_used: typeof $giper_baza_stat_ranges;
            readonly Mem_free: typeof $giper_baza_stat_ranges;
            readonly Fs_free: typeof $giper_baza_stat_ranges;
            readonly Fs_reads: typeof $giper_baza_stat_ranges;
            readonly Fs_writes: typeof $giper_baza_stat_ranges;
            readonly Port_slaves: typeof $giper_baza_stat_ranges;
            readonly Port_masters: typeof $giper_baza_stat_ranges;
            readonly Land_active: typeof $giper_baza_stat_ranges;
            readonly Errors: typeof $giper_baza_stat_ranges;
        };
    };
    export class $giper_baza_app_stat extends $giper_baza_app_stat_base {
        freshness(): number | null;
        uptime(next?: $mol_time_duration): $mol_time_duration;
        init(): {
            destructor: () => boolean;
        };
        tick(): void;
    }
    export {};
}

declare namespace $ {
    export const $giper_baza_flex_deck_base: $giper_baza_link;
    const $giper_baza_flex_subj_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Name: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Name: typeof $giper_baza_atom_text;
        };
    };
    export class $giper_baza_flex_subj extends $giper_baza_flex_subj_base {
        static meta: $giper_baza_link;
        name(next?: string): string;
    }
    const $giper_baza_flex_subj_link_base: {
        new (): {
            Value: () => typeof $giper_baza_flex_subj;
            remote(next?: $giper_baza_flex_subj | null | undefined): $giper_baza_flex_subj | null;
            remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_subj | null | undefined): $giper_baza_flex_subj | null;
            ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj | null;
            ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj | null;
            ensure_here(peer: $giper_baza_link | null): void;
            ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
            ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
            remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_subj | null;
            local_ensure(): $giper_baza_flex_subj | null;
            val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
            vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
            vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        toString(): any;
        Value: typeof $giper_baza_dict;
        parse: typeof $giper_baza_vary_cast_link;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_flex_subj_link extends $giper_baza_flex_subj_link_base {
    }
    const $giper_baza_flex_meta_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Props: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_prop[] | undefined): readonly $giper_baza_flex_prop[];
                remote_add(item: $giper_baza_flex_prop): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_prop;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Pulls: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_subj[] | undefined): readonly $giper_baza_flex_subj[];
                remote_add(item: $giper_baza_flex_subj): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Props: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_prop[] | undefined): readonly $giper_baza_flex_prop[];
                    remote_add(item: $giper_baza_flex_prop): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_prop;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Pulls: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_subj[] | undefined): readonly $giper_baza_flex_subj[];
                    remote_add(item: $giper_baza_flex_subj): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $giper_baza_flex_meta extends $giper_baza_flex_meta_base {
        static meta: $giper_baza_link;
        prop_new(key: string, type: string, kind?: $giper_baza_flex_meta, vars?: $giper_baza_list_vary, base?: $giper_baza_vary_type): $giper_baza_flex_prop;
        prop_add(prop: $giper_baza_flex_prop): void;
        prop_all(): readonly $giper_baza_flex_prop[];
        pull_add(meta: $giper_baza_flex_meta): void;
        pull_all(): $giper_baza_flex_meta[];
    }
    const $giper_baza_flex_prop_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Path: (auto?: any) => $giper_baza_atom_text | null;
            readonly Type: (auto?: any) => $giper_baza_atom_text | null;
            readonly Kind: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_meta | null;
                local_ensure(): $giper_baza_flex_meta | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Enum: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_list_vary | null;
                local_ensure(): $giper_baza_list_vary | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Base: (auto?: any) => $giper_baza_atom_vary | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Path: typeof $giper_baza_atom_text;
            readonly Type: typeof $giper_baza_atom_text;
            readonly Kind: {
                new (): {
                    Value: () => typeof $giper_baza_flex_meta;
                    remote(next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_meta | null;
                    local_ensure(): $giper_baza_flex_meta | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Enum: {
                new (): {
                    Value: () => typeof $giper_baza_list_vary;
                    remote(next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_list_vary | null;
                    local_ensure(): $giper_baza_list_vary | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Base: typeof $giper_baza_atom_vary;
        };
    };
    export class $giper_baza_flex_prop extends $giper_baza_flex_prop_base {
        static meta: $giper_baza_link;
        path(next?: string): string;
        type(next?: string): string;
        base(next?: $giper_baza_vary_type): string | number | bigint | boolean | Element | $giper_baza_link | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | readonly $giper_baza_vary_type[] | {
            [x: string]: $giper_baza_vary_type;
        } | null;
        kind(next?: $giper_baza_flex_meta): $giper_baza_flex_meta | null;
        enum(next?: $giper_baza_list_vary): $giper_baza_list_vary | null;
    }
    const $giper_baza_flex_deck_base_1: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Metas: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_meta[] | undefined): readonly $giper_baza_flex_meta[];
                remote_add(item: $giper_baza_flex_meta): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Types: (auto?: any) => $giper_baza_list_str | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Metas: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_meta[] | undefined): readonly $giper_baza_flex_meta[];
                    remote_add(item: $giper_baza_flex_meta): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Types: typeof $giper_baza_list_str;
        };
    };
    export class $giper_baza_flex_deck extends $giper_baza_flex_deck_base_1 {
        static meta: $giper_baza_link;
        meta_new(key: string): $giper_baza_flex_meta;
        meta_for(Meta: typeof $giper_baza_flex_subj): $giper_baza_flex_meta;
    }
    const $giper_baza_flex_seed_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Deck: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_deck | null;
                local_ensure(): $giper_baza_flex_deck | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Peers: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_peer[] | undefined): readonly $giper_baza_flex_peer[];
                remote_add(item: $giper_baza_flex_peer): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_peer;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Deck: {
                new (): {
                    Value: () => typeof $giper_baza_flex_deck;
                    remote(next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_deck | null;
                    local_ensure(): $giper_baza_flex_deck | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Peers: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_peer[] | undefined): readonly $giper_baza_flex_peer[];
                    remote_add(item: $giper_baza_flex_peer): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_peer;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $giper_baza_flex_seed extends $giper_baza_flex_seed_base {
        static meta: $giper_baza_link;
        deck(): $giper_baza_flex_deck | null;
        peers(next?: readonly $giper_baza_flex_peer[]): readonly $giper_baza_flex_peer[];
    }
    const $giper_baza_flex_peer_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Urls: (auto?: any) => $giper_baza_list_str | null;
            readonly Stat: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_app_stat | null;
                local_ensure(): $giper_baza_app_stat | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Urls: typeof $giper_baza_list_str;
            readonly Stat: {
                new (): {
                    Value: () => typeof $giper_baza_app_stat;
                    remote(next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_app_stat | null;
                    local_ensure(): $giper_baza_app_stat | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $giper_baza_flex_peer extends $giper_baza_flex_peer_base {
        static meta: $giper_baza_link;
        stat(auto?: any): $giper_baza_app_stat | null;
        urls(next?: string[]): string[];
    }
    const $giper_baza_flex_user_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Caret: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Caret: typeof $giper_baza_atom_text;
        };
    };
    export class $giper_baza_flex_user extends $giper_baza_flex_user_base {
        static meta: $giper_baza_link;
        caret(next?: string): string | null;
    }
    export function $giper_baza_flex_init(this: $): $giper_baza_flex_seed;
    export {};
}

declare namespace $ {
    class $giper_baza_glob extends $mol_object {
        static lands_touched: $mol_wire_set<string>;
        static yard(): $giper_baza_yard;
        static home<Home extends typeof $giper_baza_flex_subj = typeof $giper_baza_flex_subj>(Home?: Home): InstanceType<Home>;
        static king_grab(preset?: $giper_baza_rank_preset): $giper_baza_auth;
        static land_grab(preset?: $giper_baza_rank_preset): $giper_baza_land;
        static Land(link: $giper_baza_link): $giper_baza_land;
        static Pawn<Pawn extends typeof $giper_baza_pawn>(link: $giper_baza_link, Pawn: Pawn): InstanceType<Pawn>;
        static Seed(): $giper_baza_flex_seed;
        static boot(): void;
        static apply_pack(pack: $giper_baza_pack): void;
        static apply_parts(parts: $giper_baza_pack_parts): void;
    }
}

declare namespace $ {

	type $mol_avatar__id_giper_baza_status_1 = $mol_type_enforce<
		ReturnType< $giper_baza_status['master_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_avatar__id_giper_baza_status_2 = $mol_type_enforce<
		ReturnType< $giper_baza_status['master_link'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_link__uri_giper_baza_status_3 = $mol_type_enforce<
		ReturnType< $giper_baza_status['master_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_giper_baza_status_4 = $mol_type_enforce<
		ReturnType< $giper_baza_status['link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint_giper_baza_status_5 = $mol_type_enforce<
		ReturnType< $giper_baza_status['message'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	export class $giper_baza_status extends $mol_select {
		master_id( id: any): string
		Option_logo( id: any): $mol_avatar
		master_link( ): string
		Well( ): $mol_avatar
		Fail( ): $mol_icon_sync_off
		link_content( ): readonly(any)[]
		hint( ): string
		message( ): ReturnType< $giper_baza_status['hint'] >
		Link( ): $mol_link
		minimal_width( ): number
		minimal_height( ): number
		Filter( ): any
		option_content( id: any): readonly(any)[]
		trigger_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_status extends $.$giper_baza_status {
        message(): string;
        link_content(): $mol_icon_sync_off[];
        options(): string[];
        master_link(): string;
        master_id(uri: string): string;
        option_label(uri: string): string;
        value(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_security extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=security.view.tree.d.ts.map
declare namespace $ {

	export class $giper_baza_link_chip extends $mol_link {
		param( ): string
		link( ): $giper_baza_link
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_link_chip extends $.$giper_baza_link_chip {
        title(): string;
        arg(): {
            [x: string]: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    } = {}> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: Array<{
            regExp: RegExp;
            name: string;
            size: number;
        }>;
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        spoiler: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        grid: RegExp;
        cut: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code: RegExp;
        insert: RegExp;
        delete: RegExp;
        embed: RegExp;
        link: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-word': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {

	type $mol_view__sub_mol_text_code_line_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_line_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_line_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_line_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_line_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_line_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_line_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_line extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_line extends $.$mol_text_code_line {
        maximal_width(): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        tokens(path: number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        sub(): (string | $mol_view)[];
        row_content(path: number[]): string[] | $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        token_uri(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {

	type $mol_text_code_line__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_line['numb'] >
	>
	type $mol_text_code_line__theme_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_theme'] >
		,
		ReturnType< $mol_text_code_line['theme'] >
	>
	type $mol_text_code_line__text_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__syntax_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__highlight_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_9 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_11 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_theme( id: any): string
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_line
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		row_themes( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $.$mol_text_code_line[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): any;
        sub(): ($.$mol_list | $.$mol_button_copy)[];
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_base(): string;
        uri_resolve(uri: string): string;
        text_export(): string;
        row_theme(row: number): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_dump_value__value_mol_dump_list_1 = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_dump_value__expanded_mol_dump_list_2 = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_expanded'] >
		,
		ReturnType< $mol_dump_value['expanded'] >
	>
	type $mol_dump_value__prototypes_mol_dump_list_3 = $mol_type_enforce<
		ReturnType< $mol_dump_list['prototypes'] >
		,
		ReturnType< $mol_dump_value['prototypes'] >
	>
	type $mol_dump_value__preview_show_mol_dump_list_4 = $mol_type_enforce<
		ReturnType< $mol_dump_list['preview_show'] >
		,
		ReturnType< $mol_dump_value['preview_show'] >
	>
	export class $mol_dump_list extends $mol_view {
		dump_value( id: any): any
		dump_expanded( id: any, next?: boolean ): boolean
		prototypes( ): boolean
		preview_show( ): boolean
		Dump( id: any): $mol_dump_value
		values( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_list extends $.$mol_dump_list {
        sub(): $.$mol_dump_value[];
        dump_value(index: number): any;
        expand_all(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_code__text_mol_dump_value_1 = $mol_type_enforce<
		ReturnType< $mol_dump_value['simple'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__text_mol_dump_value_2 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_title'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_check_expand__minimal_height_mol_dump_value_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_height'] >
	>
	type $mol_check_expand__minimal_width_mol_dump_value_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_width'] >
	>
	type $mol_check_expand__expanded_mol_dump_value_5 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	type $mol_check_expand__expandable_mol_dump_value_6 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__clicks_mol_dump_value_7 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_all'] >
		,
		ReturnType< $mol_check_expand['clicks'] >
	>
	type $mol_check_expand__label_mol_dump_value_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__dom_node_mol_dump_value_9 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_dom'] >
		,
		ReturnType< $mol_view['dom_node'] >
	>
	type $mol_view__render_mol_dump_value_10 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub_mol_dump_value_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dump_list__values_mol_dump_value_12 = $mol_type_enforce<
		ReturnType< $mol_dump_value['row_values'] >
		,
		ReturnType< $mol_dump_list['values'] >
	>
	type $mol_dump_list__prototypes_mol_dump_value_13 = $mol_type_enforce<
		ReturnType< $mol_dump_value['prototypes'] >
		,
		ReturnType< $mol_dump_list['prototypes'] >
	>
	type $mol_dump_list__preview_show_mol_dump_value_14 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_show'] >
		,
		ReturnType< $mol_dump_list['preview_show'] >
	>
	type $mol_expander__expanded_mol_dump_value_15 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__Trigger_mol_dump_value_16 = $mol_type_enforce<
		ReturnType< $mol_dump_value['Expand_head'] >
		,
		ReturnType< $mol_expander['Trigger'] >
	>
	type $mol_expander__content_mol_dump_value_17 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_content'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_dump_value extends $mol_view {
		simple( ): string
		Simple( ): $mol_text_code
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		expand_all( next?: any ): any
		expand_title( ): string
		Expand_title( ): $mol_text_code
		Expand_head( ): $mol_check_expand
		preview_dom( ): any
		preview( ): any
		Preview_dom( ): $mol_view
		Preview( ): $mol_view
		row_values( id: any): readonly(any)[]
		prototypes( ): boolean
		Row( id: any): $mol_dump_list
		expand_content( ): readonly(any)[]
		Expand( ): $mol_expander
		value( next?: any ): any
		preview_show( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=value.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_value extends $.$mol_dump_value {
        sub(): $.$mol_text_code[] | $.$mol_expander[];
        simple(): string;
        expand_title(): any;
        rows_values(): any[][];
        preview_dom(): Element | null;
        expand_content(): ($mol_view | $.$mol_dump_list)[];
        expandable(): boolean;
        row_values(index: number): any[];
        expand_all(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $giper_baza_link_chip__link_giper_baza_unit_sand_dump_1 = $mol_type_enforce<
		ReturnType< $giper_baza_unit_sand_dump['value'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $mol_dump_value__value_giper_baza_unit_sand_dump_2 = $mol_type_enforce<
		ReturnType< $giper_baza_unit_sand_dump['value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	export class $giper_baza_unit_sand_dump extends $mol_view {
		value( ): any
		land( ): $giper_baza_land
		sand( ): $giper_baza_unit_sand
		Ref( ): $giper_baza_link_chip
		Other( ): $mol_dump_value
	}
	
}

//# sourceMappingURL=dump.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_unit_sand_dump extends $.$giper_baza_unit_sand_dump {
        value(): $giper_baza_vary_type;
        sub(): $.$mol_dump_value[] | $.$giper_baza_link_chip[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_drag extends $mol_ghost {
		start( next?: any ): any
		drag_start( next?: ReturnType< $mol_drag['start'] > ): ReturnType< $mol_drag['start'] >
		move( next?: any ): any
		drag_move( next?: ReturnType< $mol_drag['move'] > ): ReturnType< $mol_drag['move'] >
		end( next?: any ): any
		drag_end( next?: ReturnType< $mol_drag['end'] > ): ReturnType< $mol_drag['end'] >
		status( next?: string ): string
		event( ): ({ 
			dragstart( next?: ReturnType< $mol_drag['drag_start'] > ): ReturnType< $mol_drag['drag_start'] >,
			drag( next?: ReturnType< $mol_drag['drag_move'] > ): ReturnType< $mol_drag['drag_move'] >,
			dragend( next?: ReturnType< $mol_drag['drag_end'] > ): ReturnType< $mol_drag['drag_end'] >,
		}) 
		attr( ): ({ 
			'draggable': boolean,
			'mol_drag_status': ReturnType< $mol_drag['status'] >,
		}) 
		transfer( ): ({ 
			'text/plain': string,
			'text/html': string,
			'text/uri-list': string,
		}) 
		allow_copy( ): boolean
		allow_link( ): boolean
		allow_move( ): boolean
		image( ): ReturnType< $mol_drag['dom_node'] >
	}
	
}

//# sourceMappingURL=drag.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drag extends $.$mol_drag {
        status(next?: "ready" | "drag"): "ready" | "drag";
        drag_start(event: DragEvent): void;
        drag_end(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_drop extends $mol_ghost {
		enter( next?: any ): any
		move( next?: any ): any
		leave( next?: any ): any
		drop( next?: any ): any
		status( next?: string ): string
		enabled( next?: boolean ): boolean
		event( ): ({ 
			dragenter( next?: ReturnType< $mol_drop['enter'] > ): ReturnType< $mol_drop['enter'] >,
			dragover( next?: ReturnType< $mol_drop['move'] > ): ReturnType< $mol_drop['move'] >,
			dragleave( next?: ReturnType< $mol_drop['leave'] > ): ReturnType< $mol_drop['leave'] >,
			drop( next?: ReturnType< $mol_drop['drop'] > ): ReturnType< $mol_drop['drop'] >,
		}) 
		attr( ): ({ 
			'mol_drop_status': ReturnType< $mol_drop['status'] >,
		}) 
		adopt( next?: Record<string, any> ): Record<string, any>
		receive( next?: any ): any
		allow( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=drop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drop extends $.$mol_drop {
        status(next?: "ready" | "drag"): "ready" | "drag";
        protected _target: EventTarget | null;
        enter(event: DragEvent): void;
        move(event: DragEvent): void;
        decide_action(event: DragEvent): any;
        leave(event: DragEvent): void;
        receive(transfer: unknown): unknown;
        drop(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key_mol_number_1 = $mol_type_enforce<
		({ 
			down( next?: ReturnType< $mol_number['event_dec'] > ): ReturnType< $mol_number['event_dec'] >,
			up( next?: ReturnType< $mol_number['event_inc'] > ): ReturnType< $mol_number['event_inc'] >,
			pageDown( next?: ReturnType< $mol_number['event_dec_boost'] > ): ReturnType< $mol_number['event_dec_boost'] >,
			pageUp( next?: ReturnType< $mol_number['event_inc_boost'] > ): ReturnType< $mol_number['event_inc_boost'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_button_minor__event_click_mol_number_2 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_3 = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_string__type_mol_number_5 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__keyboard_mol_number_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__value_mol_number_7 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_number_8 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled_mol_number_9 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit_mol_number_10 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click_mol_number_11 = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_12 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		event_dec( next?: any ): any
		event_inc( next?: any ): any
		event_dec_boost( next?: any ): any
		event_inc_boost( next?: any ): any
		Hotkey( ): $mol_hotkey
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_chevron_left
		Dec( ): $mol_button_minor
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_chevron_right
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		boost( ): number
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        value_limited(val?: number): number;
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        event_dec_boost(next?: Event): void;
        event_inc_boost(next?: Event): void;
        round(val: number): string;
        value_string(next?: string): string;
        dec_enabled(): boolean;
        inc_enabled(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea_edit__value_mol_textarea_1 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint_mol_textarea_2 = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled_mol_textarea_3 = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck_mol_textarea_4 = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max_mol_textarea_5 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection_mol_textarea_6 = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit_mol_textarea_7 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl_mol_textarea_8 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text_mol_textarea_9 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only_mol_textarea_10 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb_mol_textarea_11 = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed_mol_textarea_12 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight_mol_textarea_13 = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__syntax_mol_textarea_14 = $mol_type_enforce<
		ReturnType< $mol_textarea['syntax'] >
		,
		ReturnType< $mol_text_code['syntax'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		syntax( ): $mol_syntax2
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        symbol_insert(event: KeyboardEvent): void;
        clickable(next?: boolean): boolean;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_calendar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar_today extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=today.view.tree.d.ts.map
declare namespace $ {

	export class $mol_format extends $mol_string {
		mask( id: any): string
		allow( ): string
		hint( ): ReturnType< $mol_format['mask'] >
		keyboard( ): string
	}
	
}

//# sourceMappingURL=format.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_format extends $.$mol_format {
        selection([from, to]?: [number, number]): number[];
        value_changed(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hor extends $mol_view {
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_calendar_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_calendar_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_calendar_3 = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub_mol_calendar_4 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__holiday_mol_calendar_5 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub_mol_calendar_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub_mol_calendar_7 = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost_mol_calendar_8 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday_mol_calendar_9 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected_mol_calendar_10 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today_mol_calendar_11 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme_mol_calendar_12 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub_mol_calendar_13 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
	}
	
	export class $mol_calendar_day extends $mol_view {
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        today(): $mol_time_moment;
        day_today(day: string): boolean;
        day_ghost(day: string): boolean;
        day_theme(day: string): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_button_minor__hint_mol_date_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_date_2 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_date_3 = $mol_type_enforce<
		ReturnType< $mol_date['today_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type __mol_date_5 = $mol_type_enforce<
		Parameters< $mol_date['value_changed'] >[0]
		,
		Parameters< ReturnType< $mol_date['Input'] >['value_changed'] >[0]
	>
	type $mol_format__value_mol_date_6 = $mol_type_enforce<
		ReturnType< $mol_date['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask_mol_date_7 = $mol_type_enforce<
		ReturnType< $mol_date['input_mask'] >
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__enabled_mol_date_8 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_button_minor__hint_mol_date_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_date_10 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_date_11 = $mol_type_enforce<
		ReturnType< $mol_date['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_date_13 = $mol_type_enforce<
		ReturnType< $mol_date['input_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint_mol_date_14 = $mol_type_enforce<
		ReturnType< $mol_date['prev_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_date_15 = $mol_type_enforce<
		ReturnType< $mol_date['prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint_mol_date_17 = $mol_type_enforce<
		ReturnType< $mol_date['next_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_date_18 = $mol_type_enforce<
		ReturnType< $mol_date['next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_date_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_date_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date_calendar__enabled_mol_date_21 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_date_calendar['enabled'] >
	>
	type $mol_date_calendar__month_moment_mol_date_22 = $mol_type_enforce<
		ReturnType< $mol_date['month_moment'] >
		,
		ReturnType< $mol_date_calendar['month_moment'] >
	>
	type $mol_date_calendar__day_selected_mol_date_23 = $mol_type_enforce<
		ReturnType< $mol_date['day_selected'] >
		,
		ReturnType< $mol_date_calendar['day_selected'] >
	>
	type $mol_date_calendar__day_click_mol_date_24 = $mol_type_enforce<
		ReturnType< $mol_date['day_click'] >
		,
		ReturnType< $mol_date_calendar['day_click'] >
	>
	type $mol_date_calendar__head_mol_date_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_date_calendar['head'] >
	>
	export class $mol_date extends $mol_pick {
		enabled( ): boolean
		today_click( next?: any ): any
		Today_icon( ): $mol_icon_calendar_today
		Today( ): $mol_button_minor
		value( next?: string ): string
		value_changed( next?: ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] > ): ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] >
		input_mask( id: any): string
		Input( ): $mol_format
		clear( next?: any ): any
		Clear_icon( ): $mol_icon_trash_can_outline
		Clear( ): $mol_button_minor
		input_content( ): readonly(any)[]
		Input_row( ): $mol_view
		month_moment( ): ReturnType< $mol_date['value_moment'] >
		day_selected( id: any): boolean
		day_click( id: any, next?: any ): any
		Calendar_title( ): ReturnType< ReturnType< $mol_date['Calendar'] >['Title'] >
		prev_hint( ): string
		prev( next?: any ): any
		Prev_icon( ): $mol_icon_chevron_left
		Prev( ): $mol_button_minor
		next_hint( ): string
		next( next?: any ): any
		Next_icon( ): $mol_icon_chevron_right
		Next( ): $mol_button_minor
		Calendar_tools( ): $mol_view
		Calendar( ): $mol_date_calendar
		Icon( ): $mol_icon_calendar
		bubble_content( ): readonly(any)[]
		value_number( next?: number ): number
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
	type $mol_button_minor__title_mol_date_calendar_1 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_text'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__event_click_mol_date_calendar_2 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_click'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__minimal_height_mol_date_calendar_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__enabled_mol_date_calendar_4 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	export class $mol_date_calendar extends $mol_calendar {
		day_click( id: any, next?: any ): any
		enabled( ): boolean
		Day_button( id: any): $mol_button_minor
		day_content( id: any): readonly(any)[]
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): (string | $mol_icon_calendar)[];
        input_mask(val: string): "____-__-__ __:__" | "____-__-__ ";
        input_content(): ($mol_button_minor | $.$mol_format)[];
        value(val?: string): string;
        value_moment(next?: $mol_time_moment): $mol_time_moment;
        value_number(next?: number): number;
        value_moment_today(): $mol_time_moment;
        clear(): void;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
        today_click(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $giper_baza_text_tokens: $mol_regexp<{
        [x: string]: string;
        readonly token: string;
        readonly link: string;
        readonly emoji: string;
        readonly 'line-break': string;
        readonly indents: string;
        readonly Word: string;
        readonly word: string;
        readonly spaces: string;
        readonly others: string;
        readonly space: string;
        readonly win_end: string;
        readonly mac_end: string;
    }>;
}

declare namespace $ {
    class $giper_baza_text extends $giper_baza_pawn {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        value(next?: string): string;
        text(next?: string): string;
        str(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): readonly [$giper_baza_link, number];
        offset_by_point([self, offset]: readonly [$giper_baza_link, number]): readonly [$giper_baza_link, number];
        selection(lord: $giper_baza_link, next?: readonly [begin: number, end: number]): number[] | readonly [begin: number, end: number];
    }
}

declare namespace $ {
    const $giper_baza_entity_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Title: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Title: typeof $giper_baza_atom_text;
        };
    };
    export class $giper_baza_entity extends $giper_baza_entity_base {
        title(next?: string): string;
    }
    export {};
}

declare namespace $ {

	type $giper_baza_unit_sand_dump__land_giper_baza_flex_field_1 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['land'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['land'] >
	>
	type $giper_baza_unit_sand_dump__value_giper_baza_flex_field_2 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_value'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['value'] >
	>
	type $mol_select__enabled_giper_baza_flex_field_3 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_giper_baza_flex_field_4 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_giper_baza_flex_field_5 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_giper_baza_flex_field_6 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_label'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_select__Filter_giper_baza_flex_field_7 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__trigger_content_giper_baza_flex_field_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_select['trigger_content'] >
	>
	type $mol_select__value_giper_baza_flex_field_9 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_new'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_giper_baza_flex_field_10 = $mol_type_enforce<
		({ 
			'local': string,
			'pull': string,
			'post': string,
			'read': string,
			'deny': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $giper_baza_flex_form__enabled_giper_baza_flex_field_11 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $giper_baza_flex_form['enabled'] >
	>
	type $giper_baza_flex_form__pawn_giper_baza_flex_field_12 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['dict_pawn'] >
		,
		ReturnType< $giper_baza_flex_form['pawn'] >
	>
	type $giper_baza_unit_sand_dump__land_giper_baza_flex_field_13 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['land'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['land'] >
	>
	type $giper_baza_unit_sand_dump__sand_giper_baza_flex_field_14 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_sand'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['sand'] >
	>
	type $mol_drag__end_giper_baza_flex_field_15 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_drag_end'] >
		,
		ReturnType< $mol_drag['end'] >
	>
	type $mol_drag__transfer_giper_baza_flex_field_16 = $mol_type_enforce<
		({ 
			'text/plain': ReturnType< $giper_baza_flex_field['list_item_value'] >,
			'text/html': ReturnType< $giper_baza_flex_field['list_item_html'] >,
			'text/uri-list': ReturnType< $giper_baza_flex_field['list_item_uri'] >,
		}) 
		,
		ReturnType< $mol_drag['transfer'] >
	>
	type $mol_drag__Sub_giper_baza_flex_field_17 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['List_item_dump'] >
		,
		ReturnType< $mol_drag['Sub'] >
	>
	type $mol_drop__adopt_giper_baza_flex_field_18 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive_giper_baza_flex_field_19 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_receive'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow_giper_baza_flex_field_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub_giper_baza_flex_field_21 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['List_item_drag'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_select__enabled_giper_baza_flex_field_22 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_giper_baza_flex_field_23 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_pick'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_giper_baza_flex_field_24 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_giper_baza_flex_field_25 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_label'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_button_minor__enabled_giper_baza_flex_field_26 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_giper_baza_flex_field_27 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title_giper_baza_flex_field_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_view__sub_giper_baza_flex_field_29 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_items'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_drop__adopt_giper_baza_flex_field_30 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_item_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive_giper_baza_flex_field_31 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['list_receive'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow_giper_baza_flex_field_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub_giper_baza_flex_field_33 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['List_items'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_select__enabled_giper_baza_flex_field_34 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__value_giper_baza_flex_field_35 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enum'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options_giper_baza_flex_field_36 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enum_options'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__option_label_giper_baza_flex_field_37 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enum_label'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_check_box__enabled_giper_baza_flex_field_38 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_check_box__checked_giper_baza_flex_field_39 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['bool'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_number__enabled_giper_baza_flex_field_40 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_number__value_giper_baza_flex_field_41 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['int'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__enabled_giper_baza_flex_field_42 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_number__value_giper_baza_flex_field_43 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['real'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_bar__sub_giper_baza_flex_field_44 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['link_content'] >
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_textarea__enabled_giper_baza_flex_field_45 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_flex_field_46 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['str'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection_giper_baza_flex_field_47 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['str_selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	type $mol_date__enabled_giper_baza_flex_field_48 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_date['enabled'] >
	>
	type $mol_date__value_moment_giper_baza_flex_field_49 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['time'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_expander__title_giper_baza_flex_field_50 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['dict_title'] >
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content_giper_baza_flex_field_51 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_textarea__enabled_giper_baza_flex_field_52 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['enabled'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_flex_field_53 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection_giper_baza_flex_field_54 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_field['text_selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	export class $giper_baza_flex_field extends $mol_view {
		Sub( ): $mol_view
		enabled( ): boolean
		enum( next?: any ): any
		enum_options( ): readonly(any)[]
		enum_label( id: any): string
		bool( next?: boolean ): boolean
		int( next?: number ): number
		real( next?: number ): number
		link_value( ): any
		Link_dump( ): $giper_baza_unit_sand_dump
		link( next?: any ): any
		link_options( ): readonly(any)[]
		link_label( id: any): string
		Link_pick( ): $mol_select
		Link_new_icon( ): $mol_icon_plus
		link_new( next?: any ): any
		Link_new( ): $mol_select
		link_content( ): readonly(any)[]
		str( next?: string ): string
		str_selection( next?: readonly(any)[] ): readonly(any)[]
		time( next?: $mol_time_moment ): $mol_time_moment
		dict_title( ): string
		dict_pawn( ): $giper_baza_dict
		Dict_form( ): $giper_baza_flex_form
		text( next?: string ): string
		text_selection( next?: readonly(any)[] ): readonly(any)[]
		list_item_adopt( next?: any ): any
		list_receive( next?: any ): any
		list_item_receive( id: any, next?: any ): any
		list_item_drag_end( id: any, next?: any ): any
		list_item_value( id: any): string
		list_item_html( id: any): string
		list_item_uri( id: any): string
		list_sand( id: any): $giper_baza_unit_sand
		List_item_dump( id: any): $giper_baza_unit_sand_dump
		List_item_drag( id: any): $mol_drag
		List_item_drop( id: any): $mol_drop
		List_item( id: any): ReturnType< $giper_baza_flex_field['List_item_drop'] >
		list_pick( next?: any ): any
		List_pick( ): $mol_select
		list_item_add( next?: any ): any
		List_item_add( ): $mol_button_minor
		list_items( ): readonly(any)[]
		List_items( ): $mol_view
		List_drop( ): $mol_drop
		sub( ): readonly(any)[]
		pawn( next?: $giper_baza_pawn ): $giper_baza_pawn
		land( ): ReturnType< ReturnType< $giper_baza_flex_field['pawn'] >['land'] >
		prop( ): $giper_baza_flex_prop
		Enum( ): $mol_select
		Bool( ): $mol_check_box
		Int( ): $mol_number
		Real( ): $mol_number
		Ref( ): $mol_bar
		Str( ): $mol_textarea
		Time( ): $mol_date
		Dict( ): $mol_expander
		Text( ): $mol_textarea
		List( ): ReturnType< $giper_baza_flex_field['List_drop'] >
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_flex_field extends $.$giper_baza_flex_field {
        dict_pawn(): $giper_baza_dict;
        Sub(): $.$mol_select | $.$mol_expander | $.$mol_drop | $.$mol_number | $.$mol_textarea | $.$mol_date | $mol_check_box | $mol_bar;
        enum(next?: $giper_baza_vary_type): string | number | bigint | boolean | Element | $giper_baza_link | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | readonly $giper_baza_vary_type[] | {
            [x: string]: $giper_baza_vary_type;
        } | null;
        enum_options(): readonly $giper_baza_vary_type[];
        enum_label(option: $giper_baza_vary_type): string;
        bool(next?: boolean): boolean;
        int(next?: number): number;
        real(next?: number): number;
        str(next?: string): string;
        str_selection(next?: readonly [begin: number, end: number]): number[] | readonly [begin: number, end: number];
        time(next?: $mol_time_moment): $mol_time_moment;
        link(next?: $giper_baza_link): null;
        link_content(): ($.$mol_select | $.$giper_baza_unit_sand_dump)[];
        link_value(): string | number | bigint | boolean | Element | $giper_baza_link | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | readonly $giper_baza_vary_type[] | {
            [x: string]: $giper_baza_vary_type;
        } | null;
        link_options(): readonly $giper_baza_vary_type[];
        link_label(link: $giper_baza_vary_type): string;
        link_remote(): $giper_baza_dict;
        link_new(rights?: string): null;
        text(next?: string): string;
        text_selection(next?: readonly [begin: number, end: number]): number[] | readonly [begin: number, end: number];
        dict_title(): string;
        list_items(): ($mol_button_minor | $.$mol_select | $.$mol_drop)[];
        list_pick(next?: $giper_baza_link): null;
        list_item_add(): void;
        list_sand(sand: $giper_baza_unit_sand): $giper_baza_unit_sand;
        list_item_value(sand: $giper_baza_unit_sand): string;
        list_item_adopt(transfer: DataTransfer): string | $giper_baza_link | null;
        list_item_receive(sand: $giper_baza_unit_sand, value: string): void;
        list_receive(value: string): void;
        list_item_drag_end(sand: $giper_baza_unit_sand, event: DragEvent): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_status extends $.$mol_status {
        message(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type __mol_form_2 = $mol_type_enforce<
		Parameters< $mol_form['submit_activate'] >[0]
		,
		Parameters< ReturnType< $mol_form['Submit'] >['activate'] >[0]
	>
	type $mol_button_major__title_mol_form_3 = $mol_type_enforce<
		ReturnType< $mol_form['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__hint_mol_form_4 = $mol_type_enforce<
		ReturnType< $mol_form['submit_hint'] >
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_mol_form_5 = $mol_type_enforce<
		ReturnType< $mol_form['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_status__message_mol_form_6 = $mol_type_enforce<
		ReturnType< $mol_form['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_row__sub_mol_form_7 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_invalid( ): string
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		submit_title( ): string
		submit_hint( ): string
		submit_activate( next?: ReturnType< ReturnType< $mol_form['Submit'] >['activate'] > ): ReturnType< ReturnType< $mol_form['Submit'] >['activate'] >
		submit( next?: any ): any
		Submit( ): $mol_button_major
		result( next?: any ): any
		Result( ): $mol_status
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		save( next?: any ): any
		message_done( ): string
		errors( ): Record<string, string>
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
        result(next?: string | Error): string;
        buttons(): ($.$mol_status | $mol_button_major)[];
        submit(next?: Event): boolean;
    }
}

declare namespace $ {

	type $giper_baza_flex_field__pawn_giper_baza_flex_form_1 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['field_pawn'] >
		,
		ReturnType< $giper_baza_flex_field['pawn'] >
	>
	type $giper_baza_flex_field__prop_giper_baza_flex_form_2 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['field_prop'] >
		,
		ReturnType< $giper_baza_flex_field['prop'] >
	>
	type $giper_baza_flex_field__enabled_giper_baza_flex_form_3 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['enabled'] >
		,
		ReturnType< $giper_baza_flex_field['enabled'] >
	>
	type $mol_view__sub_giper_baza_flex_form_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_form_field__name_giper_baza_flex_form_5 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['field_name'] >
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content_giper_baza_flex_form_6 = $mol_type_enforce<
		ReturnType< $giper_baza_flex_form['Field_content'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	export class $giper_baza_flex_form extends $mol_list {
		field_name( id: any): string
		field_pawn( id: any, next?: $giper_baza_pawn ): $giper_baza_pawn
		field_prop( id: any): $giper_baza_flex_prop
		enabled( ): boolean
		Field_control( id: any): $giper_baza_flex_field
		Field_content( id: any): $mol_view
		Field( id: any): $mol_form_field
		fields( ): readonly(any)[]
		pawn( ): $giper_baza_dict
		meta( ): $giper_baza_flex_meta
		rows( ): ReturnType< $giper_baza_flex_form['fields'] >
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_flex_form extends $.$giper_baza_flex_form {
        meta(): $giper_baza_flex_meta;
        fields(): $.$mol_form_field[];
        field_name(prop: $giper_baza_flex_prop): string;
        field_pawn(prop: $giper_baza_flex_prop, auto?: any): $giper_baza_pawn;
        field_prop(prop: $giper_baza_flex_prop): $giper_baza_flex_prop;
        enabled(): boolean;
    }
}

declare namespace $ {

	type $mol_paragraph__sub_giper_baza_pawn_dump_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_2 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__hint_giper_baza_pawn_dump_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_4 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['key_new'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__submit_giper_baza_pawn_dump_5 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['add_key'] >
		,
		ReturnType< $mol_textarea['submit'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_6 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__hint_giper_baza_pawn_dump_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_8 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['value_new'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__submit_giper_baza_pawn_dump_9 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['add_value'] >
		,
		ReturnType< $mol_textarea['submit'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_10 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_11 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled_giper_baza_pawn_dump_12 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_textarea__value_giper_baza_pawn_dump_13 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['value_str'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_select__value_giper_baza_pawn_dump_14 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_tag'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_giper_baza_pawn_dump_15 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__dictionary_giper_baza_pawn_dump_16 = $mol_type_enforce<
		({ 
			'term': string,
			'solo': string,
			'vals': string,
			'keys': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_view__sub_giper_baza_pawn_dump_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__sub_giper_baza_pawn_dump_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__enabled_giper_baza_pawn_dump_19 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['can_change'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_giper_baza_pawn_dump_20 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_wipe'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $giper_baza_unit_sand_dump__land_giper_baza_pawn_dump_21 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['land'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['land'] >
	>
	type $giper_baza_unit_sand_dump__sand_giper_baza_pawn_dump_22 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_value'] >
		,
		ReturnType< $giper_baza_unit_sand_dump['sand'] >
	>
	type $giper_baza_pawn_dump__tag_giper_baza_pawn_dump_23 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['unit_tag'] >
		,
		ReturnType< $giper_baza_pawn_dump['tag'] >
	>
	type $giper_baza_pawn_dump__addons_giper_baza_pawn_dump_24 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['pawn_addons'] >
		,
		ReturnType< $giper_baza_pawn_dump['addons'] >
	>
	type $giper_baza_pawn_dump__pawn_giper_baza_pawn_dump_25 = $mol_type_enforce<
		ReturnType< $giper_baza_pawn_dump['pawn_inner'] >
		,
		ReturnType< $giper_baza_pawn_dump['pawn'] >
	>
	type $mol_view__sub_giper_baza_pawn_dump_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_giper_baza_pawn_dump_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_baza_pawn_dump extends $mol_expander {
		can_change( ): ReturnType< ReturnType< $giper_baza_pawn_dump['pawn'] >['can_change'] >
		land( ): ReturnType< ReturnType< $giper_baza_pawn_dump['pawn'] >['land'] >
		title( ): string
		Head( ): $mol_paragraph
		key_new( next?: string ): string
		add_key( next?: any ): any
		Add_key( ): $mol_textarea
		value_new( next?: string ): string
		add_value( next?: any ): any
		Add_value( ): $mol_textarea
		text( next?: string ): string
		Value_text( ): $mol_textarea
		value_str( next?: string ): string
		Value_str( ): $mol_textarea
		unit_tag( id: any, next?: string ): string
		Unit_tag( id: any): $mol_select
		unit_time( id: any): string
		Unit_time( id: any): $mol_view
		Unit_wipe_icon( id: any): $mol_icon_close
		unit_wipe( id: any, next?: any ): any
		Unit_wipe( id: any): $mol_button_minor
		unit_value( id: any): any
		Unit_value( id: any): $giper_baza_unit_sand_dump
		pawn_addons( id: any): readonly(any)[]
		pawn_inner( id: any): $giper_baza_pawn
		Pawn_inner( id: any): $giper_baza_pawn_dump
		Inner( id: any): $mol_view
		pawns( ): readonly(any)[]
		pawn( ): $giper_baza_pawn
		tag( ): string
		label( ): readonly(any)[]
		addons( ): readonly(any)[]
		Tools( ): $mol_view
		editors( ): readonly(any)[]
		content( ): ReturnType< $giper_baza_pawn_dump['pawns'] >
	}
	
}

//# sourceMappingURL=dump.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_pawn_dump extends $.$giper_baza_pawn_dump {
        title(): string;
        value(): $giper_baza_vary_type;
        items(): readonly $giper_baza_vary_type[];
        units(): $giper_baza_unit_sand[];
        pawns(): $mol_view[];
        unit_tag(index: number, next?: keyof typeof $giper_baza_unit_sand_tag): "keys" | "term" | "solo" | "vals";
        unit_time(index: number): string;
        unit_value(index: number): $giper_baza_unit_sand;
        unit_wipe(index: number, event?: Event): void;
        pawn_inner(index: number): $giper_baza_dict;
        add_key(event: Event): void;
        add_value(event: Event): void;
        value_str(next?: string): string;
        text(next?: string): string;
        editors(): $.$mol_textarea[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_source extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_source_fork extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=fork.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_download extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_download extends $.$mol_button_download {
        uri(): string;
        click(): void;
    }
}

declare namespace $ {

	export class $mol_button_download extends $mol_button_minor {
		Icon( ): $mol_icon_download
		title( ): string
		blob( ): any
		uri( ): string
		file_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $ {
    class $mol_after_work extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wait_rest_async(this: $): Promise<unknown>;
    function $mol_wait_rest(this: $): unknown;
}

declare namespace $ {
    enum $mol_si_prefix {
        y = -8,
        z = -7,
        a = -6,
        f = -5,
        p = -4,
        n = -3,
        µ = -2,
        m = -1,
        '' = 0,
        k = 1,
        M = 2,
        G = 3,
        T = 4,
        P = 5,
        E = 6,
        Z = 7,
        Y = 8
    }
}

declare namespace $ {
    function $mol_si_short(numb: number, unit?: string): string;
}

declare namespace $ {

	type $giper_baza_link_chip__link_giper_baza_land_page_1 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['meta_link'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $giper_baza_flex_form__pawn_giper_baza_land_page_2 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['pawn'] >
		,
		ReturnType< $giper_baza_flex_form['pawn'] >
	>
	type $giper_baza_pawn_dump__title_giper_baza_land_page_3 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_pawn_dump['title'] >
	>
	type $giper_baza_pawn_dump__pawn_giper_baza_land_page_4 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['pawn'] >
		,
		ReturnType< $giper_baza_pawn_dump['pawn'] >
	>
	type $giper_baza_pawn_dump__title_giper_baza_land_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_pawn_dump['title'] >
	>
	type $giper_baza_pawn_dump__pawn_giper_baza_land_page_6 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['tine'] >
		,
		ReturnType< $giper_baza_pawn_dump['pawn'] >
	>
	type $mol_list__rows_giper_baza_land_page_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_labeler__Content_giper_baza_land_page_8 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['Raw_content'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_button_minor__hint_giper_baza_land_page_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub_giper_baza_land_page_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_giper_baza_land_page_11 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['fork'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_view__sub_giper_baza_land_page_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_download__hint_giper_baza_land_page_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['hint'] >
	>
	type $mol_button_download__blob_giper_baza_land_page_14 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['dump'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name_giper_baza_land_page_15 = $mol_type_enforce<
		ReturnType< $giper_baza_land_page['dump_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_view__sub_giper_baza_land_page_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_baza_land_page extends $mol_page {
		meta_link( ): $giper_baza_link
		Meta_link( ): $giper_baza_link_chip
		Flex( ): $giper_baza_flex_form
		Raw_data( ): $giper_baza_pawn_dump
		tine( ): $giper_baza_pawn
		Raw_tine( ): $giper_baza_pawn_dump
		Raw_content( ): $mol_list
		Raw( ): $mol_labeler
		Fork_icon( ): $mol_icon_source_fork
		fork( next?: any ): any
		Fork( ): $mol_button_minor
		size( ): string
		Size( ): $mol_view
		dump( ): $mol_blob
		dump_name( ): string
		Dump( ): $mol_button_download
		Dumping( ): $mol_view
		land( ): $giper_baza_land
		pawn( ): $giper_baza_dict
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_land_page extends $.$giper_baza_land_page {
        title(): string;
        theme(): "$mol_theme_special" | null;
        encrypted(): boolean;
        tools(): $.$giper_baza_link_chip[];
        meta_link(): $giper_baza_link;
        tine(): $giper_baza_list_link;
        dump_data_pawn(): $giper_baza_dict;
        fork(): void;
        pack(): $giper_baza_pack;
        size(): string;
        dump(): Blob;
        dump_name(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_delete extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=delete.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_delete_forever extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=forever.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sprout extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sprout.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sprout_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $giper_baza_land_grab extends $mol_select {
		Trigger_icon( ): $mol_icon_plus
		Filter( ): any
		trigger_content( ): readonly(any)[]
		dictionary( ): ({ 
			'pull': string,
			'post': string,
			'read': string,
			'deny': string,
		}) 
		grab( next?: $giper_baza_rank_preset | null ): $giper_baza_rank_preset | null
	}
	
}

//# sourceMappingURL=grab.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_land_grab extends $.$giper_baza_land_grab {
        value(rights?: string): string;
    }
}

declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files_mol_button_open_1 = $mol_type_enforce<
		ReturnType< $mol_button_open['files_handled'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept_mol_button_open_2 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple_mol_button_open_3 = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(File)[] ): readonly(File)[]
		files_handled( next?: ReturnType< $mol_button_open['files'] > ): ReturnType< $mol_button_open['files'] >
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(File)[] ): readonly(File)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_open extends $.$mol_button_open {
        files_handled(next?: readonly File[]): readonly File[];
    }
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_string__hint_giper_baza_land_rights_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_giper_baza_land_rights_2 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['add_key'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_giper_baza_land_rights_3 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['add_commit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_giper_baza_land_rights_4 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_button_minor__click_giper_baza_land_rights_5 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['add_commit'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled_giper_baza_land_rights_6 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_giper_baza_land_rights_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_giper_baza_land_rights_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__hint_giper_baza_land_rights_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__value_giper_baza_land_rights_10 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['gift_rate'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__enabled_giper_baza_land_rights_11 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_select__Filter_giper_baza_land_rights_12 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__dictionary_giper_baza_land_rights_13 = $mol_type_enforce<
		({ 
			'0': string,
			'1': string,
			'2': string,
			'3': string,
			'4': string,
			'5': string,
			'6': string,
			'7': string,
			'8': string,
			'9': string,
			'A': string,
			'B': string,
			'C': string,
			'D': string,
			'E': string,
			'F': string,
		}) 
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__hint_giper_baza_land_rights_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__value_giper_baza_land_rights_15 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['gift_tier'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__Filter_giper_baza_land_rights_16 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_select['Filter'] >
	>
	type $mol_select__dictionary_giper_baza_land_rights_17 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['tier_options'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__enabled_giper_baza_land_rights_18 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['enabled'] >
		,
		ReturnType< $mol_select['enabled'] >
	>
	type $mol_avatar__id_giper_baza_land_rights_19 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['peer_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $giper_baza_link_chip__param_giper_baza_land_rights_20 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['link_param'] >
		,
		ReturnType< $giper_baza_link_chip['param'] >
	>
	type $giper_baza_link_chip__link_giper_baza_land_rights_21 = $mol_type_enforce<
		ReturnType< $giper_baza_land_rights['peer_link'] >
		,
		ReturnType< $giper_baza_link_chip['link'] >
	>
	type $giper_baza_link_chip__sub_giper_baza_land_rights_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_link_chip['sub'] >
	>
	type $mol_view__sub_giper_baza_land_rights_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_baza_land_rights extends $mol_list {
		add_key( next?: string ): string
		add_commit( next?: any ): any
		enabled( ): boolean
		Add_key( ): $mol_string
		Add_commit_icon( ): $mol_icon_plus
		Add_commit( ): $mol_button_minor
		Add( ): $mol_view
		gift_rate( id: any, next?: string ): string
		Gift_rate( id: any): $mol_select
		gift_tier( id: any, next?: string ): string
		tier_options( ): ({ 
			'deny': string,
			'read': string,
			'post': string,
			'pull': string,
			'rule': string,
		}) 
		Gift_tier( id: any): $mol_select
		link_param( ): string
		peer_link( id: any): $giper_baza_link
		peer_id( id: any): string
		Gift_avatar( id: any): $mol_avatar
		Gift_name( id: any): $giper_baza_link_chip
		Gift( id: any): $mol_view
		gifts( ): readonly(any)[]
		land( ): $giper_baza_land
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=rights.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_land_rights extends $.$giper_baza_land_rights {
        rows(): readonly any[];
        gifts(): $mol_view[];
        peer_link(lord: $giper_baza_link): $giper_baza_link;
        peer_id(lord: $giper_baza_link): string;
        gift_tier(lord: $giper_baza_link, next?: keyof typeof $giper_baza_rank_tier): keyof typeof $giper_baza_rank_tier;
        gift_rate(lord: $giper_baza_link, next?: string): string;
        add_commit(): void;
        tier_options(): {
            deny: string;
            read: string;
            post: string;
            pull: string;
            rule: string;
        };
        enabled(): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    function $mol_array_groups<Item, Groups extends string>(all: readonly Item[], group: (item: Item) => Groups): Readonly<Record<Groups, Item[] | undefined>>;
}

declare namespace $ {
    function $mol_compare_text<Item>(item?: (item: Item) => string): (a: Item, b: Item) => number;
}

declare namespace $ {

	type $mol_link__hint_giper_baza_glob_book_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__arg_giper_baza_glob_book_2 = $mol_type_enforce<
		({ 
			'link': ReturnType< $giper_baza_glob_book['home_link'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_giper_baza_glob_book_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg_giper_baza_glob_book_4 = $mol_type_enforce<
		({ 
			'side': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_giper_baza_glob_book_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $giper_baza_land_page__land_giper_baza_glob_book_6 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land'] >
		,
		ReturnType< $giper_baza_land_page['land'] >
	>
	type $giper_baza_land_page__pawn_giper_baza_glob_book_7 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['pawn'] >
		,
		ReturnType< $giper_baza_land_page['pawn'] >
	>
	type $giper_baza_land_page__tools_giper_baza_glob_book_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_land_page['tools'] >
	>
	type $mol_check_box__checked_giper_baza_glob_book_9 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_pick__hint_giper_baza_glob_book_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['hint'] >
	>
	type $mol_pick__clicks_giper_baza_glob_book_11 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['wipe'] >
		,
		ReturnType< $mol_pick['clicks'] >
	>
	type $mol_pick__align_hor_giper_baza_glob_book_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['align_hor'] >
	>
	type $mol_pick__trigger_content_giper_baza_glob_book_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content_giper_baza_glob_book_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $mol_button_minor__hint_giper_baza_glob_book_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_giper_baza_glob_book_16 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['seed_make'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_giper_baza_glob_book_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $giper_baza_land_grab__hint_giper_baza_glob_book_18 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_land_grab['hint'] >
	>
	type $giper_baza_land_grab__align_hor_giper_baza_glob_book_19 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_baza_land_grab['align_hor'] >
	>
	type $giper_baza_land_grab__grab_giper_baza_glob_book_20 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land_add'] >
		,
		ReturnType< $giper_baza_land_grab['grab'] >
	>
	type $mol_button_open__hint_giper_baza_glob_book_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['hint'] >
	>
	type $mol_button_open__files_giper_baza_glob_book_22 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['update'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_button_download__hint_giper_baza_glob_book_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['hint'] >
	>
	type $mol_button_download__enabled_giper_baza_glob_book_24 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['dump_enabled'] >
		,
		ReturnType< $mol_button_download['enabled'] >
	>
	type $mol_button_download__blob_giper_baza_glob_book_25 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['dump'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name_giper_baza_glob_book_26 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['dump_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_link__arg_giper_baza_glob_book_27 = $mol_type_enforce<
		({ 
			'side': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_giper_baza_glob_book_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $giper_baza_land_rights__land_giper_baza_glob_book_29 = $mol_type_enforce<
		ReturnType< $giper_baza_glob_book['land_current'] >
		,
		ReturnType< $giper_baza_land_rights['land'] >
	>
	type $mol_page__title_giper_baza_glob_book_30 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_giper_baza_glob_book_31 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_giper_baza_glob_book_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	export class $giper_baza_glob_book extends $mol_book2_catalog {
		home_link( ): string
		Home_link_icon( ): $mol_icon_account
		Home_link( ): $mol_link
		land( id: any): $giper_baza_land
		pawn( id: any): $giper_baza_dict
		Rights_open_icon( ): $mol_icon_security
		Rights_open( ): $mol_link
		Land( id: any): $giper_baza_land_page
		land_checked( id: any, next?: boolean ): boolean
		Land_checked( id: any): $mol_check_box
		wipe( next?: any ): any
		Wipe_icon( ): $mol_icon_delete_forever
		Wipe_pick( ): $mol_pick
		seed_make( next?: any ): any
		Seed_make_icon( ): $mol_icon_sprout_outline
		Seed_make( ): $mol_button_minor
		land_add( next?: $giper_baza_rank_preset | null ): $giper_baza_rank_preset | null
		Land_add( ): $giper_baza_land_grab
		update( next?: readonly(any)[] ): readonly(any)[]
		Update( ): $mol_button_open
		dump_enabled( ): boolean
		dump( ): $mol_blob
		dump_name( ): string
		Dump( ): $mol_button_download
		Rights_close_icon( ): $mol_icon_close
		Rights_close( ): $mol_link
		land_current( ): $giper_baza_land
		Rights_form( ): $giper_baza_land_rights
		menu_title( ): string
		menu_tools( ): readonly(any)[]
		param( ): string
		Spread( id: any): ReturnType< $giper_baza_glob_book['Land'] >
		menu_item_content( id: any): readonly($mol_view)[]
		menu_foot( ): readonly(any)[]
		Rights_page( ): $mol_page
	}
	
}

//# sourceMappingURL=book.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_glob_book extends $.$giper_baza_glob_book {
        spread_ids(): string[];
        pages(): any[];
        side(): string;
        home_link(): string;
        land_current(): $giper_baza_land;
        land(id: string): $giper_baza_land;
        pawn(id: string): $giper_baza_dict;
        spread_title(id: string): string;
        land_add(preset: $giper_baza_rank_preset): null;
        update(files: File[]): never[];
        wipe(): Promise<void>;
        seed_make(): void;
        lands_checked(): string[];
        dump_enabled(): boolean;
        dump_pack(): $giper_baza_pack | null;
        dump(): Blob;
        dump_name(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_chip extends $mol_view {
		hint( ): string
		minimal_height( ): number
		attr( ): ({ 
			'title': ReturnType< $mol_chip['hint'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chip.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_svg_group extends $mol_svg {
		dom_name( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        substracted1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        divided1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {

	export class $mol_svg_title extends $mol_svg {
		dom_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=title.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range__mol_plot_graph_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_graph_8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__mol_plot_graph_9 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['viewport_x'] >, ReturnType< $mol_plot_graph['viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_graph_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_graph_11 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_pane_x'] >, ReturnType< $mol_plot_graph['dimensions_pane_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_graph_12 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_x'] >, ReturnType< $mol_plot_graph['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_graph_13 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_graph_14 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['gap_x'] >, ReturnType< $mol_plot_graph['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_svg_title__title_mol_plot_graph_15 = $mol_type_enforce<
		ReturnType< $mol_plot_graph['hint'] >
		,
		ReturnType< $mol_svg_title['title'] >
	>
	export class $mol_plot_graph extends $mol_svg_group {
		type( ): string
		color( ): string
		viewport_x( ): $mol_vector_range<number>
		viewport_y( ): $mol_vector_range<number>
		dimensions_pane_x( ): $mol_vector_range<number>
		dimensions_pane_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		title( ): string
		hint( ): ReturnType< $mol_plot_graph['title'] >
		series_x( ): readonly(number)[]
		series_y( ): readonly(number)[]
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph['type'] >,
		})  & ReturnType< $mol_svg_group['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph['color'] >,
		})  & ReturnType< $mol_svg_group['style'] >
		viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		shift( ): readonly(number)[]
		scale( ): readonly(number)[]
		cursor_position( ): $mol_vector_2d<number>
		dimensions_pane( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		size_real( ): $mol_vector_2d<number>
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		repos_x( id: any): number
		repos_y( id: any): number
		indexes( ): readonly(number)[]
		points( ): readonly(readonly(number)[])[]
		front( ): readonly($mol_svg)[]
		back( ): readonly($mol_svg)[]
		Hint( ): $mol_svg_title
		hue( next?: number ): number
		Sample( ): any
	}
	
	export class $mol_plot_graph_sample extends $mol_view {
		type( ): string
		color( ): string
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph_sample['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph_sample['color'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=graph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        indexes(): readonly number[];
        repos_x(val: number): number;
        repos_y(val: number): number;
        points(): readonly (readonly number[])[];
        series_x(): readonly number[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        color(): string;
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_graph_sample__color_mol_plot_line_1 = $mol_type_enforce<
		ReturnType< $mol_plot_line['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	type $mol_plot_graph_sample__type_mol_plot_line_2 = $mol_type_enforce<
		ReturnType< $mol_plot_line['type'] >
		,
		ReturnType< $mol_plot_graph_sample['type'] >
	>
	export class $mol_plot_line extends $mol_plot_graph {
		curve( ): string
		threshold( ): number
		spacing( ): number
		color_fill( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_plot_line['curve'] >,
		})  & ReturnType< $mol_plot_graph['attr'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_line extends $.$mol_plot_line {
        sub(): readonly any[];
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_rect extends $mol_svg {
		width( ): string
		height( ): string
		pos_x( ): string
		pos_y( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'width': ReturnType< $mol_svg_rect['width'] >,
			'height': ReturnType< $mol_svg_rect['height'] >,
			'x': ReturnType< $mol_svg_rect['pos_x'] >,
			'y': ReturnType< $mol_svg_rect['pos_y'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=rect.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {

	export class $mol_svg_text extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		align( ): string
		align_hor( ): ReturnType< $mol_svg_text['align'] >
		align_vert( ): string
		text( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_text['pos_x'] >,
			'y': ReturnType< $mol_svg_text['pos_y'] >,
			'text-anchor': ReturnType< $mol_svg_text['align_hor'] >,
			'alignment-baseline': ReturnType< $mol_svg_text['align_vert'] >,
		})  & ReturnType< $mol_svg['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {

	type $mol_svg_rect__pos_x_mol_plot_ruler_1 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_x'] >
		,
		ReturnType< $mol_svg_rect['pos_x'] >
	>
	type $mol_svg_rect__pos_y_mol_plot_ruler_2 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_y'] >
		,
		ReturnType< $mol_svg_rect['pos_y'] >
	>
	type $mol_svg_rect__width_mol_plot_ruler_3 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height_mol_plot_ruler_4 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_path__geometry_mol_plot_ruler_5 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text__pos_x_mol_plot_ruler_6 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_x'] >
		,
		ReturnType< $mol_svg_text['pos_x'] >
	>
	type $mol_svg_text__pos_y_mol_plot_ruler_7 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_y'] >
		,
		ReturnType< $mol_svg_text['pos_y'] >
	>
	type $mol_svg_text__align_mol_plot_ruler_8 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__text_mol_plot_ruler_9 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_vector_range__mol_plot_ruler_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_ruler_11 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_text__pos_mol_plot_ruler_12 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_pos'] >
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__text_mol_plot_ruler_13 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_text'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_svg_text__align_mol_plot_ruler_14 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	export class $mol_plot_ruler extends $mol_plot_graph {
		background_x( ): string
		background_y( ): string
		background_width( ): string
		background_height( ): string
		Background( ): $mol_svg_rect
		curve( ): string
		Curve( ): $mol_svg_path
		labels_formatted( ): readonly(any)[]
		title_pos_x( ): string
		title_pos_y( ): string
		title_align( ): string
		Title( ): $mol_svg_text
		label_pos_x( id: any): string
		label_pos_y( id: any): string
		label_pos( id: any): readonly(any)[]
		label_text( id: any): string
		label_align( ): string
		step( ): number
		scale_axis( ): number
		scale_step( ): number
		shift_axis( ): number
		dimensions_axis( ): $mol_vector_range<number>
		viewport_axis( ): $mol_vector_range<number>
		axis_points( ): readonly(number)[]
		normalize( next?: number ): number
		precision( ): number
		sub( ): readonly(any)[]
		Label( id: any): $mol_svg_text
	}
	
}

//# sourceMappingURL=ruler.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $.$mol_svg_text[];
        step(): number;
        snap_to_grid(coord: number): number;
        axis_points(): number[];
        precision(): number;
        label_text(index: number): string;
        font_size(): number;
        back(): $mol_svg_path[];
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_vert extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_y( ): string
		label_pos_x( id: any): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
		background_height( ): string
		background_width( ): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
	}
	
}

//# sourceMappingURL=vert.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        title_pos_x(): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(font: string, text: string): number;
}

declare namespace $ {

	type $mol_svg_rect__width_mol_svg_text_box_1 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height_mol_svg_text_box_2 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_rect__pos_mol_svg_text_box_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_rect['pos'] >
	>
	type $mol_svg_text__pos_mol_svg_text_box_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__align_mol_svg_text_box_5 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__sub_mol_svg_text_box_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['sub'] >
	>
	export class $mol_svg_text_box extends $mol_svg_group {
		box_width( ): string
		box_height( ): string
		box_pos_x( ): ReturnType< $mol_svg_text_box['pos_x'] >
		box_pos_y( ): string
		Back( ): $mol_svg_rect
		pos_x( ): string
		pos_y( ): string
		align( ): string
		text( ): string
		Text( ): $mol_svg_text
		font_size( ): number
		width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text_box extends $.$mol_svg_text_box {
        box_width(): string;
        width(): number;
        box_pos_x(): string;
        box_pos_y(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_range__mol_plot_mark_cross_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_mark_cross_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_path__geometry_mol_plot_mark_cross_3 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text_box__pos_x_mol_plot_mark_cross_4 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y_mol_plot_mark_cross_5 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text_mol_plot_mark_cross_6 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_svg_text_box__pos_x_mol_plot_mark_cross_7 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y_mol_plot_mark_cross_8 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text_mol_plot_mark_cross_9 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_vector_2d__mol_plot_mark_cross_10 = $mol_type_enforce<
		[ ReturnType< $mol_plot_mark_cross['dimensions_x'] >, ReturnType< $mol_plot_mark_cross['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_mark_cross extends $mol_plot_graph {
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		curve( ): string
		Curve( ): $mol_svg_path
		title_x_pos_x( ): string
		title_x_pos_y( ): string
		title_x( ): string
		Label_x( ): $mol_svg_text_box
		title_y_pos_x( ): string
		title_y_pos_y( ): string
		title_y( ): string
		Label_y( ): $mol_svg_text_box
		labels( ): readonly(string)[]
		title_x_gap( ): number
		title_y_gap( ): number
		threshold( ): number
		graphs( ): readonly($mol_plot_graph)[]
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
        nearest(): {
            value: $mol_vector_2d<number>;
            scaled: $mol_vector_2d<number>;
            index: number;
        } | null;
        curve(): string;
        title_x(): string;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_y(): string;
        title_y_pos_y(): string;
        title_y_pos_x(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_gallery__style_mol_gallery_1 = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items_mol_gallery_2 = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_gallery extends $.$mol_gallery {
        sub(): readonly $mol_view[];
        side_items(id: number): $mol_view[];
        side_size(id: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_gallery__items_mol_chart_legend_1 = $mol_type_enforce<
		ReturnType< $mol_chart_legend['graph_legends'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_view__sub_mol_chart_legend_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_chart_legend_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_chart_legend_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_chart_legend extends $mol_scroll {
		graph_legends( ): readonly($mol_view)[]
		Gallery( ): $mol_gallery
		Graph_sample( id: any): any
		Graph_sample_box( id: any): $mol_view
		graph_title( id: any): string
		Graph_title( id: any): $mol_view
		graphs( ): readonly($mol_plot_graph)[]
		graphs_front( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
		Graph_legend( id: any): $mol_view
	}
	
}

//# sourceMappingURL=legend.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): readonly $mol_plot_graph[];
        graph_legends(): readonly $mol_view[];
        graph_title(index: number): string;
        Graph_sample(index: number): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_2d__mol_touch_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_touch_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_touch_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        event_leave(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {

	type $mol_vector_range__mol_plot_pane_1 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_left'] >, ReturnType< $mol_plot_pane['gap_right'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_2 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_bottom'] >, ReturnType< $mol_plot_pane['gap_top'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_9 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__mol_plot_pane_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_touch__zoom_mol_plot_pane_11 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan_mol_plot_pane_12 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['shift'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	type $mol_touch__allow_draw_mol_plot_pane_13 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_draw'] >
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan_mol_plot_pane_14 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_touch__allow_zoom_mol_plot_pane_15 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_zoom'] >
		,
		ReturnType< $mol_touch['allow_zoom'] >
	>
	type $mol_touch__draw_start_mol_plot_pane_16 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_start'] >
		,
		ReturnType< $mol_touch['draw_start'] >
	>
	type $mol_touch__draw_mol_plot_pane_17 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw'] >
		,
		ReturnType< $mol_touch['draw'] >
	>
	type $mol_touch__draw_end_mol_plot_pane_18 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_end'] >
		,
		ReturnType< $mol_touch['draw_end'] >
	>
	type $mol_vector_2d__mol_plot_pane_19 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_x'] >, ReturnType< $mol_plot_pane['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_20 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['shift_limit_x'] >, ReturnType< $mol_plot_pane['shift_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_21 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_22 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_23 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['scale_limit_x'] >, ReturnType< $mol_plot_pane['scale_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_24 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_25 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_26 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_27 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__mol_plot_pane_28 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_x'] >, ReturnType< $mol_plot_pane['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__mol_plot_pane_29 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_viewport_x'] >, ReturnType< $mol_plot_pane['dimensions_viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_pane extends $mol_svg_root {
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		shift_limit_x( ): $mol_vector_range<number>
		shift_limit_y( ): $mol_vector_range<number>
		scale_limit_x( ): $mol_vector_range<number>
		scale_limit_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		dimensions_viewport_x( ): $mol_vector_range<number>
		dimensions_viewport_y( ): $mol_vector_range<number>
		graphs_sorted( ): readonly($mol_svg)[]
		graphs( ): readonly($mol_plot_graph)[]
		graphs_positioned( ): ReturnType< $mol_plot_pane['graphs'] >
		graphs_visible( ): ReturnType< $mol_plot_pane['graphs_positioned'] >
		zoom( next?: number ): number
		cursor_position( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['pointer_center'] >
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_type'] >
		action_point( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_point'] >
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		Touch( ): $mol_touch
		aspect( ): string
		hue_base( next?: number ): number
		hue_shift( next?: number ): number
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_right( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_top( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap_bottom( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_default( ): $mol_vector_2d<number>
		shift( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		scale_default( ): $mol_vector_2d<number>
		scale( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_x( next?: number ): number
		scale_y( next?: number ): number
		size( ): $mol_vector_2d<number>
		size_real( ): $mol_vector_2d<number>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions_viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): ReturnType< $mol_plot_pane['graphs_sorted'] >
		graphs_colored( ): ReturnType< $mol_plot_pane['graphs_visible'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pane.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size(): $mol_vector_2d<number>;
        graph_hue(index: number): number;
        graphs_colored(): $.$mol_plot_graph[];
        size_real(): $mol_vector_2d<number>;
        view_box(): string;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        scale_x(next?: number): number;
        scale_y(next?: number): number;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        graph_touched: boolean;
        shift(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        reset(event?: Event): void;
        graphs_visible(): $.$mol_plot_graph[];
        graphs_positioned(): readonly $.$mol_plot_graph[];
        dimensions_viewport(): $mol_vector<$mol_vector_range<number>, 2>;
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_chart_legend__graphs_mol_chart_1 = $mol_type_enforce<
		ReturnType< $mol_chart['graphs_colored'] >
		,
		ReturnType< $mol_chart_legend['graphs'] >
	>
	type __mol_chart_2 = $mol_type_enforce<
		Parameters< $mol_chart['zoom'] >[0]
		,
		Parameters< ReturnType< $mol_chart['Plot'] >['scale_x'] >[0]
	>
	type $mol_plot_pane__zoom_mol_chart_3 = $mol_type_enforce<
		ReturnType< $mol_chart['zoom'] >
		,
		ReturnType< $mol_plot_pane['zoom'] >
	>
	type $mol_plot_pane__gap_left_mol_chart_4 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_left'] >
		,
		ReturnType< $mol_plot_pane['gap_left'] >
	>
	type $mol_plot_pane__gap_right_mol_chart_5 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_right'] >
		,
		ReturnType< $mol_plot_pane['gap_right'] >
	>
	type $mol_plot_pane__gap_bottom_mol_chart_6 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_bottom'] >
		,
		ReturnType< $mol_plot_pane['gap_bottom'] >
	>
	type $mol_plot_pane__gap_top_mol_chart_7 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_top'] >
		,
		ReturnType< $mol_plot_pane['gap_top'] >
	>
	type $mol_plot_pane__graphs_mol_chart_8 = $mol_type_enforce<
		ReturnType< $mol_chart['graphs'] >
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	type $mol_plot_pane__hue_base_mol_chart_9 = $mol_type_enforce<
		ReturnType< $mol_chart['hue_base'] >
		,
		ReturnType< $mol_plot_pane['hue_base'] >
	>
	type $mol_plot_pane__hue_shift_mol_chart_10 = $mol_type_enforce<
		ReturnType< $mol_chart['hue_shift'] >
		,
		ReturnType< $mol_plot_pane['hue_shift'] >
	>
	export class $mol_chart extends $mol_view {
		Legend( ): $mol_chart_legend
		zoom( next?: ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] > ): ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] >
		graphs_colored( ): ReturnType< ReturnType< $mol_chart['Plot'] >['graphs_colored'] >
		hue_base( ): number
		hue_shift( ): number
		Plot( ): $mol_plot_pane
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_chart['gap_hor'] >
		gap_right( ): ReturnType< $mol_chart['gap_hor'] >
		gap_bottom( ): ReturnType< $mol_chart['gap_vert'] >
		gap_top( ): ReturnType< $mol_chart['gap_vert'] >
		graphs( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chart.view.tree.d.ts.map
declare namespace $ {
    class $giper_baza_app_home extends $giper_baza_flex_peer {
        init(): void;
        tick(): void;
    }
}

declare namespace $ {

	type $mol_chip__title_giper_baza_app_stat_page_1 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['domain'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_chip__title_giper_baza_app_stat_page_2 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['uptime'] >
		,
		ReturnType< $mol_chip['title'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_4 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['cpu_user'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_6 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['cpu_system'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_7 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_11 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['mem_free'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_13 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['mem_used'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_14 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_18 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['fs_free'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_19 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_23 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['fs_reads'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_25 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['fs_writes'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_26 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_30 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['port_slaves'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_31 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_32 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['port_masters'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_33 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_37 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['land_active'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_38 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_plot_line__title_giper_baza_app_stat_page_41 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_plot_line['title'] >
	>
	type $mol_plot_line__series_y_giper_baza_app_stat_page_42 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['errors'] >
		,
		ReturnType< $mol_plot_line['series_y'] >
	>
	type $mol_plot_mark_cross__labels_giper_baza_app_stat_page_43 = $mol_type_enforce<
		ReturnType< $giper_baza_app_stat_page['times'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_giper_baza_app_stat_page_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs_giper_baza_app_stat_page_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	type $mol_gallery__items_giper_baza_app_stat_page_46 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $giper_baza_app_stat_page extends $mol_page {
		domain( ): string
		Domain( ): $mol_chip
		uptime( ): string
		Uptime( ): $mol_chip
		cpu_user( ): readonly(any)[]
		Cpu_user( ): $mol_plot_line
		cpu_system( ): readonly(any)[]
		Cpu_system( ): $mol_plot_line
		Cpu_ruler_sec( ): $mol_plot_ruler_vert
		times( ): readonly(any)[]
		Cpu_mark( ): $mol_plot_mark_cross
		Cpu( ): $mol_chart
		mem_free( ): readonly(any)[]
		Mem_free( ): $mol_plot_line
		mem_used( ): readonly(any)[]
		Mem_used( ): $mol_plot_line
		Mem_ruler( ): $mol_plot_ruler_vert
		Mem_mark( ): $mol_plot_mark_cross
		Mem( ): $mol_chart
		fs_free( ): readonly(any)[]
		Fs_free( ): $mol_plot_line
		Fs_usage_ruler( ): $mol_plot_ruler_vert
		Fs_usage_mark( ): $mol_plot_mark_cross
		Fs_usage( ): $mol_chart
		fs_reads( ): readonly(any)[]
		Fs_reads( ): $mol_plot_line
		fs_writes( ): readonly(any)[]
		Fs_writes( ): $mol_plot_line
		Fs_acting_ruler( ): $mol_plot_ruler_vert
		Fs_acting_mark( ): $mol_plot_mark_cross
		Fs_acting( ): $mol_chart
		port_slaves( ): readonly(any)[]
		Port_slaves( ): $mol_plot_line
		port_masters( ): readonly(any)[]
		Port_masters( ): $mol_plot_line
		Port_ruler_pct( ): $mol_plot_ruler_vert
		Port_mark( ): $mol_plot_mark_cross
		Ports( ): $mol_chart
		land_active( ): readonly(any)[]
		Land_active( ): $mol_plot_line
		Land_count_ruler( ): $mol_plot_ruler_vert
		Land_count_mark( ): $mol_plot_mark_cross
		Land_count( ): $mol_chart
		errors( ): readonly(any)[]
		Errors( ): $mol_plot_line
		Error_count_ruler( ): $mol_plot_ruler_vert
		Error_count_mark( ): $mol_plot_mark_cross
		Error_count( ): $mol_chart
		Charts( ): $mol_gallery
		title( ): string
		head( ): readonly(any)[]
		body_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_app_stat_page extends $.$giper_baza_app_stat_page {
        home(): $giper_baza_app_home | null;
        stat(): $giper_baza_app_stat | null;
        domain(): string;
        uptime(): string;
        cpu_user(): number[];
        cpu_system(): number[];
        mem_used(): number[];
        mem_free(): number[];
        fs_free(): number[];
        land_active(): number[];
        fs_reads(): number[];
        fs_writes(): number[];
        port_slaves(): number[];
        port_masters(): number[];
        errors(): number[];
        times(): string[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_play extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=play.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	type $mol_string__hint_giper_baza_auth_slot_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_giper_baza_auth_slot_2 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['prefix'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_giper_baza_auth_slot_3 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['run'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_check_icon__Icon_giper_baza_auth_slot_4 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['Run_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked_giper_baza_auth_slot_5 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['running'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__enabled_giper_baza_auth_slot_6 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['run_enabled'] >
		,
		ReturnType< $mol_check_icon['enabled'] >
	>
	type $mol_check_icon__label_giper_baza_auth_slot_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_icon['label'] >
	>
	type $mol_bar__sub_giper_baza_auth_slot_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_button_copy__title_giper_baza_auth_slot_9 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['link'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__text_giper_baza_auth_slot_10 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['key'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_list__rows_giper_baza_auth_slot_11 = $mol_type_enforce<
		ReturnType< $giper_baza_auth_slot['keys'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $giper_baza_auth_slot extends $mol_page {
		prefix( next?: string ): string
		run( next?: any ): any
		Prefix( ): $mol_string
		Run_icon( ): $mol_icon_play
		running( next?: boolean ): boolean
		run_enabled( ): boolean
		Running( ): $mol_check_icon
		Input( ): $mol_bar
		link( id: any): string
		key( id: any): string
		Key( id: any): $mol_button_copy
		keys( ): readonly(any)[]
		Keys( ): $mol_list
		title( ): string
		glob( ): $giper_baza_glob
		found( id: any, next?: readonly(string)[] ): readonly(string)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=slot.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_auth_slot extends $.$giper_baza_auth_slot {
        prefix(next?: string): string;
        found(prefix: string, next?: readonly string[]): readonly string[];
        run(): void;
        running(next?: boolean): boolean;
        run_enabled(): boolean;
        grabbing(): number | null;
        keys(): $.$mol_button_copy[];
        link(index: number): string;
        key(index: number): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_link_source__uri_giper_baza_app_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $giper_baza_glob_book__addon_tools_giper_baza_app_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_glob_book['addon_tools'] >
	>
	type $giper_baza_app_stat_page__tools_giper_baza_app_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_app_stat_page['tools'] >
	>
	type $giper_baza_auth_slot__tools_giper_baza_app_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $giper_baza_auth_slot['tools'] >
	>
	export class $giper_baza_app extends $mol_book2_catalog {
		Source( ): $mol_link_source
		Status( ): $giper_baza_status
		Glob( ): $giper_baza_glob_book
		Stat( ): $giper_baza_app_stat_page
		Slot( ): $giper_baza_auth_slot
		menu_title( ): string
		param( ): string
		menu_foot( ): readonly(any)[]
		spreads( ): ({ 
			'glob': ReturnType< $giper_baza_app['Glob'] >,
			'stat': ReturnType< $giper_baza_app['Stat'] >,
			'slot': ReturnType< $giper_baza_app['Slot'] >,
		}) 
		placeholders( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=app.web.view.tree.d.ts.map
declare namespace $.$$ {
    class $giper_baza_app extends $.$giper_baza_app {
        auto(): void;
    }
}

declare namespace $.$$ {
}

export = $;
//# sourceMappingURL=web.d.ts.map
