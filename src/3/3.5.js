import Stack from '../structures/Stack'

export const sortStack = (stack, sorted = new Stack(), val = null) => {
  while(!stack.isEmpty()) {
    val = val || stack.pop()
    if (sorted.isEmpty() || val < sorted.peek()) {
      sorted.push(val)
      sortStack(stack, sorted)
    } else {
      stack.push(sorted.pop())
      sortStack(stack, sorted, val)
    }
  }
  return sorted
}