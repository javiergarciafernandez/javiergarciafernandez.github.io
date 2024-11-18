class bola {
    constructor(x, y) {
        this.x = x; // Coordenada X de la bola
        this.y = y; // Coordenada Y de la bola
        this.radio = 10; // Radio de la bola
        this.dirX = Math.random() * 2 - 1; // Dirección aleatoria en el eje X (-1 a 1)
        this.dirY = Math.random() * 2 - 1; // Dirección aleatoria en el eje Y (-1 a 1)
        this.velocidad = 5; // Velocidad de movimiento
    }

    dibujar(ctx) {
        // Dibujamos la bola como un círculo
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fill();  // Rellenamos el círculo con el color por defecto
        ctx.closePath();
    }

    mover() {
        // Actualizamos la posición de la bola
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

        // Rebote en los bordes del canvas
        if (this.x + this.radio > canvas.width || this.x - this.radio < 0) {
            this.dirX *= -1; // Cambiamos la dirección horizontal si toca los bordes
        }
        if (this.y + this.radio > canvas.height || this.y - this.radio < 0) {
            this.dirY *= -1; // Cambiamos la dirección vertical si toca los bordes
        }
    }
}


