const Deposit = require("./Deposit");
const Withdraw = require("./Withdraw");
const StatementCreator = require("./StatementCreator")

class Account {
  constructor() {
    this.balance = 0;
    this.statements = []
  }

  deposit(amount) {
    const deposit = new Deposit(amount, this.balance);
    this.balance = deposit.balance;
    this.statements.unshift(deposit.saveHistory());
    
  }
  
  withdraw(amount) {
    const withdraw = new Withdraw(amount, this.balance);
    withdraw.canWithdraw()
    this.balance = withdraw.balance;
    this.statements.unshift(withdraw.saveHistory());
  }

  printStatement() {
    const statementcreator = new StatementCreator();
    return statementcreator.createStatement(this.statements);
  }

}

module.exports = Account;