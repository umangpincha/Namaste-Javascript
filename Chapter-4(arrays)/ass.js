let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
arr.shift(); //remove first element
arr.splice(2, 1, "Ola"); //remove 1 element from index 2 and add "Ola" in its place
arr.push("Amazon"); //add "Amazon" at the end
console.log(arr); //["Microsoft", "Uber", "Ola", "Google", "IBM", "Netflix", "Amazon"]
