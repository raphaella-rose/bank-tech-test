//class(amount, currentBalance, actionName)
class Action {
  constructor(amount, balance, action) {
    this.amount = amount;
    this.balance = balance;
    this.action = action;
  }

  updateBalance() {
    if (this.action == 'deposit') {
      return 10;
    } else {
      return 5
    }
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  withdraw() {
    this.balance -= this.amount;
    return this.saveHistory();
  }

  deposit() {
    this.balance += this.amount;
    return this.saveHistory();
  }
  saveHistory() {
    if (this.action == 'deposit') {
      return {
        date: this.getDate(),
        credit: this.amount,
        debit: null,
        balance: this.balance,
      }
    } else {
      return {
        date: this.getDate(),
        credit: null,
        debit: this.amount,
        balance: this.balance,
      }
    }
   
  }
}


//can withdraw

//calculate withdrawal

module.exports = Action;