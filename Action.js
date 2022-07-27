//class(amount, currentBalance, actionName)
class Action {
  constructor(amount, balance, action) {
    this.amount = amount;
    this.balance = balance + amount;
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

  saveHistory() {
    return {
      date: this.getDate(),
      credit: this.amount,
      debit: null,
      balance: this.balance,
    }
  }
}



//save history

//can withdraw

//calculate withdrawal

module.exports = Action;