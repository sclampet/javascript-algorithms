const messyMath = require('../messyMath').messyMath

describe("`messyMath()`", () => {
  it("Returns 7 when given 4", () => {
    expect(messyMath(4)).toBe(7);
  });

  it("Returns 34 when given 8", () => {
    expect(messyMath(8)).toBe(34);
  });

  it("Returns -1 when given 15", () => {
    expect(messyMath(15)).toBe(-1);
  });
});