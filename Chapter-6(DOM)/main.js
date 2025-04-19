// TODO:
// The window object represents an open window in a browser. It is browser’s object (not JavaScript’s) & is automatically created by browser.
// It is a global object with lots of properties & methods.

//JS can access html via document object inside the window object
// let heading = document.getElementById("heading").innerText;
// console.log(heading);

// let para = document.getElementsByClassName("myPara");
// console.log(para);

// let heading3 = document.getElementsByTagName("h3");
// console.log(heading3);

// let firstElement = document.querySelector("#heading");
// console.log(firstElement.innerText);

// let allElements = document.querySelector("body").firstElementChild;
// console.log(allElements);

// let myBody = document.querySelector("body");
// console.log(myBody.textContent);

//TODO: Q1
// let myHeading = document.querySelector("h2");
// myHeading.append(" from Apna College students");
// console.log(myHeading);

// TODO: Q2
// let myDiv = document.querySelectorAll(".box");
// let index = 1;
// for (const div of myDiv) {
//   div.innerText = `Hello World ${index}`;
//   index++;
// }

// let myDiv = document.querySelector("div");
// console.log(myDiv);
// let id = myDiv.getAttribute("id");
// console.log(id);

// let myPara = document.querySelector("p");
// console.log(myPara.getAttribute("class"));

// let setAttr = document.querySelector("p");
// // console.log(setAttr);
// setAttr.setAttribute("name", "Umang Pincha");

// let para = document.querySelector("p");
// para.style.backgroundColor = "red";
// para.style.fontSize = "50px";

// let myBtn = document.createElement("button");
// // console.log(myBtn);
// myBtn.innerText = "Click Me";
// let myDiv = document.querySelector("div");
// myDiv.style.border = "2px solid black";
// myDiv.append(myBtn); //append at the end of element
// myDiv.prepend(myBtn); //append at the start of element
// myDiv.before(myBtn); //append before the element
// myDiv.after(myBtn); //append after the element

// let newHeading = document.createElement("h1");
// newHeading.innerText = "Hello World";
// document.querySelector("body").prepend(newHeading); //append at the start of body
// newHeading.remove(); //remove the element

// let myPara = document.querySelector("p");
// let myChild = document.createElement("h2");
// myPara.append(myChild); //append at the end of element
// myPara.removeChild(myChild); //remove the element

// TODO: Q1
// let mybtn = document.createElement("button");
// mybtn.innerText = "Click Me";
// mybtn.style.backgroundColor = "red";
// mybtn.style.color = "white";
// document.querySelector("body").append(mybtn);

let myPara = document.querySelector("p");
// console.log(myPara);
// myPara.setAttribute("class", "newClass"); //not a prefered way as this will override the previous class
myPara.classList.add("newClass"); //this will add the new class to the existing class
console.log(myPara);
