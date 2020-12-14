/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length) return [-1, -1];
    //let result = [];
    if(leftSearch(nums, target) === -1) {
        return [-1, -1];
    }
    return [leftSearch(nums, target), rightSearch(nums, target)]
};

function leftSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.round((right - left) / 2);
        if(nums[mid] === target) {
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums [mid] < target) {
            left = mid + 1;
        }
    }
    if(nums[left] !== target || left >= nums.length) {
        return -1;
    }
    return left;
}

function rightSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.round((right - left) / 2);
        if(nums[mid] === target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    if(nums[left - 1] !== target || left > nums.length) {
        return -1;
    }
    return left - 1;
}

console.log(searchRange([1], 1));