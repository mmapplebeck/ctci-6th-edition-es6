export const powerSet = set => {
  if (set.length === 0) return [[]]
  
  let last = set.pop()
  let subsets = powerSet(set)
  
  subsets.forEach(subset => {
    subsets.push(subset.concat([last]))
  })

  return subsets
}