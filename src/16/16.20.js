const dictionary = require('check-word')('en')

const mapping = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: []
}

export function t9(sequence) {
  return getWords((sequence + '').split('').map(digit => digit * 1))
}

function getWords(digits, word = '') {
  if (!digits.length) return dictionary.check(word) ? [word] : []

  let words = []

  mapping[digits[0]].forEach(letter => {
    words = words.concat(getWords(digits.slice(1), word + letter))
  })

  return words
}
