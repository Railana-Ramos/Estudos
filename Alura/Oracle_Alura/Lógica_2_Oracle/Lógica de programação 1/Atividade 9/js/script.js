function sorteia() {

    return Math.round(Math.random() * 10);

}

function sorteiaNumeros(quantidade){
    
    var segredos = [];

    var numero = 1; 

        while (numero <= quantidade) {

            var numeroAleatorio = sorteia();
            var achou = false;
            
                if (numeroAleatorio !== 0){

                        for (var posicao = 0; posicao < segredos.length; posicao++){

                            if (segredos[posicao] == numeroAleatorio){
                                achou = true;
                                break
                            }

                        }
                            if (achou == false) {
                                segredos.push(numeroAleatorio);
                                numero++;
                            }
                    }

        }
             return segredos;
}

var segredos = sorteiaNumeros(5);
console.log (segredos);

var input = document.querySelector("input")
input.focus();

function verificar(){

    var achou = false
        for (var posicao = 0; posicao < segredos.length; posicao++){

            if (input.value == segredos [posicao]){
                alert ("Parabéns, você acertou!")
                achou = true;
                break;
            }
    } 
            if (achou == false){
                alert ("Você errou!")
            }

            input.value = "";
            input.focus();
    }
    var button = document.querySelector("button");
    button.onclick = verificar;




// var segredos = [];
// segredos.push (sorteia());
// segredos.push (sorteia());
// segredos.push (sorteia());
// segredos.push (sorteia());








// var input = document.querySelector("input")
// // var segredo = Math.round (Math.random() * 10); 
// var segredos = [5,9,8,1];
// input.focus();

// function verificar(){

//     var achou = false
//         for (var posicao = 0; posicao < segredos.length; posicao++){

//             if (input.value == segredos [posicao]){
//                 alert ("Parabéns, você acertou!")
//                 achou = true;
//                 break;
//             }
//     } 
//             if (achou == false){
//                 alert ("Você errou!")
//                 input.value = "";
//                 input.focus();
//             }
//     }
// // Estrutura do código: Ele vai varrer todo for pela quantidade de array existente, se não achar nada
// // Ele vai dar a mensagem de "Você errou!!

// var button = document.querySelector("button");
// button.onclick = verificar;