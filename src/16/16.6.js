export const smallestDiff = (list1, list2) => {
  let smallest = null

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      let val = list1[i] - list2[j]
      if (val >= 0 && (smallest === null || val < smallest)) {
        smallest = val
      }
    }
  }

  return smallest
}

export const smallestDiffOptimized = (list1, list2) => {
  const compartor = (a, b) => a < b ? -1 : (a > b ? 1 : 0)
  const sorted1 = list1.sort(compartor)
  const sorted2 = list2.sort(compartor)

  let pointer1 = 0;
  let pointer2 = 0;
  let smallest = null

  while(pointer1 < sorted1.length && pointer2 < sorted2.length) {
    let a = sorted1[pointer1]
    let b = sorted2[pointer2]
    let diff = a - b
    if (diff >= 0 && (smallest === null || diff < smallest)) {
      smallest = diff
      if (smallest === 0) return smallest
    }
    if (a < b) pointer1 += 1
    else pointer2 += 1
  }

  return smallest
}
