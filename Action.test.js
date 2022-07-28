const Action = require("./Action");

describe(Action, () => {
  const date = new Date().toLocaleDateString();

  it("updates balance after deposit", () => {
    const action = new Action();

    expect(action.deposit(10, 0)).toEqual(
      expect.objectContaining({balance: 10})
    )
   
  })

  it("updates balance after withdrawal", () => {
    const action = new Action();

    expect(action.withdraw(10, 15)).toEqual(
      expect.objectContaining({balance: 5})
    )
  
  })

  it("creates statement for deposit", () => {
    const action = new Action();

    const deposit = action.deposit(5, 0);

    expect(deposit).toEqual({
      date: date,
      credit: 5,
      debit: null,
      balance: 5,
    })
  })

  it("creates statement for withdrawal", () => {
    const action = new Action();

    const withdraw = action.withdraw(10, 10);

    expect(withdraw).toEqual({
      date: date,
      credit: null,
      debit: 10,
      balance: 0,
    })
  })  

  it("doesn't allow user to withdraw money they don't have", () => {
    const action = new Action();

    const withdraw = action.withdraw(30, 20);

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