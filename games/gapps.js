let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
let guessCount = 1;
let restButton;

const guessForm = document.querySelector('.guessForm');
const guessField = document.querySelector('.guessField');
const prevGuesses = document.querySelector('.prevGuesses');
const resultSpan = document.querySelector('.lastResults');

guessForm.addEventListener('submit', checkGuess);

function checkGuess(event) {
    event.preventDefault();

    resultSpan.classList.remove('tooBig', 'tooSmall', 'justRight', 'tooMany');

    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        prevGuesses.textContent = 'Previous guesses: ';
    }

    prevGuesses.textContent += `${userGuess}  `;

    if (userGuess === randomNumber) {
        resultSpan.textContent = 'Congratulations! You got it right!';
        resultSpan.classList.add('justRight');
        gameOver();
    } else if (guessCount === 10) {
        resultSpan.textContent = '!!!GAME OVER - Too many tries!!!';
        resultSpan.classList.add('tooMany');
        gameOver();
    } else {
        if (userGuess < randomNumber) {
            resultSpan.textContent = 'Last guess was too low!';
            resultSpan.classList.add('tooSmall');
        } else {
            resultSpan.textContent = 'Last guess was too high!';
            resultSpan.classList.add('tooBig');
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}


function gameOver() {
    guessField.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.fontSize = 'x-large';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', resetGame);
    resetButton.focus();
}

function resetGame() {
    guessCount = 1;

    prevGuesses.textContent = '';
    resultSpan.textContent = '';
    resultSpan.classList.remove('justRight', 'tooMany');

    guessField.disabled = false;
    guessField.value = '';
    guessField.focus();

    resetButton.parentNode.removeChild(resetButton);

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
}
