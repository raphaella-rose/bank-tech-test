const History = require("./History");

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
    const history = new History();
    history.returnHistory(this.amount, this.balance, this.action);
    let historyData = {
      date: this.getDate(),
      credit: 0,
      debit: 0,
      balance: this.balance,
    }
    if (this.action == 'deposit') {
     this.amendDepositHistory(historyData);
    } else {
      this.amendWithdrawHistory(historyData);
    }
    return historyData;
  }

}



module.exports = Action;