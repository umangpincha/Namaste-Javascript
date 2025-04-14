// let foodItems = ["pizza", "burger", "pasta"];
// console.log(prices); //[250, 645, 300, 900, 50]
// console.log(prices.push(1000)); // 6
// console.log(prices.length); //6
// console.log(prices.pop()); //1000 //delete from end and return
// console.log(prices.length); //5
// console.log(prices.toString()); //250,645,300,900,50 //convert array to string

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
// let finalArr = arr1.concat(arr2); //concat two arrays
// console.log(finalArr); //1,2,3,4,5,6,7,8,9,10

// console.log(arr1.unshift(10)); //return the length of array after adding new element
// console.log(arr1); //10,1,2,3,4,5

// console.log(arr1.shift()); //remove first element and return it
// console.log(arr1); //2,3,4,5

// push ka ulta hai unshift
// pop ka ulta hai shift

// console.log(arr1.slice(1, 3)); //2,3 //slice array from index 1 to 3
console.log(arr1.splice(1, 2, 111)); //2,3 //remove 2 elements from index 1
console.log(arr1);
