const { SList } = require('../listClass');

describe("`partition()`", () => {
  let list;
  beforeEach(() => {
    list = new SList()
  });

  it("Returns the list", () => {
    expect(list.partition()).toBe(list);
  });

  describe("List has no nodes", () => {
    it("Returns a head with a null value", () => {
      list.partition()
      expect(list.head).toBe(null);
    });
  });

  describe("List has 1 or more nodes", () => {
    beforeEach(() => {
      list.addFront(6).addFront(4).addFront(5).addFront(1).addFront(2)
    });

    it("Returns a head value that is <= given value", () => {
      const value = 5
      list.partition(value);
      const isCorrectHead = list.head.val <= value

      expect(isCorrectHead).toBe(true);
    });

    it("Returns a tail value that is >= given value", () => {
      const value = 5
      list.partition(value);
      const isCorrectHeaTail = list.back().val >= value

      expect(isCorrectHeaTail).toBe(true);
    });

  });

});