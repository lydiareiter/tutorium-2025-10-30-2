import type {MonsterType} from "./monster-type";

export class Monster {
    private _name: string;
    private _age: number;
    private _hobbies: string[];
    private _monsterType: MonsterType;


    constructor(name: string, age: number, hobbies: string[], monsterType: MonsterType) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
        this._monsterType = monsterType;
    }

    addHobby (hobby: string) {
        this._hobbies.push(hobby);
    }


    get name(): string {
        return this._name;
    }


    get age(): number {
        return this._age;
    }


    set age(value: number) {
        if (value > this._age) {
            this._age = value;
        } else {
            console.log("Error: Age can not be smaller than current age.")
        }
    }

    birthday () {
        this.age++;
    }

    get hobbies(): string[] {
        return this._hobbies;
    }

    get monsterType(): MonsterType {
        return this._monsterType;
    }
}