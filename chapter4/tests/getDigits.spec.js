const getDigits = require('../getDigits').getDigits

describe("`getDigits()`", () => {
  it("Returns 1357924680 when given `0s1a3y5w7h9a2t4?6!8?0`", () => {
    expect(getDigits("0s1a3y5w7h9a2t4?6!8?0")).toBe(1357924680);
  });
});