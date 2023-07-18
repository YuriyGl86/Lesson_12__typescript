import Buyable from './Buyable';

export default class Notebook implements Buyable {
    amount: number

    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        amount: number=1
    ) {
        this.amount = amount
     }
}