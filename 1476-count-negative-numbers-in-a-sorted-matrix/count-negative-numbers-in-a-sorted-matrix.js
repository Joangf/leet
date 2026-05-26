/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0;
    for (const row of grid) {
        for (let i = row.length - 1; i >= 0; i--) {
            if(row[i] < 0) count ++;
            else break;
        }
    }
    return count;
};