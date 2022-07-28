const History = require("./History");

describe(History, () => {
  const date = new Date().toLocaleDateString();

  it("creates history for a deposit", () => {
    const history = new History();

    expect(history.returnHistory(10, 10)).toEqual({
      date: date,
      credit: 10,
      debit: null,
      balance: 10,
    })
  })
})