// vetores e contadores declarados fora para preservar os dados 
const nomes = [];
const medias = [];
let contador = 0; // o "ponteiro" que indica a posição atual

console.log("Programa para calcular média dos alunos");

function calcularMedia() {

    //1. referências e capturas
    const campoNome = document.getElementById('nome_aluno');
    const campoN1 = document.getElementById('primeira_nota');
    const campoN2 = document.getElementById('segunda_nota');
    const campoN3 = document.getElementById('terceira_nota');
    const resposta = document.getElementById('resposta');

    let n1 = parseFloat(primeira_nota.value) || 0; 
    let n2 = parseFloat(segunda_nota.value) || 0;
    let n3 = parseFloat(terceira_nota.value) || 0;

    //2. calculo e atribuição classica
    // em vez de push(), usamos o indice direto
    nomes[contador] = nome_aluno.value;
    medias[contador] = ((n1 + n2 + n3) / 3).toFixed(2);

    // incrementamos o contador para que o proximo aluno use a mesma posição
    contador++

    //3. incrementação de continuidade
    let continuar = campoResposta.value.toUpperCase().charAt(0);

    if(continuar === 'S') {
        //limpa campos para o procimo
        campoNome.value = " ";
        campoN1.value = " ";
        campoN2.value = " ";
        campoN3.value = " ";
        resposta.value = " ";
        campoNome.focus();
    } else {
        // relatório final percorrendo os vetores
        let relatorio = "<h3>relatório final: </h3>";

        for (let i = 0; i < contador; i++) {
            relatorio += `Posição [${i}] - Aluno: ${nomes[i]} | Média: ${medias[i]} <br>`;
        }
    }
    
    

    // do { //início do... while

    //     criando um elemento de texto para exibir o resultado na tela
    //     const resultadoDiv = document.createElement("div");
    //     resultadoDiv.style.marginTop = "10px";
    //     resultadoDiv.innerHTML = `<p><strong>Aluno:</strong> ${nome} | <strong>Média:</strong> ${media.toFixed(2)}</p>`; //interpolação
    //     document.getElementById("painel-resultados").appendChild(resultadoDiv);

    //     verifica a resposta do campo S/N
    //     continuar = resposta.value.charAt(0).toUpperCase(); // charAt = pega primeiro caractere do texto

    //     lógica de repetição se for 'S', limpamos os campos para o usuário digitar o próximo e o laço encerra sua volta atual.
    //     if (continuar === 'S') { // três iguais compra valor e tipo
    //         nome_aluno.value = "";
    //         primeira_nota.value = "";
    //         segunda_nota.value = "";
    //         terceira_nota.value = "";
    //         resposta.value = "";

    //         dar o foco no nome para a próxima digitação
    //         nome_aluno.focus();

    //         O break é necessário aqui pois, em ambiente web, o 'do...while' não pode pausar a CPU esperando o usuário digitar.
    //         break; 
    //     }

    //     if (resposta.value.toUpperCase() == "S"){
    //         console.log("Continua");
    //     } else {
    //         console.log("Pare");
    //     }

    //     Limpeza final caso não continue
    //     document.getElementById("nome_aluno").value = "";
    //     document.getElementById("primeira_nota").value = "";
    //     document.getElementById("segunda_nota").value = "";
    //     document.getElementById("terceira_nota").value = "";
    //     document.getElementById("resposta").value = "";

    // } while ( resposta.value.toUpperCase() == "S" );
}