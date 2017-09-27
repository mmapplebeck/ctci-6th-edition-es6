export const multiply = (a, b) => {
  const lesser = a < b ? a : b
  const greater = a > b ? a : b
  return multiplyHelper(lesser, greater)
}

export const multiplyHelper = (lesser, bigger) => {
  if (lesser === 0) return 0
  if (lesser === 1) return bigger

  const half = lesser >> 1
  const halfProd = multiplyHelper(half, bigger)

  if (lesser % 2 === 0) {
    return halfProd + halfProd
  } else {
    return halfProd + halfProd + bigger
  }
}