const SList = require("../listClass").SList

describe("`removeNegativeNodes()`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  it("Reuturns a pointer to the list", () => {
    expect(list.removeNegativeNodes()).toBe(list.head);
  });

  describe("List has no nodes", () => {
    it("Returns a null head value", () => {
      expect(list.removeNegativeNodes()).toBe(null);
    });
  });

  describe("List has a single negative node", () => {
    beforeEach(()=> {
      list.addBack(-1)
    });

    it("Returns a null head value", () => {
      expect(list.removeNegativeNodes()).toBe(null);
    });
  });
});