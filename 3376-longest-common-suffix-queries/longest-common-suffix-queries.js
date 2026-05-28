/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
    const wordTree = new Trie();
    const result = new Array(wordsQuery.length);
    for (let i = 0; i < wordsContainer.length; i++) {
        const reverseWord = wordsContainer[i].split('').reverse().join('');
        wordTree.insert(reverseWord, i);
    }
    for (let i = 0; i < wordsQuery.length; i++) {
        const reverseWord = wordsQuery[i].split('').reverse().join('');
        const matchIndex = wordTree.longestPrefix(reverseWord);
        result[i] = matchIndex;
    }
    return result;


};
class Trie {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
        this.smallestLengthIndex = null;
        this.smallestLength = Infinity;
    }
    insert(word, wordIndex) {
        let curr = this;
        const size = word.length;
        if (word.length == 0) return;
        if(size < curr.smallestLength) {
            curr.smallestLength = size;
            curr.smallestLengthIndex = wordIndex;
        }
        for (const char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (curr.children[index] == null) {
                curr.children[index] = new Trie();
            }
            if(size < curr.children[index].smallestLength) {
                curr.children[index].smallestLength = size;
                curr.children[index].smallestLengthIndex = wordIndex;
            }
            curr = curr.children[index];
        }
        curr.isEnd = true;
    }
    longestPrefix(word) {
        let curr = this;
        for (const char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if(curr.children[index] == null) break;
            curr = curr.children[index];
        }
        return curr.smallestLengthIndex;
    }
}