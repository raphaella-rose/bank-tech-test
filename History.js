class History {
  constructor() {
    this.historyTemplate = {
      date: this.getDate(),
      credit: 0,
      debit: 0,
      balance: 0,
    }
    this.amount = 0
  }

  amendDepositHistory() {
    this.historyTemplate.credit = this.amount;
    this.historyTemplate.debit = null;
  }

  amendWithdrawHistory() {
    this.historyTemplate.credit = null;
    this.historyTemplate.debit = this.amount;
  }

  returnHistory(amount, balance, action) {
    this.historyTemplate.balance = balance;
    this.amount = amount;
    if (action == 'deposit') {
      this.amendDepositHistory();
     } else {
       this.amendWithdrawHistory();
     }
    return this.historyTemplate;
    
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

}

module.exports = History;