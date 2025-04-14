let marks = [10, 20, 30, 40, 50];
// console.log(marks);
// console.log(marks.length);

//Q1
// let sum = 0;
// for (const i of marks) {
//   sum += i;
// }

// let avg = sum / marks.length;
// console.log(avg);

//Q2
let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
  let value = prices[i] / 10;
  prices[i] = prices[i] - value;
}

console.log(prices); //[250, 645, 300, 900, 50]
// console.log(prices.push(1000)); // 6
// console.log(prices.length); //6
// console.log(prices.pop()); //1000
// console.log(prices.length); //5
// console.log(prices.toString()); //250,645,300,900,50 //convert array to string
