/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    let queen = ['0000'];
    let depth = 0;
    let visited = new Set();
    let deadends1 = new Set(deadends);
    //visited.add('0000');
    while (queen.length !== 0) {
        let len = queen.length;
        for (let i = 0; i < len; i++) {
            let cur = queen.shift();
            //检查是否在死亡数字中
            if (deadends1.has(cur)) {
                continue;
            }
            //判断是否已经访问过
            if (visited.has(cur)) {
                continue;
            }
            visited.add(cur);
            if (cur === target) {
                return depth;
            }
            for (let j = 0; j < 4; j++) {
                queen.push(plusOne(cur, j));
                queen.push(minusOne(cur, j));
            }
        }
        depth++;
    }
    return -1;
};

// 将s[j]向上波动一次
function plusOne(s, j) {
    //console.log(s);
    let arr = s.split('');
    let t = parseInt(arr[j]);
    if (t === 9) {
        arr[j] = '0';
    } else {
        arr[j] = t + 1;
    }
    return arr.join('');
}

//将s[j]向下波动一次
function minusOne(s, j) {
    let arr = s.split('');
    let t = parseInt(arr[j]);
    if (t === 0) {
        arr[j] = '9';
    } else {
        arr[j] = t - 1;
    }
    return arr.join('');
}

// 双向bfs  从出发点和目标点都出发，哪个下一节点数，就使用哪个一个。
function openLock2(deadends, target) {
    let q1 = ['0000'];
    let q2 = [target];
    let deadends1 = new Set(deadends);
    let depth = 0;
    let visited = new Set();
    while (q1.length && q2.length) {
        let temp = [];
        let len = q1.length;
        for (let i = 0; i < len; i++) {
            let cur = q1.shift();
            // 判断是否在死亡数组中
            if (deadends1.has(cur)) {
                continue;
            }
            // 判断是否已访问
            if (visited.has(cur)) {
                continue;
            }
            // q1和q2有交集时，说明找到最短路径
            if (q2.includes(cur)) {
                return depth;
            }
            visited.add(cur);
            for (let j = 0; j < 4; j++) {
                q1.push(plusOne(cur, j));
                q1.push(minusOne(cur, j));
            }
            
        }
        depth++;
        // 选取子节点少的，进行查找
        if (q1.length > q2.length) {
            temp = q1.slice();
            q1 = q2.slice();
            q2 = temp.slice();
        }
    }
    return -1;
}

console.log(openLock2(["0201", "0101", "0102", "1212", "2002"], "0202"));
