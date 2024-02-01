// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = document.getElementById('guessInput').value;

    // Check if the guess is correct
    if (userGuess == secretNumber) {
        document.getElementById('message').innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        document.getElementById('message').style.color = 'green';
        disableInputAndButton();
    } else {
        attempts++;
        document.getElementById('message').innerText = 'Wrong guess. Try again!';
        document.getElementById('message').style.color = 'red';
    }
}

function disableInputAndButton() {
    // Disable input and button after correct guess
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}

function newGame() {
    // Reset the game
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
}
