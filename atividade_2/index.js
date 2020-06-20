// ## Importe a biblioteca ##



// ## Faça o código ##

let rs = require("readline-sync")

let nomeUsuario = rs.question("Qual o seu nome por favor? \n")

let mask = rs.question(nomeUsuario + ", ao sair de casa você sempre utiliza máscara? \n")

let hand = rs.question(nomeUsuario + ", você está higienizando as mãos frequentemente?\n")

    if (mask == "sim" && hand == "sim") {
        console.log("Parabéns, continue fazendo sua parte, e juntos sairemos dessa!")
    } else {
        console.log("Atenção: o uso de máscara, e a higiene das mão são essenciais para combater a covid-19, por favor, atente-se mais para a preservação de todos.")
    }