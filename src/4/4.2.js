import {Node} from '../structures/Graph'

export const minimalBST = (orderedList, start = 0, end = orderedList.length - 1) => {
  if (end < start) return null
  let midPoint = Math.ceil((end + start) / 2)
  let rootNode = new Node(orderedList[midPoint])
  rootNode.left = minimalBST(orderedList, start, midPoint - 1)
  rootNode.right = minimalBST(orderedList, midPoint + 1, end)
  return rootNode
}