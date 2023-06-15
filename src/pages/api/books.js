// Next.js API 경로
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const books = await prisma.book.findMany();
      res.status(200).json(books);
    } catch (error) {
      console.error("도서를 가져오는 중 오류 발생:", error);
      res.status(500).json({ error: "도서를 가져오는 데 실패했습니다" });
    }
  } else {
    res.status(405).json({ error: "허용되지 않는 메서드입니다" });
  }
}
