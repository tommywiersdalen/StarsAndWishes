-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "playerQuestion1" TEXT NOT NULL,
    "playerQuestion2" TEXT NOT NULL,
    "characterQuestion1" TEXT NOT NULL,
    "characterQuestion2" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "isDM" BOOLEAN NOT NULL DEFAULT false,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_userName_key" ON "User"("id", "userName");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_userId_userName_fkey" FOREIGN KEY ("userId", "userName") REFERENCES "User"("id", "userName") ON DELETE RESTRICT ON UPDATE CASCADE;
