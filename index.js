const argv = require('yargs').argv;
const RUN_COUNT = argv.run_count || 100;
const HOST_KNOWS_ANSWER = argv.host_knows_answer === 'true';
const CONTESTANT_SWITCHES = argv.contestant_switches === 'true';
const create_doors = require('./lib/doors.js');
const create_contestant = require('./lib/contestant.js');
const create_host = require('./lib/host.js');
const did_contestant_win = require('./lib/did_contestant_win.js');

let rcount = 0;
let wins = 0;

const play_game = () => {
  let doors = create_doors();
  let contestant = create_contestant();
  let host = create_host(HOST_KNOWS_ANSWER);

  contestant.select(doors);
  host.open(doors);

  if (CONTESTANT_SWITCHES) {
    contestant.switch(doors);
  }

  return did_contestant_win(doors);
}

do {
  var contestant_won = play_game();

  if (contestant_won) {
    ++wins;
  }

} while (++rcount < RUN_COUNT)


console.log(`runs: ${rcount}`);
console.log(`wins: ${wins}`);
console.log(`winning percentage: ${wins/rcount * 100}%`);

// timeout to let console buffer flush.
setTimeout(() => {
  process.exit();
}, 200);