const won = board => {
  // check rows
  for (let i = 0; i < board.length; i++) {
    const first = board[i][0]
    for (let j = 1; j < board.length; j++) {
      if (board[i][j] !== first) break
      if (j === board.length - 1) return true
    }
  }

  // check cols
  for (let i = 0; i < board.length; i++) {
    const first = board[0][i]
    for (let j = 1; j < board.length; j++) {
      if (board[j][i] !== first) break
      if (j === board.length - 1) return true
    }
  }

  // check diagonals
  let first = board[0][0]
  for (let i = 1; i < board.length; i++) {
    if (board[i][i] !== first) break
    if (i === board.length - 1) return true
  }
  first = board[0][board.length - 1]
  for (let i = 1; i < board.length; i++) {
    if (board[i][board.length - i - 1] !== first) break;
    if (i === board.length - 1) return true
  }

  return false;
}

export default won;
