function login() { 

    firebase.auth().signInWithEmailAndPassword(form.email().value, form.senha().value).then(response => {
        window.location.href = "html/operacao.html";
    }).catch(error => {
        alert("Usuário ou senha incorretos");
        console.log("Erro", error);
    });  
    
}

const form = {
    email: () => document.getElementById("email"),
    senha: () => document.getElementById("senha"),
}

// TESTES COM JAVASCRIPT

function transicao() {

    var btnGetStart = document.getElementById("btnGetStart");
    var userLogin = document.getElementById("userLogin");

    // Esmaece o painel de início
    // btnGetStart.style.opacity = "0";
    // btnGetStart.style.transition = "opacity 0s ease-in-out";

    // Exibe o painel de login
    userLogin.classList.remove("ocultar");
    userLogin.classList.add("show");

    btnGetStart.classList.remove("botao");
    btnGetStart.classList.add("ocultar");
}

// TESTES COM JAVASCRIPT


// const saveAs = require("./FileSaver");

// import { saveAs } from 'file-saver';
