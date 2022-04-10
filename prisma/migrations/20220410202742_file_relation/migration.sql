/*
  Warnings:

  - Added the required column `fileId` to the `programming_language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileId` to the `stack` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_programming_language" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileId" TEXT NOT NULL,
    CONSTRAINT "programming_language_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "file" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_programming_language" ("createdAt", "id", "link", "name", "updatedAt") SELECT "createdAt", "id", "link", "name", "updatedAt" FROM "programming_language";
DROP TABLE "programming_language";
ALTER TABLE "new_programming_language" RENAME TO "programming_language";
CREATE UNIQUE INDEX "programming_language_name_key" ON "programming_language"("name");
CREATE UNIQUE INDEX "programming_language_fileId_key" ON "programming_language"("fileId");
CREATE TABLE "new_stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileId" TEXT NOT NULL,
    CONSTRAINT "stack_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "file" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_stack" ("createdAt", "id", "link", "name", "updatedAt") SELECT "createdAt", "id", "link", "name", "updatedAt" FROM "stack";
DROP TABLE "stack";
ALTER TABLE "new_stack" RENAME TO "stack";
CREATE UNIQUE INDEX "stack_fileId_key" ON "stack"("fileId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
