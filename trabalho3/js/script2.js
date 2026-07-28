console.log("Programa para calcular média dos alunos");

function calcularMedia() {

    const nome_aluno = document.getElementById("nome_aluno");
    const primeira_nota = document.getElementById("primeira_nota");
    const segunda_nota = document.getElementById("segunda_nota");
    const terceira_nota = document.getElementById("terceira_nota");
    const resposta = document.getElementById("resposta");

    let continuar;

    do { //início do... while

        //valores atuais dos inputs
        let nome = nome_aluno.value;
        let n1 = parseFloat(primeira_nota.value) || 0; // Pegamos o .value aqui
        let n2 = parseFloat(segunda_nota.value) || 0;
        let n3 = parseFloat(terceira_nota.value) || 0;

        // cálculo da média (3 notas)
        let media = (n1 + n2 + n3) / 3;

        // criando um elemento de texto para exibir o resultado na tela
        const resultadoDiv = document.createElement("div");
        resultadoDiv.style.marginTop = "10px";
        resultadoDiv.innerHTML = `<p><strong>Aluno:</strong> ${nome} | <strong>Média:</strong> ${media.toFixed(2)}</p>`; //interpolação
        document.getElementById("painel-resultados").appendChild(resultadoDiv);

        // verifica a resposta do campo S/N
        continuar = resposta.value.charAt(0).toUpperCase(); // charAt = pega primeiro caractere do texto

        // lógica de repetição se for 'S', limpamos os campos para o usuário digitar o próximo e o laço encerra sua volta atual.
        if (continuar === 'S') { // três iguais compra valor e tipo
            nome_aluno.value = "";
            primeira_nota.value = "";
            segunda_nota.value = "";
            terceira_nota.value = "";
            resposta.value = "";

            // dar o foco no nome para a próxima digitação
            nome_aluno.focus();

            // O break é necessário aqui pois, em ambiente web, o 'do...while' não pode pausar a CPU esperando o usuário digitar.
            break; 
        }

        if (resposta.value.toUpperCase() == "S"){
            console.log("Continua");
        } else {
            console.log("Pare");
        }

        // Limpeza final caso não continue
        document.getElementById("nome_aluno").value = "";
        document.getElementById("primeira_nota").value = "";
        document.getElementById("segunda_nota").value = "";
        document.getElementById("terceira_nota").value = "";
        document.getElementById("resposta").value = "";

    } while ( resposta.value.toUpperCase() == "S" );
}