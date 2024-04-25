const canvas = document.getElementById('canvas');
const pizarra = canvas.getContext('2d');

let partesDibujadas = 0;

function dibujarEstructura() {
  // Dibujar poste vertical
  pizarra.beginPath();
  pizarra.moveTo(100, 300);
  pizarra.lineTo(100, 50);
  pizarra.stroke();

  // Dibujar poste horizontal
  pizarra.moveTo(50, 300);
  pizarra.lineTo(200, 300);
  pizarra.stroke();

  // Dibujar barra horizontal superior
  pizarra.moveTo(100, 50);
  pizarra.lineTo(250, 50);
  pizarra.stroke();

  // Dibujar barra vertical para sostener la cuerda
  pizarra.moveTo(250, 50);
  pizarra.lineTo(250, 100);
  pizarra.stroke();
}

function dibujarCabeza() {
  pizarra.beginPath();
  pizarra.arc(250, 130, 30, 0, Math.PI * 2);
  pizarra.stroke();
}

function dibujarCuerpo() {
  pizarra.moveTo(250, 160);
  pizarra.lineTo(250, 230);
  pizarra.stroke();
}

function dibujarBrazoIzquierdo() {
  pizarra.moveTo(250, 180);
  pizarra.lineTo(220, 200);
  pizarra.stroke();
}

function dibujarBrazoDerecho() {
  pizarra.moveTo(250, 180);
  pizarra.lineTo(280, 200);
  pizarra.stroke();
}

function dibujarPiernaIzquierda() {
  pizarra.moveTo(250, 230);
  pizarra.lineTo(220, 270);
  pizarra.stroke();
}

function dibujarPiernaDerecha() {
  pizarra.moveTo(250, 230);
  pizarra.lineTo(280, 270);
  pizarra.stroke();
}

function dibujarAhorcado() {
  if (partesDibujadas < 7) {
    switch (partesDibujadas) {
      case 0:
        dibujarEstructura();
        break;
      case 1:
        dibujarCabeza();
        break;
      case 2:
        dibujarCuerpo();
        break;
      case 3:
        dibujarBrazoIzquierdo();
        break;
      case 4:
        dibujarBrazoDerecho();
        break;
      case 5:
        dibujarPiernaIzquierda();
        break;
      case 6:
        dibujarPiernaDerecha();
        break;
    }
    partesDibujadas++;
  } else {
    reiniciarAhorcado();
  }
}

function reiniciarAhorcado() {
  pizarra.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  partesDibujadas = 0; // Reiniciar partes dibujadas
}
