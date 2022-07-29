const Account = require("./Account");
const Action = require("./Action");
const History = require("./History");
const StatementCreator = require("./StatementCreator");
const statementCreator = require("./StatementCreator");

describe("Bank Integration", () => {
  const date = new Date().toLocaleDateString();

  it("allows user to make a deposit", () => {
    const account = new Account(); 
    const action = new Action();

    expect(account.deposit(20, action)).toBe("Deposit successful")
  })

  it("allows user to make a withdrawal", () => {
    const account = new Account(); 
    const action = new Action();

    account.deposit(20, action)

    expect(account.withdraw(20, action)).toBe("Withdrawal successful")
  })

  it("doesn't allow user to withdraw money they don't have", () => {
    const account = new Account(); 
    const action = new Action();

    account.deposit(20, action)

    expect(account.withdraw(30, action)).toBe("Withdrawal successful")
  })

  it("prints statement for a withdrawal", () => {
    const account = new Account(); 
    const action = new Action();
    const statementCreator = new StatementCreator();

    account.deposit(20, action)

    expect(account.printStatement(statementCreator)).toBe(`date || credit || debit || balance\n${date} || 20.00 || || 20.00\n`)
  })

})