export class CandyShop<Typ extends string> {
    candy: Typ[];


    constructor(candy: Typ[]) {
        this.candy = candy;
    }

    add (candy: Typ) {
        this.candy.push(candy);
    }
}