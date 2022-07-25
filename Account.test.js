const Account = require("./Account");

describe(Account, () => {
  it("initializes a account account with a balance of 0", () => {
    const account = new Account();

    expect(account.balance).toBe(0);
  })

  it("returns empty array when no deposits have been made", () => {
    const account = new Account();

    expect(account.statements).toEqual([]);
  })

})