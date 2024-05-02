CREATE SCHEMA `databasecookies` ;

CREATE TABLE `databasecookies`.`pedidos` (
  `nomeComprador` VARCHAR(90) NULL,
  `emailComprador` VARCHAR(45) NULL,
  `telefoneComprador` VARCHAR(45) NULL,
  `cookieTradicionalGrande` VARCHAR(45) NULL,
  `cookieTradicionalMini` VARCHAR(45) NULL,
  `cookieRecheadoDoceDeLeite` VARCHAR(45) NULL,
  `cookieRecheadoNutella` VARCHAR(45) NULL,
  `tortaDeCookieCarameloENutella` VARCHAR(45) NULL,
  `tortaDeCookieNutella` VARCHAR(45) NULL,
  `valorTotal` VARCHAR(45) NULL,
  `ruaEntrega` VARCHAR(45) NULL,
  `numeroEntrega` VARCHAR(45) NULL,
  `cepEntrega` VARCHAR(45) NULL,
  `estadoEntrega` VARCHAR(45) NULL,
  `cidadeEntrega` VARCHAR(45) NULL,
  `dataEntrega` VARCHAR(45) NULL,
  `observacoes` VARCHAR(45) NULL);
