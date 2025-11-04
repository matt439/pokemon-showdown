/**
 * Apogee VGC Singles Test
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Test battle using fixed Gen 9 singles team.
 * Run this using `node build && node dist/sim/examples/apogee-vgc-singles-test`.
 *
 * @license MIT
 */

import { BattleStream, getPlayerStreams } from '..';
import { RandomPlayerAI } from '../tools/random-player-ai';

/*********************************************************************
 * Fixed Test Team - Gen 9 Singles
 *********************************************************************/

// Packed team format
const testTeam = 'Calyrex-Ice||Leftovers|AsOneGlastrier|glaciallance,leechseed,trickroom,protect||236,36,,0,236,|M|,,,,,0|||50|,,,,,Water]Miraidon||ChoiceSpecs|HadronEngine|voltswitch,dazzlinggleam,electrodrift,dracometeor||236,,52,124,68,28|M||||50|,,,,,Fairy]Ursaluna||FlameOrb|Guts|facade,crunch,headlongrush,protect||108,156,4,0,116,124|M||||50|,,,,,Ghost]Volcarona||RockyHelmet|FlameBody|strugglebug,overheat,protect,tailwind||252,0,196,0,60,|M||||50|,,,,,Water]Grimmsnarl||LightClay|Prankster|spiritbreak,thunderwave,reflect,lightscreen||236,4,140,0,116,12|M||||50|,,,,,Ghost]Iron Hands||AssaultVest|QuarkDrive|fakeout,heavyslam,lowkick,wildcharge||236,0,,0,236,36|M||||50|,,,,,Bug';

/*********************************************************************
 * Run AI Battle
 *********************************************************************/

const streams = getPlayerStreams(new BattleStream());

const spec = {
	formatid: "gen9customgame",
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
console.log("\n=== Starting Gen 9 Singles Battle ===\n");

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
