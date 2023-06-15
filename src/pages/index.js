import Image from 'next/image';
import { Inter } from 'next/font/google';
// import Books from './library/books/index.js';
import React, { useEffect, useState } from 'react';
import Book from './library/books/[id]';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // 데이터베이스에서 도서 리스트를 가져오는 비동기 함수
    async function fetchBooks() {
      try {
        const response = await fetch('/api/books');
        if (response.ok) {
          const booksData = await response.json();
          setBooks(booksData);
        } else {
          console.error('도서를 가져오는 중 오류 발생:', response.status);
        }
      } catch (error) {
        console.error('도서를 가져오는 중 오류 발생:', error);
      }
    }

    // 페이지 로드 시 도서 데이터를 가져옴
    fetchBooks();
  }, []);

  return (
    // <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}> </main>
    <div className="flex justify-start flex-col min-h-screen px-24">
      {/* search bar */}
      <div className="flex items-center justify-start flex-col">
        <div className="w-3/5 flex border border-1 border-black rounded-full mt-24 bg-green-100 ">
          <label class="sr-only" for="search">
            {' '}
            Search{' '}
          </label>
          <input
            id="search"
            type="search"
            className="px-6 py-2 w-full bg-green-100 rounded-full"
            placeholder="E-COPS 소장자료를 검색할 수 있습니다."
          />
          <button className="flex items-center justify-between px-4 border-1 text-gray-600 transition hover:text-gray-700 ">
            <span class="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* // 페이지 이동 버튼  */}
      <div className="flex items-center justify-center flex-row mt-20">
        {/* // Left */}
        <a
          className="group relative inline-block overflow-hidden border border-green-900 px-14 py-8 focus:outline-none focus:ring w-56 h-24"
          href="/ranking"
        >
          <span className="absolute inset-y-0 left-0 w-[2px] bg-green-900 transition-all group-hover:w-full group-active:bg-green-600"></span>

          <span className="relative text-xl font-bold text-center text-green-900 transition-colors group-hover:text-white">
            베스트 대출
          </span>
        </a>
        {/* // Bottom */}
        <a
          className="group relative inline-block overflow-hidden border border-green-900 px-16 py-8 focus:outline-none focus:ring w-56 h-24"
          href="/category/1"
        >
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-900 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative text-xl font-bold text-center text-green-900 transition-colors group-hover:text-white">
            보안 도서
          </span>
        </a>
        {/* // Right */}
        <a
          className="group relative inline-block overflow-hidden border border-green-900 px-16 py-8 focus:outline-none focus:ring w-56 h-24"
          href="/category/2"
        >
          <span className="absolute inset-y-0 right-0 w-[2px] bg-green-900 transition-all group-hover:w-full group-active:bg-green-600"></span>

          <span className="relative text-xl font-bold text-center text-green-900 transition-colors group-hover:text-white">
            개발 도서
          </span>
        </a>

        {/* // Top */}
        <a
          className="group relative inline-block overflow-hidden border border-green-900 px-14 py-8 focus:outline-none focus:ring w-56 h-24"
          href="/category/3"
        >
          <span className="absolute inset-x-0 top-0 h-[2px] bg-green-900 transition-all group-hover:h-full group-active:bg-green-600"></span>

          <span className="relative text-xl font-bold text-center text-green-900 transition-colors group-hover:text-white">
            컴퓨터 도서
          </span>
        </a>
      </div>
      {/* // book list */}
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
                  <Link href={`/library/book/${book.bookId}`}>{book.bookName}</Link>
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
