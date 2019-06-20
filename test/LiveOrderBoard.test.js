import { LiveOrderBoard } from '../LiveOrderBoard'
import { order1, order2, order3, order4, order5, order6, order7 } from './constants'

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

  it('Should get summary information', () => {
    let orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([]);
    
    liveOrderBoard.registerOrder(order1)
    liveOrderBoard.registerOrder(order2)
    liveOrderBoard.registerOrder(order3)
    orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([order1, order2, order3]);

    const summary = liveOrderBoard.getSummaryInformation()
    const summaryBuyObject = {price: 500, quantity: 400}
    const summarySellObject = {price: 2500, quantity: 200}
    const expectedResult = {
      BUY: [summaryBuyObject],
      SELL: [summarySellObject]
    }
    expect(summary).toEqual(expectedResult);
  })

  it('Should sort BUY orders in descending price order', () => {
    let orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([]);
    
    liveOrderBoard.registerOrder(order1)
    liveOrderBoard.registerOrder(order3)
    liveOrderBoard.registerOrder(order4)
    liveOrderBoard.registerOrder(order5)
    orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([order1, order3, order4, order5]);

    const buyOrders = liveOrderBoard.getSummaryInformation().BUY
    const expectedResult = [
      {
        quantity: 700,
        price: 900
      },
      {
        quantity: 400,
        price: 500
      },
      {
        quantity: 1000,
        price: 400
      }
    ]
    expect(buyOrders).toEqual(expectedResult);
  })

  it('Should sort SELL orders in ascending price order', () => {
    let orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([]);
    
    liveOrderBoard.registerOrder(order2)
    liveOrderBoard.registerOrder(order6)
    liveOrderBoard.registerOrder(order7)
    orders = liveOrderBoard.getOrders()
    expect(orders).toEqual([order2, order6, order7]);

    const sellOrders = liveOrderBoard.getSummaryInformation().SELL
    const expectedResult = [
      {
        quantity: 100,
        price: 500
      },
      {
        quantity: 200,
        price: 2500
      },
      {
        quantity: 50,
        price: 5000
      }
    ]
    expect(sellOrders).toEqual(expectedResult);
  })
})