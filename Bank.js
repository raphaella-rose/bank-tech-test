class Bank {
  constructor() {
    this.balance = 0;
  }

  showBalance() {
    return this.balance;
  }

  deposit() {
    this.balance += 5
  }
}

module.exports = Bank;