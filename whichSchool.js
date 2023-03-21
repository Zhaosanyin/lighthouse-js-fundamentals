let ageWhich = 0;

const whichSchool = function(ageWhich) {
    if (ageWhich <13 ) {
       return  "Elementary School";
    } else if ( ageWhich >= 13 && ageWhich <= 18 ) {
        return "Secondary School";
    } else if ( ageWhich > 18) {
        return "Lighthouse Labs";
    }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

/*const whichSchool = function (ageWhich){
    if (ageWhich <13){
        console.log("Elementary School");
    }else if (13<=ageWhich<=18 ){
        console.log("Secondary School");
    }else if (ageWhich >18){
        console.log("Lighthouse Lab");
    }
}*/

// passed the codes below

/*

let ageWhich = 0;
const whichSchool = function(ageWhich) {
  if(ageWhich < 13 ) {
    return "Elementary School";
  } else if( ageWhich >= 13 && ageWhich <= 18 ) {
    return "Secondary School";
  } else if( ageWhich > 18) {
    return "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

*/
