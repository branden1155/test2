// ------ This is from lesson 1.6 - Walk thru -------
const {uppercase, lowercase} = require("./string")

describe("Testing the string module", () =>{
    test("Should uppercase a string input",()=>{
        expect(uppercase("bob")).toBe("BOB");
    })
    test("Should lowercase a string input", () => {
        expect(lowercase("FULL SaiL")).toBe("full sail");
    })
});

