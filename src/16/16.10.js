const livingPeople = (people, start, end) => {
  let births = {}
  let deaths = {}
  let alive = 0
  let maxAlive = 0
  let result = null

  people.forEach(person => {
    if (births[person.birth]) births[person.birth]++
    else births[person.birth] = 1
    if (deaths[person.death]) deaths[person.death]++
    else deaths[person.death] = 1
  })

  for (let year = start; year < end; year++) {
    if (births.hasOwnProperty(year)) alive += births[year]
    if (deaths.hasOwnProperty(year - 1)) alive -= deaths[year - 1]
    if (alive > maxAlive) {
      maxAlive = alive
      result = year
    }
  }

  return result
}

export default livingPeople
