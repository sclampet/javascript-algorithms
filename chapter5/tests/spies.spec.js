const { SList } = require('../listClass');

describe("fun with spies and mocks", () => {
  let list;
  beforeEach(() => {
    list = new SList();
  });

  describe('spying on addFront', () => {
    it('can tell when addFront is called', () => {
      const addFrontSpy = jest.spyOn(list, 'addFront');
      list.addFront('a');
      expect(addFrontSpy).toHaveBeenCalledWith('a');
      console.log(list);
    })
  })
});