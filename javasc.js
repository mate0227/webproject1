const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
let playerChoice;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playGame();
  });
});

function playGame() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

 const opponentImage = document.querySelector('#ellenfel-kepe');
  opponentImage.setAttribute('src', `${computerChoice}.png`);

  switch (playerChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(playerChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(playerChoice, computerChoice);
      break;
  }
}

function win(player, computer) {
  result.style.color = 'green';
  result.textContent = `${player} beats ${computer}. You win!`;
}

function lose(player, computer) {
  result.style.color = 'red';
  result.textContent = `${player} loses to ${computer}. You lose!`;
}

function draw(player, computer) {
  result.style.color = 'black';
  result.textContent = `${player} equals ${computer}. It's a draw!`;
}
