class Deposit {
  constructor(amount) {
    this.amount = amount;
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

 
}



module.exports = Deposit;