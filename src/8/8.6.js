import Stack from '../structures/Stack'

export const towersOfHanoi = (start, buffer, end) => {
  if (!start.isEmpty()) {
    if (start.peek().next === null) {
      end.push(start.pop())
    } else {
      buffer.push(start.pop())
    }
  } else if (!buffer.isEmpty()) {
    end.push(buffer.pop())
  } else {
    return end
  }
  return towersOfHanoi(start, buffer, end)
}