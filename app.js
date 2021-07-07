const userChild = document.querySelector(".icons-user").childNodes;
const computerChild = document.querySelector(".icons-computer").childNodes;

function computerSignGenerator() {
    elePos = [1, 3, 5]
    randomIndex = Math.trunc(Math.random() * 3);
    randomPos = elePos[randomIndex];
    genRandomSign = computerChild[randomPos];
    if (genRandomSign.classList.contains("rock")) {
        return "rock";
    }
    else if (genRandomSign.classList.contains("paper")) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function revealComputerResult(iconName){
    let choseImgComputer = document.querySelector(".chosen-img-computer");
    choseImgComputer.setAttribute("src",`images/${iconName}.png`);
    choseImgComputer.style.display = "block"
};


function gameResultMessage(message){
    document.querySelector(".container").classList.add("while-hidden-container");
    document.querySelector(".output").style.display = "block";
    document.querySelector(".message").innerText = message;
}

const computerSelectedSign = computerSignGenerator();

userChild.forEach((ele) => {

    ele.addEventListener("click", (imgLink) => {
        let choseImgUser = document.querySelector(".chosen-img-user");
        userSelectedSign = imgLink.target.className.split(" ")[0].trim();
        // game logic
        if(computerSelectedSign === userSelectedSign){
            gameResultMessage("Tie");

        }

        else if(computerSelectedSign == "rock" && userSelectedSign == "scissors" ){
            gameResultMessage("You Lose");
        }

        else if(computerSelectedSign == "scissors" && userSelectedSign == "paper" ){
            gameResultMessage("You Lose");
        }


        else if(computerSelectedSign == "paper" && userSelectedSign == "rock" ){
            gameResultMessage("You Lose");
        }

        else{
            gameResultMessage("You Win");
        }
        revealComputerResult(computerSelectedSign);
    });

    ele.addEventListener("mouseover", (imgLink) => {
        let choseImgUser = document.querySelector(".chosen-img-user");
        choseImgUser.style.display = "block";
        choseImgUser.setAttribute("src", imgLink.srcElement.currentSrc);

    });

    // ele.addEventListener("mouseout", (imgLink) => {
    //     choseImgUser = document.querySelector(".chosen-img-user");
    //     choseImgUser.style.display = "none";
    // });


});

document.querySelector(".btn").addEventListener("click", ()=>{
    window.location.reload();
});
