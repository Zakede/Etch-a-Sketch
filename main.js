let color = "black";
let click = true;

function populateBoard(size) {

    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "whitesmoke";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 & input <= 100) {
        populateBoard(input);
        document.getElementById("boxError").textContent = "Box Size Is " + input;
    }
    else{
        document.getElementById("boxError").textContent = "Input Value From 2-100!";
    }
}


function colorSquare() {
    if (click){
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "whitesmoke");
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON"){
        click = !click
        if(click) {
            document.querySelector(".mode").textContent = "Mode: Coloring!";
        }else{
            document.querySelector(".mode").textContent = "Mode: Not Coloring!";
        }
    }
});

document.getElementById("boxError").addEventListener("click");