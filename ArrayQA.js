//Array Udacity
/*
var donuts = ["glazed", "powerdered"];
var mixedData = ["abc", 1, true, undefined, null, "all the things"];
var arrayInArrays = [[2,3,4], ["julian", 'abc'], [true, fase, true, false]];
var arrayInArrays = [
  [2,3,4], 
["julian", 'abc'],
[true, fase, true, false]
];
*/

//mixedData, 
//variable for array
//index of array is the position from 0 to number how many in Array

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];

// Print
console.log(crew);

//array property
// crew.push(), return the element length of array, 
//crew.pop(), return the element that has been removed in case you need to use it.
console.log(crew.push());
console.log(crew.pop());
//crew.push("a");
console.log(crew.pop(mercenary));

