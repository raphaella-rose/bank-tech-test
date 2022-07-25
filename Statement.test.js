const createStatement = require("./Statement");

describe(createStatement, () => {
  it("prints single deposit statement in correct format", () => {
    const date = new Date().toLocaleDateString();
   const history = [{ 
      date: date,
      credit: 1000,
      debit: null,
      balance: 1000,
      },
    ];

    expect(createStatement(history)).toBe(`date || credit || debit || balance\n${date} || 1000.00 || || 1000.00\n`)
  })
})

//prints deposit statement line
//prints withdrawal statement line
//prints mixed statement