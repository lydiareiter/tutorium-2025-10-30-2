import {Monster} from './monster.js';
import {MonsterType} from "./monster-type.js";
import {MonsterParty} from "./monster-party.js";
import {CandyShop} from "./candy-shop.js";
import {CandyType} from "./candy-type.js";
import {SalzGebaeck} from "./salz-gebaeck.js";

console.log("--- Monster Test ---");
let monster = new Monster("Gorgo", 300, ["scaring villagers", "collecting shiny objects"], MonsterType.Gorgone);

console.log(`Name: ${monster.name}`);
console.log(`Age: ${monster.age}`);
console.log(`Hobbies: ${monster.hobbies.join(", ")}`); // "scaring villagers, collecting shiny objects"

console.log(" ");

monster.addHobby("horse riding");
console.log(`Hobbies: ${monster.hobbies.join(", ")}`);

console.log(" ")

monster.age = 301;
console.log(monster.age);

console.log(" ")

monster.age = -10;
console.log(monster.age);

console.log(" ")

monster.birthday();
console.log(monster.age);

console.log(" ");

console.log(monster.monsterType);

console.log(" ");

// let monsterParty = new MonsterParty((Monster){ monster.name, monster.age, [], monster.monsterType});
let monsterParty2 = new MonsterParty(monster)
console.log(monsterParty2.makePartySound());

console.log(" ")

let candyShop = new CandyShop<CandyType>([CandyType.Gummibärli]);
console.log(candyShop.candy);

console.log(" ")

let shop = new CandyShop<CandyType | SalzGebaeck>([CandyType.Gummibärli, SalzGebaeck.Chips])
console.log(shop.candy);