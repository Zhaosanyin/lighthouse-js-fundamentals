
const whichSchool = function (ageWhich) {
    if (ageWhich <13 ) {
        console.log( "Elementary School");
    } else if ( 13 <= ageWhich <= 18 ) {
        console.log("Secondary School");
    } else if ( ageWhich > 18) {
        console.log("Lighthouse Labs");
    }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));