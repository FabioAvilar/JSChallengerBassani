// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arr) {

    return arr.reduce((pv, cv) => pv + cv, 0) / arr.length;
}

console.log(myFunction([10, 100, 40]));

console.log(myFunction([10, 100, 1000]));

console.log(myFunction([-50, 0, 50, 200]));