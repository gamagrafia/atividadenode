let rs = require ('readline-sync')
let peso = rs.questionFloat ('Qual seu peso?\n')
let altura = rs.questionFloat ('Qual sua altura?\n')
let IMC= peso/(altura*altura) 
console.log ('O seu IMC é '+  IMC)

if (IMC < 17) {
    console.log ('Muito abaixo do Peso')
}
else if (IMC >= 17 <18.5)
{console.log ("Abaixo do peso")}
else if (IMC >= 18.5 < 25)
{console.log ("Peso normal")}
else if (IMC >= 25 < 30)
{console.log ("Acima do peso")}
else if (IMC >= 30 < 35)
{console.log ("Obesidade I")}
else if (IMC >= 35 < 40)
{console.log ("Obesidade II (severa)")}
else if (IMC > 40)
{console.log ("Obesidade III (mórbida)")}