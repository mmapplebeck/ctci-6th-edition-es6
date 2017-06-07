export const encodeSpaces = (str, len) => {
  return str.slice(0, len).split(' ').join('%20')
}