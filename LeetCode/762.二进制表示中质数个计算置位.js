/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  var count = 0;
  const prime = [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0];
  for (let i = L; i <= R; i++) {
    let bin = (i >>> 0).toString(2);
    if (prime[bin.split(1).length - 1]) {
      count++;
    }
  }
  return count;
};

// @lc code=end
