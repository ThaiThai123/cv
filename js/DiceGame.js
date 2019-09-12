
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "file:///Users/hgpmac169/Desktop/Web_Development/DiceGame_Images/" + randomDiceImage; //images/dice1.png - images/dice6.png


document.getElementsByClassName("dice-img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "file:///Users/hgpmac169/Desktop/Web_Development/DiceGame_Images/" + "dice" + randomNumber2 + ".png";

document.getElementsByClassName("dice-img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
