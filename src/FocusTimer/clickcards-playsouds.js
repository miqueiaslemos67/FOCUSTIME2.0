// Função para reproduzir som
export function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

// Mapeamento de sons para os IDs dos cartões
const soundMap = {
  forest: "./FOCUSTIME2.0/assets/Floresta.wav",
  rain: "./assets/chuva.wav",
  coffee: "./assets/Cafeteria.wav",
  fireplace: "./assets/Lareira.wav",
};

// Adicionar eventos de clique aos cartões
Object.keys(soundMap).forEach((id) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", () => playSound(soundMap[id]));
  }
});
