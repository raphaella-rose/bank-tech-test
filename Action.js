//class(amount, currentBalance, actionName)
class Action {
  constructor(amount, balance, action) {
    this.amount = amount;
    this.balance = balance;
    this.action = action;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  withdraw() {
    if ((this.balance - this.amount) < 0 ) {
      this.amount = this.calculateWithdrawal();
    } 
    this.balance -= this.amount;
    return this.saveHistory();
  }

  calculateWithdrawal() {
    let difference = this.amount - this.balance;
    return this.amount - difference;
  }

  deposit() {
    this.balance += this.amount;
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