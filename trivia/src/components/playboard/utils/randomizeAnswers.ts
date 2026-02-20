import { type QuestionData } from "../../../requester/types";

export const randomizeAnswers = (questionData: QuestionData) => {

    let answers: string[] = [questionData.correct_answer, ...questionData.incorrect_answers];
    const answerCount = answers.length;

    for (let i = 0; i < answerCount; i++) {
        const randomNum = generateRandomNumber(answerCount);

        switch (randomNum) {
            case 0:
                // simply reverse order of array elements
                answers = answers.reverse();
                break;
            case 1:
                // remove last element of answers array and place it at index 1
                const poppedElement: string = answers.pop()!;
                answers.splice(randomNum, 0, poppedElement)
                break;
            case 2:
                // remove first element of answers array and place it at the end of the array
                const unshiftedElement: string = answers.shift()!;
                answers.push(unshiftedElement);
                break;
            case 3:
                // remove last element and place it at a randomly generated index
                const element = answers.pop()!;
                const index = generateRandomNumber(answerCount);
                answers.splice(index, 0, element);
                break;
        }
    }
    return answers;
}

const generateRandomNumber = (count: number) => {
    const num = Math.floor(Math.random() * count);
    return num;
}