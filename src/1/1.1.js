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