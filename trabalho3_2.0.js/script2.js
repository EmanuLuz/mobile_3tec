function calcularMedia() {
    // Referências dos elementos HTML
    const nome_aluno = document.getElementById('nome_aluno');
    const primeira_nota = document.getElementById('primeira_nota');
    const segunda_nota = document.getElementById('segunda_nota');
    const terceira_nota = document.getElementById('terceira_nota');
    const resposta = document.getElementById('resposta');

    let continuar;

    // Início do laço do...while
    do {
        // Pegando os valores atuais dos inputs
        let nome = nome_aluno.value;
        let n1 = parseFloat(primeira_nota.value);
        let n2 = parseFloat(segunda_nota.value);
        let n3 = parseFloat(terceira_nota.value);
        
        // Cálculo da média (3 notas)
        let media = (n1 + n2 + n3) / 3;

        // Criando um elemento de texto para exibir o resultado na tela
        const resultadoDiv = document.createElement("div");
        resultadoDiv.innerHTML = `<p><strong>Aluno:
        </strong> ${nome} | <strong>Média:</strong> 
        ${media.toFixed(2)}</p>`;
        document.body.appendChild(resultadoDiv);

        // Verifica a resposta do campo S/N
        //continuar = resposta.value.toUpperCase();
        continuar = resposta.value.charAt(0).toUpperCase();

        // Lógica de repetição: 
        // Se for 'S', limpamos os campos para o 
        // usuário digitar 
        // o próximo e o laço encerra sua volta atual.
        if (continuar === 'S') {
            nome_aluno.value = "";
            primeira_nota.value = "";
            segunda_nota.value = "";
            terceira_nota.value = "";
            resposta.value = "";
            
            // Damos foco no nome para a próxima 
            // digitação
            nome_aluno.focus();
        } 
        
        // O break é necessário aqui pois, em ambiente web, 
        // o 'do...while' não pode pausar a CPU esperando o 
        // usuário digitar. 
        // Ele processa a entrada atual e libera para a 
        // próxima interação do botão.
        break; 

    } while (continuar === 'S');

    if (continuar === 'N') {
        const tabela = document.createElement("p");
        tabela.style.color = "red";
        tabela.innerText = "Status: Turma finalizada.";
        document.body.appendChild(tabela);
        nome_aluno.value = "";
        primeira_nota.value = "";
        segunda_nota.value = "";
        terceira_nota.value = "";
        resposta.value = "";
    }
}