/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const graph = Array.from({length: edges.length + 2}, () => []);
    for(let [start, end] of edges) {
        graph[start].push(end);
    }
    function dfs(start, visited, currDepth = -1) {
        if(visited.has(start)) return visited.get(start);
        let maxDepth = currDepth;
        for(let end of graph[start]) {
            maxDepth = Math.max(dfs(end, visited, currDepth), maxDepth);
        }
        visited.set(start, maxDepth + 1);
        return maxDepth + 1;
    }
    let maxDepth = 0;
    const visited = new Map();
    for(let i = 1; i <= edges.length + 1; i++ ) {
        maxDepth = Math.max(maxDepth, dfs(i, visited));
    }
    console.log(maxDepth);
    const MOD = 1000000007n; // Your modulo as a BigInt

    const result = (2n ** BigInt(maxDepth - 1)) % MOD;

    // Convert back to a regular number if needed (and if it fits)
    const finalResult = Number(result);
    return finalResult;
};