import { FormEvent } from "react"

export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiz = {
    question: string
    answer: string
    option: string[]
    correct_answer: string
}

export type QuizProps = {
    options: string[]
    question: string
    callback: (e: FormEvent<EventTarget>) => void;
}
