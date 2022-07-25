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

    deposit.updateBalance(0);

    expect(deposit.balance).toBe(5);
  })

  it("creates statement for deposit", () => {
    const deposit = new Deposit(5);
    const date = new Date().toLocaleDateString();

    deposit.updateBalance(0)
    const statement = deposit.createStatement();

    expect(statement).toEqual({
      date: date,
      credit: 5,
      debit: null,
      balance: 5,
    })
  })
 
})

