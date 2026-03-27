export const generateSummaryHeading = (score: number, questions__count: number) => {
    let summaryHeadingText;

    const scorePercentage = (score / questions__count) * 100;

    if (scorePercentage < 30) {
        summaryHeadingText = 'I am sure you could do better!'
    } else if (scorePercentage > 50 && scorePercentage < 70) {
        summaryHeadingText = 'That was a strong game!'
    } else {
        summaryHeadingText = 'Good effort!'
    }

    return {
        summaryHeadingText
    }
}