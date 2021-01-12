// leetcode 188. 买卖股票的最佳时机 IV
/**
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let dp = [];
    // 初始化dp
    for(let j = 0; j <= k; j++){
        dp[j] = {
            dpi0: 0,
            dpi1: -Infinity
        }
    }
    
    for(let i = 0; i < prices.length; i++) {
        for(let j = 0; j <= k; j++) {
            dp[j].dpi0 = Math.max(dp[j].dpi0, dp[j].dpi1 + prices[i]);
            if(j === 0) {
                dp[j].dpi1 = Math.max(dp[j].dpi1, -prices[i]);
            }else {
                dp[j].dpi1 = Math.max(dp[j].dpi1, dp[j - 1].dpi0 - prices[i]);
            }
        }
    }
    return dp[k].dpi0;
};

console.log(maxProfit(2, [2,4,1]));