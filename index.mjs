import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
const isAnna = await ask.ask(
  `Are you Anna?`,
  ask.yesno
);
const who = isAnna ? 'Anna' : 'Jack';
console.log(`Starting Morra! as ${who}`);
let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(
    `What is your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}
let ctc = null;
if (isAnna) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const before = await getBalance();
console.log(`Your balance is ${before}`);
const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

if (isAnna) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}
const HAND = [0, 1, 2, 3, 4, 5];

interact.getHand = async () => {
  const hand = await ask.ask(`How many fingers will you show (1-5)?`, (x) => {
    const hand = HAND[x];
     if ( hand === undefined || hand==0 ) {
      throw Error(`Not a valid hand ${hand}`);
     }
    return hand;
  });
  console.log(`You played ${HAND[hand]} fingers`);
  return hand;
};

const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interact.getGuess = async () => {
  const guess = await ask.ask(`Guess how many fingers total there are (2-10)?`, (x) => {
    const guess = GUESS[x];
     if ( guess === undefined || guess==0 || guess==1 ) {
      throw Error(`Not a valid hand ${hand}`);
     }
    return guess;
  });
  console.log(`You guessed ${GUESS[guess]} fingers`);
  return guess;
};

const OUTCOME = ['Jack wins', 'Draw', 'Anna wins'];
interact.seeOutcome = async (outcome) => {
  console.log(`The outcome is: ${OUTCOME[outcome]}`);
};
const part = isAnna ? ctc.p.Anna : ctc.p.Jack;
await part(interact);
const after = await getBalance();
console.log(`Your balance is now ${after}`);
ask.done();

console.log('Goodbye, Anna and Jack!');
