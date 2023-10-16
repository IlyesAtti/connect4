let player = 0;
let redPieces = [];
let yelowPieces= [];
let gameOver = 0;

function changeColour(id) {
    let position = parseInt(id);
    if (gameOver == 0) {    
        while (position < 60) {
            position += 10;
        }
        while (redPieces.includes(position) || yelowPieces.includes(position)) {
            position -=10;
        }
        if (player % 2 == 0) {
            property = document.getElementById(position);
            property.style.backgroundColor = "#ff0000";
            redPieces.push(Number(position));
        } else {
            property = document.getElementById(position);
            property.style.backgroundColor = "#f1ef01";
            yelowPieces.push(Number(position));  
        }
        ++player;
        return (verifWiner());
    }
}

function verifWiner() {
    redPieces.sort((a, b) => a - b);
    yelowPieces.sort((a, b) => a - b);
    for (let i = 0; i < redPieces.length; ++i) {
        let currentPosition = parseInt(redPieces[i]);
        let inRow = 0;
        while (redPieces.includes(currentPosition)) {
            ++currentPosition;
            ++inRow
        }
        currentPosition = parseInt(redPieces[i]);
        let inColumn = 0;
        while (redPieces.includes(currentPosition)) {
            currentPosition += 10;
            ++inColumn;
        }
        currentPosition = parseInt(redPieces[i]);
        let mainDiagonal = 0;
        while (redPieces.includes(currentPosition)) {
            currentPosition += 11;
            ++mainDiagonal;
        }
        currentPosition = parseInt(redPieces[i]);
        let secondaryDiagonal = 0;
        while (redPieces.includes(currentPosition)) {
            currentPosition += 9;
            ++secondaryDiagonal;
        }
        if (inRow >= 4 || inColumn >= 4 || mainDiagonal >= 4 || secondaryDiagonal >= 4) {
            document.getElementById('mesage').innerText = "Red player WIN!";
            gameOver = 1;
        }
    }
    for (let i = 0; i < yelowPieces.length; ++i) {
        let currentPosition = parseInt(yelowPieces[i]);
        let inRow = 0;
        while (yelowPieces.includes(currentPosition)) {
            ++currentPosition;
            ++inRow
        }
        currentPosition = parseInt(yelowPieces[i]);
        let inColumn = 0;
        while (yelowPieces.includes(currentPosition)) {
            currentPosition += 10;
            ++inColumn;
        }
        currentPosition = parseInt(yelowPieces[i]);
        let mainDiagonal = 0;
        while (yelowPieces.includes(currentPosition)) {
            currentPosition += 11;
            ++mainDiagonal;
        }
        currentPosition = parseInt(yelowPieces[i]);
        let secondaryDiagonal = 0;
        while (yelowPieces.includes(currentPosition)) {
            currentPosition += 9;
            ++secondaryDiagonal;
        }
        if (inRow >= 4 || inColumn >= 4 || mainDiagonal >= 4 || secondaryDiagonal >= 4) {
            document.getElementById('mesage').innerText = "Yelow player WIN!";
            gameOver = 1;
        }
    }
}

 function restartGame() {
    location.reload();
 }
