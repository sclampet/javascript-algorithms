const getMins = require('../getMins').getMins2

describe("`getMins()`", () => {
  it("Returns 3 when given [10,6,5,3,2,8,9]", () => {
    expect(getMins([10, 6, 5, 3, 2, 8, 9])).toBe(3);
  });
});