export const getOrders = root => {

  if (!root) {
    return [[]]
  }

  let orders = []

  const leftOrders = getOrders(root.left)
  const rightOrders = getOrders(root.right)

  for (let i = 0; i < leftOrders.length; i++) {
    for (let j = 0; j < rightOrders.length; j++) {
      weave(leftOrders[i], rightOrders[i]).forEach(weaved => {
        orders.push([root].concat(weaved))
      })
    }
  }

  return orders
}

export const weave = (order1, order2, prefix = [], weaved = []) => {

  if (!order1.length || !order2.length) {
    weaved.push(prefix.concat(order1.length ? order1 : order2))
    return weaved
  }
  
  prefix.push(order1[0])
  weaved = weave(order1.slice(0, 0), order2, prefix, weaved)
  prefix.pop()

  prefix.push(order2[0])
  weaved = weave(order1, order2.slice(0, 0), prefix, weaved)
  prefix.pop()

  return weaved
}
