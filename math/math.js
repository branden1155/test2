// ---- This is updated information for 1.7 Assignment ----

// Testing Addition of two numbers
const addition = (str1, str2) => {
    return (str1 + str2);
} 
// Testing Subtraction of two numbers
const subtract = (str1, str2) => {
    return (str1 - str2);
};
// Testing Dividing of two number
const divide = (str1, str2) => {
    return (str1 / str2);
};
// Testing Multiplication of two numbers
const multiply = (str1, str2) => {
    return (str1 * str2);
};
// Testing Finding the Square Root of a number
const findSqrt = (str) => {
    return (Math.sqrt(str));
};
// Testing the finding of a max between two numbers
const findMax = (str1, str2) => {
    return (Math.max(str1, str2));
};

// Exporting modules to 
module.exports = {
    addition,
    subtract,
    divide,
    multiply,
    findSqrt,
    findMax,
}