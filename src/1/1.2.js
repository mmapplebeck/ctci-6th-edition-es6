export const isPermutation = (str1, str2) => {
  if (str1 === str2) return true
  if (str1.length !== str2.length) return false
  let chars = {}
  let i
  for (i = 0; i < str1.length; i++) {
    if (chars.hasOwnProperty(str1[i])) {
      chars[str1[i]] += 1
    } else {
      chars[str1[i]] = 1
    }
  }
  for (i = 0; i < str2.length; i++) {
    if (chars.hasOwnProperty(str2[i])) {
      chars[str2[i]] -= 1
      if (chars[str2[i]] === 0) delete chars[str2[i]]
    } else {
      return false
    }
  }
  return true
}