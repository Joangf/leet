/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    let shortestDuration = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            let duration = 0;
            if (landStartTime[i] + landDuration[i] < waterStartTime[j]) 
                duration = waterStartTime[j] + waterDuration[j];
            else 
                duration = landStartTime[i] + landDuration[i] + waterDuration[j];
            if (duration < shortestDuration) 
                shortestDuration = duration;
        }
    }
    for (let i = 0; i < waterStartTime.length; i++) {
        for (let j = 0; j < landStartTime.length; j++) {
            let duration = 0;
            if (waterStartTime[i] + waterDuration[i] < landStartTime[j]) 
                duration = landStartTime[j] + landDuration[j];
            else 
                duration = waterStartTime[i] + waterDuration[i] + landDuration[j]
            if (duration < shortestDuration) 
                shortestDuration = duration;
        }
    }
    return shortestDuration;
};