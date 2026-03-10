alert ("sistema para distinguir vogal de consoante")

let letra = prompt("Insira uma letra")

let vogais = ["a", "e", "i", "o", "u"]

if (vogais.indexOf(letra.toLowerCase()) !== -1) {
  alert("vogal")
} else {
  alert("consoante")
}