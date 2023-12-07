## Tests
Describe: PigDice();
Test: "create constructor function with properties totalScore, turnTotal, activePlayer, roll, and hold"
code: const player1 = new PigDice(0, 0, "player1", 6, true);
      player1;
Output: PigDice{totalScore: 0, turnTotal: 0, activePlayer: "player1", roll: 6, hold: true}

Describe: changeTurn();
Test: "should set the turnTotal to 0 and switch to next players turn"
code: const testGame = new PigDice();
      testGame.turnTotal = 6;
      testGame.activePlayer = 0;
      testGame.changeTurn();
Output: testGame.turnTotal = 0; 
        testGame.activePlayer = 1;

Describe: rollDice();
Test: "should generate a random number between 1 and 6 (inclusive on both ends) and add each number rolled to turnTotal. If a 1 is rolled, reset turnTotal to 0"
code: testGame.rollDice();
      testGame.roll; >1
Output: turnTotal = 0;

Describe: hold();
Test: "should keep the active player's turn total and switch active player"
code: active player=0;
      roll = 6;
      turnTotal = 6; 
      testGame.hold();
      active player = 1 
