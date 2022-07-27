const Action = require("./Action");

describe(Action, () => {
  it("updates balance after deposit", () => {
    const action = new Action(10, 0, 'deposit');

    expect(action.updateBalance()).toBe(10);
  })

  it("updates balance after withdrawal", () => {
    const action = new Action(10, 15, 'withdraw');

    expect(action.updateBalance()).toBe(5);
  })

  it("gets date of action", () => {
    const action = new Action(10, 0, 'deposit');
    const date = new Date().toLocaleDateString();

    expect(action.getDate()).toBe(date);
  })

  it("creates statement for deposit", () => {
    const action = new Action(5, 0, 'deposit');
    const date = new Date().toLocaleDateString();

    const deposit = action.deposit();

    expect(deposit).toEqual({
      date: date,
      credit: 5,
      debit: null,
      balance: 5,
    })
  })

  it("creates statement for withdrawal", () => {
    const action = new Action(10, 10, 'withdraw');
    const date = new Date().toLocaleDateString();

    const withdraw = action.withdraw();

    expect(withdraw).toEqual({
      date: date,
      credit: null,
      debit: 10,
      balance: 0,
    })
  })  

  it("doesn't allow user to withdraw money they don't have", () => {
    const action = new Action(30, 20, 'withdraw');
    const date = new Date().toLocaleDateString();

    const withdraw = action.withdraw();

    expect(action.balance).toBe(0);
    expect(withdraw).toEqual(
    { date: date,
      credit: null,
      debit: 20,
      balance: 0,
     }
    )
  })
})