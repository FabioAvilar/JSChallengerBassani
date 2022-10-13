// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b) {

    return Math.abs(b - a) / ( 24 * 60 * 60 * 1000 );
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));

console.log(myFunction(new Date("2022-09-27"), new Date("2022-12-22")));