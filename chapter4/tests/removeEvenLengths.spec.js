const removeEvenLengths = require('../removeEvenLengths').removeEvenLengthStrings

describe("`removeEvenLengthStrings()`", () => {
    it("Returns ['Nope!','Its','instead','Chris','.'] when given ['Nope!','Its','Kris','starting','with','K!','instead','of','Chris','with','C)','.']", () => {
        expect(removeEvenLengths(['Nope!','Its','Kris','starting','with','K!','instead','of','Chris','with','C)','.'])).toEqual(['Nope!', 'Its', 'instead', 'Chris', '.' ]);
    });
});