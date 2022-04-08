export function rotationalCipher(input: string, rotationFactor: number): string {
    let alphabetLowercase = "abcdefghijklmnopqrstuvwxyz"
    let alphabetUppercase = alphabetLowercase.toUpperCase();
    let numbers = "1234567890"
    const alphabets = [alphabetLowercase, alphabetUppercase, numbers]

    // Write your code here
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
