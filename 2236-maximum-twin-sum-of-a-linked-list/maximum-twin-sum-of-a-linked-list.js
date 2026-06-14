var pairSum = function(head) {
    const values = [];
    let curr = head;
    
    // Step 1: Push all values into a standard array
    while (curr !== null) {
        values.push(curr.val);
        curr = curr.next;
    }
    
    let maxSum = -Infinity;
    let left = 0;
    let right = values.length - 1;
    
    // Step 2: Use two pointers to find the twin sums
    while (left < right) {
        let currentPairSum = values[left] + values[right];
        if (currentPairSum > maxSum) {
            maxSum = currentPairSum;
        }
        left++;
        right--;
    }
    
    return maxSum;
};