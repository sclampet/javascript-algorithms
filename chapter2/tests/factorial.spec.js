const factorial = require('../factorial').factorial

describe("`factorial()`", () => {
  it("Returns 6 when given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("Returns 120 when given 5", () => {
    expect(factorial(5)).toBe(120);
  });
});