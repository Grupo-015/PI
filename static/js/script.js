function login() { // Possibilita o login pelo Flask
  
    var nome = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if ((nome == "Maki") && (senha == "123")) {
        window.location.href = "/operacaoV2";
    }
    else {
        alert("Usuário ou senha incorretos")
    }
}

function loginGitHub() { // Possibilita o login pelo GitHub
  
    var nome = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if ((nome == "Maki") && (senha == "123")) {
        window.location.href = "templates/html/operacaoGitHub.html";
    }
    else {
        alert("Usuário ou senha incorretos")
    }
}

function transicao() { // Faz o efeito de esmaecer após clicar no botão Get Start

    var btnGetStart = document.getElementById("btnGetStart");
    var userLogin = document.getElementById("userLogin");

    userLogin.classList.remove("ocultar");
    userLogin.classList.add("show");

    btnGetStart.classList.remove("botao");
    btnGetStart.classList.add("ocultar");
}

function calcula() { // Calcula o valor total do pedido de maneira automática ao detectar mudanças
    
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
    document.getElementById("valorTotalOculto").value = valorTotal;
}

function verificaCookieTradicionalGrande() { // Possibilita que apenas apareçam na nota fiscal os produtos efetivamente encomendados

        if(document.getElementById("cookieTradicionalGrande").value != 0) {
            var texto = "Cookie Tradicional Grande: ";
            return texto;
        }
        else {
            var texto = " ";
            return texto;
        }
}

function verificaCookieTradicionalMini() { // Possibilita que apenas apareçam na nota fiscal os produtos efetivamente encomendados

    if(document.getElementById("cookieTradicionalMini").value != 0) {
        var texto = "Cookie Tradicional Mini: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaCookieRecheadoDoceDeLeite() { // Possibilita que apenas apareçam na nota fiscal os produtos efetivamente encomendados

    if(document.getElementById("cookieRecheadoDoceDeLeite").value != 0) {
        var texto = "Cookie Recheado Doce De Leite: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaCookieRecheadoNutella() { // Possibilita que apenas apareçam na nota fiscal os produtos efetivamente encomendados

    if(document.getElementById("cookieRecheadoNutella").value != 0) {
        var texto = "Cookie Recheado Nutella: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaTortaDeCookieCarameloENutella() { // Possibilita que apenas apareçam na nota fiscal os produtos efetivamente encomendados

    if(document.getElementById("tortaDeCookieCarameloENutella").value != 0) {
        var texto = "Torta De Cookie Caramelo e Nutella: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function verificaTortaDeCookieNutella() { // Possibilita que apenas apareçam na nota fiscal os produtos efetivamente encomendados

    if(document.getElementById("tortaDeCookieNutella").value != 0) {
        var texto = "Torta De Cookie Nutella: ";
        return texto;
    }
    else {
        var texto = " ";
        return texto;
    }
}

function somaCookieTradicionalGrande() { // Botão “Cookie” que adiciona uma unidade do produto no pedido
    
    document.getElementById("cookieTradicionalGrande").value++;
    calcula();

}

function somaCookieTradicionalMini() { // Botão “Cookie” que adiciona uma unidade do produto no pedido
    
    document.getElementById("cookieTradicionalMini").value++;
    calcula();

}

function somaCookieRecheadoDoceDeLeite() { // Botão “Cookie” que adiciona uma unidade do produto no pedido
    
    document.getElementById("cookieRecheadoDoceDeLeite").value++;
    calcula();

}

function somaCookieRecheadoNutella() { // Botão “Cookie” que adiciona uma unidade do produto no pedido
    
    document.getElementById("cookieRecheadoNutella").value++;
    calcula();

}

function somaTortaDeCookieCarameloENutella() { // Botão “Cookie” que adiciona uma unidade do produto no pedido
    
    document.getElementById("tortaDeCookieCarameloENutella").value++;
    calcula();

}

function somaTortaDeCookieNutella() { // Botão “Cookie” que adiciona uma unidade do produto no pedido
    
    document.getElementById("tortaDeCookieNutella").value++;
    calcula();

}
