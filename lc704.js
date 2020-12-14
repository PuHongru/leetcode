/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length) return -1;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.round((right - left) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));