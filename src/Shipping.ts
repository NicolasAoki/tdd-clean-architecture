import Item from "./Item"

export default class Shipping {
  MINIMUM_SHIPPING_PRICE = 10
  constructor() {}

  calculateShipping(items: Item[], distance: number): number {
    const total = items.reduce((acc, item) => {
      const {
        width = 0,
        height = 0,
        depth = 0,
        weight = 0,
      } = item
      const volume = width * height * depth
      const density = weight / volume
      const shippingValue = distance * volume * (density / 100)
      return acc += shippingValue
    }, 0)

    if (total < 10) {
      return this.MINIMUM_SHIPPING_PRICE
    }
    return total
  }
}