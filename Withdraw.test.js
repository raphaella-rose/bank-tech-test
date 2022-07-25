const Withdraw = require("./Withdraw");

describe(Withdraw, () => {
  it("sets amoount withdrawn", () => {
    const withdraw = new Withdraw(5);

    expect(withdraw.amount).toBe(5)
  })
})

//sets amount withdrawn
//gets date of withdrawal
//updates balance
// creates statement for withdrawal
