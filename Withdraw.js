class Withdraw {
  constructor(amount) {
    this.amount = amount;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }
}

module.exports = Withdraw;