import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/api/library/books/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          console.error('Error fetching book:', response.status);
          setBook(null);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
        setBook(null);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 mx-12">
      <h1 className="text-2xl mb-4 mt-12">{book.bookName}</h1>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
      <p>카테고리: {book.category}</p>
      <p>타입: {book.types}</p>
    </div>
  );
};

export default BookDetail;
