// leetcode 3.无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let need = new Map();
    let window = new Map();
    let right = 0, left = 0;
    while(right <= s.length) {
        let cur = s[right];
        right++;
        if(!need.has(cur)) {
            need.set(cur, 1);
        }
    }
};