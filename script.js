// Função para carregar os dados do localStorage
function carregarVagas() {
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    const tabela = document.getElementById('tabelaVagas').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de preencher

    vagas.forEach((vaga, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).innerText = vaga.placa;
        row.insertCell(1).innerText = vaga.nome;
        row.insertCell(2).innerText = vaga.numeroApartamento;
        row.insertCell(3).innerText = vaga.bloco;
        row.insertCell(4).innerText = vaga.modelo;
        row.insertCell(5).innerText = vaga.cor;
        row.insertCell(6).innerText = vaga.numeroVaga;

        const btnRemover = document.createElement('button');
        btnRemover.innerText = 'Remover';
        btnRemover.onclick = () => {
            vagas.splice(index, 1); // Remove a vaga do array
            localStorage.setItem('vagas', JSON.stringify(vagas)); // Atualiza o localStorage
            carregarVagas(); // Recarrega as vagas na tabela
        };
        row.insertCell(7).appendChild(btnRemover);
    });
}

// Função para cadastrar uma nova vaga
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    const novaVaga = {
        placa: document.getElementById('placa').value,
        nome: document.getElementById('nome').value,
        numeroApartamento: document.getElementById('numeroApartamento').value,
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        numeroVaga: document.getElementById('numeroVaga').value
    };

    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    vagas.push(novaVaga);
    localStorage.setItem('vagas', JSON.stringify(vagas));
    
    alert('Cadastro realizado com sucesso!');
    this.reset(); // Limpa o formulário
});

// Carregar as vagas quando a página for carregada
if (document.getElementById('tabelaVagas')) {
    carregarVagas();
}
