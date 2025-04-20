let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");
let comp = document.querySelector("#comp-score");
let user = document.querySelector("#user-score");
let msg = document.querySelector("#msg");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const result = options[Math.floor(Math.random() * options.length)];
  return result;
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore += 1;
    user.innerText = userScore;
    msg.innerText = `You win`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore += 1;
    comp.innerText = computerScore;
    msg.innerText = `Computer wins`;
    msg.style.backgroundColor = "red";
  }
};

const gameDraw = () => {
  msg.innerText = `Game was draw, play again`;
};

const playGame = (userChoice) => {
  let userWin = true;
  // generate computer choice
  let compChoice = getComputerChoice();
  console.log(userChoice, compChoice);
  if (userChoice === compChoice) {
    gameDraw();
  } else if (userChoice === "rock") {
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    userWin = compChoice === "scissor" ? false : true;
  } else {
    userWin = compChoice === "rock" ? false : true;
  }
  showWinner(userWin);
};

// TODO: User Choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
