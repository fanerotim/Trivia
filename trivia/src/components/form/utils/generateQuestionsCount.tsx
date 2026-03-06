export const generateQuestionsCount = () => {
    
    let questionsCount: number[] = [];
    questionsCount.length = 50;
    questionsCount.fill(1, 9, 50);

    return {
        questionsCount
    };
}
