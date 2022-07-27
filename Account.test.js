const Account = require("./Account");

describe(Account, () => {
  const date = new Date().toLocaleDateString();

  const deposit = jest.fn();
  deposit.mockReturnValue({ date: date, credit: 20, debit: null, balance: 20 });
  const withdraw = jest.fn();
  withdraw.mockReturnValue({ date: date, credit: null, debit: 10, balance: 10 });


  it("returns an error when createStatement is called on empty array", () => {
    const account = new Account();

    expect(() => {
      account.printStatement().toThrow('Cannot create statement when no deposits/withdrawals have been made');
    })
  })

  it("allows user to make a deposit", () => {
    const account = new Account();
    const actionDouble = { deposit, withdraw, balance: 20};

    account.deposit(20, actionDouble);

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
    const actionDouble = { deposit, withdraw, balance: 10};

    account.deposit(20, actionDouble)
    account.withdraw(10, actionDouble);

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
    deposit.mockReturnValue({ date: date, credit: 20, debit: null, balance: 20 });
    withdraw.mockReturnValue({ date: date, credit: null, debit: 20, balance: 0 });

    const actionOverdraftDouble = { deposit, withdraw, balance: 0};

    account.deposit(20, actionOverdraftDouble)
    account.withdraw(30, actionOverdraftDouble);

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
    const actionDouble = { deposit, withdraw, balance: 20};

    account.deposit(20, actionDouble);

    expect(account.printStatement()).toBe(`date || credit || debit || balance\n${date} || 20.00 || || 20.00\n`)
  })
})