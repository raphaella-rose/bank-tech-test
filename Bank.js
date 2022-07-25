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
    this.statement.unshift(amount);
  }

  seeStatement() {
    return this.statement;
  
  }
}

module.exports = Bank;