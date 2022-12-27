var tie = "nswf deck";
var output = "You'll receive";
switch (tie) {
  case "deck of legneds":
    output += "a custom cards,";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck,";
  case "nswf deck":
    output += "one copy of the NSFW (not safe for work) Exploding Kittens card game and ";
  default :
    output += "one copy of the exploding kittens cards games.";

};
console.log(output);