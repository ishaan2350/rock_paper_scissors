let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("The Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compscorepara.innerText =compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice is = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice is = ",compChoice);
    if(userChoice === compChoice){ 
         drawGame(); 
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }; 
};
 
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("Game Started");
        playGame(userChoice);
    });
});