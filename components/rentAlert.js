import React from 'react';

const rentAlert = ({ onOpenAlert }) => {
  return (
    <div>
      <section onClick={onOpenAlert} className="rounded-3xl shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">도서 대여</p>

          <h2 className="mt-6 text-3xl font-bold">성공적으로 대여신청되었습니다.</h2>

          <button
            onClick={onOpenAlert}
            className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
          >
            대여하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default rentAlert;
