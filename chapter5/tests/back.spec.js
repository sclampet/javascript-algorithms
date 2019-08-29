const SList = require('../listClass').SList

describe("`back()`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  describe("List has no nodes", () => {
    it("Returns null", () => {
      expect(list.back()).toBe(null);
    });
  });

  describe("List has 1 or more nodes", () => {
    beforeEach(() => {
      list.addFront('b');
    });

    it("Returns the head when list has 1 node", () => {
      const head = list.head;
      expect(list.back()).toBe(head);
    });

    it("Returns the node that has a next value of null", () => {
      expect(list.back().next).toBe(null);
    });
  });
});