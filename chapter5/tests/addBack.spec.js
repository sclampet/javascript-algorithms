const { SList } = require('../listClass')

describe("`addBack()`", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  it("Returns the list", () => {
    expect(list.addBack('a')).toBe(list);
  });

  describe("List has no nodes", () => {
    it("Has the correct head value", () => {
      list.addBack('a')
      expect(list.head.val).toBe('a');
    });
  });

  describe("List has 1 or more nodes", () => {
    let originalTail;

    beforeEach(() => {
      list.addFront('c').addFront('b').addFront('a');
      originalTail = list.back();
    });

    it("Returns a pointer from the original tail to the new tail", () => {
      list.addBack('d')
      expect(originalTail.next.val).toBe(list.back().val);
    });

    it("Returns a pointer to the tail with the new value", () => {
      list.addBack('d')
      expect(list.back().val).toBe('d');
    });

    it("Returns a pointer to the tail with a next value of null", () => {
      list.addBack('d');
      expect(list.back().next).toBe(null);
    });
  });
});