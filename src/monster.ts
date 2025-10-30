export class Monster {
    name: string;
    age: number;
    hobbies: string[];


    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    addHobby (hobby: string) {
        this.hobbies.push(hobby);
    }
}