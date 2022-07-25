class Bank {
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    const date = new Date().toLocaleDateString();
    this.statement.unshift([date, amount, this.balance]);
  }

  withdraw(amount) {
    if (this.balance == 0) {
      null;
    } else {
      this.balance -= amount;
    }

  }

  seeStatement() {
    return this.statement;
  }
}

module.exports = Bank;