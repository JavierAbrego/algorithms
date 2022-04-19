/*
Day 11: Sum Digits Until One
We're provided a positive integer num. Can you write a method to repeatedly add all of its digits until the result has only one digit?

Here's an example: if the input was 49, we'd go through the following steps:

SNIPPET
// start with 49

4 + 9 = 13
// since the previous addition was 13,

// move onto summing 13's digits

1 + 3 = 4
We would then return 4.
 */


import * as assert from "assert";

function sumDigitsUntilOneRecursive(source:number):number {
    const mod = source%10
    const rest = Math.floor(source/10)
    return (rest===0) ? mod : mod + sumDigitsUntilOneRecursive(rest)
}
function sumDigitsUntilOneLoop(source:number):number {
    let rest = source
    let result = 0
    while(rest !== 0){
        result += rest % 10
        rest = Math.floor(rest / 10)
    }
    return result
}
function sumDigitsUntilOneString(source:number):number {
    return Array.from(source.toString()).reduce((acc, value)=>acc+parseInt(value), 0)
}

function test(fn: (source:number)=>number){
    console.time('test')
    assert.deepEqual(fn(49), 13)
    assert.deepEqual(fn(13), 4)
    assert.deepEqual(fn(146), 11)
    assert.deepEqual(fn(10000000000000002), 3)
    console.timeEnd('test')
}
test(sumDigitsUntilOneString)
test(sumDigitsUntilOneLoop)
test(sumDigitsUntilOneRecursive)
