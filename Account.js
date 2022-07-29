class Account {
  constructor() {
    this.balance = 0;
    this.statements = []
  }

  amountChecker(amount) {
    if (typeof amount == "string") {
      return Number(amount);
    }
    return amount
  }

  deposit(amount, action) {
    this.statements.unshift(action.deposit(this.amountChecker(amount), this.balance));
    this.balance = action.balance;
    return "Deposit successful"
  }
  
  withdraw(amount, action) {
    this.statements.unshift(action.withdraw(amount, this.balance));
    this.balance = action.balance;
    return "Withdrawal successful"
  }

  printStatement(statementCreator) {
    if (this.statements == []) {
      throw 'Cannot create statement when no deposits/withdrawals have been made'
    }
    return statementCreator.createStatement(this.statements);
  }

}

module.exports = Account;