import { isValidOrder } from './utils'

export class MarketPlace {
  constructor() {
    this.orders = []
  }

  getOrders() {
    return this.orders
  }

  registerOrder(order) {
    if (isValidOrder(order)) {
      this.orders.push(order)
    }
  }

  cancelOrder(order) {
    if (this.orders.indexOf(order) > -1) {
      this.orders.splice(this.orders.indexOf(order), 1);
    }
  }
}