export const successor = (root, previous = null) => {
  if (previous && root.right !== previous) return root
  if (previous === null && root.right) return root.right
  if (!root.parent) return null
  return successor(root.parent, root)
}