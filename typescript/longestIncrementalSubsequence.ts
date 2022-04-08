export function longestIncrementalSubsequence(sequence: Array<number>): number {
    const listOfIncreasingPreviousElements = Array(sequence.length).fill(1)
    const result = sequence.map((seqVal, currentSeqIndex) => sequence.slice(0, currentSeqIndex + 1).reduce((numOfIncreasingPreviousElements, prevVal, indexPreviousElements) => listOfIncreasingPreviousElements[currentSeqIndex] = (seqVal > prevVal) ? Math.max(listOfIncreasingPreviousElements[indexPreviousElements] + 1, numOfIncreasingPreviousElements) : numOfIncreasingPreviousElements, 1))
    return Math.max(...result)
}
