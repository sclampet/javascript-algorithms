const creditCardVal = require('../creditCardVal').creditCardVal

describe("`creditCardVal()`",() => {
  it("Returns true when given [5,2,2,8,2]", () => {
    expect(creditCardVal([5,2,2,8,2])).toBe(true)
  });
});