# Write_To_GoogleSheet_Using_Endpoint
Tutorial Escrever da EndPoint para Google Sheet


1- Configurar a Planilha do Google Sheets:

Crie uma nova planilha ou abra uma planilha existente onde você deseja inserir os dados.

2- Abrir o Editor Script

No Google Sheets, vá para Extensões > Apps Script.


3- Copiar Codigo em "Script.script"
soltar em App Script.

e correr em executar.







Explicação do Código:

1-Configuração de Variáveis:

  url: URL do endpoint que retorna o JSON. Substitua https://example.com/api/data pelo URL do seu endpoint.
  idFieldName: Nome do campo de identificação único no JSON. Substitua uniqueId pelo nome do campo que você deseja usar para evitar duplicatas.

2-Requisição HTTP:
  Faz uma requisição GET ao endpoint usando UrlFetchApp.fetch(url).

3-Parse do JSON:
  Converte a resposta JSON em um objeto JavaScript usando JSON.parse(response.getContentText()).

4-Verificação e Adição de Cabeçalhos:
  Se a planilha estiver vazia, adiciona os cabeçalhos do JSON. Caso contrário, usa os cabeçalhos existentes.

5-Verificação de Duplicatas:

  Obtém todos os valores do campo de identificação único (idFieldName) já presentes na planilha.
  Antes de adicionar uma nova linha, verifica se o valor do campo de identificação único do novo dado já está presente.

6-Adicionar Novas Linhas:
  Se o valor do campo de identificação único do novo dado não estiver presente, a nova linha é adicionada à planilha.

7-Executar o Script:
  Salve o script com um nome apropriado.
  Clique no ícone de relógio (⏰) para abrir o editor de gatilhos (Triggers).
  Adicione um gatilho para executar fetchAndAppendData manualmente ou em uma agenda regular, conforme necessário.

Conclusão
  Este código generalizado permite que você facilmente adapte a inserção de dados em uma planilha do Google Sheets a partir de diferentes endpoints JSON, garantindo que duplicatas baseadas em um campo específico sejam evitadas. Basta configurar o URL do endpoint e o campo de identificação único para reutilizar este script em diferentes cenários.










