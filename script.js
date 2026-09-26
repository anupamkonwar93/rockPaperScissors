console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

const rock = [0, "Rock!"];
const paper = [1, "Paper!"];
const scissor = [2, "Scissor!"];

function getComputerChoice() {
  let ranNum = Math.random() * 90;
  if (ranNum < 30) {
    return rock;
  } else if (ranNum >= 30 && ranNum < 60) {
    return paper;
  } else {
    return scissor;
  }
}

function getHumanChoice() {
  let humanC = Number(prompt("Type 0 for ROCK ... type 1 for PAPER ... or type 2 for SCISSORS"));
  
  if (humanC === 0) {
    return rock;
  } else if (humanC === 1) {
    return paper;
  } else {
    return scissor;
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice[0] === computerChoice[0]) {
      return "Mama Mia ! Its a TIE";
    } else if ((humanChoice[0] - computerChoice[0] + 3) % 3 === 1) {
      humanScore++;
      return `You win! ${humanChoice[1]} beats ${computerChoice[1]}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice[1]} beats ${humanChoice[1]}`;
    }
  }

  // Loop 5 times, getting fresh inputs and choices on each round
  for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  // Log final scores after all 5 rounds finish
  console.log(`\nFinal Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

// Call the main function to start playing
playGame();