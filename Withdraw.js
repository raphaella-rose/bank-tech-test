class Withdraw {
  constructor(amount, currentBalance) {
    this.amount = amount;
    this.currentBalance = currentBalance;
    this.balance = this.currentBalance - this.amount;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  canWithdraw() {
    if ((this.currentBalance - this.amount) < 0 ) {
      this.amount = this.calculateWithdrawal();
    } 
    this.balance = this.currentBalance - this.amount;
  }

  calculateWithdrawal() {
    let difference = this.amount - this.currentBalance;
    return this.amount - difference;
  }

  saveHistory() {
    return {
      date: this.getDate(),
      credit: null,
      debit: this.amount,
      balance: this.balance,
    }
  }
}

module.exports = Withdraw;



