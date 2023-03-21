

function laugh (num){
  var sound = "";
  for (var i=0; i<num; i++){
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

console.log(laugh(4));
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function sleep(){
  console.log("I'm sleepy");
  return "zzz";
  return "mmm";
}

sleep();    //this answer should be "I am sleepy"


var bookTitle = " Junxin Yin";
console.log (bookTitle);
function displayBookEnglish(){
  var bookTitle = "Junjie Yin";
  console.log(bookTitle);
}

displayBookEnglish(); //function 调用
console.log(bookTitle);  //scope concept


function makeLine(length){
  var line = "";
  for (var j = 1; j <=length; j++){
    line += "*";
    return line + "\n";
  }
}

function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line
  var lineNumber = 1;

  for(lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
buildTriangle(10);*/

var catSays = function (max) {
  var catMessage = "";
  for (var i=0; i<max; i++){
    catMessage += "meow";
  }
  return catMessage;
}

console.log(catSays(10));