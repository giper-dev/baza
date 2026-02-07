"use strict";
function require( path ){ return $node[ path ] };
"use strict";
var $;
(function ($_1) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            const res = test(context);
            if ($mol_promise_like(res)) {
                await new Promise((done, fail) => {
                    res.then(done, fail);
                    setTimeout(() => fail(new Error('Test timeout: ' + test.name)), 1000);
                });
            }
        }
        $$.$mol_log3_done({
            place: '$mol_test',
            message: 'All tests passed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(async () => {
            scheduled = false;
            await $mol_test_run();
            $$.$mol_test_complete();
        }, 1000);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_test_complete() {
    }
    $.$mol_test_complete = $mol_test_complete;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Make empty div'() {
            $mol_assert_equal(($mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $mol_jsx("input", { value: '123' });
            $mol_assert_equal(dom.outerHTML, '<input value="123">');
            $mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $mol_jsx("div", { class: 'foo bar' });
            $mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $mol_jsx("div", { style: { color: 'red' } });
            $mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $mol_jsx("div", { dataset: { foo: 'bar' } });
            $mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $mol_jsx("div", { lang: "ru", hidden: true });
            $mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $mol_jsx("div", null,
                "hello",
                $mol_jsx("strong", null, "world"),
                "!");
            $mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Make fragment'() {
            const dom = $mol_jsx($mol_jsx_frag, null,
                $mol_jsx("br", null),
                $mol_jsx("hr", null));
            $mol_assert_equal($mol_dom_serialize(dom), '<br xmlns="http://www.w3.org/1999/xhtml" /><hr xmlns="http://www.w3.org/1999/xhtml" />');
        },
        'Spread fragment'() {
            const dom = $mol_jsx("div", null,
                $mol_jsx($mol_jsx_frag, null,
                    $mol_jsx("br", null),
                    $mol_jsx("hr", null)));
            $mol_assert_equal(dom.outerHTML, '<div><br><hr></div>');
        },
        'Function as component'() {
            const Button = (props, target) => {
                return $mol_jsx("button", { title: props.hint }, target());
            };
            const dom = $mol_jsx(Button, { id: "foo", hint: "click me" }, () => 'hey!');
            $mol_assert_equal(dom.outerHTML, '<button id="foo" title="click me" class="Button">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "bar" },
                        $mol_jsx("img", { id: "icon" })));
            };
            const Bar = (props, icon) => {
                return $mol_jsx("span", null,
                    icon,
                    $mol_jsx("i", { id: "label" }));
            };
            const dom = $mol_jsx(Foo, { id: "foo" });
            $mol_assert_equal(dom.outerHTML, '<div id="foo" class="Foo"><span id="foo/bar" class="Foo_bar Bar"><img id="foo/icon" class="Foo_icon"><i id="foo/bar/label" class="Foo_bar_label Bar_label"></i></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("span", { id: "bar" }),
                    $mol_jsx("span", { id: "bar" }));
            };
            $mol_assert_fail(() => $mol_jsx(App, { id: "foo" }), 'JSX already has tag with id "foo/bar"');
        },
        'Owner based guid generationn'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "middle", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            const dom = $mol_jsx(Foo, { id: "app" });
            $mol_assert_equal(dom.outerHTML, '<div id="app" class="Foo"><span id="app/middle" class="Foo_middle Bar"><img id="app/icon" class="Foo_icon"></span></div>');
        },
        'Fail on same ids from different caller'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("img", { id: "icon" }),
                    $mol_jsx(Bar, { id: "bar", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            $mol_assert_fail(() => $mol_jsx(Foo, { id: "foo" }), 'JSX already has tag with id "foo/icon"');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_range2(item = index => index, size = () => Number.POSITIVE_INFINITY) {
        const source = typeof item === 'function' ? new $mol_range2_array() : item;
        if (typeof item !== 'function') {
            item = index => source[index];
            size = () => source.length;
        }
        return new Proxy(source, {
            get(target, field) {
                if (typeof field === 'string') {
                    if (field === 'length')
                        return size();
                    const index = Number(field);
                    if (index < 0)
                        return undefined;
                    if (index >= size())
                        return undefined;
                    if (index === Math.trunc(index))
                        return item(index);
                }
                return $mol_range2_array.prototype[field];
            },
            set(target, field) {
                return $mol_fail(new TypeError(`Lazy range is read only (trying to set field ${JSON.stringify(field)})`));
            },
            ownKeys(target) {
                return [...Array(size())].map((v, i) => String(i)).concat('length');
            },
            getOwnPropertyDescriptor(target, field) {
                if (field === "length")
                    return {
                        value: size(),
                        writable: true,
                        enumerable: false,
                        configurable: false,
                    };
                const index = Number(field);
                if (index === Math.trunc(index))
                    return {
                        get: () => this.get(target, field, this),
                        enumerable: true,
                        configurable: true,
                    };
                return Object.getOwnPropertyDescriptor(target, field);
            }
        });
    }
    $.$mol_range2 = $mol_range2;
    class $mol_range2_array extends Array {
        concat(...tail) {
            if (tail.length === 0)
                return this;
            if (tail.length > 1) {
                let list = this;
                for (let item of tail)
                    list = list.concat(item);
                return list;
            }
            return $mol_range2(index => index < this.length ? this[index] : tail[0][index - this.length], () => this.length + tail[0].length);
        }
        filter(check, context) {
            const filtered = [];
            let cursor = -1;
            return $mol_range2(index => {
                while (cursor < this.length && index >= filtered.length - 1) {
                    const val = this[++cursor];
                    if (check(val, cursor, this))
                        filtered.push(val);
                }
                return filtered[index];
            }, () => cursor < this.length ? Number.POSITIVE_INFINITY : filtered.length);
        }
        forEach(proceed, context) {
            for (let [key, value] of this.entries())
                proceed.call(context, value, key, this);
        }
        map(proceed, context) {
            return $mol_range2(index => proceed.call(context, this[index], index, this), () => this.length);
        }
        reduce(merge, result) {
            let index = 0;
            if (arguments.length === 1) {
                result = this[index++];
            }
            for (; index < this.length; ++index) {
                result = merge(result, this[index], index, this);
            }
            return result;
        }
        toReversed() {
            return $mol_range2(index => this[this.length - 1 - index], () => this.length);
        }
        slice(from = 0, to = this.length) {
            return $mol_range2(index => this[from + index], () => Math.min(to, this.length) - from);
        }
        some(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (check.call(context, this[index], index, this))
                    return true;
            }
            return false;
        }
        every(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (!check.call(context, this[index], index, this))
                    return false;
            }
            return true;
        }
        reverse() {
            return $mol_fail(new TypeError(`Mutable reverse is forbidden. Use toReversed instead.`));
        }
        sort() {
            return $mol_fail(new TypeError(`Mutable sort is forbidden. Use toSorted instead.`));
        }
        indexOf(needle) {
            return this.findIndex(item => item === needle);
        }
        [Symbol.toPrimitive]() {
            return $mol_guid();
        }
    }
    $.$mol_range2_array = $mol_range2_array;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'lazy calls'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 10);
            $mol_assert_equal(true, list instanceof Array);
            $mol_assert_equal(list.length, 10);
            $mol_assert_equal(list[-1], undefined);
            $mol_assert_equal(list[0], 0);
            $mol_assert_equal(list[9], 9);
            $mol_assert_equal(list[9.5], undefined);
            $mol_assert_equal(list[10], undefined);
            $mol_assert_equal(calls, 2);
        },
        'infinity list'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index));
            $mol_assert_equal(list.length, Number.POSITIVE_INFINITY);
            $mol_assert_equal(list[0], 0);
            $mol_assert_equal(list[4], 4);
            $mol_assert_equal(list[Number.MAX_SAFE_INTEGER], Number.MAX_SAFE_INTEGER);
            $mol_assert_equal(list[Number.POSITIVE_INFINITY], undefined);
            $mol_assert_equal(calls, 3);
        },
        'stringify'() {
            const list = $mol_range2(i => i, () => 5);
            $mol_assert_equal(list.toString(), '0,1,2,3,4');
            $mol_assert_equal(list.join(';'), '0;1;2;3;4');
        },
        'for-of'() {
            let log = '';
            for (let i of $mol_range2(i => i + 1, () => 5)) {
                log += i;
            }
            $mol_assert_equal(log, '12345');
        },
        'for-in'() {
            let log = '';
            for (let i in $mol_range2(i => i, () => 5)) {
                log += i;
            }
            $mol_assert_equal(log, '01234');
        },
        'forEach'() {
            let log = '';
            $mol_range2(i => i, () => 5).forEach(i => log += i);
            $mol_assert_equal(log, '01234');
        },
        'reduce'() {
            let calls = 0;
            const list = $mol_range2().slice(1, 6);
            $mol_assert_equal(list.reduce((s, v) => s + v), 15);
            $mol_assert_equal(list.reduce((s, v) => s + v, 5), 20);
        },
        'lazy concat'() {
            let calls1 = 0;
            let calls2 = 0;
            const list = $mol_range2(index => (++calls1, index), () => 5).concat([0, 1, 2, 3, 4], $mol_range2(index => (++calls2, index), () => 5));
            $mol_assert_equal(true, list instanceof Array);
            $mol_assert_equal(list.length, 15);
            $mol_assert_equal(list[0], 0);
            $mol_assert_equal(list[4], 4);
            $mol_assert_equal(list[5], 0);
            $mol_assert_equal(list[9], 4);
            $mol_assert_equal(list[10], 0);
            $mol_assert_equal(list[14], 4);
            $mol_assert_equal(list[15], undefined);
            $mol_assert_equal(calls1, 2);
            $mol_assert_equal(calls2, 2);
        },
        'lazy filter'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 15).filter(v => v % 2).slice(0, 3);
            $mol_assert_equal(true, list instanceof Array);
            $mol_assert_equal(list.length, 3);
            $mol_assert_equal(list[0], 1);
            $mol_assert_equal(list[2], 5);
            $mol_assert_equal(list[3], undefined);
            $mol_assert_equal(calls, 8);
        },
        'lazy reverse'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 10).toReversed().slice(0, 3);
            $mol_assert_equal(true, list instanceof Array);
            $mol_assert_equal(list.length, 3);
            $mol_assert_equal(list[0], 9);
            $mol_assert_equal(list[2], 7);
            $mol_assert_equal(list[3], undefined);
            $mol_assert_equal(calls, 2);
        },
        'lazy map'() {
            let calls1 = 0;
            let calls2 = 0;
            const source = $mol_range2(index => (++calls1, index), () => 5);
            const target = source.map((item, index, self) => {
                ++calls2;
                $mol_assert_equal(source, self);
                return index + 10;
            }, () => 5);
            $mol_assert_equal(true, target instanceof Array);
            $mol_assert_equal(target.length, 5);
            $mol_assert_equal(target[0], 10);
            $mol_assert_equal(target[4], 14);
            $mol_assert_equal(target[5], undefined);
            $mol_assert_equal(calls1, 2);
            $mol_assert_equal(calls2, 2);
        },
        'lazy slice'() {
            let calls = 0;
            const list = $mol_range2(index => (++calls, index), () => 10).slice(3, 7);
            $mol_assert_equal(true, list instanceof Array);
            $mol_assert_equal(list.length, 4);
            $mol_assert_equal(list[0], 3);
            $mol_assert_equal(list[3], 6);
            $mol_assert_equal(list[4], undefined);
            $mol_assert_equal(calls, 2);
        },
        'lazy some'() {
            let calls = 0;
            $mol_assert_equal(true, $mol_range2(index => (++calls, index), () => 5).some(v => v >= 2));
            $mol_assert_equal(calls, 3);
            $mol_assert_equal(false, $mol_range2(i => i, () => 0).some(v => true));
            $mol_assert_equal(true, $mol_range2(i => i).some(v => v > 5));
        },
        'lazy every'() {
            let calls = 0;
            $mol_assert_equal(false, $mol_range2(index => (++calls, index), () => 5).every(v => v < 2));
            $mol_assert_equal(calls, 3);
            $mol_assert_equal(true, $mol_range2(i => i, () => 0).every(v => false));
            $mol_assert_equal(false, $mol_range2(i => i).every(v => v < 5));
        },
        'lazyfy'() {
            let calls = 0;
            const list = $mol_range2([0, 1, 2, 3, 4, 5]).map(i => (++calls, i + 10)).slice(2);
            $mol_assert_equal(true, list instanceof Array);
            $mol_assert_equal(list.length, 4);
            $mol_assert_equal(calls, 0);
            $mol_assert_equal(list[0], 12);
            $mol_assert_equal(list[3], 15);
            $mol_assert_equal(list[4], undefined);
            $mol_assert_equal(calls, 2);
        },
        'prevent modification'() {
            const list = $mol_range2(i => i, () => 5);
            $mol_assert_fail(() => list.push(4), TypeError);
            $mol_assert_fail(() => list.pop(), TypeError);
            $mol_assert_fail(() => list.unshift(4), TypeError);
            $mol_assert_fail(() => list.shift(), TypeError);
            $mol_assert_fail(() => list.splice(1, 2), TypeError);
            $mol_assert_fail(() => list[1] = 2, TypeError);
            $mol_assert_fail(() => list.reverse(), TypeError);
            $mol_assert_fail(() => list.sort(), TypeError);
            $mol_assert_equal(list.toString(), '0,1,2,3,4');
        }
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'nulls & undefineds'() {
            $mol_assert_ok($mol_compare_deep(null, null));
            $mol_assert_ok($mol_compare_deep(undefined, undefined));
            $mol_assert_not($mol_compare_deep(undefined, null));
            $mol_assert_not($mol_compare_deep({}, null));
        },
        'number'() {
            $mol_assert_ok($mol_compare_deep(1, 1));
            $mol_assert_ok($mol_compare_deep(Number.NaN, Number.NaN));
            $mol_assert_not($mol_compare_deep(1, 2));
            $mol_assert_ok($mol_compare_deep(Object(1), Object(1)));
            $mol_assert_not($mol_compare_deep(Object(1), Object(2)));
        },
        'POJO'() {
            $mol_assert_ok($mol_compare_deep({}, {}));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { b: 2 }));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { a: 2 }));
            $mol_assert_not($mol_compare_deep({}, { a: undefined }));
            $mol_assert_not($mol_compare_deep({ a: 1, b: 2 }, { b: 2, a: 1 }));
            $mol_assert_ok($mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
            $mol_assert_ok($mol_compare_deep(Object.create(null), Object.create(null)));
        },
        'Array'() {
            $mol_assert_ok($mol_compare_deep([], []));
            $mol_assert_ok($mol_compare_deep([1, [2]], [1, [2]]));
            $mol_assert_not($mol_compare_deep([1, 2], [1, 3]));
            $mol_assert_not($mol_compare_deep([1, 2,], [1, 3, undefined]));
            $mol_assert_not($mol_compare_deep($mol_range2().slice(0, 0), new Array()));
            $mol_assert_not($mol_compare_deep($mol_range2(), $mol_range2()));
        },
        'Non POJO are different'() {
            class Thing extends Object {
            }
            $mol_assert_not($mol_compare_deep(new Thing, new Thing));
            $mol_assert_not($mol_compare_deep(() => 1, () => 1));
            $mol_assert_not($mol_compare_deep(new RangeError('Test error'), new RangeError('Test error')));
        },
        'POJO with symbols'() {
            const sym = Symbol();
            $mol_assert_ok($mol_compare_deep({ [sym]: true }, { [sym]: true }));
            $mol_assert_not($mol_compare_deep({ [Symbol()]: true }, { [Symbol()]: true }));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $mol_assert_ok($mol_compare_deep(a, b));
        },
        'same POJOs with cyclic reference with cache warmup'() {
            const obj1 = { test: 1, obj3: null };
            const obj1_copy = { test: 1, obj3: null };
            const obj2 = { test: 2, obj1 };
            const obj2_copy = { test: 2, obj1: obj1_copy };
            const obj3 = { test: 3, obj2 };
            const obj3_copy = { test: 3, obj2: obj2_copy };
            obj1.obj3 = obj3;
            obj1_copy.obj3 = obj3_copy;
            $mol_assert_not($mol_compare_deep(obj1, {}));
            $mol_assert_not($mol_compare_deep(obj2, {}));
            $mol_assert_not($mol_compare_deep(obj3, {}));
            $mol_assert_ok($mol_compare_deep(obj3, obj3_copy));
        },
        'Date'() {
            $mol_assert_ok($mol_compare_deep(new Date(12345), new Date(12345)));
            $mol_assert_not($mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $mol_assert_ok($mol_compare_deep(/\x22/mig, /\x22/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x21/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Error'() {
            $mol_assert_not($mol_compare_deep(new Error('xxx'), new Error('xxx')));
            const fail = (message) => new Error(message);
            $mol_assert_ok($mol_compare_deep(...['xxx', 'xxx'].map(msg => new Error(msg))));
            $mol_assert_not($mol_compare_deep(...['xxx', 'yyy'].map(msg => new Error(msg))));
        },
        'Map'() {
            $mol_assert_ok($mol_compare_deep(new Map, new Map));
            $mol_assert_ok($mol_compare_deep(new Map([[1, [2]]]), new Map([[1, [2]]])));
            $mol_assert_ok($mol_compare_deep(new Map([[[1], 2]]), new Map([[[1], 2]])));
            $mol_assert_not($mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
            $mol_assert_not($mol_compare_deep(new Map([[[1], 2]]), new Map([[[3], 2]])));
        },
        'Set'() {
            $mol_assert_ok($mol_compare_deep(new Set, new Set));
            $mol_assert_ok($mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $mol_assert_not($mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $mol_assert_ok($mol_compare_deep(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
        'DataView'() {
            $mol_assert_ok($mol_compare_deep(new DataView(new Uint8Array().buffer), new DataView(new Uint8Array().buffer)));
            $mol_assert_ok($mol_compare_deep(new DataView(new Uint8Array([0]).buffer), new DataView(new Uint8Array([0]).buffer)));
            $mol_assert_not($mol_compare_deep(new DataView(new Uint8Array([0]).buffer), new DataView(new Uint8Array([1]).buffer)));
        },
        'Serializale'() {
            class User {
                name;
                rand;
                constructor(name, rand = Math.random()) {
                    this.name = name;
                    this.rand = rand;
                }
                [Symbol.toPrimitive](mode) {
                    return this.name;
                }
            }
            $mol_assert_ok($mol_compare_deep(new User('Jin'), new User('Jin')));
            $mol_assert_not($mol_compare_deep(new User('Jin'), new User('John')));
        },
        'Iterable'() {
            $mol_assert_ok($mol_compare_deep(new URLSearchParams({ foo: 'bar' }), new URLSearchParams({ foo: 'bar' })));
            $mol_assert_not($mol_compare_deep(new URLSearchParams({ foo: 'xxx' }), new URLSearchParams({ foo: 'yyy' })));
            $mol_assert_not($mol_compare_deep(new URLSearchParams({ foo: 'xxx', bar: 'yyy' }), new URLSearchParams({ bar: 'yyy', foo: 'xxx' })));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            $.$mol_fail = fail;
            if (typeof ErrorRight === 'string') {
                $mol_assert_equal(error.message ?? error, ErrorRight);
            }
            else {
                $mol_assert_equal(error instanceof ErrorRight, true);
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $mol_fail(new Error('Not failed', { cause: { expect: ErrorRight } }));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_like(...args) {
        $mol_assert_equal(...args);
    }
    $.$mol_assert_like = $mol_assert_like;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (!$mol_compare_deep(args[i], args[j]))
                    continue;
                return $mol_fail(new Error(`Uniquesess assertion failure`, { cause: { [i]: args[i], [i]: args[i] } }));
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_equal(...args) {
        for (let i = 1; i < args.length; ++i) {
            if ($mol_compare_deep(args[0], args[i]))
                continue;
            return $mol_fail(new Error(`Equality assertion failure`, { cause: { 0: args[0], [i]: args[i] } }));
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'must be false'() {
            $mol_assert_not(0);
        },
        'must be true'() {
            $mol_assert_ok(1);
        },
        'two must be equal'() {
            $mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $mol_assert_unique([2], [3]);
        },
        'three must be unique'() {
            $mol_assert_unique([1], [2], [3]);
        },
        'two must be alike'() {
            $mol_assert_equal([3], [3]);
        },
        'three must be alike'() {
            $mol_assert_equal([3], [3], [3]);
        },
        'two object must be alike'() {
            $mol_assert_equal({ a: 1 }, { a: 1 });
        },
        'three object must be alike'() {
            $mol_assert_equal({ a: 1 }, { a: 1 }, { a: 1 });
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $mol_assert_equal($$.$mol_func_name_test.name, '');
            $mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'get'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $mol_delegate({}, () => target);
            proxy.foo = 123;
            $mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'init with overload'() {
            class X extends $mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $mol_assert_equal(x.foo(), 2);
        },
        'Context in instance inherits from class'($) {
            const custom = $.$mol_ambient({});
            class X extends $.$mol_object {
                static $ = custom;
            }
            $mol_assert_equal(new X().$, custom);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Collect deps'() {
            const pub1 = new $mol_wire_pub;
            const pub2 = new $mol_wire_pub;
            const sub = new $mol_wire_pub_sub;
            const bu1 = sub.track_on();
            try {
                pub1.promote();
                pub2.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu1);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub2, pub2]);
            const bu2 = sub.track_on();
            try {
                pub1.promote();
                pub1.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu2);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub1, pub2]);
        },
        'cyclic detection'($) {
            const sub1 = new $mol_wire_pub_sub;
            const sub2 = new $mol_wire_pub_sub;
            const bu1 = sub1.track_on();
            try {
                const bu2 = sub2.track_on();
                try {
                    $mol_assert_fail(() => sub1.promote(), 'Circular subscription');
                }
                finally {
                    sub2.track_cut();
                    sub2.track_off(bu2);
                }
            }
            finally {
                sub1.track_cut();
                sub1.track_off(bu1);
            }
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $mol_object2 {
        task;
        promise = Promise.resolve();
        cancelled = false;
        id;
        constructor(task) {
            super();
            this.task = task;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        delay;
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_tick = $mol_after_mock_commmon;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Sync execution'() {
            class Sync extends $mol_object2 {
                static calc(a, b) {
                    return a + b;
                }
            }
            __decorate([
                $mol_wire_method
            ], Sync, "calc", null);
            $mol_assert_equal(Sync.calc(1, 2), 3);
        },
        async 'async <=> sync'() {
            class SyncAsync extends $mol_object2 {
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            $mol_assert_equal(await SyncAsync.calc(1, 2), 8);
        },
        async 'Idempotence control'() {
            class Idempotence extends $mol_object2 {
                static logs_idemp = 0;
                static logs_unidemp = 0;
                static log_idemp() {
                    this.logs_idemp += 1;
                }
                static log_unidemp() {
                    this.logs_unidemp += 1;
                }
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    this.log_idemp();
                    this.log_unidemp();
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            __decorate([
                $mol_wire_method
            ], Idempotence, "log_idemp", null);
            $mol_assert_equal(await Idempotence.calc(1, 2), 8);
            $mol_assert_equal(Idempotence.logs_idemp, 1);
            $mol_assert_equal(Idempotence.logs_unidemp, 3);
        },
        async 'Error handling'() {
            class Handle extends $mol_object2 {
                static async sum(a, b) {
                    $mol_fail(new Error('test error ' + (a + b)));
                }
                static check() {
                    try {
                        return $mol_wire_sync(Handle).sum(1, 2);
                    }
                    catch (error) {
                        if ($mol_promise_like(error))
                            $mol_fail_hidden(error);
                        $mol_assert_equal(error.message, 'test error 3');
                    }
                }
            }
            await $mol_wire_async(Handle).check();
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_timeout = $mol_after_mock_timeout;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'test types'($) {
            class A {
                static a() {
                    return '';
                }
                static b() {
                    return $mol_wire_async(this).a();
                }
            }
        },
        async 'Latest method calls wins'($) {
            class NameLogger extends $mol_object2 {
                static $ = $;
                static first = [];
                static last = [];
                static send(next) {
                    $mol_wire_sync(this.first).push(next);
                    $$.$mol_wait_timeout(0);
                    this.last.push(next);
                }
            }
            const name = $mol_wire_async(NameLogger).send;
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_equal(NameLogger.first, ['john', 'jin']);
            $mol_assert_equal(NameLogger.last, ['jin']);
        },
        async 'Latest function calls wins'($) {
            const first = [];
            const last = [];
            function send_name(next) {
                $mol_wire_sync(first).push(next);
                $$.$mol_wait_timeout(0);
                last.push(next);
            }
            const name = $mol_wire_async(send_name);
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_equal(first, ['john', 'jin']);
            $mol_assert_equal(last, ['jin']);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'test types'($) {
            class A {
                static a() {
                    return Promise.resolve('');
                }
                static b() {
                    return $mol_wire_sync(this).a();
                }
            }
        },
        async 'test method from host'($) {
            let count = 0;
            class A {
                static a() {
                    return $mol_wire_sync(this).b();
                }
                static b() { return Promise.resolve(++count); }
            }
            $mol_assert_equal(await $mol_wire_async(A).a(), 1, count);
        },
        async 'test function'($) {
            let count = 0;
            class A {
                static a() {
                    return $mol_wire_sync(this.b)();
                }
                static b() { return Promise.resolve(++count); }
            }
            $mol_assert_equal(await $mol_wire_async(A).a(), 1, count);
        },
        async 'test construct itself'($) {
            class A {
                static instances = [];
                static a() {
                    const a = new ($mol_wire_sync(A))();
                    this.instances.push(a);
                    $mol_wire_sync(this).b();
                }
                static b() { return Promise.resolve(); }
            }
            await $mol_wire_async(A).a();
            $mol_assert_equal(A.instances.length, 2);
            $mol_assert_equal(A.instances[0] instanceof A, true);
            $mol_assert_equal(A.instances[0], A.instances[1]);
        }
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_work = $mol_after_mock_timeout;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test_mocks.push($ => {
            $.$mol_wait_timeout = function $mol_wait_timeout_mock(timeout) { };
            $.$mol_wait_timeout_async = async function $mol_wait_timeout_async_mock(timeout) { };
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = new $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test_mocks.push($ => {
            $.$mol_wait_rest = function $mol_wait_rest_mock() { };
            $.$mol_wait_rest_async = async function $mol_wait_rest_async_mock() { };
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Cached channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 2);
            App.value(2);
            $mol_assert_equal(App.value(), 3);
        },
        'Read Pushed'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 0) {
                    return next;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(1), 1);
            $mol_assert_equal(App.value(), 1);
        },
        'Mem overrides mem'($) {
            class Base extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Base, "value", null);
            class Middle extends Base {
                static value(next) {
                    return super.value(next) + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Middle, "value", null);
            class App extends Middle {
                static value(next) {
                    return super.value(next) * 3;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 9);
            $mol_assert_equal(App.value(5), 21);
            $mol_assert_equal(App.value(), 21);
        },
        'Auto recalculation of cached values'($) {
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    return next || 1;
                }
                static yyy() {
                    return this.xxx() + 1;
                }
                static zzz() {
                    return this.yyy() + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            $mol_assert_equal(App.yyy(), 2);
            $mol_assert_equal(App.zzz(), 3);
            App.xxx(5);
            $mol_assert_equal(App.zzz(), 7);
        },
        'Skip recalculation when actually no dependency changes'($) {
            const log = [];
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    log.push('xxx');
                    return next || 1;
                }
                static yyy() {
                    log.push('yyy');
                    return [Math.sign(this.xxx())];
                }
                static zzz() {
                    log.push('zzz');
                    return this.yyy()[0] + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx']);
            App.xxx(5);
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx']);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx', 'yyy']);
        },
        'Flow: Auto'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static source(next = 1) { return next; }
                static condition(next = true) { return next; }
                static counter = 0;
                static result() {
                    const res = this.condition() ? this.source() : 0;
                    return res + this.counter++;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "source", null);
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            $mol_assert_equal(App.counter, 1);
            App.source(10);
            $mol_assert_equal(App.result(), 11);
            $mol_assert_equal(App.counter, 2);
            App.condition(false);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            $mol_wire_fiber.sync();
            $mol_assert_equal(App.source(), 1);
            App.source(20);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            App.condition(true);
            $mol_assert_equal(App.result(), 23);
            $mol_assert_equal(App.counter, 4);
        },
        'Dupes: Equality'($) {
            let counter = 0;
            class App extends $mol_object2 {
                static $ = $;
                static foo(next) {
                    return next ?? { numbs: [1] };
                }
                static bar() {
                    return { ...this.foo(), count: ++counter };
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [1] });
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [2] });
            $mol_assert_like(App.bar(), { numbs: [2], count: 2 });
        },
        'Cycle: Fail'($) {
            class App extends $mol_object2 {
                static $ = $;
                static foo() {
                    return this.bar() + 1;
                }
                static bar() {
                    return this.foo() + 1;
                }
                static test() {
                    $mol_assert_fail(() => App.foo(), 'Circular subscription');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            App.test();
        },
        'Different order of pull and push'($) {
            class App extends $mol_object2 {
                static $ = $;
                static store(next = 0) {
                    return next;
                }
                static fast(next) {
                    return this.store(next);
                }
                static slow(next) {
                    if (next !== undefined)
                        this.slow();
                    return this.store(next);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "store", null);
            __decorate([
                $mol_wire_solo
            ], App, "fast", null);
            __decorate([
                $mol_wire_solo
            ], App, "slow", null);
            App.fast();
            $mol_assert_equal(App.slow(666), 666);
            $mol_assert_equal(App.fast(), App.slow(), 666);
            App.store(777);
            $mol_assert_equal(App.fast(), App.slow(), 777);
        },
        'Actions inside invariant'($) {
            class App extends $mol_object2 {
                static $ = $;
                static count(next = 0) {
                    return next;
                }
                static count2() {
                    return this.count();
                }
                static res() {
                    const count = this.count2();
                    if (!count)
                        this.count(count + 1);
                    return count + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "count", null);
            __decorate([
                $mol_wire_solo
            ], App, "count2", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            $mol_assert_like(App.res(), 1);
            App.count(5);
            $mol_assert_like(App.res(), 6);
        },
        async 'Toggle with async'($) {
            class App extends $mol_object2 {
                static $ = $;
                static checked(next = false) {
                    $$.$mol_wait_timeout(0);
                    return next;
                }
                static toggle() {
                    const prev = this.checked();
                    $mol_assert_unique(this.checked(!prev), prev);
                }
                static res() {
                    return this.checked();
                }
                static test() {
                    $mol_assert_equal(App.res(), false);
                    App.toggle();
                    $mol_assert_equal(App.res(), true);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "checked", null);
            __decorate([
                $mol_wire_method
            ], App, "toggle", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Restore after error'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static condition(next = false) { return next; }
                static broken() {
                    if (this.condition()) {
                        $mol_fail(new Error('test error'));
                    }
                    return 1;
                }
                static result() {
                    return this.broken();
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "broken", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            App.condition(true);
            $mol_assert_fail(() => App.result(), 'test error');
            App.condition(false);
            $mol_assert_equal(App.result(), 1);
        },
        async 'Wait for data'($) {
            class App extends $mol_object2 {
                static $ = $;
                static async source() {
                    return 'Jin';
                }
                static middle() {
                    return $mol_wire_sync(this).source();
                }
                static target() {
                    return this.middle();
                }
                static test() {
                    $mol_assert_equal(App.target(), 'Jin');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "middle", null);
            __decorate([
                $mol_wire_solo
            ], App, "target", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Auto destroy on long alone'($) {
            let destroyed = false;
            class App extends $mol_object2 {
                static $ = $;
                static showing(next = true) {
                    return next;
                }
                static details() {
                    return {
                        destructor() {
                            destroyed = true;
                        }
                    };
                }
                static render() {
                    return this.showing() ? this.details() : null;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "showing", null);
            __decorate([
                $mol_wire_solo
            ], App, "details", null);
            __decorate([
                $mol_wire_solo
            ], App, "render", null);
            const details = App.render();
            $mol_assert_ok(details);
            App.showing(false);
            $mol_assert_not(App.render());
            App.showing(true);
            $mol_assert_equal(App.render(), details);
            $mol_wire_fiber.sync();
            $mol_assert_not(destroyed);
            App.showing(false);
            $mol_wire_fiber.sync();
            $mol_assert_ok(destroyed);
            App.showing(true);
            $mol_assert_unique(App.render(), details);
        },
        async 'Hold pubs while wait async task'($) {
            class App extends $mol_object2 {
                static $ = $;
                static counter = 0;
                static resets(next) {
                    return ($mol_wire_probe(() => this.resets()) ?? -1) + 1;
                }
                static async wait() { }
                static value() {
                    return ++this.counter;
                }
                static result() {
                    if (this.resets())
                        $mol_wire_sync(this).wait();
                    return this.value();
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "resets", null);
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            App.resets(null);
            $mol_wire_fiber.sync();
            $mol_assert_equal(await $mol_wire_async(App).result(), 1);
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static title() {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "title", null);
            $mol_assert_equal(`${App.title()}`, 'App.title<>');
        },
        'Unsubscribe from temp pubs on complete'($) {
            class Random extends $mol_object2 {
                static $ = $;
                static seed() {
                    return Math.random();
                }
                static resets(next) {
                    return Math.random();
                }
                static value() {
                    this.resets();
                    return this.seed();
                }
            }
            __decorate([
                $mol_wire_method
            ], Random, "seed", null);
            __decorate([
                $mol_wire_solo
            ], Random, "resets", null);
            __decorate([
                $mol_wire_solo
            ], Random, "value", null);
            const first = Random.value();
            Random.resets(null);
            $mol_assert_unique(Random.value(), first);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        async 'Error caching'($) {
            const next_cached = 123;
            class Some extends $mol_object2 {
                static $ = $;
                static data(id, next) {
                    if (next)
                        return next;
                    setTimeout(() => {
                        $mol_wire_async(this).data(id, next_cached);
                    }, 10);
                    $mol_fail_hidden(new Promise(() => { }));
                }
                static run() {
                    return this.data('1');
                }
            }
            __decorate([
                $mol_wire_plex
            ], Some, "data", null);
            __decorate([
                $mol_wire_method
            ], Some, "run", null);
            const val = await $mol_wire_async(Some).run();
            $mol_assert_equal(val, next_cached);
        },
        'Memoize by single simple key'($) {
            class Team extends $mol_object2 {
                static $ = $;
                static user_name(user, next) {
                    return next ?? user;
                }
                static user_names() {
                    return [
                        this.user_name('jin'),
                        this.user_name('john'),
                    ];
                }
            }
            __decorate([
                $mol_wire_plex
            ], Team, "user_name", null);
            __decorate([
                $mol_wire_solo
            ], Team, "user_names", null);
            $mol_assert_like(Team.user_names(), ['jin', 'john']);
            Team.user_name('jin', 'JIN');
            $mol_assert_like(Team.user_names(), ['JIN', 'john']);
        },
        'Memoize by single complex key'($) {
            class Map extends $mol_object2 {
                static $ = $;
                static tile(pos) {
                    return new String(`/tile=${pos}`);
                }
                static test() {
                    $mol_assert_like(this.tile([0, 1]), new String('/tile=0,1'));
                    $mol_assert_equal(this.tile([0, 1]), this.tile([0, 1]));
                }
            }
            __decorate([
                $mol_wire_plex
            ], Map, "tile", null);
            __decorate([
                $mol_wire_method
            ], Map, "test", null);
            Map.test();
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static like(friend) {
                    return new $mol_object2;
                }
                static relation([friend, props]) {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_plex
            ], App, "like", null);
            __decorate([
                $mol_wire_plex
            ], App, "relation", null);
            $mol_assert_equal(`${App.like(123)}`, 'App.like<123>');
            $mol_assert_equal(`${App.relation([123, [456]])}`, 'App.relation<[123,[456]]>');
        },
        'Deep deps'($) {
            class Fib extends $mol_object2 {
                static $ = $;
                static sums = 0;
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    ++this.sums;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            __decorate([
                $mol_wire_plex
            ], Fib, "value", null);
            $mol_assert_equal(Fib.value(4), 5);
            $mol_assert_equal(Fib.sums, 3);
            Fib.value(1, 2);
            $mol_assert_equal(Fib.value(4), 8);
            $mol_assert_equal(Fib.sums, 6);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Previous value'() {
            class Cache extends $mol_object2 {
                static store(next) {
                    if (!next)
                        return {};
                    return {
                        ...$mol_wire_probe(() => this.store()) ?? {},
                        ...next,
                    };
                }
            }
            __decorate([
                $mol_wire_solo
            ], Cache, "store", null);
            $mol_assert_like(Cache.store(), {});
            $mol_assert_like(Cache.store({ foo: 666 }), { foo: 666 });
            $mol_assert_like(Cache.store({ bar: 777 }), { foo: 666, bar: 777 });
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_frame = $mol_after_mock_commmon;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Primitives'() {
            $mol_assert_equal($mol_key(null), 'null');
            $mol_assert_equal($mol_key(false), 'false');
            $mol_assert_equal($mol_key(true), 'true');
            $mol_assert_equal($mol_key(0), '0');
            $mol_assert_equal($mol_key(1n << 64n), '18446744073709551616n');
            $mol_assert_equal($mol_key(''), '""');
        },
        'Array & POJO'() {
            $mol_assert_equal($mol_key([null]), '[null]');
            $mol_assert_equal($mol_key({ foo: 0 }), '{"foo":0}');
            $mol_assert_equal($mol_key({ foo: [false] }), '{"foo":[false]}');
        },
        'Uint8Array'() {
            $mol_assert_equal($mol_key(new Uint8Array([1, 2])), '[1,2]');
            $mol_assert_equal($mol_key([new Uint8Array([1, 2])]), '[[1,2]]');
            $mol_assert_equal($mol_key({ foo: new Uint8Array([1, 2]) }), '{"foo":[1,2]}');
        },
        'Function'() {
            const func = () => { };
            $mol_assert_equal($mol_key(func), $mol_key(func));
            $mol_assert_unique($mol_key(func), $mol_key(() => { }));
        },
        'Objects'() {
            class User {
            }
            const jin = new User();
            $mol_assert_equal($mol_key(jin), $mol_key(jin));
            $mol_assert_unique($mol_key(jin), $mol_key(new User()));
        },
        'Elements'() {
            const foo = $mol_jsx("div", null, "bar");
            $mol_assert_equal($mol_key(foo), $mol_key(foo));
            $mol_assert_unique($mol_key(foo), $mol_key($mol_jsx("div", null, "bar")));
        },
        'Custom JSON representation'() {
            class User {
                name;
                age;
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                toJSON() { return { name: this.name }; }
            }
            $mol_assert_equal($mol_key(new User('jin', 18)), '{"name":"jin"}');
        },
        'Special native classes'() {
            $mol_assert_equal($mol_key(new Date('xyz')), 'null');
            $mol_assert_equal($mol_key(new Date('2001-01-02T03:04:05.678Z')), '"2001-01-02T03:04:05.678Z"');
            $mol_assert_equal($mol_key(/./), '"/./"');
            $mol_assert_equal($mol_key(/\./gimsu), '"/\\\\./gimsu"');
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'return result without errors'() {
            $mol_assert_equal($mol_try(() => false), false);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => $.$mol_fail_log = () => false);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_log extends $mol_object2 {
        static watch(task) {
            return task;
        }
        static track(fiber) {
            const prev = $mol_wire_probe(() => this.track(fiber));
            let next;
            try {
                next = fiber.sync();
            }
            finally {
                for (const pub of fiber.pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
            if (fiber.host === this)
                return next;
            if ($mol_compare_deep(prev, next)) {
                this.$.$mol_log3_rise({
                    message: '💧 Same',
                    place: fiber,
                });
            }
            else if (prev !== undefined) {
                this.$.$mol_log3_rise({
                    message: '🔥 Next',
                    place: fiber,
                    prev,
                });
            }
            return next;
        }
        static active() {
            try {
                this.watch()?.();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            finally {
                for (const pub of $mol_wire_auto().pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_wire_log, "watch", null);
    __decorate([
        $mol_mem_key
    ], $mol_wire_log, "track", null);
    __decorate([
        $mol_mem
    ], $mol_wire_log, "active", null);
    $.$mol_wire_log = $mol_wire_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_wire_log.active();
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push(context => {
        class $mol_state_arg_mock extends $mol_state_arg {
            static $ = context;
            static href(next) { return next || ''; }
            static go(next) {
                this.href(this.link(next));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_state_arg_mock, "href", null);
        __decorate([
            $mol_action
        ], $mol_state_arg_mock, "go", null);
        context.$mol_state_arg = $mol_state_arg_mock;
    });
    $mol_test({
        'args as dictionary'($) {
            $.$mol_state_arg.href('#!foo=bar/xxx');
            $mol_assert_equal($.$mol_state_arg.dict(), { foo: 'bar', xxx: '' });
            $.$mol_state_arg.dict({ foo: null, yyy: '', lol: '123' });
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!yyy/lol=123');
        },
        'one value from args'($) {
            $.$mol_state_arg.href('#!foo=bar/xxx');
            $mol_assert_equal($.$mol_state_arg.value('foo'), 'bar');
            $mol_assert_equal($.$mol_state_arg.value('xxx'), '');
            $.$mol_state_arg.value('foo', 'lol');
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!foo=lol/xxx');
            $.$mol_state_arg.value('foo', '');
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!foo/xxx');
            $.$mol_state_arg.value('foo', null);
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!xxx');
        },
        'nested args'($) {
            const base = new $.$mol_state_arg('nested.');
            class Nested extends $mol_state_arg {
                constructor(prefix) {
                    super(base.prefix + prefix);
                }
                static value = (key, next) => base.value(key, next);
            }
            $.$mol_state_arg.href('#!foo=bar/nested.xxx=123');
            $mol_assert_equal(Nested.value('foo'), null);
            $mol_assert_equal(Nested.value('xxx'), '123');
            Nested.value('foo', 'lol');
            $mol_assert_equal($.$mol_state_arg.href().replace(/.*#/, '#'), '#!foo=bar/nested.xxx=123/nested.foo=lol');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $mol_assert_equal($mol_state_local.value(key), null);
            $mol_state_local.value(key, 123);
            $mol_assert_equal($mol_state_local.value(key), 123);
            $mol_state_local.value(key, null);
            $mol_assert_equal($mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $mol_state_local {
            static state = {};
            static value(key, next = this.state[key]) {
                return this.state[key] = (next || null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'all cases of using maybe'() {
            $mol_assert_equal($mol_maybe(0)[0], 0);
            $mol_assert_equal($mol_maybe(false)[0], false);
            $mol_assert_equal($mol_maybe(null)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $mol_assert_equal($mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'run callback'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $mol_wrapper {
                static last = 0;
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Plus1.last, 2);
            $mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                level = 2;
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static level = 2;
                static pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                bar;
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'memoize field'() {
            class Foo {
                static one = 1;
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            __decorate([
                $mol_memo.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Foo.two, 3);
            $mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'const returns stored value'() {
            const foo = { bar: $mol_const(Math.random()) };
            $mol_assert_equal(foo.bar(), foo.bar());
            $mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                static $ = $;
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $mol_view {
            };
            x.$ = $;
            $mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.getAttribute('href'), '#haha');
            $mol_assert_equal(node.getAttribute('required'), 'true');
            $mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_node();
            node.click();
            $mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $mol_view {
        Item() { return new $mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: '50%',
                height: '50px',
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { calc } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: calc(`100% - 1px`),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5,
                    shrink: 10,
                }
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n\tflex-shrink: 10;\n}\n');
        },
        'custom properties'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '--isVariable': 'yes',
                '--is_variable': 'no',
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\t--is-variable: yes;\n\t--is_variable: no;\n}\n');
        },
        'custom property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '--variable': {
                    test1: '5px',
                    test2: '10px',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\t--variable-test1: 5px;\n\t--variable-test2: 10px;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                padding: ['5px', 'auto'],
                margin: ['10px', 'auto'],
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n\tmargin: 10px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { url } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                    size: [['cover'], ['contain']],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n\tbackground-size: cover,contain;\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                box: {
                    shadow: [
                        {
                            inset: true,
                            x: 0,
                            y: 0,
                            blur: '0.5rem',
                            spread: 0,
                            color: 'red',
                        },
                        {
                            inset: false,
                            x: 0,
                            y: 0,
                            blur: '0.5rem',
                            spread: 0,
                            color: 'blue',
                        },
                    ],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                color: 'red',
                ':focus': {
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tcolor: red;\n}\n[mol_style_sheet_test]:focus {\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                color: 'red',
                '::first-line': {
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tcolor: red;\n}\n[mol_style_sheet_test]::first-line {\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                color: 'red',
                '@media': {
                    'print': {
                        display: 'block',
                    },
                    '(max-width: 640px)': {
                        display: 'inline',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tcolor: red;\n}\n@media print {\n[mol_style_sheet_test] {\n\tdisplay: block;\n}\n}\n@media (max-width: 640px) {\n[mol_style_sheet_test] {\n\tdisplay: inline;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                color: 'red',
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            display: 'block',
                        },
                    },
                    disabled: {
                        'true': {
                            width: '100%',
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tcolor: red;\n}\n[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) {\n\tdisplay: block;\n}\n[mol_style_sheet_test]:where([disabled="true"]) {\n\twidth: 100%;\n}\n');
        },
        'component block styles with attribute value (short syntax)'() {
            class $mol_style_sheet_test extends $mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                color: 'red',
                '[mol_theme]': {
                    '$mol_theme_dark': {
                        display: 'block',
                    },
                },
                '[disabled]': {
                    'true': {
                        width: '100%',
                    },
                    'false': {
                        width: '50%',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tcolor: red;\n}\n[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) {\n\tdisplay: block;\n}\n[mol_style_sheet_test]:where([disabled="true"]) {\n\twidth: 100%;\n}\n[mol_style_sheet_test]:where([disabled="false"]) {\n\twidth: 50%;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                color: 'red',
                Item: {
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tcolor: red;\n}\n[mol_style_sheet_test_item] {\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                width: '100%',
                List: {
                    color: 'red',
                    Item: {
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] {\n\twidth: 100%;\n}\n[mol_style_sheet_test2_list] {\n\tcolor: red;\n}\n[mol_style_sheet_test2_list_item] {\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark',
                        disabled: true,
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            Item: {
                                color: 'red',
                            },
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) :where([mol_style_sheet_test_item]) {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                color: 'red',
                $mol_style_sheet_test1: {
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] {\n\tcolor: red;\n}\n[mol_style_sheet_test2] :where([mol_style_sheet_test1]) {\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                color: 'red',
                '>': {
                    $mol_style_sheet_test1: {
                        display: 'block',
                    },
                    $mol_style_sheet_test2: {
                        display: 'inline',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] {\n\tcolor: red;\n}\n[mol_style_sheet_test2] > :where([mol_style_sheet_test1]) {\n\tdisplay: block;\n}\n[mol_style_sheet_test2] > :where([mol_style_sheet_test2]) {\n\tdisplay: inline;\n}\n');
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class TestClass extends Uint8Array {
    }
    $mol_test({
        'Uint8Array vs itself'() {
            $mol_assert_ok($mol_compare_array(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_array(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_array(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Uint8Array vs subclassed array'() {
            $mol_assert_not($mol_compare_array(new Uint8Array, new TestClass));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_equal($mol_charset_decode(encoded), str);
            $mol_assert_equal($mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $mol_assert_equal($mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'encode empty'() {
            $mol_assert_equal($mol_charset_encode(''), new Uint8Array([]));
        },
        'encode 1 octet'() {
            $mol_assert_equal($mol_charset_encode('F'), new Uint8Array([0x46]));
        },
        'encode 2 octet'() {
            $mol_assert_equal($mol_charset_encode('Б'), new Uint8Array([0xd0, 0x91]));
        },
        'encode 3 octet'() {
            $mol_assert_equal($mol_charset_encode('ह'), new Uint8Array([0xe0, 0xa4, 0xb9]));
        },
        'encode 4 octet'() {
            $mol_assert_equal($mol_charset_encode('𐍈'), new Uint8Array([0xf0, 0x90, 0x8d, 0x88]));
        },
        'encode surrogate pair'() {
            $mol_assert_equal($mol_charset_encode('😀'), new Uint8Array([0xf0, 0x9f, 0x98, 0x80]));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            async "Get and parse"($) {
                $mol_assert_equal(await $mol_wire_async($mol_fetch).text('data:text/plain,foo'), 'foo');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $mol_locale_mock extends $mol_locale {
            lang(next = 'en') { return next; }
            static source(lang) {
                return {};
            }
        }
        __decorate([
            $mol_mem
        ], $mol_locale_mock.prototype, "lang", null);
        __decorate([
            $mol_mem_key
        ], $mol_locale_mock, "source", null);
        $.$mol_locale = $mol_locale_mock;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_not(clicked);
            },
            async 'Store error'($) {
                const clicker = $mol_button.make({
                    $,
                    click: (event) => $.$mol_fail(new Error('Test error')),
                });
                const event = $mol_dom_context.document.createEvent('mouseevent');
                $mol_assert_fail(() => clicker.event_activate(event), 'Test error');
                await Promise.resolve();
                $mol_assert_equal(clicker.status()[0].message, 'Test error');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'escape'() {
            const specials = $mol_regexp.from('.*+?^${}()|[]\\');
            $mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $mol_regexp.from(32);
            $mol_assert_like(' '.match(space), [' ']);
        },
        'repeat fixed'() {
            const { repeat, decimal_only: digit } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            $mol_assert_like('#2020#'.match(year), ['2020']);
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, latin_only: letter } = $mol_regexp;
            $mol_assert_like('abc'.match(repeat(letter, 1, 2)), ['a', 'b', 'c']);
            $mol_assert_like('abc'.match(repeat_greedy(letter, 1, 2)), ['ab', 'c']);
        },
        'repeat range'() {
            const { repeat_greedy, decimal_only: digit } = $mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $mol_assert_like('#2#'.match(year), null);
            $mol_assert_like('#20#'.match(year), ['20']);
            $mol_assert_like('#2020#'.match(year), ['2020']);
            $mol_assert_like('#20201#'.match(year), ['2020']);
        },
        'repeat from'() {
            const { repeat_greedy, latin_only: letter } = $mol_regexp;
            const name = repeat_greedy(letter, 2);
            $mol_assert_like('##'.match(name), null);
            $mol_assert_like('#a#'.match(name), null);
            $mol_assert_like('#ab#'.match(name), ['ab']);
            $mol_assert_like('#abc#'.match(name), ['abc']);
        },
        'from string'() {
            const regexp = $mol_regexp.from('[\\d]');
            $mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $mol_assert_equal(regexp.flags, 'gsu');
        },
        'from regexp'() {
            const regexp = $mol_regexp.from(/[\d]/i);
            $mol_assert_equal(regexp.source, '[\\d]');
            $mol_assert_equal(regexp.flags, 'i');
        },
        'split'() {
            const regexp = $mol_regexp.from(';');
            $mol_assert_like('aaa;bbb;ccc'.split(regexp), ['aaa', ';', 'bbb', ';', 'ccc']);
            $mol_assert_like('aaa;;ccc'.split(regexp), ['aaa', ';', '', ';', 'ccc']);
            $mol_assert_like('aaa'.split(regexp), ['aaa']);
            $mol_assert_like(''.split(regexp), ['']);
        },
        'test for matching'() {
            const regexp = $mol_regexp.from('foo');
            $mol_assert_like(regexp.test(''), false);
            $mol_assert_like(regexp.test('fo'), false);
            $mol_assert_like(regexp.test('foo'), true);
            $mol_assert_like(regexp.test('foobar'), true);
            $mol_assert_like(regexp.test('barfoo'), true);
        },
        'case ignoring'() {
            const xxx = $mol_regexp.from('x', { ignoreCase: true });
            $mol_assert_like(xxx.flags, 'gisu');
            $mol_assert_like(xxx.exec('xx')[0], 'x');
            $mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end, from } = $mol_regexp;
            const xxx = from(['x', end], { multiline: true });
            $mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $mol_assert_like(xxx.flags, 'gmsu');
        },
        'flags override'() {
            const triplet = $mol_regexp.from($mol_regexp.from(/.../, { ignoreCase: true }), { multiline: true });
            $mol_assert_like(triplet.toString(), '/.../gmsu');
        },
        'sequence'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = from([begin, year, dash, month, dash, day, end]);
            $mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
        },
        'optional'() {
            const name = $mol_regexp.from(['A', ['4']]);
            $mol_assert_equal('AB'.match(name)[0], 'A');
            $mol_assert_equal('A4'.match(name)[0], 'A4');
        },
        'anon variants'() {
            const name = $mol_regexp.from(['A', $mol_regexp.vary(['4', '5'])]);
            $mol_assert_equal('AB'.match(name), null);
            $mol_assert_equal('A4'.match(name)[0], 'A4');
            $mol_assert_equal('A5'.match(name)[0], 'A5');
        },
        'only groups'() {
            const regexp = $mol_regexp.from({ dog: '@' });
            $mol_assert_like([...'#'.matchAll(regexp)][0].groups, undefined);
            $mol_assert_like([...'@'.matchAll(regexp)][0].groups, { dog: '@' });
        },
        'catch skipped'() {
            const regexp = $mol_regexp.from(/(@)(\d?)/g);
            $mol_assert_like([...'[[@]]'.matchAll(regexp)].map(f => [...f]), [
                ['[['],
                ['@', '@', ''],
                [']]'],
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from(Sex);
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'trans'.matchAll(sexism)][0].groups, undefined);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { male: '', female: 'female' });
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from({ Sex });
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { Sex: 'male', male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { Sex: 'female', male: '', female: 'female' });
        },
        'sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            $mol_assert_like([...'/foo/mi'.matchAll(regexp)], [
                Object.assign(["/foo/mi", "/", "foo", "/", "mi"], {
                    groups: {
                        prefix: '/',
                        postfix: '/',
                    },
                    index: 0,
                    input: "/",
                }),
            ]);
        },
        'recursive sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([
                begin, { date: [{ year }, dash, { month }] }, dash, { day }, end
            ]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                date: '2020-01',
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'parse multiple'() {
            const { decimal_only: digit, from } = $mol_regexp;
            const regexp = from({ digit });
            $mol_assert_like([...'123'.matchAll(regexp)].map(f => f.groups), [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'named variants'() {
            const { begin, or, end, from } = $mol_regexp;
            const sexism = from([
                begin, 'sex = ', { sex: ['male', or, 'female'] }, end
            ]);
            $mol_assert_like([...'sex = male'.matchAll(sexism)][0].groups, { sex: 'male' });
            $mol_assert_like([...'sex = female'.matchAll(sexism)][0].groups, { sex: 'female' });
            $mol_assert_like([...'sex = malefemale'.matchAll(sexism)][0].groups, undefined);
        },
        'force after'() {
            const { latin_only: letter, force_after, from } = $mol_regexp;
            const regexp = from([letter, force_after('.')]);
            $mol_assert_like('x.'.match(regexp), ['x']);
            $mol_assert_like('x,'.match(regexp), null);
        },
        'forbid after'() {
            const { latin_only: letter, forbid_after, from } = $mol_regexp;
            const regexp = from([letter, forbid_after('.')]);
            $mol_assert_like('x.'.match(regexp), null);
            $mol_assert_like('x,'.match(regexp), ['x']);
        },
        'char except'() {
            const { char_except, latin_only, tab } = $mol_regexp;
            const name = char_except(latin_only, tab);
            $mol_assert_like('a'.match(name), null);
            $mol_assert_like('\t'.match(name), null);
            $mol_assert_like('('.match(name), ['(']);
        },
        'unicode only'() {
            const { unicode_only, from } = $mol_regexp;
            const name = from([
                unicode_only('Script', 'Cyrillic'),
                unicode_only('Hex_Digit'),
            ]);
            $mol_assert_like('FF'.match(name), null);
            $mol_assert_like('ФG'.match(name), null);
            $mol_assert_like('ФF'.match(name), ['ФF']);
        },
        'generate by optional with inner group'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { dog: '@' }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: false }), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'generate by optional with inner group with variants'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { animal: { dog: '@', fox: '&' } }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_equal(animals.generate({ fox: true }), '#^&');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'complex example'() {
            const { begin, end, char_only, char_range, latin_only, slash_back, repeat_greedy, from, } = $mol_regexp;
            const atom_char = char_only(latin_only, "!#$%&'*+/=?^`{|}~-");
            const atom = repeat_greedy(atom_char, 1);
            const dot_atom = from([atom, repeat_greedy(['.', atom])]);
            const name_letter = char_only(char_range(0x01, 0x08), 0x0b, 0x0c, char_range(0x0e, 0x1f), 0x21, char_range(0x23, 0x5b), char_range(0x5d, 0x7f));
            const quoted_pair = from([
                slash_back,
                char_only(char_range(0x01, 0x09), 0x0b, 0x0c, char_range(0x0e, 0x7f))
            ]);
            const name = repeat_greedy({ name_letter, quoted_pair });
            const quoted_name = from(['"', { name }, '"']);
            const local_part = from({ dot_atom, quoted_name });
            const domain = dot_atom;
            const mail = from([begin, local_part, '@', { domain }, end]);
            $mol_assert_equal('foo..bar@example.org'.match(mail), null);
            $mol_assert_equal('foo..bar"@example.org'.match(mail), null);
            $mol_assert_like([...'foo.bar@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "foo.bar",
                quoted_name: "",
                name: "",
                name_letter: "",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_like([...'"foo..bar"@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "",
                quoted_name: '"foo..bar"',
                name: "foo..bar",
                name_letter: "r",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_equal(mail.generate({ dot_atom: 'foo.bar', domain: 'example.org' }), 'foo.bar@example.org');
            $mol_assert_equal(mail.generate({ name: 'foo..bar', domain: 'example.org' }), '"foo..bar"@example.org');
            $mol_assert_fail(() => mail.generate({ dot_atom: 'foo..bar', domain: 'example.org' }), 'Wrong param: dot_atom=foo..bar');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_test({
            'Empty needle'() {
                const app = new $mol_dimmer;
                app.needle = () => '  ';
                app.haystack = () => 'foo  bar';
                $mol_assert_like(app.strings(), ['foo  bar']);
            },
            'Empty haystack'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo  bar';
                app.haystack = () => '';
                $mol_assert_like(app.strings(), ['']);
            },
            'Not found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' bar ';
                $mol_assert_like(app.strings(), [' bar ']);
            },
            'One found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' bar', 'foo', ' ']);
            },
            'Multiple found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' foobarfoo foo';
                $mol_assert_like(app.strings(), [' ', 'foo', 'bar', 'foo', ' ', 'foo']);
            },
            'Fuzzy search'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo bar';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' ', 'bar', '', 'foo', ' ']);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Watch one value'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static lucky() {
                    return this.set.has(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), false);
            App.set.add(666);
            $mol_assert_equal(App.lucky(), false);
            App.set.add(777);
            $mol_assert_equal(App.lucky(), true);
            App.set.delete(777);
            $mol_assert_equal(App.lucky(), false);
        },
        'Watch item channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static lucky() {
                    return this.set.item(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), false);
            App.set.item(666, true);
            $mol_assert_equal(App.lucky(), false);
            App.set.item(777, true);
            $mol_assert_equal(App.lucky(), true);
            App.set.item(777, false);
            $mol_assert_equal(App.lucky(), false);
        },
        'Watch size'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static size() {
                    return this.set.size;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "size", null);
            $mol_assert_equal(App.size(), 0);
            App.set.add(666);
            $mol_assert_equal(App.size(), 1);
            App.set.add(777);
            $mol_assert_equal(App.size(), 2);
            App.set.delete(777);
            $mol_assert_equal(App.size(), 1);
        },
        'Watch for-of'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static sum() {
                    let res = 0;
                    for (const val of this.set) {
                        res += val;
                    }
                    return res;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_equal(App.sum(), 0);
            App.set.add(111);
            $mol_assert_equal(App.sum(), 111);
            App.set.add(222);
            $mol_assert_equal(App.sum(), 333);
            App.set.delete(111);
            $mol_assert_equal(App.sum(), 222);
        },
        'Watch forEach'($) {
            class App extends $mol_object2 {
                static $ = $;
                static set = new $mol_wire_set();
                static sum() {
                    let res = 0;
                    this.set.forEach(val => res += val);
                    return res;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_equal(App.sum(), 0);
            App.set.add(111);
            $mol_assert_equal(App.sum(), 111);
            App.set.add(222);
            $mol_assert_equal(App.sum(), 333);
            App.set.delete(111);
            $mol_assert_equal(App.sum(), 222);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    $mol_test({
        'base64 encode string'() {
            $mol_assert_equal($mol_base64_encode($mol_charset_encode('Hello, ΧΨΩЫ')), 'SGVsbG8sIM6nzqjOqdCr');
        },
        'base64 encode binary'() {
            $mol_assert_equal($mol_base64_encode(png), 'GgoASUh42g==');
        },
        'base64 encode string with plus'() {
            $mol_assert_equal($mol_base64_encode($mol_charset_encode('шоешпо')), '0YjQvtC10YjQv9C+');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const png = new Uint8Array([0x1a, 0x0a, 0x00, 0x49, 0x48, 0x78, 0xda]);
    const with_plus = new TextEncoder().encode('шоешпо');
    $mol_test({
        'base64 decode string'() {
            $mol_assert_equal($mol_base64_decode('SGVsbG8sIM6nzqjOqdCr'), new TextEncoder().encode('Hello, ΧΨΩЫ'));
        },
        'base64 decode binary'() {
            $mol_assert_equal($mol_base64_decode('GgoASUh42g=='), png);
        },
        'base64 decode binary - without equals'() {
            $mol_assert_equal($mol_base64_decode('GgoASUh42g'), png);
        },
        'base64 decode with plus'() {
            $mol_assert_equal($mol_base64_decode('0YjQvtC10YjQv9C+'), with_plus);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'empty hash'() {
            $mol_assert_equal($mol_crypto_hash(new Uint8Array([])), new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]));
        },
        'three bytes hash'() {
            $mol_assert_equal($mol_crypto_hash(new Uint8Array([255, 254, 253])), new Uint8Array([240, 150, 38, 243, 255, 128, 96, 0, 72, 215, 207, 228, 19, 149, 113, 52, 2, 125, 27, 77]));
        },
        'six bytes hash'() {
            $mol_assert_equal($mol_crypto_hash(new Uint8Array([0, 255, 10, 250, 32, 128])), new Uint8Array([23, 25, 155, 181, 46, 200, 221, 83, 254, 0, 166, 68, 91, 255, 67, 140, 114, 88, 218, 155]));
        },
        'seven bytes hash'() {
            $mol_assert_equal($mol_crypto_hash(new Uint8Array([1, 2, 3, 4, 5, 6, 7])), new Uint8Array([140, 31, 40, 252, 47, 72, 194, 113, 214, 196, 152, 240, 242, 73, 205, 222, 54, 92, 84, 197]));
        },
        'unaligned hash'() {
            const data = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]);
            $mol_assert_equal($mol_crypto_hash(new Uint8Array(data.buffer, 1, 7)), new Uint8Array([140, 31, 40, 252, 47, 72, 194, 113, 214, 196, 152, 240, 242, 73, 205, 222, 54, 92, 84, 197]));
        },
        async 'reference'() {
            const data = new Uint8Array([255, 254, 253]);
            $mol_assert_equal($mol_crypto_hash(data), new Uint8Array(await $mol_crypto_native.subtle.digest('SHA-1', data)));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "Validation"($) {
                $mol_assert_fail(() => new $giper_baza_link('qwertyui_asdfghjk123'), 'Wrong Link (qwertyui_asdfghjk123)');
            },
            "From integer"($) {
                $mol_assert_equal($giper_baza_link.from_int(178308648732587), new $giper_baza_link('qwertyui'));
            },
            "Pick Lord only"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').lord(), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').lord(), new $giper_baza_link('qwertyui_asdfghjk').lord(), new $giper_baza_link('qwertyui_asdfghjk'));
            },
            "Pick Land only"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').land(), new $giper_baza_link('qwertyui_asdfghjk').land(), new $giper_baza_link('qwertyui_asdfghjk'));
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').land(), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').land(), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed'));
            },
            "Pick Peer only"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').peer(), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').peer(), new $giper_baza_link('qwertyui'));
                $mol_assert_equal(new $giper_baza_link('___qazwsxed').peer(), new $giper_baza_link(''));
            },
            "Pick Head only"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').head(), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').head(), new $giper_baza_link('zxcvbnm0'));
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').head(), new $giper_baza_link('qwertyui_asdfghjk').head(), new $giper_baza_link(''));
            },
            "Pick Area only"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').area(), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').area(), new $giper_baza_link('qazwsxed'));
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').area(), new $giper_baza_link('qwertyui_asdfghjk').area(), new $giper_baza_link('').area(), new $giper_baza_link(''));
            },
            "Binary encoding"($) {
                const pawn = new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').toBin();
                const land = new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').toBin();
                const lord = new $giper_baza_link('qwertyui_asdfghjk').toBin();
                const rel_pawn = new $giper_baza_link('___zxcvbnm0').toBin();
                const rel_root = new $giper_baza_link('').toBin();
                $mol_assert_equal(pawn.length, 24);
                $mol_assert_equal(land.length, 18);
                $mol_assert_equal(lord.length, 12);
                $mol_assert_equal(rel_pawn.length, 6);
                $mol_assert_equal(rel_root.length, 0);
                $mol_assert_equal($giper_baza_link.from_bin(pawn), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0'));
                $mol_assert_equal($giper_baza_link.from_bin(land), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed'));
                $mol_assert_equal($giper_baza_link.from_bin(lord), new $giper_baza_link('qwertyui_asdfghjk'));
                $mol_assert_equal($giper_baza_link.from_bin(rel_pawn), new $giper_baza_link('zxcvbnm0'));
                $mol_assert_equal($giper_baza_link.from_bin(rel_root), new $giper_baza_link(''));
            },
            "Relate to base"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').relate(new $giper_baza_link('QWERTYUI_ASDFGHJK')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').relate(new $giper_baza_link('QWERTYUI_ASDFGHJK__ZXCVBNM0')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0'));
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').relate(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed')), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0').relate(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_12345678')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').relate(new $giper_baza_link('qwertyui_asdfghjk')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').relate(new $giper_baza_link('qwertyui_asdfghjk__12345678')), new $giper_baza_link('___zxcvbnm0'));
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').relate(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0')), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed').relate(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed')), new $giper_baza_link('qwertyui_asdfghjk').relate(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0')), new $giper_baza_link('qwertyui_asdfghjk').relate(new $giper_baza_link('qwertyui_asdfghjk')), new $giper_baza_link(''));
            },
            "Resolve Link from base"($) {
                $mol_assert_equal(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').resolve(new $giper_baza_link('QWERTYUI_ASDFGHJK__ZXCVBNM0')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').resolve(new $giper_baza_link('QWERTYUI_ASDFGHJK')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0').resolve(new $giper_baza_link('qwertyui_asdfghjk')), new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0'));
                $mol_assert_equal(new $giper_baza_link('___12345678').resolve(new $giper_baza_link('qwertyui_asdfghjk')), new $giper_baza_link('___12345678').resolve(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0')), new $giper_baza_link('qwertyui_asdfghjk__12345678'));
                $mol_assert_equal(new $giper_baza_link('___12345678').resolve(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed')), new $giper_baza_link('___12345678').resolve(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0')), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_12345678'));
                $mol_assert_equal(new $giper_baza_link('').resolve(new $giper_baza_link('qwertyui_asdfghjk')), new $giper_baza_link('').resolve(new $giper_baza_link('qwertyui_asdfghjk__zxcvbnm0')), new $giper_baza_link('qwertyui_asdfghjk'));
                $mol_assert_equal(new $giper_baza_link('').resolve(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed')), new $giper_baza_link('').resolve(new $giper_baza_link('qwertyui_asdfghjk_qazwsxed_zxcvbnm0')), new $giper_baza_link('qwertyui_asdfghjk_qazwsxed'));
            },
            'Hashing'() {
                $mol_assert_equal($giper_baza_link.hash_bin(new Uint8Array([1, 2, 3])), new $giper_baza_link('cDeAcZjC_Kn0rCAc3'));
                $mol_assert_equal($giper_baza_link.hash_str('foo bar'), new $giper_baza_link('N3PeplFW_kJg4æmwi'));
            }
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'str & bin sizes'() {
            const key_private = await $$.$mol_crypto_key_private.generate();
            const key_public = key_private.public();
            $mol_assert_equal(key_private.toString().length, $mol_crypto_key_private.size_str);
            $mol_assert_equal(key_public.toString().length, $mol_crypto_key_public.size_str);
            $mol_assert_equal(key_private.asArray().length, $mol_crypto_key_private.size_bin);
            $mol_assert_equal(key_public.asArray().length, $mol_crypto_key_public.size_bin);
            const data = new Uint8Array([1, 2, 3]);
            const sign = await key_private.sign(data);
            $mol_assert_equal(sign.byteLength, $mol_crypto_key_private.size_sign);
        },
        async 'verify self signed with auto generated key'() {
            const Alice = await $$.$mol_crypto_key_private.generate();
            const data = new Uint8Array([1, 2, 3]);
            const sign = await Alice.sign(data);
            $mol_assert_equal(true, await Alice.public().verify(data, sign));
        },
        async 'verify signed with str exported auto generated key'() {
            const Alice = await $$.$mol_crypto_key_private.generate();
            const data = new Uint8Array([1, 2, 3]);
            const Bella = $mol_crypto_key_private.from(Alice.toString());
            const sign = await Bella.sign(data);
            const Catie = $mol_crypto_key_public.from(Alice.public().toString());
            $mol_assert_equal(true, await Catie.verify(data, sign));
            const Diana = $mol_crypto_key_public.from(Alice.toString());
            $mol_assert_equal(true, await Diana.verify(data, sign));
        },
        async 'verify signed with bin exported auto generated key'() {
            const Alice = await $$.$mol_crypto_key_private.generate();
            const data = new Uint8Array([1, 2, 3]);
            const Bella = $mol_crypto_key_private.from(Alice.asArray());
            const sign = await Bella.sign(data);
            const Catie = $mol_crypto_key_public.from(Alice.public().asArray());
            $mol_assert_equal(true, await Catie.verify(data, sign));
            const Diana = $mol_crypto_key_public.from(Alice.asArray());
            $mol_assert_equal(true, await Diana.verify(data, sign));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'Sizes'() {
            const secret = $mol_crypto_sacred.make();
            const key = secret.asArray();
            $mol_assert_equal(key.byteLength, $mol_crypto_sacred.size);
            const data = new Uint8Array([1, 2, 3]);
            const salt = $mol_crypto_salt();
            const closed = await secret.encrypt(data, salt);
            $mol_assert_equal(closed.byteLength, $mol_crypto_sacred.size);
            const self_closed = await secret.close(secret, salt);
            $mol_assert_equal(self_closed.byteLength, $mol_crypto_sacred.size);
        },
        async 'Decrypt self encrypted'() {
            const secret = $mol_crypto_sacred.make();
            const data = new Uint8Array([1, 2, 3]);
            const salt = $mol_crypto_salt();
            const closed = await secret.encrypt(data, salt);
            const opened = await secret.decrypt(closed, salt);
            $mol_assert_equal(data, opened);
        },
        async 'Decrypt encrypted with exported key'() {
            const data = new Uint8Array([1, 2, 3]);
            const salt = $mol_crypto_salt();
            const Alice = $mol_crypto_sacred.make();
            const closed = await Alice.encrypt(data, salt);
            const Bob = $mol_crypto_sacred.from(Alice.asArray());
            const opened = await Bob.decrypt(closed, salt);
            $mol_assert_equal(data, opened);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'Shared secret from public & private keys'() {
            const A = await $mol_crypto_key_private.generate();
            const B = await $mol_crypto_key_private.generate();
            const SA = await $mol_crypto_sacred_shared(A, B.public());
            const SB = await $mol_crypto_sacred_shared(B, A.public());
            $mol_assert_equal(SA.asArray(), SB.asArray());
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $giper_baza_auth extends $.$giper_baza_auth {
            static current() {
                return this.from('_9nV1NuqbUeu1sUiLaq_KI_g1ViEjhM3-PNwxwl4t6AumN_FTqZzWpZ0T1ec64n418nazPbKmzimFyjEJST1cAMPU48vm3r966UVMmfXwrUCGXPHIcvsxSsP1x4Tf7R9c');
            }
            static embryos = [
                '_8sVK0YEb5PoN899wl1_J_4RVtlKCBF3zx7qrNjtttgobBewLTIVZTZY_00kAXGopu7sxBMwtsSFPwLGWfCsHcWULiSWqUauxKa4WgH6NPFjerHWrvbICSuKyF97oIX-A',
                '_-x55YK_NNRv27E3awWeWs9PmzKbqLhWGBFADEfgRmonOuHUmoyg0tgUdStHtDM9XyNF1zK1Q7r3wOfnDuRaYwtPD-Ke87FjnTjjGBIkYtsok-JsvM4E4Xx3GqSC9aNBU',
                '_x0qgvnkiuJWWxOg2rJMdnqKdwWJ8S9HqP87-evKJmIgFyP9Yx44jYoGXlbVM-i-boXzALM90jsFB74doBQkDEqeSe1Fbwvvuy1mbdir8FPecODVqHo8Ex8-Ms85zafgs',
                '_y2R-iKYhGNLnGzZAtF6ivtMp8SqS72i81eAoqe3BXsLYyQp4baGlcMkj3qiQf6uhjRZXrb9UuoxpYBraMvLzob-1h1xq0Dyk-_gFdM_osD9GFl6hcaVQ6UaE5jMJL-YE',
                '__cZfKZc2YH8Gvl8mLkwcoiht7Z31S1Uw8yeC23kO9ctqA4QmvqSLJOxdup4XmQOj7tyrO9RRMluLWIMXhnv38jlQRziNkOBijgw0cNCthUkdctdwAgxJh-c8L8UV2M4E',
                '__nWu6ndldmMALXiLD-nt0y1KsbDmmU7ER-zEBm8rcAtY_BfF4-VpTfVYvTBuPVFE18EgJYFRY4dbqpAnUbw-UcdzzLWB31gRF_TDqyvumtxClfEjz_OssaG8sALRnmHo',
                '_72Hwx_sDNRiEgdMIlaixh55UWvWdSgknJD-EImNjHA475U4xYwplEYEbKMQZ7QD88SDXzwwAK5zolb--e-EmgNMJVkqWF3yGTjKxAy-o9esRRsICF-LZM4Hgs_F7vkxc',
            ];
        }
        __decorate([
            $mol_mem
        ], $giper_baza_auth, "current", null);
        $.$giper_baza_auth = $giper_baza_auth;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'ordered links'() {
            var graph = new $mol_graph();
            graph.link('A', 'B', 'E');
            $mol_assert_equal(graph.edge_out('A', 'B'), 'E');
            $mol_assert_equal(graph.edge_in('B', 'A'), 'E');
            $mol_assert_equal(graph.edge_out('B', 'A'), null);
            $mol_assert_equal(graph.edge_in('A', 'B'), null);
        },
        'nodes without edges'() {
            var graph = new $mol_graph();
            graph.nodes.add('A');
            graph.nodes.add('B');
            graph.nodes.add('C');
            graph.nodes.add('D');
            graph.acyclic(edge => 0);
            $mol_assert_equal([...graph.sorted].join(''), 'ABCD');
        },
        'partial ordering'() {
            var graph = new $mol_graph();
            graph.nodes.add('A');
            graph.nodes.add('B');
            graph.nodes.add('C');
            graph.nodes.add('D');
            graph.link('B', 'C', { priority: 0 });
            graph.acyclic(edge => edge.priority);
            $mol_assert_equal([...graph.sorted].join(''), 'ACBD');
        },
        'sorting must cut cycles at low priority edges A'() {
            var graph = new $mol_graph();
            graph.link('A', 'B', { priority: 0 });
            graph.link('B', 'C', { priority: -2 });
            graph.link('C', 'D', { priority: 0 });
            graph.link('D', 'A', { priority: -1 });
            graph.acyclic(edge => edge.priority);
            $mol_assert_equal([...graph.sorted].join(''), 'BADC');
        },
        'sorting must cut cycles at low priority edges B'() {
            var graph = new $mol_graph();
            graph.link('B', 'C', { priority: -2 });
            graph.link('C', 'D', { priority: 0 });
            graph.link('D', 'A', { priority: -1 });
            graph.link('A', 'B', { priority: 0 });
            graph.acyclic(edge => edge.priority);
            $mol_assert_equal([...graph.sorted].join(''), 'BADC');
        },
        'sorting must cut cycles at low priority edges C'() {
            var graph = new $mol_graph();
            graph.link('C', 'D', { priority: 0 });
            graph.link('D', 'A', { priority: -1 });
            graph.link('A', 'B', { priority: 0 });
            graph.link('B', 'C', { priority: -2 });
            graph.acyclic(edge => edge.priority);
            $mol_assert_equal([...graph.sorted].join(''), 'BADC');
        },
        'sorting must cut cycles at low priority edges D'() {
            var graph = new $mol_graph();
            graph.link('D', 'A', { priority: -1 });
            graph.link('A', 'B', { priority: 0 });
            graph.link('B', 'C', { priority: -2 });
            graph.link('C', 'D', { priority: 0 });
            graph.acyclic(edge => edge.priority);
            $mol_assert_equal([...graph.sorted].join(''), 'BADC');
        },
        'sorting must group cutted cycles'() {
            var graph = new $mol_graph();
            graph.link('A', 'B', 0);
            graph.link('B', 'C', 0);
            graph.link('C', 'D', -2);
            graph.link('D', 'E', 0);
            graph.link('E', 'C', 0);
            graph.acyclic(edge => edge);
            $mol_assert_equal([...graph.sorted].join(''), 'CEDBA');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'parse and serial'() {
            $mol_assert_equal(new $mol_time_duration('P42.1Y').toString(), 'P42.1YT');
            $mol_assert_equal(new $mol_time_duration('P42.1M').toString(), 'P42.1MT');
            $mol_assert_equal(new $mol_time_duration('P42.1D').toString(), 'P42.1DT');
            $mol_assert_equal(new $mol_time_duration('PT42.1h').toString(), 'PT42.1H');
            $mol_assert_equal(new $mol_time_duration('PT42.1m').toString(), 'PT42.1M');
            $mol_assert_equal(new $mol_time_duration('PT42.1s').toString(), 'PT42.1S');
            $mol_assert_equal(new $mol_time_duration('P1Y2M3DT4h5m6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'negatives'() {
            $mol_assert_equal(new $mol_time_duration('P-1Y-2M-3DT-4h-5m-6.7s').toString(), new $mol_time_duration('-P1Y2M3DT4h5m6.7s').toString(), 'P-1Y-2M-3DT-4H-5M-6.7S');
            $mol_assert_equal(new $mol_time_duration('-P-1Y-2M-3DT-4h-5m-6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'format typed'() {
            $mol_assert_equal(new $mol_time_duration('P1Y2M3DT4h5m6s').toString('P#Y#M#DT#h#m#s'), 'P1Y2M3DT4H5M6S');
        },
        'format readable'() {
            $mol_assert_equal(new $mol_time_duration('P1Y2M3DT4h5m6s').toString('hh:mm:ss.sss'), '04:05:06.000');
        },
        'normalization'() {
            $mol_assert_equal(new $mol_time_duration('P1Y2M3DT44h55m66s').normal.toString(), 'P1Y2M4DT20H56M6S');
            $mol_assert_equal(new $mol_time_duration('P-1Y-2M-3DT-44h-55m-66s').normal.toString(), 'P-1Y-2M-4DT-20H-56M-6S');
        },
        'comparison'() {
            const iso = 'P1Y1M1DT1h1m1s';
            $mol_assert_equal(new $mol_time_duration(iso), new $mol_time_duration(iso));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'parse and serial'() {
            $mol_assert_equal(new $mol_time_moment('2014').toString(), '2014');
            $mol_assert_equal(new $mol_time_moment('2014-01').toString(), '2014-01');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').toString(), '2014-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03').toString(), '2014-01-02T03');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04').toString(), '2014-01-02T03:04');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05').toString(), '2014-01-02T03:04:05');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05.006').toString(), '2014-01-02T03:04:05.006');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05.006Z').toString(), '2014-01-02T03:04:05.006+00:00');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05.006+07:00').toString(), '2014-01-02T03:04:05.006+07:00');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04:05+07:08').toString(), '2014-01-02T03:04:05+07:08');
            $mol_assert_equal(new $mol_time_moment('2014-01-02T03:04+07:08').toString(), '2014-01-02T03:04+07:08');
            $mol_assert_equal(new $mol_time_moment('T03:04+07:08').toString(), 'T03:04+07:08');
            $mol_assert_equal(new $mol_time_moment('T03:04:05').toString(), 'T03:04:05');
            $mol_assert_equal(new $mol_time_moment('T03:04').toString(), 'T03:04');
            $mol_assert_equal(new $mol_time_moment('T03').toString(), 'T03');
        },
        'format simple'() {
            $mol_assert_equal(new $mol_time_moment('2014-01-02T01:02:03.000000').toString('AD YY-M-D h:m:s'), '21 14-1-2 1:2:3');
        },
        'format padded'() {
            $mol_assert_equal(new $mol_time_moment('2014-01-02T01:02:03.000').toString('YYYY-MM-DD hh:mm:ss'), '2014-01-02 01:02:03');
        },
        'format time zone'() {
            $mol_assert_equal(new $mol_time_moment('2014-01-02T01:02:03+05:00').toString('Z'), '+05:00');
        },
        'format names'() {
            new $mol_time_moment('2014-01-02T01:02:03.000').toString('Month Mon | WeekDay WD');
        },
        'shifting'() {
            $mol_assert_equal(new $mol_time_moment('T15:54:58.243+03:00').shift({}).toString(), 'T15:54:58.243+03:00');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('P1Y').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('P12M').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('P365D').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01-02').shift('PT8760h').toString(), '2015-01-02');
            $mol_assert_equal(new $mol_time_moment('2014-01').shift('PT8760h').toString(), '2015-01');
            $mol_assert_equal(new $mol_time_moment('2014-01').shift('PT-8760h').toString(), '2013-01');
        },
        'native from reduced'() {
            $mol_assert_equal(new $mol_time_moment('T15:00').native.toISOString().slice(0, -5), new $mol_time_moment().merge('T15:00:00').toOffset('Z').toString().slice(0, -6));
        },
        'normalization'() {
            $mol_assert_equal(new $mol_time_moment({ year: 2015, month: 6, day: 34 }).normal.toString(), '2015-08-04');
            $mol_assert_equal(new $mol_time_moment('2024-09-30 19:00+03:00').normal.month, 8);
        },
        'renormalization'() {
            $mol_assert_equal(new $mol_time_moment('2024-08').normal.toString(), '2024-08');
            $mol_assert_equal(new $mol_time_moment('2024-11').normal.toString(), '2024-11');
        },
        'iso week day'() {
            $mol_assert_equal(new $mol_time_moment('2017-09-17').weekday, $mol_time_moment_weekdays.sunday);
            $mol_assert_equal(new $mol_time_moment('2017-09-18').weekday, $mol_time_moment_weekdays.monday);
        },
        'change offset'() {
            $mol_assert_equal(new $mol_time_moment('2021-04-10 +03:00').toOffset('Z').toString(), '2021-04-09T21:00:00+00:00');
        },
        'comparison'() {
            const iso = '2021-01-02T03:04:05.678+09:10';
            $mol_assert_equal(new $mol_time_moment(iso), new $mol_time_moment(iso));
        },
        'array keeps zero offset'() {
            const moment = new $mol_time_moment('2026-01-25T16:37:36.129+00:00');
            const restored = new $mol_time_moment(moment.toArray());
            $mol_assert_equal(restored.offset?.count('PT1m'), 0);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'auto name'() {
            class Invalid extends $mol_error_mix {
            }
            const mix = new Invalid('foo');
            $mol_assert_equal(mix.name, 'Invalid_Error');
        },
        'simpe mix'() {
            const mix = new $mol_error_mix('foo', {}, new Error('bar'), new Error('lol'));
            $mol_assert_equal(mix.message, 'foo');
            $mol_assert_equal(mix.errors.map(e => e.message), ['bar', 'lol']);
        },
        'provide additional info'() {
            class Invalid extends $mol_error_mix {
            }
            const mix = new $mol_error_mix('Wrong password', {}, new Invalid('Too short', { value: 'p@ssw0rd', hint: '> 8 letters' }), new Invalid('Too simple', { value: 'p@ssw0rd', hint: 'need capital letter' }));
            const hints = [];
            if (mix instanceof $mol_error_mix) {
                for (const er of mix.errors) {
                    if (er instanceof Invalid) {
                        hints.push(er.cause?.hint ?? '');
                    }
                }
            }
            $mol_assert_equal(hints, ['> 8 letters', 'need capital letter']);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is number'() {
            $mol_data_number(0);
        },
        'Is not number'() {
            $mol_assert_fail(() => {
                $mol_data_number('x');
            }, 'x is not a number');
        },
        'Is object number'() {
            $mol_assert_fail(() => {
                $mol_data_number(new Number(''));
            }, '0 is not a number');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is integer'() {
            $mol_data_integer(0);
        },
        'Is float'() {
            $mol_assert_fail(() => {
                $mol_data_integer(1.1);
            }, '1.1 is not an integer');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'tagged typing'() {
            const { Weight, Length } = $mol_data_tagged({
                Weight: $mol_data_integer,
                Length: $mol_data_integer,
            });
            Length(20);
            let len = Length(10);
            len = 20;
            let num = len;
            len = Length(Weight(20));
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'config by value'() {
            const N = $mol_data_setup((a) => a, 5);
            $mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'function'() {
            $mol_assert_not($mol_func_is_class(function () { }));
        },
        'generator'() {
            $mol_assert_not($mol_func_is_class(function* () { }));
        },
        'async'() {
            $mol_assert_not($mol_func_is_class(async function () { }));
        },
        'arrow'() {
            $mol_assert_not($mol_func_is_class(() => null));
        },
        'named class'() {
            $mol_assert_ok($mol_func_is_class(class Foo {
            }));
        },
        'unnamed class'() {
            $mol_assert_ok($mol_func_is_class(class {
            }));
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'single function'() {
            const stringify = $mol_data_pipe((input) => input.toString());
            $mol_assert_equal(stringify(5), '5');
        },
        'two functions'() {
            const isLong = $mol_data_pipe((input) => input.toString(), (input) => input.length > 2);
            $mol_assert_equal(isLong(5.0), false);
            $mol_assert_equal(isLong(5.1), true);
        },
        'three functions'() {
            const pattern = $mol_data_pipe((input) => input.toString(), (input) => new RegExp(input), (input) => input.toString());
            $mol_assert_equal(pattern(5), '/5/');
        },
        'classes'() {
            class Box {
                value;
                constructor(value) {
                    this.value = value;
                }
            }
            const boxify = $mol_data_pipe((input) => input.toString(), Box);
            $mol_assert_ok(boxify(5) instanceof Box);
            $mol_assert_like(boxify(5).value, '5');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Watch one value'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static lucky() {
                    return this.dict.get(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), undefined);
            App.dict.set(666, 6666);
            $mol_assert_equal(App.lucky(), undefined);
            App.dict.set(777, 7777);
            $mol_assert_equal(App.lucky(), 7777);
            App.dict.delete(777);
            $mol_assert_equal(App.lucky(), undefined);
        },
        'Watch item channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static lucky() {
                    return this.dict.item(777);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "lucky", null);
            $mol_assert_equal(App.lucky(), null);
            App.dict.item(666, 6666);
            $mol_assert_equal(App.lucky(), null);
            App.dict.item(777, 7777);
            $mol_assert_equal(App.lucky(), 7777);
            App.dict.item(777, null);
            $mol_assert_equal(App.lucky(), null);
        },
        'Watch size'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static size() {
                    return this.dict.size;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "size", null);
            $mol_assert_equal(App.size(), 0);
            App.dict.set(666, 6666);
            $mol_assert_equal(App.size(), 1);
            App.dict.set(777, 7777);
            $mol_assert_equal(App.size(), 2);
            App.dict.delete(777);
            $mol_assert_equal(App.size(), 1);
        },
        'Watch for-of'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static sum() {
                    let keys = 0;
                    let vals = 0;
                    for (const [key, val] of this.dict) {
                        keys += key;
                        vals += val;
                    }
                    return [keys, vals];
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_like(App.sum(), [0, 0]);
            App.dict.set(111, 1111);
            $mol_assert_like(App.sum(), [111, 1111]);
            App.dict.set(222, 2222);
            $mol_assert_like(App.sum(), [333, 3333]);
            App.dict.delete(111);
            $mol_assert_like(App.sum(), [222, 2222]);
        },
        'Watch forEach'($) {
            class App extends $mol_object2 {
                static $ = $;
                static dict = new $mol_wire_dict();
                static sum() {
                    let keys = 0;
                    let vals = 0;
                    this.dict.forEach((val, key) => {
                        keys += key;
                        vals += val;
                    });
                    return [keys, vals];
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "sum", null);
            $mol_assert_like(App.sum(), [0, 0]);
            App.dict.set(111, 1111);
            $mol_assert_like(App.sum(), [111, 1111]);
            App.dict.set(222, 2222);
            $mol_assert_like(App.sum(), [333, 3333]);
            App.dict.delete(111);
            $mol_assert_like(App.sum(), [222, 2222]);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "Empty release"($) {
                const pool = new $mol_memory_pool;
                pool.release(0, 0);
                $mol_assert_equal(pool.acquire(8), 0);
            },
            "linear allocation"($) {
                const pool = new $mol_memory_pool;
                $mol_assert_equal(pool.acquire(8), 0);
                $mol_assert_equal(pool.acquire(16), 8);
                $mol_assert_equal(pool.acquire(32), 24);
            },
            "allocation in released"($) {
                const pool = new $mol_memory_pool;
                $mol_assert_equal(pool.acquire(8), 0);
                $mol_assert_equal(pool.acquire(16), 8);
                pool.release(0, 16);
                $mol_assert_equal(pool.acquire(8), 0);
                $mol_assert_equal(pool.acquire(16), 24);
                $mol_assert_equal(pool.acquire(8), 8);
            },
            "space limitation"($) {
                const pool = new $mol_memory_pool(10);
                pool.acquire(8);
                pool.release(2, 4);
                $mol_assert_fail(() => pool.acquire(6), 'No free space\nneed: 6\nhave: 4');
            },
            "double release"($) {
                const pool = new $mol_memory_pool;
                $mol_assert_fail(() => pool.release(0, 2), 'Double release');
                $mol_assert_fail(() => pool.release(2, 2), 'Release out of allocated');
                pool.acquire(16);
                pool.release(4, 8);
                $mol_assert_fail(() => pool.release(4, 8), 'Double release');
                $mol_assert_fail(() => pool.release(10, 4), 'Double release');
                $mol_assert_fail(() => pool.release(2, 4), 'Double release');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "faces serial and parse"($) {
                const land1 = new $giper_baza_link('12345678_12345678');
                const land2 = new $giper_baza_link('87654321_87654321');
                const land3 = new $giper_baza_link('87654321_00000000');
                const peer1 = new $giper_baza_link('12345678');
                const peer2 = new $giper_baza_link('87654321');
                const faces1 = new $giper_baza_face_map;
                faces1.peer_time(peer1.str, $giper_baza_time_now(), 0);
                faces1.peer_summ(peer1.str, 0);
                faces1.peer_time(peer2.str, $giper_baza_time_now(), 0);
                faces1.peer_summ(peer2.str, 64_000);
                const faces2 = new $giper_baza_face_map;
                faces2.peer_time(peer1.str, $giper_baza_time_now(), 0);
                faces2.peer_summ(peer1.str, 1);
                faces2.peer_time(peer2.str, $giper_baza_time_now(), 1);
                const faces3 = new $giper_baza_face_map;
                const parts = [
                    [land1.str, new $giper_baza_pack_part([], faces1)],
                    [land2.str, new $giper_baza_pack_part([], faces2)],
                    [land3.str, new $giper_baza_pack_part([], faces3)],
                ];
                const pack = $giper_baza_pack.make(parts);
                $mol_assert_equal(parts, pack.parts());
            },
            "units serial and parse"($) {
                const land = new $giper_baza_link('12345678_12345678');
                const pass = $.$giper_baza_auth.grab().pass();
                const gift = $giper_baza_unit_gift.make();
                const sand_small = $giper_baza_unit_sand.make(5);
                const ball = new Uint8Array($giper_baza_unit_sand.size_equator + 5);
                const sand_big = $giper_baza_unit_sand.make(ball.byteLength);
                sand_big.ball(ball);
                const seal = $giper_baza_unit_seal.make(15, true);
                const parts = [
                    [land.str, new $giper_baza_pack_part([pass, gift, sand_small, sand_big, seal])],
                ];
                const pack = $giper_baza_pack.make(parts);
                $mol_assert_equal(parts, pack.parts());
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'triplets'() {
            $mol_assert_equal(new $mol_time_interval('2015-01-01/P1M').end.toString(), '2015-02-01');
            $mol_assert_equal(new $mol_time_interval('P1M/2015-02-01').start.toString(), '2015-01-01');
            $mol_assert_equal(new $mol_time_interval('2015-01-01/2015-02-01').duration.toString(), 'PT2678400S');
        },
        'comparison'() {
            const iso = '2021-01-02/2022-03-04';
            $mol_assert_like(new $mol_time_interval(iso), new $mol_time_interval(iso));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'span for same uri'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.span(4, 5, 8);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 4);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 8);
        },
        'span after of given position'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.after(11);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 7);
            $mol_assert_equal(child.length, 11);
        },
        'slice span - regular'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(1, 4);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 4);
            $mol_assert_equal(child.length, 3);
            const child2 = span.slice(2, 2);
            $mol_assert_equal(child2.col, 5);
            $mol_assert_equal(child2.length, 0);
        },
        'slice span - negative'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(-3, -1);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 2);
        },
        'slice span - out of range'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            $mol_assert_fail(() => span.slice(-1, 3), `End value '3' can't be less than begin value (test.ts#1:3/5)`);
            $mol_assert_fail(() => span.slice(1, 6), `End value '6' out of range (test.ts#1:3/5)`);
            $mol_assert_fail(() => span.slice(1, 10), `End value '10' out of range (test.ts#1:3/5)`);
        },
        'error handling'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const error = span.error('Some error');
            $mol_assert_equal(error.message, 'Some error (test.ts#1:3/4)');
        }
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'tree parsing'($) {
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids[1].type, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo\n\n\n").kids.length, 1);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids[1].value, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar \\pol\n").kids[0].kids[0].kids[0].value, "pol");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar\n\t\\pol\n\t\\men\n").kids[0].kids[0].kids[1].value, "men");
            $mol_assert_equal($.$mol_tree2_from_string('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'Too many tabs'($) {
            const tree = `
				foo
						bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too many tabs\ntest#3:1/6\n!!!!!!\n\t\t\t\t\t\tbar');
        },
        'Too few tabs'($) {
            const tree = `
					foo
				bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too few tabs\ntest#3:1/4\n!!!!\n\t\t\t\tbar');
        },
        'Wrong nodes separator at start'($) {
            const tree = `foo\n \tbar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#2:1/2\n!!\n \tbar');
        },
        'Wrong nodes separator in the middle'($) {
            const tree = `foo  bar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#1:5/1\n    !\nfoo  bar');
        },
        'Unexpected EOF, LF required'($) {
            const tree = `	foo`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Unexpected EOF, LF required\ntest#1:5/1\n	   !\n	foo');
        },
        'Errors skip and collect'($) {
            const tree = `foo  bar`;
            const errors = [];
            const $$ = $.$mol_ambient({
                $mol_fail: (error) => {
                    errors.push(error.message);
                    return null;
                }
            });
            const res = $$.$mol_tree2_from_string(tree, 'test');
            $mol_assert_like(errors, [
                'Wrong nodes separator\ntest#1:5/1\n    !\nfoo  bar',
                'Unexpected EOF, LF required\ntest#1:9/1\n        !\nfoo  bar',
            ]);
            $mol_assert_equal(res.toString(), 'foo bar\n');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    function check(tree, ideal) {
        $mol_assert_equal(tree.toString(), $$.$mol_tree2_from_string(ideal).toString());
    }
    $mol_test({
        'inserting'($) {
            check($.$mol_tree2_from_string(`
					a b c d
				`).insert($mol_tree2.struct('x'), 'a', 'b', 'c'), `
					a b x
				`);
            check($.$mol_tree2_from_string(`
					a b
				`).insert($mol_tree2.struct('x'), 'a', 'b', 'c', 'd'), `
					a b c x
				`);
            check($.$mol_tree2_from_string(`
					a b c d
				`)
                .insert($mol_tree2.struct('x'), 0, 0, 0), `
					a b x
				`);
            check($.$mol_tree2_from_string(`
					a b
				`)
                .insert($mol_tree2.struct('x'), 0, 0, 0, 0), `
					a b \\
						x
				`);
            check($.$mol_tree2_from_string(`
					a b c d
				`)
                .insert($mol_tree2.struct('x'), null, null, null), `
					a b x
				`);
            check($.$mol_tree2_from_string(`
					a b
				`)
                .insert($mol_tree2.struct('x'), null, null, null, null), `
					a b \\
						x
				`);
        },
        'updating'($) {
            check($.$mol_tree2_from_string(`
					a b c d
				`).update([], 'a', 'b', 'c')[0], `
					a b
				`);
            check($.$mol_tree2_from_string(`
					a b c d
				`).update([$mol_tree2.struct('x')])[0], `
					x
				`);
            check($.$mol_tree2_from_string(`
					a b c d
				`).update([$mol_tree2.struct('x'), $mol_tree2.struct('y')], 'a', 'b', 'c')[0], `
					a b
						x
						y
				`);
        },
        'deleting'($) {
            const base = $.$mol_tree2_from_string(`
				a b c d
			`);
            check(base.insert(null, 'a', 'b', 'c'), `
					a b
				`);
            check(base.update(base.select('a', 'b', 'c', null).kids, 'a', 'b', 'c')[0], `
					a b d
				`);
            check(base.insert(null, 0, 0, 0), `
					a b
				`);
        },
        'hack'($) {
            const res = $.$mol_tree2_from_string(`
				foo bar xxx
			`)
                .hack({
                'bar': (input, belt) => [input.struct('777', input.hack(belt))],
            });
            $mol_assert_equal(res.map(String), ['foo 777 xxx\n']);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "1 byte int"($) {
                $mol_assert_equal($mol_bigint_encode(0n), new Uint8Array(new Int8Array([0]).buffer));
                $mol_assert_equal($mol_bigint_encode(1n), new Uint8Array(new Int8Array([1]).buffer));
                $mol_assert_equal($mol_bigint_encode(-1n), new Uint8Array(new Int8Array([-1]).buffer));
                $mol_assert_equal($mol_bigint_encode(127n), new Uint8Array(new Int8Array([127]).buffer));
                $mol_assert_equal($mol_bigint_encode(-128n), new Uint8Array(new Int8Array([-128]).buffer));
            },
            "2 byte int"($) {
                $mol_assert_equal($mol_bigint_encode(128n), new Uint8Array(new Int16Array([128]).buffer));
                $mol_assert_equal($mol_bigint_encode(-129n), new Uint8Array(new Int16Array([-129]).buffer));
                $mol_assert_equal($mol_bigint_encode(128n * 256n - 1n), new Uint8Array(new Int16Array([128 * 256 - 1]).buffer));
                $mol_assert_equal($mol_bigint_encode(-128n * 256n), new Uint8Array(new Int16Array([-128 * 256]).buffer));
            },
            "3 byte int"($) {
                $mol_assert_equal($mol_bigint_encode(128n * 256n), new Uint8Array(new Int32Array([128 * 256]).buffer).slice(0, 3));
                $mol_assert_equal($mol_bigint_encode(-128n * 256n - 1n), new Uint8Array(new Int32Array([-128 * 256 - 1]).buffer).slice(0, 3));
                $mol_assert_equal($mol_bigint_encode(128n * 256n ** 2n - 1n), new Uint8Array(new Int32Array([128 * 256 ** 2 - 1]).buffer).slice(0, 3));
                $mol_assert_equal($mol_bigint_encode(-128n * 256n ** 2n), new Uint8Array(new Int32Array([-128 * 256 ** 2]).buffer).slice(0, 3));
            },
            "4 byte int"($) {
                $mol_assert_equal($mol_bigint_encode(128n * 256n ** 2n), new Uint8Array(new Int32Array([128 * 256 ** 2]).buffer));
                $mol_assert_equal($mol_bigint_encode(-128n * 256n ** 2n - 1n), new Uint8Array(new Int32Array([-128 * 256 ** 2 - 1]).buffer));
                $mol_assert_equal($mol_bigint_encode(128n * 256n ** 3n - 1n), new Uint8Array(new Int32Array([128 * 256 ** 3 - 1]).buffer));
                $mol_assert_equal($mol_bigint_encode(-128n * 256n ** 3n), new Uint8Array(new Int32Array([-128 * 256 ** 3]).buffer));
            },
            "8 byte int"($) {
                $mol_assert_equal($mol_bigint_encode(128n * 256n ** 7n - 1n), new Uint8Array(new BigInt64Array([128n * 256n ** 7n - 1n]).buffer));
                $mol_assert_equal($mol_bigint_encode(-128n * 256n ** 7n), new Uint8Array(new BigInt64Array([-128n * 256n ** 7n]).buffer));
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        function check(text, bytes) {
            const ideal = new Uint8Array(bytes);
            const actual = $mol_charset_ucf_encode(text);
            $mol_assert_equal($mol_charset_ucf_decode(actual), text);
            $mol_assert_equal(actual, ideal);
        }
        $mol_test({
            "Full ASCII compatible"($) {
                check('hi', [0x68, 0x69]);
            },
            "1B ASCII with diacritic"($) {
                check('allo\u0302', [0x61, 0x6C, 0x6C, 0x6F, 0xEA]);
            },
            "1B Cyrillic"($) {
                check('мир', [0x88, 0x3C, 0xE2, 0x40, 0xF8]);
            },
            "1B Cyrillic with nummbers and punctuation"($) {
                check('м.1', [0x88, 0x3C, 0x2E, 0x31, 0xF8]);
            },
            "2B Kanji"($) {
                check('美', [0xF9, 0x0E, 0x63, 0x87]);
            },
            "3B rare Kanji"($) {
                check('𲎯', [0xF7, 0x2F, 0x47, 0x0C, 0x89]);
            },
            "1B Kana"($) {
                check('しい', [0xE0, 0x57, 0x44, 0xA0]);
            },
            "2B Emoji"($) {
                check('🏴', [0xFF, 0x74, 0x4B, 0x81]);
            },
            "2B Emoji with 1B modifiers"($) {
                check('🏴‍☠', [0xFF, 0x74, 0x4B, 0xC1, 0x0D, 0x8C, 0xA9, 0xB4]);
            },
            "2B Emoji with 3B Tag"($) {
                check('🏴\u{E007F}', [0xFF, 0x74, 0x4B, 0xF8, 0x7F, 0x00, 0xF3, 0x89]);
            },
            "Mixed scripts"($) {
                check('allô 美しい мир, 🏴‍☠\n', [
                    0x61, 0x6C, 0x6C, 0x6F, 0xEA, 0x20,
                    0xF9, 0x0E, 0x63, 0xE7, 0x57, 0x44, 0x20,
                    0xA8, 0x3C, 0xE2, 0x40, 0x2C, 0x20,
                    0xF7, 0x74, 0x4B, 0xC1, 0x0D, 0x8C, 0xA9, 0x0A,
                    0xB4,
                ]);
            },
            "Wrong ending"($) {
                const bin = new Uint8Array([0x88, 0x3C, 0xE2, 0x40]);
                const error = $mol_assert_fail(() => $mol_charset_ucf_decode(bin), 'Wrong ending');
                $mol_assert_equal(error.cause.mode, 166);
                $mol_assert_equal(error.cause.text, 'мир');
            },
            "Wrong byte"($) {
                const bin = new Uint8Array([0xFF, 0x74, 0x4B, 0x74, 0x9B, 0x81]);
                const error = $mol_assert_fail(() => $mol_charset_ucf_decode(bin), 'Wrong byte');
                $mol_assert_equal(error.cause.pos, 4);
                $mol_assert_equal(error.cause.text, '🏴');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "1 byte int"($) {
                $mol_assert_equal($mol_bigint_decode(new Uint8Array), 0n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int8Array([1]).buffer)), 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int8Array([-1]).buffer)), -1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int8Array([127]).buffer)), 127n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int8Array([-128]).buffer)), -128n);
            },
            "2 byte int"($) {
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int16Array([128]).buffer)), 128n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int16Array([-129]).buffer)), -129n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int16Array([128 * 256 - 1]).buffer)), 128n * 256n - 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int16Array([-128 * 256]).buffer)), -128n * 256n);
            },
            "3 byte int"($) {
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([128 * 256]).buffer).slice(0, 3)), 128n * 256n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([-128 * 256 - 1]).buffer).slice(0, 3)), -128n * 256n - 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([128 * 256 ** 2 - 1]).buffer).slice(0, 3)), 128n * 256n ** 2n - 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([-128 * 256 ** 2]).buffer).slice(0, 3)), -128n * 256n ** 2n);
            },
            "4 byte int"($) {
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([128 * 256 ** 2]).buffer)), 128n * 256n ** 2n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([-128 * 256 ** 2 - 1]).buffer)), -128n * 256n ** 2n - 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([128 * 256 ** 3 - 1]).buffer)), 128n * 256n ** 3n - 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new Int32Array([-128 * 256 ** 3]).buffer)), -128n * 256n ** 3n);
            },
            "8 byte int"($) {
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new BigInt64Array([128n * 256n ** 7n - 1n]).buffer)), 128n * 256n ** 7n - 1n);
                $mol_assert_equal($mol_bigint_decode(new Uint8Array(new BigInt64Array([-128n * 256n ** 7n]).buffer)), -128n * 256n ** 7n);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "Zero int"($) {
                $mol_assert_equal($mol_bigint_decode($mol_bigint_encode(0n)), 0n);
            },
            "Large positive int"($) {
                $mol_assert_equal($mol_bigint_decode($mol_bigint_encode(12345678901234567890n)), 12345678901234567890n);
            },
            "Large negative int"($) {
                $mol_assert_equal($mol_bigint_decode($mol_bigint_encode(-12345678901234567890n)), -12345678901234567890n);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        const { uint, link, spec, blob, text, list, tupl, sint } = $mol_vary_tip;
        const { none, both, fp16, fp32, fp64 } = $mol_vary_spec;
        const { L1, L2, L4, L8, LA } = $mol_vary_len;
        const str = $mol_charset_ucf_encode;
        function check(vary, ideal, Vary = $mol_vary) {
            const pack = Vary.pack(vary);
            $mol_assert_equal(Vary.take(pack), vary);
            $mol_assert_equal(pack, new Uint8Array(ideal));
        }
        $mol_test({
            "vary pack logical"($) {
                check([null], [spec | none]);
                check([true], [$mol_vary_spec.true]);
                check([false], [$mol_vary_spec.fake]);
                check([undefined], [spec | both]);
            },
            "vary pack uint0"($) {
                check([0], [0]);
                check([27], [27]);
            },
            "vary pack uint1"($) {
                check([28], [uint | L1, 28]);
                check([255], [uint | L1, 255]);
            },
            "vary pack uint2"($) {
                check([256], [uint | L2, 0, 1]);
                check([256 ** 2 - 1], [uint | L2, 255, 255]);
            },
            "vary pack uint4"($) {
                check([256 ** 2], [uint | L4, 0, 0, 1, 0]);
                check([256 ** 4 - 1], [uint | L4, 255, 255, 255, 255]);
            },
            "vary pack uint8"($) {
                check([256 ** 4], [uint | L8, 0, 0, 0, 0, 1, 0, 0, 0]);
                check([Number.MAX_SAFE_INTEGER], [uint | L8, 255, 255, 255, 255, 255, 255, 31, 0]);
                check([256n ** 8n - 1n], [uint | L8, 255, 255, 255, 255, 255, 255, 255, 255]);
            },
            "vary pack sint0"($) {
                check([-1], [-1]);
                check([-27], [-27]);
            },
            "vary pack sint1"($) {
                check([-28,], [sint | -L1, -28]);
                check([-256 / 2], [sint | -L1, 128]);
            },
            "vary pack sint2"($) {
                check([-256 / 2 - 1], [sint | -L2, 127, 255]);
                check([-(256 ** 2) / 2], [sint | -L2, 0, 128]);
            },
            "vary pack sint4"($) {
                check([-(256 ** 2) / 2 - 1], [sint | -L4, 255, 127, 255, 255]);
                check([-(256 ** 4) / 2], [sint | -L4, 0, 0, 0, 128]);
            },
            "vary pack sint8"($) {
                check([-(256 ** 4) / 2 - 1], [sint | -L8, 255, 255, 255, 127, 255, 255, 255, 255]);
                check([Number.MIN_SAFE_INTEGER], [sint | -L8, 1, 0, 0, 0, 0, 0, 224, 255]);
                check([-(2n ** 63n)], [sint | -L8, 0, 0, 0, 0, 0, 0, 0, 128]);
            },
            "vary pack bigint"($) {
                check([2n ** 64n], [sint | -LA, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
                check([2n ** 2111n], [sint | -LA, 0, 1, ...Array.from({ length: 263 }, () => 0), 128, 0]);
                check([-1n - 2n ** 64n], [sint | -LA, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 254]);
                check([-1n - 2n ** 2111n], [sint | -LA, 0, 1, ...Array.from({ length: 263 }, () => 255), -129, 255]);
            },
            "vary pack float"($) {
                check([1.5], [fp64, ...new Uint8Array(new Float64Array([1.5]).buffer)]);
            },
            "vary pack list"($) {
                check([[1, 2, 3]], [list | 3, 1, 2, 3]);
                check([[[], [1], [2, 3]]], [list | 3, list | 0, list | 1, 1, list | 2, 2, 3]);
            },
            "vary pack dedup list"($) {
                const pair = [1, 2];
                check([[pair, pair]], [list | 2, list | 2, 1, 2, link | 0]);
                const seven = [7];
                const box = [seven];
                check([[box, box, seven]], [list | 3, list | 1, list | 1, 7, link | 1, link | 0]);
            },
            "vary pack cyclic list"($) {
                const foo = [];
                foo.push([foo]);
                $mol_assert_fail(() => $mol_vary.pack([foo]), 'Cyclic refs');
            },
            "vary pack dedup uint"($) {
                check([[28, 28]], [list | 2, uint | L1, 28, link | 0]);
                check([[2n ** 64n, 2n ** 64n]], [list | 2, sint | -LA, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, link | 0]);
            },
            "vary pack dedup float"($) {
                check([[1.5, 1.5]], [list | 2, fp64, ...new Uint8Array(new Float64Array([1.5]).buffer), link | 0]);
            },
            "vary pack text"($) {
                check(['foo'], [text | 3, ...str('foo')]);
                check(['абв'], [text | 5, ...str('абв')]);
                const long_lat = 'abcdefghijklmnopqrst';
                check([long_lat], [text | L1, 20, ...str(long_lat)]);
                const long_cyr = 'абвгдеёжзийклмнопрст';
                check([long_cyr], [text | L1, 22, ...str(long_cyr)]);
            },
            "vary pack dedup text"($) {
                check([["f", "f"]], [list | 2, text | 1, ...str('f'), link | 0]);
            },
            "vary pack blob"($) {
                check([new Uint8Array([1, 255])], [blob | 2, uint | L1, 1, 255]);
                check([new Int8Array([-128, 127])], [blob | 2, sint | ~L1, -128, 127]);
                check([new Uint32Array([255])], [blob | 4, uint | L4, 255, 0, 0, 0]);
                check([new Int32Array([-128])], [blob | 4, sint | ~L4, -128, 255, 255, 255]);
                check([new BigUint64Array([255n])], [blob | 8, uint | L8, 255, 0, 0, 0, 0, 0, 0, 0]);
                check([new BigInt64Array([-128n])], [blob | 8, sint | ~L8, -128, 255, 255, 255, 255, 255, 255, 255]);
                check([new Float32Array([1.5])], [blob | 4, fp32, ...new Uint8Array(new Float32Array([1.5]).buffer)]);
                check([new Float64Array([1.5])], [blob | 8, fp64, ...new Uint8Array(new Float64Array([1.5]).buffer)]);
            },
            "vary pack dedup blob"($) {
                const part = new Uint8Array([1, 2]);
                check([[part, part]], [list | 2, blob | 2, uint | L1, 1, 2, link | 0]);
            },
            "vary pack struct"($) {
                check([{ x: 1, y: 2 }], [tupl | 2, list | 2, text | 1, ...str('x'), text | 1, ...str('y'), 1, 2]);
                check([{ x: {}, y: { a: 1 } }], [tupl | 2, list | 2, text | 1, ...str('x'), text | 1, ...str('y'), tupl | 0, list | 0, tupl | 1, list | 1, text | 1, ...str('a'), 1]);
            },
            "vary pack struct shape dedup"($) {
                check([[{}, { foo: 1 }, { foo: 2 }]], [list | 3, tupl | 0, list | 0, tupl | 1, list | 1, text | 3, ...str('foo'), 1, tupl | 1, link | 3, 2]);
                check([{ x: 1, y: { x: 2, y: 3 } }], [tupl | 2, list | 2, text | 1, ...str('x'), text | 1, ...str('y'), 1, tupl | 2, link | 2, 2, 3]);
            },
            "vary pack struct full dedup"($) {
                const item = { x: 1 };
                check([[item, item]], [list | 2, tupl | 1, list | 1, text | 1, ...str('x'), 1, link | 2]);
                const part = { x: 1, y: 2 };
                check([{ x: part, y: part }], [tupl | 2, list | 2, text | 1, ...str('x'), text | 1, ...str('y'), tupl | 2, link | 2, 1, 2, link | 3]);
            },
            "vary pack cyclic struct"($) {
                const foo = { bar: null };
                foo.bar = foo;
                $mol_assert_fail(() => $mol_vary.pack([foo]), 'Cyclic refs');
            },
            "vary pack Map"($) {
                check([new Map([['foo', 1], [2, 'bar']])], [tupl | 2, list | 2, text | 4, ...str('keys'), text | 4, ...str('vals'), list | 2, text | 3, ...str('foo'), 2, list | 2, 1, text | 3, ...str('bar')]);
            },
            "vary pack Set"($) {
                check([new Set([7, 'foo'])], [tupl | 1, list | 1, text | 3, ...str('set'), list | 2, 7, text | 3, ...str('foo')]);
            },
            "vary pack Date"($) {
                const date1 = new Date('2025-01-02T03:04:05');
                check([date1], [tupl | 1, list | 1, text | 9, ...str('unix_time'), uint | L4, ...new Uint8Array(new Uint32Array([date1.valueOf() / 1000]).buffer)]);
                const date2 = new Date('2025-01-02T03:04:05.678');
                check([date2], [tupl | 1, list | 1, text | 9, ...str('unix_time'), fp64, ...new Uint8Array(new Float64Array([date2.valueOf() / 1000]).buffer)]);
            },
            "vary pack DOM Element"($) {
                $mol_assert_equal($mol_dom_serialize($mol_jsx("div", null,
                    $mol_jsx("span", null),
                    $mol_jsx("br", null),
                    " ")), $mol_dom_serialize($mol_vary.take($mol_vary.pack([$mol_jsx("div", null,
                        $mol_jsx("span", null),
                        $mol_jsx("br", null),
                        " ")]))[0]));
            },
            "vary pack custom types in rooms"($) {
                class Foo {
                    a;
                    b;
                    constructor(a, b) {
                        this.a = a;
                        this.b = b;
                    }
                    ;
                    [Symbol.iterator]() {
                        return [this.a, this.b].values();
                    }
                }
                const Vary = $mol_vary.zone();
                Vary.type({
                    type: Foo,
                    keys: ['summ', 'diff'],
                    lean: foo => [foo.a + foo.b, foo.a - foo.b],
                    rich: ([summ, diff]) => new Foo((summ + diff) / 2, (summ - diff) / 2),
                });
                check([new Foo(4, 2)], [tupl | 2, list | 2, text | 4, ...str('summ'), text | 4, ...str('diff'), 6, 2], Vary);
                $mol_assert_equal($mol_vary.take($mol_vary.pack([new Foo(4, 2)])), [{ a: 4, b: 2 }]);
                $mol_assert_equal(Vary.take(Vary.pack([new Map([[1, 2]])])), [new Map([[1, 2]])]);
            },
            "vary pack sequences"($) {
                check([], []);
                check([7], [7]);
                check([3, 4], [3, 4]);
                check([['foo', 'foo'], ['bar', 'bar']], [list | 2, text | 3, ...str('foo'), link | 0, list | 2, text | 3, ...str('bar'), link | 0]);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        function check(vary) {
            $mol_assert_equal(vary, $giper_baza_vary.take($giper_baza_vary.pack([vary]))[0]);
        }
        $mol_test({
            "Bin"($) {
                check(null);
                check(new Uint8Array([1, 2, 3]));
            },
            "Bool"($) {
                check(false);
                check(true);
            },
            "Int"($) {
                check(0);
                check(4611686018427387904n);
            },
            "Real"($) {
                check(0);
                check(Math.PI);
                check(Number.NaN);
                check(Number.POSITIVE_INFINITY);
                check(Number.NEGATIVE_INFINITY);
                check(Number.MAX_SAFE_INTEGER);
                check(Number.MIN_SAFE_INTEGER);
                check(BigInt(Number.MAX_VALUE));
                check(Number.MIN_VALUE);
            },
            "Link"($) {
                check(new $giper_baza_link(''));
                check($giper_baza_link.from_int(123456789));
            },
            "Str"($) {
                check('');
                check('123');
                check('🐱‍👤');
            },
            "Time"($) {
                check(new $mol_time_moment('1984-08-04T09:05:13.666+03:00'));
                check(new $mol_time_moment);
            },
            "Dura"($) {
                check(new $mol_time_duration('P1Y2M3DT4h5m6.6s'));
            },
            "Span"($) {
                check(new $mol_time_interval('T09:00/PT9h'));
            },
            "JSON"($) {
                check({ foo: ['bar'] });
                check([{ foo: 'bar' }]);
            },
            "DOM"($) {
                const xml = ($mol_jsx("div", null,
                    $mol_jsx("span", { class: "bar" }, "xxx")));
                $mol_assert_equal($mol_dom_serialize($giper_baza_vary.take($giper_baza_vary.pack([xml]))[0]), $mol_dom_serialize(xml));
            },
            "Tree"($) {
                const tree = $.$mol_tree2_from_string(`
				foo \\bar
					foo \\bar
			`);
                $mol_assert_equal($.$mol_tree2_to_string($giper_baza_vary.take($giper_baza_vary.pack([tree]))[0]), $.$mol_tree2_to_string(tree));
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'empty array'() {
            $mol_assert_equal($mol_array_chunks([], () => true), []);
        },
        'one chunk'() {
            $mol_assert_equal($mol_array_chunks([1, 2, 3, 4, 5], () => false), [[1, 2, 3, 4, 5]]);
        },
        'fixed size chunk'() {
            $mol_assert_equal($mol_array_chunks([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);
        },
        'first empty chunk'() {
            $mol_assert_equal($mol_array_chunks([1, 2, 3, 4, 5], (_, i) => i === 0), [[1, 2, 3, 4, 5]]);
        },
        'chunk for every item'() {
            $mol_assert_equal($mol_array_chunks([1, 2, 3, 4, 5], () => true), [[1], [2], [3], [4], [5]]);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'fromJSON'() {
            $mol_assert_equal($mol_tree2_from_json([]).toString(), '/\n');
            $mol_assert_equal($mol_tree2_from_json([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree2_from_json([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree2_from_json(new Uint16Array([1, 10, 255, 256, 65535])).toString(), '\\01 00 0A 00 FF 00 00 01\n\\FF FF\n');
            $mol_assert_equal($mol_tree2_from_json(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree2_from_json({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "Cast from blob"($) {
                const vary = new Uint8Array([1, 2, 3]);
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), vary);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 3n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 3);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), 'AQID');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), [1, 2, 3]);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>AQID</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '\\01\n\\02\n\\03\n');
            },
            "Cast from false"($) {
                const vary = false;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), false);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 0n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 0);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), 'false');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), [false]);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>false</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), 'false\n');
            },
            "Cast from true"($) {
                const vary = true;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 1n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 1);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), 'true');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), [true]);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>true</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), 'true\n');
            },
            "Cast from 0n"($) {
                const vary = 0n;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), false);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 0n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 0);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), '0');
                $mol_assert_equal($giper_baza_vary_cast_time(vary)?.toOffset(0).toString(), '1970-01-01T00:00:00+00:00');
                $mol_assert_equal($giper_baza_vary_cast_dura(vary)?.toString(), 'PT');
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), ['0']);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>0</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '0\n');
            },
            "Cast from big int"($) {
                const vary = 4611686018427387903n;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 4611686018427387903n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 4611686018427388000);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), '4611686018427387903');
                $mol_assert_equal($giper_baza_vary_cast_time(vary)?.toOffset(0).toString(), '10889-08-02T05:31:50.655+00:00');
                $mol_assert_equal($giper_baza_vary_cast_dura(vary)?.toString(), 'PT281474976710.655S');
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), ['4611686018427387903']);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>4611686018427387903</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '4611686018427387903\n');
            },
            "Cast from 0"($) {
                const vary = 0;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), false);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 0n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 0);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), '0');
                $mol_assert_equal($giper_baza_vary_cast_time(vary)?.toOffset(0).toString(), '1970-01-01T00:00:00+00:00');
                $mol_assert_equal($giper_baza_vary_cast_dura(vary)?.toString(), 'PT');
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), [0]);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>0</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '0\n');
            },
            "Cast from PI"($) {
                const vary = Math.PI;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 3n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), Math.PI);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), '3.141592653589793');
                $mol_assert_equal($giper_baza_vary_cast_time(vary)?.toOffset(0).toString(), '1970-01-01T00:00:00.003+00:00');
                $mol_assert_equal($giper_baza_vary_cast_dura(vary)?.toString(), "PT0.0031415926535897933S");
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), [Math.PI]);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>3.141592653589793</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '3.141592653589793\n');
            },
            "Cast from NaN"($) {
                const vary = Number.NaN;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), false);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), Number.NaN);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), 'NaN');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>NaN</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), 'NaN\n');
            },
            "Cast from Infinity"($) {
                const vary = Number.POSITIVE_INFINITY;
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), Number.POSITIVE_INFINITY);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), 'Infinity');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>Infinity</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), 'Infinity\n');
            },
            "Cast from empty string"($) {
                const vary = '';
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), false);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), '');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_tree(vary), null);
            },
            "Cast from number string"($) {
                const vary = '123456789012345678901234567890123456789';
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), 123456789012345678901234567890123456789n);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), 1.2345678901234568e+38);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), '123456789012345678901234567890123456789');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), [1.2345678901234568e+38]);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>123456789012345678901234567890123456789</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '\\123456789012345678901234567890123456789\n');
            },
            "Cast from wild string"($) {
                const vary = 'foo';
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), Number.NaN);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), 'foo');
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), ['foo']);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>foo</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), '\\foo\n');
            },
            "Cast from Link"($) {
                const vary = new $giper_baza_link('qwertyui_asdfghjk_zxcvbnm0');
                $mol_assert_equal($giper_baza_vary_cast_blob(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_bool(vary), true);
                $mol_assert_equal($giper_baza_vary_cast_bint(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_real(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_link(vary), vary);
                $mol_assert_equal($giper_baza_vary_cast_text(vary), vary.str);
                $mol_assert_equal($giper_baza_vary_cast_time(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dura(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_span(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_dict(vary), null);
                $mol_assert_equal($giper_baza_vary_cast_list(vary), ['qwertyui_asdfghjk_zxcvbnm0']);
                $mol_assert_equal($giper_baza_vary_cast_elem(vary)?.outerHTML, '<body>qwertyui_asdfghjk_zxcvbnm0</body>');
                $mol_assert_equal($giper_baza_vary_cast_tree(vary)?.toString(), 'qwertyui_asdfghjk_zxcvbnm0\n');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $mol_bus extends $.$mol_bus {
            send() { }
        }
        $.$mol_bus = $mol_bus;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $giper_baza_land_mock extends $.$giper_baza_land {
            sync() {
                return this;
            }
        }
        $.$giper_baza_land = $giper_baza_land_mock;
    });
    const auth1 = $giper_baza_auth.from('_4eLnQsSr5wj6XOzgS5bZa254pkEOf_hg1nReCSR4Zkd-E07aLSwj-II-rZt4ZubInw_f1rZiA0Qa92qR0Gq3I6xYWCkW9Aagc7-97L2P-gI84NaLwdabp_DrZEX3RJTY');
    const auth2 = $giper_baza_auth.from('_5THYp_Njx6-cAU53dRwdv3z8RBAVK7Z2L3OeZmTp8sCsMNXmdssFljy2fxIMDX_oxTFRrRCvAH7s92kUOVn5YYTPGuZ5fQFOAEeRNGGQ47JVCK3Cy_XDSUDvklZ-3Ix4');
    $mol_test({
        async 'Give rights'($) {
            const land0 = $giper_baza_land.make({ $ });
            const land1 = $giper_baza_land.make({ $, link: () => land0.link(), auth: () => auth1 });
            $mol_assert_equal(land0.lord_rank(land0.link()), $giper_baza_rank_rule);
            $mol_assert_equal(land0.lord_rank(auth1.pass().lord()), $giper_baza_rank_read);
            $mol_assert_fail(() => land1.give(auth2.pass(), $giper_baza_rank_post('just')), 'Too low Tier');
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_read);
            land0.give(auth1.pass(), $giper_baza_rank_read);
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_read);
            land0.give(auth1.pass(), $giper_baza_rank_read);
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_read);
            land0.give(auth1.pass(), $giper_baza_rank_post('just'));
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_post('just'));
            land0.give(auth1.pass(), $giper_baza_rank_pull('just'));
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_pull('just'));
            land0.give(auth1.pass(), $giper_baza_rank_rule);
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_rule);
            land0.give(auth1.pass(), $giper_baza_rank_post('just'));
            $mol_assert_equal(land0.pass_rank(auth1.pass()), $giper_baza_rank_post('just'));
            await $mol_wire_async(land1).units_steal(land0);
            $mol_assert_equal(land1.pass_rank(auth1.pass()), $giper_baza_rank_post('just'));
            $mol_assert_fail(() => land1.give(auth2.pass(), $giper_baza_rank_post('just')), 'Too low Tier');
        },
        async 'Post Data and pick Delta'($) {
            const land1 = $giper_baza_land.make({ $ });
            const land2 = $giper_baza_land.make({ $, link: () => land1.link(), auth: () => auth2 });
            $mol_assert_equal(await $mol_wire_async(land1).diff_units(), []);
            land1.post($giper_baza_link.hole, $giper_baza_link.hole, new $giper_baza_link('AA111111'), new Uint8Array([1]));
            $mol_assert_equal((await $mol_wire_async(land1).diff_units()).length, 4);
            const face = land1.faces.clone();
            land1.post(new $giper_baza_link('AA111111'), $giper_baza_link.hole, new $giper_baza_link('AA222222'), new Uint8Array([2]));
            $mol_assert_equal((await $mol_wire_async(land1).diff_units()).length, 5);
            $mol_assert_equal((await $mol_wire_async(land1).diff_units(face)).length, 2);
            await $mol_wire_async(land2).units_steal(land1);
            $mol_assert_fail(() => land2.post(new $giper_baza_link('AA222222'), $giper_baza_link.hole, new $giper_baza_link('AA333333'), new Uint8Array([3])), 'Too low Tier');
            $mol_assert_equal((await $mol_wire_async(land2).diff_units()).length, 5);
            $mol_assert_equal((await $mol_wire_async(land2).diff_units(face)).length, 2);
            land1.give(auth2.pass(), $giper_baza_rank_post('just'));
            await $mol_wire_async(land2).units_steal(land1);
            land2.post(new $giper_baza_link('AA222222'), $giper_baza_link.hole, new $giper_baza_link('AA333333'), new Uint8Array([5]));
            $mol_assert_equal((await $mol_wire_async(land2).diff_units()).length, 9);
            $mol_assert_equal((await $mol_wire_async(land2).diff_units(face)).length, 6);
            land1.give(auth2.pass(), $giper_baza_rank_read);
            await $mol_wire_async(land2).units_steal(land1);
            $mol_assert_equal((await $mol_wire_async(land2).diff_units()).length, 7);
        },
        async 'Land encryption'($) {
            const land = $mol_wire_async($giper_baza_land.make({ $ }));
            $mol_assert_equal(await land.encrypted(), false);
            await land.encrypted(true);
            $mol_assert_equal(await land.encrypted(), true);
            const sand = await land.post($giper_baza_link.hole, $giper_baza_link.hole, null, new Uint8Array([1, 2, 3]));
            $mol_assert_equal((await land.sand_encode(sand)).data().length, 16);
            $mol_assert_equal(await land.sand_decode(sand), new Uint8Array([1, 2, 3]));
            $mol_assert_equal((await land.sand_ordered({ head: $giper_baza_link.hole, peer: $giper_baza_link.hole })).length, 1);
            await land.post($giper_baza_link.hole, $giper_baza_link.hole, sand.self(), null);
            $mol_assert_equal((await land.sand_ordered({ head: $giper_baza_link.hole, peer: $giper_baza_link.hole })).length, 1);
        },
        'Land fork & merge': $mol_wire_async(($) => {
            const home = $.$giper_baza_glob.home().land();
            const left = home.fork();
            home.Data($giper_baza_list_vary).items_vary(['foo', 'xxx']);
            $mol_assert_equal(home.Data($giper_baza_list_vary).items_vary(), ['foo', 'xxx']);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), ['foo', 'xxx']);
            left.faces.sync(home.faces);
            left.Data($giper_baza_list_vary).items_vary(['foo', 'yyy']);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), ['foo', 'yyy']);
            const right = home.fork();
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary(['foo', 'zzz']);
            $mol_assert_equal(right.Data($giper_baza_list_vary).items_vary(), ['foo', 'zzz']);
            const both = home.fork();
            $mol_assert_equal(both.Data($giper_baza_list_vary).items_vary(), ['foo', 'xxx']);
            both.Tine().items_vary([right.link()]);
            $mol_assert_equal(both.Data($giper_baza_list_vary).items_vary(), ['foo', 'zzz']);
            both.Tine().items_vary([left.link()]);
            $mol_assert_equal(both.Data($giper_baza_list_vary).items_vary(), ['foo', 'yyy']);
            both.Tine().items_vary([right.link(), left.link()]);
            $mol_assert_equal(both.Data($giper_baza_list_vary).items_vary(), ['foo', 'yyy']);
            both.Tine().items_vary([left.link(), right.link()]);
            $mol_assert_equal(both.Data($giper_baza_list_vary).items_vary(), ['foo', 'zzz']);
        }),
        'Inner Links are relative to forked Land': $mol_wire_async(($) => {
            const Alice = $.$giper_baza_glob.home().land();
            const Bella = Alice.fork();
            const alice_val = Alice.Pawn($giper_baza_atom_text).Head(new $giper_baza_link('qwertyui'));
            const bella_val = Bella.Pawn($giper_baza_atom_text).Head(new $giper_baza_link('qwertyui'));
            alice_val.val('Alice');
            bella_val.val('Bella');
            const alice_link = Alice.Pawn($giper_baza_atom_link).Head(new $giper_baza_link('asdfghjk'));
            const bella_link = Bella.Pawn($giper_baza_atom_link).Head(new $giper_baza_link('asdfghjk'));
            alice_link.val(alice_val.link());
            $mol_assert_equal(alice_link.val(), alice_val.link());
            $mol_assert_unique(alice_link.val(), bella_link.val());
            $mol_assert_equal(bella_link.val(), bella_val.link());
        }),
        async 'Land Area inherits rights'($) {
            const area = await $mol_wire_async(() => {
                const base = $.$giper_baza_glob.land_grab([[null, $giper_baza_rank_post('just')]]);
                base.units_saving();
                return base.area_make();
            })();
            $mol_assert_equal(area.pass_rank(area.auth().pass()), $giper_baza_rank_rule);
            $mol_assert_equal(area.lord_rank($giper_baza_link.hole), $giper_baza_rank_post('just'));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'gift unit type'() {
            const gift = $giper_baza_unit_gift.make();
            gift.rank($giper_baza_rank_rule);
            $mol_assert_equal(gift.kind(), 'gift');
            $mol_assert_equal(gift.rank(), $giper_baza_rank_rule);
        },
        'data unit type'() {
            const unit = $giper_baza_unit_sand.make(2);
            unit.ball(new Uint8Array([0xFF, 0xFF]));
            $mol_assert_equal(unit.kind(), 'sand');
            $mol_assert_equal(unit.size(), 2);
            $mol_assert_equal(unit.ball(), new Uint8Array([0xFF, 0xFF]));
        },
        'big data unit type'() {
            const unit = $giper_baza_unit_sand.make(1000);
            unit.ball(new Uint8Array(1000));
            $mol_assert_equal(unit.kind(), 'sand');
            $mol_assert_equal(unit.size(), 1000);
            $mol_assert_equal(unit.ball(), new Uint8Array(1000));
        },
        'gift unit fields'() {
            const unit = $giper_baza_unit_gift.make();
            $mol_assert_equal(unit.time(), 0);
            $mol_assert_equal(unit.mate(), $giper_baza_link.hole);
            unit.time_tick(0xd1d2d3d4d5d6);
            unit.mate(new $giper_baza_link('ÆPv6æfj3_9vX08ÆLx'));
            $mol_assert_equal(unit.time_tick(), 0xd1d2d3d4d5d6);
            $mol_assert_equal(unit.mate(), new $giper_baza_link('ÆPv6æfj3_9vX08ÆLx'));
        },
        'data unit fields'() {
            const unit = $giper_baza_unit_sand.make(0);
            $mol_assert_equal(unit.time(), 0);
            $mol_assert_equal(unit.head(), $giper_baza_link.hole);
            $mol_assert_equal(unit.self(), $giper_baza_link.hole);
            $mol_assert_equal(unit.lead(), $giper_baza_link.hole);
            unit.time_tick(0xd1d2d3d4d5d6);
            unit.head(new $giper_baza_link('ÆPv6æfj3'));
            unit.self(new $giper_baza_link('Pv6æfj39'));
            unit.lead(new $giper_baza_link('v6æfj39v'));
            $mol_assert_equal(unit.time_tick(), 0xd1d2d3d4d5d6);
            $mol_assert_equal(unit.head(), new $giper_baza_link('ÆPv6æfj3'));
            $mol_assert_equal(unit.self(), new $giper_baza_link('Pv6æfj39'));
            $mol_assert_equal(unit.lead(), new $giper_baza_link('v6æfj39v'));
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'put, get, drop, count records and clear store'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('letters'));
            const trans = db.change('letters');
            try {
                const { letters } = trans.stores;
                $mol_assert_like(await letters.get(1), undefined);
                $mol_assert_like(await letters.get(2), undefined);
                $mol_assert_like(await letters.count(), 0);
                await letters.put('a');
                await letters.put('b', 1);
                await letters.put('c', 2);
                $mol_assert_like(await letters.get(1), 'b');
                $mol_assert_like(await letters.get(2), 'c');
                $mol_assert_like(await letters.count(), 2);
                await letters.drop(1);
                $mol_assert_like(await letters.get(1), undefined);
                $mol_assert_like(await letters.count(), 1);
                await letters.clear();
                $mol_assert_like(await letters.count(), 0);
            }
            finally {
                trans.abort();
                db.kill();
            }
        },
        async 'select by query'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('letters'));
            const trans = db.change('letters');
            try {
                const { letters } = trans.stores;
                await letters.put('a');
                await letters.put('b');
                await letters.put('c');
                await letters.put('d');
                $mol_assert_like(await letters.select(), ['a', 'b', 'c', 'd']);
                $mol_assert_like(await letters.select(null, 2), ['a', 'b']);
                $mol_assert_like(await letters.select($mol_dom_context.IDBKeyRange.bound(2, 3)), ['b', 'c']);
            }
            finally {
                trans.abort();
                db.kill();
            }
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'take and drop db'() {
            const db = await $$.$mol_db('$mol_db_test');
            await db.kill();
        },
        async 'make and drop store in separate migrations'() {
            try {
                const db1 = await $$.$mol_db('$mol_db_test', mig => mig.store_make('temp'));
                db1.destructor();
                $mol_assert_like(db1.stores, ['temp']);
                $mol_assert_like(db1.version, 2);
                const db2 = await $$.$mol_db('$mol_db_test', mig => mig.store_make('temp'), mig => mig.store_drop('temp'));
                db2.destructor();
                $mol_assert_like(db2.stores, []);
                $mol_assert_like(db2.version, 3);
            }
            finally {
                const db0 = await $$.$mol_db('$mol_db_test');
                await db0.kill();
            }
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        async 'unique index'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('users'), mig => mig.stores.users.index_make('names', ['name'], true));
            const trans = db.change('users');
            try {
                const { users } = trans.stores;
                await users.put({ name: 'Jin' }, 'jin');
                await users.put({ name: 'John' }, 'john');
                await users.put({ name: 'Bin' }, 'bin');
                const { names } = users.indexes;
                $mol_assert_like(await names.get(['Jin']), { name: 'Jin' });
                $mol_assert_like(await names.get(['John']), { name: 'John' });
                $mol_assert_like(await names.count(), 3);
                $mol_assert_like(await names.select($mol_dom_context.IDBKeyRange.bound(['J'], ['J\uFFFF'])), [{ name: 'Jin' }, { name: 'John' }]);
                try {
                    await users.put({ name: 'Jin' }, 'jin2');
                    $mol_fail(new Error('Exception expected'));
                }
                catch (error) {
                    $mol_assert_unique(error.message, 'Exception expected');
                }
            }
            finally {
                trans.abort();
                await db.kill();
            }
        },
        async 'multi path index'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('users'), mig => mig.stores.users.index_make('names', ['first', 'last']));
            const trans = db.change('users');
            try {
                const { users } = trans.stores;
                await users.put({ first: 'Jin', last: 'Johnson' }, 'jin');
                await users.put({ first: 'John', last: 'Jinson' }, 'john');
                await users.put({ first: 'Bond', last: 'James' }, '007');
                const { names } = users.indexes;
                $mol_assert_like(await names.get(['Jin', 'Johnson']), { first: 'Jin', last: 'Johnson' });
                $mol_assert_like(await names.get(['John', 'Jinson']), { first: 'John', last: 'Jinson' });
                $mol_assert_like(await names.count(), 3);
                $mol_assert_like(await names.select($mol_dom_context.IDBKeyRange.bound(['Jin', 'Johnson'], ['John', 'Jinson'])), [{ first: 'Jin', last: 'Johnson' }, { first: 'John', last: 'Jinson' }]);
            }
            finally {
                trans.abort();
                await db.kill();
            }
        },
        async 'multiple indexes'() {
            const db = await $$.$mol_db('$mol_db_test', mig => mig.store_make('users'), mig => mig.stores.users.index_make('names', ['name'], true), mig => mig.stores.users.index_make('ages', ['age']));
            const trans = db.change('users');
            try {
                const { users } = trans.stores;
                await users.put({ name: 'Jin', age: 18 }, 'jin');
                await users.put({ name: 'John', age: 18 }, 'john');
                const { names, ages } = users.indexes;
                $mol_assert_like(await names.select(['Jin']), [{ name: 'Jin', age: 18 }]);
                $mol_assert_like(await names.select(['John']), [{ name: 'John', age: 18 }]);
                $mol_assert_like(await names.count(), 2);
                $mol_assert_like(await ages.select([18]), [{ name: 'Jin', age: 18 }, { name: 'John', age: 18 }]);
                $mol_assert_like(await ages.count(), 2);
            }
            finally {
                trans.abort();
                await db.kill();
            }
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $giper_baza_mine_mock extends $.$giper_baza_mine {
            units_save(diff) { }
            units_load() {
                return [];
            }
            ball_load(sand) {
                return null;
            }
        }
        $.$giper_baza_mine = $giper_baza_mine_mock;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'same list'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "old" }, "c"));
            $mol_reconcile({
                prev: [...list.children],
                from: 0,
                to: 3,
                next: 'abc',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                replace: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_equal(list.outerHTML, ($mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "old" }, "c"))).outerHTML);
        },
        'insert items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "old" }, "c"),
                $mol_jsx("p", { "data-rev": "old" }, "d"));
            $mol_reconcile({
                prev: [...list.children],
                from: 1,
                to: 3,
                next: 'bXYc',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                replace: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_equal(list.outerHTML, ($mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "b"),
                $mol_jsx("p", { "data-rev": "new" }, "X"),
                $mol_jsx("p", { "data-rev": "new" }, "Y"),
                $mol_jsx("p", { "data-rev": "old" }, "c"),
                $mol_jsx("p", { "data-rev": "old" }, "d"))).outerHTML);
        },
        'append items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"));
            $mol_reconcile({
                prev: [...list.children],
                from: 2,
                to: 3,
                next: 'bc',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                replace: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_equal(list.outerHTML, ($mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "new" }, "b"),
                $mol_jsx("p", { "data-rev": "new" }, "c"))).outerHTML);
        },
        'split item'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "bc"),
                $mol_jsx("p", { "data-rev": "old" }, "d"));
            $mol_reconcile({
                prev: [...list.children],
                from: 0,
                to: 3,
                next: 'abcd',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                replace: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_equal(list.outerHTML, ($mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "new" }, "b"),
                $mol_jsx("p", { "data-rev": "up" }, "c"),
                $mol_jsx("p", { "data-rev": "old" }, "d"))).outerHTML);
        },
        'drop items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "A"),
                $mol_jsx("p", { "data-rev": "old" }, "B"),
                $mol_jsx("p", { "data-rev": "old" }, "x"),
                $mol_jsx("p", { "data-rev": "old" }, "y"),
                $mol_jsx("p", { "data-rev": "old" }, "C"),
                $mol_jsx("p", { "data-rev": "old" }, "D"));
            $mol_reconcile({
                prev: [...list.children],
                from: 1,
                to: 5,
                next: 'BC',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                replace: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_equal(list.outerHTML, ($mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "A"),
                $mol_jsx("p", { "data-rev": "old" }, "B"),
                $mol_jsx("p", { "data-rev": "old" }, "C"),
                $mol_jsx("p", { "data-rev": "old" }, "D"))).outerHTML);
        },
        'update items'() {
            const list = $mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "old" }, "B"),
                $mol_jsx("p", { "data-rev": "old" }, "C"),
                $mol_jsx("p", { "data-rev": "old" }, "d"));
            $mol_reconcile({
                prev: [...list.children],
                from: 1,
                to: 3,
                next: 'XY',
                equal: (next, prev) => prev.textContent === next,
                drop: (prev, lead) => list.removeChild(prev),
                insert: (next, lead) => list.insertBefore($mol_jsx("p", { "data-rev": "new" }, next), lead ? lead.nextSibling : list.firstChild),
                replace: (next, prev, lead) => {
                    prev.textContent = next;
                    prev.setAttribute('data-rev', 'up');
                    return prev;
                },
            });
            $mol_assert_equal(list.outerHTML, ($mol_jsx("body", null,
                $mol_jsx("p", { "data-rev": "old" }, "a"),
                $mol_jsx("p", { "data-rev": "up" }, "X"),
                $mol_jsx("p", { "data-rev": "up" }, "Y"),
                $mol_jsx("p", { "data-rev": "old" }, "d"))).outerHTML);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    function clone(base) {
        const land = $mol_wire_sync(base.$.$giper_baza_land).make({ $: base.$ });
        land.units_steal(base);
        return land;
    }
    function sync(left, right) {
        left.units_steal(right);
        right.units_steal(left);
    }
    $mol_test({
        'Basic list ops'($) {
            const land = $.$giper_baza_land.make({ $ });
            const list = land.Pawn($giper_baza_list_vary).Data();
            $mol_assert_equal(list.items_vary(), []);
            list.items_vary([2, 3]);
            $mol_assert_equal(list.items_vary(), [2, 3]);
            $mol_assert_equal(list.has(1), false);
            list.add(1);
            $mol_assert_equal(list.items_vary(), [1, 2, 3]);
            $mol_assert_equal(list.has(1), true);
            list.add(3);
            $mol_assert_equal(list.items_vary(), [1, 2, 3]);
            list.splice([2]);
            $mol_assert_equal(list.items_vary(), [1, 2, 3, 2]);
            list.splice([2], 0);
            $mol_assert_equal(list.items_vary(), [2, 1, 2, 3, 2]);
            list.wipe(2);
            $mol_assert_equal(list.items_vary(), [2, 1, 3, 2]);
            list.move(2, 1);
            $mol_assert_equal(list.items_vary(), [2, 3, 1, 2]);
            list.move(1, 3);
            $mol_assert_equal(list.items_vary(), [2, 1, 3, 2]);
            list.cut(2);
            $mol_assert_equal(list.items_vary(), [1, 3]);
            $mol_assert_equal(list.has(2), false);
            list.cut(2);
            $mol_assert_equal(list.items_vary(), [1, 3]);
        },
        'Different types'($) {
            const land = $.$giper_baza_land.make({ $ });
            const list = land.Pawn($.$giper_baza_list_vary).Data();
            list.items_vary([
                null,
                false,
                true,
                0n,
                4611686018427387904n,
                0,
                Math.PI,
                Number.NaN,
                Number.NEGATIVE_INFINITY,
                '',
                '1234567890123456789012345678901234567890',
                new Uint8Array([]),
                new Uint8Array([1, 2, 3]),
                new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
                list.link(),
            ]);
            $mol_assert_equal(list.items_vary(), [
                false,
                true,
                0,
                4611686018427387904n,
                0,
                Math.PI,
                Number.NaN,
                Number.NEGATIVE_INFINITY,
                '',
                '1234567890123456789012345678901234567890',
                new Uint8Array([]),
                new Uint8Array([1, 2, 3]),
                new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
                list.link(),
            ]);
        },
        async 'List merge'($) {
            const land1 = $.$giper_baza_land.make({ $ });
            const land2 = $.$giper_baza_land.make({ $ });
            const list1 = land1.Pawn($giper_baza_list_vary).Data();
            const list2 = land2.Pawn($giper_baza_list_vary).Data();
            list1.items_vary(['foo', 'xxx']);
            land2.faces.tick();
            list2.items_vary(['foo', 'yyy']);
            await $mol_wire_async(land1).units_steal(land2);
            $mol_assert_equal(list1.items_vary(), ['foo', 'yyy', 'foo', 'xxx']);
        },
        'Insert before removed before changed'($) {
            const land = $.$giper_baza_land.make({ $ });
            const list = land.Pawn($giper_baza_list_vary).Data();
            list.items_vary(['foo', 'bar']);
            list.items_vary(['xxx', 'foo', 'bar']);
            list.items_vary(['xxx', 'bars']);
            $mol_assert_equal(list.items_vary(), ['xxx', 'bars']);
        },
        'Many moves'($) {
            const land = $.$giper_baza_land.make({ $ });
            const list = land.Pawn($giper_baza_list_vary).Data();
            list.items_vary(['foo', 'bar', 'lol']);
            list.move(2, 1);
            list.move(2, 1);
            list.move(0, 3);
            list.move(2, 1);
            $mol_assert_equal(list.items_vary(), ['bar', 'foo', 'lol']);
        },
        'Reorder separated sublists'($) {
            const land = $.$giper_baza_land.make({ $ });
            const list = land.Pawn($giper_baza_list_vary).Data();
            list.items_vary([1, 2, 3, 4, 5, 6]);
            list.move(3, 5);
            list.move(3, 5);
            list.move(5, 4);
            list.move(0, 2);
            list.move(0, 2);
            list.move(2, 1);
            $mol_assert_equal(list.items_vary(), [1, 3, 2, 4, 6, 5]);
        },
        'Insert after moved right': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 7, 2, 3, 4]);
            const right = clone(base);
            right.Data($giper_baza_list_vary).move(0, 2);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [2, 1, 7, 3, 4]);
        }),
        'Insert before moved left': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).move(1, 0);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 7, 2, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [2, 1, 7, 3, 4]);
        }),
        'Move left after inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 7, 2, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).move(1, 0);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [2, 1, 3, 7, 4]);
        }),
        'Insert before moved right': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).move(1, 4);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 7, 2, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 7, 3, 4, 2]);
        }),
        'Move right after inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 7, 2, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).move(1, 4);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 3, 7, 4, 2]);
        }),
        'Insert after wiped': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 7, 3, 4]);
        }),
        'Wiped before inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 7, 3, 4]);
        }),
        'Insert before wiped': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).wipe(2);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 2, 7, 4]);
        }),
        'Wiped after inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).wipe(2);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 2, 7, 4]);
        }),
        'Insert after moved out': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.sand_move(left.Data($giper_baza_list_vary).units()[1], new $giper_baza_link('11111111'), 0);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 7, 3, 4]);
            $mol_assert_equal(left.Pawn($giper_baza_list_vary).Head(new $giper_baza_link('11111111')).items_vary(), right.Pawn($giper_baza_list_vary).Head(new $giper_baza_link('11111111')).items_vary(), [2]);
        }),
        'Move out before inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.sand_move(right.Data($giper_baza_list_vary).units()[1], new $giper_baza_link('11111111'), 0);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 7, 3, 4]);
            $mol_assert_equal(left.Pawn($giper_baza_list_vary).Head(new $giper_baza_link('11111111')).items_vary(), right.Pawn($giper_baza_list_vary).Head(new $giper_baza_link('11111111')).items_vary(), [2]);
        }),
        'Insert before changed': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 2, 7, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 2, 13, 3, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 2, 13, 7, 4]);
        }),
        'Change after inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 2, 13, 3, 4]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 2, 7, 4]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 2, 7, 13, 4]);
        }),
        'Insert between moved': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4, 5, 6]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).move(1, 5);
            left.Data($giper_baza_list_vary).move(1, 5);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4, 5, 6]);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 4, 5, 2, 7, 3, 6]);
        }),
        'Move near inserted': $mol_wire_async(($) => {
            const base = $mol_wire_sync($.$giper_baza_land).make({ $ });
            base.Data($giper_baza_list_vary).items_vary([1, 2, 3, 4, 5, 6]);
            const left = clone(base);
            left.Data($giper_baza_list_vary).items_vary([1, 2, 7, 3, 4, 5, 6]);
            const right = clone(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_list_vary).move(1, 5);
            right.Data($giper_baza_list_vary).move(1, 5);
            sync(left, right);
            $mol_assert_equal(left.Data($giper_baza_list_vary).items_vary(), right.Data($giper_baza_list_vary).items_vary(), [1, 4, 5, 2, 3, 7, 6]);
        }),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            async 'Dictionary invariants'($) {
                const land = $giper_baza_land.make({ $ });
                const dict = land.Pawn($giper_baza_dict).Data();
                $mol_assert_equal(dict.keys(), []);
                dict.dive(123, $giper_baza_atom_vary, null);
                dict.dive('xxx', $giper_baza_atom_vary, null);
                $mol_assert_equal(dict.keys(), ['xxx', 123]);
                $mol_assert_equal(dict.has(123), true);
                $mol_assert_equal(dict.has('xxx'), true);
                $mol_assert_equal(dict.has('yyy'), false);
                $mol_assert_equal(dict.dive(123, $giper_baza_atom_vary).vary(), null);
                $mol_assert_equal(dict.dive('xxx', $giper_baza_atom_vary).vary(), null);
                dict.dive(123, $giper_baza_atom_vary).vary(777);
                $mol_assert_equal(dict.dive(123, $giper_baza_atom_vary).vary(), 777);
                dict.dive('xxx', $giper_baza_list_vary).items_vary(['foo', 'bar']);
                $mol_assert_equal(dict.dive('xxx', $giper_baza_list_vary).items_vary(), ['foo', 'bar']);
                dict.has(123, false);
                $mol_assert_equal(dict.keys(), ['xxx']);
            },
            async 'Dictionary merge'($) {
                const land1 = $giper_baza_land.make({ $ });
                const land2 = $giper_baza_land.make({ $ });
                const dict1 = land1.Pawn($giper_baza_dict).Data();
                const dict2 = land2.Pawn($giper_baza_dict).Data();
                dict1.dive(123, $giper_baza_atom_vary, null).vary(666);
                land2.faces.tick();
                dict2.dive(123, $giper_baza_atom_vary, null).vary(777);
                await $mol_wire_async(land1).units_steal(land2);
                $mol_assert_equal(dict1.dive(123, $giper_baza_atom_vary).vary(), 777);
                dict1.dive('xxx', $giper_baza_list_vary, null).items_vary(['foo']);
                land2.faces.tick();
                dict2.dive('xxx', $giper_baza_list_vary, null).items_vary(['bar']);
                await $mol_wire_async(land1).units_steal(land2);
                $mol_assert_equal(dict1.dive('xxx', $giper_baza_list_vary).items_vary(), ['bar', 'foo']);
            },
            async "Narrowed Dictionary with linked Dictionaries and others"($) {
                class User extends $giper_baza_dict.with({
                    Title: $giper_baza_atom_text,
                    Account: $giper_baza_atom_link_to(() => Account),
                    Articles: $giper_baza_list_link_to(() => Article),
                }) {
                }
                class Account extends $giper_baza_dict.with({
                    Title: $giper_baza_atom_text,
                    User: $giper_baza_atom_link_to(() => User),
                }) {
                }
                class Article extends $giper_baza_dict.with({
                    Title: $giper_baza_dict_to($giper_baza_atom_text),
                    Author: $giper_baza_atom_link_to(() => User),
                }) {
                }
                const land = $.$giper_baza_glob.home().land();
                const user = land.Pawn(User).Head(new $giper_baza_link('11111111'));
                $mol_assert_equal(user.Title()?.val() ?? null, null);
                $mol_assert_equal(user.Account()?.remote() ?? null, null);
                $mol_assert_equal(user.Articles()?.remote_list() ?? [], []);
                user.Title(null).val('Jin');
                $mol_assert_equal(user.Title().val() ?? '', 'Jin');
                const account = (await $mol_wire_async(user.Account(null)).ensure([[null, $giper_baza_rank_read]]));
                $mol_assert_equal(user.Account()?.remote() ?? null, account);
                $mol_assert_equal(account.User()?.remote() ?? null, null);
                account.User(null).remote(user);
                $mol_assert_equal(account.User()?.remote(), user);
                const articles = [
                    await $mol_wire_async(user.Articles(null)).make([[null, $giper_baza_rank_read]]),
                    await $mol_wire_async(user.Articles(null)).make([[null, $giper_baza_rank_read]]),
                ];
                $mol_assert_equal(user.Articles()?.remote_list().map(n => n[Symbol.toStringTag]), articles.map(n => n[Symbol.toStringTag]));
                articles[0].Title(null).key('en', 'auto').val('Hello!');
                $mol_assert_equal(articles[0].Title()?.key('en').val(), 'Hello!');
                $mol_assert_equal(articles[1].Title()?.key('ru')?.val() ?? null, null);
                $mol_assert_equal(articles[1].Title()?.key('ru')?.val() ?? null, null);
                $mol_assert_unique(user.land(), account.land(), ...articles.map(article => article.land()));
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is string'() {
            $mol_data_string('');
        },
        'Is not string'() {
            $mol_assert_fail(() => {
                $mol_data_string(0);
            }, '0 is not a string');
        },
        'Is object string'() {
            $mol_assert_fail(() => {
                $mol_data_string(new String('x'));
            }, 'x is not a string');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_pattern(pattern) {
        return $mol_data_setup((val) => {
            const val2 = $mol_data_string(val);
            if (pattern.test(val2))
                return val2;
            return $mol_fail(new $mol_data_error(`${val} is not a ${pattern}`));
        }, pattern);
    }
    $.$mol_data_pattern = $mol_data_pattern;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is fit'() {
            $mol_data_pattern(/^-$/)('-');
        },
        'Is not fit'() {
            $mol_assert_fail(() => {
                $mol_data_pattern(/^-$/)('+');
            }, '+ is not a /^-$/');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_email = $mol_data_pattern(/.+@.+/);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is email'() {
            $mol_data_email('foo@bar');
        },
        'Has not host'() {
            $mol_assert_fail(() => {
                $mol_data_email('foo@');
            }, 'foo@ is not a /.+@.+/');
        },
        'Has not name'() {
            $mol_assert_fail(() => {
                $mol_data_email('@bar');
            }, '@bar is not a /.+@.+/');
        },
        'Has not @'() {
            $mol_assert_fail(() => {
                $mol_data_email('foo.bar');
            }, 'foo.bar is not a /.+@.+/');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            "Empty representation"($) {
                const land = $giper_baza_land.make({ $ });
                const reg = land.Pawn($giper_baza_atom_time).Data();
                $mol_assert_equal(reg.val(), null);
                reg.vary(null);
                $mol_assert_equal(reg.val(), null);
            },
            "Narrow registers"($) {
                const land = $.$giper_baza_glob.home().land();
                const bin = land.Pawn($giper_baza_atom_blob).Head(new $giper_baza_link('11111111'));
                $mol_assert_equal(bin.val(), null);
                bin.val(new Uint8Array([1, 2, 3]));
                $mol_assert_equal(bin.val(), new Uint8Array([1, 2, 3]));
                const str = land.Pawn($giper_baza_atom_text).Head(new $giper_baza_link('22222222'));
                $mol_assert_equal(str.val(), null);
                str.val('foo');
                $mol_assert_equal(str.val(), 'foo');
            },
            "Store custom types"($) {
                class Email extends $giper_baza_atom($mol_data_email) {
                }
                const land = $giper_baza_land.make({ $ });
                const reg = land.Pawn(Email).Data();
                $mol_assert_equal(reg.val(), null);
                reg.val('foo@exaple.org');
                $mol_assert_equal(reg.val(), 'foo@exaple.org');
                $mol_assert_fail(() => reg.val('xxx'), 'xxx is not a /.+@.+/');
                $mol_assert_equal(reg.val(), 'foo@exaple.org');
                reg.vary('xxx');
                $mol_assert_equal(reg.val(), null);
            },
            "Hyper link to another land"($) {
                const land = $.$giper_baza_glob.home().land();
                const reg = land.Pawn($giper_baza_atom_link_to(() => $giper_baza_atom_vary)).Head(new $giper_baza_link('11111111'));
                const remote = reg.ensure(land);
                $mol_assert_unique(reg.land(), remote.land());
                $mol_assert_equal(reg.vary(), remote.link());
                $mol_assert_equal(reg.remote(), remote);
            },
            "Register with linked Pawns"($) {
                const land = $.$giper_baza_glob.home().land();
                const str = land.Pawn($giper_baza_atom_text).Head(new $giper_baza_link('11111111'));
                const link = land.Pawn($giper_baza_atom_link_to(() => $giper_baza_atom_text)).Head(new $giper_baza_link('11111111'));
                $mol_assert_equal(link.remote(), null);
                link.remote(str);
                $mol_assert_equal(link.vary(), link.remote().link(), str.link());
            },
            "Enumerated reg type"($) {
                class FileType extends $giper_baza_atom_enum(['file', 'dir', 'link']) {
                }
                const land = $.$giper_baza_glob.home().land();
                const type = land.Data(FileType);
                $mol_assert_equal(type.val(), null);
                type.val('file');
                $mol_assert_equal(type.val(), 'file');
                $mol_assert_fail(() => type.val('drive'), 'Wrong value (drive)');
                $mol_assert_equal(type.val(), 'file');
                type.vary('drive');
                $mol_assert_equal(type.val(), null);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $giper_baza_glob_mock extends $.$giper_baza_glob {
            static $ = $;
            static lands_touched = new $mol_wire_set();
        }
        $.$giper_baza_glob = $giper_baza_glob_mock;
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $giper_baza_yard_mock extends $.$giper_baza_yard {
            master() {
                return null;
            }
        }
        $.$giper_baza_yard = $giper_baza_yard_mock;
    });
    $giper_baza_yard.masters = () => {
        $giper_baza_glob.Seed();
        return ['http://localhost:9090/'];
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        '$mol_syntax2_md_flow'() {
            const check = (input, right) => {
                const tokens = [];
                $mol_syntax2_md_flow.tokenize(input, (...token) => tokens.push(token));
                $mol_assert_equal(tokens, right);
            };
            check('Hello,\nWorld..\r\n\r\n\nof Love!', [
                ['block', 'Hello,\n', ['Hello,', '\n'], 0],
                ['block', 'World..\r\n\r\n\n', ['World..', '\r\n\r\n\n'], 7],
                ['block', 'of Love!', ['of Love!', ''], 19],
            ]);
            check('# Header1\n\nHello!\n\n## Header2', [
                ['header', '# Header1\n\n', ['#', ' ', 'Header1', '\n\n'], 0],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 11],
                ['header', '## Header2', ['##', ' ', 'Header2', ''], 19],
            ]);
            check('```\nstart()\n```\n\n```jam.js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```', [
                ['code', '```\nstart()\n```\n\n', ['```', '', 'start()\n', '```', '\n\n'], 0],
                ['code', '```jam.js\nrestart()\n```\n\n', ['```', 'jam.js', 'restart()\n', '```', '\n\n'], 17],
                ['block', 'Hello!\n\n', ['Hello!', '\n\n'], 42],
                ['code', '```\nstop()\n```', ['```', '', 'stop()\n', '```', ''], 50],
            ]);
            check('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n', [
                ['table', '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n', ['| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n', '\n'], 0],
                ['table', '| Cell11 | Cell12\n| Cell21 | Cell22\n', ['| Cell11 | Cell12\n| Cell21 | Cell22\n', ''], 68],
            ]);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'empty string'() {
            $mol_assert_equal(''.match($giper_baza_text_tokens), null);
        },
        'new lines'() {
            $mol_assert_equal('\n\r\n'.match($giper_baza_text_tokens), ['\n', '\r\n']);
        },
        'numbers'() {
            $mol_assert_equal('123'.match($giper_baza_text_tokens), ['123']);
        },
        'emoji'() {
            $mol_assert_equal('😀😁'.match($giper_baza_text_tokens), ['😀', '😁']);
        },
        'emoji with modifier'() {
            $mol_assert_equal('👩🏿👩🏿'.match($giper_baza_text_tokens), ['👩🏿', '👩🏿']);
        },
        'combo emoji with modifier'() {
            $mol_assert_equal('👩🏿‍🤝‍🧑🏿👩🏿‍🤝‍🧑🏿'.match($giper_baza_text_tokens), ['👩🏿‍🤝‍🧑🏿', '👩🏿‍🤝‍🧑🏿']);
        },
        'word with spaces'() {
            $mol_assert_equal('foo1  bar2'.match($giper_baza_text_tokens), ['foo1', ' ', ' bar2']);
        },
        'word with diactric'() {
            $mol_assert_equal('Е́е́'.match($giper_baza_text_tokens), ['Е́е́']);
        },
        'word with punctuation'() {
            $mol_assert_equal('foo--bar'.match($giper_baza_text_tokens), ['foo', '--', 'bar']);
        },
        'CamelCase'() {
            $mol_assert_equal('Foo1BAR2'.match($giper_baza_text_tokens), ['Foo1', 'BAR2']);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Change sequences'($) {
            const land = $giper_baza_land.make({ $ });
            const text = land.Data($giper_baza_text);
            const list = land.Data($giper_baza_list_vary);
            $mol_assert_equal(text.str(), '');
            $mol_assert_equal(list.items_vary(), []);
            text.str('foo');
            $mol_assert_equal(text.str(), 'foo');
            $mol_assert_equal(list.items_vary(), ['foo']);
            text.str('foo bar');
            $mol_assert_equal(text.str(), 'foo bar');
            $mol_assert_equal(list.items_vary(), ['foo', ' bar']);
            text.str('foo lol bar');
            $mol_assert_equal(text.str(), 'foo lol bar');
            $mol_assert_equal(list.items_vary(), ['foo', ' lol', ' bar']);
            text.str('lol bar');
            $mol_assert_equal(text.str(), 'lol bar');
            $mol_assert_equal(list.items_vary(), ['lol', ' bar']);
            text.str('foo bar');
            $mol_assert_equal(text.str(), 'foo bar');
            $mol_assert_equal(list.items_vary(), ['foo', ' bar']);
            text.str('foo  bar');
            $mol_assert_equal(text.str(), 'foo  bar');
            $mol_assert_equal(list.items_vary(), ['foo', ' ', ' bar']);
            text.str('foo  BarBar');
            $mol_assert_equal(text.str(), 'foo  BarBar');
            $mol_assert_equal(list.items_vary(), ['foo', ' ', ' Bar', 'Bar']);
        },
        async 'str: Offset <=> Point'($) {
            const land = $giper_baza_land.make({ $ });
            const text = land.Data($giper_baza_text);
            text.str('fooBar');
            const [first, second] = text.units();
            $mol_assert_equal(text.point_by_offset(0), [first.self(), 0]);
            $mol_assert_equal(text.offset_by_point([first.self(), 0]), [first.self(), 0]);
            $mol_assert_equal(text.point_by_offset(3), [first.self(), 3]);
            $mol_assert_equal(text.offset_by_point([first.self(), 3]), [first.self(), 3]);
            $mol_assert_equal(text.offset_by_point([first.self(), 5]), [first.self(), 5]);
            $mol_assert_equal(text.point_by_offset(5), [second.self(), 2]);
            $mol_assert_equal(text.offset_by_point([second.self(), 2]), [second.self(), 5]);
            $mol_assert_equal(text.point_by_offset(6), [second.self(), 3]);
            $mol_assert_equal(text.offset_by_point([second.self(), 3]), [second.self(), 6]);
            $mol_assert_equal(text.point_by_offset(7), [$giper_baza_link.hole, 1]);
            $mol_assert_equal(text.offset_by_point([$giper_baza_link.hole, 1]), [$giper_baza_link.hole, 7]);
        },
        async 'text: Offset <=> Point'($) {
            const land = $giper_baza_land.make({ $ });
            const text = land.Data($giper_baza_text);
            text.text('foo bar\n666 777');
            const [first, second] = text.pawns($giper_baza_text);
            $mol_assert_equal(text.point_by_offset(0), [first.units()[0].self(), 0]);
            $mol_assert_equal(text.offset_by_point([first.units()[0].self(), 0]), [first.units()[0].self(), 0]);
            $mol_assert_equal(text.point_by_offset(8), [first.units()[2].self(), 1]);
            $mol_assert_equal(text.offset_by_point([first.units()[2].self(), 1]), [first.units()[2].self(), 8]);
        },
        async 'Merge different sequences'($) {
            const land1 = $giper_baza_land.make({ $ });
            const land2 = $giper_baza_land.make({ $ });
            const text1 = land1.Pawn($giper_baza_text).Data();
            const text2 = land2.Pawn($giper_baza_text).Data();
            text1.str('foo bar.');
            land2.faces.stat.time = land1.faces.stat.time;
            text2.str('xxx yyy.');
            const delta1 = await $mol_wire_async(land1).diff_units();
            const delta2 = await $mol_wire_async(land2).diff_units();
            await $mol_wire_async(land1).diff_apply(delta2);
            await $mol_wire_async(land2).diff_apply(delta1);
            $mol_assert_equal(text1.str(), text2.str(), 'xxx yyy.foo bar.');
        },
        async 'Merge same insertions with different changes to same place'($) {
            const base = $giper_baza_land.make({ $ });
            base.Data($giper_baza_text).str('( )');
            const left = $giper_baza_land.make({ $ });
            await $mol_wire_async(left).units_steal(base);
            left.Data($giper_baza_text).str('( [ f ] )');
            left.Data($giper_baza_text).str('( [ foo ] )');
            const right = $giper_baza_land.make({ $ });
            await $mol_wire_async(right).units_steal(base);
            right.faces.sync(left.faces);
            right.Data($giper_baza_text).str('( [ f ] )');
            right.Data($giper_baza_text).str('( [ fu ] )');
            const left_delta = await $mol_wire_async(left).diff_units(base.faces);
            const right_delta = await $mol_wire_async(right).diff_units(base.faces);
            await $mol_wire_async(left).diff_apply(right_delta);
            await $mol_wire_async(right).diff_apply(left_delta);
            $mol_assert_equal(left.Data($giper_baza_text).str(), right.Data($giper_baza_text).str(), '( [ fu ] [ foo ] )');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Special'() {
            $mol_assert_equal($mol_si_short(0), '0');
            $mol_assert_equal($mol_si_short(1 / 0), '∞');
            $mol_assert_equal($mol_si_short(-1 / 0), '-∞');
            $mol_assert_equal($mol_si_short(0 / 0), '∅');
        },
        'M'() {
            $mol_assert_equal($mol_si_short(0), '0');
            $mol_assert_equal($mol_si_short(0.999500), '1.00');
            $mol_assert_equal($mol_si_short(-0.999600), '-1.00');
            $mol_assert_equal($mol_si_short(999.4), '999');
            $mol_assert_equal($mol_si_short(-999.4), '-999');
        },
        'L'() {
            $mol_assert_equal($mol_si_short(999.5), '1.00k');
            $mol_assert_equal($mol_si_short(-999.5), '-1.00k');
            $mol_assert_equal($mol_si_short(999_400), '999k');
            $mol_assert_equal($mol_si_short(-999_400), '-999k');
        },
        'XL'() {
            $mol_assert_equal($mol_si_short(999_500), '1.00M');
            $mol_assert_equal($mol_si_short(-999_600), '-1.00M');
            $mol_assert_equal($mol_si_short(999_400_000), '999M');
            $mol_assert_equal($mol_si_short(-999_400_000), '-999M');
        },
        'S'() {
            $mol_assert_equal($mol_si_short(0.999400), '999m');
            $mol_assert_equal($mol_si_short(-0.999400), '-999m');
            $mol_assert_equal($mol_si_short(0.000_999_500), '1.00m');
            $mol_assert_equal($mol_si_short(-0.000_999_500), '-1.00m');
        },
        'XS'() {
            $mol_assert_equal($mol_si_short(0.000_999_400), '999µ');
            $mol_assert_equal($mol_si_short(-0.000_999_400), '-999µ');
            $mol_assert_equal($mol_si_short(0.000_000_999_600), '1.00µ');
            $mol_assert_equal($mol_si_short(-0.000_000_999_600), '-1.00µ');
        },
        'With unit'() {
            $mol_assert_equal($mol_si_short(0, 's'), '0 s');
            $mol_assert_equal($mol_si_short(1 / 0, 's'), '∞ s');
            $mol_assert_equal($mol_si_short(0 / 0, 's'), '∅ s');
            $mol_assert_equal($mol_si_short(123, 'Hz'), '123 Hz');
            $mol_assert_equal($mol_si_short(1234, 'g'), '1.23 kg');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'simple sort'() {
            const list = ['abc', 'ac', 'ab'];
            list.sort($mol_compare_text());
            $mol_assert_equal(`${list}`, 'ab,abc,ac');
        },
        'sort ignoring spaces around'() {
            const list = [' a', '\tb', ' b'];
            list.sort($mol_compare_text());
            $mol_assert_equal(`${list}`, ' a,\tb, b');
        },
        'sort ignoring letter case'() {
            const list = ['A', 'B', 'a'];
            list.sort($mol_compare_text());
            $mol_assert_equal(`${list}`, 'A,a,B');
        },
        'sort with custom serializer'() {
            const list = ['abc', 'ab', 'ac'];
            list.sort($mol_compare_text(str => str.split('').reverse().join('')));
            $mol_assert_equal(`${list}`, 'ab,ac,abc');
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Vector limiting'() {
            let point = new $mol_vector_3d(7, 10, 13);
            const res = point.limited([[1, 5], [15, 20], [5, 10]]);
            $mol_assert_equal(res.x, 5);
            $mol_assert_equal(res.y, 15);
            $mol_assert_equal(res.z, 10);
        },
        'Vector adding scalar'() {
            let point = new $mol_vector_3d(1, 2, 3);
            let res = point.added0(5);
            $mol_assert_equal(res.x, 6);
            $mol_assert_equal(res.y, 7);
            $mol_assert_equal(res.z, 8);
        },
        'Vector adding vector'() {
            let point = new $mol_vector_3d(1, 2, 3);
            let res = point.added1([5, 10, 15]);
            $mol_assert_equal(res.x, 6);
            $mol_assert_equal(res.y, 12);
            $mol_assert_equal(res.z, 18);
        },
        'Vector multiplying scalar'() {
            let point = new $mol_vector_3d(2, 3, 4);
            let res = point.multed0(-1);
            $mol_assert_equal(res.x, -2);
            $mol_assert_equal(res.y, -3);
            $mol_assert_equal(res.z, -4);
        },
        'Vector multiplying vector'() {
            let point = new $mol_vector_3d(2, 3, 4);
            let res = point.multed1([5, 2, -2]);
            $mol_assert_equal(res.x, 10);
            $mol_assert_equal(res.y, 6);
            $mol_assert_equal(res.z, -8);
        },
        'Matrix adding matrix'() {
            let matrix = new $mol_vector_matrix(...[[1, 2], [3, 4], [5, 6]]);
            let res = matrix.added2([[10, 20], [30, 40], [50, 60]]);
            $mol_assert_equal(res[0][0], 11);
            $mol_assert_equal(res[0][1], 22);
            $mol_assert_equal(res[1][0], 33);
            $mol_assert_equal(res[1][1], 44);
            $mol_assert_equal(res[2][0], 55);
            $mol_assert_equal(res[2][1], 66);
        },
        'Matrix multiplying matrix'() {
            let matrix = new $mol_vector_matrix(...[[2, 3], [4, 5], [6, 7]]);
            let res = matrix.multed2([[2, 3], [4, 5], [6, 7]]);
            $mol_assert_equal(res[0][0], 4);
            $mol_assert_equal(res[0][1], 9);
            $mol_assert_equal(res[1][0], 16);
            $mol_assert_equal(res[1][1], 25);
            $mol_assert_equal(res[2][0], 36);
            $mol_assert_equal(res[2][1], 49);
        },
        'Range expanding'() {
            let range = $mol_vector_range_full.inversed;
            const expanded = range.expanded0(10).expanded0(5);
            $mol_assert_like([...expanded], [5, 10]);
        },
        'Vector of range expanding by vector'() {
            let dimensions = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const expanded = dimensions.expanded1([1, 7]).expanded1([3, 5]);
            $mol_assert_like([...expanded.x], [1, 3]);
            $mol_assert_like([...expanded.y], [5, 7]);
        },
        'Vector of range expanding by vector of range'() {
            let dimensions = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const expanded = dimensions
                .expanded2([[1, 3], [7, 9]])
                .expanded2([[2, 4], [6, 8]]);
            $mol_assert_like([...expanded.x], [1, 4]);
            $mol_assert_like([...expanded.y], [6, 9]);
        },
        'Vector of infinity range expanding by vector of range'() {
            let dimensions = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const next = new $mol_vector_2d($mol_vector_range_full.inversed, $mol_vector_range_full.inversed);
            const expanded = next
                .expanded2(dimensions);
            $mol_assert_like([...expanded.x], [Infinity, -Infinity]);
            $mol_assert_like([...expanded.y], [Infinity, -Infinity]);
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_test({
        'null by default'() {
            const key = String(Math.random());
            $mol_assert_equal($mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $mol_state_session.value(key, '$mol_state_session_test');
            $mol_assert_equal($mol_state_session.value(key), '$mol_state_session_test');
            $mol_state_session.value(key, null);
            $mol_assert_equal($mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));


//# sourceMappingURL=web.test.js.map
