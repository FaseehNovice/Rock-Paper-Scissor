
function getComputerChoice(){
    let compChoice = Math.floor((Math.random() * 3)+1);
    if(compChoice == 1){
        return "Rock"
    }
    else if(compChoice == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

/*
function getHumanChoice(){
    let humanChoice = parseInt(prompt("Choose\n1: Rock\n2: Paper\n3: Scissor "))
    if(humanChoice == 1){
        return "Rock"
    }
    else if(humanChoice == 2){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}
*/

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , compChoice){
    if(humanChoice == compChoice){
        console.log("That's a tie");
    }
    else if((humanChoice == "Rock" && compChoice == "Scissors") 
        || (humanChoice == "Paper" && compChoice == "Rock") 
        || (humanChoice == "Scissors" && compChoice == "Paper")){
        console.log("You Win this round");
        ++humanScore;
    }
    else{
        console.log("You Lose this round");
        ++computerScore;
    }

}

let buttons = document.querySelectorAll("button");

let humanSelection;
let computerSelection;

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        console.clear();
        humanSelection = button.id;
        computerSelection = getComputerChoice();

        console.log("**************************************");
        playRound(humanSelection , computerSelection);

        console.log("--------------------------------------");

        console.log(`You Picked ${humanSelection}`);
        console.log(`Computer Picked ${computerSelection}`);

        console.log("--------------------------------------");

        console.log(`You Won ${humanScore} matches`);
        console.log(`Your Opponent Won ${computerScore} matche(s)`);

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                console.log("🎉 Congrats You Won the matchup!");
            } else {
                console.log("💻 You Lost. Better Luck next time!");
            }
        humanScore = 0;
        computerScore = 0;
        
        console.log("Scores have been reset. Play again!");
        }   
    })
})


