/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
    // If the last character is '1', we can never reach it
    if (s[s.length - 1] === "1") return false;

    const queue = [0];
    let far = 0; // Tracks the furthest index we've looked at

    while (queue.length > 0) {
        const curr = queue.shift();

        if (curr === s.length - 1) return true;

        // Calculate the boundaries for the next jumps
        const start = Math.max(curr + minJump, far + 1);
        const end = Math.min(curr + maxJump, s.length - 1);

        for (let i = start; i <= end; i++) {
            if (s[i] === '0') {
                queue.push(i);
            }
        }

        // Update 'far' so the next nodes don't re-examine these indices
        far = Math.max(far, end);
    }

    return false;
};