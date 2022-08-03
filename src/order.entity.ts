import CPF from "./cpf.entity";

export default class Order {
  constructor(
    public description: string,
    public price: number,
    public quantity: number,
    public discountVoucher?: DiscountVouchers,
    public cpf?: CPF
  ) {
    if (discountVoucher) {
      this.price = price * (1 - discountVoucher.percentage)
    }
  }
}

export class DiscountVouchers {
  constructor(
    public percentage: number
  ) {}
}