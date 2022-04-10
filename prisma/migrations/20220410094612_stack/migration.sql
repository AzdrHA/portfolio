/*
  Warnings:

  - Added the required column `link` to the `programming_language` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_programming_language" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_programming_language" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "programming_language";
DROP TABLE "programming_language";
ALTER TABLE "new_programming_language" RENAME TO "programming_language";
CREATE UNIQUE INDEX "programming_language_name_key" ON "programming_language"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
