const removeBlanks = require('../removeBlanks').removeBlanks

describe("`removeBlanks()`", () => {
  it("Returns `PlayThatFunkyMusic` when given ` Pl ayTha tF u nkyM usi c `", () => {
    expect(removeBlanks(" Pl ayTha tF u nkyM usi c ")).toEqual("PlayThatFunkyMusic");
  });
});