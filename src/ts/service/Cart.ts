import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const elem = this._items.filter(elem => elem.id === item.id)[0]
        if (elem){
            if(elem.amount){ elem.amount +=1 }
        }
        else { this._items.push(item) };
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get totalSum(): number {
        let res = this._items.reduce((sum, item) => {
            const itemSum = item.amount? item.amount * item.price : item.price
            return sum + itemSum
        }, 0)
        return res
    }

    gettotalSumDiscount(discount: number): number{
        return this.totalSum * (100-discount) / 100
    }

    deleteItem(id: number): void {
        const itemIndex = this._items.findIndex(elem => elem.id===id)
        if (itemIndex != -1){
            const item = this._items[itemIndex]
            if(item.amount && item.amount > 1){
                item.amount -= 1
            }
            else {
                this._items.splice(itemIndex,1)
            }
        }
    }


}