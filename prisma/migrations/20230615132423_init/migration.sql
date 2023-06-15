/*
  Warnings:

  - You are about to drop the column `writer` on the `Book` table. All the data in the column will be lost.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "bookId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookLabel" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "types" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Book" ("bookId", "bookLabel", "bookName", "category", "createdAt", "publisher", "types", "updatedAt") SELECT "bookId", "bookLabel", "bookName", "category", "createdAt", "publisher", "types", "updatedAt" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
