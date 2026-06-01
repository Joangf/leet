/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    const sortedCost = cost.toSorted((a, b) => b - a);
    let twoCandiesCost = 0;
    let boughtTwoCandies = 0;
    let totalCost = 0;
    for(let i = 0; i < cost.length; i++) {
        if(boughtTwoCandies == 2) {
            if(twoCandiesCost < sortedCost[i]) {
                totalCost += sortedCost[i];
            }
            twoCandiesCost = sortedCost[i];
            boughtTwoCandies = 0;
        }
        else {
            totalCost += sortedCost[i];
            twoCandiesCost += sortedCost[i];
            boughtTwoCandies++;
        }
    }
    return totalCost;
};