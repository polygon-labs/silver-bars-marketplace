import { orderProperties } from './constants'

export const isValidOrder = (order) => {
  orderProperties.forEach(({prop, typeCheck}) => {
    if (!order.hasOwnProperty(prop)) {
      throw new Error(`Missing prop: ${prop}`)
    }

    if (!typeCheck(order[prop])) {
      throw new Error(`Invalid type of prop: ${prop}`)
    }
  })

  return true
}

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    let key = obj[property];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);

    return acc;
  }, {});
}

const getDisplayOrders = (groupedOrders) => {
  const displayOrders = []

  Object.keys(groupedOrders).forEach((price) => {
    let quantity = 0

    groupedOrders[price].forEach((order) => {
      quantity += order.quantity
    })

    displayOrders.push({
      price: Number(price),
      quantity
    })
  })

  return displayOrders
}

const sortBuyOrders = (orders) => {
  return orders.sort((a, b) => b.price - a.price);
}

const sortSellOrders = (orders) => {
  return orders.sort((a, b) => a.price - b.price);
}

export const getSortedSummaryInformation = (orders) => {
  const buyOrders = orders.filter(order => order.type === 'BUY')
  const sellOrders = orders.filter(order => order.type === 'SELL')
  
  const groupedBuyOrders = groupBy(buyOrders, 'price');
  const groupedSellOrders = groupBy(sellOrders, 'price');

  const sortedBuyOrders = sortBuyOrders(getDisplayOrders(groupedBuyOrders))
  const sortedSellOrders = sortSellOrders(getDisplayOrders(groupedSellOrders))

  return {
    BUY: sortedBuyOrders,
    SELL: sortedSellOrders
  }
}