// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value


function myFunction(a, b) {
    if (a < b ) {
        console.log(a/b);
    } console.log(a * b);
}

myFunction(4,4);


// or we can make

function myFunction(a, b) {
    return a < b ? a / b : a * b;
}

console.log(myFunction(2, 0.5));