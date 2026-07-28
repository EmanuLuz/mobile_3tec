// Vetor global para armazenar os dados de todos os alunos
const listaAlunos = [];

function gerenciarTurma() {
    // Referências dos elementos
    const inputNome = document.getElementById('nome_aluno');
    const inputN1 = document.getElementById('primeira_nota');
    const inputN2 = document.getElementById('segunda_nota');
    const inputN3 = document.getElementById('terceira_nota');
    const inputResposta = document.getElementById('resposta');
    const relatorioDiv = document.getElementById('relatorio');

    // 1. Pegar valores atuais
    let nome = inputNome.value;
    let n1 = parseFloat(inputN1.value);
    let n2 = parseFloat(inputN2.value);
    let n3 = parseFloat(inputN3.value);
    let continuar = inputResposta.value.toUpperCase().charAt(0);

    // 2. Calcular média
    let mediaFinal = (n1 + n2 + n3) / 3;

    // 3. ARMAZENAMENTO NO VETOR
    // Criamos um objeto para manter os dados organizados
    const alunoData = {
        nome: nome,
        media: mediaFinal.toFixed(2)
    };
    
    listaAlunos.push(alunoData); // Adiciona o aluno ao vetor

    // 4. Lógica de Interface
    if (continuar === 'S') {
        limparCampos();
        relatorioDiv.innerHTML = `<p style="color: blue;">Aluno ${nome} adicionado ao sistema!</p>`;
    } else if (continuar === 'N') {
        exibirRelatorioFinal();
        desativarEntradas();
    }
}

// Função para exibir todos os dados guardados no vetor
function exibirRelatorioFinal() {
    const relatorioDiv = document.getElementById('relatorio');
    relatorioDiv.innerHTML = "<h3>Relatório Final da Turma:</h3>";

    // Percorrendo o vetor para mostrar os resultados
    listaAlunos.forEach((aluno, index) => {
        relatorioDiv.innerHTML += `
            <p>${index + 1}. <strong>Nome:</strong> ${aluno.nome} | 
            <strong>Média:</strong> ${aluno.media}</p>
        `;
    });

    relatorioDiv.innerHTML += `<p style="color: red;"><strong>Status: Turma finalizada.</strong></p>`;
}

function limparCampos() {
    document.getElementById('nome_aluno').value = "";
    document.getElementById('primeira_nota').value = "";
    document.getElementById('segunda_nota').value = "";
    document.getElementById('terceira_nota').value = "";
    document.getElementById('resposta').value = "";
    document.getElementById('nome_aluno').focus();
}

function desativarEntradas() {
    // Opcional: desabilita o botão após finalizar
    document.querySelector('button').disabled = true;
}