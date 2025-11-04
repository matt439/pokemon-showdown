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
    formatid: "gen9vgc2024reg fmasterball", // Use VGC format directly
    seed: [0x71A, 0x462, 0, 0] // 1818, 1122
};

const p1Spec = {
    name: "Bot 1",
    team: [
        {
    name: "calyrex-ice",
      species: "Calyrex-Ice",
            item: "Leftovers",
    ability: "As One (Glastrier)",
            moves: ["glaciallance", "leechseed", "trickroom", "protect"],
     nature: "Adamant",
       gender: "M",
            evs: { hp: 236, atk: 36, def: 0, spa: 0, spd: 236, spe: 0 },
   ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
   level: 50
        },
        {
            name: "miraidon",
    species: "Miraidon",
       item: "Choice Specs",
  ability: "Hadron Engine",
        moves: ["voltswitch", "dazzlinggleam", "electrodrift", "dracometeor"],
            nature: "Modest",
         gender: "M",
     evs: { hp: 236, atk: 0, def: 52, spa: 124, spd: 68, spe: 28 },
          ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
            level: 50
        },
        {
            name: "ursaluna",
            species: "Ursaluna",
            item: "Flame Orb",
   ability: "Guts",
      moves: ["facade", "crunch", "headlongrush", "protect"],
            nature: "Adamant",
      gender: "M",
            evs: { hp: 108, atk: 156, def: 4, spa: 0, spd: 116, spe: 124 },
   ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
            level: 50
      },
        {
  name: "volcarona",
       species: "Volcarona",
            item: "Rocky Helmet",
            ability: "Flame Body",
          moves: ["strugglebug", "overheat", "protect", "tailwind"],
 nature: "Bold",
         gender: "M",
     evs: { hp: 252, atk: 0, def: 196, spa: 0, spd: 60, spe: 0 },
          ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
            level: 50
        },
        {
       name: "grimmsnarl",
  species: "Grimmsnarl",
   item: "Light Clay",
            ability: "Prankster",
    moves: ["spiritbreak", "thunderwave", "reflect", "lightscreen"],
    nature: "Careful",
            gender: "M",
     evs: { hp: 236, atk: 4, def: 140, spa: 0, spd: 116, spe: 12 },
 ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
   level: 50
        },
  {
       name: "ironhands",
            species: "Iron Hands",
    item: "Assault Vest",
            ability: "Quark Drive",
            moves: ["fakeout", "heavyslam", "lowkick", "wildcharge"],
          nature: "Adamant",
 gender: "M",
            evs: { hp: 236, atk: 0, def: 0, spa: 0, spd: 236, spe: 36 },
            ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
            level: 50
}
    ]
};

const p2Spec = {
    name: "Bot 2",
    team: [
        {
          name: "calyrex-ice",
    species: "Calyrex-Ice",
   item: "Leftovers",
            ability: "As One (Glastrier)",
            moves: ["glaciallance", "leechseed", "trickroom", "protect"],
      nature: "Adamant",
   gender: "M",
     evs: { hp: 236, atk: 36, def: 0, spa: 0, spd: 236, spe: 0 },
          ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
       level: 50
        },
      {
    name: "miraidon",
  species: "Miraidon",
  item: "Choice Specs",
        ability: "Hadron Engine",
     moves: ["voltswitch", "dazzlinggleam", "electrodrift", "dracometeor"],
          nature: "Modest",
            gender: "M",
    evs: { hp: 236, atk: 0, def: 52, spa: 124, spd: 68, spe: 28 },
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
 level: 50
        },
        {
         name: "ursaluna",
       species: "Ursaluna",
            item: "Flame Orb",
 ability: "Guts",
       moves: ["facade", "crunch", "headlongrush", "protect"],
     nature: "Adamant",
            gender: "M",
     evs: { hp: 108, atk: 156, def: 4, spa: 0, spd: 116, spe: 124 },
   ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
  level: 50
        },
        {
            name: "volcarona",
     species: "Volcarona",
          item: "Rocky Helmet",
 ability: "Flame Body",
            moves: ["strugglebug", "overheat", "protect", "tailwind"],
            nature: "Bold",
          gender: "M",
  evs: { hp: 252, atk: 0, def: 196, spa: 0, spd: 60, spe: 0 },
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
 level: 50
        },
        {
       name: "grimmsnarl",
 species: "Grimmsnarl",
            item: "Light Clay",
  ability: "Prankster",
       moves: ["spiritbreak", "thunderwave", "reflect", "lightscreen"],
            nature: "Careful",
      gender: "M",
        evs: { hp: 236, atk: 4, def: 140, spa: 0, spd: 116, spe: 12 },
            ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
            level: 50
  },
      {
    name: "ironhands",
            species: "Iron Hands",
          ability: "Quark Drive",
     item: "Assault Vest",
      moves: ["fakeout", "heavyslam", "lowkick", "wildcharge"],
          nature: "Adamant",
            gender: "M",
            evs: { hp: 236, atk: 0, def: 0, spa: 0, spd: 236, spe: 36 },
            ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
  level: 50
        }
    ]
};

stream.write(`>start ${JSON.stringify(spec)}`);
stream.write(`>player p1 ${JSON.stringify(p1Spec)}`);
stream.write(`>player p2 ${JSON.stringify(p2Spec)}`);
// Team preview - choose lead pokemon (1 and 6 for both players)
stream.write(`>p1 team 1234`);
stream.write(`>p2 team 1234`);
