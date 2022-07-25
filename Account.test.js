const Account = require("./Account");

describe(Account, () => {
  it("initializes a account account with a balance of 0", () => {
    const account = new Account();

    expect(account.balance).toBe(0);
  })

  it("returns empty array when no deposits have been made", () => {
    const account = new Account();

    expect(account.statements).toEqual([]);
  })

  it("allows user to make a deposit", () => {
    const account = new Account();
    const date = new Date().toLocaleDateString();

    account.deposit(20);

    expect(account.balance).toBe(20);
    expect(account.statements).toEqual([{ 
      date: date,
      credit: 20,
      debit: null,
      balance: 20,
    }])
  })

  it("allows user to make a withdrawal", () => {
    const account = new Account();
    const date = new Date().toLocaleDateString();

    account.deposit(20)
    account.withdraw(10);

    expect(account.balance).toBe(10);
    expect(account.statements).toEqual([
    { date: date,
      credit: null,
      debit: 10,
      balance: 10,
    },
    { date: date,
      credit: 20,
      debit: null,
      balance: 20,
    }])
  })

  it("doesn't allow user to withdraw money they don't have", () => {
    const account = new Account();
    const date = new Date().toLocaleDateString();

    account.deposit(20)
    account.withdraw(30);

    expect(account.balance).toBe(0);
    expect(account.statements).toEqual([
    { date: date,
      credit: null,
      debit: 20,
      balance: 0,
    },
    { date: date,
      credit: 20,
      debit: null,
      balance: 20,
    }])
  })

  it("prints a statement for a deposit", () => {
    const account = new Account();
    const date = new Date().toLocaleDateString();

    account.deposit(1000);

    expect(account.printStatement()).toBe(`date || credit || debit || balance\n${date} || 1000.00 || || 1000.00\n`)
  })
})