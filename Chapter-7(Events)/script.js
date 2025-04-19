// TODO: Event Object
// let myBtn = document.querySelector("button");
// myBtn.onclick = (e) => {
//   console.log(e);
//   alert("Namaste JS");
// };

// let myDiv = document.querySelector("div");
// myDiv.onmouseover = () => {
//   myDiv.style.backgroundColor = "red";
// };

// TODO: Event Lisyteners
let myBtn = document.querySelector("button");
// myBtn.addEventListener("click", () => {
//   console.log("Namaste JS 1");
// });
// myBtn.addEventListener("click", () => {
//   console.log("Namaste JS 2");
// });

// const handler3 = () => {
//   console.log("Namaste JS 3");
// };

// myBtn.addEventListener("click", handler3);
// myBtn.addEventListener("click", () => {
//   console.log("Namaste JS 4");
// });

// myBtn.removeEventListener("click", handler3); //remove handler3

//TODO: ASSIGNEMNT
let currMode = "light";
let body = document.querySelector("body");
// myBtn.addEventListener("click", () => {
//   if (currMode === "light") {
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
//   console.log(currMode);
// });
myBtn.addEventListener("mouseover", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
