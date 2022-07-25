const Deposit = require("./Deposit");

describe(Deposit, () => {
  it("sets amount deposited", () => {
    const deposit = new Deposit(5);
  
    expect(deposit.amount).toBe(5);
  })
  
  it("gets date of deposit", () => {
    const deposit = new Deposit(5);
    const date = new Date().toLocaleDateString();

    expect(deposit.getDate()).toBe(date);
  })

  it("updates balance", () => {
    const deposit = new Deposit(5);

    const balance = deposit.updateBalance(0);

    expect(balance).toBe(5);
  })

 //updates account balance
 //creates statement for deposit
})

