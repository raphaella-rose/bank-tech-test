class History {

  returnHistory(amount, balance) {
    return {
      date: '28/07/2022',
      credit: 10,
      debit: null,
      balance: 10,
    }
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

}

module.exports = History;