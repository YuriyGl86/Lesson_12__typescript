import Buyable from './Buyable';

export default class Movie implements Buyable {

    constructor(
        readonly id: number,
        readonly name: string,
        readonly country: string,
        readonly year: number,
        readonly slogan: string,
        readonly genre: string[],
        readonly time: number,
        readonly price: number,
    ) { 

    }
}