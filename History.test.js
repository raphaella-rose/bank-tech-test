const History = require("./History");

describe(History, () => {
  const date = new Date().toLocaleDateString();

  it("creates history for a deposit", () => {
    const history = new History();

    expect(history.returnHistory(10, 10, 'deposit')).toEqual({
      date: date,
      credit: 10,
      debit: null,
      balance: 10,
    })
  })

  it("gets date of action", () => {
    const history = new History();

    expect(history.getDate()).toBe(date);
  })

  it("creates history for a withdrawal", () => {
    const history = new History();

    expect(history.returnHistory(10, 0, 'withdraw')).toEqual({
      date: date,
      credit: null,
      debit: 10,
      balance: 0,  
    })
  })
})