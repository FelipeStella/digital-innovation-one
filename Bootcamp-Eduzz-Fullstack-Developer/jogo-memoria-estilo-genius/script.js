let order = [];
let clickOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');
const brown = document.querySelector('.brown');
const orange = document.querySelector('.orange');
const play = document.querySelector('.button-play-game');
const points = document.getElementById('points');

points.value = score;

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 8);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 800;

    setTimeout(() => {
        element.classList.add('selected'); 
    }, number - 250)

    setTimeout(() => {
        element.classList.remove('selected');
    }, number)
}

//faz a checagem da ordem dos botões clicados
let checkOrder = () => {
    let error = false;
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            error = true;
            gameOver();
            break;
        } 
    }

    if(clickOrder.length == order.length && error == false) {
        nextLevel();
    }
}

//função de interação de click das cores
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//função de retorno para cor
let createColorElement = (color) => {
    switch(color) {
        case 0:
            return red;
        case 1:
            return blue;
        case 2:
            return green;
        case 3:
            return yellow;
        case 4:
            return brown;
        case 5:
            return pink;
        case 6:
            return purple;
        case 7:
            return orange;
    }
}

//Avanço de nível
let nextLevel = () => {
    score++;
    points.value = score;
    shuffleOrder();
}

//Gane Over
let gameOver = () => {
    alert(`You Lose!\n Final Score: ${score}\n Click play to start new game!`);
    order = [];
    clickOrder = [];
    score = 0;
}

//Inicia novo jogo
let playGame = () => {
    order = [];
    clickOrder = [];
    score = 0;
    points.value = score;
    shuffleOrder();
}

//eventos de click
red.onclick = () => click(0);
blue.onclick = () => click(1);
green.onclick = () => click(2);
yellow.onclick = () => click(3);
brown.onclick = () => click(4);
pink.onclick = () => click(5);
purple.onclick = () => click(6);
orange.onclick = () => click(7);
play.onclick = () => playGame();


