class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.id = x + y
  }
}

export const findPath = (grid, pos = new Point(0, 0), path = [], failed = {}) => {
  const {x, y, id} = pos
  if (failed[id] || grid[y] === undefined || grid[y][x] === undefined) return null
  if (!grid[y][x]) {
    failed[id] = true
    return null
  }
  if (x === grid[y].length - 1 && y === grid.length - 1) return path
  return findPath(grid, new Point(x + 1, y), path.concat(['r'])) || findPath(grid, new Point(x, y + 1), path.concat(['d']))
}