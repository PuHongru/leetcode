// leetcode 123. 买卖股票的最佳时机 III
/**
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp_i20 = 0, dp_i21 = -Infinity;
    let dp_i10 = 0, dp_i11 = -Infinity;
    for(let i = 0; i < prices.length; i++) {
        dp_i20 = Math.max(dp_i20, dp_i21 + prices[i]);
        dp_i21 = Math.max(dp_i21, dp_i10 - prices[i]);
        dp_i10 = Math.max(dp_i10, dp_i11 + prices[i]);
        dp_i11 = Math.max(dp_i11, -prices[i]);
    }
    return dp_i20;
};