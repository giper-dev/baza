#!/usr/bin/env node
"use strict";
var exports = void 0;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
    class Stack extends Array {
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.stale;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    if (!Symbol.dispose)
        Symbol.dispose = Symbol('Symbol.dispose');
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || this.constructor.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        [Symbol.dispose]() {
            this.destructor();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_shade(cursor)
                : $mol_dev_format_shade(this[Symbol.toStringTag], cursor), $mol_dev_format_auto(this.cache));
        }
        [$mol_dev_format_body]() { return null; }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        const put = (v) => {
                            if (this.cache === result)
                                this.absorb();
                            return v;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            $mol_wire_fiber.planning.delete(this);
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            return this.update($mol_maybe(value), ...path)[0];
        }
        update(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.flatMap((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.update(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(...this.struct(type, []).update(value, ...path.slice(1)));
                }
                return [this.clone(sub)];
            }
            else if (typeof type === 'number') {
                const ins = (this.kids[type] || this.list([]))
                    .update(value, ...path.slice(1));
                return [this.clone([
                        ...this.kids.slice(0, type),
                        ...ins,
                        ...this.kids.slice(type + 1),
                    ])];
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .flatMap(item => item.update(value, ...path.slice(1)));
                return [this.clone(kids)];
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_array_chunks(array, rule) {
        const br = typeof rule === 'number' ? (_, i) => i % rule === 0 : rule;
        let chunk = [];
        const chunks = [];
        for (let i = 0; i < array.length; ++i) {
            const item = array[i];
            if (br(item, i)) {
                if (chunk.length)
                    chunks.push(chunk);
                chunk = [];
            }
            chunk.push(item);
        }
        if (chunk.length)
            chunks.push(chunk);
        return chunks;
    }
    $.$mol_array_chunks = $mol_array_chunks;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            const codes = [...buf].map(b => b.toString(16).toUpperCase().padStart(2, '0'));
            const str = $mol_array_chunks(codes, 8).map(c => c.join(' ')).join('\n');
            return $mol_tree2.data(str, [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
        destructor() {
            super.destructor();
            this.cursor = $mol_wire_cursor.final;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_rest_code;
    (function ($mol_rest_code) {
        $mol_rest_code[$mol_rest_code["Continue"] = 100] = "Continue";
        $mol_rest_code[$mol_rest_code["Switching protocols"] = 101] = "Switching protocols";
        $mol_rest_code[$mol_rest_code["Processing"] = 102] = "Processing";
        $mol_rest_code[$mol_rest_code["OK"] = 200] = "OK";
        $mol_rest_code[$mol_rest_code["Created"] = 201] = "Created";
        $mol_rest_code[$mol_rest_code["Accepted"] = 202] = "Accepted";
        $mol_rest_code[$mol_rest_code["Non-Authoritative Information"] = 203] = "Non-Authoritative Information";
        $mol_rest_code[$mol_rest_code["No Content"] = 204] = "No Content";
        $mol_rest_code[$mol_rest_code["Reset Content"] = 205] = "Reset Content";
        $mol_rest_code[$mol_rest_code["Partial Content"] = 206] = "Partial Content";
        $mol_rest_code[$mol_rest_code["Multi Status"] = 207] = "Multi Status";
        $mol_rest_code[$mol_rest_code["Already Reported"] = 208] = "Already Reported";
        $mol_rest_code[$mol_rest_code["IM Used"] = 226] = "IM Used";
        $mol_rest_code[$mol_rest_code["Multiple Choices"] = 300] = "Multiple Choices";
        $mol_rest_code[$mol_rest_code["Moved Permanently"] = 301] = "Moved Permanently";
        $mol_rest_code[$mol_rest_code["Found"] = 302] = "Found";
        $mol_rest_code[$mol_rest_code["See Other"] = 303] = "See Other";
        $mol_rest_code[$mol_rest_code["Not Modified"] = 304] = "Not Modified";
        $mol_rest_code[$mol_rest_code["Use Proxy"] = 305] = "Use Proxy";
        $mol_rest_code[$mol_rest_code["Temporary Redirect"] = 307] = "Temporary Redirect";
        $mol_rest_code[$mol_rest_code["Bad Request"] = 400] = "Bad Request";
        $mol_rest_code[$mol_rest_code["Unauthorized"] = 401] = "Unauthorized";
        $mol_rest_code[$mol_rest_code["Payment Required"] = 402] = "Payment Required";
        $mol_rest_code[$mol_rest_code["Forbidden"] = 403] = "Forbidden";
        $mol_rest_code[$mol_rest_code["Not Found"] = 404] = "Not Found";
        $mol_rest_code[$mol_rest_code["Method Not Allowed"] = 405] = "Method Not Allowed";
        $mol_rest_code[$mol_rest_code["Not Acceptable"] = 406] = "Not Acceptable";
        $mol_rest_code[$mol_rest_code["Proxy Authentication Required"] = 407] = "Proxy Authentication Required";
        $mol_rest_code[$mol_rest_code["Request Timeout"] = 408] = "Request Timeout";
        $mol_rest_code[$mol_rest_code["Conflict"] = 409] = "Conflict";
        $mol_rest_code[$mol_rest_code["Gone"] = 410] = "Gone";
        $mol_rest_code[$mol_rest_code["Length Required"] = 411] = "Length Required";
        $mol_rest_code[$mol_rest_code["Precondition Failed"] = 412] = "Precondition Failed";
        $mol_rest_code[$mol_rest_code["Request Entity Too Large"] = 413] = "Request Entity Too Large";
        $mol_rest_code[$mol_rest_code["Request URI Too Long"] = 414] = "Request URI Too Long";
        $mol_rest_code[$mol_rest_code["Unsupported Media Type"] = 415] = "Unsupported Media Type";
        $mol_rest_code[$mol_rest_code["Requested Range Not Satisfiable"] = 416] = "Requested Range Not Satisfiable";
        $mol_rest_code[$mol_rest_code["Expectation Failed"] = 417] = "Expectation Failed";
        $mol_rest_code[$mol_rest_code["Teapot"] = 418] = "Teapot";
        $mol_rest_code[$mol_rest_code["Unprocessable Entity"] = 422] = "Unprocessable Entity";
        $mol_rest_code[$mol_rest_code["Locked"] = 423] = "Locked";
        $mol_rest_code[$mol_rest_code["Failed Dependency"] = 424] = "Failed Dependency";
        $mol_rest_code[$mol_rest_code["Upgrade Required"] = 426] = "Upgrade Required";
        $mol_rest_code[$mol_rest_code["Precondition Required"] = 428] = "Precondition Required";
        $mol_rest_code[$mol_rest_code["Too Many Requests"] = 429] = "Too Many Requests";
        $mol_rest_code[$mol_rest_code["Request Header Fields Too Large"] = 431] = "Request Header Fields Too Large";
        $mol_rest_code[$mol_rest_code["Unavailable For Legal Reasons"] = 451] = "Unavailable For Legal Reasons";
        $mol_rest_code[$mol_rest_code["Internal Server Error"] = 500] = "Internal Server Error";
        $mol_rest_code[$mol_rest_code["Not Implemented"] = 501] = "Not Implemented";
        $mol_rest_code[$mol_rest_code["Bad Gateway"] = 502] = "Bad Gateway";
        $mol_rest_code[$mol_rest_code["Service Unavailable"] = 503] = "Service Unavailable";
        $mol_rest_code[$mol_rest_code["Gateway Timeout"] = 504] = "Gateway Timeout";
        $mol_rest_code[$mol_rest_code["HTTP Version Not Supported"] = 505] = "HTTP Version Not Supported";
        $mol_rest_code[$mol_rest_code["Insufficient Storage"] = 507] = "Insufficient Storage";
        $mol_rest_code[$mol_rest_code["Loop Detected"] = 508] = "Loop Detected";
        $mol_rest_code[$mol_rest_code["Not Extended"] = 510] = "Not Extended";
        $mol_rest_code[$mol_rest_code["Network Authentication Required"] = 511] = "Network Authentication Required";
        $mol_rest_code[$mol_rest_code["Network Read Timeout Error"] = 598] = "Network Read Timeout Error";
        $mol_rest_code[$mol_rest_code["Network Connect Timeout Error"] = 599] = "Network Connect Timeout Error";
    })($mol_rest_code = $.$mol_rest_code || ($.$mol_rest_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const mod = require('module');
    const internals = mod.builtinModules;
    function $node_internal_check(name) {
        if (name.startsWith('node:'))
            return true;
        return internals.includes(name);
    }
    $.$node_internal_check = $node_internal_check;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const catched = new WeakSet();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.has(error))
            return false;
        catched.add(error);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const path = require('path');
    const mod = require('module');
    const localRequire = mod.createRequire(path.join(process.cwd(), 'package.json'));
    function $node_autoinstall(name) {
        try {
            localRequire.resolve(name);
        }
        catch {
            this.$mol_run.spawn({ command: ['npm', 'install', '--omit=dev', name], dir: '.' });
            try {
                this.$mol_run.spawn({ command: ['npm', 'install', '--omit=dev', '@types/' + name], dir: '.' });
            }
            catch (e) {
                if (this.$mol_promise_like(e))
                    this.$mol_fail_hidden(e);
                this.$mol_fail_log(e);
            }
        }
    }
    $.$node_autoinstall = $node_autoinstall;
})($ || ($ = {}));

;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        if ($.$node_internal_check(name))
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        $.$node_autoinstall(name);
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        String(e.stack),
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_run_error extends $mol_error_mix {
    }
    $.$mol_run_error = $mol_run_error;
    $.$mol_run_spawn = (...args) => $node['child_process'].spawn(...args);
    $.$mol_run_spawn_sync = (...args) => $node['child_process'].spawnSync(...args);
    class $mol_run extends $mol_object {
        static async_enabled() {
            return Boolean(this.$.$mol_env()['MOL_RUN_ASYNC']);
        }
        static spawn(options) {
            const sync = !this.async_enabled() || !Boolean($mol_wire_auto());
            const env = options.env ?? this.$.$mol_env();
            return $mol_wire_sync(this).spawn_async({ ...options, sync, env });
        }
        static spawn_async({ dir, sync, timeout, command, env }) {
            const args_raw = typeof command === 'string' ? command.split(' ') : command;
            const [app, ...args] = args_raw;
            const opts = { shell: true, cwd: dir, env };
            const log_object = {
                place: `${this}.spawn()`,
                message: 'Run',
                command: args_raw.join(' '),
                dir: $node.path.relative('', dir),
            };
            if (sync) {
                this.$.$mol_log3_come({
                    hint: 'Run inside fiber',
                    ...log_object
                });
                let error;
                let res;
                try {
                    res = this.$.$mol_run_spawn_sync(app, args, opts);
                    error = res.error;
                }
                catch (err) {
                    error = err;
                }
                if (!res || error || res.status) {
                    throw new $mol_run_error(this.error_message(res), { ...log_object, status: res?.status, signal: res?.signal }, ...(error ? [error] : []));
                }
                return res;
            }
            let sub;
            try {
                sub = this.$.$mol_run_spawn(app, args, {
                    ...opts,
                    stdio: ['pipe', 'inherit', 'inherit'],
                });
            }
            catch (error) {
                throw new $mol_run_error(this.error_message(undefined), log_object, error);
            }
            const pid = sub.pid ?? 0;
            this.$.$mol_log3_come({
                ...log_object,
                pid,
            });
            let timeout_kill = false;
            let timer;
            const std_data = [];
            const error_data = [];
            const add = (std_chunk, error_chunk) => {
                if (std_chunk)
                    std_data.push(std_chunk);
                if (error_chunk)
                    error_data.push(error_chunk);
                if (!timeout)
                    return;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const signal = timeout_kill ? 'SIGKILL' : 'SIGTERM';
                    timeout_kill = true;
                    add();
                    sub.kill(signal);
                }, timeout);
            };
            add();
            sub.stdout?.on('data', data => add(data));
            sub.stderr?.on('data', data => add(undefined, data));
            const result_promise = new Promise((done, fail) => {
                const close = (error, status = null, signal = null) => {
                    if (!timer && timeout)
                        return;
                    clearTimeout(timer);
                    timer = undefined;
                    const res = {
                        pid,
                        signal,
                        get stdout() { return Buffer.concat(std_data); },
                        get stderr() { return Buffer.concat(error_data); }
                    };
                    if (error || status || timeout_kill)
                        return fail(new $mol_run_error(this.error_message(res) + (timeout_kill ? ', timeout' : ''), { ...log_object, pid, status, signal, timeout_kill }, ...error ? [error] : []));
                    this.$.$mol_log3_done({
                        ...log_object,
                        pid,
                    });
                    done(res);
                };
                sub.on('disconnect', () => close(new Error('Disconnected')));
                sub.on('error', err => close(err));
                sub.on('exit', (status, signal) => close(null, status, signal));
            });
            return Object.assign(result_promise, { destructor: () => {
                    clearTimeout(timer);
                    sub.kill('SIGKILL');
                } });
        }
        static error_message(res) {
            return res?.stderr.toString() || res?.stdout.toString() || 'Run error';
        }
    }
    $.$mol_run = $mol_run;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let buf = new Uint8Array(2 ** 12);
    function $mol_charset_buffer(size) {
        if (buf.byteLength < size)
            buf = new Uint8Array(size);
        return buf;
    }
    $.$mol_charset_buffer = $mol_charset_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_charset_encode(str) {
        const buf = $mol_charset_buffer(str.length * 3);
        return buf.slice(0, $mol_charset_encode_to(str, buf));
    }
    $.$mol_charset_encode = $mol_charset_encode;
    function $mol_charset_encode_to(str, buf, from = 0) {
        let pos = from;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80) {
                buf[pos++] = code;
            }
            else if (code < 0x800) {
                buf[pos++] = 0xc0 | (code >> 6);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else if (code < 0xd800 || code >= 0xe000) {
                buf[pos++] = 0xe0 | (code >> 12);
                buf[pos++] = 0x80 | ((code >> 6) & 0x3f);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else {
                const point = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
                buf[pos++] = 0xf0 | (point >> 18);
                buf[pos++] = 0x80 | ((point >> 12) & 0x3f);
                buf[pos++] = 0x80 | ((point >> 6) & 0x3f);
                buf[pos++] = 0x80 | (point & 0x3f);
            }
        }
        return pos - from;
    }
    $.$mol_charset_encode_to = $mol_charset_encode_to;
    function $mol_charset_encode_size(str) {
        let size = 0;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80)
                size += 1;
            else if (code < 0x800)
                size += 2;
            else if (code < 0xd800 || code >= 0xe000)
                size += 3;
            else
                size += 4;
        }
        return size;
    }
    $.$mol_charset_encode_size = $mol_charset_encode_size;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port extends $mol_object {
        send_code(code) { }
        send_type(mime) { }
        send_data(data) {
            if (data === null)
                return this.send_nil();
            if (typeof data === 'string')
                return this.send_text(data);
            if (data instanceof Uint8Array)
                return this.send_bin(data);
            if (data instanceof $mol_dom_context.Element)
                return this.send_dom(data);
            return this.send_json(data);
        }
        send_nil() {
            this.send_code(204);
        }
        send_bin(data) {
            this.send_code(200);
            this.send_type('application/octet-stream');
        }
        send_text(data) {
            this.send_code(200);
            this.send_type('text/plain;charset=utf-8');
            this.send_bin($mol_charset_encode(data));
        }
        send_json(data) {
            this.send_code(200);
            this.send_type('application/json');
            this.send_text(JSON.stringify(data));
        }
        send_dom(data) {
            this.send_code(200);
            this.send_type('text/html;charset=utf-8');
            this.send_text($mol_dom_serialize(data));
        }
        static make(config) {
            return super.make(config);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_data", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_text", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_json", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_dom", null);
    __decorate([
        ($mol_action)
    ], $mol_rest_port, "make", null);
    $.$mol_rest_port = $mol_rest_port;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof TypedArray)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            for (let cursor = this.pub_from; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                if (pub && pub instanceof $mol_wire_task) {
                    pub.destructor();
                }
            }
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_message extends $mol_object {
        port;
        method() {
            return 'POST';
        }
        uri() {
            return new URL(`rest://localhost/`);
        }
        type() {
            return 'application/octet-stream';
        }
        data() {
            return null;
        }
        bin() {
            let data = this.data();
            if (data instanceof Uint8Array)
                return data;
            if (data instanceof $mol_dom_context.Element)
                data = $mol_dom_serialize(data);
            if (typeof data !== 'string')
                data = JSON.stringify(data);
            return $mol_charset_encode(data);
        }
        text() {
            const data = this.data();
            if (typeof data === 'string')
                return data;
            if (data instanceof Uint8Array)
                return $mol_charset_decode(data);
            if (data instanceof $mol_dom_context.Element)
                return $mol_dom_serialize(data);
            return JSON.stringify(data);
        }
        reply(data, meta) {
            if (meta?.code)
                this.port.send_code(meta.code);
            if (meta?.type)
                this.port.send_type(meta.type);
            this.port.send_data(data);
        }
        route(uri) {
            return $mol_rest_message.make({
                port: this.port,
                method: () => this.method(),
                uri: $mol_const(uri),
                type: () => this.type(),
                data: () => this.data(),
            });
        }
        derive(method, data) {
            return $mol_rest_message.make({
                port: this.port,
                method: $mol_const(method),
                uri: () => this.uri(),
                data: $mol_const(data),
            });
        }
        static make(config) {
            return super.make(config);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "method", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "data", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "bin", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_rest_message.prototype, "route", null);
    __decorate([
        $mol_action
    ], $mol_rest_message.prototype, "derive", null);
    __decorate([
        ($mol_action)
    ], $mol_rest_message, "make", null);
    $.$mol_rest_message = $mol_rest_message;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.link(next));
        }
        static commit() { }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            const prefix = this.prefix;
            const dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const makeURL = $mol_wire_sync((url, base) => new URL(url, base));
    class $mol_rest_resource extends $mol_object {
        REQUEST(msg) {
            const [path, nest, tail] = /^\/([a-zA-Z][^/]*)(.*)$/.exec(msg.uri().pathname) ?? [];
            const field = nest?.toLowerCase();
            if (field && field in this && !(field in $mol_rest_resource.prototype)) {
                const uri2 = makeURL(msg.uri().toString());
                uri2.pathname = tail ?? msg.uri().pathname;
                const msg2 = msg.route(uri2);
                return this[field]().REQUEST(msg2);
            }
            return $mol_wire_sync(this)[msg.method()](msg);
        }
        OPEN(msg) { }
        CLOSE(msg) { }
        HEAD(msg) { }
        GET(msg) { }
        PUT(msg) { }
        PATCH(msg) { }
        POST(msg) { }
        DELETE(msg) { }
        _auto() { }
        static port(port) {
            const server = $mol_rest_server.make({
                port: () => port,
            });
            server.root(this.make({}));
            server.start();
            new $mol_wire_atom(`${server.root()}._auto<>`, () => {
                try {
                    server.root()._auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }).fresh();
            return server;
        }
        static serve() {
            const port = Number(this.$.$mol_state_arg.value('port'));
            return port ? this.port(port) : null;
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_resource.prototype, "REQUEST", null);
    __decorate([
        $mol_mem_key
    ], $mol_rest_resource, "port", null);
    $.$mol_rest_resource = $mol_rest_resource;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        flush() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let file_modes;
    (function (file_modes) {
        file_modes[file_modes["create"] = $node.fs.constants.O_CREAT] = "create";
        file_modes[file_modes["exists_truncate"] = $node.fs.constants.O_TRUNC] = "exists_truncate";
        file_modes[file_modes["exists_fail"] = $node.fs.constants.O_EXCL] = "exists_fail";
        file_modes[file_modes["read_only"] = $node.fs.constants.O_RDONLY] = "read_only";
        file_modes[file_modes["write_only"] = $node.fs.constants.O_WRONLY] = "write_only";
        file_modes[file_modes["read_write"] = $node.fs.constants.O_RDWR] = "read_write";
        file_modes[file_modes["append"] = $node.fs.constants.O_APPEND] = "append";
    })(file_modes || (file_modes = {}));
    function mode_mask(modes) {
        return modes.reduce((res, mode) => res | file_modes[mode], 0);
    }
    class $mol_file_transaction_node extends $mol_file_transaction {
        descr() {
            $mol_wire_solid();
            return $node.fs.openSync(this.path(), mode_mask(this.modes()));
        }
        write({ buffer, offset = 0, length, position = null }) {
            if (Array.isArray(buffer)) {
                return $node.fs.writevSync(this.descr(), buffer, position ?? undefined);
            }
            if (typeof buffer === 'string') {
                return $node.fs.writeSync(this.descr(), buffer, position);
            }
            length = length ?? buffer.byteLength;
            return $node.fs.writeSync(this.descr(), buffer, offset, length, position);
        }
        truncate(size) {
            $node.fs.ftruncateSync(this.descr());
        }
        read() {
            return $mol_file_node_buffer_normalize($node.fs.readFileSync(this.descr()));
        }
        flush() {
            $node.fs.fsyncSync(this.descr());
        }
        close() {
            $node.fs.closeSync(this.descr());
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_transaction_node.prototype, "descr", null);
    $.$mol_file_transaction_node = $mol_file_transaction_node;
    $.$mol_file_transaction = $mol_file_transaction_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function $mol_file_node_buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    $.$mol_file_node_buffer_normalize = $mol_file_node_buffer_normalize;
    class $mol_file_node extends $mol_file {
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher(reset) {
            const path = this.path();
            const root = this.root();
            if (!root && !this.exists())
                return super.watcher();
            let watcher;
            try {
                watcher = $node.fs.watch(path);
            }
            catch (error) {
                if (!(error instanceof Error))
                    error = new Error('Unknown watch error', { cause: error });
                error.message += '\n' + path;
                if (root || error.code !== 'ENOENT') {
                    this.$.$mol_fail_log(error);
                }
                return super.watcher();
            }
            watcher.on('change', (type, name) => {
                if (!name)
                    return;
                const path = $node.path.join(this.path(), name.toString());
                this.constructor.changed_add(type, path);
            });
            watcher.on('error', e => this.$.$mol_fail_log(e));
            let destructed = false;
            watcher.on('close', () => {
                if (!destructed)
                    setTimeout(() => $mol_wire_async(this).watcher(null), 500);
            });
            return {
                destructor() {
                    destructed = true;
                    watcher.close();
                }
            };
        }
        info(path) {
            try {
                return stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    if (error.code === 'ENOENT')
                        return null;
                    if (error.code === 'EPERM')
                        return null;
                    error.message += '\n' + path;
                    this.$.$mol_fail_hidden(error);
                }
            }
            return null;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path, { recursive: true });
                return null;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'EEXIST')
                        return null;
                    e.message += '\n' + path;
                    this.$.$mol_fail_hidden(e);
                }
            }
        }
        copy(to) {
            $node.fs.copyFileSync(this.path(), to);
        }
        drop() {
            $node.fs.unlinkSync(this.path());
        }
        read() {
            const path = this.path();
            try {
                return $mol_file_node_buffer_normalize($node.fs.readFileSync(path));
            }
            catch (error) {
                if (!$mol_promise_like(error)) {
                    error.message += '\n' + path;
                }
                $mol_fail_hidden(error);
            }
        }
        write(buffer) {
            const path = this.path();
            try {
                $node.fs.writeFileSync(path, buffer);
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    error.message += '\n' + path;
                }
                return this.$.$mol_fail_hidden(error);
            }
        }
        kids() {
            const path = this.path();
            try {
                const kids = $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
                return kids;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'ENOENT')
                        return [];
                    e.message += '\n' + path;
                }
                $mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor
                .relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        readable(opts) {
            const { Readable } = $node['node:stream'];
            const stream = $node.fs.createReadStream(this.path(), {
                flags: 'r',
                autoClose: true,
                start: opts?.start,
                end: opts?.end,
                encoding: 'binary',
            });
            return Readable.toWeb(stream);
        }
        writable(opts) {
            const { Writable } = $node['node:stream'];
            const stream = $node.fs.createWriteStream(this.path(), {
                flags: 'w+',
                autoClose: true,
                start: opts?.start,
                encoding: 'binary',
            });
            return Writable.toWeb(stream);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "info", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "copy", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "drop", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "read", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "write", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node.prototype, "readable", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "writable", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_file_extensions = {
        'css': 'text/css;charset=utf-8',
        'csv': 'text/csv;charset=utf-8',
        'htm': 'text/html;charset=utf-8',
        'html': 'text/html;charset=utf-8',
        'ics': 'text/calendar;charset=utf-8',
        'js': 'text/javascript;charset=utf-8',
        'jsx': 'text/javascript;charset=utf-8',
        'md': 'text/plain;charset=utf-8',
        'mjs': 'text/javascript;charset=utf-8',
        'ts': 'text/typescript;charset=utf-8',
        'tsx': 'text/typescript;charset=utf-8',
        'txt': 'text/plain;charset=utf-8',
        'aac': 'audio/aac',
        'mid': 'audio/midi',
        'midi': 'audio/midi',
        'mp3': 'audio/mpeg',
        'oga': 'audio/ogg',
        'opus': 'audio/opus',
        'wav': 'audio/wav',
        'weba': 'audio/webm',
        'apng': 'image/apng',
        'avif': 'image/avif',
        'bmp': 'image/bmp',
        'gif': 'image/gif',
        'ico': 'image/vnd.microsoft.icon',
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'svg': 'image/svg+xml',
        'tiff': 'image/tiff',
        'tif': 'image/tiff',
        'webp': 'image/webp',
        'avi': 'video/x-msvideo',
        'mpeg': 'video/mpeg',
        'mp4': 'video/mp4',
        'ogv': 'video/ogg',
        'webm': 'video/webm',
        '3gp': 'video/3gpp',
        '3g2': 'video/3gpp2',
        'otf': 'font/otf',
        'ttf': 'font/ttf',
        'woff': 'font/woff',
        'woff2': 'font/woff2',
        'abw': 'application/x-abiword',
        'arc': 'application/x-freearc',
        'azw': 'application/vnd.amazon.ebook',
        'bin': 'application/octet-stream',
        'bz': 'application/x-bzip',
        'bz2': 'application/x-bzip2',
        'cda': 'application/x-cdf',
        'crus': 'application/x-crus',
        'csh': 'application/x-csh',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'eot': 'application/vnd.ms-fontobject',
        'epub': 'application/epub+zip',
        'gz': 'application/gzip',
        'jar': 'application/java-archive',
        'json': 'application/json',
        'jsonld': 'application/ld+json',
        'map': 'application/json',
        'mpkg': 'application/vnd.apple.installer+xml',
        'odp': 'application/vnd.oasis.opendocument.presentation',
        'ods': 'application/vnd.oasis.opendocument.spreadsheet',
        'odt': 'application/vnd.oasis.opendocument.text',
        'ogx': 'application/ogg',
        'pdf': 'application/pdf',
        'php': 'application/x-httpd-php',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'rar': 'application/vnd.rar',
        'rtf': 'application/rtf',
        'sh': 'application/x-sh',
        'tar': 'application/x-tar',
        'tree': 'application/x-tree',
        'vsd': 'application/vnd.visio',
        'xhtml': 'application/xhtml+xml',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'xml': 'application/xml',
        'xul': 'application/vnd.mozilla.xul+xml',
        'zip': 'application/zip',
        '7z': 'application/x-7z-compressed',
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_http extends $mol_rest_port {
        output;
        send_code(code) {
            if (this.output.writableEnded)
                return;
            if (this.output.statusCode !== 400)
                return;
            this.output.statusCode = code;
        }
        send_type(mime) {
            if (this.output.writableEnded)
                return;
            if (this.output.getHeader('content-type'))
                return;
            this.output.setHeader('content-type', mime);
        }
        send_bin(data) {
            if (this.output.writableEnded)
                return;
            super.send_bin(data);
            this.output.write(data);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_http.prototype, "send_code", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_http.prototype, "send_type", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_http.prototype, "send_bin", null);
    $.$mol_rest_port_http = $mol_rest_port_http;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_message_http extends $mol_rest_message {
        input;
        method() {
            return this.input.method ?? super.method();
        }
        uri() {
            const addr = this.input.socket?.localAddress ?? '::1';
            const port = this.input.socket?.localPort ?? '80';
            return new URL(this.input.url, `http://[${addr}]:${port}/`);
        }
        type() {
            return (this.input.headers['content-type'] ?? 'application/octet-stream');
        }
        data() {
            const consume = $mol_wire_sync($node['stream/consumers']);
            if (this.type().startsWith('text/')) {
                const text = consume.text(this.input);
                if (this.type() === 'text/html') {
                    return $mol_dom_parse(text, 'application/xhtml+xml').documentElement;
                }
                return text;
            }
            else {
                if (this.type() === 'application/json') {
                    return consume.json(this.input);
                }
                else {
                    return new Uint8Array(consume.arrayBuffer(this.input));
                }
            }
        }
        route(uri) {
            return $mol_rest_message_http.make({
                port: this.port,
                input: this.input,
                uri: $mol_const(uri),
                data: () => this.data(),
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "method", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "data", null);
    __decorate([
        $mol_action
    ], $mol_rest_message_http.prototype, "route", null);
    $.$mol_rest_message_http = $mol_rest_message_http;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
    $.$mol_rest_port_ws = $mol_rest_port_ws;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        return src.toBase64();
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        const buf = Buffer.isBuffer(str) ? str : Buffer.from(str);
        return buf.toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_encode = $mol_base64_encode_node;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        return Uint8Array.fromBase64(base64);
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_decode = $mol_base64_decode_node;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_ae_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, 'æ').replace(/\//g, 'Æ').replace(/=/g, '');
    }
    $.$mol_base64_ae_encode = $mol_base64_ae_encode;
    function $mol_base64_ae_decode(str) {
        return $mol_base64_decode(str.replace(/æ/g, '+').replace(/Æ/g, '/'));
    }
    $.$mol_base64_ae_decode = $mol_base64_ae_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_buffer extends DataView {
        [Symbol.toStringTag] = this.constructor.name + '<>';
        static from(array) {
            if (typeof array === 'number')
                array = new Uint8Array(array);
            if (typeof array === 'string')
                array = $mol_base64_ae_decode(array);
            if (!ArrayBuffer.isView(array))
                array = new Uint8Array(array);
            return new this(array.buffer, array.byteOffset, array.byteLength);
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        getUint48(offset, LE = false) {
            if (offset % 4) {
                return this.getUint16(offset, LE) + this.getUint32(offset + 2, LE) * 2 ** 16;
            }
            else {
                return this.getUint32(offset, LE) + this.getUint16(offset + 4, LE) * 2 ** 32;
            }
        }
        setUint48(offset, value, LE = false) {
            if (offset % 4) {
                this.setUint16(offset, value & ((1 << 16) - 1), LE);
                this.setUint32(offset + 2, (value / 2 ** 16) | 0, LE);
            }
            else {
                this.setUint32(offset, value | 0, LE);
                this.setUint16(offset + 4, (value / 2 ** 32) | 0, LE);
            }
        }
        int8(offset, next) {
            if (next === undefined)
                return this.getInt8(offset);
            if (next >= -(2 ** 7) && next < 2 ** 7)
                return this.setInt8(offset, next), next;
            $mol_fail(new Error(`Wrong int8 value ${next}`));
        }
        uint8(offset, next) {
            if (next === undefined)
                return this.getUint8(offset);
            if (next >= 0 && next < 2 ** 8)
                return this.setUint8(offset, next), next;
            $mol_fail(new Error(`Wrong uint8 value ${next}`));
        }
        int16(offset, next) {
            if (next === undefined)
                return this.getInt16(offset, true);
            if (next >= -(2 ** 15) && next < 2 ** 15)
                return this.setInt16(offset, next, true), next;
            $mol_fail(new Error(`Wrong int16 value ${next}`));
        }
        uint16(offset, next) {
            if (next === undefined)
                return this.getUint16(offset, true);
            if (next >= 0 && next < 2 ** 16)
                return this.setUint16(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint16 value ${next}`));
        }
        int32(offset, next) {
            if (next === undefined)
                return this.getInt32(offset, true);
            if (next >= -(2 ** 31) && next < 2 ** 31)
                return this.setInt32(offset, next, true), next;
            $mol_fail(new Error(`Wrong int32 value ${next}`));
        }
        uint32(offset, next) {
            if (next === undefined)
                return this.getUint32(offset, true);
            if (next >= 0 && next < 2 ** 32)
                return this.setUint32(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint32 value ${next}`));
        }
        int64(offset, next) {
            if (next === undefined)
                return this.getBigInt64(offset, true);
            if (next >= -(2n ** 63n) && next < 2n ** 63n)
                return this.setBigInt64(offset, next, true), next;
            $mol_fail(new Error(`Wrong int64 value ${next}`));
        }
        uint48(offset, next) {
            if (next === undefined)
                return this.getUint48(offset, true);
            if (next >= 0 && next < 2 ** 48)
                return this.setUint48(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint48 value ${next}`));
        }
        uint64(offset, next) {
            if (next === undefined)
                return this.getBigUint64(offset, true);
            if (next >= 0n && next < 2n ** 64n)
                return this.setBigUint64(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint64 value ${next}`));
        }
        float16(offset, next) {
            if (next !== undefined)
                this.setFloat16(offset, next, true);
            return this.getFloat16(offset, true);
        }
        float32(offset, next) {
            if (next !== undefined)
                this.setFloat32(offset, next, true);
            return this.getFloat32(offset, true);
        }
        float64(offset, next) {
            if (next !== undefined)
                this.setFloat64(offset, next, true);
            return this.getFloat64(offset, true);
        }
        asArray() {
            return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        toString() {
            return $mol_base64_ae_encode(this.asArray());
        }
    }
    $.$mol_buffer = $mol_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_websocket_frame_op;
    (function ($mol_websocket_frame_op) {
        $mol_websocket_frame_op[$mol_websocket_frame_op["con"] = 0] = "con";
        $mol_websocket_frame_op[$mol_websocket_frame_op["txt"] = 1] = "txt";
        $mol_websocket_frame_op[$mol_websocket_frame_op["bin"] = 2] = "bin";
        $mol_websocket_frame_op[$mol_websocket_frame_op["stop"] = 8] = "stop";
        $mol_websocket_frame_op[$mol_websocket_frame_op["ping"] = 9] = "ping";
        $mol_websocket_frame_op[$mol_websocket_frame_op["pong"] = 10] = "pong";
    })($mol_websocket_frame_op = $.$mol_websocket_frame_op || ($.$mol_websocket_frame_op = {}));
    class $mol_websocket_frame extends $mol_buffer {
        kind(next) {
            if (next) {
                this.setUint8(0, Number(next.fin) << 7 | $mol_websocket_frame_op[next.op]);
                return next;
            }
            else {
                const state = this.getUint8(0);
                const fin = state >> 7;
                const op = $mol_websocket_frame_op[state & 0b1111];
                if (op === undefined)
                    $mol_fail(new Error(`Wrong op (${state.toString(2)})`));
                return { op, fin };
            }
        }
        data(next) {
            if (next === undefined) {
                const state = this.getUint8(1);
                const mask = state >> 7;
                let size = state & 0b0111_1111;
                if (size === 126)
                    size = this.getUint16(2);
                else if (size === 127)
                    size = this.getUint32(6);
                return { size, mask };
            }
            else {
                if (next.size >= 2 ** 16) {
                    this.setUint8(1, 127 | Number(next.mask) << 7);
                    this.setUint32(6, next.size);
                }
                else if (next.size >= 126) {
                    this.setUint8(1, 126 | Number(next.mask) << 7);
                    this.setUint16(2, next.size);
                }
                else {
                    this.setUint8(1, next.size | Number(next.mask) << 7);
                }
                return next;
            }
        }
        size() {
            const short = this.getUint8(1) & 0b0111_1111;
            const mask = this.getUint8(1) >> 7;
            return (short === 127 ? 10 : short === 126 ? 4 : 2) + (mask ? 4 : 0);
        }
        mask() {
            return new Uint8Array(this.buffer, this.byteOffset + this.size() - 4, 4);
        }
        toString() {
            const { op, fin } = this.kind();
            const { size, mask } = this.data();
            return `${op}${fin ? '!' : '+'}${size}${mask ? '@' : '#'}`;
        }
        static make(op, size = 0, mask = false, fin = true) {
            const head = (size >= 2 ** 16 ? 10 : size >= 126 ? 4 : 2) + (mask ? 4 : 0);
            const frame = $mol_websocket_frame.from(head);
            frame.kind({ op, fin });
            frame.data({ size, mask });
            return frame;
        }
    }
    $.$mol_websocket_frame = $mol_websocket_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send('');
        }
        send_bin(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send(data);
        }
        send_text(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.send(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_text", null);
    $.$mol_rest_port_ws_std = $mol_rest_port_ws_std;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.writableEnded)
                return;
            this.socket.write($mol_websocket_frame.make('pong', 0).asArray());
        }
        send_bin(data) {
            if (this.socket.writableEnded)
                return;
            this.socket.write($mol_websocket_frame.make('bin', data.byteLength).asArray());
            this.socket.write(data);
        }
        send_text(data) {
            if (this.socket.writableEnded)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.write($mol_websocket_frame.make('txt', bin.byteLength).asArray());
            this.socket.write(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_text", null);
    $.$mol_rest_port_ws_node = $mol_rest_port_ws_node;
    $.$mol_rest_port_ws = $mol_rest_port_ws_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let sponge = new Uint32Array(80);
    function $mol_crypto_hash(input) {
        const data = input instanceof Uint8Array
            ? input
            : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        const bits = data.byteLength << 3;
        const kbits = bits >> 5;
        const kword = 0x80 << (24 - bits & 0b11111);
        const bytes = 16 + (bits + 64 >>> 9 << 4);
        const klens = bytes - 1;
        const words = new DataView(data.buffer, data.byteOffset, data.byteLength >> 2 << 2);
        let tail = 0;
        for (let i = words.byteLength; i < data.length; ++i) {
            tail |= data[i] << ((3 - i & 0b11) << 3);
        }
        const hash = new Int32Array([1732584193, -271733879, -1732584194, 271733878, -1009589776]);
        for (let i = 0; i < bytes; i += 16) {
            let h0 = hash[0];
            let h1 = hash[1];
            let h2 = hash[2];
            let h3 = hash[3];
            let h4 = hash[4];
            for (let j = 0; j < 16; ++j) {
                const k = i + j;
                if (k === klens) {
                    sponge[j] = bits;
                }
                else {
                    const pos = k << 2;
                    let word = pos === words.byteLength ? tail :
                        pos > words.byteLength ? 0 :
                            words.getInt32(pos, false);
                    if (k === kbits)
                        word |= kword;
                    sponge[j] = word;
                }
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 16; j < 20; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 20; j < 40; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) + 1859775393 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 40; j < 60; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | h1 & h3 | h2 & h3) - 1894007588 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 60; j < 80; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) - 899497514 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            hash[0] += h0;
            hash[1] += h1;
            hash[2] += h2;
            hash[3] += h3;
            hash[4] += h4;
        }
        for (let i = 0; i < 20; ++i) {
            const word = hash[i];
            hash[i] = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
        }
        return new Uint8Array(hash.buffer);
    }
    $.$mol_crypto_hash = $mol_crypto_hash;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_server extends $mol_object {
        log() {
            return this.$.$mol_state_arg.value('mol_rest_server_log') !== null;
        }
        port() {
            return 0;
        }
        start() {
            this.http_server();
        }
        http_server() {
            const server = $node.http.createServer((req, res) => {
                res.statusCode = 400;
                $mol_wire_async(this).http_income(req, res);
            });
            server.on('upgrade', (req, sock, head) => $mol_wire_async(this).ws_upgrade(req, sock, head));
            server.listen(this.port(), () => {
                const ifaces = Object.entries($node.os.networkInterfaces())
                    .flatMap(([type, ifaces]) => ifaces?.map(iface => iface.family === 'IPv6' ? `[${iface.address}]` : iface.address) ?? []);
                this.$.$mol_log3_done({
                    place: this,
                    message: 'HTTP Server Started',
                    links: ifaces.map(iface => `http://${iface}:${this.port()}/`),
                });
            });
            return server;
        }
        http_income(req, res) {
            const port = $mol_rest_port_http.make({ output: res });
            const msg = $mol_rest_message_http.make({ port, input: req });
            if (this.log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: msg.method(),
                    url: msg.uri(),
                    remote: req.socket.remoteAddress + ':' + req.socket.remotePort
                });
            $mol_wire_sync(res).setHeader('Access-Control-Allow-Origin', '*');
            $mol_wire_sync(res).setHeader('Access-Control-Allow-Methods', '*');
            $mol_wire_sync(res).setHeader('Access-Control-Allow-Headers', '*');
            try {
                $mol_wire_sync(this.root()).REQUEST(msg);
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_wire_sync($$).$mol_log3_fail({
                    place: this,
                    message: error.message ?? '',
                    stack: error.stack,
                });
                $mol_wire_sync(res).writeHead(500, error.name || 'Server Error');
            }
            res.end();
        }
        ws_upgrade(req, socket, head) {
            const port = $mol_rest_port_ws_node.make({ socket });
            const upgrade = $mol_rest_message_http.make({ port, input: req });
            try {
                $mol_wire_sync(this.root()).REQUEST(upgrade.derive('OPEN', null));
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_wire_sync($$).$mol_log3_fail({
                    place: this,
                    message: error.message ?? '',
                    stack: error.stack,
                });
                socket.end();
                return;
            }
            const onclose = $mol_wire_async(() => {
                if (this.log())
                    $mol_wire_sync(this.$).$mol_log3_done({
                        place: this,
                        message: 'CLOSE',
                        url: upgrade.uri(),
                        port: $mol_key(port),
                    });
                try {
                    $mol_wire_sync(this.root()).REQUEST(upgrade.derive('CLOSE', null));
                }
                catch (error) {
                    if ($mol_promise_like(error))
                        $mol_fail_hidden(error);
                    $mol_wire_sync($$).$mol_log3_fail({
                        place: this,
                        message: error.message ?? '',
                        stack: error.stack,
                    });
                    return;
                }
            });
            socket.on('end', onclose);
            socket.on('error', onclose);
            socket.on('data', (chunk) => this.ws_income(chunk, upgrade, socket));
            const key_in = req.headers["sec-websocket-key"];
            const magic = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
            const key_out = $mol_base64_encode($mol_crypto_hash($mol_charset_encode(key_in + magic)));
            socket.write('HTTP/1.1 101 WS Handshaked\r\n' +
                'Upgrade: WebSocket\r\n' +
                'Connection: Upgrade\r\n' +
                `Sec-WebSocket-Accept: ${key_out}\r\n` +
                '\r\n');
            if (this.log())
                $mol_wire_sync(this.$).$mol_log3_come({
                    place: this,
                    message: 'OPEN',
                    url: upgrade.uri(),
                    port: $mol_key(port),
                });
        }
        _ws_income_chunks = new WeakMap;
        _ws_income_frames = new WeakMap;
        async ws_income(chunk, upgrade, sock) {
            sock.pause();
            try {
                let chunks = this._ws_income_chunks.get(sock);
                if (!chunks)
                    this._ws_income_chunks.set(sock, chunks = []);
                chunks.push(chunk);
                const patial_size = chunks.reduce((sum, buf) => sum + buf.byteLength, 0);
                let frame = $mol_websocket_frame.from(chunks[0]);
                const msg_size = frame.size() + frame.data().size;
                if (msg_size > patial_size) {
                    setTimeout(() => sock.resume());
                    return;
                }
                chunk = Buffer.alloc(patial_size);
                let offset = 0;
                for (const buf of chunks.splice(0)) {
                    chunk.set(buf, offset);
                    offset += buf.byteLength;
                }
                frame = $mol_websocket_frame.from(chunk);
                if (msg_size < chunk.byteLength) {
                    const tail = new Uint8Array(chunk.buffer, chunk.byteOffset + msg_size);
                    sock.unshift(tail);
                }
                let data = new Uint8Array(chunk.buffer, chunk.byteOffset + frame.size(), frame.data().size);
                if (frame.data().mask) {
                    const mask = frame.mask();
                    for (let i = 0; i < data.length; ++i) {
                        data[i] ^= mask[i % 4];
                    }
                }
                const op = frame.kind().op;
                if (op === 'txt')
                    data = $mol_charset_decode(data);
                let frames = this._ws_income_frames.get(sock);
                if (!frames)
                    this._ws_income_frames.set(sock, frames = []);
                if (!frame.kind().fin) {
                    frames.push(data);
                    setTimeout(() => sock.resume());
                    return;
                }
                if (frames.length) {
                    frames.push(data);
                    if (typeof frames[0] === 'string') {
                        data = frames.join('');
                    }
                    else {
                        const size = frames.reduce((s, f) => s + f.byteLength, 0);
                        data = new Uint8Array(size);
                        let offset = 0;
                        for (const frame of frames) {
                            data.set(frame, offset);
                            offset += frame.byteLength;
                        }
                    }
                    frames.length = 0;
                }
                if (op !== 'txt' && op !== 'bin' && op !== 'con') {
                    setTimeout(() => sock.resume());
                    return;
                }
                const message = upgrade.derive('POST', data);
                if (data.length !== 0) {
                    if (this.log())
                        this.$.$mol_log3_rise({
                            place: this,
                            message: message.method(),
                            port: $mol_key(message.port),
                            url: message.uri(),
                            frame: frame.toString(),
                        });
                    await $mol_wire_async(this.root()).REQUEST(message);
                }
                setTimeout(() => sock.resume());
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $$.$mol_log3_fail({
                    place: this,
                    message: error.message ?? '',
                    stack: error.stack,
                });
                sock.end();
            }
        }
        root(resource) {
            $mol_wire_solid();
            return resource ?? $mol_rest_resource.make({});
        }
    }
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "port", null);
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "start", null);
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "http_server", null);
    __decorate([
        $mol_action
    ], $mol_rest_server.prototype, "http_income", null);
    __decorate([
        $mol_action
    ], $mol_rest_server.prototype, "ws_upgrade", null);
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "root", null);
    $.$mol_rest_server = $mol_rest_server;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_resource_fs extends $mol_rest_resource {
        _root() { return $mol_file.relative(__dirname); }
        GET(msg) {
            const root = this._root();
            const file = root.resolve(msg.uri().pathname);
            if (!file.exists())
                return msg.reply(null, { code: 404 });
            switch (file.type()) {
                case 'file': {
                    return msg.reply(file.buffer(), {
                        type: $mol_file_extensions[file.ext().replace(/^.*\./, '')],
                    });
                }
                case 'dir': {
                    const index = file.resolve('./index.html');
                    if (index.exists())
                        return msg.reply(index.buffer(), { type: 'text/html' });
                    const resources = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
                    return msg.reply($mol_jsx("body", null,
                        $mol_jsx("style", null, `
							body { background: black; font: 1rem/1.5rem monospace }
							a { color: royalblue; text-decoration: none }
							a:hover { color: skyblue }
						`),
                        resources.map(res => {
                            if (res === 'constructor')
                                return null;
                            if (!/^[a-z][a-z_-]*$/.test(res))
                                return null;
                            const uri = root.resolve(res);
                            return $mol_jsx("a", { href: uri.relate(file) + '/' },
                                "/",
                                res,
                                "/",
                                $mol_jsx("br", null));
                        }),
                        $mol_jsx("a", { href: "../" },
                            "../",
                            $mol_jsx("br", null)),
                        file.sub().map(kid => {
                            const uri = kid.name() + (kid.type() === 'dir' ? '/' : '');
                            return $mol_jsx("a", { href: uri },
                                uri,
                                $mol_jsx("br", null));
                        })));
                }
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_rest_resource_fs.prototype, "_root", null);
    $.$mol_rest_resource_fs = $mol_rest_resource_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_set extends Set {
        pub = new $mol_wire_pub;
        has(value) {
            this.pub.promote();
            return super.has(value);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        add(value) {
            if (super.has(value))
                return this;
            super.add(value);
            this.pub.emit();
            return this;
        }
        delete(value) {
            const res = super.delete(value);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(val, next) {
            if (next === undefined)
                return this.has(val);
            if (next)
                this.add(val);
            else
                this.delete(val);
            return next;
        }
    }
    $.$mol_wire_set = $mol_wire_set;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode(buffer) {
        return buffer.toBase64({ alphabet: 'base64url', omitPadding: true });
    }
    $.$mol_base64_url_encode = $mol_base64_url_encode;
    function $mol_base64_url_decode(str) {
        return Uint8Array.fromBase64(str, { alphabet: 'base64url' });
    }
    $.$mol_base64_url_decode = $mol_base64_url_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode_node(str) {
        if (!str)
            return '';
        const buf = Buffer.isBuffer(str) ? str : Buffer.from(str);
        return buf.toString('base64url').replace(/=/g, '');
    }
    $.$mol_base64_url_encode_node = $mol_base64_url_encode_node;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_url_encode = $mol_base64_url_encode_node;
    }
    function $mol_base64_url_decode_node(str) {
        const buffer = Buffer.from(str, 'base64url');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_url_decode_node = $mol_base64_url_decode_node;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_url_decode = $mol_base64_url_decode_node;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = $node.crypto.webcrypto;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_restack(error) {
        error = new Error(error instanceof Error ? error.message : String(error), { cause: error });
        $mol_fail_hidden(error);
    }
    $.$mol_crypto_restack = $mol_crypto_restack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const ecdsa = {
        name: 'ECDSA',
        hash: 'SHA-1',
        namedCurve: "P-256",
    };
    const ecdh = { name: "ECDH", namedCurve: "P-256" };
    const jwk = { crv: 'P-256', ext: true, kty: 'EC' };
    class $mol_crypto_key extends $mol_buffer {
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial.slice(0, 43)),
                    ...$mol_base64_url_decode(serial.slice(43, 86)),
                    ...$mol_base64_url_decode(serial.slice(86, 129)),
                ]);
            }
            return super.from(serial);
        }
        toString() {
            const arr = this.asArray();
            return $mol_base64_url_encode(arr.subarray(0, 32))
                + $mol_base64_url_encode(arr.subarray(32, 64))
                + $mol_base64_url_encode(arr.subarray(64));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key.prototype, "toString", null);
    $.$mol_crypto_key = $mol_crypto_key;
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str = 86;
        static size_bin = 64;
        async native() {
            const str = this.toString();
            return $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: str.slice(0, 43),
                y: str.slice(43, 86),
            }, ecdsa, Boolean('extractable'), ['verify']).catch($mol_crypto_restack);
        }
        async native_derive() {
            const serial = this.toString();
            return await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: [],
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, ecdh, true, []).catch($mol_crypto_restack);
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(ecdsa, await this.native(), sign, data).catch($mol_crypto_restack);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_public.prototype, "native", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_public.prototype, "native_derive", null);
    $.$mol_crypto_key_public = $mol_crypto_key_public;
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str = 129;
        static size_bin = 96;
        static size_sign = 64;
        static async generate() {
            const pair = await $mol_crypto_native.subtle.generateKey(ecdsa, Boolean('extractable'), ['sign', 'verify']).catch($mol_crypto_restack);
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', pair.privateKey).catch($mol_crypto_restack);
            return this.from(x + y + d);
        }
        async native() {
            const str = this.toString();
            return await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: str.slice(0, 43),
                y: str.slice(43, 86),
                d: str.slice(86, 129),
            }, ecdsa, Boolean('extractable'), ['sign']).catch($mol_crypto_restack);
        }
        async native_derive() {
            const serial = this.toString();
            return $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: ['deriveKey', 'deriveBits'],
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, ecdh, Boolean('extractable'), ['deriveKey', 'deriveBits']).catch($mol_crypto_restack);
        }
        public() {
            return new $mol_crypto_key_public(this.asArray().slice(0, 64).buffer);
        }
        async sign(data) {
            return new Uint8Array(await $mol_crypto_native.subtle.sign(ecdsa, await this.native(), data).catch($mol_crypto_restack));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "native", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "native_derive", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto_key_private.prototype, "public", null);
    $.$mol_crypto_key_private = $mol_crypto_key_private;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_link_compare(left, right) {
        return (right.str > left.str ? 1 : right.str < left.str ? -1 : 0);
    }
    $.$giper_baza_link_compare = $giper_baza_link_compare;
    class $giper_baza_link extends Object {
        str;
        constructor(str) {
            super();
            this.str = str;
            if (!/^(([a-zæA-ZÆ0-9]{8})?_){0,3}([a-zæA-ZÆ0-9]{8})?$/.test(str)) {
                $mol_fail(new Error(`Wrong Link (${str})`));
            }
            this.str = str.replace(/AAAAAAAA/g, '').replace(/_+$/, '');
        }
        static hole = new this('');
        static check(val) {
            try {
                new this(val);
                return val;
            }
            catch {
                return null;
            }
        }
        toString() {
            return this.str;
        }
        toJSON() {
            return this.str;
        }
        [Symbol.toPrimitive]() {
            return this.str;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({ 'color': 'darkorange' }, this.str || '_');
        }
        toBin() {
            const str = this.relate(_base).str;
            const norm = str && str
                .replace(/^___/, '')
                .split('_')
                .map(numb => numb || 'AAAAAAAA')
                .join('');
            return $mol_base64_ae_decode(norm);
        }
        static from_int(int) {
            return new this($mol_base64_ae_encode(new Uint8Array(new BigUint64Array([BigInt(int)]).buffer, 0, 6)));
        }
        static from_bin(bin) {
            const str = [...$mol_base64_ae_encode(bin).match(/(.{8})/g) ?? []].join('_');
            return new this(str).resolve(_base);
        }
        static _hash_cache = new WeakMap();
        static hash_bin(bin) {
            let link = this._hash_cache.get(bin);
            if (link)
                return link;
            const hash = $mol_crypto_hash(bin);
            link = this.from_bin(new Uint8Array(hash.buffer, 0, 12));
            this._hash_cache.set(bin, link);
            return link;
        }
        static hash_str(str) {
            return this.hash_bin($mol_charset_encode(str));
        }
        peer() {
            return new $giper_baza_link(this.str.split('_')[0] ?? '');
        }
        area() {
            return new $giper_baza_link(this.str.split('_')[2] ?? '');
        }
        head() {
            return new $giper_baza_link(this.str.split('_')[3] ?? '');
        }
        lord() {
            return new $giper_baza_link(this.str.split('_').slice(0, 2).join('_'));
        }
        land() {
            return new $giper_baza_link(this.str.split('_').slice(0, 3).join('_'));
        }
        relate(base) {
            if (base.str === '')
                return this;
            base = base.land();
            if (this.land().str !== base.str)
                return this;
            const head = this.head();
            return new $giper_baza_link('___' + head);
        }
        resolve(base) {
            if (base.str === '')
                return this;
            if (this.str === '')
                return base.land();
            if (this.str.length > 16)
                return this;
            const parts = base.land().toString().split('_');
            while (parts.length < 3)
                parts.push('');
            parts.push(this.str.replace(/^___/, ''));
            return new $giper_baza_link(parts.join('_'));
        }
        mix(mixin) {
            if (mixin instanceof $giper_baza_link)
                mixin = mixin.toBin();
            const mix = this.toBin();
            for (let i = 0; i < mix.length; ++i)
                mix[i] ^= mixin[i];
            return mix;
        }
    }
    $.$giper_baza_link = $giper_baza_link;
    let _base = $giper_baza_link.hole;
    function $giper_baza_link_base(base, task) {
        const prev = _base;
        _base = base;
        try {
            return task();
        }
        finally {
            _base = prev;
        }
    }
    $.$giper_baza_link_base = $giper_baza_link_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_user_async() {
        return new Promise(done => $mol_dom.addEventListener('click', function onclick() {
            $mol_dom.removeEventListener('click', onclick);
            done(null);
        }));
    }
    $.$mol_wait_user_async = $mol_wait_user_async;
    function $mol_wait_user() {
        return this.$mol_wire_sync(this).$mol_wait_user_async();
    }
    $.$mol_wait_user = $mol_wait_user;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                this.$.$mol_wait_user_async()
                    .then(() => native.persist())
                    .then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local_node extends $mol_state_local {
        static dir() {
            const base = process.env.XDG_DATA_HOME || ($node.os.homedir() + '/.local/share');
            return $mol_file.absolute(base).resolve('./mol_state_local');
        }
        static value(key, next) {
            const file = this.dir().resolve(encodeURIComponent(key) + '.json');
            if (next === null) {
                file.exists(false);
                return null;
            }
            const arg = next === undefined ? undefined : JSON.stringify(next);
            return JSON.parse(file.text(arg) || 'null');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local_node, "dir", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local_node, "value", null);
    $.$mol_state_local_node = $mol_state_local_node;
    $.$mol_state_local = $mol_state_local_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_salt() {
        return $mol_crypto_native.getRandomValues(new Uint8Array(16));
    }
    $.$mol_crypto_salt = $mol_crypto_salt;
    $.$mol_crypto_salt_once = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto_sacred extends $mol_buffer {
        static size = 16;
        static make() {
            return this.from($mol_crypto_salt());
        }
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial),
                ]);
            }
            if (!(serial instanceof Uint8Array)) {
                serial = new Uint8Array(serial.buffer, serial.byteOffset, serial.byteLength);
            }
            ;
            serial[0] = 0xFF;
            const sacred = super.from(serial);
            return sacred;
        }
        static async from_native(native) {
            const buf = await $mol_crypto_native.subtle.exportKey('raw', native).catch($mol_crypto_restack);
            const sacred = this.from(new Uint8Array(buf));
            sacred._native = native;
            return sacred;
        }
        constructor(buffer, byteOffset, byteLength) {
            super(buffer, byteOffset, byteLength);
            if (this.getUint8(0) !== 0xFF)
                $mol_fail(new Error('Buffer should starts with 0xFF byte'));
        }
        toString() {
            return $mol_base64_url_encode(this.asArray());
        }
        _native;
        async native() {
            return this._native ?? (this._native = await $mol_crypto_native.subtle.importKey('raw', this, {
                name: 'AES-CBC',
                length: 128,
            }, true, ['encrypt', 'decrypt']).catch($mol_crypto_restack));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), open).catch($mol_crypto_restack));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), closed).catch($mol_crypto_restack));
        }
        async close(opened, salt) {
            if (opened.getUint8(0) !== 0xFF)
                throw new Error('Closable buffer should starts with 0xFF');
            const trimed = new Uint8Array(opened.buffer, opened.byteOffset + 1, opened.byteLength - 1);
            return this.encrypt(trimed, salt);
        }
        async open(closed, salt) {
            const trimed = await this.decrypt(closed, salt);
            if (trimed.byteLength !== closed.byteLength - 1)
                throw new Error('Length of opened buffer should be ' + (closed.byteLength - 1));
            const opened = new Uint8Array(closed.byteLength);
            opened[0] = 0xFF;
            opened.set(trimed, 1);
            return opened;
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_sacred.prototype, "toString", null);
    $.$mol_crypto_sacred = $mol_crypto_sacred;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    async function $mol_crypto_sacred_shared(priv, pub) {
        return $mol_crypto_sacred.from(new Uint8Array(await $mol_crypto_native.subtle.deriveBits({
            name: "ECDH",
            public: await pub.native_derive(),
        }, await priv.native_derive(), $mol_crypto_sacred.size * 8).catch($mol_crypto_restack)));
    }
    $.$mol_crypto_sacred_shared = $mol_crypto_sacred_shared;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_auth_pass extends $mol_crypto_key_public {
        static like(bin) {
            const pass = this.from(bin);
            if (pass.byteLength !== $giper_baza_auth_pass.size_bin)
                return null;
            if (pass.uint8(0) !== 0xFF)
                return null;
            return pass;
        }
        hash() {
            return $giper_baza_link.hash_bin(this);
        }
        path() {
            return `pass:${this.hash().str}`;
        }
        lord() {
            return this.hash().lord();
        }
        peer() {
            return this.hash().peer();
        }
        toJSON() {
            return $mol_term_color.magenta('@' + this.lord().str);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 🎫');
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "hash", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "path", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "lord", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "peer", null);
    $.$giper_baza_auth_pass = $giper_baza_auth_pass;
    class $giper_baza_auth extends $mol_crypto_key_private {
        static current(next) {
            $mol_wire_solid();
            if (next === undefined) {
                const key = String($mol_state_local.value('$giper_baza_auth') ?? '');
                if (key)
                    return $giper_baza_auth.from(key);
            }
            if (!next)
                next = this.grab();
            $mol_state_local.value('$giper_baza_auth', next.toString());
            return next;
        }
        static embryos = [];
        static grab() {
            if (this.embryos.length)
                return this.from(this.embryos.pop());
            return $mol_wire_sync(this).generate();
        }
        static async generate() {
            for (let i = 0; i < 4096; ++i) {
                const auth = this.from(await super.generate());
                if (auth.uint8(0) !== 0xFF)
                    continue;
                if (/[æÆ]/.test(auth.pass().lord().str))
                    continue;
                return auth;
            }
            $mol_fail(new Error(`Too long key generation`));
        }
        pass() {
            return new $giper_baza_auth_pass(this.public().buffer);
        }
        secret_mutual(pub) {
            return $mol_wire_sync($mol_crypto_sacred_shared)(this, pub);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.pass().lord()), ' 🔑');
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth.prototype, "pass", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_auth.prototype, "secret_mutual", null);
    __decorate([
        $mol_mem
    ], $giper_baza_auth, "current", null);
    __decorate([
        $mol_action
    ], $giper_baza_auth, "grab", null);
    $.$giper_baza_auth = $giper_baza_auth;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_slot_kind;
    (function ($giper_baza_slot_kind) {
        $giper_baza_slot_kind[$giper_baza_slot_kind["free"] = 0] = "free";
        $giper_baza_slot_kind[$giper_baza_slot_kind["land"] = 76] = "land";
        $giper_baza_slot_kind[$giper_baza_slot_kind["sand"] = 252] = "sand";
        $giper_baza_slot_kind[$giper_baza_slot_kind["gift"] = 253] = "gift";
        $giper_baza_slot_kind[$giper_baza_slot_kind["seal"] = 254] = "seal";
        $giper_baza_slot_kind[$giper_baza_slot_kind["pass"] = 255] = "pass";
    })($giper_baza_slot_kind = $.$giper_baza_slot_kind || ($.$giper_baza_slot_kind = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_graph {
        nodes = new Set();
        edges_out = new Map();
        edges_in = new Map();
        link(from, to, edge) {
            this.link_out(from, to, edge);
            this.link_in(to, from, edge);
        }
        unlink(from, to) {
            this.edges_in.get(to)?.delete(from);
            this.edges_out.get(from)?.delete(to);
        }
        link_out(from, to, edge) {
            let pair = this.edges_out.get(from);
            if (!pair) {
                pair = new Map();
                this.edges_out.set(from, pair);
                this.nodes.add(from);
            }
            pair.set(to, edge);
            this.nodes.add(to);
        }
        link_in(to, from, edge) {
            let pair = this.edges_in.get(to);
            if (!pair) {
                pair = new Map();
                this.edges_in.set(to, pair);
                this.nodes.add(to);
            }
            pair.set(from, edge);
            this.nodes.add(to);
        }
        edge(from, to) {
            return this.edge_out(from, to) ?? this.edge_in(to, from);
        }
        edge_out(from, to) {
            return this.edges_out.get(from)?.get(to) ?? null;
        }
        edge_in(to, from) {
            return this.edges_in.get(to)?.get(from) ?? null;
        }
        acyclic(get_weight) {
            const checked = [];
            for (const start of this.nodes) {
                const path = [];
                const visit = (from) => {
                    if (checked.includes(from))
                        return Number.MAX_SAFE_INTEGER;
                    const index = path.lastIndexOf(from);
                    if (index > -1) {
                        const cycle = path.slice(index);
                        return cycle.reduce((weight, node, index) => Math.min(weight, get_weight(this.edge_out(node, cycle[(index + 1) % cycle.length]))), Number.MAX_SAFE_INTEGER);
                    }
                    path.push(from);
                    dive: try {
                        const deps = this.edges_out.get(from);
                        if (!deps)
                            break dive;
                        for (const [to, edge] of deps) {
                            if (to === from) {
                                this.unlink(from, to);
                                continue;
                            }
                            const weight_out = get_weight(edge);
                            const min = visit(to);
                            if (weight_out > min)
                                return min;
                            if (weight_out === min) {
                                this.unlink(from, to);
                                if (path.length > 1) {
                                    const enter = path[path.length - 2];
                                    this.link(enter, to, edge);
                                }
                            }
                        }
                    }
                    finally {
                        path.pop();
                    }
                    checked.push(from);
                    return Number.MAX_SAFE_INTEGER;
                };
                visit(start);
            }
        }
        get sorted() {
            const sorted = new Set();
            const visit = (node) => {
                if (sorted.has(node))
                    return;
                const deps = this.edges_out.get(node);
                if (deps) {
                    for (const [dep] of deps)
                        visit(dep);
                }
                sorted.add(node);
            };
            for (const node of this.nodes) {
                visit(node);
            }
            return sorted;
        }
        get roots() {
            const roots = [];
            for (const node of this.nodes) {
                if (this.edges_in.get(node)?.size)
                    continue;
                roots.push(node);
            }
            return roots;
        }
        nodes_depth(select) {
            const stat = new Map();
            const visit = (node, depth = 0) => {
                if (stat.has(node))
                    stat.set(node, select(depth, stat.get(node)));
                else
                    stat.set(node, depth);
                for (const kid of this.edges_out.get(node)?.keys() ?? [])
                    visit(kid, depth + 1);
            };
            for (const root of this.roots)
                visit(root);
            return stat;
        }
        depth_nodes(select) {
            const groups = [];
            for (const [node, depth] of this.nodes_depth(select).entries()) {
                if (groups[depth])
                    groups[depth].push(node);
                else
                    groups[depth] = [node];
            }
            return groups;
        }
    }
    $.$mol_graph = $mol_graph;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                if (!Number.isFinite(config))
                    throw new RangeError(`Wrong ms count`);
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^(-?)P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    const sign = found[1] ? -1 : 1;
                    if (found[2])
                        this.year = sign * Number(found[2]);
                    if (found[3])
                        this.month = sign * Number(found[3]);
                    if (found[4])
                        this.day = sign * Number(found[4]);
                    if (found[5])
                        this.hour = sign * Number(found[5]);
                    if (found[6])
                        this.minute = sign * Number(found[6]);
                    if (found[7])
                        this.second = sign * Number(found[7]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            if (config instanceof Array) {
                ;
                [this.year, this.month, this.day, this.hour, this.minute, this.second] = config;
                return;
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        get normal() {
            let second = this.second ?? 0;
            let minute = this.minute ?? 0;
            let hour = this.hour ?? 0;
            let day = this.day ?? 0;
            minute += Math.trunc(second / 60);
            second = second % 60;
            hour += Math.trunc(minute / 60);
            minute = minute % 60;
            day += Math.trunc(hour / 24);
            hour = hour % 24;
            return new $mol_time_duration({
                year: this.year,
                month: this.month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
            });
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        toArray() {
            return [this.year, this.month, this.day, this.hour, this.minute, this.second];
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number') {
                config = new Date(config);
                if (Number.isNaN(config.valueOf()))
                    throw new RangeError(`Wrong ms count`);
            }
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                this.offset = new $mol_time_duration({ minute: -config.getTimezoneOffset() });
                return;
            }
            if (config instanceof Array) {
                ;
                [this.year, this.month, this.day, this.hour, this.minute, this.second] = config;
                if (config[6] !== undefined)
                    this.offset = new $mol_time_duration(config[6] * 60_000);
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const second = Math.floor(this.second ?? 0);
            const current = new Date();
            const native = new Date(this.year ?? current.getFullYear(), this.month ?? (this.year === undefined ? current.getMonth() : 0), (this.day ?? (this.year === undefined && this.month === undefined ? current.getDate() - 1 : 0)) + 1, this.hour ?? 0, this.minute ?? 0, second, Math.floor(((this.second ?? 0) - second) * 1000));
            const offset = -native.getTimezoneOffset();
            shift: if (this.offset) {
                const target = this.offset.count('PT1m');
                if (target === offset)
                    break shift;
                native.setMinutes(native.getMinutes() + offset - target);
            }
            return this._native = native;
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native).toOffset(this.offset);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year ?? 0,
                month: this.month ?? 0,
                day: this.day ?? 0,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('0001-01-01T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        toArray() {
            return [this.year, this.month, this.day, this.hour, this.minute, this.second, this.offset?.count('PT1m')];
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_accent(this.toString('YYYY-MM-DD hh:mm:ss.sss Z')));
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
            'Z': (moment) => {
                const offset = moment.offset?.normal;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + hour.toString().padStart(2, '0') + ':' + offset.minute.toString().padStart(2, '0');
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_tagged(config) {
        return config;
    }
    $.$mol_data_tagged = $mol_data_tagged;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $mol_fail(new $mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_rank = $mol_data_tagged({
        $giper_baza_rank: $mol_data_pipe($mol_data_integer, (rank) => {
            if (rank >= $.$giper_baza_rank_deny && rank <= $.$giper_baza_rank_rule)
                return rank;
            $mol_fail(new $mol_data_error(`${rank} is out of Ran range`));
        }),
    }).$giper_baza_rank;
    function $giper_baza_rank_make(tier, fame) {
        return ($giper_baza_rank_tier[tier] | $giper_baza_rank_rate[fame]);
    }
    $.$giper_baza_rank_make = $giper_baza_rank_make;
    let $giper_baza_rank_tier;
    (function ($giper_baza_rank_tier) {
        $giper_baza_rank_tier[$giper_baza_rank_tier["deny"] = 0] = "deny";
        $giper_baza_rank_tier[$giper_baza_rank_tier["read"] = 16] = "read";
        $giper_baza_rank_tier[$giper_baza_rank_tier["post"] = 48] = "post";
        $giper_baza_rank_tier[$giper_baza_rank_tier["pull"] = 112] = "pull";
        $giper_baza_rank_tier[$giper_baza_rank_tier["rule"] = 240] = "rule";
    })($giper_baza_rank_tier = $.$giper_baza_rank_tier || ($.$giper_baza_rank_tier = {}));
    function $giper_baza_rank_tier_of(rank) {
        return rank & 0b1111_0000;
    }
    $.$giper_baza_rank_tier_of = $giper_baza_rank_tier_of;
    $.$giper_baza_rank_work_rates = [
        0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF,
        0xE, 0xE, 0xE, 0xE, 0xD, 0xD, 0xD, 0xD,
        0xC, 0xC, 0xB, 0xB, 0xA, 0xA, 0x9, 0x9,
        0x8, 0x7, 0x6, 0x5, 0x4, 0x3, 0x2, 0x1,
        0x0,
    ];
    let $giper_baza_rank_rate;
    (function ($giper_baza_rank_rate) {
        $giper_baza_rank_rate[$giper_baza_rank_rate["late"] = 0] = "late";
        $giper_baza_rank_rate[$giper_baza_rank_rate["long"] = 12] = "long";
        $giper_baza_rank_rate[$giper_baza_rank_rate["slow"] = 13] = "slow";
        $giper_baza_rank_rate[$giper_baza_rank_rate["fast"] = 14] = "fast";
        $giper_baza_rank_rate[$giper_baza_rank_rate["just"] = 15] = "just";
    })($giper_baza_rank_rate = $.$giper_baza_rank_rate || ($.$giper_baza_rank_rate = {}));
    function $giper_baza_rank_rate_of(rank) {
        return rank & 0b0000_1111;
    }
    $.$giper_baza_rank_rate_of = $giper_baza_rank_rate_of;
    $.$giper_baza_rank_deny = $giper_baza_rank_make('deny', 'late');
    $.$giper_baza_rank_read = $giper_baza_rank_make('read', 'late');
    $.$giper_baza_rank_rule = $giper_baza_rank_make('rule', 'just');
    function $giper_baza_rank_pull(rate) {
        return $giper_baza_rank_make('pull', rate);
    }
    $.$giper_baza_rank_pull = $giper_baza_rank_pull;
    function $giper_baza_rank_post(rate) {
        return $giper_baza_rank_make('post', rate);
    }
    $.$giper_baza_rank_post = $giper_baza_rank_post;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_time_moment(time) {
        const stamp = time * 1000;
        return new $mol_time_moment(stamp);
    }
    $.$giper_baza_time_moment = $giper_baza_time_moment;
    function $giper_baza_time_dump(time, tick) {
        let res = $giper_baza_time_moment(time).toString('YYYY-MM-DD hh:mm:ss Z');
        if (tick !== undefined)
            res += ' !' + tick.toString(16).toUpperCase().padStart(2, '0');
        return res;
    }
    $.$giper_baza_time_dump = $giper_baza_time_dump;
    function $giper_baza_time_now() {
        return now || Math.floor(Date.now() / 1000);
    }
    $.$giper_baza_time_now = $giper_baza_time_now;
    let now = 0;
    function $giper_baza_time_freeze(task) {
        if (now)
            return task();
        now = $giper_baza_time_now();
        try {
            return task();
        }
        finally {
            now = 0;
        }
    }
    $.$giper_baza_time_freeze = $giper_baza_time_freeze;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_face extends Object {
        time;
        tick;
        summ;
        static length() {
            return 16;
        }
        constructor(time = 0, tick = 0, summ = 0) {
            super();
            this.time = time;
            this.tick = tick;
            this.summ = summ;
        }
        clone() {
            return new $giper_baza_face(this.time, this.tick, this.summ);
        }
        get moment() {
            return $giper_baza_time_moment(this.time);
        }
        get time_tick() {
            return this.time * 2 ** 16 + this.tick;
        }
        sync_time(time, tick) {
            if (this.time < time) {
                this.time = time;
                this.tick = tick;
            }
            else if (this.time === time && this.tick < tick) {
                this.tick = tick;
            }
        }
        sync_summ(summ) {
            if (this.summ < summ)
                this.summ = summ;
        }
        toJSON() {
            const time = $giper_baza_time_dump(this.time, this.tick);
            const summ = '%' + this.summ;
            return $mol_term_color.gray(`${time} ${summ}`);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ', $giper_baza_time_dump(this.time, this.tick), ' %', this.summ));
        }
    }
    $.$giper_baza_face = $giper_baza_face;
    class $giper_baza_face_map extends Map {
        stat = new $giper_baza_face;
        constructor(entries) {
            super();
            if (entries)
                this.sync(entries);
        }
        clone() {
            return new $giper_baza_face_map(this);
        }
        sync(right) {
            if (right instanceof $giper_baza_face_map)
                this.stat = right.stat.clone();
            for (const [peer, face] of right) {
                this.peer_time(peer, face.time, face.tick);
                this.peer_summ(peer, face.summ);
            }
        }
        peer_time(peer, time, tick) {
            this.stat.sync_time(time, tick);
            let prev = this.get(peer);
            if (prev)
                prev.sync_time(time, tick);
            else
                this.set(peer, new $giper_baza_face(time, tick));
        }
        peer_summ(peer, summ) {
            this.stat.sync_summ(summ);
            let prev = this.get(peer);
            if (prev)
                prev.sync_summ(summ);
            else
                this.set(peer, new $giper_baza_face(0, 0, summ));
        }
        peer_summ_shift(peer, diff) {
            this.peer_summ(peer, (this.get(peer)?.summ ?? 0) + diff);
        }
        tick() {
            const now = $giper_baza_time_now();
            if (this.stat.time < now) {
                this.stat.time = now;
                this.stat.tick = 0;
            }
            else {
                this.stat.tick += 1;
                this.stat.tick %= 2 ** 16;
                if (!this.stat.tick)
                    ++this.stat.time;
            }
            return this.stat;
        }
        toJSON() {
            return Object.fromEntries(this.entries());
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.stat));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_face_map.prototype, "tick", null);
    $.$giper_baza_face_map = $giper_baza_face_map;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_dict extends Map {
        pub = new $mol_wire_pub;
        has(key) {
            this.pub.promote();
            return super.has(key);
        }
        get(key) {
            this.pub.promote();
            return super.get(key);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        set(key, value) {
            if (super.get(key) === value)
                return this;
            super.set(key, value);
            this.pub?.emit();
            return this;
        }
        delete(key) {
            const res = super.delete(key);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(key, next) {
            if (next === undefined)
                return this.get(key) ?? null;
            if (next === null)
                this.delete(key);
            else
                this.set(key, next);
            return next;
        }
    }
    $.$mol_wire_dict = $mol_wire_dict;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_numbers(buff, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < buff.length; ++i) {
            const item = buff[i];
            h1 = Math.imul(h1 ^ item, 2654435761);
            h2 = Math.imul(h2 ^ item, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_numbers = $mol_hash_numbers;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_bigint_encode(num) {
        const minus = num < 0n ? 255 : 0;
        num = minus ? -num - 1n : num;
        const bytes = [];
        do {
            let byte = minus ^ Number(num & 255n);
            bytes.push(byte);
            if (num >>= 8n)
                continue;
            if ((minus & 128) !== (byte & 128))
                bytes.push(minus);
            break;
        } while (num);
        return new Uint8Array(bytes);
    }
    $.$mol_bigint_encode = $mol_bigint_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const ascii_set = [...`0123456789.,:;()'"- \n`].map(c => c.charCodeAt(0));
    const ascii_map = new Array(0x80).fill(0);
    for (let i = 0; i < ascii_set.length; ++i)
        ascii_map[ascii_set[i]] = i | 0x80;
    const diacr_set = [
        0x00, 0x01, 0x0F, 0x0B, 0x07, 0x08, 0x12, 0x13,
        0x02, 0x0C, 0x06, 0x11, 0x03, 0x09, 0x0A, 0x04,
        0x28, 0x31, 0x27, 0x26, 0x23,
    ];
    const diacr_map = new Array(0x80).fill(0);
    for (let i = 0; i < diacr_set.length; ++i)
        diacr_map[diacr_set[i]] = i | 0x80;
    const wide_offset = 0x0E_00;
    const wide_limit = 128 * 128 * 8 + wide_offset;
    const tiny_limit = 128 * 98;
    const full_mode = 0x95;
    const wide_mode = 0x96;
    const tiny_mode = 0x9E;
    function $mol_charset_ucf_encode(str) {
        const buf = $mol_charset_buffer(str.length * 3);
        return buf.slice(0, $mol_charset_ucf_encode_to(str, buf));
    }
    $.$mol_charset_ucf_encode = $mol_charset_ucf_encode;
    function $mol_charset_ucf_encode_to(str, buf, from = 0) {
        let pos = from;
        let mode = tiny_mode;
        const write_high = (code) => {
            buf[pos++] = ((code + 128 - mode) & 0x7F) | 0x80;
        };
        const write_remap = (code) => {
            const fast = ascii_map[code];
            if (fast)
                write_high(fast);
            else
                buf[pos++] = code;
        };
        const write_mode = (m) => {
            write_high(m);
            mode = m;
        };
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code >= 0xD8_00 && code < 0xDC_00)
                code = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
            if (code < 0x80) {
                if (mode !== tiny_mode) {
                    const fast = ascii_map[code];
                    if (!fast)
                        write_mode(tiny_mode);
                }
                buf[pos++] = code;
            }
            else if (code < tiny_limit) {
                const page = (code >> 7) + tiny_mode;
                code &= 0x7F;
                if (page === 164) {
                    const fast = diacr_map[code];
                    if (fast) {
                        if (mode !== tiny_mode)
                            write_mode(tiny_mode);
                        write_high(fast);
                        continue;
                    }
                }
                if (mode !== page)
                    write_mode(page);
                write_remap(code);
            }
            else if (code < wide_limit) {
                code -= wide_offset;
                const page = (code >> 14) + wide_mode;
                if (mode !== page)
                    write_mode(page);
                write_remap(code & 0x7F);
                write_remap((code >> 7) & 0x7F);
            }
            else {
                if (mode !== full_mode)
                    write_mode(full_mode);
                write_remap(code & 0x7F);
                write_remap((code >> 7) & 0x7F);
                write_remap(code >> 14);
            }
        }
        if (mode !== tiny_mode)
            write_mode(tiny_mode);
        return pos - from;
    }
    $.$mol_charset_ucf_encode_to = $mol_charset_ucf_encode_to;
    function $mol_charset_ucf_decode(buffer, mode = tiny_mode) {
        let text = '';
        let pos = 0;
        let page_offset = 0;
        const read_code = () => {
            let code = buffer[pos++];
            if (code > 0x80)
                code = ((mode + code) & 0x7F) | 0x80;
            return code;
        };
        const read_remap = () => {
            let code = read_code();
            if (code >= 0x80)
                code = ascii_set[code - 0x80];
            if (code === undefined)
                $mol_fail(new Error('Wrong byte', { cause: { text, pos: pos - 1 } }));
            return code;
        };
        while (pos < buffer.length) {
            let code = read_code();
            if (code < full_mode) {
                if (mode === tiny_mode) {
                    if (code > 0x80) {
                        code = diacr_set[code - 0x080] | (6 << 7);
                    }
                }
                else if (!ascii_map[code]) {
                    if (code >= 0x80)
                        code = ascii_set[code - 0x80];
                    if (mode < tiny_mode)
                        code |= read_remap() << 7;
                    if (mode === full_mode)
                        code |= read_remap() << 14;
                    code += page_offset;
                }
                text += String.fromCodePoint(code);
            }
            else if (code >= tiny_mode) {
                mode = code;
                page_offset = (mode - tiny_mode) << 7;
            }
            else if (code === full_mode) {
                mode = code;
                page_offset = 0;
            }
            else {
                mode = code;
                page_offset = ((mode - wide_mode) << 14) + wide_offset;
            }
        }
        if (mode !== tiny_mode) {
            return $mol_fail(new Error('Wrong ending', { cause: { text, mode } }));
        }
        return text;
    }
    $.$mol_charset_ucf_decode = $mol_charset_ucf_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_bigint_decode(buf) {
        if (buf.length === 8)
            return new BigInt64Array(buf.buffer, buf.byteOffset, 1)[0];
        if (buf.length === 4)
            return BigInt(new Int32Array(buf.buffer, buf.byteOffset, 1)[0]);
        if (buf.length === 2)
            return BigInt(new Int16Array(buf.buffer, buf.byteOffset, 1)[0]);
        if (buf.length === 1)
            return BigInt(new Int8Array(buf.buffer, buf.byteOffset, 1)[0]);
        const minus = (buf.at(-1) & 128) ? 255 : 0;
        let result = 0n;
        let offset = 0n;
        for (let i = 0; i < buf.length; i++, offset += 8n) {
            result |= BigInt(buf[i] ^ minus) << offset;
        }
        if (minus)
            result = (result + 1n) * -1n;
        return result;
    }
    $.$mol_bigint_decode = $mol_bigint_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_vary_tip;
    (function ($mol_vary_tip) {
        $mol_vary_tip[$mol_vary_tip["uint"] = 0] = "uint";
        $mol_vary_tip[$mol_vary_tip["link"] = 32] = "link";
        $mol_vary_tip[$mol_vary_tip["spec"] = 64] = "spec";
        $mol_vary_tip[$mol_vary_tip["list"] = 96] = "list";
        $mol_vary_tip[$mol_vary_tip["blob"] = 128] = "blob";
        $mol_vary_tip[$mol_vary_tip["text"] = 160] = "text";
        $mol_vary_tip[$mol_vary_tip["tupl"] = 192] = "tupl";
        $mol_vary_tip[$mol_vary_tip["sint"] = 224] = "sint";
    })($mol_vary_tip = $.$mol_vary_tip || ($.$mol_vary_tip = {}));
    let $mol_vary_len;
    (function ($mol_vary_len) {
        $mol_vary_len[$mol_vary_len["L1"] = 28] = "L1";
        $mol_vary_len[$mol_vary_len["L2"] = 29] = "L2";
        $mol_vary_len[$mol_vary_len["L4"] = 30] = "L4";
        $mol_vary_len[$mol_vary_len["L8"] = 31] = "L8";
        $mol_vary_len[$mol_vary_len["LA"] = 32] = "LA";
    })($mol_vary_len = $.$mol_vary_len || ($.$mol_vary_len = {}));
    let $mol_vary_spec;
    (function ($mol_vary_spec) {
        $mol_vary_spec[$mol_vary_spec["none"] = 'N'.charCodeAt(0)] = "none";
        $mol_vary_spec[$mol_vary_spec["true"] = 'T'.charCodeAt(0)] = "true";
        $mol_vary_spec[$mol_vary_spec["fake"] = 'F'.charCodeAt(0)] = "fake";
        $mol_vary_spec[$mol_vary_spec["both"] = 'B'.charCodeAt(0)] = "both";
        $mol_vary_spec[$mol_vary_spec["fp16"] = 'H'.charCodeAt(0)] = "fp16";
        $mol_vary_spec[$mol_vary_spec["fp32"] = 'S'.charCodeAt(0)] = "fp32";
        $mol_vary_spec[$mol_vary_spec["fp64"] = 'D'.charCodeAt(0)] = "fp64";
        $mol_vary_spec[$mol_vary_spec["f128"] = 'Q'.charCodeAt(0)] = "f128";
        $mol_vary_spec[$mol_vary_spec["f256"] = 'O'.charCodeAt(0)] = "f256";
    })($mol_vary_spec = $.$mol_vary_spec || ($.$mol_vary_spec = {}));
    const pojo_maker = (keys) => (vals) => {
        const obj = {};
        for (let i = 0; i < keys.length; ++i)
            obj[keys[i]] = vals[i];
        return obj;
    };
    class $mol_vary_class extends Object {
        lean_symbol = Symbol('$mol_vary_lean');
        array = new Uint8Array(256);
        buffer = new DataView(this.array.buffer);
        pack(data) {
            let pos = 0;
            let capacity = 0;
            const offsets = new Map();
            const stack = [];
            const acquire = (size) => {
                if (size < 0)
                    return;
                capacity += size;
                if (this.array.byteLength >= capacity)
                    return;
                const buffer2 = new Uint8Array(Math.ceil(capacity / 4096) * 4096);
                buffer2.set(this.array);
                this.array = buffer2;
                this.buffer = new DataView(this.array.buffer);
            };
            const release = (size) => {
                capacity -= size;
            };
            const calc_size = (val) => {
                if (val < $mol_vary_len.L1)
                    return 1;
                if (val < 2 ** 8)
                    return 2;
                if (val < 2 ** 16)
                    return 3;
                if (val < 2 ** 32)
                    return 5;
                if (val < 2n ** 64n)
                    return 9;
                return $mol_fail(new Error('Too large number'));
            };
            const dump_unum = (tip, val, max = val) => {
                if (max < $mol_vary_len.L1) {
                    this.array[pos++] = tip | Number(val);
                    release(8);
                    return;
                }
                if (tip == $mol_vary_tip.uint) {
                    const offset = offsets.get(val);
                    if (offset !== undefined)
                        return dump_unum($mol_vary_tip.link, offset);
                }
                if (max < 2 ** 8) {
                    this.array[pos++] = tip | $mol_vary_len.L1;
                    this.array[pos++] = Number(val);
                    release(7);
                }
                else if (max < 2 ** 16) {
                    this.array[pos++] = tip | $mol_vary_len.L2;
                    this.buffer.setUint16(pos, Number(val), true);
                    pos += 2;
                    release(6);
                }
                else if (max < 2 ** 32) {
                    this.array[pos++] = tip | $mol_vary_len.L4;
                    this.buffer.setUint32(pos, Number(val), true);
                    pos += 4;
                    release(4);
                }
                else if (max < 2n ** 64n) {
                    this.array[pos++] = tip | $mol_vary_len.L8;
                    this.buffer.setBigUint64(pos, BigInt(val), true);
                    pos += 8;
                }
                else {
                    dump_bint(val);
                }
                if (tip == $mol_vary_tip.uint)
                    offsets.set(val, offsets.size);
            };
            const dump_snum = (val) => {
                if (val > -$mol_vary_len.L1) {
                    this.array[pos++] = Number(val);
                    release(8);
                    return;
                }
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                if (val >= -(2 ** 7)) {
                    this.array[pos++] = -$mol_vary_len.L1;
                    this.array[pos++] = Number(val);
                    release(7);
                }
                else if (val >= -(2 ** 15)) {
                    this.array[pos++] = -$mol_vary_len.L2;
                    this.buffer.setInt16(pos, Number(val), true);
                    pos += 2;
                    release(6);
                }
                else if (val >= -(2 ** 31)) {
                    this.array[pos++] = -$mol_vary_len.L4;
                    this.buffer.setInt32(pos, Number(val), true);
                    pos += 4;
                    release(4);
                }
                else if (val >= -(2n ** 63n)) {
                    this.array[pos++] = -$mol_vary_len.L8;
                    this.buffer.setBigInt64(pos, BigInt(val), true);
                    pos += 8;
                }
                else {
                    dump_bint(val);
                }
                offsets.set(val, offsets.size);
            };
            const dump_bint = (val) => {
                const buf = $mol_bigint_encode(val);
                if (buf.byteLength > (2 ** 16 + 8))
                    $mol_fail(new Error('Number too high', { cause: { val } }));
                acquire(buf.byteLength - 6);
                this.array[pos++] = -$mol_vary_len.LA;
                this.buffer.setUint16(pos, buf.byteLength - 9, true);
                pos += 2;
                this.array.set(buf, pos);
                pos += buf.byteLength;
            };
            const dump_float = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                this.array[pos++] = $mol_vary_spec.fp64;
                this.buffer.setFloat64(pos, val, true);
                pos += 8;
                offsets.set(val, offsets.size);
            };
            const dump_string = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                const len_max = val.length * 3;
                const len_size = calc_size(len_max);
                acquire(len_max);
                const len = $mol_charset_ucf_encode_to(val, this.array, pos + len_size);
                dump_unum($mol_vary_tip.text, len, len_max);
                pos += len;
                release(len_max - len);
                offsets.set(val, offsets.size);
                return;
            };
            const dump_buffer = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                dump_unum($mol_vary_tip.blob, val.byteLength);
                acquire(1 + val.byteLength);
                if (val instanceof Uint8Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L1;
                else if (val instanceof Uint16Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L2;
                else if (val instanceof Uint32Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L4;
                else if (val instanceof BigUint64Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L8;
                else if (val instanceof Int8Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L1;
                else if (val instanceof Int16Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L2;
                else if (val instanceof Int32Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L4;
                else if (val instanceof BigInt64Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L8;
                else if (typeof Float16Array === 'function' && val instanceof Float16Array)
                    this.array[pos++] = $mol_vary_spec.fp16;
                else if (val instanceof Float32Array)
                    this.array[pos++] = $mol_vary_spec.fp32;
                else if (val instanceof Float64Array)
                    this.array[pos++] = $mol_vary_spec.fp64;
                else
                    $mol_fail(new Error(`Unsupported type`));
                const src = (val instanceof Uint8Array) ? val : new Uint8Array(val.buffer, val.byteOffset, val.byteLength);
                this.array.set(src, pos);
                pos += val.byteLength;
                offsets.set(val, offsets.size);
            };
            const dump_list = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                dump_unum($mol_vary_tip.list, val.length);
                acquire(val.length * 9);
                if (stack.includes(val))
                    $mol_fail(new Error('Cyclic refs', { cause: { stack, val } }));
                stack.push(val);
                for (let i = 0; i < val.length; ++i)
                    dump(val[i]);
                if (stack.at(-1) !== val)
                    $mol_fail(new Error('Broken stack', { cause: { stack, val } }));
                stack.pop();
                offsets.set(val, offsets.size);
            };
            const shapes = new Map();
            const shape = (val) => {
                const keys1 = Object.keys(val);
                const key = keys1.join('\0');
                const keys2 = shapes.get(key);
                if (keys2)
                    return keys2;
                shapes.set(key, keys1);
                return keys1;
            };
            const dump_object = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                const { 0: keys, 1: vals } = this.lean_find(val)?.(val) ?? [shape(val), Object.values(val)];
                dump_unum($mol_vary_tip.tupl, vals.length);
                acquire((vals.length + 1) * 9);
                dump_list(keys);
                if (stack.includes(val))
                    $mol_fail(new Error('Cyclic refs', { cause: { stack, val } }));
                stack.push(val);
                for (let i = 0; i < vals.length; ++i)
                    dump(vals[i]);
                if (stack.at(-1) !== val)
                    $mol_fail(new Error('Broken stack', { cause: { stack, val } }));
                stack.pop();
                offsets.set(val, offsets.size);
            };
            const dumpers = {
                undefined: () => {
                    this.array[pos++] = $mol_vary_spec.both;
                    capacity -= 8;
                },
                boolean: val => {
                    this.array[pos++] = val ? $mol_vary_spec.true : $mol_vary_spec.fake;
                    capacity -= 8;
                },
                number: val => {
                    if (!Number.isInteger(val))
                        dump_float(val);
                    else
                        dumpers.bigint(val);
                },
                bigint: val => {
                    if (val < 0) {
                        dump_snum(val);
                    }
                    else {
                        dump_unum($mol_vary_tip.uint, val);
                    }
                },
                string: val => dump_string(val),
                object: val => {
                    if (!val) {
                        capacity -= 8;
                        return this.array[pos++] = $mol_vary_spec.none;
                    }
                    if (Array.isArray(val))
                        return dump_list(val);
                    if (ArrayBuffer.isView(val))
                        return dump_buffer(val);
                    return dump_object(val);
                }
            };
            const dump = (val) => {
                const dumper = dumpers[typeof val];
                if (!dumper)
                    $mol_fail(new Error(`Unsupported type`));
                dumper(val);
            };
            for (let i = 0; i < data.length; ++i) {
                capacity += 9;
                dump(data[i]);
                if (stack.length)
                    $mol_fail(new Error('Stack underflow', { cause: { stack, item: data[i] } }));
                offsets.clear();
            }
            if (pos !== capacity)
                $mol_fail(new Error('Wrong reserved capacity', { cause: { capacity, size: pos, data } }));
            return this.array.slice(0, pos);
        }
        take(array) {
            const buffer = new DataView(array.buffer, array.byteOffset, array.byteLength);
            const stream = [];
            let pos = 0;
            const read_unum = (kind) => {
                ++pos;
                const num = kind & 0b11111;
                if (num < $mol_vary_len.L1)
                    return num;
                let res = 0;
                if (num === $mol_vary_len.L1) {
                    res = buffer.getUint8(pos++);
                }
                else if (num === $mol_vary_len.L2) {
                    res = buffer.getUint16(pos, true);
                    pos += 2;
                }
                else if (num === $mol_vary_len.L4) {
                    res = buffer.getUint32(pos, true);
                    pos += 4;
                }
                else if (num === $mol_vary_len.L8) {
                    res = buffer.getBigUint64(pos, true);
                    if (res <= Number.MAX_SAFE_INTEGER)
                        res = Number(res);
                    pos += 8;
                }
                else {
                    $mol_fail(new Error('Unsupported unum', { cause: { num } }));
                }
                if ((kind & 0b111_00000) === $mol_vary_tip.uint)
                    stream.push(res);
                return res;
            };
            const read_snum = (kind) => {
                const num = buffer.getInt8(pos++);
                if (num > -$mol_vary_len.L1)
                    return num;
                let res = 0;
                if (num === -$mol_vary_len.L1) {
                    res = buffer.getInt8(pos++);
                }
                else if (num === -$mol_vary_len.L2) {
                    res = buffer.getInt16(pos, true);
                    pos += 2;
                }
                else if (num === -$mol_vary_len.L4) {
                    res = buffer.getInt32(pos, true);
                    pos += 4;
                }
                else if (num === -$mol_vary_len.L8) {
                    res = buffer.getBigInt64(pos, true);
                    if (res >= Number.MIN_SAFE_INTEGER && res <= Number.MAX_SAFE_INTEGER)
                        res = Number(res);
                    pos += 8;
                }
                else if (num === -$mol_vary_len.LA) {
                    const len = buffer.getUint16(pos, true) + 9;
                    pos += 2;
                    res = $mol_bigint_decode(new Uint8Array(buffer.buffer, buffer.byteOffset + pos, len));
                    pos += len;
                }
                else {
                    $mol_fail(new Error('Unsupported snum', { cause: { num } }));
                }
                stream.push(res);
                return res;
            };
            const read_text = (kind) => {
                const len = read_unum(kind);
                const text = $mol_charset_ucf_decode(new Uint8Array(array.buffer, array.byteOffset + pos, len));
                pos += len;
                stream.push(text);
                return text;
            };
            const read_buffer = (len, TypedArray) => {
                const bin = new TypedArray(array.slice(pos, pos + len).buffer);
                pos += len;
                stream.push(bin);
                return bin;
            };
            const read_blob = (kind) => {
                const len = read_unum(kind);
                const kind_item = buffer.getUint8(pos++);
                switch (kind_item) {
                    case $mol_vary_len.L1: return read_buffer(len, Uint8Array);
                    case $mol_vary_len.L2: return read_buffer(len, Uint16Array);
                    case $mol_vary_len.L4: return read_buffer(len, Uint32Array);
                    case $mol_vary_len.L8: return read_buffer(len, BigUint64Array);
                    case ~$mol_vary_len.L1 + 256: return read_buffer(len, Int8Array);
                    case ~$mol_vary_len.L2 + 256: return read_buffer(len, Int16Array);
                    case ~$mol_vary_len.L4 + 256: return read_buffer(len, Int32Array);
                    case ~$mol_vary_len.L8 + 256: return read_buffer(len, BigInt64Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp16: return read_buffer(len, Float16Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp32: return read_buffer(len, Float32Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp64: return read_buffer(len, Float64Array);
                    default:
                        $mol_fail(new Error('Unsupported blob item kind', { cause: { kind_item } }));
                }
            };
            const read_list = (kind) => {
                const len = read_unum(kind);
                const list = new Array(len);
                for (let i = 0; i < len; ++i)
                    list[i] = read_vary();
                stream.push(list);
                return list;
            };
            const read_link = (kind) => {
                const index = read_unum(kind);
                if (index >= stream.length)
                    $mol_fail(new Error('Too large index', { cause: { index, exists: stream.length } }));
                return stream[index];
            };
            const read_tupl = (kind) => {
                const len = read_unum(kind);
                const keys = read_vary();
                const vals = new Array(len);
                for (let i = 0; i < len; ++i)
                    vals[i] = read_vary();
                const node = this.rich_node(keys);
                let rich = node.get(null);
                if (!rich)
                    node.set(null, rich = pojo_maker(keys));
                const obj = rich(vals);
                stream.push(obj);
                return obj;
            };
            const read_spec = (kind) => {
                switch (kind) {
                    case $mol_vary_spec.none:
                        ++pos;
                        return null;
                    case $mol_vary_spec.fake:
                        ++pos;
                        return false;
                    case $mol_vary_spec.true:
                        ++pos;
                        return true;
                    case $mol_vary_spec.both:
                        ++pos;
                        return undefined;
                    case $mol_vary_spec.fp64: {
                        const val = buffer.getFloat64(++pos, true);
                        stream.push(val);
                        pos += 8;
                        return val;
                    }
                    case $mol_vary_spec.fp32: {
                        const val = buffer.getFloat32(++pos, true);
                        stream.push(val);
                        pos += 4;
                        return val;
                    }
                    case $mol_vary_spec.fp16: {
                        const val = buffer.getFloat16(++pos, true);
                        stream.push(val);
                        pos += 2;
                        return val;
                    }
                    default:
                        $mol_fail(new Error('Unsupported spec', { cause: { kind } }));
                }
            };
            const read_vary = () => {
                const kind = buffer.getUint8(pos);
                const tip = kind & 0b111_00000;
                switch (tip) {
                    case $mol_vary_tip.uint: return read_unum(kind);
                    case $mol_vary_tip.sint: return read_snum(kind);
                    case $mol_vary_tip.link: return read_link(kind);
                    case $mol_vary_tip.text: return read_text(kind);
                    case $mol_vary_tip.list: return read_list(kind);
                    case $mol_vary_tip.blob: return read_blob(kind);
                    case $mol_vary_tip.tupl: return read_tupl(kind);
                    case $mol_vary_tip.spec: return read_spec(kind);
                    default: $mol_fail(new Error('Unsupported tip', { cause: { tip } }));
                }
            };
            const result = [];
            while (pos < array.byteLength) {
                result.push(read_vary());
                stream.length = 0;
            }
            return result;
        }
        rich_index = new Map([
            [null, () => ({})]
        ]);
        zone() {
            const room = new $mol_vary_class;
            Object.setPrototypeOf(room, this);
            const index_clone = (map) => new Map([...map].map(([k, v]) => [k, k === null ? v : index_clone(v)]));
            room.rich_index = index_clone(this.rich_index);
            return room;
        }
        rich_node(keys) {
            let node = this.rich_index;
            for (let i = 0; i < keys.length; ++i) {
                let sub = node.get(keys[i]);
                if (sub)
                    node = sub;
                else
                    node.set(keys[i], node = new Map);
            }
            return node;
        }
        lean_find(val) {
            const lean = val[this.lean_symbol];
            if (lean)
                return lean;
            const sup = Object.getPrototypeOf(this);
            if (sup === Object.prototype)
                return;
            return sup.lean_find(val);
        }
        type({ type, keys, rich, lean }) {
            this.rich_node(keys).set(null, rich);
            type.prototype[this.lean_symbol] = (val) => [keys, lean(val)];
        }
    }
    $.$mol_vary_class = $mol_vary_class;
    $.$mol_vary = new $mol_vary_class;
    $.$mol_vary.type({
        type: Map,
        keys: ['keys', 'vals'],
        lean: obj => [[...obj.keys()], [...obj.values()]],
        rich: ([keys, vals]) => new Map(keys.map((k, i) => [k, vals[i]])),
    });
    $.$mol_vary.type({
        type: Set,
        keys: ['set'],
        lean: obj => [[...obj.values()]],
        rich: ([vals]) => new Set(vals),
    });
    $.$mol_vary.type({
        type: Date,
        keys: ['unix_time'],
        lean: obj => [obj.valueOf() / 1000],
        rich: ([ts]) => new Date(ts * 1000),
    });
    if ('Element' in $mol_dom) {
        $.$mol_vary.type({
            type: $mol_dom.Element,
            keys: ['XML'],
            lean: node => [$mol_dom_serialize(node)],
            rich: ([text]) => $mol_dom_parse(text, 'application/xml').documentElement,
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_vary = $mol_vary.zone();
    $.$giper_baza_vary.type({
        type: $giper_baza_link,
        keys: ['link'],
        lean: obj => [obj.toBin()],
        rich: ([bin]) => $giper_baza_link.from_bin(bin),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_duration,
        keys: ['dura'],
        lean: obj => obj.toArray(),
        rich: data => new $mol_time_duration(data),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_moment,
        keys: ['time'],
        lean: obj => obj.toArray(),
        rich: data => new $mol_time_moment(data),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_interval,
        keys: ['span'],
        lean: obj => [obj.toString()],
        rich: ([str]) => new $mol_time_interval(str),
    });
    $.$giper_baza_vary.type({
        type: $mol_tree2,
        keys: ['tree'],
        lean: obj => [$$.$mol_tree2_to_string(obj)],
        rich: ([str]) => $$.$mol_tree2_from_string(str),
    });
    function $giper_baza_vary_switch(vary, ways) {
        if (vary === null)
            return ways.none(vary);
        switch (typeof vary) {
            case "boolean": return ways.bool(vary);
            case "bigint": return ways.bint(vary);
            case "number": return ways.real(vary);
            case "string": return ways.text(vary);
        }
        if (ArrayBuffer.isView(vary))
            return ways.blob(vary);
        switch (Reflect.getPrototypeOf(vary)) {
            case Object.prototype: return ways.dict(vary);
            case Array.prototype: return ways.list(vary);
            case $giper_baza_link.prototype: return ways.link(vary);
            case $mol_time_moment.prototype: return ways.time(vary);
            case $mol_time_duration.prototype: return ways.dura(vary);
            case $mol_time_interval.prototype: return ways.span(vary);
            case $mol_tree2.prototype: return ways.tree(vary);
        }
        if (vary instanceof $mol_dom_context.Element)
            return ways.elem(vary);
        return $mol_fail(new TypeError(`Unsupported vary type`, { cause: { vary } }));
    }
    $.$giper_baza_vary_switch = $giper_baza_vary_switch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_bin_to_bytes(tree) {
        return Uint8Array.from(tree.kids, kid => parseInt(kid.value, 16));
    }
    $.$mol_tree2_bin_to_bytes = $mol_tree2_bin_to_bytes;
    function $mol_tree2_bin_from_bytes(bytes, span = $mol_span.unknown) {
        return $mol_tree2.list(Array.from(bytes, code => {
            return $mol_tree2.data(code.toString(16).padStart(2, '0'), [], span);
        }), span);
    }
    $.$mol_tree2_bin_from_bytes = $mol_tree2_bin_from_bytes;
    function $mol_tree2_bin_from_string(str, span = $mol_span.unknown) {
        return $mol_tree2_bin_from_bytes([...new TextEncoder().encode(str)], span);
    }
    $.$mol_tree2_bin_from_string = $mol_tree2_bin_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_xml_from_dom(dom) {
        switch (dom.nodeType) {
            case dom.DOCUMENT_NODE: {
                let kids = [];
                for (const kid of dom.childNodes) {
                    kids.push($mol_tree2_xml_from_dom(kid));
                }
                return $mol_tree2.list(kids);
            }
            case dom.PROCESSING_INSTRUCTION_NODE: {
                return $mol_tree2.struct('?', [
                    $mol_tree2.struct(dom.nodeName, dom.nodeValue.split(' ').map(chunk => {
                        const [, name, value] = /^(.*?)(?:="(.*?)")?$/.exec(chunk);
                        const kids = value ? [$mol_tree2.data(value)] : [];
                        return $mol_tree2.struct(name, kids);
                    }))
                ]);
            }
            case dom.DOCUMENT_TYPE_NODE: {
                const dom2 = dom;
                return $mol_tree2.struct('!', [
                    $mol_tree2.struct('DOCTYPE', [
                        $mol_tree2.struct(dom2.name)
                    ])
                ]);
            }
            case dom.ELEMENT_NODE: {
                let kids = [];
                for (const attr of dom.attributes) {
                    kids.push($mol_tree2.struct('@', [
                        $mol_tree2.struct(attr.nodeName, [
                            $mol_tree2.data(attr.nodeValue)
                        ])
                    ]));
                }
                for (const kid of dom.childNodes) {
                    const k = $mol_tree2_xml_from_dom(kid);
                    if (k.type || k.value)
                        kids.push(k);
                }
                return $mol_tree2.struct(dom.nodeName, kids);
            }
            case dom.COMMENT_NODE: {
                return $mol_tree2.struct('--', [
                    $mol_tree2.data(dom.nodeValue)
                ]);
            }
            case dom.TEXT_NODE: {
                if (!dom.nodeValue.trim())
                    return $mol_tree2.list([]);
                return $mol_tree2.data(dom.nodeValue.replace(/\s+/g, ' '));
            }
        }
        return $mol_fail(new Error(`Unsupported node ${dom.nodeName}`));
    }
    $.$mol_tree2_xml_from_dom = $mol_tree2_xml_from_dom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_vary_cast_blob(vary) {
        return ArrayBuffer.isView(vary) ? vary : null;
    }
    $.$giper_baza_vary_cast_blob = $giper_baza_vary_cast_blob;
    function $giper_baza_vary_cast_bool(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => Boolean(vary.byteLength),
            bool: vary => vary,
            bint: vary => Boolean(vary),
            real: vary => Boolean(vary),
            link: vary => vary.str !== '',
            text: vary => Boolean(vary),
            time: vary => Boolean(vary.valueOf()),
            dura: vary => Boolean(vary.valueOf()),
            span: vary => Boolean(vary.duration.valueOf()),
            dict: vary => Boolean(Reflect.ownKeys(vary).length),
            list: vary => Boolean(vary.length),
            elem: vary => Boolean(vary.attributes.length + vary.childNodes.length),
            tree: vary => Boolean(vary.value || vary.kids.length),
        });
    }
    $.$giper_baza_vary_cast_bool = $giper_baza_vary_cast_bool;
    function $giper_baza_vary_cast_bint(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => BigInt(vary.length),
            bool: vary => BigInt(vary),
            bint: vary => vary,
            real: vary => Number.isFinite(vary) ? BigInt(Math.trunc(vary)) : null,
            link: vary => null,
            text: vary => {
                try {
                    return vary ? BigInt(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => BigInt(vary.valueOf()),
            dura: vary => BigInt(vary.valueOf()),
            span: vary => BigInt(vary.duration.valueOf()),
            dict: vary => BigInt(Reflect.ownKeys(vary).length),
            list: vary => BigInt(vary.length),
            elem: vary => BigInt(vary.attributes.length + vary.childNodes.length),
            tree: vary => {
                try {
                    return BigInt(vary.value);
                }
                catch {
                    return BigInt(vary.kids.length);
                }
            },
        });
    }
    $.$giper_baza_vary_cast_bint = $giper_baza_vary_cast_bint;
    function $giper_baza_vary_cast_real(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => vary.length,
            bool: vary => Number(vary),
            bint: vary => Number(vary),
            real: vary => vary,
            link: vary => null,
            text: vary => vary ? Number(vary) : null,
            time: vary => vary.valueOf(),
            dura: vary => vary.valueOf(),
            span: vary => vary.duration.valueOf(),
            dict: vary => Reflect.ownKeys(vary).length,
            list: vary => vary.length,
            elem: vary => Number(vary.attributes.length + vary.childNodes.length),
            tree: vary => Number(vary.value || vary.kids.length),
        });
    }
    $.$giper_baza_vary_cast_real = $giper_baza_vary_cast_real;
    function $giper_baza_vary_cast_link(vary) {
        return vary instanceof $giper_baza_link ? vary : null;
    }
    $.$giper_baza_vary_cast_link = $giper_baza_vary_cast_link;
    function $giper_baza_vary_cast_text(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => $mol_base64_ae_encode(new Uint8Array(vary.buffer, vary.byteOffset, vary.byteLength)),
            bool: vary => String(vary),
            bint: vary => String(vary),
            real: vary => String(vary),
            link: vary => vary.str,
            text: vary => vary,
            time: vary => String(vary),
            dura: vary => String(vary),
            span: vary => String(vary),
            dict: vary => JSON.stringify(vary),
            list: vary => JSON.stringify(vary),
            elem: vary => $mol_dom_serialize(vary),
            tree: vary => String(vary),
        });
    }
    $.$giper_baza_vary_cast_text = $giper_baza_vary_cast_text;
    function $giper_baza_vary_cast_time(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => new $mol_time_moment(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            link: vary => null,
            text: vary => {
                try {
                    return vary ? new $mol_time_moment(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => vary,
            dura: vary => null,
            span: vary => null,
            dict: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_time = $giper_baza_vary_cast_time;
    function $giper_baza_vary_cast_dura(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => new $mol_time_duration(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            link: vary => null,
            text: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            time: vary => null,
            dura: vary => vary,
            span: vary => null,
            dict: vary => new $mol_time_duration(vary),
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_dura = $giper_baza_vary_cast_dura;
    function $giper_baza_vary_cast_span(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => null,
            real: vary => null,
            link: vary => null,
            text: vary => {
                try {
                    return vary ? new $mol_time_interval(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => new $mol_time_interval({ start: vary, duration: 0 }),
            dura: vary => null,
            span: vary => vary,
            dict: vary => {
                try {
                    return new $mol_time_interval(vary);
                }
                catch {
                    return null;
                }
            },
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_span = $giper_baza_vary_cast_span;
    function $giper_baza_vary_cast_dict(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => null,
            real: vary => null,
            link: vary => null,
            text: vary => {
                if (!vary)
                    return null;
                try {
                    const res = JSON.parse(vary);
                    if (typeof res === 'object')
                        return res;
                    return null;
                }
                catch {
                    return null;
                }
            },
            time: vary => ({ ...vary }),
            dura: vary => ({ ...vary }),
            span: vary => ({ ...vary }),
            dict: vary => vary,
            list: vary => Object(vary[0]),
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_dict = $giper_baza_vary_cast_dict;
    function $giper_baza_vary_cast_list(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => [...vary],
            bool: vary => [vary],
            bint: vary => [vary.toString()],
            real: vary => Number.isFinite(vary) ? [vary] : null,
            link: vary => [vary.str],
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return [].concat(JSON.parse(vary));
                }
                catch {
                    return [vary];
                }
            },
            time: vary => [vary.toJSON()],
            dura: vary => [vary.toJSON()],
            span: vary => [vary.toJSON()],
            dict: vary => [vary],
            list: vary => vary,
            elem: vary => [$mol_dom_serialize(vary)],
            tree: vary => [vary.toString()],
        });
    }
    $.$giper_baza_vary_cast_list = $giper_baza_vary_cast_list;
    function $giper_baza_vary_cast_elem(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => $mol_jsx("body", null, $giper_baza_vary_cast_text(vary)),
            bool: vary => $mol_jsx("body", null, vary),
            bint: vary => $mol_jsx("body", null, vary),
            real: vary => $mol_jsx("body", null, vary),
            link: vary => $mol_jsx("body", null, vary.str),
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return vary ? $mol_dom_parse(vary, 'application/xhtml+xml').documentElement : null;
                }
                catch {
                    return $mol_jsx("body", null, vary);
                }
            },
            time: vary => $mol_jsx("body", null, vary),
            dura: vary => $mol_jsx("body", null, vary),
            span: vary => $mol_jsx("body", null, vary),
            dict: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            list: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            elem: vary => vary,
            tree: vary => $mol_jsx("body", null, vary),
        });
    }
    $.$giper_baza_vary_cast_elem = $giper_baza_vary_cast_elem;
    function $giper_baza_vary_cast_tree(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => vary instanceof Uint8Array ? $mol_tree2_bin_from_bytes(vary) : null,
            bool: vary => $mol_tree2.struct(vary.toString()),
            bint: vary => $mol_tree2.struct(vary.toString()),
            real: vary => $mol_tree2.struct(vary.toString()),
            link: vary => $mol_tree2.struct(vary.str),
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return $$.$mol_tree2_from_string(vary);
                }
                catch {
                    return $$.$mol_tree2.data(vary);
                }
            },
            time: vary => $mol_tree2.struct(vary.toString()),
            dura: vary => $mol_tree2.struct(vary.toString()),
            span: vary => $mol_tree2.struct(vary.toString()),
            dict: vary => $$.$mol_tree2_from_json(vary),
            list: vary => $$.$mol_tree2_from_json(vary),
            elem: vary => $$.$mol_tree2_xml_from_dom(vary),
            tree: vary => vary,
        });
    }
    $.$giper_baza_vary_cast_tree = $giper_baza_vary_cast_tree;
    $.$giper_baza_vary_cast_funcs = {
        none: () => null,
        blob: $giper_baza_vary_cast_blob,
        bool: $giper_baza_vary_cast_bool,
        bint: $giper_baza_vary_cast_bint,
        real: $giper_baza_vary_cast_real,
        link: $giper_baza_vary_cast_link,
        text: $giper_baza_vary_cast_text,
        time: $giper_baza_vary_cast_time,
        dura: $giper_baza_vary_cast_dura,
        span: $giper_baza_vary_cast_span,
        dict: $giper_baza_vary_cast_dict,
        list: $giper_baza_vary_cast_list,
        elem: $giper_baza_vary_cast_elem,
        tree: $giper_baza_vary_cast_tree,
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_pawn extends $mol_object {
        static tag = 'vals';
        static meta = null;
        land() {
            return null;
        }
        head() {
            return $giper_baza_link.hole;
        }
        land_link() {
            return this.land()?.link() ?? this.$.$giper_baza_auth.current().pass().lord();
        }
        link() {
            return new $giper_baza_link('___' + this.head()).resolve(this.land_link());
        }
        toJSON() {
            return this.link().str;
        }
        cast(Pawn) {
            return this.land().Pawn(Pawn).Head(this.head());
        }
        pawns(Pawn) {
            const land = this.land();
            const map = {
                term: () => land.Pawn(Pawn || $giper_baza_atom_vary),
                solo: () => land.Pawn(Pawn || $giper_baza_atom_vary),
                vals: () => land.Pawn(Pawn || $giper_baza_list_vary),
                keys: () => land.Pawn(Pawn || $giper_baza_dict),
            };
            return this.units().map(unit => map[unit.tag()]().Head(unit.self()));
        }
        units() {
            return this.units_of($giper_baza_link.hole);
        }
        units_of(peer) {
            const head = this.head();
            return this.land().sand_ordered({ head, peer }).filter(unit => !unit.dead() && unit.self().str !== '');
        }
        meta(next) {
            const prev = this.meta_of($giper_baza_link.hole);
            if (!next)
                return prev;
            if (prev?.str === next?.str)
                return prev;
            const head = this.head();
            this.land().post($giper_baza_link.hole, head, $giper_baza_link.hole, next);
            return next;
        }
        meta_of(peer) {
            const head = this.head();
            const unit = this.land().sand_ordered({ head, peer }).find(unit => !unit.dead() && unit.self().str === '') ?? null;
            return unit ? $giper_baza_vary_cast_link(this.land().sand_decode(unit)) : null;
        }
        filled() {
            return this.units().length > 0;
        }
        can_change() {
            return this.land().pass_rank(this.land().auth().pass()) >= $giper_baza_rank_post('late');
        }
        last_change() {
            const land = this.land();
            let last = 0;
            const visit = (sand) => {
                if (sand.time() > last)
                    last = sand.time();
                if (sand.tag() === 'term')
                    return;
                land.Pawn($giper_baza_pawn).Head(sand.self()).units().forEach(visit);
            };
            this.units().forEach(visit);
            return last ? $giper_baza_time_moment(last) : null;
        }
        authors() {
            const land = this.land();
            const peers = new Set();
            const visit = (sand) => {
                peers.add(land.lord_pass(sand.lord()));
                if (sand.tag() === 'term')
                    return;
                land.Pawn($giper_baza_pawn).Head(sand.self()).units_of(null).forEach(visit);
            };
            this.units_of(null).forEach(visit);
            return [...peers];
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head());
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_pawn.prototype, "link", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "cast", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "pawns", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "units_of", null);
    __decorate([
        $mol_mem
    ], $giper_baza_pawn.prototype, "meta", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "meta_of", null);
    __decorate([
        $mol_mem
    ], $giper_baza_pawn.prototype, "last_change", null);
    __decorate([
        $mol_mem
    ], $giper_baza_pawn.prototype, "authors", null);
    $.$giper_baza_pawn = $giper_baza_pawn;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_fund extends $mol_object {
        item_make;
        constructor(item_make) {
            super();
            this.item_make = item_make;
        }
        Head(head) {
            return this.item_make(head);
        }
        Data() {
            return this.Head($giper_baza_land_root.data);
        }
        Tine() {
            return this.Head($giper_baza_land_root.tine);
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_fund.prototype, "Head", null);
    $.$giper_baza_fund = $giper_baza_fund;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_log() {
        return this.$mol_state_arg.value('giper_baza_log') !== null;
    }
    $.$giper_baza_log = $giper_baza_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_bus extends $mol_object {
        name;
        handle;
        channel;
        constructor(name, handle) {
            super();
            this.name = name;
            this.handle = handle;
            const channel = new BroadcastChannel(name);
            channel.onmessage = (event) => this.handle(event.data);
            this.channel = channel;
        }
        destructor() {
            this.channel.close();
        }
        send(data) {
            this.channel.postMessage(data);
        }
    }
    $.$mol_bus = $mol_bus;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function batch(host, items, task) {
        items.call(host);
        const skip = new Set();
        while (true) {
            const snap = $mol_wire_sync(items).call(host);
            const news = snap.filter(item => !skip.has(item));
            if (!news.length)
                break;
            $mol_wire_sync(task).call(host, news);
            for (const item of news)
                skip.add(item);
        }
    }
    $.$giper_baza_land_root = {
        data: new $giper_baza_link(''),
        tine: new $giper_baza_link('AQAAAAAA'),
    };
    class $giper_baza_land extends $mol_object {
        link() {
            return this.auth().pass().lord();
        }
        auth() {
            return this.$.$giper_baza_auth.current();
        }
        faces = new $giper_baza_face_map;
        _pass = new $mol_wire_dict();
        _seal_item = new $mol_wire_dict();
        _seal_shot = new $mol_wire_dict();
        _gift = new $mol_wire_dict();
        _sand = new $mol_wire_dict();
        pass_add(pass) {
            if (this._pass.has(pass.lord().str))
                return;
            this._pass.set(pass.lord().str, pass);
        }
        seal_add(seal) {
            const prev = this._seal_shot.get(seal.shot().str);
            if (prev)
                return;
            for (const hash of seal.hash_list()) {
                const prev = this._seal_item.get(hash.str);
                if ($giper_baza_unit_seal.compare(prev, seal) <= 0)
                    continue;
                if (prev) {
                    prev.alive_items.delete(hash.str);
                    if (!prev.alive_items.size)
                        this.seal_del(prev);
                }
                this._seal_item.set(hash.str, seal);
            }
            const peer = seal.lord().peer();
            this.faces.peer_time(peer.str, seal.time(), seal.tick());
            this._seal_shot.set(seal.shot().str, seal);
            this.faces.peer_summ_shift(peer.str, +1);
        }
        gift_add(gift) {
            const mate = gift.mate();
            const prev = this._gift.get(mate.str);
            if ($giper_baza_unit_gift.compare(prev, gift) <= 0)
                return;
            const peer = gift.lord().peer();
            if (prev)
                this.gift_del(prev);
            else
                this.faces.peer_summ_shift(peer.str, +1);
            this._gift.set(mate.str, gift);
            this.faces.peer_time(peer.str, gift.time(), gift.tick());
            this.unit_seal_inc(gift);
            if ((prev?.rank() ?? $giper_baza_rank_deny) > gift.rank())
                this.rank_audit();
        }
        sand_add(sand) {
            let peers = this._sand.get(sand.head().str);
            if (!peers)
                this._sand.set(sand.head().str, peers = new $mol_wire_dict);
            let sands = peers.get(sand.lord().str);
            if (!sands)
                peers.set(sand.lord().str, sands = new $mol_wire_dict);
            const prev = sands.get(sand.self().str);
            if ($giper_baza_unit_sand.compare(prev, sand) <= 0)
                return;
            const peer = sand.lord().peer();
            if (prev)
                this.sand_del(prev);
            else
                this.faces.peer_summ_shift(peer.str, +1);
            sands.set(sand.self().str, sand);
            this.faces.peer_time(peer.str, sand.time(), sand.tick());
            this.unit_seal_inc(sand);
        }
        units_reaping = new Set();
        unit_seal_inc(unit) {
            const seal = this.unit_seal(unit);
            if (!seal)
                return;
            seal.alive_items.add(unit.hash().str);
        }
        unit_seal_dec(unit) {
            const seal = this.unit_seal(unit);
            if (!seal)
                return;
            seal.alive_items.delete(unit.hash().str);
            if (!seal.alive_items.size)
                this.seal_del(seal);
        }
        seal_del(seal) {
            const shot = seal.shot();
            if (!this._seal_shot.has(shot.str))
                return;
            this._seal_shot.delete(shot.str);
            this.faces.peer_summ_shift(seal.lord().peer().str, -1);
            for (const hash of seal.hash_list()) {
                if (this._seal_item.get(hash.str) === seal) {
                    this._seal_item.delete(hash.str);
                }
            }
            this.units_reaping.add(seal);
        }
        gift_del(gift) {
            const prev = this._gift.get(gift.mate().str);
            if (prev !== gift)
                return;
            this._gift.delete(gift.mate().str);
            this.faces.peer_summ_shift(gift.lord().peer().str, -1);
            this.units_reaping.add(gift);
            this.unit_seal_dec(gift);
        }
        sand_del(sand) {
            const peers = this._sand.get(sand.head().str);
            if (!peers)
                return;
            const sands = peers.get(sand.lord().str);
            if (!sands)
                return;
            const prev = sands.get(sand.self().str);
            if (prev !== sand)
                return;
            sands.delete(sand.self().str);
            this.faces.peer_summ_shift(sand.lord().peer().str, -1);
            this.units_reaping.add(sand);
            this.unit_seal_dec(sand);
        }
        lord_pass(lord) {
            return this._pass.get(lord.str) ?? null;
        }
        unit_seal(unit) {
            const seal = this._seal_item.get(unit.hash().str);
            if (!seal)
                return null;
            if (seal.lord().str != unit.lord().str)
                return null;
            return seal;
        }
        sand_get(head, lord, self) {
            return this._sand.get(head.str)?.get(lord.str)?.get(self.str) ?? null;
        }
        _self_all = new $mol_wire_dict();
        self_make(idea = Math.floor(Math.random() * 2 ** 48)) {
            const auth = this.auth();
            const rank = this.pass_rank(auth.pass());
            if (rank < $giper_baza_rank_tier.post)
                $mol_fail(new Error(`Rank too low (${rank})`));
            for (let i = 0; i < 4096; ++i) {
                idea = $mol_hash_numbers([idea]);
                if (!idea)
                    continue;
                const idea_link = $giper_baza_link.from_int(idea);
                if (/[æÆ]/.test(idea_link.str))
                    continue;
                if (this._self_all.has(idea_link.str))
                    continue;
                this._self_all.set(idea_link.str, null);
                return idea_link;
            }
            $mol_fail(new Error(`Too long self generation`));
        }
        area_make(idea = Math.floor($mol_wire_sync(Math).random() * 2 ** 48)) {
            let id = '';
            while (true) {
                idea = $mol_hash_numbers([idea]);
                if (!idea)
                    continue;
                id = $giper_baza_link.from_int(idea).str;
                if (/[æÆ]/.test(id))
                    continue;
                break;
            }
            const link = new $giper_baza_link(this.link().lord().str + '_' + id);
            const area = this.$.$giper_baza_glob.Land(link);
            area.inherit();
            area.bus();
            area.sync_mine();
            area.sync_yard();
            return area;
        }
        sync_rights() {
            return new $mol_wire_atom('', () => this.inherit()).fresh();
        }
        inherit() {
            const area = this.link();
            const lord = this.link().lord();
            if (area.str === lord.str)
                return;
            const Lord = this.$.$giper_baza_glob.Land(lord);
            Lord.units_saving();
            const units = new Set();
            for (const gift of Lord._gift.values()) {
                const prev = $mol_wire_sync(this._gift).get(gift.mate().str);
                if ($giper_baza_unit_gift.compare(prev, gift) <= 0)
                    continue;
                const seal = Lord.unit_seal(gift);
                if (!seal)
                    continue;
                units.add(gift);
                units.add(seal);
                units.add(Lord.lord_pass(gift.lord()));
                const mate = gift.mate();
                if (mate.str)
                    units.add(Lord.lord_pass(mate));
            }
            let part = $giper_baza_pack_part.from([...units]);
            const pack = $giper_baza_pack.make([[this.link().str, part]]);
            part = pack.parts()[0][1];
            this.diff_apply(part.units, 'skip_load');
        }
        Data(Pawn) {
            return this.Pawn(Pawn).Head($.$giper_baza_land_root.data);
        }
        Tine() {
            return this.Pawn($giper_baza_list_link).Head($.$giper_baza_land_root.tine);
        }
        Pawn(Pawn) {
            return new $giper_baza_fund((head) => {
                return Pawn.make({
                    land: $mol_const(this),
                    head: $mol_const(head),
                });
            });
        }
        total() {
            let total = this._gift.size + this._seal_item.size;
            for (const peers of this._sand.values()) {
                for (const units of peers.values()) {
                    total += units.size;
                }
            }
            return total;
        }
        king_pass() {
            return this.lord_pass(this.link().lord());
        }
        pass_rank(pass, next) {
            const prev = this.lord_rank(pass?.lord() ?? null);
            if (next === undefined)
                return prev;
            if (next === prev)
                return prev;
            this.give(pass, next);
            return next;
        }
        lord_tier(lord) {
            return $giper_baza_rank_tier_of(this.lord_rank(lord));
        }
        lord_rate(lord) {
            return $giper_baza_rank_rate_of(this.lord_rank(lord));
        }
        lord_rank(lord, next) {
            if (lord?.str === this.link().lord().str)
                return $giper_baza_rank_rule;
            if (next === undefined) {
                return this._gift.get(lord?.str ?? '')?.rank()
                    ?? this._gift.get($giper_baza_link.hole.str)?.rank()
                    ?? (this.encrypted() ? $giper_baza_rank_deny : $giper_baza_rank_read);
            }
            const pass = lord ? this.lord_pass(lord) : null;
            return this.pass_rank(pass, next);
        }
        diff_units(skip_faces = new $giper_baza_face_map) {
            this.units_signing();
            const skipped = new Map();
            const delta = new Set();
            const passes = new Set();
            function collect(unit) {
                const peer = unit.lord().peer().str;
                const face_limit = skip_faces.get(peer)?.time_tick ?? 0;
                if (unit.time_tick() > face_limit)
                    return delta.add(unit);
                const skipped_units = skipped.get(peer);
                if (skipped_units)
                    skipped_units.add(unit);
                else
                    skipped.set(peer, new Set([unit]));
            }
            for (const seal of this._seal_item.values())
                collect(seal);
            for (const gift of this._gift.values()) {
                collect(gift);
                if (gift.mate().str) {
                    if (skip_faces.has(gift.lord().peer().str))
                        continue;
                    const mate_pass = this.lord_pass(gift.mate());
                    if (mate_pass)
                        passes.add(mate_pass);
                }
            }
            for (const kids of this._sand.values()) {
                for (const peers of kids.values()) {
                    for (const sand of peers.values()) {
                        this.sand_load(sand);
                        collect(sand);
                    }
                }
            }
            for (const [peer, face] of skip_faces) {
                const skipped_units = skipped.get(peer);
                const mass = skipped_units?.size ?? 0;
                if (mass <= face.summ)
                    continue;
                if (this.$.$giper_baza_log())
                    $mol_wire_sync(this.$).$mol_log3_warn({
                        place: this,
                        message: 'Fail Summ',
                        hint: 'Relax and wait for full peer resync',
                        peer,
                        mass,
                        face,
                    });
                if (skipped_units)
                    for (const unit of skipped_units)
                        delta.add(unit);
            }
            for (const unit of delta) {
                if (skip_faces.has(unit.lord().peer().str))
                    continue;
                const pass = this.lord_pass(unit.lord());
                if (!pass)
                    return $mol_fail(new Error('No pass for lord'));
                passes.add(pass);
            }
            return [...passes, ...delta];
        }
        diff_parts(skip_faces = new $giper_baza_face_map) {
            const units = this.diff_units(skip_faces);
            return [[this.link().str, new $giper_baza_pack_part(units)]];
        }
        face_pack() {
            return $giper_baza_pack.make([[
                    this.link().str,
                    new $giper_baza_pack_part([], this.faces.clone()),
                ]]);
        }
        diff_apply(units, skip_load) {
            if (units.length === 0)
                return;
            if (!skip_load)
                this.loading();
            units = $mol_wire_sync(this.$).$giper_baza_unit_sort(units);
            const passes = new Map();
            const mixin_area = this.link().toBin();
            const mixin_lord = this.link().lord().toBin();
            for (const unit of units) {
                if (unit instanceof $giper_baza_auth_pass) {
                    passes.set(unit.hash().str, unit);
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_unit_seal) {
                    const lord_pass = this.lord_pass(unit.lord()) ?? passes.get(unit.lord().str);
                    if (!lord_pass)
                        return this.$.$mol_fail(new Error(`No Pass for Lord`, { cause: unit.lord() }));
                    if (!this.$.$giper_baza_unit_trusted_check(unit)) {
                        const mixin = unit.wide() ? mixin_lord : mixin_area;
                        const sens = unit.shot().mix(mixin);
                        const checked = $mol_wire_sync(lord_pass).verify(sens, unit.sign());
                        if (!checked)
                            return $mol_fail(new Error(`Wrong Sign`));
                    }
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_unit_seal) {
                    $giper_baza_unit_trusted_grant(unit);
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_auth_pass)
                    continue;
                if (this.lord_tier(unit.lord()) < unit.tier_min()) {
                    return this.$.$mol_fail(new Error('Too low Tier'));
                }
                const lord_pass = this.lord_pass(unit.lord()) ?? passes.get(unit.lord().str);
                if (!lord_pass)
                    return this.$.$mol_fail(new Error(`No Pass for Lord`, { cause: unit.lord() }));
                switch (unit.kind()) {
                    case 'seal': {
                        const seal = unit;
                        if (this.lord_rate(unit.lord()) < seal.rate_min()) {
                            return this.$.$mol_fail(new Error('Too low Rate'));
                        }
                        this.seal_add(seal);
                        break;
                    }
                    case 'gift': {
                        const gift = unit;
                        if (!this.$.$giper_baza_unit_trusted_check(gift)) {
                            const seal = this.unit_seal(gift);
                            if (!seal)
                                return this.$.$mol_fail(new Error(`No Seal for Gift`, { cause: gift }));
                        }
                        if (gift.mate().str) {
                            const mate_pass = this.lord_pass(gift.mate()) ?? passes.get(gift.mate().str);
                            if (!mate_pass)
                                return this.$.$mol_fail(new Error(`No Pass for Mate`, { cause: gift }));
                            this.pass_add(mate_pass);
                        }
                        this.gift_add(gift);
                        break;
                    }
                    case 'sand': {
                        const sand = unit;
                        if (!this.$.$giper_baza_unit_trusted_check(sand)) {
                            const seal = this.unit_seal(sand);
                            if (!seal)
                                return this.$.$mol_fail(new Error(`No Seal for Sand`, { cause: sand }));
                        }
                        this.sand_add(sand);
                        break;
                    }
                    default: {
                        return this.$.$mol_fail(new Error(`Unsupported Kind`));
                    }
                }
                this.pass_add(lord_pass);
            }
            return units;
        }
        units_steal(donor) {
            this.diff_apply(donor.diff_units(), 'skip_load');
        }
        rank_audit() {
            start: while (true) {
                for (const [shot, seal] of this._seal_shot) {
                    const rank = this.lord_rank(seal.lord());
                    if (rank >= seal.rank_min())
                        continue;
                    this.seal_del(seal);
                }
                for (const [lord, gift] of this._gift) {
                    const tier = this.lord_tier(gift.lord());
                    if (tier >= gift.tier_min())
                        continue;
                    this.gift_del(gift);
                    continue start;
                }
                for (const [head, peers] of this._sand) {
                    for (const [peer, sands] of peers) {
                        for (const [self, sand] of sands) {
                            const tier = this.lord_tier(sand.lord());
                            if (tier >= sand.tier_min())
                                continue;
                            this.sand_del(sand);
                        }
                    }
                }
                break;
            }
        }
        fork(preset = [[null, $giper_baza_rank_read]]) {
            const land = this.$.$giper_baza_glob.land_grab(preset);
            land.Tine().items_vary([this.link()]);
            return land;
        }
        sand_ordered({ head, peer }) {
            this.sync();
            const queue = (peer?.str)
                ? [...this._sand.get(head.str)?.get(peer.str)?.values() ?? []]
                : [...this._sand.get(head.str)?.values() ?? []].flatMap(units => [...units.values()]);
            const slices = new Map;
            for (const sand of queue)
                slices.set(sand, 0);
            merge: if (head.str !== $.$giper_baza_land_root.tine.str) {
                const tines = (this.Tine()?.items_vary().slice().reverse() ?? [])
                    .map($giper_baza_vary_cast_link)
                    .filter($mol_guard_defined);
                if (!tines.length)
                    break merge;
                const exists = new Set(queue.map(sand => sand.self().str));
                const glob = this.$.$giper_baza_glob;
                let slice = 0;
                for (const link of tines) {
                    ++slice;
                    const land = glob.Land(link);
                    for (const sand of land.sand_ordered({ head, peer })) {
                        if (exists.has(sand.self().str))
                            continue;
                        queue.push(sand);
                        exists.add(sand.self().str);
                        slices.set(sand, slice);
                    }
                }
            }
            if (queue.length < 2)
                return queue;
            const compare = (left, right) => {
                return (slices.get(left) - slices.get(right)) || $giper_baza_unit_sand.compare(left, right);
            };
            queue.sort(compare);
            let entry = {
                sand: null,
                next: null,
                prev: null,
            };
            const key = peer === null ? (sand) => sand.path() : (sand) => sand.self().str;
            const by_key = new Map([[entry.prev, entry]]);
            const by_self = new Map([[entry.prev, entry]]);
            while (queue.length) {
                const last = queue.pop();
                by_key.get(entry.prev).next = key(last);
                const item = { sand: last, next: null, prev: entry.prev };
                by_key.set(key(last), item);
                const exists = by_self.get(last.self().str);
                if (!exists || compare(exists.sand, last) < 0) {
                    by_self.set(last.self().str, item);
                }
                entry.prev = key(last);
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let lead = by_self.get(kid.lead().str || null);
                    if (!lead)
                        continue;
                    while (lead.next && (compare(by_key.get(lead.next).sand, kid) < 0))
                        lead = by_key.get(lead.next);
                    const exists1 = by_key.get(key(kid));
                    if (exists1) {
                        if ((lead.sand ? key(lead.sand) : null) === exists1.prev) {
                            exists1.sand = kid;
                            if (cursor === queue.length - 1)
                                queue.pop();
                            continue;
                        }
                        by_key.get(exists1.prev).next = exists1.next;
                        by_key.get(exists1.next).prev = exists1.prev;
                    }
                    const follower = by_key.get(lead.next);
                    follower.prev = key(kid);
                    const item = { sand: kid, next: lead.next, prev: lead.sand ? key(lead.sand) : null };
                    by_key.set(key(kid), item);
                    const exists2 = by_self.get(kid.self().str);
                    if (!exists2 || compare(exists2.sand, kid) < 0) {
                        by_self.set(kid.self().str, item);
                    }
                    lead.next = key(kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            const res = [];
            while (entry.next !== null) {
                entry = by_key.get(entry.next);
                res.push(entry.sand);
            }
            return res;
        }
        join() {
            this.encrypted(this.encrypted());
        }
        give(mate_pass, rank) {
            this.join();
            const gift = $giper_baza_unit_gift.make();
            const lord_pass = this.auth().pass();
            gift._land = this;
            gift.lord(lord_pass.lord());
            gift.rank(rank);
            gift.time_tick(this.faces.tick().time_tick);
            if (mate_pass)
                gift.mate(mate_pass.lord());
            if (rank >= $giper_baza_rank_read) {
                const secret_land = this.secret();
                if (secret_land) {
                    if (!mate_pass)
                        return $mol_fail(new Error(`Encrypted land can't be shared to everyone`));
                    const secret_mutual = this.auth().secret_mutual(mate_pass);
                    if (secret_mutual) {
                        const code = $mol_wire_sync(secret_mutual).close(secret_land, gift.salt());
                        gift.code().set(code);
                    }
                }
            }
            else {
                if (!this.encrypted())
                    $mol_fail(new Error('Unencrypted Land is always public'));
            }
            $giper_baza_unit_trusted_grant(gift);
            this.diff_apply([lord_pass, ...$mol_maybe(mate_pass), gift]);
            this.broadcast();
            return gift;
        }
        post(lead, head, self, vary, tag = 'term') {
            this.join();
            const lord_pass = this.auth().pass();
            const encrypted = this.encrypted();
            let open = $giper_baza_link_base(this.link(), () => $giper_baza_vary.pack([vary]));
            const length = encrypted ? Math.ceil((open.byteLength + 1) / 16) * 16 : open.byteLength;
            const sand = $giper_baza_unit_sand.make(length, tag);
            sand._open = open;
            sand._land = this;
            $giper_baza_unit_trusted_grant(sand);
            sand.time_tick(this.faces.tick().time_tick);
            sand.lord(lord_pass.lord());
            sand.lead(lead);
            sand.head(head);
            sand._vary = vary;
            sand.self(self ?? this.self_make($mol_hash_numbers(open, sand.idea_seed())));
            this.diff_apply([lord_pass, sand]);
            this.broadcast();
            return sand;
        }
        sand_move(sand, head, seat, peer = $giper_baza_link.hole) {
            if (sand.dead())
                $mol_fail(new RangeError(`Can't move wiped sand`));
            const units = this.sand_ordered({ head, peer }).filter(unit => !unit.dead());
            if (seat > units.length)
                $mol_fail(new RangeError(`Seat (${seat}) out of units length (${units.length})`));
            const lead = seat ? units[seat - 1].self() : $giper_baza_link.hole;
            const vary = this.sand_decode(sand);
            if (sand.head() === head) {
                const seat_prev = units.indexOf(sand);
                if (seat === seat_prev)
                    return;
                if (seat === seat_prev + 1)
                    return;
                const prev = seat_prev ? units[seat_prev - 1].self() : $giper_baza_link.hole;
                const next = units[seat_prev + 1];
                if (next)
                    this.post(prev, head, next.self(), this.sand_decode(next), next.tag());
            }
            else {
                this.sand_wipe(sand);
            }
            return this.post(lead, head, sand.self(), vary, sand.tag());
        }
        sand_wipe(sand, peer = $giper_baza_link.hole) {
            const head = sand.head();
            const units = this.sand_ordered({ head, peer }).filter(unit => !unit.dead());
            const seat = units.indexOf(sand);
            if (seat < 0)
                return sand;
            return this.post(seat ? units[seat - 1].self() : $giper_baza_link.hole, head, sand.self(), null, 'term');
        }
        broadcast() {
            this.$.$giper_baza_glob.yard().lands_news.add(this.link().str);
        }
        sync() {
            this.loading();
            this.sync_rights();
            this.bus();
            this.sync_mine();
            this.sync_yard();
            return this;
        }
        destructor() {
            this.$.$giper_baza_glob.yard().forget_land(this);
        }
        mine() {
            return this.$.$giper_baza_mine.land(this.link());
        }
        sync_mine() {
            return new $mol_wire_atom('', () => this.units_saving()).fresh();
        }
        sync_yard() {
            const root = new $mol_wire_atom('sync_yard', () => this.$.$giper_baza_glob.yard().sync_land(this.link()));
            setTimeout(() => root.fresh());
            return root;
        }
        bus() {
            return new this.$.$mol_bus(`$giper_baza_land:${this.link()}`, $mol_wire_async(buf => {
                const pack = new $giper_baza_pack(buf);
                const part = new Map(pack.parts()).get(this.link().str);
                for (const unit of part.units) {
                    $giper_baza_unit_trusted_grant(unit);
                    this.mine().units_persisted.add(unit);
                }
                this.diff_apply(part.units);
            }));
        }
        loading() {
            $mol_wire_solid();
            let units = $mol_wire_sync(this.mine()).units_load();
            if (this.$.$giper_baza_log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: 'Load Unit',
                    units: units,
                });
            $mol_wire_sync(this).diff_apply(units, 'skip_load');
        }
        sand_encoding() {
            this.loading();
            const sync = $mol_wire_sync(this);
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        const sync_sand = $mol_wire_sync(sand);
                        if (sync_sand._vary === undefined)
                            continue;
                        if (sync_sand._ball)
                            continue;
                        sync.sand_encode(sand);
                    }
                }
            }
        }
        units_unsigned() {
            const signing = [];
            for (const gift of this._gift.values()) {
                if (this.unit_seal(gift))
                    continue;
                signing.push(gift);
            }
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        if (this.unit_seal(sand))
                            continue;
                        signing.push(sand);
                    }
                }
            }
            return signing;
        }
        units_signing() {
            this.sand_encoding();
            batch(this, this.units_unsigned, this.units_sign);
        }
        units_unsaved() {
            const mine = this.mine();
            const persisting = [];
            const check_lord = (lord) => {
                const pass = this.lord_pass(lord);
                if (!pass)
                    return;
                if (mine.units_persisted.has(pass))
                    return;
                persisting.push(pass);
            };
            for (const gift of this._gift.values()) {
                if (mine.units_persisted.has(gift))
                    continue;
                persisting.push(gift);
                check_lord(gift.lord());
                check_lord(gift.mate());
            }
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        if ($mol_wire_sync(mine.units_persisted).has(sand))
                            continue;
                        persisting.push(sand);
                        check_lord(sand.lord());
                    }
                }
            }
            for (const seal of this._seal_shot.values()) {
                if (!seal.alive_items.size)
                    continue;
                if (mine.units_persisted.has(seal))
                    continue;
                persisting.push(seal);
            }
            return persisting;
        }
        units_saving() {
            this.units_signing();
            batch(this, this.units_unsaved, this.units_save);
        }
        async units_save(units) {
            const mine = this.mine();
            const part = new $giper_baza_pack_part(units);
            const pack = $giper_baza_pack.make([[this.link().str, part]]);
            this.bus().send(pack.buffer);
            const reaping = [...this.units_reaping];
            this.units_reaping.clear();
            await $mol_wire_async(mine).units_save({ ins: units, del: reaping });
            if (this.$.$giper_baza_log())
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Save Unit',
                    ins: units,
                    del: reaping,
                });
        }
        async units_sign(units) {
            await Promise.resolve();
            const lands = new Map();
            for (const unit of units) {
                if (!unit._land)
                    continue;
                let us = lands.get(unit._land);
                if (us)
                    us.push(unit.hash());
                else
                    lands.set(unit._land, [unit.hash()]);
            }
            const me = this.auth().pass().lord().str;
            for (const seal of this._seal_shot.values()) {
                if (seal.alive_full())
                    continue;
                if (seal.lord().str !== me)
                    continue;
                seal._land ??= this;
                let us = lands.get(this);
                if (!us)
                    lands.set(seal._land, us = []);
                const hashes = seal.alive_list();
                us.push(...hashes);
                this.seal_del(seal);
            }
            const threads = [...lands.entries()].flatMap(([land, hashes]) => {
                const auth = land.auth();
                const rate = $giper_baza_rank_rate_of(land.pass_rank(auth.pass()));
                const wide = Boolean(land.link().area().str);
                return $mol_array_chunks(hashes, $giper_baza_unit_seal_limit).map(async (hashes) => {
                    const seal = $giper_baza_unit_seal.make(hashes.length, wide);
                    seal.time_tick(this.faces.tick().time_tick);
                    seal.lord(auth.pass().lord());
                    seal.hash_list(hashes);
                    seal._land = this;
                    const shot = seal.shot().mix(this.link());
                    do {
                        seal.sign(await auth.sign(shot));
                    } while (seal.rate_min() > rate);
                    for (const hash of hashes)
                        seal.alive_items.add(hash.str);
                    return seal;
                });
            });
            const seals = await Promise.all(threads);
            for (const seal of seals)
                this.seal_add(seal);
            return seals;
        }
        async sand_encode(sand) {
            let bin = sand._open;
            if (sand._vary !== null) {
                const secret = sand._land.secret();
                if (secret)
                    bin = await secret.encrypt(bin, sand.salt());
            }
            sand.ball(bin);
            return sand;
        }
        sand_load(sand) {
            if (sand._ball)
                return;
            sand._ball = sand.big() ? $mol_wire_sync(this.mine()).ball_load(sand) : sand.data();
        }
        sand_decode(sand) {
            try {
                const open = this.sand_decrypt(sand);
                return $giper_baza_link_base(this.link(), () => $giper_baza_vary.take(open)[0]);
            }
            catch (error) {
                if (error instanceof Promise)
                    return $mol_fail_hidden(error);
                this.$.$mol_fail_log(error);
                return null;
            }
        }
        sand_decrypt(sand) {
            if (this.sand_get(sand.head(), sand.lord(), sand.self()) !== sand) {
                for (const id of this.Tine().items_vary() ?? []) {
                    const open = this.$.$giper_baza_glob.Land($giper_baza_vary_cast_link(id)).sand_decrypt(sand);
                    if (open)
                        return open;
                }
                return undefined;
            }
            const secret = this.secret();
            if (sand._open)
                return sand._open;
            if (!sand._ball)
                sand._ball = sand.big() ? $mol_wire_sync(this.mine()).ball_load(sand) : sand.data();
            if (secret && sand._ball && !sand.dead()) {
                try {
                    sand._open = $mol_wire_sync(secret).decrypt(sand._ball, sand.salt());
                }
                catch (error) {
                    if ($mol_fail_catch(error)) {
                        if (error.message)
                            $mol_fail_hidden(error);
                        else
                            $mol_fail_hidden(new Error(`Can't decrypt`, { cause: error }));
                    }
                }
            }
            else {
                sand._open = sand._ball;
            }
            return sand._open;
        }
        encryptable() {
            return !this._sand.size;
        }
        encrypted(next) {
            $mol_wire_solid();
            const gift = this._gift.get(this.link().str);
            const prev = gift?.code_exists() ?? false;
            if (next === undefined)
                return prev;
            if (this.faces.size) {
                if (prev === next)
                    return prev;
                $mol_fail(new Error(`Change encryption is forbidden`));
            }
            const auth = this.auth();
            const unit = $mol_wire_sync($giper_baza_unit_gift).make();
            $giper_baza_unit_trusted_grant(unit);
            unit.rank($giper_baza_rank_rule);
            unit.time_tick(this.faces.tick().time_tick);
            unit.lord(auth.pass().lord());
            unit.mate(auth.pass().lord());
            unit._land = this;
            if (next) {
                const secret = $mol_wire_sync($mol_crypto_sacred).make();
                const secret_mutual = auth.secret_mutual(auth.public());
                const secret_closed = $mol_wire_sync(secret_mutual).close(secret, unit.salt());
                unit.code().set(secret_closed);
            }
            this.diff_apply([auth.pass(), unit]);
            return next;
        }
        secret() {
            if (!this.encrypted())
                return null;
            const auth = this.auth();
            const gift = this._gift.get(auth.pass().lord().str);
            if (!gift)
                return $mol_fail(new Error(`Access denied`));
            if (!gift.code_exists())
                return $mol_fail(new Error(`No key to decrypt`));
            const secret_mutual = auth.secret_mutual(this.lord_pass(gift.lord()));
            if (!secret_mutual)
                return $mol_fail(new Error(`Can't decrypt secret`));
            return new $mol_crypto_sacred($mol_wire_sync(secret_mutual).open(gift.code(), gift.salt()).buffer);
        }
        dump() {
            this.units_saving();
            const units = [];
            for (const gift of this._gift.values())
                units.push(gift);
            for (const heads of this._sand.values()) {
                for (const sands of heads.values()) {
                    for (const sand of sands.values()) {
                        units.push(sand);
                    }
                }
            }
            return {
                land: this.link(),
                units
            };
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.faces.stat));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "self_make", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "area_make", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_rights", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "inherit", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "Data", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "Tine", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "Pawn", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "total", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "king_pass", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "pass_rank", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "face_pack", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "diff_apply", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "units_steal", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "fork", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_ordered", null);
    __decorate([
        $mol_mem,
        $mol_action
    ], $giper_baza_land.prototype, "join", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "give", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "post", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "sand_move", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "sand_wipe", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_mine", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_yard", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "bus", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "loading", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sand_encoding", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_unsigned", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_signing", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_unsaved", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_saving", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_load", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_decode", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_decrypt", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "encryptable", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "encrypted", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "secret", null);
    $.$giper_baza_land = $giper_baza_land;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_unit_kind;
    (function ($giper_baza_unit_kind) {
        $giper_baza_unit_kind[$giper_baza_unit_kind["sand"] = $giper_baza_slot_kind.sand] = "sand";
        $giper_baza_unit_kind[$giper_baza_unit_kind["gift"] = $giper_baza_slot_kind.gift] = "gift";
        $giper_baza_unit_kind[$giper_baza_unit_kind["seal"] = $giper_baza_slot_kind.seal] = "seal";
        $giper_baza_unit_kind[$giper_baza_unit_kind["pass"] = $giper_baza_slot_kind.pass] = "pass";
    })($giper_baza_unit_kind = $.$giper_baza_unit_kind || ($.$giper_baza_unit_kind = {}));
    $.$giper_baza_unit_trusted = new WeakSet();
    function $giper_baza_unit_trusted_grant(unit) {
        if (unit instanceof $giper_baza_auth_pass)
            return;
        $.$giper_baza_unit_trusted.add(unit);
    }
    $.$giper_baza_unit_trusted_grant = $giper_baza_unit_trusted_grant;
    function $giper_baza_unit_trusted_check(unit) {
        if (unit instanceof $giper_baza_auth_pass)
            return true;
        return $.$giper_baza_unit_trusted.has(unit);
    }
    $.$giper_baza_unit_trusted_check = $giper_baza_unit_trusted_check;
    function $giper_baza_unit_sort(units) {
        const nodes = new Map();
        const graph = new $mol_graph();
        for (const unit of units) {
            const self = unit.hash().str;
            nodes.set(self, unit);
            if (unit instanceof $giper_baza_auth_pass)
                continue;
            unit.choose({
                gift: gift => {
                    graph.link(self, unit.lord().str, 1);
                    graph.link(self, '', 1);
                    graph.link(gift.mate().str, self, 1);
                },
                sand: sand => {
                    graph.link(self, unit.lord().str, 1);
                    graph.link(self, '', 1);
                },
                seal: seal => {
                    graph.link(self, unit.lord().str, 0);
                    graph.link(self, '', 0);
                    for (const hash of seal.hash_list()) {
                        graph.link(hash.str, self, 1);
                    }
                }
            });
        }
        graph.acyclic(e => e);
        return [...graph.sorted].map(key => nodes.get(key)).filter(Boolean);
    }
    $.$giper_baza_unit_sort = $giper_baza_unit_sort;
    class $giper_baza_unit_base extends $mol_buffer {
        static compare(left, right) {
            if (!left && !right)
                return 0;
            if (!left)
                return +1;
            if (!right)
                return -1;
            return (right.time() - left.time())
                || $giper_baza_link_compare(left.lord(), right.lord())
                || (right.tick() - left.tick());
        }
        static narrow(buf) {
            const kind = $giper_baza_unit_kind[new $mol_buffer(buf).uint8(0)];
            const Type = {
                sand: $giper_baza_unit_sand,
                gift: $giper_baza_unit_gift,
                seal: $giper_baza_unit_seal,
                pass: $giper_baza_auth_pass,
            }[kind];
            return new Type(buf);
        }
        constructor(buffer, byteOffset = 0, byteLength = buffer.byteLength) {
            super(buffer, byteOffset, byteLength);
        }
        kind(next) {
            const val = this.uint8(0, next && $giper_baza_unit_kind[next]);
            const kind = $giper_baza_unit_kind[val];
            if (kind)
                return kind;
            $mol_fail(new Error(`Unknown unit kind (${val})`));
        }
        choose(ways) {
            return ways[this.kind()](this);
        }
        path() {
            throw new Error('Unimplemented');
        }
        id6(offset, next) {
            if (next === undefined) {
                return $giper_baza_link.from_bin(new Uint8Array(this.buffer, this.byteOffset + offset, 6));
            }
            else {
                const bin = next.toBin();
                if (bin.byteLength === 0)
                    return next;
                if (bin.byteLength !== 6)
                    $mol_fail(new Error(`Wrong Link size (${next})`));
                this.asArray().set(bin, this.byteOffset + offset);
                return next;
            }
        }
        id12(offset, next) {
            if (next === undefined) {
                return $giper_baza_link.from_bin(new Uint8Array(this.buffer, this.byteOffset + offset, 12));
            }
            else {
                const bin = next.toBin();
                if (bin.byteLength === 0)
                    return next;
                if (bin.byteLength !== 12)
                    $mol_fail(new Error(`Wrong Link size (${next})`));
                this.asArray().set(bin, this.byteOffset + offset);
                return next;
            }
        }
        time(next) {
            return this.uint32(4, next);
        }
        moment() {
            return new $mol_time_moment(Number(this.time() * 1000));
        }
        tick(next) {
            return this.uint16(2, next);
        }
        time_tick(next) {
            if (!next)
                return this.tick() + this.time() * 2 ** 16;
            this.tick(next % 2 ** 16);
            this.time(Math.floor(next / 2 ** 16));
            return next;
        }
        _lord = null;
        lord(next) {
            if (next)
                return this._lord = this.id12(8, next);
            return this._lord ?? (this._lord = this.id12(8));
        }
        salt() {
            return new Uint8Array(this.buffer, this.byteOffset + 2, 16);
        }
        hash() {
            return $giper_baza_link.hash_bin(this.asArray());
        }
        tier_min() {
            return $giper_baza_rank_tier.rule;
        }
        _land = null;
        dump() {
            return {};
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return this.toString();
        }
        toJSON() {
            return this.toString();
        }
        toString() {
            const hash = $mol_term_color.cyan('#' + this.hash().str);
            const lord = $mol_term_color.magenta('@' + this.lord().str);
            const time = $mol_term_color.gray($giper_baza_time_dump(this.time(), this.tick()));
            return `${lord} ${hash} ${time}`;
        }
    }
    $.$giper_baza_unit_base = $giper_baza_unit_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memory_pool extends Object {
        _free;
        constructor(size = Number.POSITIVE_INFINITY) {
            super();
            this._free = {
                from: -1,
                size: 0,
                next: {
                    from: 0,
                    size,
                    next: null,
                }
            };
        }
        acquire(size) {
            let prev = this._free;
            let next = prev.next;
            let max = 0;
            while (next.size < size) {
                if (next.size > max)
                    max = next.size;
                prev = next;
                next = next.next;
                if (!next)
                    $mol_fail(new Error(`No free space\nneed: ${size}\nhave: ${max}`));
            }
            const from = next.from;
            if (next.size === size) {
                prev.next = next.next;
            }
            else {
                next.from += size;
                next.size -= size;
            }
            return from;
        }
        release(from, size) {
            let prev = this._free;
            let next = prev.next;
            while (next.from < from) {
                prev = next;
                next = next.next;
                if (!next)
                    $mol_fail(new Error('Release out of allocated', { cause: { last: prev, from, size } }));
            }
            if ((from + size > next.from) || (prev.from + prev.size > from)) {
                $mol_fail(new Error('Double release', { cause: { prev, next, from, size } }));
            }
            const begin = prev.from + prev.size === from;
            const end = from + size === next.from;
            if (begin) {
                if (end) {
                    prev.size += size + next.size;
                    prev.next = next.next;
                }
                else {
                    prev.size += size;
                }
            }
            else {
                if (end) {
                    next.from -= size;
                    next.size += size;
                }
                else {
                    prev.next = { from, size, next };
                }
            }
        }
        acquired() {
        }
    }
    $.$mol_memory_pool = $mol_memory_pool;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_unit_seal_limit = 14;
    class $giper_baza_unit_seal extends $giper_baza_unit_base {
        static length(size) {
            return Math.ceil((84 + size * 12) / 8) * 8;
        }
        static make(size, wide) {
            const seal = this.from(this.length(size));
            seal.kind('seal');
            seal.meta({ size, wide });
            return seal;
        }
        meta(next) {
            return this.uint8(1, next && (next.size | (next.wide ? 0b1000_0000 : 0)));
        }
        size() {
            return this.meta() & 0b1111;
        }
        wide() {
            return Boolean(this.meta() & 0b1000_0000);
        }
        alive_items = new Set;
        alive_full() {
            return this.alive_items.size === $.$giper_baza_unit_seal_limit;
        }
        alive_list() {
            const alive = this.alive_items;
            return this.hash_list().filter(hash => alive.has(hash.str));
        }
        hash_item(index, next) {
            return this.id12(20 + index * 12, next);
        }
        _hash_list;
        hash_list(next) {
            if (next) {
                for (let i = 0; i < next.length; ++i) {
                    this.hash_item(i, next[i]);
                }
                return this._hash_list = next;
            }
            else {
                const list = [];
                const count = this.size();
                for (let i = 0; i < count; ++i) {
                    list.push(this.hash_item(i));
                }
                return this._hash_list = list;
            }
        }
        _shot;
        shot() {
            return this._shot ?? (this._shot = $giper_baza_link.hash_bin(new Uint8Array(this.buffer, this.byteOffset, this.byteLength - 64)));
        }
        sign(next) {
            const buf = new Uint8Array(this.buffer, this.byteOffset + this.byteLength - 64, 64);
            if (next)
                buf.set(next);
            return buf;
        }
        work() {
            let int = this.uint32(this.byteLength - 64);
            let count = 0;
            while (int & 1) {
                int >>>= 1;
                ++count;
            }
            return count;
        }
        rate_min() {
            return $giper_baza_rank_work_rates[this.work()];
        }
        tier_min() {
            return $giper_baza_rank_tier.post;
        }
        rank_min() {
            return this.tier_min() | this.rate_min();
        }
        path() {
            return `seal:${this.lord()}/${$giper_baza_time_dump(this.time(), this.tick())}`;
        }
        toString() {
            const items = this.hash_list().map(hash => $mol_term_color.cyan('#' + hash.str)).join(', ');
            const kind = $mol_term_color.green('%');
            return `${super.toString()} ${kind} ${items}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' ✍ ', $mol_dev_format_shade(this.moment().toString('YYYY-MM-DD hh:mm:ss'), ' &', this.tick().toString(16).padStart(2, '0')), ' #', $mol_dev_format_auto(this.hash()), ' ', $mol_dev_format_auto(this.hash_list()));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_seal, "make", null);
    $.$giper_baza_unit_seal = $giper_baza_unit_seal;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_unit_sand_tag;
    (function ($giper_baza_unit_sand_tag) {
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["term"] = 0] = "term";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["solo"] = 64] = "solo";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["vals"] = 128] = "vals";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["keys"] = 192] = "keys";
    })($giper_baza_unit_sand_tag = $.$giper_baza_unit_sand_tag || ($.$giper_baza_unit_sand_tag = {}));
    class $giper_baza_unit_sand extends $giper_baza_unit_base {
        static size_equator = 63;
        static size_max = 2 ** 16;
        _vary = undefined;
        _open = null;
        static length(size) {
            if (size > 2 ** 16)
                throw new Error(`Size too large (${size})`);
            return size > $giper_baza_unit_sand.size_equator ? 52 : Math.ceil((38 + size) / 8) * 8;
        }
        static length_ball(size) {
            if (size > 2 ** 16)
                throw new Error(`Size too large (${size})`);
            return size > $giper_baza_unit_sand.size_equator ? Math.ceil((size - 4) / 8) * 8 + 4 : 0;
        }
        static make(size, tag = 'term') {
            if (size >= 2 ** 16)
                throw new Error(`Size too large (${size})`);
            const sand = this.from(this.length(size));
            sand.kind('sand');
            if (size > $giper_baza_unit_sand.size_equator) {
                sand.uint16(38, size % 2 ** 16);
                size = 0;
            }
            sand.uint8(1, size | $giper_baza_unit_sand_tag[tag]);
            return sand;
        }
        tag() {
            return $giper_baza_unit_sand_tag[this.uint8(1) & 0b11_00_0000];
        }
        big() {
            return this.size() > $giper_baza_unit_sand.size_equator;
        }
        size() {
            let hint = this.uint8(1) & 0b111_111;
            return hint || this.uint16(38) || 2 ** 16;
        }
        dead() {
            if (this._vary === null)
                return true;
            if (this.size() > 1)
                return false;
            if (this.uint8(38) !== 78)
                return false;
            return true;
        }
        _self;
        self(next) {
            if (next === undefined && this._self !== undefined)
                return this._self;
            else
                return this._self = this.id6(20, next);
        }
        _head;
        head(next) {
            if (next === undefined && this._head !== undefined)
                return this._head;
            else
                return this._head = this.id6(26, next);
        }
        _lead;
        lead(next) {
            if (next === undefined && this._lead !== undefined)
                return this._lead;
            else
                return this._lead = this.id6(32, next);
        }
        path() {
            return `sand:${this.head()}/${this.lord()}/${this.self()}`;
        }
        _shot;
        shot(next) {
            if (!this.big())
                throw new Error('Access to Shot of small Sand is unavailable');
            if (next)
                return this._shot = this.id12(40, next);
            else
                return this._shot = this._shot ?? this.id12(40);
        }
        _data;
        data(next) {
            if (this.big())
                throw new Error('Access to Data of large Sand is unavailable');
            const data = this._data ?? new Uint8Array(this.buffer, this.byteOffset + 38, this.size());
            if (next)
                data.set(next);
            return data;
        }
        _ball;
        ball(next) {
            if (next === undefined) {
                if (this._ball)
                    return this._ball;
                if (this.big())
                    return this._ball;
                return this._ball = this.data();
            }
            else {
                if (this.big()) {
                    this.shot($giper_baza_link.hash_bin(next));
                    return this._ball = next;
                }
                else {
                    return this._ball = this.data(next);
                }
            }
        }
        idea_seed() {
            return $mol_hash_numbers(new Uint8Array(this.buffer, this.byteOffset + 26, 12));
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord(),
                lead: this.lead(),
                head: this.head(),
                self: this.self(),
                tag: this.tag(),
                size: this.size(),
                time: this.moment().toString('YYYY-MM-DD hh:mm:ss'),
            };
        }
        tier_min() {
            return (this.head().str === $giper_baza_land_root.tine.str)
                ? $giper_baza_rank_tier.pull
                : $giper_baza_rank_tier.post;
        }
        toString() {
            const lead = $mol_term_color.blue(this.lead().str || '__knot__');
            const head = $mol_term_color.blue(this.head().str || '__root__');
            const self = $mol_term_color.blue(this.self().str || '__meta__');
            const tag = $mol_term_color.green({
                term: 'T',
                solo: 'S',
                vals: 'V',
                keys: 'K',
            }[this.tag()]);
            const vary = this._vary === undefined ? '' : $mol_term_color.yellow(String(this._vary));
            return `${super.toString()} ${tag} ${lead}\\${head}/${self} ${vary}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 📦 ', $mol_dev_format_shade(this.moment().toString('YYYY-MM-DD hh:mm:ss'), ' !', this.tick().toString(16).padStart(2, '0')), ' #', $mol_dev_format_auto(this.hash()), ' ', this.lead().str || '__knot__', $mol_dev_format_shade('\\'), $mol_dev_format_accent(this.head().str || '__root__'), $mol_dev_format_shade('/'), this.self().str || '__meta__', ' ', {
                term: '💼',
                solo: '1️⃣',
                vals: '🎹',
                keys: '🔑',
            }[this.tag()], ' ', $mol_dev_format_auto(this._vary));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_sand, "make", null);
    $.$giper_baza_unit_sand = $giper_baza_unit_sand;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_unit_gift_sort(gifts) {
        const dict = new Map();
        const graph = new $mol_graph();
        for (const gift of gifts) {
            const key = gift.mate().str;
            dict.set(key, gift);
            graph.link(key, gift.lord().str);
            graph.link(key, '');
        }
        graph.acyclic(() => 1);
        const keys = [...graph.sorted];
        return keys.map(key => dict.get(key)).filter(Boolean);
    }
    $.$giper_baza_unit_gift_sort = $giper_baza_unit_gift_sort;
    class $giper_baza_unit_gift extends $giper_baza_unit_base {
        static length() {
            return 48;
        }
        static make() {
            const sand = this.from(this.length());
            sand.kind('gift');
            return sand;
        }
        rank(next) {
            if (next !== undefined)
                this.uint8(0, $giper_baza_unit_kind.gift);
            const res = this.uint8(1, next);
            if (res < $giper_baza_rank_deny || res > $giper_baza_rank_rule) {
                $mol_fail(new RangeError(`Wrong rank ${res}`));
            }
            return res;
        }
        tier() {
            return (this.rank() & $giper_baza_rank_tier.rule);
        }
        rate() {
            return (this.rank() & $giper_baza_rank_rate.just);
        }
        mate(next) {
            return this.id12(20, next);
        }
        path() {
            return `gift:${this.mate()}`;
        }
        _code;
        code() {
            return this._code ?? (this._code = new Uint8Array(this.buffer, this.byteOffset + 32, 16));
        }
        code_exists() {
            return this.code().some(b => b);
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord(),
                mate: this.mate(),
                tier: $giper_baza_rank_tier[this.tier()],
                rate: this.rate(),
                time: this.moment().toString('YYYY-MM-DD hh:mm:ss'),
            };
        }
        tier_min() {
            return $giper_baza_rank_tier.rule;
        }
        toString() {
            const mate = $mol_term_color.magenta('@' + (this.mate().str || '______anyone_____'));
            const read = $mol_term_color.green(this.code().some(v => v) ? 'X' : 'O');
            const rank = $mol_term_color.cyan($giper_baza_rank_tier[this.tier()] + ':' + this.rate().toString(16).toUpperCase());
            return `${super.toString()} ${read} ${mate} ${rank}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 🏅', ' ', $mol_dev_format_shade(this.moment().toString('YYYY-MM-DD hh:mm:ss'), ' !', this.tick().toString(16).padStart(2, '0')), ' #', $mol_dev_format_auto(this.hash()), ' 👾', $mol_dev_format_accent(this.mate().str || '______anyone_____'), this.code().some(v => v) ? ' 🔐' : ' 👀', $giper_baza_rank_tier[this.tier()], ':', this.rate().toString(16).toUpperCase());
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_gift, "make", null);
    $.$giper_baza_unit_gift = $giper_baza_unit_gift;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, replace, }) {
        if (!update)
            update = (next, prev, lead) => prev;
        if (!replace)
            replace = (next, prev, lead) => insert(next, drop(prev, lead));
        if (to > prev.length)
            to = prev.length;
        if (from > to)
            from = to;
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = replace(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_list_vary extends $giper_baza_pawn {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.vals];
        items_vary(next, tag = 'term') {
            const units = this.units();
            if (next === undefined)
                return units.map(unit => this.land().sand_decode(unit));
            this.splice(next, 0, units.length, tag);
            return this.items_vary();
        }
        splice(next, from = this.units().length, to = from, tag = 'term') {
            const land = this.land();
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(this.land().sand_decode(prev), next),
                drop: (prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), null),
                insert: (next, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, this.head(), land.self_make(), next, tag),
                replace: (next, prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), next, prev.tag()),
            });
        }
        find(vary) {
            for (const unit of this.units()) {
                if ($mol_compare_deep(this.land().sand_decode(unit), vary))
                    return unit;
            }
            return null;
        }
        has(vary, next, tag = 'term') {
            if (next === undefined)
                return Boolean(this.find(vary));
            if (next)
                this.add(vary, tag);
            else
                this.cut(vary);
            return next;
        }
        add(vary, tag = 'term') {
            if (this.has(vary))
                return;
            this.land().post($giper_baza_link.hole, this.head(), null, vary, tag);
        }
        cut(vary) {
            const units = [...this.units()];
            for (let i = 0; i < units.length; ++i) {
                if (!$mol_compare_deep(this.land().sand_decode(units[i]), vary))
                    continue;
                this.land().post(units[i - 1]?.self() ?? $giper_baza_link.hole, units[i].head(), units[i].self(), null);
                units.splice(i, 1);
                --i;
            }
        }
        move(from, to) {
            this.land().sand_move(this.units()[from], this.head(), to);
        }
        wipe(seat) {
            this.land().sand_wipe(this.units()[seat]);
        }
        pawn_make(Pawn, vary, tag = 'term') {
            this.splice([vary], undefined, undefined, tag);
            return this.land().Pawn(Pawn).Head(this.units().at(-1).self());
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.items_vary()));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_list_vary.prototype, "items_vary", null);
    __decorate([
        $mol_action
    ], $giper_baza_list_vary.prototype, "splice", null);
    $.$giper_baza_list_vary = $giper_baza_list_vary;
    function $giper_baza_list(parse) {
        class $giper_baza_list extends $giper_baza_list_vary {
            static parse = parse;
            items(next) {
                return this.items_vary(next?.map(parse)).map(parse);
            }
            static toString() {
                return this === $giper_baza_list ? '$giper_baza_list<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem
        ], $giper_baza_list.prototype, "items", null);
        return $giper_baza_list;
    }
    $.$giper_baza_list = $giper_baza_list;
    class $giper_baza_list_bin extends $giper_baza_list($giper_baza_vary_cast_blob) {
    }
    $.$giper_baza_list_bin = $giper_baza_list_bin;
    class $giper_baza_list_bool extends $giper_baza_list($giper_baza_vary_cast_bool) {
    }
    $.$giper_baza_list_bool = $giper_baza_list_bool;
    class $giper_baza_list_int extends $giper_baza_list($giper_baza_vary_cast_bint) {
    }
    $.$giper_baza_list_int = $giper_baza_list_int;
    class $giper_baza_list_real extends $giper_baza_list($giper_baza_vary_cast_real) {
    }
    $.$giper_baza_list_real = $giper_baza_list_real;
    class $giper_baza_list_link extends $giper_baza_list($giper_baza_vary_cast_link) {
    }
    $.$giper_baza_list_link = $giper_baza_list_link;
    class $giper_baza_list_str extends $giper_baza_list($giper_baza_vary_cast_text) {
    }
    $.$giper_baza_list_str = $giper_baza_list_str;
    class $giper_baza_list_time extends $giper_baza_list($giper_baza_vary_cast_time) {
    }
    $.$giper_baza_list_time = $giper_baza_list_time;
    class $giper_baza_list_dur extends $giper_baza_list($giper_baza_vary_cast_dura) {
    }
    $.$giper_baza_list_dur = $giper_baza_list_dur;
    class $giper_baza_list_range extends $giper_baza_list($giper_baza_vary_cast_span) {
    }
    $.$giper_baza_list_range = $giper_baza_list_range;
    class $giper_baza_list_json extends $giper_baza_list($giper_baza_vary_cast_dict) {
    }
    $.$giper_baza_list_json = $giper_baza_list_json;
    class $giper_baza_list_jsan extends $giper_baza_list($giper_baza_vary_cast_list) {
    }
    $.$giper_baza_list_jsan = $giper_baza_list_jsan;
    class $giper_baza_list_dom extends $giper_baza_list($giper_baza_vary_cast_elem) {
    }
    $.$giper_baza_list_dom = $giper_baza_list_dom;
    class $giper_baza_list_tree extends $giper_baza_list($giper_baza_vary_cast_tree) {
    }
    $.$giper_baza_list_tree = $giper_baza_list_tree;
    class $giper_baza_list_link_base extends $giper_baza_list_link {
    }
    $.$giper_baza_list_link_base = $giper_baza_list_link_base;
    function $giper_baza_list_link_to(Value) {
        class $giper_baza_list_link_to extends $giper_baza_list_link_base {
            static Value = $mol_memo.func(Value);
            static toString() {
                return this === $giper_baza_list_link_to ? '$giper_baza_list_link_to<' + Value() + '>' : super.toString();
            }
            remote_list(next) {
                const glob = this.$.$giper_baza_glob;
                const Pawn = Value();
                return this.items_vary(next?.map(item => item.link()))
                    .map($giper_baza_vary_cast_link)
                    .filter($mol_guard_defined)
                    .map(link => glob.Pawn(link, Pawn));
            }
            remote_add(item) {
                this.add(item.link());
            }
            make(config) {
                const Pawn = Value();
                let pawn;
                if (config === null || typeof config === 'number') {
                    const self = this.land().self_make(config || undefined);
                    pawn = this.land().Pawn(Pawn).Head(self);
                    this.splice([pawn.link()]);
                }
                else if (config instanceof $giper_baza_land) {
                    const land = config.area_make();
                    this.splice([land.link()]);
                    pawn = land.Pawn(Pawn).Data();
                }
                else if (config) {
                    const land = this.$.$giper_baza_glob.land_grab(config);
                    this.splice([land.link()]);
                    pawn = land.Pawn(Pawn).Data();
                }
                else {
                    return $mol_fail(new Error('Wrong config'));
                }
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                return pawn;
            }
        }
        __decorate([
            $mol_mem
        ], $giper_baza_list_link_to.prototype, "remote_list", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "remote_add", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "make", null);
        return $giper_baza_list_link_to;
    }
    $.$giper_baza_list_link_to = $giper_baza_list_link_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_mine extends $mol_object {
        static land(land) {
            return this.make({
                land: $mol_const(land)
            });
        }
        land() {
            return $giper_baza_link.hole;
        }
        unit_deletes = 0;
        unit_inserts = 0;
        ball_inserts = 0;
        ball_deletes = 0;
        units_persisted = new WeakSet();
        units_save(diff) { }
        units_load() {
            return [];
        }
        ball_load(sand) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_mine, "land", null);
    $.$giper_baza_mine = $giper_baza_mine;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_mine_fs_yym_act extends $mol_object2 {
        yym;
        constructor(yym) {
            super();
            this.yym = yym;
        }
        transaction;
        offsets_del = new WeakMap;
        offsets_ins = new WeakMap;
        save(...data) {
            let offset = this.offsets_ins.get(data[0].buffer);
            if (offset === undefined) {
                offset = this.yym.offsets.get(data[0].buffer);
                if (offset)
                    return offset;
                let size = data.reduce((sum, buf) => sum + buf.byteLength, 0);
                size = Math.ceil(size / 8) * 8;
                offset = this.yym.pool.acquire(size);
                this.offsets_ins.set(data[0].buffer, offset);
                this.yym.offsets.set(data[0].buffer, offset);
            }
            this.transaction.write({
                buffer: data,
                position: offset,
            });
            return offset;
        }
        free(data, size = data.byteLength) {
            size = Math.ceil(size / 8) * 8;
            let offset = this.offsets_del.get(data.buffer);
            if (offset === undefined) {
                offset = this.yym.offsets.get(data.buffer);
                if (!offset)
                    return;
                this.offsets_del.set(data.buffer, offset);
                this.yym.pool.release(offset, size);
                this.yym.offsets.delete(data.buffer);
            }
            this.transaction.write({
                buffer: new Uint8Array(size),
                position: offset,
            });
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs_yym_act.prototype, "save", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs_yym_act.prototype, "free", null);
    $.$giper_baza_mine_fs_yym_act = $giper_baza_mine_fs_yym_act;
    class $giper_baza_mine_fs_yym extends $mol_object2 {
        sides;
        pool = new $mol_memory_pool;
        offsets = new Map;
        constructor(sides) {
            super();
            this.sides = sides;
        }
        destructor() {
            if (!this.sides[1].exists())
                return;
            this.sides[1].open('write_only', 'write_only').flush();
            this.sides[0].exists(false);
        }
        load_init() {
            const version = (file) => file.modified()?.valueOf() ?? Number.POSITIVE_INFINITY;
            if (version(this.sides[0]) < version(this.sides[1]))
                this.sides.reverse();
        }
        load() {
            this.load_init();
            const tx = this.sides[0].open('create', 'read_only');
            const data = tx.read();
            tx.destructor();
            this.pool.acquire(data.byteLength);
            return data;
        }
        atomic(task) {
            this.save_init();
            const act = new $giper_baza_mine_fs_yym_act(this);
            const tx1 = act.transaction = this.sides[1].open('create', 'write_only');
            task(act);
            tx1.flush();
            tx1.destructor();
            this.sides.reverse();
            const tx2 = act.transaction = this.sides[1].open('create', 'write_only');
            task(act);
            tx2.destructor();
        }
        save_init() {
            this.load_init();
            this.sides[0].clone(this.sides[1].path());
        }
        empty() {
            this.load_init();
            return !this.sides[0].size();
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_mine_fs_yym.prototype, "load_init", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_mine_fs_yym.prototype, "save_init", null);
    __decorate([
        $mol_mem
    ], $giper_baza_mine_fs_yym.prototype, "empty", null);
    $.$giper_baza_mine_fs_yym = $giper_baza_mine_fs_yym;
    class $giper_baza_mine_fs extends $giper_baza_mine {
        store() {
            const land = this.land().str;
            const root = this.$.$mol_file.relative('.baza');
            const dir = root.resolve(land.slice(0, 2));
            dir.exists(true);
            return new $giper_baza_mine_fs_yym([
                dir.resolve(land + '.yin.baza'),
                dir.resolve(land + '.yan.baza'),
            ]);
        }
        store_init() {
            if (!this.store().empty())
                return;
            const head = $giper_baza_pack.make([[this.land().str, new $giper_baza_pack_part]]);
            this.store().atomic(side => side.save(head));
        }
        units_save(diff) {
            this.store_init();
            this.store().atomic(side => {
                for (const unit of diff.del) {
                    if (unit instanceof $giper_baza_unit_sand && unit.big()) {
                        side.free(unit, unit.byteLength + unit.size());
                    }
                    else {
                        side.free(unit);
                    }
                }
                for (const unit of diff.ins) {
                    if (unit instanceof $giper_baza_unit_sand && unit.big())
                        side.save(unit, unit.ball());
                    else
                        side.save(unit);
                }
            });
            for (const unit of diff.ins) {
                this.units_persisted.add(unit);
            }
        }
        units_load() {
            const buf = this.store().load();
            if (!buf.length)
                return [];
            const pack = $giper_baza_pack.from(buf);
            const parts = new Map(pack.parts(this.store().offsets, this.store().pool));
            if (parts.size > 1)
                return $mol_fail(new Error('Wrong lands count', { cause: { count: parts.size } }));
            for (const [land, part] of parts) {
                if (land !== this.land().str)
                    return $mol_fail(new Error('Unexpected land', { cause: { expected: this.land().str, existen: land } }));
                for (const unit of part.units) {
                    this.units_persisted.add(unit);
                    $giper_baza_unit_trusted_grant(unit);
                }
                return part.units;
            }
            return [];
        }
        destructor() {
            this.store().destructor();
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_mine_fs.prototype, "store", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_mine_fs.prototype, "store_init", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs.prototype, "units_save", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs.prototype, "units_load", null);
    $.$giper_baza_mine_fs = $giper_baza_mine_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_mine = $giper_baza_mine_fs;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.keys];
        keys() {
            return this.items_vary();
        }
        dive(key, Pawn, auto) {
            if (this.can_change() && auto !== undefined)
                this.has(key, true, Pawn.tag);
            const unit = this.find(key);
            return unit ? this.land().Pawn(Pawn).Head(unit.self()) : null;
        }
        static schema = {};
        static with(schema, path = '') {
            const prefix = path ? path + ':' : '';
            const $giper_baza_dict_with = class $giper_baza_dict_with extends this {
                static path = path;
                static toString() {
                    if (this !== $giper_baza_dict_with)
                        return super.toString();
                    const params = Object.entries(schema).map(([name, type]) => `${name}: ${type}`);
                    return '$giper_baza_dict.with<{' + params.join(', ') + '}>';
                }
            };
            for (const Field in schema) {
                Object.defineProperty($giper_baza_dict_with.prototype, Field, {
                    value: function (auto) {
                        return this.dive(prefix + Field, schema[Field], auto);
                    }
                });
            }
            return Object.assign($giper_baza_dict_with, { schema: { ...this.schema, ...schema } });
        }
        ;
        [$mol_dev_format_head]() {
            const keys = $mol_wire_probe(() => this.keys());
            const pawns = $mol_wire_probe(() => this.pawns(null)) ?? [];
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(keys?.map((key, index) => new Pair(key, pawns[index]))));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_dict.prototype, "keys", null);
    $.$giper_baza_dict = $giper_baza_dict;
    class Pair {
        key;
        val;
        constructor(key, val) {
            this.key = key;
            this.val = val;
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_tr({}, $mol_dev_format_td({}, $mol_dev_format_auto(this.key)), $mol_dev_format_td({}, ': '), $mol_dev_format_td({}, $mol_dev_format_auto(this.val)));
        }
    }
    function $giper_baza_dict_to(Value) {
        return class $giper_baza_dict_to extends $giper_baza_dict {
            Value = Value;
            key(key, auto) {
                return this.dive(key, this.Value, auto);
            }
            static toString() {
                return this === $giper_baza_dict_to ? '$giper_baza_dict_to<' + Value + '>' : super.toString();
            }
        };
    }
    $.$giper_baza_dict_to = $giper_baza_dict_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let nums = new Array(str.length);
        for (let i = 0; i < str.length; ++i)
            nums[i] = str.charCodeAt(i);
        return $mol_hash_numbers(nums);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_atom_vary extends $giper_baza_pawn {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.solo];
        pick_unit(peer) {
            return this.units_of(peer).at(0);
        }
        vary(next) {
            return this.vary_of($giper_baza_link.hole, next);
        }
        vary_of(peer, next) {
            let unit_prev = this.pick_unit(peer);
            let prev = unit_prev ? this.land().sand_decode(unit_prev) : null;
            if (next === undefined)
                return prev;
            if ($mol_compare_deep(prev, next))
                return next;
            this.land().post($giper_baza_link.hole, unit_prev?.head() ?? this.head(), unit_prev?.self() ?? null, next);
            return this.vary_of(peer);
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.vary()));
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_atom_vary.prototype, "vary_of", null);
    $.$giper_baza_atom_vary = $giper_baza_atom_vary;
    class $giper_baza_atom_enum_base extends $giper_baza_atom_vary {
        static options = [];
    }
    $.$giper_baza_atom_enum_base = $giper_baza_atom_enum_base;
    function $giper_baza_atom_enum(options) {
        class $giper_baza_atom_enum extends $giper_baza_atom_enum_base {
            static options = options;
            static toString() {
                return this === $giper_baza_atom_enum ? '$giper_baza_atom_enum<' + options.map($giper_baza_vary_cast_text) + '>' : super.toString();
            }
            val(next) {
                return this.val_of($giper_baza_link.hole, next);
            }
            val_of(peer, next) {
                validate: if (next !== undefined) {
                    for (const option of options) {
                        if ($mol_compare_deep(option, next))
                            break validate;
                    }
                    $mol_fail(new Error(`Wrong value (${$giper_baza_vary_cast_text(next)})`));
                }
                const val = this.vary_of(peer, next);
                for (const option of options) {
                    if ($mol_compare_deep(option, val))
                        return val;
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom_enum.prototype, "val_of", null);
        return $giper_baza_atom_enum;
    }
    $.$giper_baza_atom_enum = $giper_baza_atom_enum;
    function $giper_baza_atom(parse) {
        class $giper_baza_atom extends $giper_baza_atom_vary {
            static parse = parse;
            val(next) {
                return this.val_of($giper_baza_link.hole, next);
            }
            val_of(peer, next) {
                if (next !== undefined)
                    parse(next);
                const res = this.vary_of(peer, next);
                try {
                    return parse(res);
                }
                catch {
                    return null;
                }
            }
            static toString() {
                return this === $giper_baza_atom ? '$giper_baza_atom<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom.prototype, "val_of", null);
        return $giper_baza_atom;
    }
    $.$giper_baza_atom = $giper_baza_atom;
    class $giper_baza_atom_blob extends $giper_baza_atom($giper_baza_vary_cast_blob) {
    }
    $.$giper_baza_atom_blob = $giper_baza_atom_blob;
    class $giper_baza_atom_bool extends $giper_baza_atom($giper_baza_vary_cast_bool) {
    }
    $.$giper_baza_atom_bool = $giper_baza_atom_bool;
    class $giper_baza_atom_bint extends $giper_baza_atom($giper_baza_vary_cast_bint) {
    }
    $.$giper_baza_atom_bint = $giper_baza_atom_bint;
    class $giper_baza_atom_real extends $giper_baza_atom($giper_baza_vary_cast_real) {
    }
    $.$giper_baza_atom_real = $giper_baza_atom_real;
    class $giper_baza_atom_link extends $giper_baza_atom($giper_baza_vary_cast_link) {
    }
    $.$giper_baza_atom_link = $giper_baza_atom_link;
    class $giper_baza_atom_text extends $giper_baza_atom($giper_baza_vary_cast_text) {
    }
    $.$giper_baza_atom_text = $giper_baza_atom_text;
    class $giper_baza_atom_time extends $giper_baza_atom($giper_baza_vary_cast_time) {
    }
    $.$giper_baza_atom_time = $giper_baza_atom_time;
    class $giper_baza_atom_dura extends $giper_baza_atom($giper_baza_vary_cast_dura) {
    }
    $.$giper_baza_atom_dura = $giper_baza_atom_dura;
    class $giper_baza_atom_span extends $giper_baza_atom($giper_baza_vary_cast_span) {
    }
    $.$giper_baza_atom_span = $giper_baza_atom_span;
    class $giper_baza_atom_dict extends $giper_baza_atom($giper_baza_vary_cast_dict) {
    }
    $.$giper_baza_atom_dict = $giper_baza_atom_dict;
    class $giper_baza_atom_list extends $giper_baza_atom($giper_baza_vary_cast_list) {
    }
    $.$giper_baza_atom_list = $giper_baza_atom_list;
    class $giper_baza_atom_elem extends $giper_baza_atom($giper_baza_vary_cast_elem) {
    }
    $.$giper_baza_atom_elem = $giper_baza_atom_elem;
    class $giper_baza_atom_tree extends $giper_baza_atom($giper_baza_vary_cast_tree) {
    }
    $.$giper_baza_atom_tree = $giper_baza_atom_tree;
    class $giper_baza_atom_link_base extends $giper_baza_atom_link {
        static Value = $giper_baza_dict;
    }
    $.$giper_baza_atom_link_base = $giper_baza_atom_link_base;
    function $giper_baza_atom_link_to(Value) {
        class $giper_baza_atom_link_to extends $giper_baza_atom_link_base {
            Value = $mol_memo.func(Value);
            static toString() {
                return this === $giper_baza_atom_link_to ? '$giper_baza_atom_link_to<' + Value() + '>' : super.toString();
            }
            remote(next) {
                return this.remote_of($giper_baza_link.hole, next);
            }
            remote_of(peer, next) {
                let link = next?.link() ?? next;
                link = $giper_baza_vary_cast_link(this.vary_of(peer, link));
                if (!link)
                    return null;
                return this.$.$giper_baza_glob.Pawn(link, Value());
            }
            ensure(config) {
                return this.ensure_of($giper_baza_link.hole, config);
            }
            ensure_of(peer, config) {
                if (!this.val_of(peer)) {
                    if (config === null)
                        this.ensure_here(peer);
                    else if (config instanceof $giper_baza_land)
                        this.ensure_area(peer, config);
                    else if (config)
                        this.ensure_lord(peer, config);
                    else
                        return null;
                }
                return this.remote_of(peer);
            }
            ensure_here(peer) {
                const Pawn = Value();
                const idea = $mol_hash_string(this.link().str);
                const head = this.land().self_make(idea);
                const pawn = this.land().Pawn(Pawn).Head(head);
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                this.remote_of(peer, pawn);
            }
            ensure_area(peer, land) {
                const Pawn = Value();
                const idea = $mol_hash_string(this.link().str);
                const area = land.area_make(idea);
                const pawn = area.Data(Pawn);
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                this.val_of(peer, pawn.link());
            }
            ensure_lord(peer, preset) {
                const Pawn = Value();
                const land = this.$.$giper_baza_glob.land_grab(preset);
                const pawn = land.Data(Pawn);
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                this.val_of(peer, pawn.link());
            }
            remote_ensure(preset) {
                return this.ensure(preset);
            }
            local_ensure() {
                return this.ensure(null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom_link_to.prototype, "remote_of", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_here", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_area", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_lord", null);
        return $giper_baza_atom_link_to;
    }
    $.$giper_baza_atom_link_to = $giper_baza_atom_link_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_pack_four_code = $mol_charset_encode('LAND');
    $.$giper_baza_pack_head_size = 4 + 12 + 6 + 2;
    class $giper_baza_pack_part extends Object {
        units;
        faces;
        constructor(units = [], faces = new $giper_baza_face_map) {
            super();
            this.units = units;
            this.faces = faces;
        }
        static from(units, faces = new $giper_baza_face_map) {
            return new this(units, faces);
        }
        *[Symbol.iterator]() {
            return {
                units: this.units,
                faces: this.faces,
            };
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_pack_part, "from", null);
    $.$giper_baza_pack_part = $giper_baza_pack_part;
    class $giper_baza_pack extends $mol_buffer {
        toBlob() {
            return new Blob([this], { type: 'application/vnd.giper_baza_pack.v1' });
        }
        parts(offsets, pool) {
            const parts = new Map;
            let part = null;
            const buf = this.asArray();
            for (let offset = 0; offset < this.byteLength;) {
                const kind = this.uint8(offset);
                switch ($giper_baza_slot_kind[kind]) {
                    case 'free': {
                        pool?.release(offset, 8);
                        offset += 8;
                        continue;
                    }
                    case 'land': {
                        const faces = new $giper_baza_face_map;
                        const link = $giper_baza_link.from_bin(new Uint8Array(buf.buffer, buf.byteOffset + offset + 4, 18));
                        const size = this.uint16(offset + 22);
                        offset += 24;
                        for (let i = 0; i < size; ++i) {
                            const peer = $giper_baza_link.from_bin(new Uint8Array(buf.buffer, buf.byteOffset + offset, 6));
                            const tick = this.uint16(offset + 6);
                            const time = this.uint32(offset + 8);
                            const summ = this.uint32(offset + 12);
                            faces.peer_time(peer.str, time, tick);
                            faces.peer_summ(peer.str, summ);
                            offset += $giper_baza_face.length();
                        }
                        parts.set(link.str, part = new $giper_baza_pack_part([], faces));
                        continue;
                    }
                    case 'pass': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const pass = $giper_baza_auth_pass.from(buf.slice(offset, offset + 64));
                        offsets?.set(pass.buffer, offset);
                        part.units.push(pass);
                        offset += pass.byteLength;
                        continue;
                    }
                    case 'seal': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const size = new $giper_baza_unit_seal(this.buffer, this.byteOffset + offset, this.byteLength - offset).size();
                        const length = $giper_baza_unit_seal.length(size);
                        const seal = $giper_baza_unit_seal.from(buf.slice(offset, offset + length));
                        offsets?.set(seal.buffer, offset);
                        part.units.push(seal);
                        offset += seal.byteLength;
                        continue;
                    }
                    case 'sand': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const size = new $giper_baza_unit_sand(this.buffer, this.byteOffset + offset, 40).size();
                        const length_sand = $giper_baza_unit_sand.length(size);
                        const length_ball = $giper_baza_unit_sand.length_ball(size);
                        const sand = $giper_baza_unit_sand.from(buf.slice(offset, offset + length_sand));
                        offsets?.set(sand.buffer, offset);
                        offset += sand.byteLength;
                        if (length_ball) {
                            sand._ball = buf.slice(offset, offset + size);
                            offset += length_ball;
                        }
                        ;
                        part.units.push(sand);
                        continue;
                    }
                    case 'gift': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const length = $giper_baza_unit_gift.length();
                        const gift = $giper_baza_unit_gift.from(buf.slice(offset, offset + length));
                        offsets?.set(gift.buffer, offset);
                        part.units.push(gift);
                        offset += gift.byteLength;
                        continue;
                    }
                    default:
                        $$.$mol_log3_warn({
                            place: '$giper_baza_pack..parts',
                            message: 'Unknown Kind',
                            kind,
                            offset,
                            hint: 'Try to update application',
                        });
                        return [...parts];
                }
            }
            return [...parts];
        }
        static length(parts) {
            let size = 0;
            for (const [land, { units, faces }] of parts) {
                size += $.$giper_baza_pack_head_size;
                size += faces.size * $giper_baza_face.length();
                for (const unit of units) {
                    size += unit.byteLength;
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: gift => { },
                        seal: seal => { },
                        sand: sand => size += $giper_baza_unit_sand.length_ball(sand.ball().byteLength),
                    });
                }
            }
            return size;
        }
        static make(parts) {
            let length = this.length(parts);
            if (length === 0)
                $mol_fail(new Error('Empty Pack'));
            const buff = new Uint8Array(length);
            const pack = new $giper_baza_pack(buff.buffer);
            let offset = 0;
            for (const [id, { units, faces }] of parts) {
                buff.set($.$giper_baza_pack_four_code, offset);
                buff.set(new $giper_baza_link(id).toBin(), offset + 4);
                pack.uint16(offset + 22, faces.size);
                offset += 24;
                for (const [peer, face] of faces) {
                    buff.set(new $giper_baza_link(peer).toBin(), offset);
                    pack.uint16(offset + 6, face.tick);
                    pack.uint32(offset + 8, face.time);
                    pack.uint32(offset + 12, face.summ);
                    offset += $giper_baza_face.length();
                }
                for (const unit of units) {
                    buff.set(unit.asArray(), offset);
                    offset += unit.byteLength;
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: gift => { },
                        seal: seal => { },
                        sand: sand => {
                            if (!sand.big())
                                return;
                            buff.set(sand.ball(), offset);
                            offset += $giper_baza_unit_sand.length_ball(sand.size());
                        },
                    });
                }
            }
            return pack;
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_pack.prototype, "parts", null);
    __decorate([
        $mol_action
    ], $giper_baza_pack, "make", null);
    $.$giper_baza_pack = $giper_baza_pack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const Passives = new WeakMap();
    class $giper_baza_yard extends $mol_object {
        glob() {
            return null;
        }
        lands_news = new $mol_wire_set();
        static masters_default = [];
        static masters() {
            const all = this.$.$giper_baza_glob.Seed().peers();
            const self = this.$.$giper_baza_auth.current().pass().lord();
            const pos = all.findLastIndex(peer => peer.link().str === self.str);
            const links = all.slice(pos + 1).flatMap(peer => peer.urls());
            return links.length ? links : this.masters_default;
        }
        master_cursor(next = 0) {
            return next;
        }
        master_current() {
            return this.$.$giper_baza_yard.masters()[this.master_cursor()];
        }
        master_next() {
            this.master_cursor((this.master_cursor() + 1) % this.$.$giper_baza_yard.masters().length);
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_current();
            if (!link)
                return null;
            const socket = new $mol_dom_context.WebSocket(link.replace(/^http/, 'ws'));
            socket.binaryType = 'arraybuffer';
            const port = $mol_rest_port_ws_std.make({ socket });
            socket.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    if (!event.data.byteLength)
                        return;
                    await $mol_wire_async(this).port_income(port, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            socket.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 1000);
            };
            Object.assign(socket, {
                destructor: () => {
                    socket.onclose = () => { };
                    clearInterval(interval);
                    socket.close();
                }
            });
            return new Promise((done, fail) => {
                socket.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected',
                        port: $mol_key(port),
                        server: link,
                    });
                    interval = setInterval(() => socket.send(new Uint8Array), 30000);
                    done(port);
                };
                socket.onerror = () => {
                    socket.onclose = event => {
                        fail(new Error(`Master (${link}) is unavailable (${event.code})`));
                        clearInterval(interval);
                        interval = setTimeout(() => {
                            this.master_next();
                            this.reconnects(null);
                        }, 1000);
                    };
                };
            });
        }
        slaves = new $mol_wire_set();
        sync() {
            this.sync_news();
            this.sync_port();
        }
        sync_news() {
            const glob = this.$.$giper_baza_glob;
            const lands = [...this.lands_news].map(link => glob.Land(new $giper_baza_link(link)));
            try {
                for (const port of this.masters()) {
                    for (const land of lands) {
                        this.sync_port_land([port, land.link()]);
                    }
                }
                for (const land of lands)
                    land.units_saving();
                this.lands_news.clear();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        sync_port() {
            for (const port of this.ports())
                this.sync_port_lands(port);
        }
        sync_port_lands(port) {
            for (const land of this.port_lands_active(port)) {
                this.sync_port_land([port, new $giper_baza_link(land)]);
            }
        }
        ports() {
            return [...this.masters(), ...this.slaves];
        }
        masters() {
            try {
                return [this.master()].filter($mol_guard_defined);
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
        }
        port_lands_active(port) {
            return new $mol_wire_set();
        }
        port_lands_passive(port) {
            let passives = Passives.get(port);
            if (!passives)
                Passives.set(port, passives = new Set);
            return passives;
        }
        port_income(port, msg) {
            const pack = $mol_wire_sync($giper_baza_pack).from(msg);
            const parts = $mol_wire_sync(pack).parts();
            for (const [land, part] of parts) {
                const Land = this.$.$giper_baza_glob.Land(new $giper_baza_link(land));
                forget: {
                    if (part.units.length)
                        break forget;
                    if (part.faces.size)
                        break forget;
                    if (!this.port_lands_active(port).has(land))
                        break forget;
                    this.port_lands_active(port).delete(land);
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_done({
                            place: this,
                            message: 'Take Free',
                            port: $mol_key(port),
                            land: Land,
                        });
                    continue;
                }
                this.face_port_sync(port, [[land, part]]);
                if (part.units.length) {
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_rise({
                            place: this,
                            message: 'Take Unit',
                            port: $mol_key(port),
                            land: Land,
                            units: part.units,
                        });
                    Land.diff_apply(part.units);
                }
                else {
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_rise({
                            place: this,
                            message: 'Take Face',
                            port: $mol_key(port),
                            land: Land,
                            faces: part.faces,
                        });
                }
            }
        }
        face_port_sync(port, income) {
            const actives = this.port_lands_active(port);
            const passives = this.port_lands_passive(port);
            for (const [land, part] of income) {
                const land_link = new $giper_baza_link(land);
                if (!passives.has(land))
                    actives.add(land);
                const faces = part.faces;
                let port_faces = this.face_port_land([port, land_link]);
                if (!port_faces)
                    this.face_port_land([port, land_link], port_faces = $mol_mem_cached(() => this.face_port_land([port, land_link]))
                        || new $giper_baza_face_map);
                port_faces.sync(faces);
                for (let unit of part.units) {
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    port_faces.peer_time(unit.lord().peer().str, unit.time(), unit.tick());
                }
            }
        }
        sync_land(land) {
            for (const port of this.masters()) {
                this.port_lands_passive(port).add(land.str);
                this.sync_port_land([port, land]);
            }
            this.sync();
        }
        forget_land(land) {
            const faces = new $giper_baza_face_map;
            faces.stat = land.faces.stat.clone();
            const pack = $giper_baza_pack.make([[
                    land.link().str,
                    new $giper_baza_pack_part([], faces)
                ]]).asArray();
            for (const port of this.ports()) {
                if (!this.port_lands_passive(port).has(land.link().str))
                    continue;
                this.port_lands_passive(port).delete(land.link().str);
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Send Free',
                        port: $mol_key(port),
                        land,
                    });
                port.send_bin(pack);
            }
        }
        sync_port_land([port, land]) {
            try {
                this.init_port_land([port, land]);
                const faces = this.face_port_land([port, land]);
                if (!faces)
                    return;
                const Land = this.$.$giper_baza_glob.Land(land);
                Land.units_saving();
                const units = Land.diff_units(faces);
                if (!units.length)
                    return;
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_rise({
                        place: this,
                        message: 'Send Unit',
                        port: $mol_key(port),
                        land: Land,
                        units,
                    });
                const pack = $giper_baza_pack.make([[
                        Land.link().str,
                        new $giper_baza_pack_part(units)
                    ]]);
                port.send_bin(pack.asArray());
                faces.sync(Land.faces);
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        init_port_land([port, land]) {
            const Land = this.$.$giper_baza_glob.Land(land);
            Land.loading();
            if (this.$.$giper_baza_log())
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Send Face',
                    port: $mol_key(port),
                    land: Land,
                    faces: Land.faces,
                });
            port.send_bin(Land.face_pack().asArray());
        }
        face_port_land([port, land], next = null) {
            $mol_wire_solid();
            return next;
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "glob", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master_current", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "master_next", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync_news", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync_port", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_port_lands", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "ports", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "masters", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "port_lands_active", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "port_income", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "face_port_sync", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_land", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "forget_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_port_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "init_port_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "face_port_land", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard, "masters", null);
    $.$giper_baza_yard = $giper_baza_yard;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_stat_series extends $giper_baza_atom_list {
        tick(key, val, count) {
            let vals = this.values().slice();
            while (vals.length < count)
                vals.push(0);
            vals[key] = val + this.initial();
            vals = [...vals.slice(key + 1), ...vals.slice(0, key + 1)];
            for (let i = 1; i < count; ++i)
                if (vals[i] < vals[i - 1])
                    vals[i] = vals[i - 1];
            vals = [...vals.slice(-1 - key), ...vals.slice(0, -1 - key)];
            this.values(vals);
        }
        _initial;
        initial() {
            return this._initial
                ?? (this._initial = this.max());
        }
        max() {
            let max = 0;
            for (const val of this.values())
                if (val > max)
                    max = val;
            return max;
        }
        values(next) {
            if (next) {
                let last = 0;
                next = next.map(v => ([v, last] = [v - last, v])[0]);
            }
            let last = 0;
            return (this.val(next) ?? []).map(v => last += v);
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_stat_series.prototype, "tick", null);
    __decorate([
        $mol_action
    ], $giper_baza_stat_series.prototype, "initial", null);
    __decorate([
        $mol_mem
    ], $giper_baza_stat_series.prototype, "max", null);
    __decorate([
        $mol_mem
    ], $giper_baza_stat_series.prototype, "values", null);
    $.$giper_baza_stat_series = $giper_baza_stat_series;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_stat_ranges extends $giper_baza_dict.with({
        Seconds: $giper_baza_stat_series,
        Minutes: $giper_baza_stat_series,
        Hours: $giper_baza_stat_series,
        Days: $giper_baza_stat_series,
        Months: $giper_baza_stat_series,
    }) {
        _last_instant = 0;
        tick_instant(val) {
            this.tick_integral(this._last_instant += val);
        }
        tick_integral(val) {
            let now = new $mol_time_moment;
            this.Seconds(null).tick(Math.floor(now.second), val, 60);
            this.Minutes(null).tick(now.minute, val, 60);
            this.Hours(null).tick(now.hour, val, 24);
            this.Days(null).tick(now.day, val, 31);
            this.Months(null).tick(now.month, val, 12);
        }
        series() {
            function pick(Series, length, range) {
                const values = Series?.values() ?? [0];
                let series = Array.from({ length }, (_, i) => values[i]);
                let start = 0;
                let max = 0;
                for (let i = 0; i < series.length; ++i) {
                    if (series[i] < max)
                        continue;
                    max = series[i];
                    start = i + 1;
                }
                if (start)
                    series = [...series.slice(start), ...series.slice(0, start - 1)];
                let last = series[0];
                series = series.slice(1).map(val => {
                    try {
                        if (last === 0 || val < last)
                            return 0;
                        return (val - last) / range;
                    }
                    finally {
                        last = Math.max(val, last);
                    }
                });
                return series;
            }
            const months = pick(this.Days(), 12, 60 * 60 * 24 * 31);
            const days = pick(this.Days(), 31, 60 * 60 * 24);
            const hours = pick(this.Hours(), 24, 60 * 60);
            const minutes = pick(this.Minutes(), 60, 60);
            const seconds = pick(this.Seconds(), 60, 1);
            return [...months, ...days, ...hours, ...minutes, ...seconds].reverse();
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_stat_ranges.prototype, "series", null);
    $.$giper_baza_stat_ranges = $giper_baza_stat_ranges;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_report_handler_all = new Set();
    function handler(event, url, line, col, error) {
        for (const handler of $.$mol_report_handler_all) {
            try {
                handler(event, url, line, col, error);
            }
            catch (e) { }
        }
    }
    const handler_promise = (event) => handler('Unhandled Rejection', '', 0, 0, event.reason);
    if ('addEventListener' in globalThis) {
        globalThis.addEventListener('error', handler);
        globalThis.addEventListener('unhandledrejection', handler_promise);
    }
    if ('process' in globalThis) {
        process.on('uncaughtExceptionMonitor', handler);
        process.on('unhandledrejection', handler_promise);
    }
    const console_error = console.error;
    console.error = function console_error_custom(...args) {
        const format = (val) => typeof val === 'string'
            ? val.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
            : JSON.stringify(val);
        const secondary = args.slice(1);
        const first = typeof args[0] === 'string'
            ? args[0].replaceAll(/%(?:\.\d+)?[disfcoO]/g, spec => spec === '%c' ? (secondary.shift(), '') : secondary.shift())
            : args[0];
        secondary.unshift(first);
        const result = secondary.map(format).join(' ');
        handler(result);
        console_error.apply(console, args);
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_stat extends $giper_baza_dict.with({
        Uptime: $giper_baza_atom_dura,
        Cpu_user: $giper_baza_stat_ranges,
        Cpu_system: $giper_baza_stat_ranges,
        Mem_used: $giper_baza_stat_ranges,
        Mem_free: $giper_baza_stat_ranges,
        Fs_free: $giper_baza_stat_ranges,
        Fs_reads: $giper_baza_stat_ranges,
        Fs_writes: $giper_baza_stat_ranges,
        Port_slaves: $giper_baza_stat_ranges,
        Port_masters: $giper_baza_stat_ranges,
        Land_active: $giper_baza_stat_ranges,
        Errors: $giper_baza_stat_ranges,
    }) {
        freshness() {
            const last = this.last_change();
            if (!last)
                return null;
            const range = new $mol_time_interval({
                start: last,
                end: new $mol_time_moment(this.$.$mol_state_time.now(1000)),
            });
            return range.duration.count('PT1s');
        }
        uptime(next) {
            return this.Uptime(next)?.val(next) ?? new $mol_time_duration(0);
        }
        init() {
            let handler = () => this.Errors(null).tick_instant(1);
            $mol_report_handler_all.add(handler);
            return { destructor: () => $mol_report_handler_all.delete(handler) };
        }
        tick() {
            this.init();
            if (this.$.$giper_baza_log()) {
                this.$.$mol_log3_warn({
                    place: this,
                    message: 'Stat disabled due logging',
                    hint: 'Disable $giper_baza_log to start monitoring'
                });
                return;
            }
            this.$.$mol_state_time.now(1000);
            this.uptime(new $mol_time_duration({ second: Math.floor(process.uptime()) }).normal);
            const res = process.resourceUsage();
            this.Cpu_user(null).tick_integral(Math.ceil(res.userCPUTime / 1e4));
            this.Cpu_system(null).tick_integral(Math.ceil(res.systemCPUTime / 1e4));
            this.Fs_reads(null).tick_integral(res.fsRead);
            this.Fs_writes(null).tick_integral(res.fsWrite);
            const mem_total = $node.os.totalmem();
            this.Mem_used(null).tick_instant(Math.ceil((res.maxRSS - res.sharedMemorySize) * 1024 / mem_total * 100));
            this.Mem_free(null).tick_instant(Math.floor($node.os.freemem() / mem_total * 100));
            const fs = $node.fs.statfsSync('.');
            this.Fs_free(null).tick_instant(Math.floor(Number(fs.bfree) / Number(fs.blocks) * 100));
            const yard = $mol_wire_sync(this.$.$giper_baza_glob.yard());
            const masters = yard.masters().length;
            this.Port_masters(null).tick_instant(masters);
            const ports = yard.ports();
            this.Port_slaves(null).tick_instant(ports.length - masters);
            const lands = ports.reduce((sum, port) => sum + yard.port_lands_active(port).size, 0);
            this.Land_active(null).tick_instant(lands);
            this.Errors(null).tick_instant(0);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "freshness", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "uptime", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "init", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "tick", null);
    $.$giper_baza_app_stat = $giper_baza_app_stat;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_flex_deck_base = new $giper_baza_link('hSVSar1S_he4KVyXM_CftXZh1s');
    class $giper_baza_flex_subj extends $giper_baza_dict.with({
        Name: $giper_baza_atom_text,
    }, 'Subj') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_pla3dXt3`);
        name(next) {
            return this.Name(next)?.val(next) ?? this.link().str;
        }
    }
    $.$giper_baza_flex_subj = $giper_baza_flex_subj;
    class $giper_baza_flex_subj_link extends $giper_baza_atom_link_to(() => $giper_baza_flex_subj) {
    }
    $.$giper_baza_flex_subj_link = $giper_baza_flex_subj_link;
    class $giper_baza_flex_meta extends $giper_baza_flex_subj.with({
        Props: $giper_baza_list_link_to(() => $giper_baza_flex_prop),
        Pulls: $giper_baza_list_link_to(() => $giper_baza_flex_subj),
    }, 'Meta') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_a1JLFBay`);
        prop_new(key, type, kind, vars, base) {
            const prop = this.Props(null).make($mol_hash_string(key));
            prop.path(this.name() + ':' + key);
            prop.name(key);
            prop.type(type);
            if (kind)
                prop.kind(kind);
            if (vars)
                prop.enum(vars);
            if (base !== undefined)
                prop.base(base);
            return prop;
        }
        prop_add(prop) {
            this.Props(prop).add(prop.link());
        }
        prop_all() {
            return [
                ...this.pull_all().flatMap(meta => meta.prop_all()),
                ...this.Props()?.remote_list() ?? [],
            ];
        }
        pull_add(meta) {
            this.Pulls(meta).add(meta.link());
        }
        pull_all() {
            return (this.Pulls()?.remote_list() ?? []).map(subj => subj.cast($giper_baza_flex_meta));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_flex_meta.prototype, "prop_new", null);
    __decorate([
        $mol_action
    ], $giper_baza_flex_meta.prototype, "prop_add", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_meta.prototype, "prop_all", null);
    __decorate([
        $mol_action
    ], $giper_baza_flex_meta.prototype, "pull_add", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_meta.prototype, "pull_all", null);
    $.$giper_baza_flex_meta = $giper_baza_flex_meta;
    class $giper_baza_flex_prop extends $giper_baza_flex_subj.with({
        Path: $giper_baza_atom_text,
        Type: $giper_baza_atom_text,
        Kind: $giper_baza_atom_link_to(() => $giper_baza_flex_meta),
        Enum: $giper_baza_atom_link_to(() => $giper_baza_list_vary),
        Base: $giper_baza_atom_vary,
    }, 'Prop') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_7ovrwQ6t`);
        path(next) {
            return this.Path(next)?.val(next) ?? '';
        }
        type(next) {
            return this.Type(next)?.val(next) ?? '';
        }
        base(next) {
            return this.Base(next)?.vary(next) ?? null;
        }
        kind(next) {
            return this.Kind(next)?.remote(next) ?? null;
        }
        enum(next) {
            return this.Enum(next)?.remote(next) ?? null;
        }
    }
    $.$giper_baza_flex_prop = $giper_baza_flex_prop;
    class $giper_baza_flex_deck extends $giper_baza_flex_subj.with({
        Metas: $giper_baza_list_link_to(() => $giper_baza_flex_meta),
        Types: $giper_baza_list_str,
    }, 'Deck') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_TAv7CAua`);
        meta_new(key) {
            const meta = this.Metas(null).make($mol_hash_string(key));
            meta.name(key);
            return meta;
        }
        meta_for(Meta) {
            const meta = this.meta_new(Meta.path);
            Meta.meta = meta.link();
            return meta;
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_flex_deck.prototype, "meta_new", null);
    __decorate([
        $mol_action
    ], $giper_baza_flex_deck.prototype, "meta_for", null);
    $.$giper_baza_flex_deck = $giper_baza_flex_deck;
    class $giper_baza_flex_seed extends $giper_baza_flex_subj.with({
        Deck: $giper_baza_atom_link_to(() => $giper_baza_flex_deck),
        Peers: $giper_baza_list_link_to(() => $giper_baza_flex_peer),
    }, 'Seed') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_dELUKvvS`);
        deck() {
            return this.Deck(null).ensure(this.land());
        }
        peers(next) {
            return this.Peers(next)?.remote_list(next) ?? [];
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_flex_seed.prototype, "deck", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_seed.prototype, "peers", null);
    $.$giper_baza_flex_seed = $giper_baza_flex_seed;
    class $giper_baza_flex_peer extends $giper_baza_flex_subj.with({
        Urls: $giper_baza_list_str,
        Stat: $giper_baza_atom_link_to(() => $giper_baza_app_stat),
    }, 'Peer') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_xEibvNCP`);
        stat(auto) {
            return this.Stat(auto)?.ensure(this.land()) ?? null;
        }
        urls(next) {
            return (this.Urls(next)?.items(next) ?? []).filter($mol_guard_defined);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_flex_peer.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_peer.prototype, "urls", null);
    $.$giper_baza_flex_peer = $giper_baza_flex_peer;
    class $giper_baza_flex_user extends $giper_baza_flex_subj.with({
        Caret: $giper_baza_atom_text,
    }, 'User') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_base.str}_csm0VtAK`);
        caret(next) {
            return this.Caret(next)?.val(next) ?? null;
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_flex_user.prototype, "caret", null);
    $.$giper_baza_flex_user = $giper_baza_flex_user;
    function $giper_baza_flex_init() {
        const seed_land = this.$.$giper_baza_glob.land_grab();
        const seed = seed_land.Data($giper_baza_flex_seed);
        seed.name('Base Seed');
        const deck = seed.deck();
        deck.name('Base Deck');
        deck.Types(null).items_vary(['vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list']);
        const Meta = deck.meta_for($giper_baza_flex_meta);
        Meta.meta(Meta.link());
        const Subj = deck.meta_for($giper_baza_flex_subj);
        const Seed = deck.meta_for($giper_baza_flex_seed);
        const Prop = deck.meta_for($giper_baza_flex_prop);
        const Deck = deck.meta_for($giper_baza_flex_deck);
        const Peer = deck.meta_for($giper_baza_flex_peer);
        const User = deck.meta_for($giper_baza_flex_user);
        seed.meta(Seed.link());
        deck.meta(Deck.link());
        Meta.pull_add(Subj);
        Seed.pull_add(Subj);
        Prop.pull_add(Subj);
        Deck.pull_add(Subj);
        Peer.pull_add(Subj);
        User.pull_add(Subj);
        Subj.prop_new('Name', 'str', undefined, undefined, '');
        Meta.prop_new('Props', 'list', Prop);
        Meta.prop_new('Pulls', 'list', Meta, deck.Metas());
        Seed.prop_new('Deck', 'link', Deck);
        Seed.prop_new('Peers', 'list', Peer);
        Prop.prop_new('Path', 'str');
        Prop.prop_new('Type', 'enum', undefined, deck.Types(), 'vary');
        Prop.prop_new('Kind', 'link', Meta, deck.Metas(), Subj.link());
        Prop.prop_new('Enum', 'link', Subj);
        Prop.prop_new('Base', 'vary', Subj);
        Deck.prop_new('Metas', 'list', Meta);
        Deck.prop_new('Types', 'list');
        Peer.prop_new('Urls', 'list');
        Peer.prop_new('Stat', 'link');
        User.prop_new('Caret', 'vary');
        return seed;
    }
    $.$giper_baza_flex_init = $giper_baza_flex_init;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_glob extends $mol_object {
        static lands_touched = new $mol_wire_set();
        static yard() {
            return new this.$.$giper_baza_yard;
        }
        static home(Pawn) {
            return this.Land(this.$.$giper_baza_auth.current().pass().lord()).Data(Pawn ?? this.$.$giper_baza_flex_subj);
        }
        static king_grab(preset = [[null, this.$.$giper_baza_rank_read]]) {
            const mapping = new Map(preset);
            const king = this.$.$giper_baza_auth.grab();
            const colony = $mol_wire_sync(this.$.$giper_baza_land).make({ $: this.$ });
            colony.auth = $mol_const(king);
            colony.encrypted((mapping.get(null) ?? this.$.$giper_baza_rank_deny) === this.$.$giper_baza_rank_deny);
            const self = this.$.$giper_baza_auth.current().pass();
            colony.give(self, this.$.$giper_baza_rank_rule);
            for (const [key, rank] of mapping)
                colony.give(key, rank);
            this.Land(colony.link()).units_steal(colony);
            return king;
        }
        static land_grab(preset = [[null, this.$.$giper_baza_rank_read]]) {
            return this.Land(this.king_grab(preset).pass().lord());
        }
        static Land(link) {
            if (!link.str)
                $mol_fail(new Error('Empty Land Link'));
            this.lands_touched.add(link.str);
            return this.$.$giper_baza_land.make({
                link: $mol_const(link),
            });
        }
        static Pawn(link, Pawn) {
            const land = this.Land(link.land());
            return land.Pawn(Pawn).Head(link.head());
        }
        static Seed() {
            const link = $giper_baza_flex_deck_base.lord();
            const seed = this.Pawn(link, $giper_baza_flex_seed);
            if (!$mol_wire_sync(seed).meta())
                this.boot();
            return seed;
        }
        static boot() {
            const file = $mol_file.relative('giper/baza/glob/glob.baza');
            const pack = $mol_wire_sync($giper_baza_pack).from(file.buffer());
            this.apply_pack(pack);
        }
        static apply_pack(pack) {
            return this.apply_parts(pack.parts());
        }
        static apply_parts(parts) {
            for (const [land_id, part] of parts) {
                const land = this.Land(new this.$.$giper_baza_link(land_id));
                land.diff_apply(part.units);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_glob, "yard", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "king_grab", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "land_grab", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_glob, "Land", null);
    __decorate([
        $mol_mem
    ], $giper_baza_glob, "Seed", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "boot", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "apply_pack", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "apply_parts", null);
    $.$giper_baza_glob = $giper_baza_glob;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_home extends $giper_baza_flex_peer {
        init() {
            this.meta($giper_baza_flex_peer.meta);
        }
        tick() {
            this.init();
            this.stat(null).tick();
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_app_home.prototype, "init", null);
    $.$giper_baza_app_home = $giper_baza_app_home;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_home_node extends $giper_baza_app_home {
        init() {
            super.init();
            if (process.env.ADMIN) {
                const pass = $giper_baza_auth_pass.from(process.env.ADMIN);
                this.land().give(pass, $giper_baza_rank_rule);
            }
            const host = process.env.DOMAIN || $node.os.hostname();
            this.name(host);
            this.urls([`https://${host}/`]);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_app_home_node.prototype, "init", null);
    $.$giper_baza_app_home_node = $giper_baza_app_home_node;
    $.$giper_baza_app_home = $giper_baza_app_home_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_node extends $mol_rest_resource_fs {
        link() {
            return new $giper_baza_app_node_link;
        }
        OPEN(msg) {
            this.$.$giper_baza_glob.yard().slaves.add(msg.port);
        }
        POST(msg) {
            this.$.$giper_baza_glob.yard().port_income(msg.port, msg.bin());
        }
        CLOSE(msg) {
            this.$.$giper_baza_glob.yard().slaves.delete(msg.port);
        }
        _auto() {
            this._stat_update();
            this.$.$giper_baza_glob.yard().sync();
        }
        _home() {
            return this.$.$giper_baza_glob.home($giper_baza_app_home);
        }
        _stat_update() {
            this._home().tick();
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_app_node.prototype, "link", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_node.prototype, "_home", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_node.prototype, "_stat_update", null);
    $.$giper_baza_app_node = $giper_baza_app_node;
    class $giper_baza_app_node_link extends $mol_rest_resource {
        GET(msg) {
            msg.reply(this.$.$giper_baza_auth.current().pass().lord().str);
        }
    }
    $.$giper_baza_app_node_link = $giper_baza_app_node_link;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $giper_baza_app_node.serve();
})($ || ($ = {}));


export default $
//# sourceMappingURL=node.js.map
