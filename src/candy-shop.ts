import type {CandyType} from "./candy-type";

export class CandyShop {
    candy: CandyType[];


    constructor(candy: CandyType[]) {
        this.candy = candy;
    }
}