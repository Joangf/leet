/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const freq = Array(A.length).fill(0);
    const result = Array(A.length).fill(0);
    for (let i = 0; i < A.length; i++) {
        const firstIndex = A[i] - 1;
        const secondIndex = B[i] - 1;
        freq[firstIndex]++;
        freq[secondIndex]++;
        if (freq[firstIndex] == 2 && firstIndex != secondIndex) {
            result[i]++;
        }
        if (freq[secondIndex] == 2) {
            result[i]++;
        }
        if (i != 0) result[i] += result[i - 1];
    }
    return result;
};