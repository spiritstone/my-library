import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const book = await prisma.book.findUnique({
      where: {
        bookId: parseInt(id),
      },
    });

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
