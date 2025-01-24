import { startTimer, stopTimer, increaseTime, decreaseTime } from "./Focustimer/timer.js";
import { playSound } from "./FocusTimer/clickcards-playsouds.js";

// Adicionando os eventos aos botões
document.getElementById('play').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('increase').addEventListener('click', increaseTime);
document.getElementById('decrease').addEventListener('click', decreaseTime);
