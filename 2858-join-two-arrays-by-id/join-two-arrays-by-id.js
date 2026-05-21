/**
* @param {Array} arr1
* @param {Array} arr2
* @return {Array}
*/
var join = function (arr1, arr2) {
    const set = new Map();
    const result = [];
    arr1.forEach((item) => set.set(item.id, item));
    arr2.forEach((item) => {
        if (set.has(item.id)) set.set(item.id, { ...set.get(item.id), ...item });
        else set.set(item.id, item);
    });
    for (const [key, value] of set) {
        result.push(value);
    }
    return result.sort((a, b) => a.id - b.id);
};