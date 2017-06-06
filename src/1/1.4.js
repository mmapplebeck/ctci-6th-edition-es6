export const isPermutationPalindrome = str => {
  let chars = {}
  let oddCount = 0
  for (let i = 0; i < str.length; i++) {
    if (chars.hasOwnProperty(str[i])) {
      chars[str[i]] += 1
      if (chars[str[i]] % 2 === 0) {
        oddCount -= 1
      } else {
        oddCount += 1
      }
    } else {
      chars[str[i]] = 1
      oddCount += 1
    }
  }
  return oddCount <= 1
}