// Array com todos os idiomas
const languages = [
  "Bem-vindo ao lyrics.com",
  "Welcome to lyrics.com",
  "Bienvenido a lyrics.com",
  "欢迎来到 lyrics.com",
  "Benvenuti su lyrics.com",
  "lyrics.com에 오신 것을 환영합니다",
  "lyrics.comへようこそ",
  "Добро пожаловать на lyrics.com",
  "Willkommen bei lyrics.com",
  "Bienvenue sur lyrics.com",
];

let currentIndex = 0;
let intervalId = null;
const welcomeElement = document.getElementById("welcome");

// Função para trocar idioma
function changeLanguage() {
  currentIndex = (currentIndex + 1) % languages.length;
  const newText = languages[currentIndex];
  welcomeElement.style.setProperty("--welcome-text", `"${newText}"`);
}

// Iniciar ciclo automático
function startLanguageCycle() {
  if (intervalId) return; // Já está rodando

  intervalId = setInterval(() => {
    // Troca no meio da animação (quando opacity = 0)
    setTimeout(changeLanguage, 1500); // 1s = meio de 2s
  }, 3000); // A cada 2s (duração da animação)
}

startLanguageCycle();
