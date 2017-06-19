export const isBST = (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
  if (!root) return true

  const left = isBST(root.left, min, root.name)
  if (!left) return false

  const right = isBST(root.right, root.name, max)
  if (!right) return false

  return root.name > min && root.name < max
}