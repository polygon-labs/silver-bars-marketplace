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