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

    // Forma 1 de fazer

            // var valorPeso = prompt ("Informe seu peso.");
            // var valorAltura = prompt ("Informe sua altura.");


            // function calcular(valor1, valor2){

            //     return valor1 / (valor2 * valor2);

            // } 
            //     var imc = calcular (valorPeso, valorAltura);
            //     document.write ("O IMC é igual a " + imc)





    // Forma 2 de fazer
    
            //     var valorPeso = document.getElementById ("peso")
            //     var valorAltura = document.getElementById ("altura")

            //     function calcular(valor1, valor2){
            //     console.log ("O valor do IMC é " + resultado)
            //     return valor1 / (valor2 * valor2);
                
            // }
            //     var resultado = calcular(59,1.80);