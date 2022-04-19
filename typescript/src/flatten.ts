import * as assert from "assert";

/**
 * Please complete this function which takes a deeply nested object, `source`, and returns
 * an object with dot - separated paths pointing to all primitive values from`source`.
 *
 * Examples:
 *
 * flatten({ foo: { bar: 1 } })
 *     //=> { 'foo.bar': 1 }
 *
 * flatten({ foo: [{ bar: 1 }, { bar: 2 }] })
 *     //=> { 'foo.0.bar': 1, 'foo.1.bar': 2 }
 *
 * - Please talk us through the problem.
 * - Ask for help if you need it.
 * - Use any references you would normally use.
 *
 */


export function flatten(source: unknown) {
    const result = {} as Record<string, unknown>

    function recursiveFlatten(source: unknown, pathPrefix = '') {
        enum TYPES  {
            ARRAY='array',
            OBJECT='object',
            OTHER= 'other'
        }
        const actions = {
            [TYPES.ARRAY]: () => (source as Array<unknown>).forEach((arrValue, index) => recursiveFlatten(arrValue, `${pathPrefix}.${index}`)),
            [TYPES.OBJECT]: () => Object.entries(source as Record<string, unknown>).forEach(([key, value]) => recursiveFlatten(value, `${pathPrefix}${pathPrefix !== '' ? '.' : ''}${key}`)),
            [TYPES.OTHER]: (): void => { result[pathPrefix] = source; }
        }
        const getType = ()=> Array.isArray(source) ? TYPES.ARRAY : (typeof source === 'object' && source !== null) ? TYPES.OBJECT : TYPES.OTHER
        actions[getType()]()
    }

    recursiveFlatten(source)
    return result
}


const source = {
    a: 1,
    b: {
        c: true,
        d: {
            e: 'foo',
        },
    },
    f: false,
    g: ['red', 'green', 'blue'],
    h: [
        {
            i: 2,
            j: 3,
        },
    ],
};

const expected = {
    a: 1,
    'b.c': true,
    'b.d.e': 'foo',
    f: false,
    'g.0': 'red',
    'g.1': 'green',
    'g.2': 'blue',
    'h.0.i': 2,
    'h.0.j': 3,
};

assert.deepEqual(flatten(source), expected)
