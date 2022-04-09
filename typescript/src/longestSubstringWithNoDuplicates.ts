import * as assert from "assert";

function lengthOfLongestSubstringBruteForce(source: string) {
    const iterableChars = source.split('')
    const result = iterableChars.map((char: string, index: number) => {
        return iterableChars.slice(index + 1, iterableChars.length).reduce((acc: [number, string[]], val: string, index2: number, arr: string[]) => {
            if (acc[1].includes(val))
                return arr.splice(1) && acc
            return [++acc[0], [...acc[1], val]] as [number, string[]]
        }, [1, [char]])[0] as number
    })
    return Math.max(...result)
}

function lengthOfLongestSubstring(source: string) {
    let startNum = 0
    const map = new Map();
    const numberExistAfterStartNum = (char: string)=> map.get(char) >= startNum
    const currentLengthIsMoreThanPrevious = (i:number, maximumLen:number)=> i - startNum + 1 > maximumLen
    const setStartNumToPreviousCharPositionPlusOne = (char:string) => (startNum = map.get(char) + 1)

    return  source.split('').reduce((maximumLen, char, i)=>{
        const setMaximumLengthToCurrent = () => (maximumLen = i - startNum + 1)
        numberExistAfterStartNum(char) && setStartNumToPreviousCharPositionPlusOne(char)
        currentLengthIsMoreThanPrevious(i, maximumLen) && setMaximumLengthToCurrent()
        map.set(char, i)
        return maximumLen
    }, 0)
}

function executeTests(fn: (source: string) => number) {
    assert.deepEqual(fn('algodaily'), 7);
    assert.deepEqual(fn('thisisatest'), 5);
    assert.deepEqual(fn('abracadabra'), 4);
}

executeTests(lengthOfLongestSubstringBruteForce)
executeTests(lengthOfLongestSubstring)
