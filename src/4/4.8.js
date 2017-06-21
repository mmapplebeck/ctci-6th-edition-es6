// assumes nodes have parent reference
// find difference in depths of both nodes
// move deeper node up the difference
// move both up until they are the same
export const commonAncestor1 = (node1, node2) => {
  
  const depth = node => {
    let depth = 0
    while (node.parent) {
      node = node.parent
      depth += 1
    }
    return depth
  }

  const moveUp = (node, n) => {
    while (n > 0) {
      if (!node.parent) return null
      node = node.parent
      n -= 1
    }
    return node
  }

  const depth1 = depth(node1)
  const depth2 = depth(node2)
  const delta = Math.abs(depth1 - depth2)

  let deep = depth1 > depth2 ? node1 : node2
  let shallow = depth1 > depth2 ? node2 : node1

  deep = moveUp(deep, delta)

  while(deep && shallow && deep !== shallow) {
    deep = deep.parent
    shallow = shallow.parent
  }

  return deep === shallow ? shallow : null
}

// assumes nodes have parent reference
// start at node1
// if node2 not in node1 subtree, check node1 sibling's subtree
// if still not found, move up to node1 parent and check sibling's subtree
// continue until node2 found, current root will be the common ancestor 
//
// commonAncestor2
// getSibling
// contains

const contains = (root, node) => {
  if (!root) return false
  if (root === node) return true
  return contains(root.left, node) || contains(root.right, node)
}

const getSibling = node => {
  if (!node.parent) return null
  return node.parent.left === node ? node.parent.right : node.parent.left
}

const searchSiblings = (root, sibling, target) => {
  if (!root) return null
  if (contains(sibling, target)) return root
  return searchSiblings(root.parent, getSibling(root), target)
}

export const commonAncestor2 = (node1, node2) => {
  if (contains(node1, node2)) return node1
  return searchSiblings(node1.parent, getSibling(node1), node2)
}

// assumes nodes do not have parent reference
// assumes both nodes are children of root
// start at root
// search node1 on left, search node2 on right
// if node1 on left and node2 on right, then we know root is the ancestor
// if both on left, move root to left and search again
// if both on right, move root to right and search again

export const commonAncestor3 = (root, node1, node2) => {
  if (!root) return null

  const node1InLeft = contains(root.left, node1)
  const node2InLeft = contains(root.left, node2)

  if (node1InLeft !== node2InLeft) return root

  return commonAncestor3(node1InLeft ? root.left : root.right, node1, node2)
}
