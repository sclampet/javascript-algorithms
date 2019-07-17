const mostSignificant = require('../mostSignificant').mostSignificant

describe("`mostSignificant()`", () => {
  it("Returns 1 when given 1234", () => {
    expect(mostSignificant(1234)).toBe(1);
  });

  it("Returns 9 when given 0.00987", () => {
    expect(mostSignificant(0.00987)).toBe(9);
  });
});
