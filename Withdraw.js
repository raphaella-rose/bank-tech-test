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

  createStatement() {
    return {
      date: this.getDate(),
      credit: null,
      debit: this.amount,
      balance: this.balance,
    }
  }
}

module.exports = Withdraw;