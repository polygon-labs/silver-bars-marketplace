import { LiveOrderBoard } from './LiveOrderBoard'

const order1 = {
  userId: 'testUser1',
  quantity: 100,
  price: 500,
  type: 'BUY'
}

const order2 = {
  userId: 'testUser2',
  quantity: 200,
  price: 2500,
  type: 'SELL'
}

describe('LiveOrderBoard', () => {
  let liveOrderBoard

  beforeEach(() => {
    liveOrderBoard = new LiveOrderBoard()
  })

  it('Should get orders', () => {
    const orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([]);
  })

  it('Should register orders', () => {
    let orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([]);
    
    liveOrderBoard.registerOrder(order1)
    orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([order1]);

    liveOrderBoard.registerOrder(order2)
    orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([order1, order2]);
  })

  it('Should cancel orders', () => {
    let orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([]);
    
    liveOrderBoard.registerOrder(order1)
    liveOrderBoard.registerOrder(order2)
    orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([order1, order2]);

    liveOrderBoard.cancelOrder(order2)
    expect(orders).toEqual([order1]);
  })
})