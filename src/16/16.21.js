export default (list1, list2) => {
  const listInfo1 = new ListInfo(list1)
  const listInfo2 = new ListInfo(list2)
  const shorter = listInfo1.total < listInfo2.total ? listInfo1 : listInfo2
  const longer = listInfo1.total > listInfo2.total ? listInfo1 : listInfo2
  const diff = longer.total - shorter.total
  let used = {}
  let pairs = []

  for (let i = 0; i < shorter.list.length; i++) {
    if (used[shorter.list[i]]) continue
    const key = (longer.total + shorter.list[i] - (shorter.total - shorter.list[i])) / 2
    if (longer.items[key]) {
      pairs.push([shorter.list[i], key])
      used[shorter.list[i]] = true
    }
  }

  return pairs
}

class ListInfo {
  constructor(list) {
    this.list = list
    this.total = 0
    this.items = {}

    list.forEach(item => {
      this.total += item
      this.items[item] = true
    })
  }
}
