const dropTheMike = require('../dropTheMike').dropTheMike

describe("`dropTheMike()`", () => {
    it("Returns `Hello There Buddy` when given ` hello There buddy `", () => {
        expect(dropTheMike(" hello There buddy ")).toEqual("Hello There Buddy");
    });

    it("Returns `stunned silence` when given `Oh hey Mike `", () => {
        expect(dropTheMike("Oh hey Mike ")).toEqual("stunned silence");
    });

    it("Returns `Oh Hey Mikey ` when given `Oh hey Mikey `", () => {
        expect(dropTheMike("Oh hey Mikey ")).toEqual("Oh Hey Mikey");
    });
});