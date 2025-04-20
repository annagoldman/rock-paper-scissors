
//console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];    
}

console.log("Computer choice is: " + getComputerChoice());

function getHumanChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let humanChoice = prompt("Enter your choice (rock, paper, scissors): ");
    
    if (humanChoice === null) {
        console.log("Prompt was canceled.");
        return null; // Handle cancellation gracefully
    }

    humanChoice = humanChoice.toLowerCase();

    while (!choices.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors: ");
        if (humanChoice === null) {
            console.log("Prompt was canceled.");
            return null; // Handle cancellation gracefully
        }
        humanChoice = humanChoice.toLowerCase();
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice || !computerChoice) {
        console.log("Invalid choices. Round skipped.");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    const winningConditions = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };

    if (winningConditions[humanChoice] === computerChoice) {
        humanScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("Computer wins this round!");
    }
}


let gameCount = 5;

function playGame(gameCount) {
    for (let i = 0; i < gameCount; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (humanChoice !== null) {
            playRound(humanChoice, computerChoice);
            console.log("Computer Score: " + computerScore);
            console.log("Human Score: " + humanScore);
        } else {
            console.log("Game canceled. No scores updated.");
        }
    }

    if (computerScore > humanScore) {
        console.log ("Computer won the game!!!");
    } else if (humanChoice > computerScore) {
        console.log ("Human won the game!!!");
    } else {
        console.log ("It's a tie!")
    }
}

playGame(gameCount); 