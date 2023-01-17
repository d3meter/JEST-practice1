const findUnique = require("./findUnique");

const numbers1 = [1, 2, 2, 2];    
const numbers2 = [10, 5, 10, 10, 10, 10, 10];
const numbers3 = [4, 4, 8, 10];
const numbers4 = [];

test("first number is the odd one", () => {
    expect(findUnique(numbers1)).toBe(1);
});

test("second number is the odd one", () => {
    expect(findUnique(numbers2)).toBe(5);
});

test("first two numbers are not the odd one", () => {
    expect(findUnique(numbers3)).toBe(numbers3[2]);
});

test("odd one is not the first or second number of the array", () => {
    expect(findUnique(numbers3)).toBe(8);
});

test("invalid input", () => {
    expect(() => findUnique(numbers4)).toThrow("Invalid input");
});
