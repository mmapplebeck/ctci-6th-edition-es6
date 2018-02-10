export function inBounds(matrix, row, col) {
  return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length
}

export function pondSize(matrix) {
  let counts = []
  let visited = {}
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let size = pondSizeHelper(matrix, i, j, visited)
      if (size > 0) counts.push(size)
    }
  }

  return counts
}

export function pondSizeHelper(matrix, row, col, visited) {
  const key = `${row}_${col}`

  if (visited[key] || !inBounds(matrix, row, col)) return 0
  visited[key] = true

  if (matrix[row][col] !== 0) return 0

  let count = 1
  count += pondSizeHelper(matrix, row, col - 1, visited)
  count += pondSizeHelper(matrix, row - 1, col - 1, visited)
  count += pondSizeHelper(matrix, row - 1, col, visited)
  count += pondSizeHelper(matrix, row - 1, col + 1, visited)
  count += pondSizeHelper(matrix, row, col + 1, visited)
  count += pondSizeHelper(matrix, row + 1, col + 1, visited)
  count += pondSizeHelper(matrix, row + 1, col, visited)
  count += pondSizeHelper(matrix, row + 1, col - 1, visited)

  return count
}
