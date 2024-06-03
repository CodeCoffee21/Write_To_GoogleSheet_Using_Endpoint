function fetchAndAppendData() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // URL do endpoint que retorna o JSON
    var url = 'https://example.com/api/data'; // Substitua pelo seu endpoint
    // Nome do campo de identificação único no JSON
    var idFieldName = 'uniqueId'; // Substitua pelo nome do campo de identificação único
    
    try {
      // Fazer a requisição GET ao endpoint
      var response = UrlFetchApp.fetch(url);
      
      // Parse do JSON
      var data = JSON.parse(response.getContentText());
  
      // Verificar se o JSON retornado é uma lista de objetos
      if (Array.isArray(data)) {
        // Obter a última linha preenchida na planilha
        var lastRow = sheet.getLastRow();
        
        // Se a planilha estiver vazia, adicionar cabeçalhos
        var headers;
        if (lastRow === 0) {
          headers = Object.keys(data[0]);
          sheet.appendRow(headers);
          lastRow = 1;
        } else {
          headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        }
  
        // Obter a coluna do campo de identificação único
        var idFieldIndex = headers.indexOf(idFieldName);
        if (idFieldIndex === -1) {
          Logger.log('A coluna ' + idFieldName + ' não foi encontrada.');
          return;
        }
  
        // Obter todos os valores do campo de identificação único existentes na planilha
        var existingIds = sheet.getRange(2, idFieldIndex + 1, lastRow - 1).getValues().flat();
  
        // Adicionar novas linhas apenas se o campo de identificação único não existir
        data.forEach(function(row) {
          var idValue = row[idFieldName];
          if (!existingIds.includes(idValue)) {
            var values = headers.map(function(header) {
              return row[header];
            });
            sheet.appendRow(values);
          }
        });
      } else {
        // Tratar caso o JSON não seja uma lista
        Logger.log('O JSON retornado não é uma lista de objetos.');
      }
    } catch (e) {
      Logger.log('Erro ao buscar dados do endpoint: ' + e.message);
    }
  }
  