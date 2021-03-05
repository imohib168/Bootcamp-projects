import React, { useState } from 'react';
import { QuizQuestionProps } from './../Types';

const QuestionCard: React.FC<QuizQuestionProps> = ({ question, options, callback }) => {

    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handelSelection = (e: any) => setSelectedAnswer(e.target.value);

    return (
        <div className="questionCard">
            <h3 className='question' dangerouslySetInnerHTML={{ __html: question }} />
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAnswer)}>
                {options?.map((option: string, ind: number) => (
                    <div key={ind}>
                        <label className="label">
                            <input
                                type="radio"
                                name="opt"
                                required
                                value={option}
                                onChange={handelSelection}
                                checked={selectedAnswer === option}
                            />
                            <span className='option' dangerouslySetInnerHTML={{ __html: option }} />
                        </label>
                    </div>
                ))}
                <div className="btnWrapper">
                    <button className='nextBtn'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default QuestionCard;
