/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Set();
    function dfs(arr, start) {
        if(visited.has(start)) return false;
        if(arr[start]==0) return true;
        visited.add(start);
        const right = dfs(arr, start+arr[start], visited);
        const left = dfs(arr, start-arr[start], visited);
        return right||left;
    }
    return dfs(arr,start);
};