function mostra (frase){
    document.write (frase)
}

function calcular(){
    var valorPeso = document.getElementById ("peso")
    var valorAltura = document.getElementById ("altura")
    var resultado = valorPeso.value / (valorAltura.value * valorAltura.value) 

    if (resultado < 18.6)
        mostra ("Você tem um IMC de " + (Math.round (resultado)) + " e está abaixo do peso indicado!");

    else if (resultado >= 18.6 && resultado < 24.9)
        mostra ("Você tem um IMC de " + (Math.round (resultado)) + " e está com o peso normal!");

    else if (resultado >= 24.9 && resultado < 29.9)
        mostra ("Você tem um IMC de " + (Math.round (resultado)) + " e você está com sobrepeso!");

     else if (resultado > 29.9) 
        mostra ("Você tem um IMC de " + (Math.round(resultado)) + " e está com obesidade!");

} 
