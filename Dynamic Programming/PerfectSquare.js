/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 1; i <= n; ++i) {
    let min_val = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; ++j) {
      min_val = Math.min(min_val, dp[i - j * j] + 1);
    }
    dp[i] = min_val;
  }
  return dp[n];
};
