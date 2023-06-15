import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // 데이터베이스에서 도서 리스트를 가져오는 비동기 함수
    async function fetchBooks() {
      try {
        const response = await fetch("/api/books");
        if (response.ok) {
          const booksData = await response.json();
          setBooks(booksData);
        } else {
          console.error("도서를 가져오는 중 오류 발생:", response.status);
        }
      } catch (error) {
        console.error("도서를 가져오는 중 오류 발생:", error);
      }
    }

    // 페이지 로드 시 도서 데이터를 가져옴
    fetchBooks();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h1>Book List</h1>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              카테고리
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              타입
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              도서명
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              저자
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              출판사
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              대출 현황
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {books.map((book) => (
            <tr key={book.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {book.title}
              </td>
              <td>{book.writer}</td>
              <td>{book.publicationYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
