

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var firstImageSrc = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", firstImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var secondImageSrc = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondImageSrc);



if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 wins! 🚩";
} else {
    document.querySelector('h1').innerHTML = "Draw!"
}
