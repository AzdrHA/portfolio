/*
  Warnings:

  - Added the required column `fileId` to the `link` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "file" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    CONSTRAINT "link_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "file" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_link" ("id", "link", "name") SELECT "id", "link", "name" FROM "link";
DROP TABLE "link";
ALTER TABLE "new_link" RENAME TO "link";
CREATE UNIQUE INDEX "link_fileId_key" ON "link"("fileId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
