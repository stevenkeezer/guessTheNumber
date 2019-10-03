let guessButton = document.getElementById("button");
let randomNum = Math.floor(Math.random() * (100 - 1) + 1);
let guessArray = [];
document.getElementById("guessInput").focus();

var timeLeft = 30;
var elem = document.getElementById("some_div");
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (count.innerHTML > 0) {
    if (timeLeft == 0) {
      count.innerHTML = String(count.innerHTML - 1);
      count.style.color = "red";
      timeLeft = 30;
    } else {
      elem.innerHTML = timeLeft
      timeLeft--;
    }
  } else {
    document.getElementsByTagName("audio")[0].play();
    document.getElementsByTagName("span")[0].innerHTML = "You Lose!";
    document.getElementById("playAgain").style.display = "inline-block";
    clearInterval(timerId);
  }
}

function numberGame() {
  let guess = document.getElementById("guessInput").value;
  let resultArea = document.getElementById("resultArea");
  let count = document.getElementById("count");

  if (guess === "" || !Number(guess) || count.innerHTML === '0') {
  } else if (guessArray.includes(guess)) {
    resultArea.innerHTML = "You guessed that number already";
  } else if (count.innerHTML === "1") {
    count.innerHTML = String(0);
    count.style.color = "red";
    document.getElementsByTagName("audio")[0].play();
    document.getElementsByTagName("span")[0].innerHTML = "You Lose!";
    document.getElementById("playAgain").style.display = "inline-block";
  } else if (guess > randomNum) {
    timeLeft = 30;
    guessArray.push(guess);
    resultArea.innerHTML = "Less <i class='fas fa-arrow-alt-circle-down'></i>";
    count.innerHTML = String(count.innerHTML - 1);
    count.style.color = "red";
    resultArea.style.color = "red";
    document.getElementById("pastGuess").style.display = "flex";
    for (var i = 0; i < guessArray.length; i++) {
      document.getElementById("pastGuesses").innerHTML = guessArray.join(", ");
    }
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
  } else if (guess < randomNum) {
    timeLeft = 30;
    guessArray.push(guess);
    resultArea.innerHTML = "More <i class='fas fa-arrow-alt-circle-up'></i>";;
    count.innerHTML = String(count.innerHTML - 1);
    count.style.color = "red";
    resultArea.style.color = "red";
    document.getElementById("pastGuess").style.display = "flex";
    for (var i = 0; i < guessArray.length; i++) {
      document.getElementById("pastGuesses").innerHTML = guessArray.join(", ");
    }
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
  } else {
    document.getElementsByTagName("span")[0].innerHTML = "You Lose!";
  }
}
