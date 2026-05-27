/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    const lower = new Set();
    const upper = new Set();
    for (let i = 0; i < word.length; i++) {
        const ascii = word.charCodeAt(i);
        if (ascii > 96) {
            lower.add(word[i])
            upper.has(word[i].toUpperCase()) && lower.delete(word[i]);
        }
        else upper.add(word[i]);
    }
    let count = 0;
    for (const char of lower) {
        if (upper.has(char.toUpperCase())) count++;
    }
    return count;
};