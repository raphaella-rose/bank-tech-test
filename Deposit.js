class Deposit {
  constructor(amount, balance) {
    this.amount = amount;
    this.balance = balance;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  updateBalance(currentBalance) {
    this.balance = currentBalance + this.amount;
  }

  createStatement() {
    return {
      date: this.getDate(),
      credit: this.amount,
      debit: null,
      balance: this.balance,
    }
  }

}



module.exports = Deposit;