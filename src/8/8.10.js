export const paintFill = (area, x, y, color) => {
  if (area[y][x] === color) return false

  return paintFillHelper(area, x, y, area[y][x], color)
}

export const paintFillHelper = (area, x, y, originalColor, color) => {
  if (x < 0 || x > area[0].length || y < 0 || y > area.length - 1) return false

  if (area[y][x] === originalColor) {
    area[y][x] = color
    paintFillHelper(area, x, y - 1, originalColor, color) // up
    paintFillHelper(area, x + 1, y, originalColor, color) // right
    paintFillHelper(area, x, y + 1, originalColor, color) // down
    paintFillHelper(area, x - 1, y, originalColor, color) // left
  }

  return true
}