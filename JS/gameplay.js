var ComputerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

var UserChoiceText = document.getElementById("userchoice-text");
var ComputerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text");
var tiestext = document.getElementById("ties-text");


//click event that will start the game

document.onkeyup = function (event) {

    var userGuess = event.key;

    // Generating wins/ losses / ties using (IF) statements

    var ComputerGuess = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if ((userGuess === "r" && ComputerGuess === "s") ||
            (userGuess === "s" && ComputerGuess === "p") ||
            (userGuess === "p" && ComputerGuess === "r")) {
            wins++;
        } else if (userGuess === ComputerGuess) {
            ties++;
        } else {
            losses++;
        }

        // Messege that will display if you win/loose/tie
        UserChoiceText.textContent = "You chose: " + userGuess;
        ComputerChoiceText.textContent = " Computer Chose: " + ComputerGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        tiestext.textContent = " ties: " + ties;
    }

};

