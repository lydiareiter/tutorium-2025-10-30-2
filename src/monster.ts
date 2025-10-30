export class Monster {
    private _name: string;
    private _age: number;
    private _hobbies: string[];


    constructor(name: string, age: number, hobbies: string[]) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
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
        this._age = value;
    }

    get hobbies(): string[] {
        return this._hobbies;
    }
}