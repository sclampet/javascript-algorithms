const SList = require('../listClass').SList

describe("`concat()`", () => {
  let list;
  let newList;
  beforeEach(()=> {
    list = new SList();
    newList = new SList();
  });

  it("Returns the list", () => {
    expect(list.concat(newList)).toBe(list);
  });

  describe("Given list has no nodes", () => {
    it("Returns orignial list", () => {
      expect(list.concat(newList)).toBe(list);
    });
  });

  describe("Given list has 1 or more nodes", () => {
    beforeEach(() => {
      newList.addFront(1).addFront(3);
    });

    it("Returns the original list with a length plus given list length", () => {
      let originalLength = list.length()
      const newLength = list.concat(newList).length();
      const isLonger = newLength > originalLength;

      expect(isLonger).toBe(true);
    });
  });
});