let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direcao = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direcao == "right") snakeX += box;
    if(direcao == "left") snakeX -= box;
    if(direcao == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;

    snake.pop();

    let cabecaNova = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(cabecaNova);
}

let jogo = setInterval(iniciarJogo, 100);
