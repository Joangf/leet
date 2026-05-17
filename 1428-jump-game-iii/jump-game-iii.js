/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = [];
    if(arr[start]==0) return true;
    visited.push(start);
    const right = dfs(arr, start+arr[start], visited);
    const left = dfs(arr, start-arr[start], visited);
    return right||left;
};
function dfs(arr, start, visited) {
    if(visited.includes(start)) return false;
    if(arr[start]==0) return true;
    visited.push(start);
    const right = dfs(arr, start+arr[start], visited);
    const left = dfs(arr, start-arr[start], visited);
    return right||left;
}