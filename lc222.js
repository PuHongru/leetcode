// leetcode 222. 完全二叉树的节点个数
/**
 * 给出一个完全二叉树，求出该树的节点个数。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(root === null) {
        return 0;
    }
    // 右侧子树高度
    let hr = 0;
    // 左侧子树高度
    let hl = 0;
    let left = root.left;
    let right = root.right;
    // 计算左侧子树的高度
    while(left) {
        left = left.left;
        hl++;
    }
    // 计算右子树的高度
    while(right) {
        right = right.right;
        hr++;
    }

    // 说明是满二叉树
    if(hl === hr) {
        return Math.pow(2, hr) - 1;
    }

    // 不是满二叉树
    return 1 + countNodes(root.left) + countNodes(root.right);
};