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
    const deposit = new Deposit(5, 0);

    expect(deposit.balance).toBe(5);
  })

  it("creates statement for deposit", () => {
    const deposit = new Deposit(5, 0);
    const date = new Date().toLocaleDateString();
    
    const statement = deposit.createStatement();

    expect(statement).toEqual({
      date: date,
      credit: 5,
      debit: null,
      balance: 5,
    })
  })
 
})

