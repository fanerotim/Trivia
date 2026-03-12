import './AnswerFeedback.scss';
import { type FeedbackAnswer } from "./types";
import { decodeHTMLEntity } from '../../utils/decodeHTMLEntity';

export const AnswerFeedback = ({ isCorrect, correctAnswer }: FeedbackAnswer) => {

    return (
        <>
            <p
                className="answer__feedback__text"
            >
                {isCorrect
                    ? 'Well done!'
                    : 
                    <>
                        Not quite right. Correct answer is: 
                            <span
                                className='answer__feedback__text__correct__answer'
                            >
                                {decodeHTMLEntity(correctAnswer)}
                            </span>
                    </>  
                }
            </p>
        </>
    )
}