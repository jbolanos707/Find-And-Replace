var findReplace = function(sentence, findWord, replaceWord) {
  var splitString = sentence.split(" ");
  var re = /[\w+\s?,.!""]/ig;

  for(var i=0; i < splitString.length; i++) {
    if(splitString[i] === findWord) {
      splitString[i] = replaceWord;
    }
  }
  sentence = sentence.replace(re);
  sentence = splitString.join(" ");
  return sentence;
};

$(document).ready(function(){
  $("#findReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var findWord = $("input#wordFind").val();
    var replaceWord = $("input#wordReplace").val();
    var result = findReplace(sentence, findWord, replaceWord);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});



// start of code

// var stringSplit = function(sentence) {
//   return sentence.split(" ");
// };
//
// var wordMatch = function(word) {
//   if (word === word) {
//     return word;
//   }
// };
//
// var findWord = function(sentence, word) {
//   var splitString = sentence.split(" ");
//
//   for(var i=0; i < splitString.length; i++ ) {
//     if(splitString[i] === word) {
//     }
//   }
//   return word;
// };
