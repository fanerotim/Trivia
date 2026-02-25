export const classGenerator = (
    value: string,
    userAnswer: string | boolean,
    isCorrect: boolean | null,
    isSubmitted: boolean)
    : string => {

    let className = '';

    className = value === userAnswer ? 'selected_answer' : '';

    if (isSubmitted) {
        className = userAnswer === value && isCorrect === true
            ? 'correct_answer'
            : userAnswer === value && isCorrect === false ? 'incorrect_answer' : ''
    }

    return className;
}