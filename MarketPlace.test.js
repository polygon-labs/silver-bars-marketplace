import { MarketPlace } from './MarketPlace'

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

describe('MarketPlace', () => {
  let marketPlace

  beforeEach(() => {
    marketPlace = new MarketPlace()
  })

  it('Should get orders', () => {
    const orders = marketPlace.getOrders()
    expect(orders).toEqual([]);
  })

  it('Should register orders', () => {
    let orders = marketPlace.getOrders()
    expect(orders).toEqual([]);
    
    marketPlace.registerOrder(order1)
    orders = marketPlace.getOrders()
    expect(orders).toEqual([order1]);

    marketPlace.registerOrder(order2)
    orders = marketPlace.getOrders()
    expect(orders).toEqual([order1, order2]);
  })

  it('Should cancel orders', () => {
    let orders = marketPlace.getOrders()
    expect(orders).toEqual([]);
    
    marketPlace.registerOrder(order1)
    marketPlace.registerOrder(order2)
    orders = marketPlace.getOrders()
    expect(orders).toEqual([order1, order2]);

    marketPlace.cancelOrder(order2)
    expect(orders).toEqual([order1]);
  })
})