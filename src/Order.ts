import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
	orderItems: OrderItem[];
	cpf: Cpf;
	coupon?: Coupon;

	constructor (cpf: string) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
	}

	addItem (item: Item, quantity: number) {
		if (quantity < 0) {
			throw new Error('Can not add negative amount')
		}
		if (this.hasDuplicatedItem(item.idItem)) {
			throw new Error('Duplicated item')
		}
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
	}

	hasDuplicatedItem (itemId: number) {
		const duplicateItem = this.orderItems.find(orderItem => orderItem.idItem === itemId)
		return duplicateItem
	}

	addCoupon (coupon: Coupon) {
		if (coupon.isExpired()) {
			throw new Error('Expired coupon')
		}
		this.coupon = coupon;
	}

	getTotal () {
		let total = this.orderItems.reduce((total, orderItem) => {
			total += orderItem.getTotal();
			return total;
		}, 0);
		if (this.coupon) {
			total -= this.coupon.getDiscount(total);
		}
		return total;
	}
}
