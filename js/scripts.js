var stringSplit = function(sentence) {
  return sentence.split(" ");
};

var wordMatch = function(word) {
  if (word === word) {
    return word;
  }
};

var findWord = function(sentence, word) {
  // debugger;
  var splitString = sentence.split(" ");

  for(var i=0; i < splitString.length; i++ ) {
    if(splitString[i] === word) {
    }
  }
  return word;
};
