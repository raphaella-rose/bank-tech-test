class Account {
  constructor() {
    this.balance = 0;
    this.statements = []
  }

  amountChecker(amount) {
    return amount
  }

  deposit(amount, action) {
    this.statements.unshift(action.deposit(amount, this.balance));
    this.balance = action.balance;
    return "Deposit successful"
  }
  
  withdraw(amount, action) {
    this.statements.unshift(action.withdraw(amount, this.balance));
    this.balance = action.balance;
  }

  printStatement(statementCreator) {
    if (this.statements == []) {
      throw 'Cannot create statement when no deposits/withdrawals have been made'
    }
    return statementCreator.createStatement(this.statements);
  }

}

module.exports = Account;