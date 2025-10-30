
async function cadastrar(){

    var form = document.getElementById("form-cadastro");
    var form_dados = new FormData(form);

    var retorno = await fetch("../php/cadastrar.php", {
        method: "POST",
        body: form_dados
    });

    var dados = await retorno.json();

    if(dados.status == "s") {
        alert(dados.mensagem);
    }
    else {
        alert(dados.mensagem);
    }

}