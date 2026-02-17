export const generateQuestionsArray = () => {
    
    let numberOfQuestionsArr: number[] = [];
    numberOfQuestionsArr.length = 50;
    numberOfQuestionsArr.fill(1, 9, 50);

    return {
        numberOfQuestionsArr
    };
}
