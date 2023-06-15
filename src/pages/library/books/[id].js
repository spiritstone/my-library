import { PrismaClient } from '@prisma/client';
import React, { useState, useContext } from 'react';
import rentAlert from './components/rentAlert.js';

const prisma = new PrismaClient();

export default function Book({ book }) {
  const [openAlert, setOpenAlert] = useState(false);
  const onRentAlert = () => {
    setOpenAlert(!openAlert);
  };
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">{book.bookName}</h1>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
      <p>카테고리: {book.category}</p>
      <p>타입: {book.types}</p>
      <p></p>

      <button>대출하기{openAlert && <rentAlert onOpenAlert={onRentAlert} />}</button>
    </div>
  );
}
