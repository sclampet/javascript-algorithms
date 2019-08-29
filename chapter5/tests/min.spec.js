const SList = require('../listClass').SList


describe("`min()`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  describe("List has no nodes", () => {
    it("Returns null", () => {
      expect(list.min()).toBe(undefined);
    });
  });

  describe("List has 1 or more nodes", () => {
    beforeEach(() => {
      list.addFront(6).addFront(3).addFront(2).addFront(8);
    });

    it("Retuns a value", () => {
      expect(list.min()).toBe(2);
    });

  });

});