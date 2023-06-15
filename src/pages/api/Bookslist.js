import React, { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const fetchedBooks = await prisma.book.findMany();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('도서 목록을 가져오는 중 오류가 발생했습니다:', error);
      } finally {
        await prisma.$disconnect();
      }
    }

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>도서 목록</h1>
      <ul>
        {books.map((book) => (
          <li key={book.bookId}>
            {book.bookId}: {book.bookName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
