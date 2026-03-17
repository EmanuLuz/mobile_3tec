function calcular_velocidadeMedia() {

    let distancia;
    let tempo;
    let resultado;

    distancia = document.getElementById("distancia").value;
    tempo = document.getElementById("tempo").value;
    
    resultado = distancia / tempo;

    document.getElementById("resultado").innerHTML = resultado + " km/h";

    // ctrl + k + c 
    // ctrl + k + u
    // if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    //     document.getElementById("result").innerHTML = "vogal";
    // } else{
    //     document.getElementById("result").innerHTML = "consoante";
    // }

    // console.log("--------");
    // console.log(resultado);
    // console.log("--------");
    
}