'reach 0.1';

const [ isOutcome, J_WINS, DRAW, A_WINS ] = makeEnum(3);

function winner(handAnna, handJack, guessAnna, guessJack) {
  const sum=handAnna+handJack;
if (sum== guessAnna){
  if(sum==guessJack){
    return 1;
  }else{
    return 2;
  }
}else{
  if(sum==guessJack){
    return 0;
  }else{
    return 1;
  }
}


}
  

const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  getGuess: Fun([],UInt),
  seeOutcome: Fun([UInt], Null),
 
};

export const main = Reach.App(() => {
  const Anna = Participant('Anna', {
    ...Player,
    wager: UInt, // atomic units of currency
    
  });
  const Jack   = Participant('Jack', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();



  Anna.only(() => {
    const wager = declassify(interact.wager);
    
  });
  Anna.publish(wager)  //Anna is paying the wager and publishing a deadline
    .pay(wager);
  commit();

  Jack.only(() => {
    interact.acceptWager(wager); //Jack accepts wager
  });
  Jack.pay(wager);
    

  var outcome = DRAW;    //Outcome variable which is equals to DRAW 
  invariant( balance() == 2 * wager && isOutcome(outcome) ); //Condition which has to be truth and it is not changing before, in nor after loop

  while ( outcome == DRAW ) {   //While loop - Looping as long as variable outcome is equal DRAW
    commit(); //Moving from consensus to local step

    Anna.only(() => {      
      const _handAnna = interact.getHand();  //What Anna showed
      const [_commitAnna, _saltAnna] = makeCommitment(interact, _handAnna); //Unique relationship between value and commitment
      const commitAnna = declassify(_commitAnna); //What Anna showed is still hidden, only the commitment is revealed
      const guessAnna= declassify(interact.getGuess());
    
    }); 
    Anna.publish(commitAnna,guessAnna); 
    commit();

    unknowable(Jack, Anna(_handAnna, _saltAnna)); //Now we know that Jack can't know what private value Anna showed
    Jack.only(() => {
      const handJack = declassify(interact.getHand());
      const guessJack = declassify(interact.getGuess());
    });
    Jack.publish(handJack, guessJack); 
    commit();

    Anna.only(() => {    //Now we can reveal Annas values
      const saltAnna = declassify(_saltAnna); 
      const handAnna = declassify(_handAnna);
      
    });
    Anna.publish(saltAnna,handAnna);
    checkCommitment(commitAnna, saltAnna, handAnna);   //Anna is publishing info so we can use them
      
     //Checking if Anna tried to change what she showed at the begining
    
  outcome = winner(handAnna, handJack, guessAnna, guessJack);   //Updating value of loop variable outcome (we are sending values to function Winner, which returns outcome)
  continue;   //Reach requires continue for WHILE loops (returning to loop condition)
}   //End of loop

assert(outcome == A_WINS || outcome == J_WINS);   //Checking if outcome is Anna won or Jack won
transfer(2 * wager).to(outcome == A_WINS ? Anna : Jack);  //Transfer of a wager to the winner
commit();

  each([Anna, Jack], () => {
    interact.seeOutcome(outcome); //Showing outcome for each
  });
});

