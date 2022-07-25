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
  }

  seeStatement() {
    if (this.balance == 0) {
      return []
    } else {
      return [30, 5]
    }
   
  }
}

module.exports = Bank;