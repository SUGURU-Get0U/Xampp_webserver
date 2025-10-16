async function gravar(){

    var form = document.getElementById("form-cadastro");
    var dados = new FormData(form);

    var resposta = await fetch("php/gravar.php", {
        method: "POST",
        body: dados
    });

    var dados_retorno = await resposta.json();

    alert(dados_retorno.mensagem);
}