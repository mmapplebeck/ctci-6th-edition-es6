import LinkedListNode from '../structures/LinkedList'
import {Node as TreeNode} from '../structures/Graph'
import Queue from '../structures/Queue'

export const toLinkedLists = binaryTreeRoot => {
  let linkedLists = []
  const queue = new Queue()
  queue.add(binaryTreeRoot)
  while(!queue.isEmpty()) {
    let size = queue.size
    let linkedList = null
    while(size > 0) {
      let treeNode = queue.remove()
      if (!linkedList) {
        linkedList = new LinkedListNode(treeNode.name)
      } else {
        linkedList.appendToTail(treeNode.name)
      }
      if (treeNode.left) queue.add(treeNode.left)
      if (treeNode.right) queue.add(treeNode.right)
      size -= 1
    }
    linkedLists.push(linkedList)
  }
  return linkedLists
}

export const toLinkedListsRecursive = (root, levels = [], level = 0) => {
  if (!root) return levels
  if (!levels[level]) {
    levels[level] = new LinkedListNode(root.name)
  } else {
    levels[level].appendToTail(root.name)
  }
  levels = toLinkedListsRecursive(root.left, levels, level + 1)
  levels = toLinkedListsRecursive(root.right, levels, level + 1)
  return levels
}