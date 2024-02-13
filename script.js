let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let winbox = document.querySelector("#win");
let clicks = 0;
let gamewon = false;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnx = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        clicks++;
        if (turnx) {
            box.innerText = "X";
            turnx = false;

        } else {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        checkwin();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkwin = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                winbox.innerText = `Congratulations, Winner is ${val1} !!!`;
                disableboxes();
                gamewon = true;
                break;
            }
        }
    }
    if (!gamewon && clicks === 9) {
        winbox.innerText = "Game Draw!! (Reset to play again)";
    }

};

resetbtn.addEventListener("click", () => {
    enableboxes();
    winbox.innerText = "";
    clicks = 0;
    turnx = true;
    gamewon = false;
})