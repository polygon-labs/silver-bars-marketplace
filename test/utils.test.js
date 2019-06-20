import { isValidOrder } from '../utils'

describe('utils', () => {
  describe('isValidOrder', () => {
    it('should throw correct error when required property is missing', () => {
      const noUserIdOrder = {
        quantity: 50,
        price: 5000,
        type: 'SELL'
      }

      expect(() => {
        isValidOrder(noUserIdOrder);
      }).toThrow('Missing prop: userId');

      const noQuantityOrder = {
        userId: 'testUser1',
        price: 5000,
        type: 'SELL'
      }

      expect(() => {
        isValidOrder(noQuantityOrder);
      }).toThrow('Missing prop: quantity');

      const noPriceOrder = {
        userId: 'testUser1',
        quantity: 50,
        type: 'SELL'
      }

      expect(() => {
        isValidOrder(noPriceOrder);
      }).toThrow('Missing prop: price');

      const noTypeOrder = {
        userId: 'testUser1',
        price: 5000,
        quantity: 50,
      }

      expect(() => {
        isValidOrder(noTypeOrder);
      }).toThrow('Missing prop: type');
    })
  })

  it('should throw correct error when property is of wrong type', () => {
    const badUserIdOrder = {
      userId: 123,
      quantity: 50,
      price: 5000,
      type: 'SELL'
    }

    expect(() => {
      isValidOrder(badUserIdOrder);
    }).toThrow('Invalid type of prop: userId');

    const badQuantityOrder = {
      userId: 'testUser1',
      quantity: '50',
      price: 5000,
      type: 'SELL'
    }

    expect(() => {
      isValidOrder(badQuantityOrder);
    }).toThrow('Invalid type of prop: quantity');

    const badPriceOrder = {
      userId: 'testUser1',
      quantity: 50,
      price: '5000',
      type: 'SELL'
    }

    expect(() => {
      isValidOrder(badPriceOrder);
    }).toThrow('Invalid type of prop: price');

    const badTypeOrder = {
      userId: 'testUser1',
      quantity: 50,
      price: 5000,
      type: true
    }

    expect(() => {
      isValidOrder(badTypeOrder);
    }).toThrow('Invalid type of prop: type');
  })
})