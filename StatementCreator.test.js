const StatementCreator = require("./StatementCreator");

describe(StatementCreator, () => {
  it.only("prints single deposit statement in correct format", () => {
    const statementCreator = new StatementCreator();  
    const date = new Date().toLocaleDateString();
    const history = { 
      date: date,
      credit: 1000,
      debit: null,
      balance: 1000,
      };

    statementCreator.isDeposit(history)

    expect(statementCreator.statement).toBe(`date || credit || debit || balance\n${date} || 1000.00 || || 1000.00\n`)
  })

  it("prints single withdrawal statement in correct format", () => {
    const statementCreator = new StatementCreator();  
    const date = new Date().toLocaleDateString();
    const history = [{ 
      date: date,
      credit: null,
      debit: 100,
      balance: 50,
      },
    ];

    statementCreator.isWithdrawal(history)

    expect(statementCreator.statement).toBe(`date || credit || debit || balance\n${date} || || 100.00 || 50.00\n`)
  })

  it("prints mixed statement in correct format", () => {
    const statementCreator = new StatementCreator();  
    const date = new Date().toLocaleDateString();
    const history = [
    { date: date,
      credit: null,
      debit: 500,
      balance: 2500,
    },
    { date: date,
      credit: 2000,
      debit: null,
      balance: 3000,
    },
    { date: date,
      credit: 1000,
      debit: null,
      balance: 1000,
    },
  ];

    expect(statementCreator.createStatement(history)).toBe( `date || credit || debit || balance\n${date} || || 500.00 || 2500.00\n${date} || 2000.00 || || 3000.00\n${date} || 1000.00 || || 1000.00\n`)
  })
})


