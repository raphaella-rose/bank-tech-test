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
    this.statement += `${deposit.date} || ${deposit.credit.toFixed(2)} || || ${deposit.balance.toFixed(2)}\n`;
  }

  withdrawalStatement(withdrawal) {
    this.statement +=  `${withdrawal.date} || || ${withdrawal.debit.toFixed(2)} || ${withdrawal.balance.toFixed(2)}\n`;
  }

}

module.exports = StatementCreator;