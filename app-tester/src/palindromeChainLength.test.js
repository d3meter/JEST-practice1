const {
    reverseNumber,
    isPalindrome,
    palindromeChainLength,
} = require("./palindromeChainLength");

const test1 = 201;
const test2 = 101;
const test3 = 202;
const test4 = 56;
const test5 = 89;
const test6 = 10911;

test("function reverseNumber", () => {
    expect(reverseNumber(test1)).toBe(102);
});

test("function isPalindrome", () => {
  expect(isPalindrome(test2)).toBe(true);
});

test("function 0 iteration to get a palindrome", () => {
  expect(palindromeChainLength(test3)).toBe(0);
});

test("function 1 iteration to get a palindrome", () => {
  expect(palindromeChainLength(test4)).toBe(1);
});

test("function more iteration to get a palindrome", () => {
  expect(palindromeChainLength(test5)).toBe(24);
});

test("function number cannot be made into a palindrome", () => {
  expect(() => palindromeChainLength(test6)).toThrow("Number is too big or a number!");
});