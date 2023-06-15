// Next.js API 경로
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default function Books({ books }) {
  return (
    <div className="p-10">
      <div className="flex items-center mt-20 ml-16">
        <h1 className="text-3xl font-bold text-center text-green-900">Book List</h1>
      </div>
      <div className="flex items-center justify-center overflow-x-auto overflow-y-auto mt-12 mx-24">
        <table className="border border-1 border-black min-w-full divide-y-2 divide-gray-200 bg-white text-m h-96 ">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">카테고리</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">도서명</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">저자</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">출판사</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">대출 현황</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books.map(book => (
              <tr key={book.bookId}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{book.category}</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <Link href={`/library/books/${book.bookId}`}>{book.bookName}</Link>
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{book.author}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{book.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const books = await prisma.book.findMany();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}
