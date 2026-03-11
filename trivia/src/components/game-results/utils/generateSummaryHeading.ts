export const generateSummaryHeading = (score: number, questions__count: number) => {
    let summaryHeadingText;

    const scorePercentage = (score / questions__count) * 100;

    if (scorePercentage < 30) {
        summaryHeadingText = 'You could do better!'
    } else if (scorePercentage > 50 && scorePercentage < 70) {
        summaryHeadingText = 'That was a strong game!'
    } else {
        summaryHeadingText = 'You absolutely nailed it!'
    }

    return {
        summaryHeadingText
    }
}