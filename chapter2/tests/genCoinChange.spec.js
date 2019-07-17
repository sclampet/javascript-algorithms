const genCoinChange = require('../generateCoinChange').genCoinChange

describe("`genCoinChange()`", () => {
  it("Returns quarters: 3, dimes: 1, nickels: 1, pennies: 4", () => {
    expect(genCoinChange(94)).toEqual({ quarters: 3, dimes: 1, nickels: 1, pennies: 4 })
  })
})