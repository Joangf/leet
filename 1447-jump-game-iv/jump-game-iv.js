/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const n = arr.length;
  if (n <= 1) return 0;

  // 1. Map each value to all its indices for O(1) lookups
  const valueToIndices = new Map();
  for (let i = 0; i < n; i++) {
    if (!valueToIndices.has(arr[i])) {
      valueToIndices.set(arr[i], []);
    }
    valueToIndices.get(arr[i]).push(i);
  }

  // 2. Set up BFS queue and visited set
  // Each element in the queue stores: [currentIndex, currentJumps]
  const queue = [[0, 0]]; 
  const visited = new Set();
  visited.add(0);
  // 3. Start BFS
  while (queue.length > 0) {
    const [idx, jumps] = queue.shift();

    // Base case: If we reached the last index, return the jumps stored!
    if (idx === n - 1) return jumps;

    // Option A: Jump to identical values
    if (valueToIndices.has(arr[idx])) {
      const neighbors = valueToIndices.get(arr[idx]);
      for (const nextIdx of neighbors) {
        if (!visited.has(nextIdx)) {
          visited.add(nextIdx);
          queue.push([nextIdx, jumps + 1]); // Storing the incremented jump
        }
      }
      valueToIndices.delete(arr[idx]);
    }

    // Option B: Jump to i + 1
    if (idx + 1 < n && !visited.has(idx + 1)) {
      visited.add(idx + 1);
      queue.push([idx + 1, jumps + 1]);
    }

    // Option C: Jump to i - 1
    if (idx - 1 >= 0 && !visited.has(idx - 1)) {
      visited.add(idx - 1);
      queue.push([idx - 1, jumps + 1]);
    }
  }

  return 0;
};