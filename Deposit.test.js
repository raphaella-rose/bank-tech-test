const Deposit = require("./Deposit");

describe(Deposit, () => {
  it("sets amount deposited", () => {
    const deposit = new Deposit(5);
  
    expect(deposit.amount).toBe(5);
  })
  
  // it("increases balance by 10 when deposit of 10 is made", () => {
  //   const deposit = new Deposit();
  
  //   deposit(10);
  
  //   expect(deposit.amount).toBe(10);
  // })
  
  // it("increases balance by 20 when deposit of 20 is made", () => {
  //   const deposit = new Deposit();
  
  //   deposit(20);
  
  //   expect(deposit.amount).toBe(20);
  // })
})

