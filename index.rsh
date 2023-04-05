'reach 0.1';

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

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
    
    
  });
  const Jack   = Participant('Jack', {
    ...Player,
   
  });
  init();



  
    

 

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
      
    

commit();
const outcome = winner(handAnna, handJack, guessAnna, guessJack);
  each([Anna, Jack], () => {
    interact.seeOutcome(outcome); //Showing outcome for each
  });
});
