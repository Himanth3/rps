const choices = ['rock', 'paper', 'scissors'];
const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');

// Add click event listeners to all choice buttons
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // Update the display of choices
        playerChoiceElement.textContent = emojis[playerChoice];
        computerChoiceElement.textContent = emojis[computerChoice];
        
        // Determine the winner
        const result = getWinner(playerChoice, computerChoice);
        
        // Update the result display
        resultElement.textContent = result;
        
        // Update scores
        if (result.includes('You win')) {
            playerScore++;
            playerScoreElement.textContent = playerScore;
        } else if (result.includes('Computer wins')) {
            computerScore++;
            computerScoreElement.textContent = computerScore;
        }
    });
});

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win! 🎉';
    }
    
    return 'Computer wins! 😢';
} 