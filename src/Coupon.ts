export default class Coupon {

	constructor (
		readonly code: string,
		readonly percentage: number,
		readonly expireDate?: Date,
		) {
	}

	getDiscount (total: number) {
		return (total * this.percentage)/100;
	}

	isExpired () {
		return this.expireDate && this.expireDate < new Date(Date.now())
	}
}
