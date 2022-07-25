const createStatement = (statements) => {
  let statement = "date || credit || debit || balance\n"
  console.log(statements)
  statements.forEach(action => {
    statement += `${action.date} || ${action.credit}.00 || || ${action.balance}.00\n`
  });

  return statement;
}

module.exports = createStatement;