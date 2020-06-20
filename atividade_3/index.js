// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nomeUsuario = rs.question("Digite seu nome por favor. \n")

let lados = rs.questionFloat("Qual o tamanho dos lados do quadrado? \n")

let area = lados*lados

console.log("A área de seu quadrado é: " + area)

