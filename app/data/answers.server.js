
import { prisma } from "./database.server";

export async function addAnswer(answerData, userId, userName) {
    try {
        return await prisma.answer.create({
            data: {
                playerQuestion1: answerData.playerQuestion1,
                playerQuestion2: answerData.playerQuestion2,
                characterQuestion1: answerData.characterQuestion1,
                characterQuestion2: answerData.characterQuestion2,
                user: { connect: { id: userId } },
                userName: userName
            }
        })
    } catch (error) {
        console.log(error.message);
        throw new Error('Failed to submit answer')
    }
}

export async function getAnswers() {
    try {
        const answers = await prisma.answer.findMany({
            orderBy: { dateAdded: 'desc' },
        });
        return answers
    } catch (error) {
        throw new Error('Failed to get answers.')
    }
}
export async function getAnswersByUserId(userId) {
    try {
        const answers = await prisma.answer.findMany({
            where: { userId },
            orderBy: { dateAdded: 'desc' }
        })
        return answers
    } catch (error) {
        throw new Error('Failed to get answers.')
    }
}
