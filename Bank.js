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
    let newAmount = 0
    
    if ((this.balance - amount) < 0) {
      newAmount = this.calculateWithdrawal(amount);
    } else {
      newAmount = amount;
    }

    this.balance -= newAmount;
    this.statement.unshift([newAmount])
    
    
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