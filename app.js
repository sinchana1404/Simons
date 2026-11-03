let gameSeq = [];
let userSeq = [];

let btnArr = ["green", "red", "orange", "blue"];

let h3 = document.querySelector("h3");

let started = false;
let level = 0;
let startBtn = document.querySelector(".start");
startBtn.addEventListener("click", (event) => {
    if (started === false) {
        console.log("game started");
        started = true;
        levelUp();
        startBtn.classList.add("displayBtn");
    }
});
let count = 0;
function levelUp() {
    level++;
    h3.innerText = `level ${level}`;
    //generating random color
    let randIdx = Math.floor(Math.random() * 4);
    console.log(randIdx);
    let randClr = btnArr[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    flash(randBtn);
}
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", btnPress);
}
function btnPress() {
    flash(this);
    userClr = this.getAttribute("id");
    userSeq.push(userClr);
    matching();
}
function matching() {
    if (userSeq.length == level) {
        for (let i = 0; i < userSeq.length - 1; i++) {
            if (userSeq[i] === gameSeq[i]) {
                for (btn of btns) {
                    btn.addEventListener("click", btnPress);
                }
            }
            else {
                fail();
            }
        }
        if (userSeq[userSeq.length - 1] === gameSeq[gameSeq.length - 1]) {
           setTimeout(levelUp, 1000);
            userSeq = [];
            count++;
            
        } else {
               fail();
        
            }

    }
    else{
         for (let i = 0; i <= userSeq.length - 1; i++) {
            if (userSeq[i] === gameSeq[i]) {
                for (btn of btns) {
                    btn.addEventListener("click", btnPress);
                }
            }
            else {
               fail();
            }
        }
    }

}

startBtn

function fail(){
     h3.innerHTML = `level failed <br> your score<b> ${count}</b> press restart to start again`;
     startBtn.innerText = "restart";
     started = false;
     gameSeq = [];
     userSeq = [];
     level = 0;
     startBtn.classList.remove("displayBtn");
     count = 0;
               
}