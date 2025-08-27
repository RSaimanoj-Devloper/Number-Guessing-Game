const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');

let attemptsLeft = 3; // only 3 chances  are allowed to guess the number

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (attemptsLeft > 0) {
        if (userGuess < 1 || userGuess > 100) {
            feedback.textContent = '⚠️ Please enter a number between 1 and 100.';
        } else if (userGuess < randomNumber) {
            feedback.textContent = `Too low! Try again. Attempts left: ${--attemptsLeft}`;
        } else if (userGuess > randomNumber) {
            feedback.textContent = `Too high! Try again. Attempts left: ${--attemptsLeft}`;
        } else {
            feedback.textContent = `🎉 Congratulations! You guessed the number ${randomNumber}!`;
            guessButton.disabled = true; // for stoping further guesses
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