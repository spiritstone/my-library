import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default function BookDetail({ book }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">{book.bookName}</h1>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
      <p>카테고리: {book.category}</p>
      <p>타입: {book.types}</p>

      <button>대출하기{openAlert && <rentAlert onOpenAlert={onRentAlert} />}</button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const post = await prisma.book.findUnique({
    where: {
      id: BookDetail,
    },
  });

  return {
    props: {
      post: JSON.parse(JSON.stringify(book)),
    },
  };
}
