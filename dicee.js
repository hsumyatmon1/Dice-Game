function randomDice() {
    var diceForPlayer1 = Math.floor(Math.random() * 6 + 1);

    var diceImg1 = "images/dice" + diceForPlayer1 + ".png";

    var setImg = document.querySelectorAll("img")[0];
    setImg.setAttribute("src", diceImg1);

    var diceForPlayer2 = Math.floor(Math.random() * 6 + 1);

    var diceImg2 = "images/dice" + diceForPlayer2 + ".png";

    var setImg = document.querySelectorAll("img")[1];
    setImg.setAttribute("src", diceImg2);

    if (diceForPlayer1 > diceForPlayer2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (diceForPlayer1 < diceForPlayer2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

randomDice();
