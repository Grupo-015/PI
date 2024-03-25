function login() { 

    firebase.auth().signInWithEmailAndPassword(form.email().value, form.senha().value).then(response => {
        window.location.href = "html/operacaoV2.html";
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

function calcula() {
    
    // Padroniza os preços de cada produto
    var precoCookieTradicionalGrande = 10.00;
    var precoCookieTradicionalMini = 10.00;
    var precoCookieRecheadoDoceDeLeite = 12.00;
    var precoCookieRecheadoNutella = 14.00;
    var precoTortaDeCookieCarameloENutella = 50.00;
    var precoTortaDeCookieNutella = 50.00;

    // Retorna a quantidade de cada produto e já converte para inteiro
    var quantidadeCookieTradicionalGrande = parseInt(document.getElementById("cookieTradicionalGrande").value) || 0;
    var quantidadeCookieTradicionalMini = parseInt(document.getElementById("cookieTradicionalMini").value) || 0;
    var quantidadeCookieRecheadoDoceDeLeite = parseInt(document.getElementById("cookieRecheadoDoceDeLeite").value) || 0;
    var quantidadeCookieRecheadoNutella = parseInt(document.getElementById("cookieRecheadoNutella").value) || 0;
    var quantidadeTortaDeCookieCarameloENutella = parseInt(document.getElementById("tortaDeCookieCarameloENutella").value) || 0;
    var quantidadeTortaDeCookieNutella = parseInt(document.getElementById("tortaDeCookieNutella").value) || 0;

    // Calcula o valor total do pedido
    var valorTotal = (quantidadeCookieTradicionalGrande * precoCookieTradicionalGrande) +
                     (quantidadeCookieTradicionalMini * precoCookieTradicionalMini) +
                     (quantidadeCookieRecheadoDoceDeLeite * precoCookieRecheadoDoceDeLeite) +
                     (quantidadeCookieRecheadoNutella * precoCookieRecheadoNutella) +
                     (quantidadeTortaDeCookieCarameloENutella * precoTortaDeCookieCarameloENutella) +
                     (quantidadeTortaDeCookieNutella * precoTortaDeCookieNutella);

    // Atualizar o campo de valor total no formulário
    document.getElementById("valorTotal").value = "R$ " + valorTotal.toFixed(2);
}

function verificaCookieTradicionalGrande() {

        if(document.getElementById("cookieTradicionalGrande").value != 0) {
            var texto = "Cookie Tradicional Grande: ";
            return texto;
        }
        else {
            var texto = " ";
            return texto;
        }
}

function verificaCookieTradicionalMini() {

    if(document.getElementById("cookieTradicionalMini").value != 0) {
        var texto = "Cookie Tradicional Mini: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaCookieRecheadoDoceDeLeite() {

    if(document.getElementById("cookieRecheadoDoceDeLeite").value != 0) {
        var texto = "Cookie Recheado Doce De Leite: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaCookieRecheadoNutella() {

    if(document.getElementById("cookieRecheadoNutella").value != 0) {
        var texto = "Cookie Recheado Nutella: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaTortaDeCookieCarameloENutella() {

    if(document.getElementById("tortaDeCookieCarameloENutella").value != 0) {
        var texto = "Torta De Cookie Caramelo e Nutella: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaTortaDeCookieNutella() {

    if(document.getElementById("tortaDeCookieNutella").value != 0) {
        var texto = "Torta De Cookie Nutella: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}
