const test = require("flug");
const unpercent = require("./unpercent.js");

test("number", ({ eq }) => {
  let msg;
  try {
    unpercent(100);
  } catch (error) {
    msg = error.message;
  }
  eq(msg, `[unpercent] you must supply a percentage string. You supplied 100`);
});

test("string", ({ eq }) => {
  eq(unpercent("100%"), 1);
});

test("string + whole", ({ eq }) => {
  eq(unpercent("24%", { whole: 84 }), 20.16);
  eq(unpercent("10%", { whole: 256 }), 25.6);
});

test("string + whole + round", ({ eq }) => {
  eq(unpercent("24%", { whole: 84, round: true }), 20);
  eq(unpercent("10%", { whole: 256, round: true }), 26);
});
