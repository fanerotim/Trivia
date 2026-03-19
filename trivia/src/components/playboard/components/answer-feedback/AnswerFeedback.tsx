import './AnswerFeedback.scss';
import { type FeedbackAnswer } from "./types";
import { decodeHTMLEntity } from '../../utils/decodeHTMLEntity';

export const AnswerFeedback = ({ isCorrect, correctAnswer, isSubmitted }: FeedbackAnswer) => {

    return (
        <div
            className={
                isSubmitted 
                    ? 'answer__feedback__container answer__feedback__container__submitted'
                    : 'answer__feedback__container'}
        >
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
                            Close, but incorrect. Right answer is:
                        </span>
                        < span
                            className='answer__feedback__text__correct__answer'
                        >
                            {decodeHTMLEntity(correctAnswer)}

                        </span>
                    </>
                }
            </p >
        </div>
    )
}