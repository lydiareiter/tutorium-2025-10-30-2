import { Monster } from './monster.js';
import { MonsterType } from "./monster-type.js";
import { MonsterParty } from "./monster-party.js";
import { CandyShop } from "./candy-shop.js";
import { CandyType } from "./candy-type.js";
import { SalzGebaeck } from "./salz-gebaeck.js";
console.log("--- Monster Test ---");
let monster = new Monster("Gorgo", 300, ["scaring villagers", "collecting shiny objects"], MonsterType.Gorgone);
console.log(`Name: ${monster.name}`);
console.log(`Age: ${monster.age}`);
console.log(`Hobbies: ${monster.hobbies.join(", ")}`); // "scaring villagers, collecting shiny objects"
console.log(" ");
monster.addHobby("horse riding");
console.log(`Hobbies: ${monster.hobbies.join(", ")}`);
console.log(" ");
monster.age = 301;
console.log(monster.age);
console.log(" ");
monster.age = -10;
console.log(monster.age);
console.log(" ");
monster.birthday();
console.log(monster.age);
console.log(" ");
console.log(monster.monsterType);
console.log(" ");
// let monsterParty = new MonsterParty((Monster){ monster.name, monster.age, [], monster.monsterType});
let monsterParty2 = new MonsterParty(monster);
console.log(monsterParty2.makePartySound());
console.log(" ");
let candyShop = new CandyShop([CandyType.Gummibärli]);
console.log(candyShop.candy);
console.log(" ");
let shop = new CandyShop([CandyType.Gummibärli, SalzGebaeck.Chips]);
console.log(shop.candy);
console.log(" ");
shop.add(SalzGebaeck.Fischis);
console.log(shop.candy);
console.log(" ");
// type SuessSalziges = CandyType & SalzGebaeck; // Strg + / -> wenn Numpad
// let saltedCaramel: SuessSalziges = CandyType.SaltedCaramel & SalzGebaeck.SaltedCaramel;
// console.log(saltedCaramel);
let person = {
    svnr: 123456789,
    groesese: 152,
    vorlieben: [],
    name: "Neysi",
    alter: 22
};
let mitarbeiter = { arbeitsstunden: 5, mitarbeiternr: 12345 };
console.log(person, mitarbeiter);
console.log(" ");
let neysi = {
    name: "neysi",
    svnr: 123456789,
    groesese: 152,
    vorlieben: [],
    alter: 22,
    mitarbeiternr: 123456,
    arbeitsstunden: 5
};
console.log(neysi);
//# sourceMappingURL=main.js.map