class Deposit {
  constructor(amount, currentBalance) {
    this.amount = amount;
    this.balance = currentBalance + this.amount;
  }

  getDate() {
    return new Date().toLocaleDateString();
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