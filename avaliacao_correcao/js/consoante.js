function letra() {

    let letra;

    letra = document.getElementById("letra").value;

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        document.getElementById("result").innerHTML = "vogal";
    } else{
        document.getElementById("result").innerHTML = "consoante";
    }

    console.log("--------");
    console.log(letra);
    console.log("--------");
    
}