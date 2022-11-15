const userChild = document.querySelector(".icons-user").childNodes;
const computerChild = document.querySelector(".icons-computer").childNodes;

function computerSignGenerator() {
  elePos = [1, 3, 5];
  randomIndex = Math.trunc(Math.random() * 3);
  randomPos = elePos[randomIndex];
  genRandomSign = computerChild[randomPos];
  if (genRandomSign.classList.contains("rock")) {
    return "rock";
  } else if (genRandomSign.classList.contains("paper")) {
    return "paper";
  } else {
    return "scissors";
  }
}

function revealComputerResult(iconName) {
  let choseImgComputer = document.querySelector(".chosen-img-computer");
  choseImgComputer.setAttribute("src", `images/${iconName}.png`);
  choseImgComputer.style.display = "block";
}

function gameResultMessage(message) {
  document.querySelector(".container").classList.add("while-hidden-container");
  document.querySelector(".output").style.display = "block";
  document.querySelector(".message").innerText = message;
}

const computerSelectedSign = computerSignGenerator();
const delay = 25;

userChild.forEach((ele) => {
  ele.addEventListener("click", (imgLink) => {
    let choseImgUser = document.querySelector(".chosen-img-user");
    userSelectedSign = imgLink.target.className.split(" ")[0].trim();
    // game logic
    if (computerSelectedSign === userSelectedSign) {
      setTimeout(() => {
        gameResultMessage("Tie");
      }, delay);
    } else if (
      computerSelectedSign == "rock" &&
      userSelectedSign == "scissors"
    ) {
      setTimeout(() => {
        gameResultMessage("You Lose");
      }, delay);
    } else if (
      computerSelectedSign == "scissors" &&
      userSelectedSign == "paper"
    ) {
      setTimeout(() => {
        gameResultMessage("You Lose");
      }, delay);
    } else if (computerSelectedSign == "paper" && userSelectedSign == "rock") {
      setTimeout(() => {
        gameResultMessage("You Lose");
      }, delay);
    } else {
      setTimeout(() => {
        gameResultMessage("You Win");
      }, delay);
    }
    revealComputerResult(computerSelectedSign);
  });

  ele.addEventListener("mouseover", (imgLink) => {
    let choseImgUser = document.querySelector(".chosen-img-user");
    choseImgUser.style.display = "block";
    choseImgUser.setAttribute("src", imgLink.srcElement.currentSrc);
  });
});

document.querySelector(".btn").addEventListener("click", () => {
  window.location.reload();
});
