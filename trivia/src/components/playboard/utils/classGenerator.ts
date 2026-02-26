export const classGenerator = (
    value: string,
    userAnswer: string,
    isCorrect: boolean | null,
    isSubmitted: boolean)
    : string => {

    let className = '';

    className = value === userAnswer.trim() ? 'selected_answer' : '';

    if (isSubmitted) {
        className = userAnswer.trim() === value && isCorrect === true
            ? 'correct_answer'
            : userAnswer.trim() === value && isCorrect === false ? 'incorrect_answer' : ''
    }

    return className;
}