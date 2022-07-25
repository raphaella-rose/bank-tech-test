class Bank {
  constructor() {
    this.balance = 0;
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  seeStatement() {
    return [30, 5]
  }
}

module.exports = Bank;