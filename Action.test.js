const Action = require("./Action");

describe(Action, () => {
  it("updates balance after deposit", () => {
    const action = new Action(10, 0, 'deposit');

    expect(action.updateBalance()).toBe(10);
  })
})