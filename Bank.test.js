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

    expect(account.statement).toEqual([]);
  })

  it("stores the amount, date (dd/mm/yyy) and balance for a single deposit made", () => {
    const account = new Bank();
    const date = new Date().toLocaleDateString();

    account.deposit(10);
   
    expect(account.statement).toEqual([
      { date: date,
        credit: 10,
        debit: null,
        balance: 10,
      },
    ])
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

  it("shows a withdrawal amount, date (dd/mm/yyy), balance on statement", () => {
    const account = new Bank();
    const date = new Date().toLocaleDateString();

    account.deposit(10);
    account.withdraw(10);

    expect(account.statement).toEqual([
      { date: date,
        credit: null,
        debit: 10,
        balance: 0,
      },
      { date: date,
        credit: 10,
        debit: null,
        balance: 10,
      },
    ])
  })

  it("prints single deposit statement in correct format", () => {
    const account = new Bank();
    const date = new Date().toLocaleDateString();

    account.deposit(1000);

    expect(account.seeStatement()).toBe(`date || credit || debit || balance\n${date} || 1000.00 || || 1000.00\n`)
  })

  it("prints mixed statement in correct format", () => {
    const account = new Bank();
    const date = new Date().toLocaleDateString();

    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    
    expect(account.seeStatement()).toBe(
      `date || credit || debit || balance\n${date} || || 500.00 || 2500.00\n${date} || 2000.00 || || 3000.00\n${date} || 1000.00 || || 1000.00\n`)
  })

})

