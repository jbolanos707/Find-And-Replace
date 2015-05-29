var findReplace = function(sentence, findWord, replaceWord) {
  // debugger;
  var splitString = sentence.split(" ");
  var re = /\w+/g;

  for(var i=0; i < splitString.length; i++) {
    if(splitString[i] === findWord) {
      splitString[i] = replaceWord;
    }
  }
  sentence = sentence.replace(re);
  sentence = splitString.join(" ");
  return sentence;
};


var stringSplit = function(sentence) {
  return sentence.split(" ");
};

var wordMatch = function(word) {
  if (word === word) {
    return word;
  }
};

var findWord = function(sentence, word) {
  var splitString = sentence.split(" ");

  for(var i=0; i < splitString.length; i++ ) {
    if(splitString[i] === word) {
    }
  }
  return word;
};
