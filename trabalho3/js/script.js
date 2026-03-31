function converter_Fahrenheit() {

    let celcius;
    let resultado;
    const FATOR_MULTIPLICADOR = 1.8;

    celcius = document.getElementById("celcius").value;
    
    resultado = celcius * FATOR_MULTIPLICADOR + 32;
    // resultado = (9 * celcius + 160) / 5;

    document.getElementById("resultado").innerHTML = resultado + " fahrenheit";
    
}