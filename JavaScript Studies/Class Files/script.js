// console.log("Olá, mundo!");

const botoesPopup = document.querySelectorAll(".botao-popup");
const elemPopup = document.querySelector(".popup");
const elemBotaoFechar = document.querySelector(".botao-fechar");
const elemIconeDarkMode = document.querySelector(".img-icone");

// console.log(srcIcone);

// console.log(botoesPopup[1]);

botoesPopup[0].addEventListener("click", function () {
  elemPopup.style.display = "flex";
});

botoesPopup[1].addEventListener("click", function () {
  elemPopup.style.display = "flex";
});

elemBotaoFechar.addEventListener("click", function () {
  elemPopup.style.display = "none";
});

elemIconeDarkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const srcIcone = elemIconeDarkMode.getAttribute("src");

  if (srcIcone === "assets/icone-sol.svg") {
    elemIconeDarkMode.setAttribute("src", "assets/icone-lua.svg");
    // elemIconeDarkMode.setAttribute("alt", "Ícone Lua");
  } else {
    elemIconeDarkMode.setAttribute("src", "assets/icone-sol.svg");
  }
});
