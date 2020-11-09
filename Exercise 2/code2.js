document.addEventListener("DOMContentLoaded", () => {
    let pictures = ["bee.jpg","bird.jpg","fish.jpg","fox.jpg","unicorn.jpg"];
    let x = 0;
    document.querySelector("#prev").addEventListener("click", () => {
        if (x == 0) {
            x = 4;
        }
        else if (x == 1) {
            x = 0;
        }
        else if (x == 2) {
            x = 1;
        }
        else if (x == 3) {
            x = 2;
        }
        else if (x == 4) {
            x = 3;
        }
        document.getElementById("myImg").src = pictures[x];
    })
    document.querySelector("#next").addEventListener("click", () => {
        if (x == 0) {
            x = 1;
        }
        else if (x == 1) {
            x = 2;
        }
        else if (x == 2) {
            x = 3;
        }
        else if (x == 3) {
            x = 4;
        }
        else if (x == 4) {
            x = 0;
        }
        document.getElementById("myImg").src = pictures[x];
    })
});