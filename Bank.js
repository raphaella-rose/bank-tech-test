class Bank {
  constructor() {
    this.balance = 0;
    this.statement = []
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    const date = new Date().toLocaleDateString();

    this.balance += amount;
    this.statement.unshift({
      date: date,
      credit: amount,
      debit: null,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    let newAmount = 0
    const date = new Date().toLocaleDateString();

    if ((this.balance - amount) < 0) {
      newAmount = this.calculateWithdrawal(amount);
    } else {
      newAmount = amount;
    }

    this.balance -= newAmount;
    this.statement.unshift({
      date: date,
      credit: null,
      debit: newAmount,
      balance: this.balance,
    })
    
  }

  seeStatement() {
    let statement = "date || credit || debit || balance"
  }

  calculateWithdrawal(amount) {
    let difference = amount - this.balance;
    return amount - difference;
  }
}

module.exports = Bank;