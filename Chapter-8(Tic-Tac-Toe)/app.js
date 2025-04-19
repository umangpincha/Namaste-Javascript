const btn = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newBtn = document.querySelector("#new-btn");
const messageCon = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
let count = 0;
let turn0 = true;
const winnPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const gameDraw = () => {
  messageCon.classList.remove("hide");
  msg.innerText = "Game Draw";
  disableBoxes();
};

btn.forEach((box) => {
  //   console.log(box);
  box.addEventListener("click", () => {
    console.log("Button Clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count = count + 1;
    const isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      console.log("Aa gaya");
      gameDraw();
    }
  });
});

//TODO: reset game
const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  messageCon.classList.add("hide");
};

//TODO: enable boxes
const enableBoxes = () => {
  btn.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

//TODO: Disable boxes
const disableBoxes = () => {
  btn.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (val1) => {
  msg.innerText = `Congratulation Winner is ${val1}`;
  messageCon.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (const pattern of winnPatterns) {
    let val1 = btn[pattern[0]].innerText;
    let val2 = btn[pattern[1]].innerText;
    let val3 = btn[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        return true;
      }
    }
  }
  return false;
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
