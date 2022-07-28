const History = require("./History");

class Action {
  constructor(amount, balance) {
    this.amount = amount;
    this.balance = balance;
    this.action = "";
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

  saveHistory() {
    const history = new History();
    const actionHistory = history.returnHistory(this.amount, this.balance, this.action);

    return actionHistory;
  }

}



module.exports = Action;