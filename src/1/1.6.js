export const compress = str => {
  let compressed = ''
  let count = 0
  for (let i = 0; i < str.length; i++) {
    count += 1
    if (!str[i + 1]) {
      compressed += str[i] + count
    } else if (str[i] !== str[i + 1]) {
      compressed += str[i] + count
      count = 0
    }
  }
  return compressed.length < str.length ? compressed : str
}