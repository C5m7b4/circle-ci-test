const { add } = require("./index.js");

var assert = require("assert");
describe("math", () => {
  it("should add to numbers", () => {
    assert.equal(add(2, 2), 4);
  });
});
