/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    const parents = new Map();
    const isChild = new Set();
    descriptions.forEach((node) => {
        isChild.add(node[1]);
        const child = parents.get(node[1]) ? parents.get(node[1]): new TreeNode(node[1]);
        const parent = parents.get(node[0]) ? parents.get(node[0]): new TreeNode(node[0]);
        if(node[2]) parent.left = child;
        else parent.right = child;
        parents.set(node[0], parent);
        parents.set(node[1], child);
    });
    let rootKey = null;
    for (key of parents.keys()) {
        if(!isChild.has(key)) {
            rootKey = key;
            break;
        }
    } 
    return parents.get(rootKey);
};