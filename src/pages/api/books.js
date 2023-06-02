// 도서 데이터 반환하는 api

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'text-encoding-utf-8';


function Books() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('/api/books');
        setBookList(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {bookList.map((book) => (
          <li key={book.bookId}>
            {book.bookId}: {book.bookName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
