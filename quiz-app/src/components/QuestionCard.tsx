import React from 'react';
import { QuizProps } from './../Types/quizTypes';

const QuestionCard: React.FC<QuizProps> = ({ options, question, callback }) => {

    console.log(options, question);

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <form onSubmit={callback}>
                {options.map((option: string, ind: number) => (
                    <div key={ind}>
                        <label>
                            <input type="radio" name="opt" value={option} />
                            <span dangerouslySetInnerHTML={{ __html: option }} />
                        </label>
                        {/* <button key={ind} dangerouslySetInnerHTML={{ __html: option }} /> */}
                    </div>
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default QuestionCard;
