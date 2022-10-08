// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function myFunction(a, b) {
    return (a / 100) * b;
}

console.log(myFunction(100, 50));

console.log(myFunction(10, 1));


// or we can solve like this

function myFunction(a, b) {
    return b / 100 * a;
}

console.log(myFunction(100, 50));

console.log(myFunction(10, 1));