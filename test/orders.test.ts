import CPF from "../src/cpf.entity"
import Order, { DiscountVouchers } from "../src/order.entity"

test('should create one order', () => {
  const order = new Order('coffee table', 100, 2)
  expect(order.description).toBe('coffee table')
  expect(order.price).toBe(100)

})

test('should create one order with discount', () => {
  const discountVoucher = new DiscountVouchers(0.25)
  const order = new Order('coffee table', 100, 100, discountVoucher)
  expect(order.description).toBe('coffee table')
  expect(order.price).toBe(75)
})

test('should attach an order to a cpf', () => {
  const cpf = new CPF('409.595.180-02')
  const order = new Order('coffee table', 100, 100, undefined, cpf)
  expect(order.cpf?.number).toBe('40959518002')
})