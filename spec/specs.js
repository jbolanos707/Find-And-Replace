describe("stringSplit", function() {
  it("will return the string as an array of words", function() {
    expect(stringSplit("cat in the hat")).to.eql(["cat", "in", "the", "hat"]);
  });
});
