## Tests
Describe: PigDice();
Test: "create constructor function with properties totalScore, turnTotal, activePlayer, roll, and hold"
code: const player1 = new PigDice(0, 0, "player1", 6, true);
      player1;
Output: PigDice{totalScore: 0, turnTotal: 0, activePlayer: "player1", roll: 6, hold: true}

