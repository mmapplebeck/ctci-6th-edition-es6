export default list => {
  let maxTotal = 0
  let total = 0

  list.forEach((item, i) => {
    // if negative, set total to 0
    if (total + item < 0) {
      total = 0
    } else {
      total += item
      maxTotal = total > maxTotal ? total : maxTotal
    }
  })

  return maxTotal
}
