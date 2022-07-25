class Bank {
  constructor() {
    this.balance = 0;
    this.statement = []
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
    let statement = "date || credit || debit || balance\n"
    this.statement.forEach((action) => {
      if (action.debit == null) {
        statement += `${action.date} || ${action.credit}.00 || || ${action.balance}.00\n`
      } else {
        statement += `${action.date} || || ${action.debit}.00 || ${action.balance}.00\n`
      }
    })
    return statement;
  }

  calculateWithdrawal(amount) {
    let difference = amount - this.balance;
    return amount - difference;
  }
}

module.exports = Bank;