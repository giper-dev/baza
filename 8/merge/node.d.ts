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
    /** Generates unique identifier. */
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    /** Special status statuses. */
    enum $mol_wire_cursor {
        /** Update required. */
        stale = -1,
        /** Some of (transitive) pub update required. */
        doubt = -2,
        /** Actual state but may be dropped. */
        fresh = -3,
        /** State will never be changed. */
        final = -4
    }
}

declare namespace $ {
    /**
     * Collects subscribers in compact array. 28B
     */
    class $mol_wire_pub extends Object {
        constructor(id?: string);
        [Symbol.toStringTag]: string;
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        /**
         * Index of first subscriber.
         */
        protected sub_from: number;
        /**
         * All current subscribers.
         */
        get sub_list(): readonly $mol_wire_sub[];
        /**
         * Has any subscribers or not.
         */
        get sub_empty(): boolean;
        /**
         * Subscribe subscriber to this publisher events and return position of subscriber that required to unsubscribe.
         */
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        /**
         * Unsubscribe subscriber from this publisher events by subscriber position provided by `on(pub)`.
         */
        sub_off(sub_pos: number): void;
        /**
         * Called when last sub was unsubscribed.
         **/
        reap(): void;
        /**
         * Autowire this publisher with current subscriber.
         **/
        promote(): void;
        /**
         * Enforce actualization. Should not throw errors.
         */
        fresh(): void;
        /**
         * Allow to put data to caches in the subtree.
         */
        complete(): void;
        get incompleted(): boolean;
        /**
         * Notify subscribers about self changes.
         */
        emit(quant?: $mol_wire_cursor): void;
        /**
         * Moves peer from one position to another. Doesn't clear data at old position!
         */
        peer_move(from_pos: number, to_pos: number): void;
        /**
         * Updates self position in the peer.
         */
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    /** Generic subscriber interface */
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        /**
         * Begin auto wire to publishers.
         * Returns previous auto subscriber that must me transfer to the `end`.
         */
        track_on(): $mol_wire_sub | null;
        /**
         * Returns next auto wired publisher. It can be easely repormoted.
         * Or promotes next publisher to auto wire its togeter.
         * Must be used only between `track_on` and `track_off`.
         */
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        /**
         * Unsubscribes from unpromoted publishers.
         */
        track_cut(sub: $mol_wire_pub | null): void;
        /**
         * Ends auto wire to publishers.
         */
        track_off(sub: $mol_wire_pub | null): void;
        /**
         * Receive notification about publisher changes.
         */
        absorb(quant: $mol_wire_cursor, pos: number): void;
        /**
         * Unsubscribes from all publishers.
         */
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    /**
     * When fulfilled, all publishers are promoted to this subscriber on access to its.
     */
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    /**
     * Affection queue. Used to prevent accidental stack overflow on emit.
     */
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
    /**
     * Publisher that can auto collect other publishers. 32B
     *
     * 	P1 P2 P3 P4 S1 S2 S3
     * 	^           ^
     * 	pubs_from   subs_from
     */
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
        /**
         * Is subscribed to any publisher or not.
         */
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    /** @deprecated use $ instead */
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    /**
     * Proxy that delegates all to lazy returned target.
     *
     * 	$mol_delegate( Array.prototype , ()=> fetch_array() )
     */
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
    /**
     * Suspendable task with support both sync/async api.
     *
     * 	A1 A2 A3 A4 P1 P2 P3 P4 S1 S2 S3
     * 	^           ^           ^
     * 	args_from   pubs_from   subs_from
     **/
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
        /**
         * Synchronous execution. Throws Promise when waits async task (SuspenseAPI provider).
         * Should be called inside SuspenseAPI consumer (ie fiber).
         */
        sync(): Awaited<Result>;
        /**
         * Asynchronous execution.
         * It's SuspenseAPI consumer. So SuspenseAPI providers can be called inside.
         */
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
    /**
     * Deeply compares two values. Returns true if equal.
     * Define `Symbol.toPrimitive` to customize.
     */
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    /** Logger event data */
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        /** Time of event creation */
        time?: string;
        /** Place of event creation */
        place: unknown;
        /** Short description of event */
        message: string;
    } & Fields;
    /** Logger function */
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    /** Log begin of some task */
    let $mol_log3_come: $mol_log3_logger<{}>;
    /** Log end of some task */
    let $mol_log3_done: $mol_log3_logger<{}>;
    /** Log error */
    let $mol_log3_fail: $mol_log3_logger<{}>;
    /** Log warning message */
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    /** Log some generic event */
    let $mol_log3_rise: $mol_log3_logger<{}>;
    /** Log begin of log group, returns func to close group */
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    /** Log begin of collapsed group only when some logged inside, returns func to close group */
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    /** Position in any resource. */
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        /** Span for begin of unknown resource */
        static unknown: $mol_span;
        /** Makes new span for begin of resource. */
        static begin(uri: string, source?: string): $mol_span;
        /** Makes new span for end of resource. */
        static end(uri: string, source: string): $mol_span;
        /** Makes new span for entire resource. */
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        /** Makes new error for this span. */
        error(message: string, Class?: ErrorConstructor): Error;
        /** Makes new span for same uri. */
        span(row: number, col: number, length: number): $mol_span;
        /** Makes new span after end of this. */
        after(length?: number): $mol_span;
        /** Makes new span between begin and end. */
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    /** Serializes tree to string in tree format. */
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    /** Path by types in tree. */
    type $mol_tree2_path = Array<string | number | null>;
    /** Hask tool for processing node. */
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    /** Collection of hask tools for processing tree. */
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    /**
     * Abstract Syntax Tree with human readable serialization.
     * Avoid direct instantiation. Use static factories instead.
     * @see https://github.com/nin-jin/tree.d
     */
    class $mol_tree2 extends Object {
        /** Type of structural node, `value` should be empty */
        readonly type: string;
        /** Content of data node, `type` should be empty */
        readonly value: string;
        /** Child nodes */
        readonly kids: readonly $mol_tree2[];
        /** Position in most far source resource */
        readonly span: $mol_span;
        constructor(
        /** Type of structural node, `value` should be empty */
        type: string, 
        /** Content of data node, `type` should be empty */
        value: string, 
        /** Child nodes */
        kids: readonly $mol_tree2[], 
        /** Position in most far source resource */
        span: $mol_span);
        /** Makes collection node. */
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        /** Makes new derived collection node. */
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        /** Makes data node for any string. */
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        /** Makes new derived data node. */
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        /** Makes struct node. */
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        /** Makes new derived structural node. */
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        /** Makes new derived node with different kids id defined. */
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        /** Returns multiline text content. */
        text(): string;
        /** Parses tree format. */
        /** @deprecated Use $mol_tree2_from_string */
        static fromString(str: string, uri?: string): $mol_tree2;
        /** Serializes to tree format. */
        toString(): string;
        /** Makes new tree with node overrided by path. */
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        /** Makes new tree with node overrided by path. */
        update(value: readonly $mol_tree2[], ...path: $mol_tree2_path): readonly $mol_tree2[];
        /** Query nodes by path. */
        select(...path: $mol_tree2_path): $mol_tree2;
        /** Filter kids by path or value. */
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        /** Transform tree through context with transformers */
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        /** Makes Error with node coordinates. */
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    /** Syntax error with cordinates and source line snippet. */
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    /** Parses tree format from string. */
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_array_chunks<Item>(array: readonly Item[], rule: number | ((item: Item, index: number) => boolean)): Item[][];
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    /** Module for working with terminal. Text coloring when output in terminal */
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
    /** One-shot fiber */
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
        destructor(): void;
    }
}

