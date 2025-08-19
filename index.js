let computerWins = 0;
let playerWins = 0;

function WinnerSelection(selection){
    console.log("Player Choice: ", selection);

    let choiceSelectionArray = ["Rock", "Paper", "Scissors"];
    let computerSelection = Math.floor(Math.random() * 3);
    computeChoice = choiceSelectionArray[computerSelection];
    console.log("Computer Selection: ", choiceSelectionArray[computerSelection]);

    if(selection === "Rock" && computeChoice === "Paper"){
        computerWins++;
        console.log(computerWins);
        console.log("Computer Wins: ", computerWins);
    } else if (selection === "Paper" && computeChoice === "Scissors"){
        computerWins++;
        console.log(computerWins);
        console.log("Computer Wins: ", computerWins);
    } else if (selection === "Scissors" && computeChoice === "Rock"){
        computerWins++;
        console.log(computerWins);
        console.log("Computer Wins: ", computerWins);
    } else if (selection === "Scissors" && computeChoice === "Paper"){
        playerWins++;
        console.log(playerWins);
        console.log("Player Wins: ", computerWins);
    } else if (selection === "Paper" && computeChoice === "Rock"){
        playerWins++;
        console.log(playerWins);
        console.log("Player Wins: ", computerWins);
    } else if (selection === "Rock" && computeChoice === "Scissors"){
        playerWins++;
        console.log(playerWins);
        console.log("Player Wins", computerWins);
    } else if (selection === "Rock" && computeChoice === "Rock"){
        console.log("No Winner, Try Again!");
    } else if (selection === "Paper" && computeChoice === "Paper"){
        console.log("No Winner, Try Again!");
    } else if (selection === "Scissors" && computeChoice === "Scissors"){
        console.log("No Winner, Try Again!");
    } else {
        console.log("BZZZRKT...Error...Try Again.");
    }
}
