const botao = document.getElementById('registrarBtn');
const tabela = document.getElementById('registroTabela');

let ultimaBatida = 'Saída'; // começa com entrada

botao.addEventListener('click', () => {
  const agora = new Date();
  const data = agora.toLocaleDateString();
  const hora = agora.toLocaleTimeString();
  const tipo = ultimaBatida === 'Saída' ? 'Entrada' : 'Saída';

  // Atualiza botão
  botao.textContent = `Registrar ${tipo === 'Entrada' ? 'Saída' : 'Entrada'}`;

  // Adiciona linha na tabela
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${data}</td>
    <td>${hora}</td>
    <td>${tipo}</td>
  `;
  tabela.prepend(novaLinha);

  // Atualiza última batida
  ultimaBatida = tipo;
});
