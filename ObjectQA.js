// object
///*
var umbrella = {
  color : "pink",    //, not ;
  isOpen : false,
  open: function(){
    if (umbrella.isOpen === true){
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen =true;
      return "Julia opens the umbrella!";
    }
  } 

};  //; semi-colon at the end of object declaration

var umbrella = {
  color : "pink",
  isOpen : false,
  open: function (){
    if (umbrella.isOpen === true){
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen =true;
      return "Julia opens the umbrella!";
    }
  }
}, //second time to practice for the object

    close: function(){
  if (umbrella.isOpen === false){
    return "The umbrella is already closed!";
  } else {
    umbrella.isOpen = false;
    return "Julia closes the umbrella!";
  }
};

// object-literal notation

// key: value, pairs are separated from each other by COMMAS
// the key (representing a property or method name) and its "value" are separated from each other by a COLON
// the entire object is wrapped inside curly braces {}

// and, kind of like how you can look up a word in the dictionary to find its definition, the key in a key:value pair allows you to look up a piece of information about an object.

//*/
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture:function() { return "Sarah paints";}
};

// sister.parents, dot notation        , return ["alice", "andy"]
//sister["parent"], bracket notation   , return ["alice", "andy"]

console.log(sister.paintPicture());

// var funcationName=function(){}
//function functionName (){}
// paintPicture: function(){ // content}