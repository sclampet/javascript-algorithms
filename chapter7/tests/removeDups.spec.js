const removeDups = require('../removeDups').removeDups;

describe("`removeDups()`", () => {

  it("Returns [1,2,3,4] when given [1,2,1,3,4,2]", () => {
    expect(removeDups([1,2,3,4])).toEqual([1,2,3,4]);
  });

});