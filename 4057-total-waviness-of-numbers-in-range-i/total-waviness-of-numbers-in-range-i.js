/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let totalWaviness = 0;
    for (let i = num1; i <= num2; i++) {
        if (Math.floor(i / 100) == 0) continue;
        const num = i.toString();
        for (let j = 1; j < num.length - 1; j++) {
            const peak = Math.max(Number(num[j]), Number(num[j - 1]) + 1, Number(num[j + 1]) + 1);
            const valley = Math.min(Number(num[j]), Number(num[j - 1]) - 1, Number(num[j + 1]) - 1);
            if (peak == Number(num[j]) || valley == Number(num[j])) totalWaviness++;
        }
    }
    return totalWaviness;
};