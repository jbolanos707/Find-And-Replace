describe("stringSplit", function() {
  it("will return the string as an array of words", function() {
    expect(stringSplit("cat in the hat")).to.eql(["cat", "in", "the", "hat"]);
  });
});

describe("wordMatch", function() {
  it("will recognize matching words", function() {
    expect(wordMatch("hat")).to.equal("hat")
  });
});

describe("findWord", function() {
  it("will find matching word in the sentence array", function() {
    expect(findWord("cat in the hat", "hat")).to.eql("hat")
  });
});
