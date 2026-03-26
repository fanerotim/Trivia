import './QuestionsCounter.scss';
import { type CurrentAndTotalQuestions } from "./types"

export const QuestionsCounter = ({currentQuestion, totalQuestions}: CurrentAndTotalQuestions) => {
    return (
        <div
            className="questions__counter__container"
        >
            <p
                className="questions__counter__container__text"
            >
                <span
                    className="questions__counter__container__text__currentQuestion"
                >
                    Question {currentQuestion}
                </span>
                out of
                <span
                    className="questions__counter__container__text__totalQuestions"
                >
                    {totalQuestions}
                </span>
            </p>
        </div>
    )
}