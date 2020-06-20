// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let nomseusuario = rs.question("Digite seu nome por favor. \n")

let day = rs.question("Qual o seu dia de aniversário? \n")

let month = rs.question("Qual o seu mês de aniversário? \n")




if (day >=21 && month == "março" ||  day <=20 && month == "abril") {
    console.log(nomseusuario + ", seu signo é Áries")
} 

else if (day >=21 && month == "abril" || day <=20 && month == "maio") {
    console.log(nomseusuario + ", seu signo é Touro")
} 

else if (day >=21 && month == "maio" || day <=20 && month == "junho") {
    console.log(nomseusuario + ", seu signo é Gêmeos")
} 

else if (day >=21 && month == "junho" || day <=22 && month == "julho") {
    console.log(nomseusuario + ", seu signo é Câncer")
} 

else if (day >=23 && month == "julho" || day <=22 && month == "agosto") {
    console.log(nomseusuario + ", seu signo é Leão")
} 

else if (day >=23 && month == "agosto" || day <=22 && month == "setembro") {
    console.log(nomseusuario + ", seu signo é Virgem")
} 

else if (day >=23 && month == "setembro" || day <=22 && month == "outubro") {
    console.log(nomseusuario + ", seu signo é Libra")
} 

else if (day >=23 && month == "outubro" || day <=21 && month == "novembro") {
    console.log(nomseusuario + ", seu signo é Escorpião")
} 

else if (day >=22 && month == "novembro" || day <=21 && month == "dezembro") {
    console.log(nomseusuario + ", seu signo é Sagitário")
} 

else if (day >=22 && month == "dezembro" || day <=20 && month == "janeiro") {
    console.log(nomseusuario + ", seu signo é Capricórnio")
} 

else if (day >=21 && month == "janeiro" || day <=18 && month == "fevereiro") {
    console.log(nomseusuario + ", seu signo é Aquário")
} 

else {
    console.log(nomseusuario + ", seu signo é Peixes")
}