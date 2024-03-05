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

function transicao() {

    var btnGetStart = document.getElementById("btnGetStart");
    var userLogin = document.getElementById("userLogin");

    userLogin.classList.remove("ocultar");
    userLogin.classList.add("show");

    btnGetStart.classList.remove("botao");
    btnGetStart.classList.add("ocultar");
}
