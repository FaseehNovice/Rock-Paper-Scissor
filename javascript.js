
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

function getHumanChoice(){
    let humanChoice = parseInt(prompt("Choose\n1: Rock\n2: Paper\n3: Scissors "))
    if(humanChoice == 1){
        return "Rock"
    }
    else if(humanChoice == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , compChoice){
    if(humanChoice == compChoice){
        console.log("That's a tie");
    }
    else if((humanChoice == "Rock" && compChoice == "Scissor") 
        || (humanChoice == "Paper" && compChoice == "Rock") 
        || (humanChoice == "Scissor" && compChoice == "Paper")){
        console.log("You Win");
        console.log(++humanScore);
    }
    else{
        console.log("You Lose");
        console.log(++computerScore);
    }

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(`You Picked ${humanSelection}`);
console.log(`Computer Picked ${computerSelection}`);

playRound(humanSelection , computerSelection);