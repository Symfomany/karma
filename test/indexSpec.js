const assert = require("assert");
describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 2].indexOf(4), -1);
    });
  });
});
