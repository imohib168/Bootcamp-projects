import React, { FormEvent, useState } from 'react';
import { QuizQuestionProps } from './../Types';

const QuestionCard: React.FC<QuizQuestionProps> = ({ options, question, callback }) => {

    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleSelection = (e: any) => setSelectedAnswer(e.target.value);

    return (
        <div className='questionCard'>
            <h3 className='question' dangerouslySetInnerHTML={{ __html: question }} />
            <form onSubmit={(e: FormEvent<EventTarget>) => callback(e, selectedAnswer)}>
                {options.map((option: string, ind: number) => (
                    <div key={ind}>
                        <label className='label'>
                            <input
                                type="radio"
                                name="opt"
                                required
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={handleSelection}
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
