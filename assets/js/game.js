var numOfSquares = 6;
var colors = [];
var goalColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var goalDisplay = document.querySelector("#goal");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

//Set up number of squares and colors of those squares.
function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add eventListeners to squares.
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            //Grab and compare color of chosen square.
            if (clickedColor === goalColor) {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = goalColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                //Have color fade into background.
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

//Set buttons eventListeners.
function setUpButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
    resetButton.addEventListener("click", function () {
        reset();
    }); 
}

//Set up game conditions.
function init() {
    setUpButtons();
    setUpSquares();
    reset();
}

//Reset squares and goal.
function reset() {
    colors = generateRandomColors(numOfSquares);
    goalColor = randomGoal();
    goalDisplay.textContent = goalColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

//Set all squares to the same color.
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Return a random rgb value. Eg., "212";
function randomRGBValue() {
    var test = Math.floor(Math.random() * 256);
    return test;
}

//Return a random rgb color. Eg., "rgb(43, 211, 90)";
function randomColor() {
    return "rgb(" + randomRGBValue() + ", " + randomRGBValue() + ", " + randomRGBValue() + ")";
}

//Returns a randomly chosen color from the array colors to be the goal color.
function randomGoal() {
    return colors[Math.floor(Math.random() * colors.length)];
}

//Fills the array colors with random rgb colors.
function generateRandomColors(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push(randomColor());
    }
    return array;
}