export default list => {
  let farthestLeft = null
  let farthestRight = null

  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[i - 1]) {
      if (farthestRight === null || i > farthestRight) farthestRight = i
      while(list[i] < list[i - 1]) {
        let temp = list[i - 1]
        list[i - 1] = list[i]
        list[i] = temp
        i--
      }
      if (farthestLeft === null || i < farthestLeft) farthestLeft = i
    }
  }

  return {
    farthestLeft, farthestRight
  }
}
