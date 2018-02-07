const divingBoard = function getLengths(boards, shorterLength, longerLength) {
  let lengths = []
  for (var i = 0; i <= boards; i++) {
    lengths.push((i * longerLength) + ((boards - i) * shorterLength))
  }
  return lengths
}

export default divingBoard
