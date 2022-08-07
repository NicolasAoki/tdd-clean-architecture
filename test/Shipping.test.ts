import Item from "../src/Item";
import Shipping from "../src/Shipping"

test('Deve criar um frete para um item', () => {
	const item = new Item(
    1,
    "Guitarra",
    1000,
    100,
    30,
    10,
    3,
  )
  const shipping = new Shipping()
  const shippingPrice = shipping.calculateShipping([item], 1000)
  expect(shippingPrice).toBe(30)
})

test('Deve criar um frete com valor minimo', () => {
	const item = new Item(
    1,
    "Guitarra",
    1000,
    1,
    1,
    1,
    1,
  )
  const shipping = new Shipping()
  const shippingPrice = shipping.calculateShipping([item], 1000)
  expect(shippingPrice).toBe(10)
})