import React, { FormEvent, useEffect, useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { getQuizDetails } from './Services/quizServices';
import { Quiz } from './Types'

import './App.css'

// https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple 

const App = () => {

    const [quizQuestions, setQuizQuestions] = useState<Quiz[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [gameOver, setGameOver] = useState(true);

    console.log(quizQuestions);

    useEffect(() => {
        const fetchData = async () => {
            const questions: Quiz[] = await getQuizDetails(10, 'easy');
            setQuizQuestions(questions);
        }
        fetchData();
    }, [])

    const handleSubmit = (e: FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();

        const currQuest: Quiz = quizQuestions[currentQuestion];
        if (userAns === currQuest.correct_answer)
            setScore(score + 1);

        if (quizQuestions.length - 1 !== currentQuestion)
            setCurrentQuestion(currentQuestion + 1);
        else {
            setShowResult(true);
        }
    }

    const againStartQuiz = () => {
        setGameOver(true);
        setShowResult(false);
        setCurrentQuestion(0);
        setScore(0);
    }

    const gameStart = () => {
        setGameOver(false);
    }

    return (
        <>
            {gameOver ? (
                <button className='submitBtn' onClick={gameStart}>Start Quiz</button>
            ) : (
                <>
                    {!showResult ? (
                        <div className='mainContainer'>
                            <div className="main">
                                <h1>Quiz Application</h1>
                                <h2>
                                    Question: {currentQuestion + 1}/{quizQuestions.length}
                                </h2>
                            </div>
                            {
                                !quizQuestions.length ? (
                                    <div>Loading...</div>
                                ) : (
                                    <QuestionCard
                                        options={quizQuestions[currentQuestion].options}
                                        question={quizQuestions[currentQuestion].question}
                                        callback={handleSubmit}
                                    />
                                )
                            }
                        </div>
                    ) : (
                        <div className='scoreCard'>
                            <h2>Your Score: {score}/{quizQuestions.length} </h2>
                            <button className='againStartBtn' onClick={againStartQuiz}>Again Start Quiz</button>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default App;