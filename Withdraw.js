class Withdraw {
  constructor(amount) {
    this.amount = amount;
    this.balance = 0;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  updateBalance(currentBalance) {
    this.balance = currentBalance - this.amount;
  }
}

module.exports = Withdraw;