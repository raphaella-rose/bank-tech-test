const Account = require("./Account");
const Action = require("./Action");
const History = require("./History");
const statementCreator = require("./StatementCreator");

describe("Bank Integration", () => {
  it("allows user to make a deposit", () => {
    const account = new Account(); 
    const action = new Action();

    expect(account.deposit(20, action)).toBe("Deposit successful")
  })
})