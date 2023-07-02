// Definindo o objeto em formato JSON
const dadosAbastecimento = {
    data: "",
    tipoCombustivel: "",
    valorLitro: "",
    valorTotal: ""
  };
  
  // Obtendo referência ao formulário
  const form = document.getElementById("form-abastecimento");
  
  // Adicionando evento de "submit" ao formulário
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Atualizando o objeto JSON com os dados do formulário
    dadosAbastecimento.data = document.getElementById("data").value;
    dadosAbastecimento.tipoCombustivel = document.getElementById("combustivel").value;
    dadosAbastecimento.valorLitro = document.getElementById("valor-litro").value;
    dadosAbastecimento.valorTotal = document.getElementById("total").value;
  
    // Armazenando objeto JSON no Local Storage
    localStorage.setItem("abastecimento", JSON.stringify(dadosAbastecimento));
  
    // Exibindo mensagem de sucesso
    alert("Abastecimento cadastrado com sucesso!");
  });

  // Obtendo referência à tabela
const tabela = document.getElementById("tabela-abastecimentos").getElementsByTagName('tbody')[0];

// Adicionando evento de "submit" ao formulário
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Atualizando o objeto JSON com os dados do formulário
  dadosAbastecimento.data = document.getElementById("data").value;
  dadosAbastecimento.tipoCombustivel = document.getElementById("combustivel").value;
  dadosAbastecimento.valorLitro = document.getElementById("valor-litro").value;
  dadosAbastecimento.valorTotal = document.getElementById("total").value;

  // Criando nova linha na tabela e adicionando as colunas
  const novaLinha = tabela.insertRow();
  const colunaData = novaLinha.insertCell(0);
  const colunaCombustivel = novaLinha.insertCell(1);
  const colunaValorLitro = novaLinha.insertCell(2);
  const colunaValorTotal = novaLinha.insertCell(3);

  // Preenchendo as colunas com os valores do formulário
  colunaData.innerHTML = dadosAbastecimento.data;
  colunaCombustivel.innerHTML = dadosAbastecimento.tipoCombustivel;
  colunaValorLitro.innerHTML = dadosAbastecimento.valorLitro;
  colunaValorTotal.innerHTML = dadosAbastecimento.valorTotal;




});
  
  