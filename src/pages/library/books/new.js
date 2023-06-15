import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NewBook() {
  const router = useRouter();
  const [bookName, setBookName] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    const response = await fetch(`/api/library/books/new`, {
      method: 'POST',

      body: JSON.stringify({
        bookId: event.target.bookId.value,
        bookLabel: event.target.bookLabel.value,
        bookName: event.target.bookName.value,
        author: event.target.author.value,
        publisher: event.target.publisher.value,
        category: event.target.category.value,
        types: event.target.types.value,
      }),
    });

    if (response.ok) {
      router.push('/library/books/');
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="bookId">
            bookId
          </label>
          <textarea
            id="bookId"
            name="bookId"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>
          <label className="block mb-1" htmlFor="bookLabel">
            bookLabel
          </label>
          <textarea
            id="bookLabel"
            name="bookLabel"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>

          <label className="block mb-1" htmlFor="bookName">
            bookName
          </label>
          <textarea
            id="bookName"
            name="bookName"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>

          <label className="block mb-1" htmlFor="author">
            author
          </label>
          <textarea
            id="author"
            name="author"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>

          <label className="block mb-1" htmlFor="publisher">
            publisher
          </label>
          <textarea
            id="publisher"
            name="publisher"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>

          <label className="block mb-1" htmlFor="category">
            category
          </label>
          <textarea
            id="category"
            name="category"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>

          <label className="block mb-1" htmlFor="types">
            types
          </label>
          <textarea
            id="types"
            name="types"
            rows="1"
            className="w-full h-20 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            required
          ></textarea>
        </div>
        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
}
