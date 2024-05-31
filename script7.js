//--Arrays--High Order Functions--
/*
const students = ["Amit", "Ram", "Damini", "Seeta"];

// for (let i = 0; i< students.length; i++) {
//     console.log(students[i])
// }



// students.forEach((val) => console.log(val));
//--similarly--
students.map(val => console.log(val));
*/

// Difference btn ForEach and Map

//--Example 1--
/*
const num = [1,2,3,4,5];

let newArr= [];

num.forEach((num) => newArr.push(num * 2))

console.log(newArr)
*/


//--Example 2--
/*
const num = [1,2,3,4,5];

function dbl(n){
    return n * 2
}

let newArr = num.map(dbl)
console.log(newArr)
console.log(num)
*/


//--Find--
/*
const num = [1,2,3,4,5];

let ans = num.find((num) => num === 4);

console.log(ans)
*/


//--Include--
/*
const char = ["Amit", "Rohan", "Damini"]

console.log(char.includes("Rohan"));
*/



//--Include--
/*
const num = [1,2,3,4,5,6];

const newArr = num.filter((num) => num % 2)

console.log(newArr)
*/



//--Slice--

const num = [1,2,3,4,5,6];

// let result = num.slice(2,5)
let result = num.splice(4)
console.log(result)
