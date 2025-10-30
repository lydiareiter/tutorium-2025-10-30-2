export class CandyShop<Typ extends string> {
    candy: Typ[];


    constructor(candy: Typ[]) {
        this.candy = candy;
    }
}