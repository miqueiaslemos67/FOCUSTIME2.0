// Selecionando os elementos do DOM
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

let timerInterval; // Variável para armazenar o intervalo do temporizador
let isRunning = false; // Flag para verificar se o timer está em execução

// Função para iniciar o temporizador
export function startTimer() {
  if (isRunning) return; // Evitar múltiplos intervalos
  isRunning = true;

  timerInterval = setInterval(() => {
    let minutes = parseInt(minutesDisplay.textContent);
    let seconds = parseInt(secondsDisplay.textContent);

    if (seconds === 0) {
      if (minutes === 0) {
        stopTimer(); // Para o timer quando chega a zero
        alert("Tempo esgotado!");
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    // Atualizando o display
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

// Função para parar o temporizador
export function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

// Função para aumentar o tempo
export function increaseTime() {
  let minutes = parseInt(minutesDisplay.textContent);
  minutes += 5; //Adiciona mais 5 minutos
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
}

// Função para diminuir o tempo
export function decreaseTime() {
  let minutes = parseInt(minutesDisplay.textContent);
  if (minutes >= 5) {
    minutes-= 5; // Diminui mais 5 minutos
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
  } else {
    // se os minutos fores menores que 5, zerar o timer
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
  }
}


