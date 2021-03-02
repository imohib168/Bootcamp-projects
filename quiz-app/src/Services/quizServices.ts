import { Quiz, QuizQuestion } from './../Types'

const shuffleAnswersArray = (array: any[]) => (
    [...array].sort(() => Math.random() - 0.5)
)

export const getQuizDetails = async (totalQuestions: number, level: string): Promise<Quiz[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    const { results } = await res.json();
    const quiz: Quiz[] = results.map((questionObj: QuizQuestion) => {
        return {
            question: questionObj.question,
            correct_answer: questionObj.correct_answer,
            options: shuffleAnswersArray([...questionObj.incorrect_answers, questionObj.correct_answer])
        }
    })
    return quiz;
}