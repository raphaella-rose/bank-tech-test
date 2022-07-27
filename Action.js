class Action {
  constructor(amount, balance) {
    this.amount = amount;
    this.balance = balance;
    this.action = "";
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  canWithdraw(balance) {
    if ((balance - this.amount) < 0 ) {
      this.amount = this.calculateWithdrawal(balance);
    } 
  }

  withdraw(amount, balance) {
    this.action = 'withdraw';
    this.amount = amount;
    this.canWithdraw(balance);
    this.balance = balance - this.amount;
    return this.saveHistory();
  }

  calculateWithdrawal(balance) {
    let difference = this.amount - balance;
    return this.amount - difference;
  }

  deposit(amount, balance) {
    this.action = 'deposit';
    this.amount = amount;
    this.balance = balance + amount;
    return this.saveHistory();
  }

  amendDepositHistory(history) {
    history.credit = this.amount;
    history.debit = null;
    return history;
  }

  amendWithdrawHistory(history) {
    history.credit = null;
    history.debit = this.amount;
    return history;
  }

  saveHistory() {
    let history = {
      date: this.getDate(),
      credit: 0,
      debit: 0,
      balance: this.balance,
    }
    if (this.action == 'deposit') {
     this.amendDepositHistory(history);
    } else {
      this.amendWithdrawHistory(history);
    }
    return history;
  }

}



module.exports = Action;