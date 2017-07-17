export const countWays = (stairCount, memo = {}) => {
  if (stairCount < 0) {
    return 0
  } else if (stairCount === 0) {
    return 1
  } else if (memo[stairCount]) {
    return memo[stairCount]
  } else {
    memo[stairCount] = countWays(stairCount - 3, memo) + countWays(stairCount - 2, memo) + countWays(stairCount - 1, memo)
    return memo[stairCount]
  }
}
