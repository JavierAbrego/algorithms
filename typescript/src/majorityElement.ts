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


const  majorityElement2 = (arr: number[]) => {
    const elements =new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i]
        const elementValue = elements.get(value)
        elements.set( value, elementValue ? (elementValue +1) : 1 )
    }
    const entries: [number, number][] = Array.from(elements.entries())
    for (let i =0; i<entries.length; i++) {
        const entry = entries[i]
        if(entry[1]>(arr.length/2)){
            return entry[0]
        }
    }
    return 0
}

function test(fn: (arr: number[]) => number){
    assert.deepEqual(fn([1, 2, 2]), 2)
    assert.deepEqual(fn([2, 2, 2, 2, 5, 5, 2, 3, 3]), 2)
}

test(majorityElement)
test(majorityElement2)
