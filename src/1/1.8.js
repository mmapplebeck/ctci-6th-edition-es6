export const zeroMatrix = matrix => {
  let colsToClear = {}
  let rowsToClear = {}
  let zeroed = []
  // Find zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        colsToClear[j] = true
        rowsToClear[i] = true
      }
    }
  }
  // Populate zeroed matrix
  for (let i = 0; i < matrix.length; i++) {
    zeroed[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      zeroed[i][j] = colsToClear[j] || rowsToClear[i] ? 0 : matrix[i][j]
    }
  }
  return zeroed
}