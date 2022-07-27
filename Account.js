const Withdraw = require("./Withdraw");
const Action = require("./Action");
const StatementCreator = require("./StatementCreator")

class Account {
  constructor() {
    this.balance = 0;
    this.statements = []
  }

  deposit(amount) {
    const deposit = new Action(amount, this.balance, 'deposit');
    this.statements.unshift(deposit.deposit());
    this.balance = deposit.balance;
  }
  
  withdraw(amount) {
    const withdraw = new Withdraw(amount, this.balance);
    withdraw.canWithdraw()
    this.balance = withdraw.balance;
    this.statements.unshift(withdraw.saveHistory());
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