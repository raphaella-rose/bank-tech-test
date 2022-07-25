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

  it("returns empty array when no deposits have been made", () => {
    const account = new Bank();

    expect(account.seeStatement()).toEqual([]);
  })

  it("stores the amount for a single deposit made", () => {
    const account = new Bank();
    account.deposit(10);
    const date = new Date().toLocaleDateString();

    expect(account.seeStatement()).toEqual([[date, 10, 10]])
  })

  it("stores the balance for a single deposit made", () => {
    const account = new Bank();
    account.deposit(10);
    const date = new Date().toLocaleDateString();

    expect(account.seeStatement()).toEqual([[date, 10, 10]])
  })

  it("stores the date for a single deposit in format dd/mm/yyy", () => {
    const account = new Bank();
    account.deposit(10);
    const date = new Date().toLocaleDateString();

    expect(account.seeStatement()).toEqual([[date, 10, 10]])
  })

  it("allows the user to make a withdrawal of 5", () => {
    const account = new Bank();
    account.deposit(10);
    account.withdraw(5);
    
    expect(account.showBalance()).toBe(5);
  })

  it("allows the user to make a withdrawal of 10", () => {
    const account = new Bank();
    account.deposit(10);
    account.withdraw(10);
    
    expect(account.showBalance()).toBe(0);
  })

  it("user cannot withdraw money when balance is 0", () => {
    const account = new Bank();
    account.withdraw(5);

    expect(account.showBalance()).toBe(0);
  })

  it("only lets the user withdraw what they have", () => {
    const account = new Bank();
    account.deposit(10);
    account.withdraw(15);

    expect(account.showBalance()).toBe(0);
  })

})