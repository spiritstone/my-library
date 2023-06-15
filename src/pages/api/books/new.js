import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { bookLabel, bookName, author, publisher, category, types } =
      req.body;
    try {
      const book = await prisma.Book.create({
        data: {
          bookLabel,
          bookName,
          author,
          publisher,
          category,
          types,
        },
      });
      res.status(201).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
