export const isPermutationPalindrome = str => {
  let counts = {}
  let oddCount = 0
  let letters = str.split(' ').join('')
  for (let i = 0; i < letters.length; i++) {
    if (counts.hasOwnProperty(letters[i])) {
      counts[letters[i]] += 1
      if (counts[letters[i]] % 2 === 0) {
        oddCount -= 1
      } else {
        oddCount += 1
      }
    } else {
      counts[letters[i]] = 1
      oddCount += 1
    }
  }
  return oddCount <= 1
}