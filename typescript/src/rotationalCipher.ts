import * as assert from "assert";

export function rotationalCipher(input: string, rotationFactor: number): string {
    const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz"
    const alphabetUppercase = alphabetLowercase.toUpperCase();
    const numbers = "1234567890"
    const alphabets = [alphabetLowercase, alphabetUppercase, numbers]

    return input.split('').map(char => {
        const toUse = alphabets.reduce((acc: { readonly alphabet: string, readonly index: number }, alphabet) => {
            const index = alphabet.indexOf(char)
            return (index >= 0) ? {index, alphabet} : acc
        }, {alphabet: '', index: -1})
        if (toUse.index < 0) return char;
        const indexToReplace = ((toUse.index + rotationFactor + 1) % toUse.alphabet.length) || toUse.alphabet.length
        return toUse.alphabet[indexToReplace - 1]
    }).join('');
}

assert.deepEqual(rotationalCipher("All-convoYs-9-be:Alert1.", 4), "Epp-gsrzsCw-3-fi:Epivx5.")
assert.deepEqual(rotationalCipher("abcdZXYzxy-999.@", 200), "stuvRPQrpq-999.@")
