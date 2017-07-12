// checkSubtree
//
// arguments: large, small
// returns: boolean
//
// keep track of current large and current small
// if large equals small, checkIdentical
// if identical return true
// if not identical, recurse on large.left
// if left identical, return true
// if not identical, recurse on right.right
// if right identical, return true
// return false

// checkSubtreeHelper
//
// arguments: t1, t2
// returns: boolean
//
// if t1 doesn't equal t2, return false
// recurse with t1.left and t2.left
// if left false, return false
// recurse with t1.right and t2.right
// if right false, return false
// return true

export const checkSubtree = (large, small) => {
  if (!large) return false
  if (large.data === small.data && checkIdentical(large, small)) return true
  return checkSubtree(large.left, small) || checkSubtree(large.right, small)
}

const checkIdentical = (t1, t2) => {
  if (!t1 && !t2) return true
  if (!t1 || !t2) return false
  if (t1.data !== t2.data) return false
  return checkIdentical(t1.left, t2.left) && checkIdentical(t1.right, t2.right)
}