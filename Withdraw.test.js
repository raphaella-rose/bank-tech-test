const Withdraw = require("./Withdraw");

describe(Withdraw, () => {
  it("sets amoount withdrawn", () => {
    const withdraw = new Withdraw(5);

    expect(withdraw.amount).toBe(5)
  })

  it("gets date of withdrawal", () => {
    const withdraw = new Withdraw(5);
    const date = new Date().toLocaleDateString();

    expect(withdraw.getDate()).toBe(date);
  })

  it("updates balance after withdrawal", () => {
    const withdraw = new Withdraw(5);

    withdraw.updateBalance(10);

    expect(withdraw.balance).toBe(5);
  })
})


//updates balance
// creates statement for withdrawal
