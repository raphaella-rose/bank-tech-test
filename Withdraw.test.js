const Withdraw = require("./Withdraw");

describe(Withdraw, () => {
  it("sets amount withdrawn", () => {
    const withdraw = new Withdraw(5);

    expect(withdraw.amount).toBe(5)
  })

  it("gets date of withdrawal", () => {
    const withdraw = new Withdraw(5);
    const date = new Date().toLocaleDateString();

    expect(withdraw.getDate()).toBe(date);
  })

  it("updates balance after withdrawal", () => {
    const withdraw = new Withdraw(5, 10);

    expect(withdraw.balance).toBe(5);
  })

  it("creates statement for withdrawal", () => {
    const withdraw = new Withdraw(5, 15);
    const date = new Date().toLocaleDateString();

    const history = withdraw.saveHistory();

    expect(history).toEqual({
      date: date,
      credit: null,
      debit: 5,
      balance: 10,
    })
  })

  it("doesn't allow user to withdraw money they don't have", () => {
    const withdraw = new Withdraw(30, 20);
    const date = new Date().toLocaleDateString();

    withdraw.canWithdraw();

    expect(withdraw.balance).toBe(0);
    expect(withdraw.saveHistory()).toEqual(
    { date: date,
      credit: null,
      debit: 20,
      balance: 0,
     }
    )
  })
})


