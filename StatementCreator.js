class StatementCreator  {
  constructor() {
    this.statement = "date || credit || debit || balance\n";
  }

  createStatement(statements) {
    statements.forEach(action => {
      this.isDeposit(action);
      this.isWithdrawal(action);
    });
    return this.statement;
  }

  isDeposit(action) {
    if (action.debit == null) {
      this.depositStatement(action);
    }
  }

  isWithdrawal(action) {
    if (action.credit == null) {
      this.withdrawalStatement(action);
    }
  }

  depositStatement(deposit) {
    this.statement += `${deposit.date} || ${deposit.credit}.00 || || ${deposit.balance}.00\n`;
  }

  withdrawalStatement(withdrawal) {
    this.statement +=  `${withdrawal.date} || || ${withdrawal.debit}.00 || ${withdrawal.balance}.00\n`;
  }

}

module.exports = StatementCreator;