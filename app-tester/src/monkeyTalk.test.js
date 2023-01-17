const monkeyTalk = require("./monkeyTalk");

const test1 = "";    
const test2 = "lorem";
const test3 = "Lorem ipsum dolor sit amet";
const test4 = "Mauris a augue porta, semper justo eu, semper neque.";

test("empty string", () => {
    expect(monkeyTalk(test1)).toBe("Ook.");
});

test("single word", () => {
    expect(monkeyTalk(test2)).toBe("Ook.");
});

test("multiple words mixed", () => {
    expect(monkeyTalk(test3)).toBe("Ook eek ook ook eek.");
});

test("multiple words mixed with punctuations", () => {
    expect(monkeyTalk(test4)).toBe("Ook eek eek ook ook ook eek ook ook.");
});