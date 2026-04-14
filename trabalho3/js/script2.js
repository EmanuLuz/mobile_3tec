console.log("Programa para calcular média dos alunos");

function calcularMedia() {

    const nome_aluno = document.getElementById("nome_aluno");
    const primeira_nota = Number(document.getElementById("primeira_nota"));
    const segunda_nota = Number(document.getElementById("segunda_nota"));
    const terceira_nota = Number(document.getElementById("terceira_nota"));
    const resposta = document.getElementById("resposta");

    let continuar;

    do{ //início do... while

        //valores atuais dos inputs
        let nome = nome_aluno.value;
        let n1 = parseFloat(primeira_nota).value;
        let n2 = parseFloat(segunda_nota).value;
        let n3 = parseFloat(terceira_nota).value;

        // cálculo da média (3 notas)
        let media = (n1 + n2 + n3) / 3;

        // criando um elemento de texto para exibir o resultado na tela
        const resultadoDiv = document.createElement("div");
        resultadoDiv.innerHTML = `<p><strong>Aluno:</strong> ${nome} | <strong>Média:</strong> ${media.toFixed(2)}</p>`; //interpolação
        document.body.appendChild(resultadoDiv);

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
            // Ele processa a entrada atual e libera para a próxima interação do botão
        }



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