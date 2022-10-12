// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {

    return arr.every((v) => v === arr[0]);
}

console.log(myFunction([true, true, true, true]));

console.log(myFunction(["test", "test", "test"]));

console.log(myFunction([1, 1, 1, 2]));

console.log(myFunction(["10", 10, 10, 10]));

// or we can solve like this

function myFunction(arr) {
    return new Set(arr).size === 1;
}

console.log(myFunction([true, true, true, true]));

console.log(myFunction(["test", "test", "test"]));

console.log(myFunction([1, 1, 1, 2]));

console.log(myFunction(["10", 10, 10, 10]));