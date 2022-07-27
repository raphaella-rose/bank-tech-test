const History = require("./History");

describe(History, () => {
  it("creates history for deposit", () => {
    const date = new Date().toLocaleDateString();
    const history = new History();

    expect(history.returnHistory()).toEqual({
      date: date,
      credit: null,
      debit: 10,
      balance: 0,
    })
  })
})