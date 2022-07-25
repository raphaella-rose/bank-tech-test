class Withdraw {
  constructor(amount, currentBalance) {
    this.amount = amount;
    this.balance = currentBalance - this.amount;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }


  createStatement() {
    return {
      date: this.getDate(),
      credit: null,
      debit: this.amount,
      balance: this.balance,
    }
  }
}

module.exports = Withdraw;

// let newAmount = 0
// const date = new Date().toLocaleDateString();

// if ((this.balance - amount) < 0) {
//   newAmount = this.calculateWithdrawal(amount);
// } else {
//   newAmount = amount;
// }

// calculateWithdrawal(amount) {
//   let difference = amount - this.balance;
//   return amount - difference;
// }