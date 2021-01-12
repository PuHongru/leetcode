// 剑指 Offer 37. 序列化二叉树
// lc 297. 二叉树的序列化与反序列化
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// null时用NULLSTR代替
let NULLSTR = '#';
// 序列化后的分隔符
let SEP = ',';
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 前序
var serialize = function(root) {
    //let serializedStr = '';
    // traverse返回的字符串最后多了一个“,”
    // 需要把最后的“,”删除
    let s = traverse(root);

    return s.slice(0, s.length - 1);
};
function traverse(root) {
    let str = '';
    if(root === null) {
        str = NULLSTR + SEP;
        return str;
    }
    str = root.val + SEP;
    str = str + traverse(root.left);
    str = str + traverse(root.right);
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // 将字符串转为数组
    let arr = data.split(SEP);
    return deserializeFun(arr);
};
function deserializeFun(arr) {
    if(arr.length === 0) {
        return null;
    }
    let r = arr.shift();
    if(r === NULLSTR) {
        return null;
    }
    let root = new TreeNode(r);
    root.left = deserializeFun(arr);
    root.right = deserializeFun(arr);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */




/**
 * 后序
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let s = traverse(root);
    return s.slice(0, s.length - 1);
};

function traverse(root) {
    let str = '';
    if(root === null) {
        str = str + NULLSTR + SEP;
        return str;
    }
    str = str + traverse(root.left);
    str = str + traverse(root.right);
    str = str + root.val + SEP;
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // 字符串转化为数组
    let arr = data.split(SEP);
    return deserializeFun(arr);
};

function deserializeFun(arr) {
    if(arr.length === 0) {
        return null;
    }
    let r = arr.pop();
    if(r === NULLSTR) {
        return null;
    }
    let root = new TreeNode(r);
    root.right = deserializeFun(arr);
    root.left = deserializeFun(arr);
    return root;
}


// 层级序列化与反序列化
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let s = traverse(root);
    return s.slice(0, s.length - 1);
};

function traverse(root) {
    if(root === null) {
        return NULLSTR + SEP;
    }
    // 构建队列
    let q = [];
    q.push(root);
    let str = '';
    while(q.length !== 0) {
        let r = q.shift();
        
        if(r === null) {
            str = str + NULLSTR + SEP;
        } else {
            str = str + r.val + SEP;
            q.push(r.left);
            q.push(r.right);
        }
    }
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split(SEP);
    return deserializeFun(arr);
};

function deserializeFun(arr) {
    if(arr[0] === NULLSTR) {
        return null;
    }
    let root = new TreeNode(arr[0]);
    // let cur = root;
    let queue = [];
    queue.push(root);
    let i = 1;
    while(i < arr.length) {
        let cur = queue.shift();
        
        if(arr[i] === NULLSTR) {
            cur.left = null;
        } else {
            cur.left = new TreeNode(arr[i]);
            queue.push(cur.left);
        }
        i++;
        

        if(arr[i] === NULLSTR) {
            cur.right = null;
        } else {
            cur.right = new TreeNode(arr[i]);
            queue.push(cur.right);
        }
        i++;
    }
    return root;
}
