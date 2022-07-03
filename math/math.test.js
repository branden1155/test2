// ---- This is updated information for 1.7 Assigment ----
const {addition, subtract, divide, multiply, findSqrt, findMax} = require("./math");

describe("Testing the Addition module", () =>{
    // Testing Addition
    test("Adding the two numbers",()=>{
        expect(addition(2,4)).toBe(6);
    })
    // Testing Subtraction
    test("Subtracting the two numbers",()=>{
        expect(subtract(10,5)).toBe(5);
    })
    // Testing Dividing
    test("Dividing the two numbers",()=>{
        expect(divide(20,2)).toBe(10);
    })
    // Testing Multiplication
    test("Multiplying the two numbers",()=>{
        expect(multiply(5,4)).toBe(20);
    })

    // --- Advanced Math Section ---

     // Testing Square Root
    test("Finding the Square Root of a number",()=>{
        expect(findSqrt(25)).toBe(5);
    })
    // Finding the Max of two numbers
    test("Finding the Square Root of a number",()=>{
        expect(findMax(55,60)).toBe(60);
    })
});