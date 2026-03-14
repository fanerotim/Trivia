import { type CurrentAndTotalQuestions } from "./types"

export const QuestionsCounter = ({currentQuestion, totalQuestions}: CurrentAndTotalQuestions) => {
    return (
        <div>
            <p>
                <span>{currentQuestion}</span>
                out of
                <span>{totalQuestions}</span>
            </p>
        </div>
    )
}