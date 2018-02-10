export default (pattern, value) => {
  const hasA = pattern.indexOf('a') > -1
  const hasB = pattern.indexOf('b') > -1
  const oneLetter = (hasA && !hasB) || (!hasA && hasB)

  if (value.length < pattern.length) return false
  if (oneLetter) {
    let sectionLength = value.length % pattern.length
    if (value.length % sectionLength > 0) return false
    let sectionValue = value.substr(0, sectionLength)
    for (let i = sectionLength - 1; i < value.length; i += sectionLength) {
      if (value.substr(i, sectionLength) !== sectionValue) return false
    }
    return true
  }

  const bCount = pattern.length - pattern.split('').sort().join('').indexOf('b')
  const aCount = pattern.length - bCount
  let aLength = 1
  let index = 0

  while(value.length - (aCount * aLength) >= bCount) {
    let bLength = (value.length - (aCount * aLength)) / bCount
    let found = true
    let a, b

    for (let i = 0; i < pattern.length; i++) {
      let letter = pattern.charAt(i)
      let sectionLength = letter === 'a' ? aLength : bLength
      let sectionValue = value.substr(index, sectionLength)
      index += sectionLength

      if (letter === 'a') {
        if (!a) {
          a = sectionValue
        } else if (sectionValue !== a) {
          console.log(letter, sectionValue, a)
          found = false
          break;
        }
      } else if (!b) {
          b = sectionValue
      } else if (sectionValue !== b) {
          console.log(letter, sectionValue, b)
          found = false
          break;
      }

    }

    if (found) return true
    index = 0
    aLength++
  }

  return false
}
