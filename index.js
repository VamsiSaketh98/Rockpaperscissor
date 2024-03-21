

const choices = ["Rock","Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); 
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerscore = 0;
let computerscore = 0;

function playGame(playerChoice){

    const computerChoice =choices[ Math.floor(Math.random() *3)];
    let result ="";

    if(playerChoice === computerChoice ){
        result = "IT's A TIE!";
    }
    else{
        switch(playerChoice){
            case  "Rock":
              result = (computerChoice === "Scissors") ? "YOU WIN" : "YOU LOSE!";
              break;
              case  "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN" : "YOU LOSE!";
                break;
                case  "Scissors":
                    result = (computerChoice === "Paper") ? "YOU WIN" : "YOU LOSE!";
                    break;


        }
    }

     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
     resultDisplay.textContent = result;

     resultDisplay.classList.remove("greentext", "redtext");


     switch(result){
         case "YOU WIN":
            resultDisplay.classList.add("greentext");
            playerscore++;
            playerScoreDisplay.textContent = playerscore;
            break;
        case "YOU LOSE!" :
                resultDisplay.classList.add("redtext");
                computerscore++;
                computerScoreDisplay.textContent = computerscore;
                break;
     }


}