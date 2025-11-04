/**
 * Apogee VGC Doubles Test
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Test battle using fixed Gen 9 VGC doubles team.
 * Run this using `node build && node .sim-dist/examples/apogee-vgc-doubles-test`.
 *
 * @license MIT
 */

import { BattleStream, getPlayerStreams } from '..';
import { RandomPlayerAI } from '../tools/random-player-ai';

/*********************************************************************
 * Fixed Test Team - Gen 9 VGC Doubles
 *********************************************************************/

const testTeam = `Calyrex-Ice @ Leftovers
Ability: As One (Glastrier)
Level: 50
Tera Type: Water
EVs: 236 HP / 36 Atk / 236 SpD
Adamant Nature
- Glacial Lance
- Leech Seed
- Trick Room
- Protect

Miraidon @ Choice Specs
Ability: Hadron Engine
Level: 50
Tera Type: Fairy
EVs: 236 HP / 52 Def / 124 SpA / 68 SpD / 28 Spe
Modest Nature
- Volt Switch
- Dazzling Gleam
- Electro Drift
- Draco Meteor

Ursaluna @ Flame Orb
Ability: Guts
Level: 50
Tera Type: Ghost
EVs: 108 HP / 156 Atk / 4 Def / 116 SpD / 124 Spe
Adamant Nature
- Facade
- Crunch
- Headlong Rush
- Protect

Volcarona @ Rocky Helmet
Ability: Flame Body
Level: 50
Tera Type: Water
EVs: 252 HP / 196 Def / 60 SpD
Bold Nature
- Struggle Bug
- Overheat
- Protect
- Tailwind

Grimmsnarl @ Light Clay
Ability: Prankster
Level: 50
Tera Type: Ghost
EVs: 236 HP / 4 Atk / 140 Def / 116 SpD / 12 Spe
Careful Nature
- Spirit Break
- Thunder Wave
- Reflect
- Light Screen

Iron Hands @ Assault Vest
Ability: Quark Drive
Level: 50
Tera Type: Bug
EVs: 236 HP / 236 SpD / 36 Spe
Adamant Nature
- Fake Out
- Heavy Slam
- Low Kick
- Wild Charge`;

/*********************************************************************
 * Run AI Battle
 *********************************************************************/

const streams = getPlayerStreams(new BattleStream());

const spec = {
	formatid: "gen9vgc2023regulatione",
};
const p1spec = {
	name: "Apogee Bot 1",
	team: testTeam,
};
const p2spec = {
	name: "Apogee Bot 2",
	team: testTeam,
};

const p1 = new RandomPlayerAI(streams.p1);
const p2 = new RandomPlayerAI(streams.p2);

console.log("p1 is " + p1.constructor.name);
console.log("p2 is " + p2.constructor.name);
console.log("\n=== Starting Gen 9 VGC Doubles Battle ===\n");

void p1.start();
void p2.start();

void (async () => {
	for await (const chunk of streams.omniscient) {
		console.log(chunk);
	}
})();

void streams.omniscient.write(`>start ${JSON.stringify(spec)}
>player p1 ${JSON.stringify(p1spec)}
>player p2 ${JSON.stringify(p2spec)}`);
