const { missingValue } = require('../missingValue');

describe("`missingValue()`", () => {
  it("Returns 2 when given [3,0,1]", () => {
    expect(missingValue([3,0,1])).toBe(2);
  });

  it("Returns 1 when given [3,0,4,2]", () => {
    expect(missingValue([3,0,4,2])).toBe(1);
  });

  it("Returns -1 when given [2,-4,0,-3,-2,1]", () => {
    expect(missingValue([2,-4,0,-3,-2,1])).toBe(-1);
  });
});