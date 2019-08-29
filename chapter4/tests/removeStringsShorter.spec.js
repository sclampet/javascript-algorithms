const removeStringsShortThan = require('../removeShorterStrings').removeStringsShorterThan

describe("`removeStringsShorterThan()`", () => {
  it("Returns ['hello', 'something', 'Scott'] when given ['hello', ' as ', 'name', 'something', 'Scott']", () => {
    expect(removeStringsShortThan(['hello', ' as ', 'name', 'something', 'Scott'], 5)).toEqual(['hello', 'something', 'Scott']);
  });
});