function calcular() {

    let primeira_nota, segunda_nota, terceira_nota, quarta_nota, media;

    primeira_nota = Number(document.getElementById("primeira_nota").value);
    segunda_nota = Number(document.getElementById("segunda_nota").value);
    terceira_nota = Number(document.getElementById("terceira_nota").value);
    quarta_nota = Number(document.getElementById("quarta_nota").value);

    media = primeira_nota + segunda_nota + terceira_nota + quarta_nota;
    media = media/4

    console.log("-----------------");
    console.log(primeira_nota);
    console.log(segunda_nota);
    console.log(terceira_nota);
    console.log(quarta_nota);
    console.log("A média final é: " + media);
    console.log("-----------------");

}