import React, { useEffect, useState } from 'react';
import { FormEvent } from 'react';
import QuestionCard from './Components/QuestionCard';
import { quizServices } from './Services/quizServices';
import { Quiz } from './Types';
import './App.css';

const App = () => {

    const [quizQuestions, setQuizQuestions] = useState<Quiz[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [gameOver, setGameOver] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data: Quiz[] = await quizServices(10, 'easy');
            setQuizQuestions(data);
            // localStorage.setItem("users", JSON.stringify(data));
        }
        fetchData()
        // .then((resp) => console.log(resp))
        // .catch(() => {
        //     let collection = localStorage.getItem('users') || '{}';
        //     setQuizQuestions(JSON.parse(collection));
        // })
    }, [])

    const handleSubmit = (e: FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();

        const currQues: Quiz = quizQuestions[currentQuestion];
        if (userAns === currQues.correct_answer) {
            setScore(score + 1);
        }

        if (quizQuestions.length - 1 !== currentQuestion) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    }

    const againStartQuiz = () => {
        setGameOver(true);
        setShowResult(false);
        setCurrentQuestion(0);
        setScore(0);
    }

    const gameStart = () => setGameOver(false)

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