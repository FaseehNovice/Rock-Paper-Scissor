
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
