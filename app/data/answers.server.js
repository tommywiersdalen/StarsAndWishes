import { prisma } from "./database.server";

export async function addAnswer(answerData, userId) {
    try {
        return await prisma.answer.create({
            data: {
                playerQuestion1: answerData.playerQuestion1,
                playerQuestion2: answerData.playerQuestion2,
                characterQuestion1: answerData.characterQuestion1,
                characterQuestion2: answerData.characterQuestion2,
                User: { connect: { id: userId } }
            }
        })
    } catch (error) {
        throw new Error('Failed to submit answer')
    }
}