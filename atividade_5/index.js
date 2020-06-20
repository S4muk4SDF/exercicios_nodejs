// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nomeUsuario = rs.question("Digite seu nome por favor. \n")

let text = rs.question("Digite qualquer coisa \n")

console.log(nomeUsuario + ", você digitou " + text.length + " caracteres") 