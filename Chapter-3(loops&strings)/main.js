// TODO: for-of (used for strings and arrays)
// for (const iterator of object) {

// }
// let str = "Umang Pincha";
// for (const i of str) {
//   console.log(i);
// }

// TODO: for-in loop (used to loop objects)
let student = {
  name: "Umang",
  age: 20,
  rollNo: 123,
};
for (let key in student) {
  console.log(key); // prints keys
  //   console.log(student[i]); // prints values
}

// Q1
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0);
//   console.log(i);
// }

// Q2
// let gameNum = 25;
// let num = prompt("Guess Number : ");
// while (num != gameNum) {
//   num = prompt("Guess Number : ");
// }
// alert("You guessed it right!");

// TODO: Strings

// let str = "Hello World!";
// str[0] = "h"; // strings are immutable
// console.log(str.length); // 12
// console.log(`Str = ${str}`);

//String methods
// NOTE: These methods don't change original string
// str.toUpperCase();
// str.toLowerCase();
// str.trim(); //remove whitespaces in string
// // str.slice(start , end?) //returns part of string
// str1.concat(str2); //joins str2 with str1
// str.replace(searchVal , newVal); //replace searchVal with newVal
// str.charAt(index); //returns char at index
