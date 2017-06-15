import Queue from '../structures/Queue'

export const pathExistsDFS = (start, end) => {
  if (start === end) return true
  start.visited = true
  for (let i = 0; i < start.children.length; i++) {
    if (!start.children[i].visited) {
      let found = pathExistsDFS(start.children[i], end)
      if (found) return found
    }
  }
  return false
}

export const pathExistsBFS = (start, end) => {
  if (start === end) return true
  const queue = new Queue()
  start.marked = true
  queue.add(start)
  while(!queue.isEmpty()) {
    let node = queue.remove()
    if (node === end) return true
    node.children.forEach(child => {
      if (!child.marked) {
        child.marked = true
        queue.add(child)
      }
    })
  }
  return false
}