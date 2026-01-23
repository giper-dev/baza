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
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    function $mol_fail(error: any): never;
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
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
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
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
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
        destructor(): void;
        static destructor(): void;
        [Symbol.dispose](): void;
        toString(): string;
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
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
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
    function $mol_array_chunks<Item>(array: readonly Item[], rule: number | ((item: Item, index: number) => boolean)): Item[][];
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
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
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
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
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
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
    let $mol_action: typeof $mol_wire_method;
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
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
    function $node_internal_check(name: string): boolean;
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    function $node_autoinstall(this: typeof $, name: string): void;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

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
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_run_error_context = {
        pid?: number;
        stdout: Buffer | string;
        stderr: Buffer | string;
    };
    class $mol_run_error extends $mol_error_mix<{
        timeout_kill?: boolean;
        pid?: number;
        signal?: NodeJS.Signals | null;
        status?: number | null;
        command: string;
        dir: string;
    }> {
    }
    const $mol_run_spawn: (...args: Parameters<(typeof $node)["child_process"]["spawn"]>) => import("node:child_process").ChildProcess;
    const $mol_run_spawn_sync: (...args: Parameters<(typeof $node)["child_process"]["spawnSync"]>) => import("node:child_process").SpawnSyncReturns<string | NonSharedBuffer>;
    type $mol_run_options = {
        command: readonly string[] | string;
        dir: string;
        timeout?: number;
        env?: Record<string, string | undefined>;
    };
    class $mol_run extends $mol_object {
        static async_enabled(): boolean;
        static spawn(options: $mol_run_options): import("node:child_process").SpawnSyncReturns<string | NonSharedBuffer> | $mol_run_error_context;
        static spawn_async({ dir, sync, timeout, command, env }: $mol_run_options & {
            sync?: boolean;
        }): import("node:child_process").SpawnSyncReturns<string | NonSharedBuffer> | (Promise<$mol_run_error_context> & {
            destructor: () => void;
        });
        static error_message(res?: $mol_run_error_context): string;
    }
}

