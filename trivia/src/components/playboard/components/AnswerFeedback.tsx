type State = {
    isCorrect: boolean | null,
    correctAnswer: string
}

export const AnswerFeedback = ({isCorrect, correctAnswer}: State) => {

    return (
        <>
            <h1>{isCorrect ? 'Well done!' : `Not quite right. Correct answer is: ${correctAnswer}`}</h1>
        </>
    )
}