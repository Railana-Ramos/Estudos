function calcular(){

    var gasolina = document.getElementById('combustivel');
    var caminhoComGasolina = document.getElementById('caminhoComGasolina');
    var resultado = caminhoComGasolina.value/gasolina.value

    document.write ("Você consumiu: " + (Math.round (resultado)) + " Km/L")

}

function calcular2(){

    var alcool = document.getElementById('combustivel2');
    var caminhoComAlcool = document.getElementById('caminhoComAlcool');
    var resultado2 = caminhoComAlcool.value/alcool.value

    document.write ("Você consumiu: " + (Math.round (resultado2)) + " Km/L")

}