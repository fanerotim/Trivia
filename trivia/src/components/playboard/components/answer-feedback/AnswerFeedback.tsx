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
                    ?
                    <span

                    >
                        {/* the code &#39; stands for an apostrohpe */}
                        That&#39;s right!
                    </span>
                    :
                    <>
                        <span
                            className='answer__feedback__text'
                        >
                            Not quite right. Correct answer is:
                        </span>
                        < span
                            className='answer__feedback__text__correct__answer'
                        >
                            {decodeHTMLEntity(correctAnswer)}

                        </span>
                    </>
                }
            </p >
        </>
    )
}