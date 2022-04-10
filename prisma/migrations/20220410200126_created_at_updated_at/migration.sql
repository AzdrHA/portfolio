-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileId" TEXT NOT NULL,
    CONSTRAINT "link_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "file" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_link" ("fileId", "id", "link", "name") SELECT "fileId", "id", "link", "name" FROM "link";
DROP TABLE "link";
ALTER TABLE "new_link" RENAME TO "link";
CREATE UNIQUE INDEX "link_fileId_key" ON "link"("fileId");
CREATE TABLE "new_programming_language" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_programming_language" ("createdAt", "id", "link", "name", "updatedAt") SELECT "createdAt", "id", "link", "name", "updatedAt" FROM "programming_language";
DROP TABLE "programming_language";
ALTER TABLE "new_programming_language" RENAME TO "programming_language";
CREATE UNIQUE INDEX "programming_language_name_key" ON "programming_language"("name");
CREATE TABLE "new_stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_stack" ("id", "link", "name") SELECT "id", "link", "name" FROM "stack";
DROP TABLE "stack";
ALTER TABLE "new_stack" RENAME TO "stack";
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_user" ("createdAt", "email", "id", "password", "updatedAt") SELECT "createdAt", "email", "id", "password", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE TABLE "new_file" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_file" ("createdAt", "id", "name", "path", "size", "type", "updatedAt") SELECT "createdAt", "id", "name", "path", "size", "type", "updatedAt" FROM "file";
DROP TABLE "file";
ALTER TABLE "new_file" RENAME TO "file";
CREATE TABLE "new_experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "where" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_experience" ("createdAt", "date", "description", "id", "name", "updatedAt", "where") SELECT "createdAt", "date", "description", "id", "name", "updatedAt", "where" FROM "experience";
DROP TABLE "experience";
ALTER TABLE "new_experience" RENAME TO "experience";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
