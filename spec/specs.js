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

// describe("findWord", function() {
//   it("will find and return matching word in the sentence array", function() {
//     expect(findWord(["hat"])).to.eql(["hat"])
//   });
// });
