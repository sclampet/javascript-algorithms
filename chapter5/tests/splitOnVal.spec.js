const SList = require('../listClass').SList

describe("`splitOnValue(value)`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  describe("List has no nodes", () => {
    it("Returns a null head node", () => {
      expect(list.head).toBe(null);
    });
  });

  describe("List has 1 or more nodes", () => {
    beforeEach(() => {
      list.addFront(1).addFront(3).addFront(10).addFront(4).addFront(6);
    });

    it("Returns a new instance of a List", () => {
      const returnValue = list.splitOnValue(3);
      const isSList = returnValue instanceof SList;
      expect(isSList).toBe(true);
    });
  });
});