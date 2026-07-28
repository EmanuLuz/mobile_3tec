const listaAlunos = [];

function gerenciarTurma() {

    const inputNome = document.getElementById('nome_aluno');
    const inputN1 = document.getElementById('primeira_nota');
    const inputN2 = document.getElementById('segunda_nota');
    const inputN3 = document.getElementById('terceira_nota');
    const inputResposta = document.getElementById('resposta');
    const relatorioDiv = document.getElementById('relatorio');

    let nome = inputNome.value;
    let n1 = parseFloat(inputN1.value);
    let n2 = parseFloat(inputN2.value);
    let n3 = parseFloat(inputN3.value);
    let continuar = inputResposta.value.toUpperCase().charAt(0);

    let mediaFinal = (n1 + n2 + n3) / 3;

    const alunoData = {
        nome: nome,
        media: mediaFinal.toFixed(2)
    };

    // console.log("objeto: ", alunoData.nome);
    // console.log("objeto: ", alunoData.media);

    listaAlunos.push(alunoData);
    // console.log(listaAlunos[0]);

    if (continuar === 'S') {
        limparCampos();
        relatorioDiv.innerHTML = `<p style="color: blue;">Aluno ${nome} adicionado ao sistema!</p>`;
    } else if (continuar === 'N') {
        exibirRelatorioFinal();
        desativarEntradas();
    }

    function exibirRelatorioFinal() {
        const relatorioDiv = document.getElementById('relatorio');
    relatorioDiv.innerHTML = "<h3>relatório final da turma:</h3>";

    listaAlunos.forEach((aluno, index) => {
        relatorioDiv.innerHTML += `
            <p>${index + 1}. <strong>Nome:</strong> ${aluno.nome} | 
            <strong>Média:</strong> ${aluno.media}</p>
        `;
    });

    relatorioDiv.innerHTML += `<p style="color: red;"><strong>Status: turma finalizada.</strong></p>`;

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
        document.querySelector('button').disabled = true;
    }
 }


