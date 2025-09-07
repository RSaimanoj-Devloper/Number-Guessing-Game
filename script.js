const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');

let attemptsLeft = 3;

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (attemptsLeft > 0) {
        if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
            feedback.textContent = '⚠️ Please enter a valid number between 1 and 100.';
        } else if (userGuess < randomNumber) {
            feedback.textContent = `Too low! Try again. Attempts left: ${--attemptsLeft}`;
        } else if (userGuess > randomNumber) {
            feedback.textContent = `Too high! Try again. Attempts left: ${--attemptsLeft}`;
        } else {
            feedback.textContent = `🎉 Congratulations! You guessed the number ${randomNumber}!`;
            guessButton.disabled = true;
            return;
        }

        if (attemptsLeft === 0) {
            feedback.textContent = `❌ Game over! The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
        }
    }

    guessInput.value = '';
    guessInput.focus();
});

guessInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    guessButton.click();
  }
});
