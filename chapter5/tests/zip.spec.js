const { SList } = require('../listClass')

describe("`zipWithList`", () => {
  let list;
  let listToZip;
  beforeEach(() => {
    list = new SList();
    listToZip = new SList();
  });

  describe("Spying on zipWithList", () => {
    it("can tell when zipWithList is called", () => {
      const zipWithListSpy = jest.spyOn(list, 'zipWithList');
      const listToZip = new SList();
      list.zipWithList(listToZip);

      expect(zipWithListSpy).toHaveBeenCalledWith(listToZip);
    });
  });

  describe("Given list has 1 or more nodes", () => {
    beforeEach(() => {
      list.addFront(0).addFront(2)
      listToZip.addFront(1).addFront(3)
    });

    it("Returns orignal list with a longer length", () => {
      const orignalLength = list.length();
      list.zipWithList(listToZip);
      const isLonger = list.length() > orignalLength;

      expect(isLonger).toBe(true);
    });

    it("Returns the list with the previously second node as the third node", () => {
      const originalSecondNode = list.head.next;
      list.zipWithList(listToZip);

      expect(list.head.next.next).toBe(originalSecondNode);
    });
  });

});