# Código do Projeto

!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Cadastro de Abastecimento</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
  <h1>Cadastro de Abastecimento</h1>

  <form id="form-abastecimento">

    <label for="data">Data:</label>
    <input type="date" id="data" name="data" required><br><br>

    <label for="combustivel">Tipo de combustível:</label>
    <select id="combustivel" name="combustivel" required>
      <option value="">Selecione o combustível</option>
      <option value="Gasolina">Gasolina</option>
      <option value="Álcool">Álcool</option>
    </select><br><br>

    <label for="valor-unitario">Valor do litro:</label>
    <input type="number" id="valor-litro" name="valor-litro" step="0.01" min="0.01" required><br><br>

    <label for="quantidade">Valor total gasto:</label>
    <input type="number" id="total" name="total" step="0.01" min="0.01" required><br><br>

    <button type="submit">Cadastrar</button>
      <button type="reset">Limpar</button>
    </form>
    
    
  </form>

  <h2>Abastecimentos cadastrados</h2>

  <table id="tabela-abastecimentos" cellspacing="10" cellpadding="5">
    <colgroup>
      <col width="25%">
      <col width="25%">
      <col width="25%">
      <col width="25%">
    </colgroup>
    <thead>
      <tr>
        <th>Data</th>
        <th>Combustível</th>
        <th>Valor do litro</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </div>

  <script src="script.js"></script>

</body>
</html>
