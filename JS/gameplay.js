var ComputerChoices = ["r", "p", "s"];

var UserChoiceText = document.getElementById("userchoice-text");
var ComputerChoiceText = document.getElementById("computerchoice-text");

document.onkeyup = function (event) {

    var userGuess = event.key;

    var ComputerGuess = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        UserChoiceText.textContent = "You chose: " + userGuess;
        ComputerChoiceText.textContent = " Computer Chose: " + ComputerGuess;
    }

};

