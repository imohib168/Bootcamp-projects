import React, { FormEvent, useEffect, useState } from 'react'
import QuestionCard from './components/QuestionCard';
import { getQuizDetails } from './Services/quizService';
import { Quiz } from './Types/quizTypes';
// import QuestionCard from './Components/QuestionCard';


const App = () => {

    let [quiz, setQuiz] = useState<Quiz[]>([])
    let [currentQuestion, setCurrentQuestion] = useState(0);

    console.log(quiz);

    useEffect(() => {
        async function fetchData() {
            const questions: Quiz[] = await getQuizDetails(5, 'easy');
            setQuiz(questions)
        }
        fetchData();
    }, []);

    const handleSubmit = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        if (quiz.length - 1 !== currentQuestion)
            setCurrentQuestion(currentQuestion + 1);
        else
            alert("Quiz Completed");
        // setCurrentQuestion(0);
    }

    return (
        <div>
            {!quiz.length ? (
                <div>Loading...</div>
            ) : (
                <QuestionCard
                    options={quiz[currentQuestion].option}
                    question={quiz[currentQuestion].question}
                    callback={handleSubmit}
                />
            )}
        </div>
    )
}

export default App;
