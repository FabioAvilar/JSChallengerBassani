// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction(a, b) {

    return Object.entries(a).reduce((pv, cv) => 
        ({...pv, [cv[0]]: cv[1] * b}), {});
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10));

console.log(myFunction({ w: 15, x: 22, y: 13 }, 6));

// or we can solve like this

function myFunction(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10));

console.log(myFunction({ w: 15, x: 22, y: 13 }, 6));