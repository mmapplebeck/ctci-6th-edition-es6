export const isUnique = str => {
  let chars = {}
  for (let i = 0; i < str.length; i++) {
    if (chars.hasOwnProperty(str[i])) {
      return false
    }
    chars[str[i]] = 1
  }
  return true
}

export const sort = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export const isUniqueNLogN = str => {
  const sorted = str.split('').sort(sort)
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) return false
  }
  return true
}