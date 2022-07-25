class Bank {
  constructor() {
    this.balance = 0;
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount == 5) {
      this.balance += 5
    } else {
      this.balance += 10
    }
    
  }
}

module.exports = Bank;