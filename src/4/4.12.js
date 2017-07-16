export const pathsToSum = (node, targetSum) => {
  if (!node) return 0
  let count = 0
  count += findPathsToSum(node, targetSum)
  count += pathsToSum(node.left, targetSum)
  count += pathsToSum(node.right, targetSum)
  return count
}

export const findPathsToSum = (node, targetSum, currentSum = 0) => {
  if (!node) return 0
  currentSum += node.name
  let count = 0
  if (currentSum === targetSum) count += 1
  count += findPathsToSum(node.left, targetSum, currentSum)
  count += findPathsToSum(node.right, targetSum, currentSum)
  return count
}

export const pathsToSumOptimized = (node, targetSum) => {
  return findPathsToSumOptimized(node, targetSum)
}

export const findPathsToSumOptimized = (node, targetSum, runningSum = 0, sums = {}) => {
  if (!node) return 0

  runningSum += node.name
  
  let totalPaths = runningSum === targetSum ? 1 : 0
  totalPaths += sums[runningSum - targetSum] ? sums[runningSum - targetSum] : 0

  if (sums[runningSum]) {
    sums[runningSum] += 1
  } else {
    sums[runningSum] = 1
  }

  totalPaths += findPathsToSumOptimized(node.left, targetSum, runningSum, sums)
  totalPaths += findPathsToSumOptimized(node.right, targetSum, runningSum, sums)

  sums[runningSum] -= 1
  if (sums[runningSum] === 0) delete sums[runningSum]

  return totalPaths
}