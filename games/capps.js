const choices = ["heads", "tails"];
const images = {
    "heads": "images/heads.jpg",
    "tails": "images/tails.jpg",
    "both": "images/both.jpg"
};

const score = [0, 0]; // [wins, losses]

const gameArea = document.querySelector('#gameArea');
const coinImage = document.querySelector('#coinImage');
const result = document.querySelector('#result');
const winsDisplay = document.querySelector('#wins');
const lossesDisplay = document.querySelector('#losses');

// Automatically show the game area and initial message
gameArea.style.display = 'block';
coinImage.src = images["both"];
result.textContent = "Choose heads or tails!";

document.getElementById('buttons').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const userChoice = event.target.getAttribute('data-choice');
        const tossIndex = Math.floor(Math.random() * 2); // 0 or 1
        const tossResult = choices[tossIndex];

        coinImage.src = images[tossResult];

        if (userChoice === tossResult) {
            score[0]++; // win
            result.textContent = `Correct! It was ${tossResult}.`;
        } else {
            score[1]++; // loss
            result.textContent = `Wrong! It was ${tossResult}.`;
        }
        winsDisplay.textContent = score[0];
        lossesDisplay.textContent = score[1];
    }
});
