let move = 0;
let redPieces = [];
let yelowPieces= [];
let gameOver = 0;
let player;
let array;

function changeColour(id) {
    let position = parseInt(id);
    if (gameOver == 0) {    
        while (position < 60) {
            position += 10;
        }
        while (redPieces.includes(position) || yelowPieces.includes(position)) {
            position -=10;
        }
        if (move % 2 == 0) {
            property = document.getElementById(position);
            property.style.backgroundColor = "#ff0000";
            redPieces.push(Number(position));
            player = "Red";
            array = redPieces;
        } else {
            property = document.getElementById(position);
            property.style.backgroundColor = "#f1ef01";
            yelowPieces.push(Number(position)); 
            player = "Yelow";
            array = yelowPieces;
        }
        ++move;
    }
    return (sortArray(array));
}

function checkRow(array) {
    for (let i = 0; i < array.length; ++i) {
        let currentPosition = parseInt(array[i]);
        let consecutive = 0;
        while (array.includes(currentPosition)) {
            ++currentPosition;
            ++consecutive;
        }
        if (consecutive >= 4) {
            printRezult();
        }
    }
}

function checkColumn() {
    for (let i = 0; i < array.length; ++i) {
        let currentPosition = parseInt(array[i]);
        let consecutive = 0;
        while (array.includes(currentPosition)) {
            currentPosition += 10;
            ++consecutive;
        }
        if (consecutive >= 4) {
            printRezult();
        }
    }
}

function checkDagonal() {
    for (let i = 0; i < array.length; ++i) {
        let currentPosition = parseInt(array[i]);
        let consecutive = 0;
        while (array.includes(currentPosition)) {
            currentPosition += 11;
            ++consecutive;
        }
        if (consecutive >= 4) {
            printRezult();
        }
    }
}

function checkSecondaryDiagonal() {
    for (let i = 0; i < array.length; ++i) {
        let currentPosition = parseInt(array[i]);
        let consecutive = 0;
        while (array.includes(currentPosition)) {
            currentPosition += 9;
            ++consecutive;
        }
        if (consecutive >= 4) {
            printRezult();      
        }
    }
}

function sortArray() {
    array.sort((a, b) => a - b);
    return (verifyWinner(array));
}

function verifyWinner(array) {
    checkRow(array);
    checkColumn(array);
    checkDagonal(array);
    checkSecondaryDiagonal(array);
}

function printRezult() {
    document.getElementById('mesage').innerText = player + " player WIN!";
    gameOver = 1;
}

 function restartGame() {
    location.reload();
 }
