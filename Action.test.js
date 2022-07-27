const Action = require("./Action");

describe(Action, () => {
  it("updates balance after deposit", () => {
    const action = new Action(10, 0, 'deposit');

    expect(action.updateBalance()).toBe(10);
  })

  it("updates balance after withdrawal", () => {
    const action = new Action(10, 15, 'withdrawal');

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

    const history = action.saveHistory();

    expect(history).toEqual({
      date: date,
      credit: 5,
      debit: null,
      balance: 5,
    })
  })
})