export const generateQuestionsCount = () => {
    
    let numberOfQuestionsCount: number[] = [];
    numberOfQuestionsCount.length = 50;
    numberOfQuestionsCount.fill(1, 9, 50);

    return {
        numberOfQuestionsCount
    };
}
