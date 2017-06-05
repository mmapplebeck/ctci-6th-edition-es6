export const reverse = str => {
  let reversed = str.split('')
  const len = reversed.length / 2
  for (let i = 0; i < len; i++) {
    let temp = reversed[i]
    reversed[i] = reversed[reversed.length - 1 - i]
    reversed[reversed.length - 1 - i] = temp
  }
  return reversed.join('')
}