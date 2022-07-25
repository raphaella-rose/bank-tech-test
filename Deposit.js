class Deposit {
  constructor(amount, balance) {
    this.amount = amount;
    this.balance = balance;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  updateBalance(currentBalance) {
    return currentBalance + this.amount;
  }

}



module.exports = Deposit;