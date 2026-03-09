import './AnswerFeedback.scss';
import { type FeedbackAnswer } from "./types";

export const AnswerFeedback = ({ isCorrect, correctAnswer }: FeedbackAnswer) => {

    return (
        <>
            <h1
                className="answer__feedback__text"
            >
                {isCorrect
                    ? 'Well done!'
                    : `Not quite right. Correct answer is: ${correctAnswer}`}
            </h1>
        </>
    )
}