export const checkHeight = root => {
  if (!root) return -1

  const leftHeight = checkHeight(root.left)
  if (leftHeight === null) return null

  const rightHeight = checkHeight(root.right)
  if (rightHeight === null) return null

  if (Math.abs(leftHeight - rightHeight) > 0) return null

  return Math.max(leftHeight, rightHeight) + 1
}

export const checkBalanced = root => {
  return checkHeight(root) !== null
}