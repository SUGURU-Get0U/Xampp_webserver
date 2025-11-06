console.log("eu estou vivo");
// Adicionar o Listener no botão
document.getElementById("submit-btn").addEventListener("click", data_fetch);
// document.getElementById("submit-btn").addEventListener("click", listar_users);

async function data_fetch() {
  try {
    // armazenar os dados do formulário
    var form = document.getElementById("my_form");
    var formData = new FormData(form); // armazena os dados do formulario

    // criação da promisse
    // await pra esperar o json encode do php
    var promisse = await fetch("./php/login.php", {
      method: "POST",
      body: formData,
    });

    console.log(promisse); // printa a nossa FULLFILLED promisse

    // fazer o json encode da nova promisse

    var new_promisse = await promisse.json();

    console.log(new_promisse);

    // recebi a promisse do php, agora fazer um for para mostrar os dados
    for (i = 0; i < dados.length; i++) {
      // iterar sobre o JSON e printar os dados em linhas separadas
      console.log(dados[i].nome); // printa o nome do produto
      console.log(dados[i].descricao); // printa a descrição do produto
      console.log(dados[i].price); // printa o preço do produto

      var user_list_data = `
      <p>${dados[i].nome}</p>
      `;

      // printar na div do html
      document.getElementById("user-list").innerHTML(user_list_data);
    }
  } catch (erro) {
    // protocolo para captura de erros de conexão
    console.error(erro.message);
    alert("Erro de comunicação com o Backend");
  }
}

// async function listar_users() {
//   try {
//     // armazenar os dados do formulário
//     var form = document.getElementById("my_form");
//     var formData = new FormData(form); // armazena os dados do formulario

//     // criação da promisse
//     // await pra esperar o json encode do php
//     var promisse = await fetch("./php/login.php", {
//       method: "GET",
//       body: formData,
//     });

//     var resultado2 = await promisse.json();

//     console.log(resultado2);

//     for (i = 0; i < dados.length; i++) {
//       document
//         .getElementById("user-list")
//         .innerHTML(`<p>${dados[i].name}</p><br/>`);
//     }
//   } catch (error) {
//     console.error("erro: ", error.message);
//     alert("");
//   }
// }
