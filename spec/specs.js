describe("findReplace", function() {
  it("will find and replace a single instance of a word", function() {
    expect(findReplace("cat in the hat", "hat", "roof")).to.equal("cat in the roof");
  });

  it("will find and replace all instances of the word", function() {
    expect(findReplace("cat in the cat hat", "cat", "dog")).to.equal("dog in the dog hat");
  });

  it("will ignore punctuation", function() {
    expect(findReplace("cat in the hat!", "cat", "dog")).to.equal("dog in the hat!");
  });

  it("will match word casing in the sentence", function() {
    expect(findReplace("Cat in the hat", "cat", "dog")).to.equal("Dog in the hat");
  });
});

// describe("stringSplit", function() {
//   it("will return the string as an array of words", function() {
//     expect(stringSplit("cat in the hat")).to.eql(["cat", "in", "the", "hat"]);
//   });
// });
//
// describe("wordMatch", function() {
//   it("will recognize matching words", function() {
//     expect(wordMatch("hat")).to.equal("hat");
//   });
// });
//
// describe("findWord", function() {
//   it("will find matching word in the sentence array", function() {
//     expect(findWord("cat in the hat", "hat")).to.eql("hat");
//   });
// });
