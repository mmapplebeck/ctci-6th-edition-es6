export const isPermutationPalindrome = str => {
  let oddLetters = {}
  let oddCount = 0
  const letters = str.replace(/\s/g, '').toLowerCase()
  for (let i = 0; i < letters.length; i++) {
    oddLetters[letters[i]] = oddLetters[letters[i]] ? !oddLetters[letters[i]] : true
    oddCount += oddLetters[letters[i]] ? 1 : -1
  }
  return oddCount <= 1
}