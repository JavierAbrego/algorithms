import * as assert from "assert";

export function distributeCandy(candidateList: Array<number>): number {
    let candyNum = 0
    const candyMap = candidateList.reduce(
        (prev, actual) => prev.get(actual) ? prev : prev.set(actual, ++candyNum),
        new Map<number, number>()
    )

    return candidateList.map(candidate => candyMap.get(candidate) || 0).reduce((prev, actual) => prev + actual)
}


assert.deepEqual(distributeCandy([1, 2]), 3)
assert.deepEqual(distributeCandy([1, 3, 2, 1]), 7)
