function PigDice(totalScore, turnTotal, activePlayer, roll, hold) {
  this.totalScore = totalScore;
  this.turnTotal = turnTotal;
  this.activePlayer = activePlayer;
  this.roll = roll;
  this.hold = hold;
}
PigDice.prototype.changeTurn = function () {
  this.turnTotal = 0;
  this.activePlayer = this.activePlayer === 0 ? 1 : 0;
};
PigDice.prototype.rollDice = function () {
  this.roll = Math.floor(Math.random() * 6) + 1;
  if (this.roll === 1) {
    this.changeTurn();
  } else {
    this.turnTotal += this.roll;
  }
};

