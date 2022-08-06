import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido vazio", function () {
	const order = new Order("886.634.854-68");
	const total = order.getTotal();
	expect(total).toBe(0);
});

test("Não deve criar um pedido com CPF inválido", function () {
	expect(() => new Order("111.111.111-11")).toThrow(new Error("Cpf Inválido"));
});

test("Deve criar um pedido com 3 itens", function () {
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	order.addItem(new Item(2, "Amplificador", 5000), 1);
	order.addItem(new Item(3, "Cabo", 30), 3);
	const total = order.getTotal();
	expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
	const order = new Order("886.634.854-68");
	order.addItem(new Item(1, "Guitarra", 1000), 1);
	order.addItem(new Item(2, "Amplificador", 5000), 1);
	order.addItem(new Item(3, "Cabo", 30), 3);
	order.addCoupon(new Coupon("VALE20", 20));
	const total = order.getTotal();
	expect(total).toBe(4872);
});

test("Deve rejeitar um cupom de desconto expirado", function () {
	const order = new Order("886.634.854-68");
  const coupon = new Coupon("VALE20", 20, new Date('2022-01-01 10:00:00'))
  expect(() => order.addCoupon(coupon)).toThrow('Expired coupon')
});
