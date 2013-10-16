var wordLetters = ['F', 'O', 'X'];
var correctGuessedLetters = [];

function askUser() {
    var guessedLetter = prompt("Enter a letter:");
    return guessedLetter;
}

function guessLetter(guessedLetter) {
    while (wordLetters.length !== 0) {
        for (i = 0; i < wordLetters.length; i++)
            if (guessedLetter == wordLetters[i]){
                correctGuessedLetters.push(guessedLetter);
                wordLetters.splice(i, 1);
                console.log("You found a letter in the word!");
            }
    } if (wordLetters.length === 0) {
            console.log("Congratulations, you guessed the word!");
        }
}

guessLetter(askUser());



/*
Loop through wordLetters array to check for guessed letter
if guessed letter is in wordLetters, add to guessedLetter array
Log the guessedLetter 
congratulate user (by logging to console?)
determine if all letters have been guessed
if not, congratulate for winning
*/