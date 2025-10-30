import { Monster } from './monster.js';
import { MonsterType } from "./monster-type.js";
import { MonsterParty } from "./monster-party.js";
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
//# sourceMappingURL=main.js.map