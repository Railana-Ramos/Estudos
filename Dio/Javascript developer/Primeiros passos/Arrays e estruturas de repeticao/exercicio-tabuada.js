const tabuada = [0,1,2,3,4,5,6,7,8,9,10]
let numero = 5

for (let i = 0; i < tabuada.length; i++) {
    const tabu = tabuada[i];
    const resultado = numero * tabu;
    console.log(resultado)
}

// codigo simplificado
for (let i = 1; i <= 10; i++) {
    console.log(i * 9)
    
}
