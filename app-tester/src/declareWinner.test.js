const declareWinner = require("./declareWinner");

const fighter1 = {
    name: "Pityu",
    health: 40,
    damagePerAttack: 10,
};

const fighter2 = {
    name: "Jeremiás",
    health: 30,
    damagePerAttack: 12,
};

const fighter3 = {
    name: "Béla",
    health: 40,
    damagePerAttack: 10,
};

const fighter4 = {
    name: "Józsi",
    health: 30,
    damagePerAttack: 41,
};

const fighter5 = {
    name: "Edit",
    health: 400,
    damagePerAttack: 10,
};

const fighter6 = {
    name: "Gizella",
    health: 30,
    damagePerAttack: 41,
};

test(`the first fighter (${fighter1.name}) should win`, () => {
    expect(declareWinner(fighter1, fighter2, "Pityu")).toBe("Pityu");
});

test(`the second fighter (${fighter4.name}) should win`, () => {
    expect(declareWinner(fighter1, fighter2, "Pityu")).toBe("Pityu");
});

test(`the ${fighter3.name} fighter starts but (${fighter4.name}) should win`, () => {
    expect(declareWinner(fighter3, fighter4, fighter4.name)).toBe(fighter4.name)
  })

test(`(${fighter6.name}) starts, but (${fighter5.name}) should win`, () => {
    expect(declareWinner(fighter5, fighter6, fighter6.name)).toBe(fighter5.name);
});