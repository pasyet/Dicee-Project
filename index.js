function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var firstImageScr = `images/dice${randomNumber1}.png`;
    document.querySelector("img.img1").setAttribute("src", firstImageScr)

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var secondImageScr = `images/dice${randomNumber2}.png`;
    document.querySelector("img.img2").setAttribute("src", secondImageScr);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}


var button = document.getElementById('button');
button.onclick = function () {
    var reuslt = dice.roll();
}