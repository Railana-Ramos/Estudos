function resultado (){
    var idadeUm = document.getElementById ('idade1');
    var idadeDois = document.getElementById ('idade2');
    var diferenca = idadeUm.value - idadeDois.value;

    document.write ("Vocês tem uma diferença de " + (Math.round (diferenca)) + " anos de idade!")
}
