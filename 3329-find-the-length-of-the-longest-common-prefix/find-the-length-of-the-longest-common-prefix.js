/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    const set1 = new Set();
    const set2 = new Set();
    function createPrefix(item, set) {
        item = String(item);
        while (item.length > 0) {
            if (item.at(0) == '0') break;
            set.add(item);
            item = item.slice(0, item.length - 1);
        }
    }
    for(const item of arr1) {
        createPrefix(item, set1);
    }
    for(const item of arr2) {
        createPrefix(item, set2);
    }
    let longest = 0;
    for (const value of set2) {
        if(set1.has(value)) {
            if(longest < value.length) longest = value.length;
        }
    }

    return longest;
};