const sumToOne = require('../sumToOne').sumToOne

describe("`sumToOne`", () => {
  it("Returns 1 when given 928", () => {
    expect(sumToOne(928)).toBe(1);
  });

  it("Returns 2 when given 92", () => {
    expect(sumToOne(92)).toBe(2);
  });
});