declare namespace $ {
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
    var $mol_dom: typeof globalThis;
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
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
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
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
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
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: AllowSharedBufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    class $mol_rest_message extends $mol_object {
        port: $mol_rest_port;
        method(): string;
        uri(): URL;
        type(): $mol_rest_port_mime;
        data(): null | string | Uint8Array<ArrayBuffer> | Element | object;
        bin(): Uint8Array<ArrayBuffer>;
        text(): string;
        reply(data: null | string | Uint8Array<ArrayBuffer> | Element | object, meta?: {
            type?: $mol_rest_port_mime;
            code?: $mol_rest_code;
        }): void;
        route(uri: URL): $mol_rest_message;
        derive(method: string, data: null | string | Uint8Array<ArrayBuffer> | Element | object): $mol_rest_message;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static commit(): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    class $mol_rest_resource extends $mol_object {
        REQUEST(msg: $mol_rest_message): any;
        OPEN(msg: $mol_rest_message): void;
        CLOSE(msg: $mol_rest_message): void;
        HEAD(msg: $mol_rest_message): void;
        GET(msg: $mol_rest_message): void;
        PUT(msg: $mol_rest_message): void;
        PATCH(msg: $mol_rest_message): void;
        POST(msg: $mol_rest_message): void;
        DELETE(msg: $mol_rest_message): void;
        _auto(): void;
        static port(port: number): $mol_rest_server;
        static serve(): $mol_rest_server | null;
    }
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
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
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
    function $mol_wire_solid(): void;
}

declare namespace $ {
    class $mol_file_transaction_node extends $mol_file_transaction {
        protected descr(): number;
        write({ buffer, offset, length, position }: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        truncate(size: number): void;
        read(): Uint8Array<ArrayBuffer>;
        flush(): void;
        close(): void;
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
    function $mol_file_node_buffer_normalize(buf: Buffer<ArrayBuffer>): Uint8Array<ArrayBuffer>;
    class $mol_file_node extends $mol_file {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        watcher(reset?: null): {
            destructor(): void;
        };
        protected info(path: string): $mol_file_stat | null;
        protected ensure(): null | undefined;
        protected copy(to: string): void;
        protected drop(): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): undefined;
        protected kids(): this[];
        resolve(path: string): this;
        relate(base?: $mol_file): string;
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts?: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    let $mol_file_extensions: Record<string, $mol_rest_port_mime>;
}

declare namespace $ {
    class $mol_rest_port_http extends $mol_rest_port {
        output: InstanceType<$node['http']['ServerResponse']>;
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_rest_message_http extends $mol_rest_message {
        input: InstanceType<$node['http']['IncomingMessage']>;
        method(): string;
        uri(): URL;
        type(): $mol_rest_port_mime;
        data(): null | string | Uint8Array<ArrayBuffer> | Element | object;
        route(uri: URL): $mol_rest_message_http;
    }
}

declare namespace $ {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
}

declare namespace $ {
    function $mol_base64_encode(src: Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_encode_node(str: Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_decode_node(base64Str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_ae_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_buffer extends DataView<ArrayBuffer> {
        [Symbol.toStringTag]: string;
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
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
    enum $mol_websocket_frame_op {
        con = 0,
        txt = 1,
        bin = 2,
        stop = 8,
        ping = 9,
        pong = 10
    }
    class $mol_websocket_frame extends $mol_buffer {
        kind(next?: {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        }): {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        } | {
            op: "stop" | "bin" | "txt" | "con" | "ping" | "pong";
            fin: number;
        };
        data(next?: {
            size: number;
            mask: boolean;
        }): {
            size: number;
            mask: boolean;
        } | {
            size: number;
            mask: number;
        };
        size(): number;
        mask(): Uint8Array<ArrayBuffer>;
        toString(): string;
        static make(op: keyof typeof $mol_websocket_frame_op, size?: number, mask?: boolean, fin?: boolean): $mol_websocket_frame;
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
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket: InstanceType<$node['stream']['Duplex']>;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    function $mol_crypto_hash(input: ArrayBufferView): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_rest_server extends $mol_object {
        log(): boolean;
        port(): number;
        start(): void;
        http_server(): import("node:http").Server<typeof import("node:http").IncomingMessage, typeof import("node:http").ServerResponse>;
        http_income(req: InstanceType<$node['http']['IncomingMessage']>, res: InstanceType<$node['http']['ServerResponse']>): void;
        ws_upgrade(req: InstanceType<$node['http']['IncomingMessage']>, socket: InstanceType<$node['stream']['Duplex']>, head: Buffer<ArrayBuffer>): void;
        _ws_income_chunks: WeakMap<import("node:stream").Duplex, Uint8Array<ArrayBuffer>[]>;
        _ws_income_frames: WeakMap<import("node:stream").Duplex, (string | Uint8Array<ArrayBuffer>)[]>;
        ws_income(chunk: Buffer<ArrayBuffer>, upgrade: $mol_rest_message, sock: InstanceType<typeof $node.stream.Duplex>): Promise<void>;
        root(resource?: $mol_rest_resource): $mol_rest_resource;
    }
}

declare namespace $ {
    class $mol_rest_resource_fs extends $mol_rest_resource {
        _root(): $mol_file;
        GET(msg: $mol_rest_message): void;
    }
}

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
    function $giper_baza_link_compare(left: $giper_baza_link, right: $giper_baza_link): 1 | -1 | 0;
    class $giper_baza_link extends Object {
        readonly str: string;
        constructor(str: string);
        static hole: $giper_baza_link;
        static check(val: string): string | null;
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
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
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
    function $mol_base64_url_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_url_encode_node(str: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode_node(str: string): Uint8Array<ArrayBuffer>;
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
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
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
    class $mol_state_local_node<Value> extends $mol_state_local<Value> {
        static dir(): $mol_file;
        static value<Value>(key: string, next?: Value | null): Value | null;
    }
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
    type $mol_time_duration_config = number | string | {
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
    type $mol_time_moment_config = number | Date | string | {
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
    enum $giper_baza_rank_rate {
        late = 0,
        long = 3,
        slow = 7,
        fast = 11,
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
    function $giper_baza_time_dump(time: number): string;
    function $giper_baza_time_now(): number;
    function $giper_baza_time_freeze(task: () => void): void;
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
    function $mol_hash_numbers(buff: ArrayLike<number>, seed?: number): number;
}

declare namespace $ {
    class $giper_baza_node extends $mol_object {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node extends typeof $giper_baza_node>(Node: Node): InstanceType<Node>;
        nodes<Node extends typeof $giper_baza_node>(Node: Node | null): readonly InstanceType<Node>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $giper_baza_fund<Node> extends $mol_object {
        readonly item_make: (head: $giper_baza_link) => Node;
        constructor(item_make: (head: $giper_baza_link) => Node);
        Item(head: $giper_baza_link): Node;
        Data(): Node;
        Tine(): Node;
    }
}

declare namespace $ {
    function $giper_baza_log(this: $): boolean;
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
        home(): $giper_baza_home;
        area_make(idea?: number): $giper_baza_land;
        sync_rights(): $mol_wire_atom<unknown, [], void> | undefined;
        inherit(): void;
        Data<Node extends typeof $giper_baza_node>(Node: Node): InstanceType<Node>;
        Tine(): $giper_baza_list_link;
        Node<Node extends typeof $giper_baza_node>(Node: Node): $giper_baza_fund<InstanceType<Node>>;
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
        post(lead: $giper_baza_link, head: $giper_baza_link, self: $giper_baza_link, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): $giper_baza_unit_sand;
        sand_move(sand: $giper_baza_unit_sand, head: $giper_baza_link, seat: number, peer?: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        sand_wipe(sand: $giper_baza_unit_sand, peer?: $giper_baza_link | null): $giper_baza_unit_sand;
        broadcast(): void;
        sync(): this;
        destructor(): void;
        mine(): $giper_baza_mine;
        sync_mine(): $mol_wire_atom<unknown, [], void> | undefined;
        sync_yard(): $mol_wire_atom<unknown, [], void> | undefined;
        bus(): $mol_bus<ArrayBuffer>;
        loading(): void;
        sand_encoding(): void;
        units_unsigned(): $giper_baza_unit_base[];
        units_signing(): void;
        saving(): void;
        units_sign(units: readonly $giper_baza_unit_base[]): Promise<$giper_baza_unit_seal[]>;
        sand_encode(sand: $giper_baza_unit_sand): Promise<$giper_baza_unit_sand>;
        sand_load(sand: $giper_baza_unit_sand): void;
        sand_decode(sand: $giper_baza_unit_sand): $giper_baza_vary_type;
        sand_decode_raw(sand: $giper_baza_unit_sand): $giper_baza_vary_type;
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
        static narrow(buf: ArrayBuffer): $giper_baza_auth_pass | $giper_baza_unit_seal | $giper_baza_unit_sand | $giper_baza_unit_gift;
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
        rate_min(): number;
        tier_min(): $giper_baza_rank_tier;
        rank_min(): number;
        path(): string;
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
        static make(size: number): $giper_baza_unit_sand;
        hint(tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        tag(): keyof typeof $giper_baza_unit_sand_tag;
        big(): boolean;
        size(next?: number): number;
        _head: $giper_baza_link;
        head(next?: $giper_baza_link): $giper_baza_link;
        _self: $giper_baza_link;
        self(next?: $giper_baza_link): $giper_baza_link;
        _lead: $giper_baza_link;
        lead(next?: $giper_baza_link): $giper_baza_link;
        path(): string;
        _shot: $giper_baza_link;
        shot(next?: $giper_baza_link): $giper_baza_link;
        _data: Uint8Array<ArrayBuffer>;
        data(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        _ball: Uint8Array<ArrayBuffer>;
        ball(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        idea(): number;
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
    export class $giper_baza_list_vary extends $giper_baza_node {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node extends typeof $giper_baza_node>(Node: Node, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node>;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
            remote_make(config: $giper_baza_rank_preset): Vals[number];
            local_make(idea?: number): Vals[number];
            items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            cut(vary: $giper_baza_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export {};
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        keys(): readonly $giper_baza_vary_type[];
        dive<Node extends typeof $giper_baza_node>(key: $giper_baza_vary_type, Node: Node, auto?: any): InstanceType<Node> | null;
        static schema: Record<string, typeof $giper_baza_node>;
        static with<This extends typeof $giper_baza_dict, const Schema extends Record<string, {
            tag: keyof typeof $giper_baza_unit_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $giper_baza_node;
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
            dive<Node_1 extends typeof $giper_baza_node>(key: $giper_baza_vary_type, Node: Node_1, auto?: any): InstanceType<Node_1> | null;
            [$mol_dev_format_head](): any[];
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            cut(vary: $giper_baza_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $giper_baza_node>(Node: Node_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Node_1>;
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        schema: Record<string, typeof $giper_baza_node>;
        with<This extends typeof $giper_baza_dict, const Schema extends Record<string, {
            tag: keyof typeof $giper_baza_unit_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $giper_baza_node;
            } & Schema;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {
    export class $giper_baza_atom_vary extends $giper_baza_node {
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $giper_baza_atom_text extends $giper_baza_atom_text_base {
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
        cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
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
            cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export {};
}

declare namespace $ {
    const $giper_baza_entity_base: Omit<typeof $giper_baza_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$giper_baza_dict, {
        readonly Title: (auto?: any) => $giper_baza_atom_text | null;
    }>) & {
        schema: {
            [x: string]: typeof $giper_baza_node;
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
    const $giper_baza_home_base: Omit<typeof $giper_baza_entity, "prototype"> & (new (...args: any[]) => $mol_type_override<$giper_baza_entity, {
        readonly Selection: (auto?: any) => $giper_baza_atom_text | null;
        readonly Hall: (auto?: any) => {
            Value: Value;
            remote(next?: $giper_baza_dict | null | undefined): $giper_baza_dict | null;
            remote_of(peer: $giper_baza_link | null, next?: $giper_baza_dict | null | undefined): $giper_baza_dict | null;
            ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_dict | null;
            ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_dict | null;
            ensure_here(peer: $giper_baza_link | null): void;
            ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
            ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
            remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_dict | null;
            local_ensure(): $giper_baza_dict | null;
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
            cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
    }>) & {
        schema: {
            [x: string]: typeof $giper_baza_node;
        } & {
            readonly Selection: typeof $giper_baza_atom_text;
            readonly Hall: {
                new (): {
                    Value: () => typeof $giper_baza_dict;
                    remote(next?: $giper_baza_dict | null | undefined): $giper_baza_dict | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_dict | null | undefined): $giper_baza_dict | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_dict | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_dict | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_dict | null;
                    local_ensure(): $giper_baza_dict | null;
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
                    cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $giper_baza_home extends $giper_baza_home_base {
        hall_by<Node extends typeof $giper_baza_dict>(Node: Node, auto?: null): InstanceType<Node> | null;
    }
    export {};
}

declare namespace $ {
    type $giper_baza_mine_diff = {
        ins: $giper_baza_unit[];
        del: $giper_baza_unit[];
    };
    class $giper_baza_mine extends $mol_object {
        static land(land: $giper_baza_link): $giper_baza_mine;
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
}

declare namespace $ {
    class $giper_baza_mine_fs_yym_act extends $mol_object2 {
        yym: $giper_baza_mine_fs_yym;
        constructor(yym: $giper_baza_mine_fs_yym);
        transaction: $mol_file_transaction;
        offsets_del: WeakMap<ArrayBuffer, number>;
        offsets_ins: WeakMap<ArrayBuffer, number>;
        save(...data: [ArrayBufferView<ArrayBuffer>, ...ArrayBufferView<ArrayBuffer>[]]): number;
        free(...data: [ArrayBufferView<ArrayBuffer>, ...ArrayBufferView<ArrayBuffer>[]]): void;
    }
    class $giper_baza_mine_fs_yym extends $mol_object2 {
        readonly sides: [$mol_file, $mol_file];
        pool: $mol_memory_pool;
        offsets: Map<ArrayBuffer, number>;
        constructor(sides: [$mol_file, $mol_file]);
        destructor(): void;
        load_init(): void;
        load(): Uint8Array<ArrayBuffer>;
        atomic(task: (act: $giper_baza_mine_fs_yym_act) => void): void;
        save_init(): void;
        empty(): boolean;
    }
    class $giper_baza_mine_fs extends $giper_baza_mine {
        store(): $giper_baza_mine_fs_yym;
        store_init(): void;
        units_save(diff: $giper_baza_mine_diff): void;
        units_load(): $giper_baza_unit[];
        destructor(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $giper_baza_pack_four_code: Uint8Array<ArrayBuffer>;
    const $giper_baza_pack_head_size: number;
    type $giper_baza_pack_parts = [string, $giper_baza_pack_part][];
    class $giper_baza_pack_part extends Object {
        units: $giper_baza_unit[];
        faces: $giper_baza_face_map;
        constructor(units?: $giper_baza_unit[], faces?: $giper_baza_face_map);
        static from(units: $giper_baza_unit[], faces?: $giper_baza_face_map): $giper_baza_pack_part;
        [Symbol.iterator](): Generator<never, {
            units: $giper_baza_unit[];
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
        static masters: string[];
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
    class $giper_baza_glob extends $mol_object {
        static lands_touched: $mol_wire_set<string>;
        static yard(): $giper_baza_yard;
        static home<Node extends typeof $giper_baza_home = typeof $giper_baza_home>(Node?: Node): InstanceType<Node>;
        static king_grab(preset?: $giper_baza_rank_preset): $giper_baza_auth;
        static land_grab(preset?: $giper_baza_rank_preset): $giper_baza_land;
        static Land(link: $giper_baza_link): $giper_baza_land;
        static Node<Node extends typeof $giper_baza_node>(link: $giper_baza_link, Node: Node): InstanceType<Node>;
        static apply_pack(pack: $giper_baza_pack): void;
        static apply_parts(parts: $giper_baza_pack_parts): void;
    }
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
    const $giper_baza_stat_ranges_base: Omit<typeof $giper_baza_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$giper_baza_dict, {
        readonly Seconds: (auto?: any) => $giper_baza_stat_series | null;
        readonly Minutes: (auto?: any) => $giper_baza_stat_series | null;
        readonly Hours: (auto?: any) => $giper_baza_stat_series | null;
        readonly Days: (auto?: any) => $giper_baza_stat_series | null;
        readonly Months: (auto?: any) => $giper_baza_stat_series | null;
    }>) & {
        schema: {
            [x: string]: typeof $giper_baza_node;
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
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {
    const $giper_baza_app_stat_base: Omit<typeof $giper_baza_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$giper_baza_dict, {
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
    }>) & {
        schema: {
            [x: string]: typeof $giper_baza_node;
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
        };
    };
    export class $giper_baza_app_stat extends $giper_baza_app_stat_base {
        freshness(): number | null;
        uptime(next?: $mol_time_duration): $mol_time_duration;
        tick(): void;
    }
    export {};
}

declare namespace $ {
    const $giper_baza_app_home_base: Omit<typeof $giper_baza_home, "prototype"> & (new (...args: any[]) => $mol_type_override<$giper_baza_home, {
        readonly Ips: (auto?: any) => $giper_baza_list_str | null;
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
            cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
    }>) & {
        schema: {
            [x: string]: typeof $giper_baza_node;
        } & {
            readonly Ips: typeof $giper_baza_list_str;
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
                    cast<Node_1 extends typeof $giper_baza_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $giper_baza_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
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
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $giper_baza_app_home extends $giper_baza_app_home_base {
        stat(auto?: any): $giper_baza_app_stat | null;
        init(): void;
        tick(): void;
    }
    export {};
}

declare namespace $ {
    class $giper_baza_app_home_node extends $giper_baza_app_home {
        init(): void;
        ips(): string[];
    }
}

declare namespace $ {
    class $giper_baza_app_node extends $mol_rest_resource_fs {
        link(): $giper_baza_app_node_link;
        OPEN(msg: $mol_rest_message): void;
        POST(msg: $mol_rest_message): void;
        CLOSE(msg: $mol_rest_message): void;
        _auto(): void;
        _home(): $giper_baza_app_home;
        _stat_update(): void;
    }
    class $giper_baza_app_node_link extends $mol_rest_resource {
        GET(msg: $mol_rest_message): void;
    }
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=node.d.ts.map
