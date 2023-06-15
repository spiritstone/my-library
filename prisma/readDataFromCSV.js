const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
// CSV 파일 경로 설정
const filePath = './my-library/prisma/books.csv';
// const filePath = 'books.csv';
const readDataFromCSV = async (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

async function bulkCreateData() {
  try {
    const data = await readDataFromCSV(filePath);

    // const createdData = await prisma.book.createMany({
    //   data,
    // });
    const createdData = await prisma.book.create({
        data: data.map((item) => ({
          bookId: item.bookId,
          bookLabel: item.bookLabel,
          bookName: item.bookName,
          writer: item.writer,
          publisher: item.publisher,
          category: item.category,
          types: item.types,
        })),
      });
      

    console.log('Created data:', createdData);
  } catch (error) {
    console.error('Error creating data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

bulkCreateData();
