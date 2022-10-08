// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(a) {
    
    return !(a % 2);
}

console.log(myFunction(7));


// or we can solve like this

function myFunction(a) {
    return (a % 2 === 0);
}

console.log(myFunction(8));

console.log(myFunction(9));
