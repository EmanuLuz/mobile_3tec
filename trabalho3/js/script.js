// alt 167 = º
console.log("Programa para calcular média dos alunos");

function calcularMedia() {

    do{

        let nome_aluno = document.getElementById("nome_aluno").value;
        console.log(nome_aluno);

        let primeira_nota = Number(document.getElementById("primeira_nota").value);
        console.log(primeira_nota);
        
        let segunda_nota = Number(document.getElementById("segunda_nota").value);
        console.log(segunda_nota);
        
        let terceira_nota = Number(document.getElementById("terceira_nota").value);
        console.log(terceira_nota);

        let resultado = (primeira_nota + segunda_nota + terceira_nota) / 3;
        console.log(resultado);

        let resposta = document.getElementById("resposta").value;

        if (resposta == "S"){
            console.log("Continua");
        } else {
            console.log("Pare");
        }

        console.log(resultado);
        document.getElementById("nome_aluno").value = "";
        document.getElementById("primeira_nota").value = "";
        document.getElementById("segunda_nota").value = "";
        document.getElementById("terceira_nota").value = "";
        document.getElementById("resposta").value = "";

    } while ( resposta == "S" );


}

