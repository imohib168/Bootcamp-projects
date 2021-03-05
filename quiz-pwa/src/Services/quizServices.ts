// https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple

import { QuizQuestion, Quiz } from './../Types';

const shuffledArray = (array: any[]) => (
    [...array].sort(() => Math.random() - 0.5)
)

export const quizServices = async (totalQuestions: number, level: string): Promise<Quiz[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    const { results } = await response.json();
    const data: Quiz[] = results.map((questionObj: QuizQuestion) => {
        return {
            question: questionObj.question,
            correct_answer: questionObj.correct_answer,
            options: shuffledArray([...questionObj.incorrect_answers, questionObj.correct_answer]),
        }
    })
    return data;
}