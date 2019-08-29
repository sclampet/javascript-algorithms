const SList = require('../listClass').SList

describe("`addFront()`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  it("Returns the list", () => {
    expect(list.addFront('a')).toEqual(list);
  });

  describe("List has no nodes", () => {
    it("Has the correct head value", () => {
      list.addFront('a');
      expect(list.head.val).toBe('a');
    });
  });

  describe("List has 1 or more nodes", () => {
    beforeEach(() => {
      list.addFront('b');
    });

    it("Has the correct head value", () => {
      list.addFront('a');
      expect(list.head.val).toBe('a');
    });

    it("Retains a pointer to the original head", () => {
      const originalHead = list.head;
      list.addFront('a');
      expect(list.head.next).toBe(originalHead);
    });
  });

});