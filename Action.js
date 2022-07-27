//class(amount, currentBalance, actionName)
class Action {

  constructor(amount, balance, action) {
    this.action = action;
  }
  updateBalance() {
    if (this.action == 'deposit') {
      return 10;
    } else {
      return 5
    }
    
  }
}
//get date


//save history

//can withdraw

//calculate withdrawal

module.exports = Action;