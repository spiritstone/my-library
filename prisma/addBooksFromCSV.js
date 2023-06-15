// addBooksFromCSV.js

const csv = require("csv-parser");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

let isFirstLine = true; // 첫 번째 줄인지 여부를 확인하기 위한 변수

fs.createReadStream("books.csv")
  .pipe(csv())
  .on("data", async (data) => {
    if (isFirstLine) {
      isFirstLine = false;
      return; // 첫 번째 줄은 건너뜁니다.
    }

    const bookId = parseInt(data.bookId);
    const bookLabel = data.bookLabel;
    const bookName = data.bookName;
    const writer = data.writer;
    const publisher = data.publisher;
    const category = data.category;
    const types = data.types;

    console.log(`Adding book: ${bookId} - ${bookName}`);

    await prisma.Book.create({
      data: {
        bookId,
        bookLabel,
        bookName,
        author,
        publisher,
        category,
        types,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    await prisma.$transaction.commit(); // 변경 사항 커밋
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
    process.exit(0);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
