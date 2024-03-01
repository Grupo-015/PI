function login() { 

    firebase.auth().signInWithEmailAndPassword(form.email().value, form.senha().value).then(response => {
        window.location.href = "operacao.html";
    }).catch(error => {
        alert("Usuário ou senha incorretos");
        console.log("Erro", error);
    });  
    
}

const form = {
    email: () => document.getElementById("email"),
    senha: () => document.getElementById("senha"),
}

// const saveAs = require("./FileSaver");

// import { saveAs } from 'file-saver';