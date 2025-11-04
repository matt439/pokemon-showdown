const {BattleStream, getPlayerStreams} = require('./dist/sim/battle-stream');
const RandomPlayerAI = require('./dist/sim/tools/random-player-ai').RandomPlayerAI;

(async () => {
    const streams = getPlayerStreams(new BattleStream());

    const spec = {formatid: "gen9customgame"};
  const p1spec = {name: "Bot 1", team: 'Calyrex-Ice||glaciallance,leechseed,trickroom,protect||H|85,85,85,85,85,85|N||||100|,Miraidon||electrodr ift,dazzlinggleam,dracometer,voltswitch||H|85,85,85,85,85,85|N||||100|'};
    const p2spec = {name: "Bot 2", team: 'Zacian||crunch,facade,headlongrush,heavyslam||H|85,85,85,85,85,85|N||||100|,Rillaboom||lowkick,overheat,spiritbreak,strugglebug||H|85,85,85,85,85,85|N||||100|'};

    const p1 = new RandomPlayerAI(streams.p1);
    const p2 = new RandomPlayerAI(streams.p2);

    void p1.start();
  void p2.start();

    void streams.omniscient.write(`>start ${JSON.stringify(spec)}
>player p1 ${JSON.stringify(p1spec)}
>player p2 ${JSON.stringify(p2spec)}`);

    for await (const chunk of streams.omniscient) {
        console.log(chunk);
    }
})().catch(err => {
    console.error(err);
});
