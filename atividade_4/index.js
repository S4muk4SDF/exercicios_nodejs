// ## Importe a biblioteca ##



// ## Faça o código ##

let rs = require("readline-sync")

let day = rs.question("Qual o seu dia de aniversário? \n")

let month = rs.question("Qual o seu mês de aniversário? \n")




if (day >=21 && month == "março" ||  day <=20 && month == "abril") {
    console.log("Seu signo é Áries")
} 

else if (day >=21 && month == "abril" || day <=20 && month == "maio") {
    console.log("Seu signo é Touro")
} 

else if (day >=21 && month == "maio" || day <=20 && month == "junho") {
    console.log("Seu signo é Gêmeos")
} 

else if (day >=21 && month == "junho" || day <=22 && month == "julho") {
    console.log("Seu signo é Câncer")
} 

else if (day >=23 && month == "julho" || day <=22 && month == "agosto") {
    console.log("Seu signo é Leão")
} 

else if (day >=23 && month == "agosto" || day <=22 && month == "setembro") {
    console.log("Seu signo é Virgem")
} 

else if (day >=23 && month == "setembro" || day <=22 && month == "outubro") {
    console.log("Seu signo é Libra")
} 

else if (day >=23 && month == "outubro" || day <=21 && month == "novembro") {
    console.log("Seu signo é Escorpião")
} 

else if (day >=22 && month == "novembro" || day <=21 && month == "dezembro") {
    console.log("Seu signo é Sagitário")
} 

else if (day >=22 && month == "dezembro" || day <=20 && month == "janeiro") {
    console.log("Seu signo é Capricórnio")
} 

else if (day >=21 && month == "janeiro" || day <=18 && month == "fevereiro") {
    console.log("Seu signo é Aquário")
} 

else {
    console.log("Seu signo é Peixes")
}