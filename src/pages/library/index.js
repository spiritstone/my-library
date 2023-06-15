import React, { useEffect, useState } from 'react';
import Link from 'next/link'
// import { query } from 'lib.db';

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const queryResult = await query(
        'SELECT bookName, writer, publisher, category, status FROM books'
      );
      setBooks(queryResult);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h1>Library Main Page</h1>

      {/* 도서 리스트 */}
      <table>
        <thead>
          <tr>
            <th>도서명</th>
            <th>저자</th>
            <th>출판사</th>
            <th>카테고리</th>
            <th>대출 현황</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.bookName}</td>
              <td>{book.writer}</td>
              <td>{book.publisher}</td>
              <td>{book.category}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Library;
