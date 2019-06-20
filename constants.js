const numberTypeCheck = (val) => typeof val === 'number'

const stringTypeCheck = (val) => typeof val === 'string'

const buySellTypeCheck = (val) => val === 'BUY' || val === 'SELL'

export const orderProperties = [
  {prop: 'userId', typeCheck: stringTypeCheck},
  {prop: 'quantity', typeCheck: numberTypeCheck},
  {prop: 'price', typeCheck: numberTypeCheck},
  {prop: 'type', typeCheck: buySellTypeCheck}
]