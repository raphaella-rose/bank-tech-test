const Bank = require("./Bank")

describe(Bank, () => {
  it("initializes a bank account with a balance of 0", () => {
    const account = new Bank();

    expect(account.showBalance()).toBe(0);
  })

  it("increases balance by 5 when deposit of 5 is made", () => {
    const account = new Bank();
    account.deposit(5);

    expect(account.showBalance()).toBe(5);
  })

  it("increases balance by 10 when deposit of 10 is made", () => {
    const account = new Bank();
    account.deposit(10);

    expect(account.showBalance()).toBe(10);
  })

  it("increases balance by 20 when deposit of 20 is made", () => {
    const account = new Bank();
    account.deposit(20);

    expect(account.showBalance()).toBe(20);
  })

  it("stores deposit history", () => {
    const account = new Bank();
    account.deposit(5);
    account.deposit(30);

    expect(account.seeStatement()).toEqual([30, 5])
  })
})