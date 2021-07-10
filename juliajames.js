/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

while (x <= 100 /* your stop condition goes here */) {
     if  (x % 3 !== 0 && x % 5 !== 0){
        console.log(x + " the number is not divisible by 3 or 5") ;    
    }
    if  (x % 3 === 0){
        console.log(x + " divisible by 3, print Julia") ;    
    }
    if  (x % 5 === 0){
        console.log(x + " divisible by 5, print James") ;    
    }
    if  (x % 5 === 0 && x % 3 === 0){
        console.log(x + " divisible by 5 and 3, print JuliaJames") ;    
    }
    
    x++
    // check divisibility
    
    
    // print Julia, James, or JuliaJames
    // increment x
}