const whichSchool = function(age){
  // Your code in here ...
  if(age<13){
    //console.log("Elementary School");
    return "Elementary School";
  }else if(age>=13 && age<=18){
    //console.log("Secondary School");
    return "Secondary School";
  }else if(age>18) {
    //console.log("Lighthouse Labs");
    return "Lighthouse Labs";
  }
}

//console.log("I am 35. Which school should I go to?");
console.log("I am 35. Which school should I go to? " + whichSchool(35));
//console.log("I am 8. Which school should I go to?");
console.log("I am 8. Which school should I go to? " + whichSchool(8));
//console.log("I am 14. Which school should I go to?");
console.log("I am 14. Which school should I go to? " + whichSchool(14));