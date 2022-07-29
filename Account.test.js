const Account = require("./Account");

describe(Account, () => {
  const date = new Date().toLocaleDateString();

  it("returns an error when createStatement is called on empty array", () => {
    const account = new Account();

    expect(() => {
      account.printStatement().toThrow('Cannot create statement when no deposits/withdrawals have been made');
    })
  })

  it("allows user to make a deposit", () => {
    const account = new Account();
    const actionDouble = { deposit: () => ({ date: date, credit: 20, debit: null, balance: 20 }), withdraw: () => ({ date: date, credit: null, debit: 10, balance: 10 }), balance: 20};

   
    expect(account.deposit(20, actionDouble)).toBe("Deposit successful")
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
    const actionDouble = { deposit: () => ({ date: date, credit: 20, debit: null, balance: 20 }), withdraw: () => ({ date: date, credit: null, debit: 10, balance: 10 }), balance: 10};

    account.deposit(20, actionDouble)

    expect(account.withdraw(10, actionDouble)).toBe("Withdrawal successful")
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

    const actionOverdraftDouble = { deposit: () => ({ date: date, credit: 20, debit: null, balance: 20 }), withdraw: () => ({ date: date, credit: null, debit: 20, balance: 0 }), balance: 0};

    account.deposit(20, actionOverdraftDouble)
 
    expect(account.withdraw(30, actionOverdraftDouble)).toBe("Withdrawal successful")
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
    const actionDouble = { deposit: () => ({ date: date, credit: 20, debit: null, balance: 20 }), withdraw: () => ({ date: date, credit: null, debit: 10, balance: 10 }), balance: 20};
    const statementCreatorDouble = {createStatement: () => `date || credit || debit || balance\n${date} || 20.00 || || 20.00\n`};

    account.deposit(20, actionDouble);

    expect(account.printStatement(statementCreatorDouble)).toBe(`date || credit || debit || balance\n${date} || 20.00 || || 20.00\n`)
  })

  it("prints a statement for a withdrawal", () => {
    const account = new Account();
    const actionDouble1 = { deposit: () => ({ date: date, credit: 20, debit: null, balance: 20 }), withdraw: () => ({ date: date, credit: null, debit: 10, balance: 10 }), balance: 20};
    const actionDouble2 = { deposit: () => ({ date: date, credit: 20, debit: null, balance: 20 }), withdraw: () => ({ date: date, credit: null, debit: 10, balance: 10 }), balance: 10};
    const statementCreatorDouble = {createStatement: () => `date || credit || debit || balance\n${date} || || 10.00 || 10.00\n${date} || 20.00 || || 20.00\n`};


    account.deposit(20, actionDouble1);
    account.withdraw(10, actionDouble2)

    expect(account.printStatement(statementCreatorDouble)).toBe(`date || credit || debit || balance\n${date} || || 10.00 || 10.00\n${date} || 20.00 || || 20.00\n`)
  })

  it("returns amount entry if it is a number", () => {
    const account = new Account(); 

    const amountChecker = account.amountChecker(20)

    expect(typeof amountChecker).toBe("number")

  })
})