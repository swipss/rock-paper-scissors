const turns = ['rock', 'paper', 'scissors']
let computerScore = 0;
let playerScore = 0;


const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay()
        console.log(playRound(button.id.toLowerCase(), computerSelection))
    })
})





function computerPlay() {
    return turns[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++
        return 'You win! Rock beats paper!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ) {
        computerScore++
        return 'You lose! Paper beats rock!'
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "It's a tie!"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++
        return 'You lose! Scissors beat paper!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++
        return 'You win! Paper beats rock!'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "It's a tie!"
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "It's a tie!"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++
        return 'You lose! Rock beats scissors!'
    } else {
        playerScore++
        return 'You win! Scissors beat paper!'
    }
    
}

function game(){
    
    for (let i = 0; i < 5; i++){
        
        let playerSelection = prompt("Your choice (rock, paper, scissors): ")
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection.toLowerCase(), computerSelection))
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log("You won! The computer lost.")
    } else if (playerScore == computerScore) {
        console.log('Nobody won! It is a tie!')
    } else {
        console.log('You lost! The computer won.')
    }
}



