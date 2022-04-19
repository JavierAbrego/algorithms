import * as assert from 'assert'
//Problem: Find a way to convert it to a palindrome by inserting characters in front of it.
//Solution:
// reverse string
//iterate resulting chars
    // slice reversed string 0, to index
    // concat with source string
    // if result string is palindrome break and return result
function isPalindrome(source: string) {
    return source ===  Array.from(source).reverse().join('')
}

assert.deepEqual(isPalindrome('carac'), true)
assert.deepEqual(isPalindrome('car'), false)

function shortestPalindrome(source: string): string {
    const reversed = source.split('').reverse().join('')
    for (let i = 0; i < reversed.length; i++) {
        const stringToCheck = reversed.slice(0, i) + source
        if (isPalindrome(stringToCheck)) {
           return stringToCheck
        }
    }
    return reversed
}
const SEP = ''
const shortestPalindromeReduce = (source: string) => Array.from(source).reverse().reduce((acc: readonly string[], char: string, index:number, array: string[]) =>{
    const response = [...acc, char]
    isPalindrome(response.concat(source).join(SEP)) && array.splice(1)
    return response
}, []).concat(source).join(SEP)

const shortestPalindromeFindIndex = (source: string) => {
    const arrayFromIndexPlusSource = (arr: readonly string[], index:number)=> arr.slice(0, index).concat(source).join('')
    const reversedArray = Array.from(source).reverse()
    const index = reversedArray.findIndex((value: string, index: number, array: readonly string[]) => isPalindrome(arrayFromIndexPlusSource(array, index)))
    return arrayFromIndexPlusSource(reversedArray, index)
}

function runTests(fn: (source:string) => string) {
    assert.deepEqual(fn('bubble'), 'elbbubble');
    assert.deepEqual(fn('dasndsadmx'), 'xmdasdnsadasndsadmx');
}
runTests(shortestPalindrome)
runTests(shortestPalindromeReduce)
runTests(shortestPalindromeFindIndex)