declare namespace $ {
    /**
     * Convert asynchronous (promise-based) API to synchronous by wrapping function and method calls in a fiber.
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
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
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber.
     */
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
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber from [mol_wire](../wire/README.md)
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
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
    /** Temporary buffer. Recursive usage isn't supported. */
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
    /** Returns string key for any value. */
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
    /**
     * Returns `Tuple` without first element.
     *
     * 	$mol_type_tail<[ 1 , 2 , 3 ]> // [ 2, 3 ]
     */
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    /**
     * Returns last element of `Tuple`.
     *
     * 	$mol_type_tail<[ 1 , 2 , 3 ]> // 3
     */
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    /** Long-living fiber. */
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        /**
         * Update atom value through another temp fiber.
         */
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
    /** Decorates solo object channel to [mol_wire_atom](../atom/atom.ts). */
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    /** Reactive memoizing multiplexed property decorator. */
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
    /**
     * Reactive memoizing solo property decorator from [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem
     * name(next?: string) {
     * 	return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    let $mol_mem: typeof $mol_wire_solo;
    /**
     * Reactive memoizing multiplexed property decorator [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem_key
     * name(id: number, next?: string) {
     *  return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: AllowSharedBufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    /**
     * Returns closure that returns constant value.
     * @example
     * const rnd = $mol_const( Math.random() )
     */
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
        origin(): string;
        address(): string;
        protocols(): readonly string[];
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
    /** State of arguments like `foo=bar xxx` */
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
        _protocols: readonly string[];
        OPEN(msg: $mol_rest_message): string;
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
    /**
     * Recursive `Partial`.
     *
     * 	let props : $mol_type_partial_deep< HTMLElement > = { style : { display : 'block' } }
     */
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
    /**
     * JSX adapter that makes DOM tree.
     * Generates global unique ids for every DOM-element by components tree with ids.
     * Ensures all local ids are unique.
     * Can reuse an existing nodes by GUIDs when used inside [`mol_jsx_attach`](https://github.com/hyoo-ru/mam_mol/tree/master/jsx/attach).
     */
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
        /** Props for html elements */
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        /** Additional undeclared props */
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
    /** Convert a pseudo-synchronous (Suspense API) API to an explicit asynchronous one (for integrating with external systems). */
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    /** Run code without state changes */
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
    /**
     * Disable reaping of current subscriber
     */
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
        /**
         * Должно быть больше, чем время между событиями от вотчера при записи внешним процессом.
         * Иначе запуск ресетов паралельно с изменением может привести к неконсистентности.
         */
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
        origin(): string;
        address(): string;
        protocols(): string[];
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
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView<ArrayBuffer> | ArrayBuffer): InstanceType<This>;
        static toString(): string;
        getUint48(offset: number, LE?: boolean): number;
        setUint48(offset: number, value: number, LE?: boolean): void;
        /** 1-byte signed integer channel for offset. */
        int8(offset: number, next?: number): number;
        /** 1-byte unsigned integer channel for offset. */
        uint8(offset: number, next?: number): number;
        /** 2-byte signed integer little-endian channel for offset. */
        int16(offset: number, next?: number): number;
        /** 2-byte unsigned integer little-endian channel for offset. */
        uint16(offset: number, next?: number): number;
        /** 4-byte signed integer little-endian channel for offset. */
        int32(offset: number, next?: number): number;
        /** 4-byte unsigned integer little-endian channel for offset. */
        uint32(offset: number, next?: number): number;
        /** 8-byte signed integer little-endian channel for offset. */
        int64(offset: number, next?: bigint): bigint;
        /** 6-byte unsigned integer little-endian channel for offset. */
        uint48(offset: number, next?: number): number;
        /** 8-byte unsigned integer little-endian channel for offset. */
        uint64(offset: number, next?: bigint): bigint;
        /** 2-byte float little-endian channel for offset. */
        float16(offset: number, next?: number): number;
        /** 4-byte float little-endian channel for offset. */
        float32(offset: number, next?: number): number;
        /** 8-byte float little-endian channel for offset. */
        float64(offset: number, next?: number): number;
        /** A Uint8Array view for the same buffer. */
        asArray(): Uint8Array<ArrayBuffer>;
        /** base64ae string from buffer. */
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
    /**
     * WebSocket frame header.
     * https://datatracker.ietf.org/doc/html/rfc6455#section-5.2
     * Payload >= 2^32 isn't supported
     */
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
    /** Fast small sync SHA-1 (20 bytes, 160 bits) */
    function $mol_crypto2_hash(input: ArrayBufferView): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    /** @deprecated Use $mol_crypto2_hash */
    let $mol_crypto_hash: typeof $mol_crypto2_hash;
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

/** @jsx $mol_jsx */
declare namespace $ {
    class $mol_rest_resource_fs extends $mol_rest_resource {
        _root(): $mol_file;
        GET(msg: $mol_rest_message): void;
    }
}

declare namespace $ {
    /** Reactive Set */
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
        [$mol_key_handle](): string;
        toString(): string;
        toJSON(): string;
        [Symbol.toPrimitive](): string;
        [$mol_dev_format_head](): any[];
        /** Binary representation (6/12/18/24 bytes). */
        toBin(): Uint8Array<ArrayBuffer>;
        /** Make from integer (6 bytes). */
        static from_int(int: number): $giper_baza_link;
        /** Read from binary (6/12/18/24 bytes). */
        static from_bin(bin: Uint8Array<ArrayBuffer>): $giper_baza_link;
        static _hash_cache: WeakMap<ArrayBufferView<ArrayBufferLike>, $giper_baza_link>;
        /** Make hash from binary (12 bytes). */
        static hash_bin(bin: ArrayBufferView): $giper_baza_link;
        /** Make hash from string (12 bytes). */
        static hash_str(str: string): $giper_baza_link;
        /** Land-local Peer id. */
        peer(): $giper_baza_link;
        /** Lord-local Area id. */
        area(): $giper_baza_link;
        /** Land-local Head id. */
        head(): $giper_baza_link;
        /** Link to Lord Home. */
        lord(): $giper_baza_link;
        /** Link to Land Root. */
        land(): $giper_baza_link;
        /** Pawn Link relative to base Land: `___QWERTYUI` */
        relate(base: $giper_baza_link): $giper_baza_link;
        /** Absolute Pawn Link from relative (`___QWERTYUI`) using base Land Link. */
        resolve(base: $giper_baza_link): $giper_baza_link;
        mix(mixin: Uint8Array<ArrayBuffer> | $giper_baza_link): Uint8Array<ArrayBuffer>;
    }
    function $giper_baza_link_base<Res>(base: $giper_baza_link, task: () => Res): Res;
}

