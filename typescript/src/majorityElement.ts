import * as assert from "assert";

export function majorityElement(numberList: Array<number>): number {
    type Pair = [number, number]
    const numberMap = numberList.reduce((previous, current) => {
        let value = previous.get(current)
        return previous.set(current, value ? ++value : 1);
    }, new Map<number, number>())

    const results = Array.from(numberMap.entries())
        .sort((a: Pair, b: Pair) => a[1] - b[1])
        .filter(pair => pair[1] > numberList.length / 2)
        .map(entry => entry[0])

    return results.length > 0 ? results[0] : 0
}

assert.deepEqual(majorityElement([1, 2, 2]), 2)
