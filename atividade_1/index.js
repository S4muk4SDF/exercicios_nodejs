// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nome = rs.question("Qual o seu nome? \n")

let numberVoo = rs.questionInt("Olá " + nome + ", qual o número do seu vôo? \n")

let fileira = rs.question("Qual a sua fileira? \n")

console.log(nome + ", seu número de vôo é " + numberVoo + ", e sua fileira é a " + fileira + ".")