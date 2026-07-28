// Vetores e contador declarados fora da função para preservar os dados
const nomes = [];
const medias = [];
let contador = 0; // O "ponteiro" que indica a posição atual

function calcularMedia() {
    // 1. Referências e Captura
    const campoNome = document.getElementById('nome_aluno');
    const campoN1 = document.getElementById('primeira_nota');
    const campoN2 = document.getElementById('segunda_nota');
    const campoN3 = document.getElementById('terceira_nota');
    const campoResposta = document.getElementById('resposta');

    let n1 = parseFloat(campoN1.value) || 0;
    let n2 = parseFloat(campoN2.value) || 0;
    let n3 = parseFloat(campoN3.value) || 0;
    
    // 2. Cálculo e Atribuição Clássica
    // Em vez de push(), usamos o índice direto
    nomes[contador] = campoNome.value;
    medias[contador] = ((n1 + n2 + n3) / 3).toFixed(2);
    
    // Incrementamos o contador para que o próximo aluno use a próxima posição
    contador++;

    // 3. Verificação de continuidade
    let continuar = campoResposta.value.toUpperCase().charAt(0);

    if (continuar === 'S') {
        // Limpa campos para o próximo
        campoNome.value = "";
        campoN1.value = "";
        campoN2.value = "";
        campoN3.value = "";
        campoResposta.value = "";
        campoNome.focus();
    } else {
        // Relatório Final percorrendo os vetores
        let relatorio = "<h3>Relatório Final:</h3>";
        
        for (let i = 0; i < contador; i++) {
            relatorio += `Posição [${i}] - Aluno: ${nomes[i]} | Média: ${medias[i]} <br>`;
        }

        const div = document.createElement("div");
        div.innerHTML = relatorio + "<p style='color:red'>Turma Finalizada.</p>";
        document.body.appendChild(div);
    }
}