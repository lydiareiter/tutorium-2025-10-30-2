import {Monster} from "./monster.js";

export class MonsterParty extends Monster {

    constructor(monster: Monster) {
        super(monster.name, monster.age, monster.hobbies, monster.monsterType);
    }

    makePartySound (): string {
        return "Hallo ich heiße " + this.name + " und bin ein " + this.age + " Jahre alter " + this.monsterType + "! ;)";
    }
}