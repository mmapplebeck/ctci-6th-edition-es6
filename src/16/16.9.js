export const multiply = (a, b) => {
  if (a === 0 || b === 0) return 0

  let result = 0
  const absA = Math.abs(a)
  const absB = Math.abs(b)
  const large = absA >= absB ? absA : absB
  const small = absA >= absB ? absB : absA
  const negative = a < 0 && b > 0 || a > 0 && b < 0

  for (let i = 0; i < small; i++) {
    result += large
  }

  return negative ? negate(result) : result
}

export const subtract = (a, b) => {
    return a + negate(b)
}

const negate = n => {
  return (~n) + 1
}

export const divide = (a, b) => {
  if (a === 0) return 0
  if (b === 0) return undefined

  const absA = Math.abs(a)
  const absB = Math.abs(b)
  const negative = a < 0 && b > 0 || a > 0 && b < 0
  let dividend = absA
  let result = 0

  while (subtract(dividend, absB) >= 0) {
    result++
    dividend = subtract(dividend, absB)
  }

  return negative ? negate(result) : result
}
