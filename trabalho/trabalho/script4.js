// Vetores declarados fora para manter os dados entre os cliques do botão
const nomes = [];
const medias = [];

function calcularMedia() {
    // 1. Referências dos elementos do HTML
    const campoNome = document.getElementById('nome_aluno');
    const campoN1 = document.getElementById('primeira_nota');
    const campoN2 = document.getElementById('segunda_nota');
    const campoN3 = document.getElementById('terceira_nota');
    const campoResposta = document.getElementById('resposta');

    // 2. Captura dos valores e cálculo
    let nomeDigitado = campoNome.value;
    let n1 = parseFloat(campoN1.value) || 0;
    let n2 = parseFloat(campoN2.value) || 0;
    let n3 = parseFloat(campoN3.value) || 0;
    let mediaCalculada = (n1 + n2 + n3) / 3;

    // 3. ARMAZENAMENTO NOS VETORES (Por posição/índice)
    // O push adiciona o valor sempre na próxima posição disponível
    nomes.push(nomeDigitado);
    medias.push(mediaCalculada.toFixed(2));

    // 4. Captura da resposta para decidir o próximo passo
    let continuar = campoResposta.value.toUpperCase().charAt(0);

    if (continuar === 'S') {
        // Limpa os campos para a próxima entrada
        campoNome.value = "";
        campoN1.value = "";
        campoN2.value = "";
        campoN3.value = "";
        campoResposta.value = "";
        campoNome.focus();
    } 
    else if (continuar === 'N') {
        // Exibição do relatório final percorrendo os vetores por índice
        let resultadoFinal = "<h3>Relatório de Notas:</h3>";
        
        for (let i = 0; i < nomes.length; i++) {
            // Aqui acessamos a posição [i] de cada vetor simultaneamente
            resultadoFinal += "Aluno: " + nomes[i] + " | Média: " + medias[i] + "<br>";
        }

        resultadoFinal += "<p style='color: red;'>Status: Turma finalizada.</p>";
        
        // Criar elemento na tela para exibir o resultado
        const divRelatorio = document.createElement("div");
        divRelatorio.innerHTML = resultadoFinal;
        document.body.appendChild(divRelatorio);

        // Limpa os campos uma última vez
        campoNome.value = "";
        campoN1.value = "";
        campoN2.value = "";
        campoN3.value = "";
        campoResposta.value = "";
    }
}