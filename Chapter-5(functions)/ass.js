// TODO: Normal by function keyword
// function getVowels(str) {
//   let count = 0;
//   for (const i in str) {
//     if (
//       str[i] == "a" ||
//       str[i] == "i" ||
//       str[i] == "e" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// TODO: Arrow Method
// let getVowels = (str) => {
//   let count = 0;
//   for (const i in str) {
//     if (
//       str[i] === "a" ||
//       str[i] === "i" ||
//       str[i] === "e" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// let count = getVowels("Nitin");
// console.log(count);

// foreach loop in arrays
// TODO: Callback Function: Function that is passed as an argument to another function

// let arr = [1, 2, 3, 4, 5];
// // arr.forEach((element,index,array)) //index,array parameters are optional
// arr.forEach((element) => console.log(element));

//TODO: Higher Order Functions
// Higher order function is a function which takes a function as an argument or returns a function as a result.
// forEach is higher order function

// // TODO:
// let arr = [1, 2, 3, 44, 5];
// arr.forEach((element) => console.log(element ** 2));

// TODO: Some more array methods

//1) map
// let newArr = arr.map((element) => {
//   return element ** 2;
// }); //use map when you want to return a new array

// console.log(newArr);

//2) filter = returns new array for the element that gives true condition
// let newArr = arr.filter((element) => {
//   return element > 2;
// });
// console.log(newArr);

//3) reduce = Perform some operation and reduces the array to a single value.It returns
// the single value

//note initially res=1 , currentVal=2 and when it add it stores into variable res
// const output = arr.reduce((res, currentVal) => {
//   console.log(`result : ${res} , currentVal : ${currentVal}`);
//   return preiousVal + currentVal;
// });
// console.log(output);

//2nd ex of reduce : Get largest element
// const getLargest = arr.reduce((preiousVal, currentVal) => {
//   return preiousVal > currentVal ? preiousVal : currentVal;
// });

// console.log(getLargest);

// More ass ques

let score = [33, 92, 90, 32, 94, 36, 91];
// TODO: Q1
// let finalArr = score.filter((element) => {
//   return element > 90;
// });
// console.log(finalArr);

// TODO: Q2
let n = prompt("Enter the number : ");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
//Q1
// let sum = arr.reduce((prevVal, currVal) => {
//   return prevVal + currVal;
// });
// console.log(sum);

// Q2
let mul = arr.reduce((prevVal, currVal) => {
  return prevVal * currVal;
});
console.log(mul);
