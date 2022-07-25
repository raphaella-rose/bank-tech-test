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
    if ((this.balance - amount) < 0) {
      this.balance -= this.calculateWithdrawal(amount)
      this.statement.unshift([this.calculateWithdrawal(amount)])
    } else {
      this.balance -= amount;
      this.statement.unshift([amount])
    }
    
  }

  seeStatement() {
    return this.statement;
  }

  calculateWithdrawal(amount) {
    let difference = amount - this.balance;
    return amount - difference;
  }
}

module.exports = Bank;