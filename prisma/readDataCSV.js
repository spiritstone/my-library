const fs = require('fs');
const parse = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// CSV 파일 경로
const csvFilePath =  './my-library/prisma/books.csv';

fs.readFile(csvFilePath, 'utf8', (err, fileData) => {
  if (err) {
    console.error(err);
    return;
  }

  parse(fileData, { columns: true, trim: true }, async (parseErr, rows) => {
    if (parseErr) {
      console.error(parseErr);
      return;
    }

    try {
      const createdData = await prisma.book.createMany({
        data: rows.map(row => ({
          bookId: row.bookId,
          bookLabel: row.bookLabel,
          bookName: row.bookName,
          writer: row.writer,
          publisher: row.publisher,
          category: row.category,
          types: row.types
        }))
      });
      
      console.log('데이터가 성공적으로 생성되었습니다.');
    } catch (createErr) {
      console.error('데이터 생성 중 오류가 발생했습니다.', createErr);
    } finally {
      await prisma.$disconnect();
    }
  });
});
