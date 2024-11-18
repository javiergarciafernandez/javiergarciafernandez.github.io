let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

// Elementos del DOM
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const circle = document.getElementById('circle');

// Función para actualizar la puntuación
function updateScore() {
    score++;
    scoreElement.textContent = score;
}

// Función para actualizar el tiempo
function updateTime() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        alert(`¡Game Over! Tu puntuación es ${score}`);
    }
}

// Función para mover el círculo a una posición aleatoria
function moveCircle() {
    const container = document.getElementById('game-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const maxX = containerWidth - circle.offsetWidth;
    const maxY = containerHeight - circle.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.left = randomX + 'px';
    circle.style.top = randomY + 'px';
}

// Evento de clic en el círculo
circle.addEventListener('click', () => {
    updateScore();
    moveCircle();
});

// Función para iniciar el juego
function startGame() {
    gameInterval = setInterval(moveCircle, 1000); // Mueve el círculo cada segundo
    timerInterval = setInterval(updateTime, 1000); // Resta 1 segundo al tiempo cada segundo
}

startGame();
