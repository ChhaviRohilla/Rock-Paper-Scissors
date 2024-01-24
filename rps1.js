// To Track userChoice
let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        let compChoice=gencompChoice();
        console.log("userChoice = ",userChoice);
        console.log("compChoice = ",compChoice);
        playGame(userChoice,compChoice);
    })
})

//To generate compChoice
let gencompChoice=()=>{
    let options =["rock","paper","scissors"]
    let randIdx=Math.floor(Math.random()*3);
    let compChoice= options[randIdx];
    return compChoice;
}

//Draw Game Condition
let drawGame=()=>{
    console.log("Game Is Drawn! Play Again");
    msg.innerText= "Game Is Drawn! Play Again";
    msg.style.backgroundColor="rgb(5, 41, 69)";
    msg.style.color="white";
}

// Main logic
let playGame=(userChoice,compChoice)=>{
    // case-1 Draw 
    // case-2 Other
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(compChoice=="rock"){
            // paper scissor
            userWin=userChoice=="paper"?true:false;
        }
        else if(compChoice=="paper"){
            // rock scissor
            userWin=userChoice=="scissors"?true:false;
        }
        else if(compChoice=="scissors"){
            // rock paper 
            userWin=userChoice=="rock"?true:false;
        }whoWin(userWin,userChoice,compChoice);
    }
}

// To Track Winner
let whoWin=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        console.log("You Win!");
        userScore++;
        console.log("userScore = ",userScore);
        user_score.innerText=userScore;
        msg.innerText=`You win! :) Your ${userChoice} beats ${compChoice}`;
        // msg.style.backgroundColor="rgb(9 255 22)";
        msg.style.backgroundColor="lightgreen"
        msg.style.color="black";
    }
    else{
        console.log("You Lost!");
        compScore++;
        console.log("compScore = ",compScore);
        comp_score.innerText=compScore;
        msg.innerText=`You lost :( Comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="rgb(204 36 27)";
        msg.style.color="white";
    }
}

// To Access Scores
let userScore=0;
let compScore=0;
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");

// To Access msg
let msg=document.querySelector("#msg");
