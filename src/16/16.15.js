export default (solution, guess) => {
  let solutionSlots = solution.split('')
  let guessSlots = guess.split('')
  let result = {
    hits: 0,
    pseudoHits: 0
  }

  solutionSlots.forEach((solutionSlot, i) => {
    if (guessSlots[i] === solutionSlot) {
      result.hits++

    } else if (guessSlots.indexOf(solutionSlot) > -1) {
      result.pseudoHits++
    }
  })

  return result
}
