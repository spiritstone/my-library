import React from 'react';
import { useRouter } from 'next/router';

const BookDetail = () => {
  const router = useRouter();
  const { book_id } = router.query;

  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {book_id}</p>
    </div>
  );
};

export default BookDetail;
