/*
  Warnings:

  - Added the required column `authorId` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boxCount` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "boxCount" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ClerkId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_ClerkId_key" ON "User"("ClerkId");

-- AddForeignKey
ALTER TABLE "Art" ADD CONSTRAINT "Art_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
