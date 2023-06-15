import React from 'react';
import { useRouter } from 'next/router';

const CategoryBookList = () => {
  const router = useRouter();
  const { category_id } = router.query;

  return (
    <div>
      <h1>Category Book List</h1>
      <p>Category ID: {category_id}</p>
    </div>
  );
};

export default CategoryBookList;
