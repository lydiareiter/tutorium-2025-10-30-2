import { Monster } from './monster.js';

console.log("--- Monster Test ---");
let monster = new Monster("Gorgo", 300, ["scaring villagers", "collecting shiny objects"]);

console.log(`Name: ${monster.name}`);
console.log(`Age: ${monster.age}`);
console.log(`Hobbies: ${monster.hobbies.join(", ")}`); // "scaring villagers, collecting shiny objects"

console.log(" ");

monster.addHobby("horse riding");
console.log(`Hobbies: ${monster.hobbies.join(", ")}`);