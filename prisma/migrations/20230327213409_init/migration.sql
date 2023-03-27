-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_userId_userName_fkey";

-- DropIndex
DROP INDEX "User_id_userName_key";

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
