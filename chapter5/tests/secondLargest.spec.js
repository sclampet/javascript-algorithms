const { SList } = require('../listClass')

describe("`secondLargestValue()`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  describe("List has 1 or less nodes", () => {
    it("Returns null", () => {
      expect(list.secondLargestValue()).toBe(undefined);
    });
  });

  describe("List has 2 or more nodes", () => {
    beforeEach(() => {
      list.addBack(8).addBack(5).addBack(3).addBack(7).addBack(0);
    });

    it("Returns second largest value", () => {
      expect(list.secondLargestValue()).toBe(3);
    });
  });

});