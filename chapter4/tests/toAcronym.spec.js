const toAcronym = require('../acronyms').toAcronym

describe("`toAcronym()`", () => {
  it("Returns LFNYISN when given `Live from New York, it's Saturday Night!`", () => {
    expect(toAcronym("Live from New York, it's Saturday Night!")).toEqual("LFNYISN");
  });
})