-- CREATE DATABASE banco;

-- USE banco;

CREATE TABLE pedidos (
    
    id INT NOT NULL AUTO_INCREMENT,
    
    -- Dados do Comprador
    nomeComprador TEXT,
    emailComprador TEXT,
    telefoneComprador TEXT,

    -- Menu
    cookieTradicionalGrande TEXT,
    cookieTradicionalMini TEXT,
    cookieRecheadoDoceDeLeite TEXT,
    cookieRecheadoNutella TEXT,
    tortaDeCookieCarameloENutella TEXT,
    tortaDeCookieNutella TEXT,

    -- Dados da Entrega
    ruaEntrega TEXT,
    numeroEntrega TEXT,
    cepEntrega TEXT,
    estadoEntrega TEXT,
    cidadeEntrega TEXT,
    dataEntrega TEXT,

    -- Valor
    valorTotal TEXT,

    
    PRIMARY KEY (id)
    
) DEFAULT CHARSET = utf8;

INSERT INTO pedidos (
    
    nomeComprador, 
    emailComprador, 
    telefoneComprador,

    cookieTradicionalGrande,
    cookieTradicionalMini,
    cookieRecheadoDoceDeLeite,
    cookieRecheadoNutella,
    tortaDeCookieCarameloENutella,
    tortaDeCookieNutella,

    ruaEntrega,
    numeroEntrega,
    cepEntrega,
    estadoEntrega,
    cidadeEntrega,
    dataEntrega,

    valorTotal
    
    ) 
    
VALUES (
    
    "nome", 
    "email", 
    "telefone",
    
    "cookieTradicionalGrande",
    "cookieTradicionalMini",
    "cookieRecheadoDoceDeLeite",
    "cookieRecheadoNutella",
    "tortaDeCookieCarameloENutella",
    "tortaDeCookieNutella",

    "rua-entrega",
    "numero-entrega",
    "cep-entrega",
    "estado-entrega",
    "cidade-entrega",
    "dat-entrega",

    "valorTotal"
    
    );