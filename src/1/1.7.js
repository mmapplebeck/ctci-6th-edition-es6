export const rotate = matrix => {
  let rotated = []
  for (let i = 0; i < matrix.length; i++) {
    rotated[i] = []
    for (let j = 0; j < matrix.length; j++) {
      rotated[i][j] = matrix[matrix.length - 1 - j][i]
    }
  }
  return rotated
}

export const rotateInPlace = matrix => {
  for (let i = 0; i < matrix.length / 2; i ++) {
    for (let j = i; j < matrix.length - 1 - i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[matrix.length - 1 - j][i]
      matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j]
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i]
      matrix[j][matrix.length - 1 - i] = temp
    }
  }
  return matrix
}