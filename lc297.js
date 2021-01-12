// null时用NULLSTR代替
let NULLSTR = '#';
// 序列化后的分隔符
let SEP = ',';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var deserialize = function (data) {
    // 字符串转化为数组
    let arr = data.split(SEP);
    return deserializeFun(arr);
};

function deserializeFun(arr) {
    if (arr.length === 0) {
        return null;
    }
    let r = arr.pop();
    if (r === NULLSTR) {
        return null;
    }
    let root = new TreeNode(r);
    root.right = deserializeFun(arr);
    root.left = deserializeFun(arr);
    return root;
}

//console.log(deserialize('#,#,#,4,2,#,#,3,1'));


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

console.log(serialize(
    {
        val: '1',
        right:{ val: '3', right: null, left: null },
        left: {
          val: '2',
          right: { val: '4', right: null, left: null },
          left: null
        }
    }
));
