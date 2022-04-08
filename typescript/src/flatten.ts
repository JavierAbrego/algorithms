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

const reduceOneLevelFromArray = (array) =>[].concat(...array)
export function flatten (source) {
    return Object.fromEntries(reduceOneLevelFromArray(Object.entries(source).map(flattenFromEntryFunction)))
}

function flattenFromEntryFunction([key, value]) {
    if (Array.isArray(value)) {
        return reduceOneLevelFromArray(value.map((item, index) => flattenFromEntryFunction([`${key}.${index}`, item])))
    } else if (typeof value==='object' && value!==null){
        return Object.entries(value).map(entry => reduceOneLevelFromArray(flattenFromEntryFunction([`${key}.${entry[0]}`, entry[1]])))
    } else {
        return [[key, value]]
    }
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
