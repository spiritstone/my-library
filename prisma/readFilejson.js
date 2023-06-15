const fs = require('fs');
const parse = require('csv-parser');

// CSV 파일 경로
const csvFilePath = '../ecopsLib/my-library/prisma/books.csv';
// 결과를 저장할 파일 경로
const outputFilePath = 'output.json';

fs.readFile(csvFilePath, 'utf8', (err, fileData) => {
    if (err) {
      console.error(err);
      return;
    }
  
    parse(fileData, { columns: true, trim: true }, (parseErr, rows) => {
      if (parseErr) {
        console.log('err1');  

        console.error(parseErr);
        return;
      }

  
      const formattedData = rows.map(row => ({
        bookId: row.bookId,
        bookLabel: row.bookLabel,
        bookName: row.bookName,
        writer: row.writer,
        publisher: row.publisher,
        category: row.category,
        types: row.types
      }));
     console.log('err1');  
      const jsonData = JSON.stringify(formattedData, null, 2);
  
      fs.writeFile('./my-library/prisma/output.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        
      
        console.log(`Results have been saved to ${outputFilePath}`);
      });
    });
  });