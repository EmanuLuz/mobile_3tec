let numero = prompt("digite um numero: ");
let fatorial = 1
let contador = numero;

while (contador > 1) {
  fatorial *= contador;

  contador--
}

alert("O fatorial é: " + fatorial);