declare namespace $ {
    enum $giper_baza_slot_kind {
        /** Free Unit Slot */
        free = 0,
        /** Land header for the following parts. */
        land = 76,// L
        /** Unit of data. */
        sand = 252,
        /** Rights/Keys sharing. */
        gift = 253,
        /** Sign for hash list. */
        seal = 254,
        /** Public key. */
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
    /** Base class for crypto keys. */
    class $mol_crypto2_key extends $mol_buffer {
        static size_str: number;
        static size_bin: number;
        /** Kakes key from different params. */
        static from<This extends typeof $mol_buffer>(this: This, serial: number | string | ArrayBufferView<ArrayBuffer> | ArrayBuffer): InstanceType<This>;
        /** Array view of public part. */
        asArray(): Uint8Array<ArrayBuffer>;
        /** String representation of public part. */
        toString(): string;
    }
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    /** Derived debuggable error with stack */
    function $mol_crypto_restack(error: any): never;
}

declare namespace $ {
    /** Ed25519 public key for sign verifying. */
    class $mol_crypto2_auditor extends $mol_crypto2_key {
        /** Native WebAPI public key. */
        native(): Promise<CryptoKey>;
        /** Verifies signature of data. */
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
}

declare namespace $ {
    /** x25519 public key for data encryption. */
    class $mol_crypto2_socket extends $mol_crypto2_key {
        /** Native WebAPI public key. */
        native(): Promise<CryptoKey>;
    }
}

declare namespace $ {
    /** Compose public key for verifying and encryption, based on Curve25519. */
    class $mol_crypto2_public extends $mol_crypto2_key {
        static size_str: number;
        static size_bin: number;
        /** Return Auditor part. */
        auditor(): $mol_crypto2_auditor;
        /** Return Socket part. */
        socket(): $mol_crypto2_socket;
        toString(): string;
    }
}

declare namespace $ {
    /** Ed25519 private key for data signing. */
    class $mol_crypto2_signer extends $mol_crypto2_auditor {
        static size_sign: number;
        /** Generates new Signer. */
        static generate(): Promise<$mol_crypto2_signer>;
        /** Native WebAPI private key. */
        nativePrivate(): Promise<CryptoKey>;
        /** Array view of private part. */
        asArrayPrivate(): Uint8Array<ArrayBuffer>;
        /** String representation of private part. */
        toStringPrivate(): string;
        /** Returns Auditor from this Signer. */
        auditor(): $mol_crypto2_auditor;
        /** Makes Signature for data. */
        sign(data: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    /** 16 unique bytes. */
    function $mol_crypto2_nonce(): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    /** @deprecated Use $mol_crypto2_nonce */
    let $mol_crypto_salt: typeof $mol_crypto2_nonce;
}

declare namespace $ {
    type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
    /** Symmetric cipher with shortest payload. */
    export class $mol_crypto_sacred extends $mol_buffer {
        /** Key size in bytes. */
        static size: 16;
        /** Makes new random secret. */
        static make(): $mol_crypto_sacred;
        /** Makes from string of buffer view. */
        static from<This extends typeof $mol_buffer>(this: This, serial: string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        static from_native(native: CryptoKey): Promise<$mol_crypto_sacred>;
        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        toString(): string;
        _native: undefined | CryptoKey & {
            type: 'secret';
        };
        /** Native crypto secret */
        native(): Promise<CryptoKey & {
            type: "secret";
        }>;
        /** Encrypt any binary message. 16n bytes */
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        /** Decrypt any binary message. */
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        /** Encrypts 0xFF prefixed buffer. 16 bytes */
        close(opened: DataView<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        /** Decrypts 0xFF prefixed buffer. 16 bytes */
        open(closed: Uint8Array<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
    export {};
}

declare namespace $ {
    /** x25519 private key for data encryption. */
    class $mol_crypto2_cipher extends $mol_crypto2_socket {
        static size_secret: number;
        /** Generates new Cipher. */
        static generate(): Promise<$mol_crypto2_cipher>;
        /** Native WebAPI private key. */
        nativePrivate(): Promise<CryptoKey>;
        /** Array view of private part. */
        asArrayPrivate(): Uint8Array<ArrayBuffer>;
        /** String representation of private part. */
        toStringPrivate(): string;
        /** Returns Socket from this Chipher. */
        socket(): $mol_crypto2_socket;
        /** Makes shared secret for combination of Chiper and Soacket. */
        secret(pub: $mol_crypto2_socket): Promise<$mol_crypto_sacred>;
    }
}

declare namespace $ {
    /** Compose private key for signing and encryption, based on Curve25519. */
    class $mol_crypto2_private extends $mol_crypto2_public {
        /** Generates new private key. */
        static generate(): Promise<$mol_crypto2_private>;
        /** Return Signer part. */
        signer(): $mol_crypto2_signer;
        /** Return Cipher part. */
        cipher(): $mol_crypto2_cipher;
        /** Return Public part. */
        public(): $mol_crypto2_public;
        /** Array view of private part. */
        asArrayPrivate(): Uint8Array<ArrayBuffer>;
        /** String representation of private part. */
        toStringPrivate(): string;
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
    /** Public key generated with Proof of Work */
    class $giper_baza_auth_pass extends $mol_crypto2_public {
        static like(bin: Uint8Array<ArrayBuffer>): $giper_baza_auth_pass | null;
        hash(): $giper_baza_link;
        path(): string;
        /** Independent actor with global unique id generated from Auth key */
        lord(): $giper_baza_link;
        /** Land local unique identifier of independent actor (first half of Lord) */
        peer(): $giper_baza_link;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
    }
    /** Private key generated with Proof of Work */
    class $giper_baza_auth extends $mol_crypto2_private {
        /** Current Private key generated with Proof of Work  */
        static current(next?: $giper_baza_auth | null): $giper_baza_auth;
        static embryos: string[];
        static grab(): $giper_baza_auth;
        static generate(): Promise<$giper_baza_auth>;
        pass(): $giper_baza_auth_pass;
        secret_mutual(pass: $giper_baza_auth_pass): $mol_crypto_sacred;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    /**
     * # Generic Graph model
     * - Supports any type of Nodes and Edges.
     * - All links are ordered, but this may be ignored.
     * - Multigraph supported using arrays of Edges.
     * - Hypergraph supported by reusing same Edge on set of links.
     * - Ubergraph supported using Edges as Nodes to.
     **/
    class $mol_graph<Node, Edge> {
        /** All registered Nodes */
        nodes: Set<Node>;
        /** Edges for Nodes pairs (from-to-edge) */
        edges_out: Map<Node, Map<Node, Edge>>;
        /** Edges for Nodes pairs (to-from-edge) */
        edges_in: Map<Node, Map<Node, Edge>>;
        /** Full connect two Nodes */
        link(from: Node, to: Node, edge: Edge): void;
        /** Full disconnect two Nodes */
        unlink(from: Node, to: Node): void;
        /** Forward connect two Nodes */
        link_out(from: Node, to: Node, edge: Edge): void;
        /** Backward connect two Nodes */
        link_in(to: Node, from: Node, edge: Edge): void;
        /** Return any Edge for two Nodes or null */
        edge(from: Node, to: Node): NonNullable<Edge> | null;
        /** Return output Edge for two Nodes or null */
        edge_out(from: Node, to: Node): NonNullable<Edge> | null;
        /** Return input Edge for two Nodes or null */
        edge_in(to: Node, from: Node): NonNullable<Edge> | null;
        /** Cut cycles at lowest priority of Edges */
        acyclic(get_weight: (edge: Edge) => number): void;
        /** Topoligical ordered set of all Nodes for acyclic graph */
        get sorted(): Set<Node>;
        /** All Nodes which don't have input Edges */
        get roots(): Node[];
        /**
         * Nodes depth statistics for acyclic graph
         * @example
         * graph.depth_stat( Math.min )
         * graph.depth_stat( Math.max )
         **/
        nodes_depth(select: (left: number, right: number) => number): Map<Node, number>;
        /**
         * Depth's Nodes statistics for acyclic graph
         * @example
         * graph.depth_nodes( Math.min )
         * graph.depth_nodes( Math.max )
         **/
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
    /**
     * Small, simple, powerful, and fast TypeScript/JavaScript library for proper date/time/duration/interval arithmetic.
     *
     * Immutable iso8601 time duration representation.
     * @see http://localhost:9080/mol/app/docs/-/test.html#!demo=mol_time_demo
     */
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
    /**
     * Small, simple, powerful, and fast TypeScript/JavaScript library for proper date/time/duration/interval arithmetic.
     *
     * Immutable iso8601 time moment representation.
     * @see http://localhost:9080/mol/app/docs/-/test.html#!demo=mol_time_demo
     */
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
    /**
     * Checks for given runtype and returns tagged version of returned type.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_data_tagged_demo
     */
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    /** Any unary function **/
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    /**
     * Returns type of function param by index.
     *
     * 	// 888
     * 	$mol_type_param< ( a : 777 , b : 888 )=> 666 , 1 >
     */
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
    /**
     * Returns type of function result or class instance.
     *
     * 	// 777
     * 	$mol_type_result< ()=> 777 >
     *
     * 	// 777
     * 	$mol_type_result< new()=> 777 >
     */
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    /**
     * Combines list of unary functions/classes to one function.
     *
     * 	const reparse = $mol_data_pipe( JSON.stringify , JSON.parse )
     **/
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
    /**
     * Checks for number and returns number type.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_data_number_demo
     */
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    /**
     * Checks for integer and returns number type.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_data_integer_demo
     */
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
    /** Makes Rank from Tier and Fame names. */
    function $giper_baza_rank_make(tier: keyof typeof $giper_baza_rank_tier, fame: keyof typeof $giper_baza_rank_rate): typeof $giper_baza_rank.Value;
    /** Access level: deny, read, post, pull, rule */
    enum $giper_baza_rank_tier {
        /** Forbidden. There is no access, neither read nor write. */
        deny = 0,
        /** Read only */
        read = 16,
        /** Post changes (Sand) */
        post = 48,
        /** Pull forks (Sand) */
        pull = 112,
        /** Full control (Sand, Gift) */
        rule = 240
    }
    function $giper_baza_rank_tier_of(rank: typeof $giper_baza_rank.Value): $giper_baza_rank_tier;
    /** Work as bits count by Rate */
    const $giper_baza_rank_work_rates: readonly [15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    /** Ease of making changes, depends on fame: evil, harm, even, nice, good */
    enum $giper_baza_rank_rate {
        /** Days delay. */
        late = 0,
        /** Seconds delay. */
        long = 12,
        /** Half-second delay. */
        slow = 13,
        /** Milli-seconds delay. */
        fast = 14,
        /** Micro-seconds delay. */
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
    /** Mapping Pass to Rank */
    type $giper_baza_rank_preset = [$giper_baza_auth_pass | null, typeof $giper_baza_rank.Value][];
}

declare namespace $ {
    /** Moment from time. */
    function $giper_baza_time_moment(time: number): $mol_time_moment;
    /** User readable time+tick view. */
    function $giper_baza_time_dump(time: number, tick?: number): string;
    /** Current time with 0 tick. */
    function $giper_baza_time_now(): number;
    /** Run atomic transaction by temp freezing time. */
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
        toJSON(): string;
        [$mol_dev_format_head](): any[];
    }
    /** Statistics about Units in Land. it's total Units count & dictionary which maps Peer to Time */
    class $giper_baza_face_map extends Map<string, $giper_baza_face> {
        /** Cumulative face for all peers. */
        stat: $giper_baza_face;
        constructor(entries?: $giper_baza_face_data);
        clone(): $giper_baza_face_map;
        /** Synchronize this clock with another. */
        sync(right: $giper_baza_face_data): void;
        /** Update last time for peer. */
        peer_time(peer: string, time: number, tick: number): void;
        /** Update Summ for Peer. */
        peer_summ(peer: string, summ: number): void;
        peer_summ_shift(peer: string, diff: number): void;
        /** Generates new time for peer that greater then other seen. */
        tick(): $giper_baza_face;
        toJSON(): {
            [k: string]: $giper_baza_face;
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    /** reactive Dictionary */
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
    /**
     * 48-bit streamable array hash function
     * Based on cyrb53: https://stackoverflow.com/a/52171480
     */
    function $mol_hash_numbers(buff: ArrayLike<number>, seed?: number): number;
}

declare namespace $ {
    type Block = {
        from: number;
        size: number;
        next: Block;
    };
    /**
     * Simple memory allocator.
     * Holds linked list of free blocks.
     * Prefers blocks from the beginning.
     * Near blocks are joined automatically.
     */
    export class $mol_memory_pool extends Object {
        _free: Block;
        constructor(size?: number);
        /** Returns offset of first free block with required size. */
        acquire(size: number): number;
        /** Allows memory range to be acquired. */
        release(from: number, size: number): void;
        empty(): boolean;
        acquired(): void;
    }
    export {};
}

declare namespace $ {
    const $giper_baza_pack_four_code: Uint8Array<ArrayBuffer>;
    const $giper_baza_pack_head_size: number;
    /** Universal binary package which contains some Faces/Units/Rocks */
    type $giper_baza_pack_parts = [string, $giper_baza_pack_part][];
    /**
     * One Land info (Faces+Units) to Pack.
     * Sync: +Faces -Units
     * Diff: -Faces +Units
     * Stop: -Faces -Units
     */
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
    /** Universal binary package which contains some Faces/Units/Rocks */
    class $giper_baza_pack extends $mol_buffer {
        toBlob(): Blob;
        parts(offsets?: WeakMap<ArrayBuffer, number>, pool?: $mol_memory_pool): [string, $giper_baza_pack_part][];
        static length(parts: $giper_baza_pack_parts): number;
        static make(parts: $giper_baza_pack_parts): $giper_baza_pack;
    }
}

declare namespace $ {
    /** Registry of Pawns as Deck entities. */
    class $giper_baza_fund<Pawn> extends $mol_object {
        readonly item_make: (head: $giper_baza_link) => Pawn;
        constructor(item_make: (head: $giper_baza_link) => Pawn);
        Head(head: $giper_baza_link): Pawn;
        Data(): Pawn;
        Tine(): Pawn;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    /**
     * Small, simple, powerful, and fast TypeScript/JavaScript library for proper date/time/duration/interval arithmetic.
     *
     * Immutable iso8601 time interval representation.
     * @see http://localhost:9080/mol/app/docs/-/test.html#!demo=mol_time_demo
     */
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
    /** Encode text to Unicode Compact Format. */
    function $mol_charset_ucf_encode(str: string): Uint8Array<ArrayBuffer>;
    function $mol_charset_ucf_encode_to(str: string, buf: Uint8Array<ArrayBuffer>, from?: number): number;
    /** Decode text from Unicode Compact Format. */
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
    /** VaryPack - simple fast compact data binarization format. */
    class $mol_vary_class extends Object {
        lean_symbol: symbol;
        array: Uint8Array<ArrayBuffer>;
        buffer: DataView<ArrayBuffer>;
        /** Packs any data to Uint8Array with deduplication. */
        pack(data: readonly unknown[]): Uint8Array<ArrayBuffer>;
        /** Parses buffer to rich runtime structures. */
        take(array: Uint8Array<ArrayBuffer>): unknown;
        rich_index: Map<string | null, any>;
        /** Isolated Vary for custom types */
        zone(): $mol_vary_class;
        rich_node(keys: readonly string[]): Map<string | null, any>;
        lean_find(val: any): any;
        /** Adds custom types support. */
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
    /** Supported primitive types. */
    type $giper_baza_vary_type = null | boolean | number | bigint | string | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | Float64Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | $giper_baza_link | Element | readonly $giper_baza_vary_type[] | Readonly<{
        [key in string]: $giper_baza_vary_type;
    }>;
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

/** @jsx $mol_jsx */
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
    function $giper_baza_vary_cast_list(vary: $giper_baza_vary_type): readonly any[] | null;
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
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $mol_bus<Data> extends $mol_object {
        readonly name: string;
        readonly handle: (data: Data) => void;
        readonly channel: null | BroadcastChannel;
        constructor(name: string, handle: (data: Data) => void);
        destructor(): void;
        send(data: Data): void;
    }
}

declare namespace $ {
    function $giper_baza_log(this: $): boolean;
}

declare namespace $ {
    const $giper_baza_land_root: {
        data: $giper_baza_link;
        tine: $giper_baza_link;
    };
    /** Standalone part of Glob which syncs separately, have own rights, and contains Units */
    class $giper_baza_land extends $mol_object {
        /** Auth Independent actor with global unique id generated from Auth key */
        link(): $giper_baza_link;
        /** Auth Private key generated with Proof of Work  */
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
        unit_reap(unit: $giper_baza_unit_base): void;
        unit_seal_inc(unit: $giper_baza_unit_base): void;
        unit_seal_dec(unit: $giper_baza_unit_base): void;
        seal_del(seal: $giper_baza_unit_seal): void;
        gift_del(gift: $giper_baza_unit_gift): void;
        sand_del(sand: $giper_baza_unit_sand): void;
        lord_pass(lord: $giper_baza_link): $giper_baza_auth_pass | null;
        unit_seal(unit: $giper_baza_unit_base): $giper_baza_unit_seal | null;
        sand_get(head: $giper_baza_link, lord: $giper_baza_link, self: $giper_baza_link): $giper_baza_unit_sand | null;
        _self_all: $mol_wire_dict<string, $giper_baza_unit_sand | null>;
        /** Generates unique local id base on optional idea number or random. */
        self_make(idea?: number): $giper_baza_link;
        /** Makes new Area based on Idea or random. Once transfers rights from this Land. */
        area_make(idea?: number): $giper_baza_land;
        sync_rights(): $mol_wire_atom<unknown, [], void> | undefined;
        inherit(): void;
        /** Data root */
        Data<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): InstanceType<Pawn>;
        /** Lands for inheritance */
        Tine(): $giper_baza_list_link;
        /** High level representation of stored data */
        Pawn<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): $giper_baza_fund<InstanceType<Pawn>>;
        /** Total count of Units inside Land. */
        total(): number;
        king_pass(): $giper_baza_auth_pass;
        /** Rights level of Pass for Land. */
        pass_rank(pass: $giper_baza_auth_pass | null, next?: typeof $giper_baza_rank.Value): typeof $giper_baza_rank.Value;
        lord_tier(lord: $giper_baza_link): $giper_baza_rank_tier;
        lord_rate(lord: $giper_baza_link): $giper_baza_rank_rate;
        /** Rights level of Lord for Land. Works only when Pass for Lord exists in Land. */
        lord_rank(lord: $giper_baza_link | null, next?: typeof $giper_baza_rank.Value): number & {
            $giper_baza_rank: number;
        };
        /** Picks units between Face and current state. */
        diff_units(skip_faces?: $giper_baza_face_map): $giper_baza_unit[];
        /** Picks units between Face and current state and make Part. */
        diff_part(skip_faces?: $giper_baza_face_map): $giper_baza_pack_part;
        /** Picks units between Face and current state and make Parts. */
        diff_parts(skip_faces?: $giper_baza_face_map): $giper_baza_pack_parts;
        face_pack(): $giper_baza_pack;
        /** Applies Diff to current state with verification. */
        diff_apply(units: readonly $giper_baza_unit[], skip_load?: 'skip_load'): readonly $giper_baza_unit[] | undefined;
        units_steal(donor: $giper_baza_land): void;
        rank_audit(): void;
        fork(preset?: $giper_baza_rank_preset): $giper_baza_land;
        sand_ordered({ head, peer }: {
            head: $giper_baza_link;
            peer: $giper_baza_link | null;
        }): $giper_baza_unit_sand[];
        join(): void;
        /**
         * Gives access rights to Lord by Auth key.
         * `null` - gives rights for all Peers.
         */
        give(mate_pass: $giper_baza_auth_pass | null, rank: typeof $giper_baza_rank.Value): $giper_baza_unit_gift;
        /** Places data to tree. */
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
        sands_encode(sands: readonly $giper_baza_unit_sand[]): Promise<$giper_baza_unit_sand[]>;
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
    /** Kind of Unit */
    enum $giper_baza_unit_kind {
        /** Unit of data. */
        sand = 252,
        /** Rights/Keys sharing. */
        gift = 253,
        /** Sign for hash list. */
        seal = 254,
        /** Public key. */
        pass = 255
    }
    let $giper_baza_unit_trusted: WeakSet<$giper_baza_unit_base>;
    function $giper_baza_unit_trusted_grant(unit: $giper_baza_unit): void;
    function $giper_baza_unit_trusted_check(unit: $giper_baza_unit): boolean;
    type $giper_baza_unit = $giper_baza_unit_base | $giper_baza_auth_pass;
    /** Order units: lord / seal / gift / sand */
    function $giper_baza_unit_sort(units: readonly $giper_baza_unit[]): $giper_baza_unit[];
    /** Minimal independent stable part of information. */
    class $giper_baza_unit_base extends $mol_buffer {
        /**
         * Compare Seals on timeline ( right - left )
         * Priority: time > lord > tick
         */
        static compare(left: $giper_baza_unit_base | undefined, right: $giper_baza_unit_base | undefined): number;
        static narrow(buf: ArrayBuffer): $giper_baza_auth_pass | $giper_baza_unit_gift | $giper_baza_unit_seal | $giper_baza_unit_sand;
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
        /** Seconds from UNIX epoch */
        time(next?: number): number;
        moment(): $mol_time_moment;
        /** Step in transaction */
        tick(next?: number): number;
        /** Monotonic Real+Logic Time */
        time_tick(next?: number): number;
        _lord: $giper_baza_link | null;
        lord(next?: $giper_baza_link): $giper_baza_link;
        /** Unique number for encryption */
        salt(): Uint8Array<ArrayBuffer>;
        hash(): $giper_baza_link;
        tier_min(): $giper_baza_rank_tier;
        encoded(): boolean;
        _land: null | $giper_baza_land;
        dump(): {};
        inspect(): string;
        toJSON(): string;
        toString(): string;
    }
}

declare namespace $ {
    function $giper_baza_unit_gift_sort(gifts: $giper_baza_unit_gift[]): $giper_baza_unit_gift[];
    /** Given Rank and Secret */
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
    let $giper_baza_unit_seal_limit: number;
    /**  Sign for hash list */
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
        /** Hash for signing. */
        shot(): $giper_baza_link;
        sign(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        work(): number;
        rate_min(): 0 | 8 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
        tier_min(): $giper_baza_rank_tier;
        rank_min(): number;
        path(): string;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    /** Hint how interpret inner Units: term, solo, vals, keys */
    enum $giper_baza_unit_sand_tag {
        /** Itself value. Ignore */
        term = 0,
        /** Value in first sub node. Ignore all after first */
        solo = 64,
        /** List of values */
        vals = 128,
        /** List of keys */
        keys = 192
    }
    /** Data. Actually it's edge between nodes in graph model. */
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
        encoded(): true;
        hash(): $giper_baza_link;
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
        /** Updates Units in storage */
        units_save(diff: $giper_baza_mine_diff): void;
        /** Loads Units from storage */
        units_load(): readonly $giper_baza_unit[];
        /** Loads Ball from storage */
        ball_load(sand: $giper_baza_unit_sand): Uint8Array<ArrayBuffer>;
    }
    let $giper_baza_mine: typeof $giper_baza_mine_temp;
}

declare namespace $ {
    /** Atomic transaction. */
    class $giper_baza_mine_fs_yym_act extends $mol_object2 {
        yym: $giper_baza_mine_fs_yym;
        constructor(yym: $giper_baza_mine_fs_yym);
        transaction: $mol_file_transaction;
        offsets_del: WeakMap<ArrayBuffer, number>;
        offsets_ins: WeakMap<ArrayBuffer, number>;
        /** Stores data and returns offset in file. */
        save(...data: [ArrayBufferView<ArrayBuffer>, ...ArrayBufferView<ArrayBuffer>[]]): number;
        /** Marks slice of file as free. */
        free(data: ArrayBufferView<ArrayBuffer>, size?: number): undefined;
    }
    /** Yin-Yan Mirrors Storage. */
    class $giper_baza_mine_fs_yym extends $mol_object2 {
        /** Yin & Yan mirrors files. */
        readonly sides: [$mol_file, $mol_file];
        /** Memory allocator. */
        pool(reset?: null): $mol_memory_pool;
        /** Offsets of stored buffers. */
        offsets(reset?: null): Map<ArrayBuffer, number>;
        constructor(
        /** Yin & Yan mirrors files. */
        sides: [$mol_file, $mol_file]);
        destructor(): void;
        /** Prepare mirrors to read. */
        load_init(): void;
        /** Load whole data. */
        load(): Uint8Array<ArrayBuffer>;
        /** Safe writes to both mirrors. */
        atomic(task: (act: $giper_baza_mine_fs_yym_act) => void): void;
        /** Prepares mirrors to write. */
        save_init(): void;
        empty(): boolean;
    }
    class $giper_baza_mine_fs extends $giper_baza_mine_temp {
        store(): $giper_baza_mine_fs_yym;
        store_init(): void;
        units_save(diff: $giper_baza_mine_diff): void;
        units_load(): readonly $giper_baza_unit[];
        destructor(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    /** Virtual Pawn that represents contained units as high-level data types. */
    class $giper_baza_pawn extends $mol_object {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        static meta: null | $giper_baza_link;
        /** Standalone part of Glob which syncs separately, have own rights, and contains Units */
        land(): $giper_baza_land;
        /** Land local Pawn id */
        head(): $giper_baza_link;
        /** Link to Land/Lord. */
        land_link(): $giper_baza_link;
        /** Link to Pawn/Land/Lord. */
        link(): $giper_baza_link;
        toJSON(): string;
        /** Returns another representation of this Pawn. */
        cast<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): InstanceType<Pawn>;
        /** Ordered inner alive Pawn. */
        pawns<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn | null): readonly InstanceType<Pawn>[];
        /** All ordered alive Units */
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        /** Ability to make changes by current peer. */
        can_change(): boolean;
        /** Time of last changed unit inside Pawn subtree */
        last_change(): $mol_time_moment | null;
        /** All author Passes of Pawn subtree */
        authors(): $giper_baza_auth_pass[];
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
    /** Reactive convergent list. */
    export class $giper_baza_list_vary extends $giper_baza_pawn {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
        pawn_make<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn>;
        [$mol_dev_format_head](): any[];
    }
    /** Mergeable list of atomic vary type factory */
    export function $giper_baza_list<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        items(next?: readonly ReturnType<Parse>[]): readonly ReturnType<Parse>[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic non empty binaries */
    export class $giper_baza_list_bin extends $giper_baza_list_bin_base {
    }
    const $giper_baza_list_bool_base: (abstract new () => {
        items(next?: readonly (boolean | null)[] | undefined): readonly (boolean | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic booleans */
    export class $giper_baza_list_bool extends $giper_baza_list_bool_base {
    }
    const $giper_baza_list_int_base: (abstract new () => {
        items(next?: readonly (bigint | null)[] | undefined): readonly (bigint | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic int64s */
    export class $giper_baza_list_int extends $giper_baza_list_int_base {
    }
    const $giper_baza_list_real_base: (abstract new () => {
        items(next?: readonly (number | null)[] | undefined): readonly (number | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic float64s */
    export class $giper_baza_list_real extends $giper_baza_list_real_base {
    }
    const $giper_baza_list_link_base_1: (abstract new () => {
        items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic Links */
    export class $giper_baza_list_link extends $giper_baza_list_link_base_1 {
    }
    const $giper_baza_list_str_base: (abstract new () => {
        items(next?: readonly (string | null)[] | undefined): readonly (string | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic strings */
    export class $giper_baza_list_str extends $giper_baza_list_str_base {
    }
    const $giper_baza_list_time_base: (abstract new () => {
        items(next?: readonly ($mol_time_moment | null)[] | undefined): readonly ($mol_time_moment | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic iso8601 time moments */
    export class $giper_baza_list_time extends $giper_baza_list_time_base {
    }
    const $giper_baza_list_dur_base: (abstract new () => {
        items(next?: readonly ($mol_time_duration | null)[] | undefined): readonly ($mol_time_duration | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic iso8601 time durations */
    export class $giper_baza_list_dur extends $giper_baza_list_dur_base {
    }
    const $giper_baza_list_range_base: (abstract new () => {
        items(next?: readonly ($mol_time_interval | null)[] | undefined): readonly ($mol_time_interval | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic iso8601 time intervals */
    export class $giper_baza_list_range extends $giper_baza_list_range_base {
    }
    const $giper_baza_list_json_base: (abstract new () => {
        items(next?: readonly ({} | null)[] | undefined): readonly ({} | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic plain old js objects */
    export class $giper_baza_list_json extends $giper_baza_list_json_base {
    }
    const $giper_baza_list_jsan_base: (abstract new () => {
        items(next?: readonly (readonly any[] | null)[] | undefined): readonly (readonly any[] | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic plain old js arrays */
    export class $giper_baza_list_jsan extends $giper_baza_list_jsan_base {
    }
    const $giper_baza_list_dom_base: (abstract new () => {
        items(next?: readonly (Element | null)[] | undefined): readonly (Element | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic DOMs */
    export class $giper_baza_list_dom extends $giper_baza_list_dom_base {
    }
    const $giper_baza_list_tree_base: (abstract new () => {
        items(next?: readonly ($mol_tree2 | null)[] | undefined): readonly ($mol_tree2 | null)[];
        /** All Vary in the list. */
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        /** Replace sublist by  new one with reconciliation. */
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Unit by Vary. */
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        /** Existence of Vary in the list. */
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        /** Add Vary a the beginning if it doesn't exists. */
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        /** Removes all Vary presence. */
        cut(vary: $giper_baza_vary_type): void;
        /** Moves item from one Seat to another. */
        move(from: number, to: number): void;
        /** Remove item by Seat. */
        wipe(seat: number): void;
        /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Mergeable list of atomic Trees*/
    export class $giper_baza_list_tree extends $giper_baza_list_tree_base {
    }
    export class $giper_baza_list_link_base extends $giper_baza_list_link {
    }
    /** Mergeable List of atomic Links to some Pawn type */
    export function $giper_baza_list_link_to<const Value extends any, Vals extends readonly any[] = readonly $mol_type_result<$mol_type_result<Value>>[]>(Value: Value): {
        new (): {
            /** List of linked Pawns */
            remote_list(next?: Vals): Vals;
            remote_add(item: Vals[number]): void;
            /** Make new Pawn and place it at end. */
            make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): Vals[number];
            items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
            /** All Vary in the list. */
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            /** Replace sublist by  new one with reconciliation. */
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            /** Unit by Vary. */
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            /** Existence of Vary in the list. */
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            /** Add Vary a the beginning if it doesn't exists. */
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            /** Removes all Vary presence. */
            cut(vary: $giper_baza_vary_type): void;
            /** Moves item from one Seat to another. */
            move(from: number, to: number): void;
            /** Remove item by Seat. */
            wipe(seat: number): void;
            /** Add vary at the end and use maked Self as Pawn Head. */
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
    /** Replaces properties of `Base` record by properties from `Over`. */
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    /** Mergeable dictionary Pawn with any keys mapped to any embedded Pawn types */
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        /** List of Vary keys. */
        keys(): readonly $giper_baza_vary_type[];
        /** Inner Pawn by key. */
        dive<Pawn extends typeof $giper_baza_pawn>(key: $giper_baza_vary_type, Pawn: Pawn, auto?: any): InstanceType<Pawn> | null;
        static schema: Record<string, typeof $giper_baza_pawn>;
        /** Mergeable dictionary Pawn with defined keys mapped to different embedded Pawn types */
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
    /** Mergeable dictionary with any keys mapped to any embedded Pawn types */
    function $giper_baza_dict_to<Value extends {
        tag: keyof typeof $giper_baza_unit_sand_tag;
        new (): {};
    }>(Value: Value): {
        new (): {
            Value: Value;
            key(key: $giper_baza_vary_type, auto?: any): InstanceType<Value>;
            /** List of Vary keys. */
            keys(): readonly $giper_baza_vary_type[];
            /** Inner Pawn by key. */
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
        /** Mergeable dictionary Pawn with defined keys mapped to different embedded Pawn types */
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
    /**
     * 48-bit streamable string hash function
     * Based on cyrb53: https://stackoverflow.com/a/52171480
     */
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {
    /** Atomic dynamic register */
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
    /** Atomic narrowed register factory */
    export function $giper_baza_atom<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        /** Get/Set value of Pawn field */
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
        /** Get/Set value of Pawn field */
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
    /** Atomic non empty binary register */
    export class $giper_baza_atom_blob extends $giper_baza_atom_blob_base {
    }
    const $giper_baza_atom_bool_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic boolean register */
    export class $giper_baza_atom_bool extends $giper_baza_atom_bool_base {
    }
    const $giper_baza_atom_bint_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic int64 register */
    export class $giper_baza_atom_bint extends $giper_baza_atom_bint_base {
    }
    const $giper_baza_atom_real_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic float64 register */
    export class $giper_baza_atom_real extends $giper_baza_atom_real_base {
    }
    const $giper_baza_atom_link_base_1: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic some link register */
    export class $giper_baza_atom_link extends $giper_baza_atom_link_base_1 {
    }
    const $giper_baza_atom_text_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic string register */
    export class $giper_baza_atom_text extends $giper_baza_atom_text_base {
        selection(lord: $giper_baza_link, next?: readonly [begin: number, end: number]): number[] | readonly [begin: number, end: number];
    }
    const $giper_baza_atom_time_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic iso8601 time moment register*/
    export class $giper_baza_atom_time extends $giper_baza_atom_time_base {
    }
    const $giper_baza_atom_dura_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic iso8601 time duration register */
    export class $giper_baza_atom_dura extends $giper_baza_atom_dura_base {
    }
    const $giper_baza_atom_span_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic iso8601 time interval register */
    export class $giper_baza_atom_span extends $giper_baza_atom_span_base {
    }
    const $giper_baza_atom_dict_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic plain old js object register */
    export class $giper_baza_atom_dict extends $giper_baza_atom_dict_base {
    }
    const $giper_baza_atom_list_base: (abstract new () => {
        /** Get/Set value of Pawn field */
        val(next?: readonly any[] | null | undefined): readonly any[] | null;
        val_of(peer: $giper_baza_link | null, next?: readonly any[] | null | undefined): readonly any[] | null;
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
    /** Atomic plain old js array register */
    export class $giper_baza_atom_list extends $giper_baza_atom_list_base {
    }
    const $giper_baza_atom_elem_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic DOM register */
    export class $giper_baza_atom_elem extends $giper_baza_atom_elem_base {
    }
    const $giper_baza_atom_tree_base: (abstract new () => {
        /** Get/Set value of Pawn field */
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
    /** Atomic Tree register */
    export class $giper_baza_atom_tree extends $giper_baza_atom_tree_base {
    }
    export class $giper_baza_atom_link_base extends $giper_baza_atom_link {
        static Value: typeof $giper_baza_dict;
    }
    /** Atomic link to some Pawn type register */
    export function $giper_baza_atom_link_to<const Value extends any>(Value: Value): {
        new (): {
            Value: Value;
            /** Target Pawn */
            remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            remote_of(peer: $giper_baza_link | null, next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            /** Target Pawn. Creates if not exists. */
            ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_here(peer: $giper_baza_link | null): void;
            ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
            ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
            /** @deprecated Use ensure( preset ) */
            remote_ensure(preset?: $giper_baza_rank_preset): $mol_type_result<$mol_type_result<Value>> | null;
            /** @deprecated Use ensure( null ) */
            local_ensure(): $mol_type_result<$mol_type_result<Value>> | null;
            /** Get/Set value of Pawn field */
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
    /** State of time moment */
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {
    type $mol_report_handler_type = (event: Event | string, url?: string, line?: number, col?: number, error?: Error) => void;
    const $mol_report_handler_all: Set<$mol_report_handler_type>;
}

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
            /** User time in secs */
            readonly Cpu_user: typeof $giper_baza_stat_ranges;
            /** System time in secs */
            readonly Cpu_system: typeof $giper_baza_stat_ranges;
            /** Memory in MB */
            readonly Mem_used: typeof $giper_baza_stat_ranges;
            /** Memory in MB */
            readonly Mem_free: typeof $giper_baza_stat_ranges;
            /** FS free */
            readonly Fs_free: typeof $giper_baza_stat_ranges;
            /** FS read count */
            readonly Fs_reads: typeof $giper_baza_stat_ranges;
            /** FS write count */
            readonly Fs_writes: typeof $giper_baza_stat_ranges;
            /** Slave sockets count */
            readonly Port_slaves: typeof $giper_baza_stat_ranges;
            /** Masters sockets count */
            readonly Port_masters: typeof $giper_baza_stat_ranges;
            /** Active lands count */
            readonly Land_active: typeof $giper_baza_stat_ranges;
            /** Unhandled errors */
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
    export const $giper_baza_flex_deck_link: $giper_baza_link;
    const $giper_baza_flex_subj_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Name: (auto?: any) => $giper_baza_atom_text | null;
            readonly Icon: (auto?: any) => $giper_baza_atom_text | null;
            readonly Hint: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Name: typeof $giper_baza_atom_text;
            readonly Icon: typeof $giper_baza_atom_text;
            readonly Hint: typeof $giper_baza_atom_text;
        };
    };
    /** Subj - named entity */
    export class $giper_baza_flex_subj extends $giper_baza_flex_subj_base {
        static meta: $giper_baza_link;
        name(next?: string): string;
        icon(next?: string): string;
        hint(next?: string): string;
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
    /** Atomic Link to any Subj */
    export class $giper_baza_flex_subj_link extends $giper_baza_flex_subj_link_base {
    }
    const $giper_baza_flex_meta_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
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
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
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
        };
    };
    /** Meta - schema of entitiy */
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
            /** Key to store value */
            readonly Path: typeof $giper_baza_atom_text;
            /** Type of value */
            readonly Type: typeof $giper_baza_atom_text;
            /** Target Meta */
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
            /** Variants of values */
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
            /** Base value */
            readonly Base: typeof $giper_baza_atom_vary;
        };
    };
    /** Property - attribute of entity */
    export class $giper_baza_flex_prop extends $giper_baza_flex_prop_base {
        static meta: $giper_baza_link;
        path(next?: string): string;
        type(next?: string): string;
        base(next?: $giper_baza_vary_type): string | number | bigint | boolean | Element | Uint8Array<ArrayBuffer> | $mol_tree2 | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | Int32Array<ArrayBuffer> | $giper_baza_link | BigUint64Array<ArrayBuffer> | $mol_time_duration | $mol_time_moment | $mol_time_interval | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | readonly $giper_baza_vary_type[] | Readonly<{
            [x: string]: $giper_baza_vary_type;
        }> | null;
        kind(next?: $giper_baza_flex_meta): $giper_baza_flex_meta | null;
        enum(next?: $giper_baza_list_vary): $giper_baza_list_vary | null;
    }
    const $giper_baza_flex_deck_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
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
    /** Deck - set of schemes and types */
    export class $giper_baza_flex_deck extends $giper_baza_flex_deck_base {
        static meta: $giper_baza_link;
        meta_new(key: string, icon: string, hint: string): $giper_baza_flex_meta;
        meta_for(Meta: typeof $giper_baza_flex_subj, icon: string, hint: string): $giper_baza_flex_meta;
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
    /** Seed - global network config */
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
    /** Peer - network peering info */
    export class $giper_baza_flex_peer extends $giper_baza_flex_peer_base {
        static meta: $giper_baza_link;
        stat(auto?: any): $giper_baza_app_stat | null;
        urls(next?: string[]): string[];
    }
    type Point = readonly [head: string, x: number, y: number];
    type Selection = readonly [from: Point, to: Point];
    const $giper_baza_flex_user_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Caret: (auto?: any) => $giper_baza_atom_list | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Caret: typeof $giper_baza_atom_list;
        };
    };
    /** User - human profile */
    export class $giper_baza_flex_user extends $giper_baza_flex_user_base {
        static meta: $giper_baza_link;
        caret(next?: Selection): Selection | null;
    }
    /** Makes new Seed with Deck */
    export function $giper_baza_flex_init(this: $): $giper_baza_flex_seed;
    export {};
}

declare namespace $ {
    /** Whole global graph database which contains Lands. */
    class $giper_baza_glob extends $mol_object {
        static lands_touched: $mol_wire_set<string>;
        /** Glob synchronizer. */
        static yard(): $giper_baza_yard;
        /** Land where Lord is King. Contains only main info */
        static home<Home extends typeof $giper_baza_flex_subj = typeof $giper_baza_flex_subj>(Home?: Home): InstanceType<Home>;
        static king_grab(preset?: $giper_baza_rank_preset): $giper_baza_auth;
        static land_grab(preset?: $giper_baza_rank_preset): $giper_baza_land;
        /** Standalone part of Glob which syncs separately, have own rights, and contains Units */
        static Land(link: $giper_baza_link): $giper_baza_land;
        /** High level representation of stored data. */
        static Pawn<Pawn extends typeof $giper_baza_pawn>(link: $giper_baza_link, Pawn: Pawn): InstanceType<Pawn>;
        static Seed(): $giper_baza_flex_seed;
        static boot(): void;
        static apply_pack(pack: $giper_baza_pack): void;
        static apply_parts(parts: $giper_baza_pack_parts): void;
    }
}

declare namespace $ {
    /** Glob synchronizer */
    class $giper_baza_yard extends $mol_object {
        /** Whole global graph database which contains Lands */
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
    class $giper_baza_app_home extends $giper_baza_flex_peer {
        init(): void;
        tick(): void;
    }
}

declare namespace $ {
    class $giper_baza_app_home_node extends $giper_baza_app_home {
        init(): void;
    }
}

declare namespace $ {
    class $giper_baza_app_node extends $mol_rest_resource_fs {
        link(): $giper_baza_app_node_link;
        _protocols: string[];
        OPEN(msg: $mol_rest_message): string;
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
