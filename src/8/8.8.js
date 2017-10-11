export const findPermutations = string => {
  if (!string.length) return ['']

  let first = string.charAt(0)
  let remainder = string.substr(1).replace(first, '')
  let permutations = []
  let substrings = findPermutations(remainder)

  substrings.forEach(substring => {
    for (let i = 0; i <= substring.length; i++) {
      permutations.push(substring.slice(0, i) + first + substring.substr(i))
    }
  })

  return permutations
}