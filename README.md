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