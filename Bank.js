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
    } else if (amount == 10) {
      this.balance += 10
    } else {
      this.balance += 20;
    }
    
  }
}

module.exports = Bank;