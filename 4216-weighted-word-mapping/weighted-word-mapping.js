/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let result = '';
    for (const word of words) {
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            const index = word[i].charCodeAt(0) - 97;
            sum += weights[index];
        }
        result += (String.fromCharCode(122 - sum % 26));
    }
    return result;
};