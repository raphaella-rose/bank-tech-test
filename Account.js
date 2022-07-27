const StatementCreator = require("./StatementCreator")

class Account {
  constructor() {
    this.balance = 0;
    this.statements = []
  }

  deposit(amount, action) {
    this.statements.unshift(action.deposit(amount, this.balance));
    this.balance = action.balance;
  }
  
  withdraw(amount, action) {
    this.statements.unshift(action.withdraw(amount, this.balance));
    this.balance = action.balance;
    
  }

  printStatement() {
    if (this.statements == []) {
      throw 'Cannot create statement when no deposits/withdrawals have been made'
    }
    const statementcreator = new StatementCreator();
    return statementcreator.createStatement(this.statements);
  }

}

module.exports = Account;