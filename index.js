let paper = document.querySelector("#paper");
let stone = document.querySelector("#stone");
let scissor = document.querySelector("#scissor");

let userInput = '';
let turns = ['paper', 'scissor', 'stone'];

//this block reads user input
{
    paper.addEventListener("click", () => {
        // console.log("Paper was clicked");
        userInput = "paper";
        winner = findWinner();

    })

    scissor.addEventListener("click", () => {
        // console.log("Scissor was clicked");
        userInput = "scissor";
        winner = findWinner();
    })

    stone.addEventListener("click", () => {
        // console.log("Stone was clicked");
        userInput = "stone";
        winner = findWinner();
    })
}


//Winner decision block
function findWinner() {
    let winner = "Computer";

    let compTurn = turns[Math.floor(Math.random() * turns.length)];
    if (compTurn == userInput) {
        winner = "NoBody";
    } else if (userInput === "paper") {
        if (compTurn === "stone")
            winner = "User";
    } else if (userInput === "stone") {
        if (compTurn === "paper")
            winner = "User"
    } else if (userInput === "scissor") {
        if (compTurn === "stone")
            winner = "User";
    }
    displayWinner(winner);
    updateScore(winner);
    // console.log(userInput, compTurn, winner);
    return winner;
}

function displayWinner(winner) {
    let won = document.querySelector("#result");
    if (winner === "NoBody")
        won.innerText = "It's a draw.";
    else if (winner === 'User')
        won.innerText = "You won this match.";
    else
        won.innerText = 'Computer won this match.';
}

//function to update score
function updateScore(winner) {
    if (userInput !== '') {
        console.log(winner);
        let result = document.createElement('h3');
        result.innerText = `${winner} won this turn`;
        if (winner === "NoBody") {
            result.innerText = "It's a draw";
            let drawn = document.querySelector("#drawScore");
            let prev = parseInt(drawn.innerText);
            drawn.innerText = prev + 1;
        }
        else if (winner === 'Computer') {
            let computerScorecard = document.querySelector("#computerScore");
            let prev = parseInt(computerScorecard.innerText);
            computerScorecard.innerText = prev + 1;
        }
        else if(winner==='User'){
            let userScorecard = document.querySelector("#userScore");
            let prev = parseInt(userScorecard.innerText);
            userScorecard.innerText = prev + 1;
        }

    }
}
