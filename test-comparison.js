const Sim = require('./dist/sim');

const stream = new Sim.BattleStream();

(async () => {
    let output = '';
    for await (const chunk of stream) {
  console.log(chunk);
        output += chunk;
    }
})();

const spec = {
    formatid: "gen9customgame",
    seed: [0x71A, 0x462, 0, 0] // 1818, 1122 in hex
};

const p1Spec = {
    name: "Bot 1",
    team: [
        { name: "Pikachu", species: "Pikachu", item: "", ability: "static", moves: ["thunderbolt", "quickattack", "irontail", "grassknot"], evs: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, nature: "Hardy", level: 50 },
    { name: "Charizard", species: "Charizard", item: "", ability: "blaze", moves: ["flamethrower", "airslash", "dragonclaw", "roost"], evs: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, nature: "Hardy", level: 50 }
    ]
};

const p2Spec = {
    name: "Bot 2",
    team: [
        { name: "Blastoise", species: "Blastoise", item: "", ability: "torrent", moves: ["hydropump", "icebeam", "earthquake", "rapidspin"], evs: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, nature: "Hardy", level: 50 },
        { name: "Venusaur", species: "Venusaur", item: "", ability: "overgrow", moves: ["gigadrain", "sludgebomb", "earthquake", "synthesis"], evs: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }, nature: "Hardy", level: 50 }
    ]
};

stream.write(`>start ${JSON.stringify(spec)}`);
stream.write(`>player p1 ${JSON.stringify(p1Spec)}`);
stream.write(`>player p2 ${JSON.stringify(p2Spec)}`);
stream.write(`>p1 team 12`);
stream.write(`>p2 team 12`);
