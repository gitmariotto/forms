function validarSenha() {

    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagemSenha = document.getElementById("mensagemSenha");

    if (senha1 === senha2 && senha1.length >= 8) {
        mensagemSenha.innerText = "Senha válida";
        mensagemSenha.style.color = "green";
    } else {
        mensagemSenha.innerText = "Senha inválida - mínimo 8 caracteres e iguais";
        mensagemSenha.style.color = "red";
    }

}


function verificarPromocao() {

    const idade = document.getElementById("idadePromocao").value;
    const estudante = document.getElementById("estudante").value;
    const mensagemPromocao = document.getElementById("mensagemPromocao");

    if (idade > 60 || estudante === "sim") {
        mensagemPromocao.innerText = "Tem direito ao desconto";
        mensagemPromocao.style.color = "green";
    } else {
        mensagemPromocao.innerText = "Sem desconto";
        mensagemPromocao.style.color = "red";
    }

}


function verificarEntrada() {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const mensagemBouncer = document.getElementById("mensagemBouncer");

    if (nome === "" || idade < 0) {
        mensagemBouncer.innerText = "Erro - nome vazio ou idade negativa";
        mensagemBouncer.style.color = "red";
    } else {
        mensagemBouncer.innerText = "Entrada permitida";
        mensagemBouncer.style.color = "green";
    }

}
